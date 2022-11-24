/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import { BigNumber, ethers, providers } from 'ethers';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import keccak256 from 'keccak256';
import { MerkleTree } from 'merkletreejs';
import contractAbi from './contractAbi.json';
import allowlist from './allowList.json';
import useInterval from '../useInterval';
import isDebug from '../utils/debug';

// eslint-disable-next-line no-shadow
export const enum ContractStatus {
  Paused,
  Premint,
  Public,
  Closed
}

interface ContextInterface {
  canPremint: boolean;
  connectWallet: () => void;
  contractStatus: ContractStatus;
  currentAccount: `0x${string}` | undefined;
  errorMessage: string | undefined;
  getCanPremint: () => void;
  maxSupply: number;
  mintPublic: (quantity: 1 | 2) => Promise<false | ethers.ContractReceipt>;
  premint: (quantity: 1 | 2) => Promise<false | ethers.ContractReceipt>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setSwitchNetwork: React.Dispatch<React.SetStateAction<boolean>>;
  switchNetwork: boolean;
  totalSupply: number;
  transactionHash?: string;
  transactionResult?: ethers.ContractReceipt;
}

interface ErrorWithMessage {
  message: string;
}

export const ContractContext = createContext<ContextInterface>({} as ContextInterface);

const ContractContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [currentAccount, setCurrentAccount] = useState<`0x${string}`>();
  const [errorMessage, setErrorMessage] = useState('');
  const [canPremint, setCanPremint] = useState(false);
  const [contractStatus, setContractStatus] = useState<ContractStatus>(0);
  const [transactionHash, setTransactionHash] = useState<string>();
  const [transactionResult, setTransactionResult] = useState<ethers.ContractReceipt>();
  const [switchNetwork, setSwitchNetwork] = useState(false);
  const [totalSupply, setTotalSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(1000);
  const [chainId, setChainId] = useState<number>();
  const [price, setPrice] = useState<BigNumber>(BigNumber.from('200000000000000000'));

  function handleError(error: unknown) {
    let message = 'Unknown Error';
    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === 'object' && error) {
      if ('message' in error) {
        const errorWithMessage = error as ErrorWithMessage;
        message = errorWithMessage.message;
        if (errorWithMessage.message.indexOf('Transaction reverted without a reason string') > -1) {
          message = '';
        }
      }
    }

    console.error(error);
    setErrorMessage(message);
  }

  const checkIfWalletIsConnected = useCallback(async () => {
    const { ethereum } = window;

    try {
      const accounts = await ethereum?.request({ method: 'eth_accounts' });

      if (accounts?.length) {
        setCurrentAccount(accounts[0]);
      } else {
        // setErrorMessage("No accounts found");
      }
    } catch (error) {
      console.error('checkIfWalletIsConnected');
      handleError(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAccount]);

  const connectWallet = async () => {
    const { ethereum } = window;

    try {
      if (!ethereum) {
        if (window.innerWidth < 800) {
          window.location.replace('https://metamask.app.link/dapp/danataylor.io/mint');
        }
      }

      const accounts = await ethereum?.request({ method: 'eth_requestAccounts' });

      if (accounts) {
        setCurrentAccount(accounts[0]);
      }
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;

      console.error(message);
      setErrorMessage(message);
    }
  };

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '';

  function getProvider() {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      return provider;
    }
  }

  const checkDebugChain = async () => {
    window.debug = Boolean(process.env.NEXT_PUBLIC_DEBUG || 'true');
    const provider = await getProvider();
    const { chainId: chainIdDetected } = await provider?.getNetwork() || {};
    setChainId(chainIdDetected);

    if (process.env.NEXT_PUBLIC_DEBUG && isDebug() && chainId && chainId !== 5) { // Goerli
      setSwitchNetwork(true);
    }
    if (process.env.NEXT_PUBLIC_DEBUG && !isDebug() && chainId && chainId !== 1) { // Mainnet
      setSwitchNetwork(true);
    }
  };

  useEffect(() => {
    checkDebugChain();
  }, [chainId, checkDebugChain]);

  // fetch contract Contract
  const getContract = () => {
    const provider = getProvider();
    const signer = provider?.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    return contract;
  };

  const getContractStatus = async (): Promise<ContractStatus> => {
    const { ethereum } = window;

    try {
      if (!ethereum) {
        // eslint-disable-next-line no-alert
        alert('Please install MetaMask or another wallet provider.');
        return ContractStatus.Paused;
      }
      const contract = getContract();
      const status = await contract.contractStatus();
      setContractStatus(status);
      return status;
    } catch (error) {
      console.error('getcontractstatus');
      handleError(error);
      return ContractStatus.Paused;
    }
  };

  const getCanPremint = async () => {
    const { ethereum } = window;

    try {
      if (!ethereum) {
        // eslint-disable-next-line no-alert
        alert('Please install MetaMask or another wallet provider.');
        return false;
      }
      if (currentAccount) {
        const contract = getContract();
        const leaves = allowlist.map((obj: { 'Wallet': string }) => keccak256(obj.Wallet));
        const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
        const hexProof = merkleTree.getHexProof(keccak256(currentAccount || ''));
        const canPremintRes = await contract.canPremint(
          currentAccount,
          hexProof,
        );

        setCanPremint(canPremintRes);

        return canPremintRes;
      }

      return false;
    } catch (error) {
      console.error('getCanPremint');
      handleError(error);
      return false;
    }
  };

  const getTotalSupply = async () => {
    const { ethereum } = window;

    try {
      if (!ethereum) {
        // eslint-disable-next-line no-alert
        alert('Please install MetaMask or another wallet provider.');
        return false;
      }
      if (currentAccount) {
        const contract = getContract();

        const totalSupplyRes = await contract.totalSupply();
        setTotalSupply(totalSupplyRes);

        return totalSupplyRes;
      }

      return false;
    } catch (error) {
      console.error('getTotalSupply');
      handleError(error);
      return false;
    }
  };

  const getMaxSupply = async () => {
    const { ethereum } = window;

    try {
      if (!ethereum) {
        // eslint-disable-next-line no-alert
        alert('Please install MetaMask or another wallet provider.');
        return false;
      }
      if (currentAccount) {
        const contract = getContract();

        const maxSupplyRes = await contract._maxSupply();
        setMaxSupply(maxSupplyRes);

        return maxSupplyRes;
      }

      return false;
    } catch (error) {
      console.error('getMaxSupply');
      handleError(error);
      return false;
    }
  };

  const getPrice = async () => {
    const { ethereum } = window;

    try {
      if (!ethereum) {
        // eslint-disable-next-line no-alert
        alert('Please install MetaMask or another wallet provider.');
        return false;
      }
      if (currentAccount) {
        const contract = getContract();

        const priceRes = await contract._price();
        setPrice(priceRes);

        return priceRes;
      }

      return false;
    } catch (error) {
      console.error('getPrice');
      handleError(error);
      return false;
    }
  };

  const premint = async (quantity: 1 | 2) => {
    const { ethereum } = window;
    setTransactionHash(undefined);
    setTransactionResult(undefined);

    try {
      if (!ethereum) {
        // eslint-disable-next-line no-alert
        alert('Please install MetaMask or another wallet provider.');
        return false;
      }

      if (currentAccount) {
        const contract = getContract();
        const leaves = allowlist.map((obj: { 'Wallet': string }) => keccak256(obj.Wallet));
        const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
        const hexProof = merkleTree.getHexProof(keccak256(currentAccount || ''));
        const privateMint: ethers.ContractTransaction = await contract.premint(
          quantity,
          hexProof,
          {
            value: price.mul(quantity),
          },
        );

        setTransactionHash(privateMint.hash);
        const privateMinted = await privateMint.wait(2);
        await getTotalSupply();
        setTransactionResult(privateMinted);
        return privateMinted;
      }

      return false;
    } catch (error) {
      console.error('mintPrivate');
      handleError(error);
      return false;
    }
  };

  const mintPublic = async (quantity: 1 | 2) => {
    const { ethereum } = window;
    setTransactionHash(undefined);
    setTransactionResult(undefined);

    try {
      if (!ethereum) {
        // eslint-disable-next-line no-alert
        alert('Please install MetaMask or another wallet provider.');
        return false;
      }

      if (currentAccount) {
        const contract = getContract();
        const publicMint: ethers.ContractTransaction = await contract.mint(
          quantity,
          {
            value: price.mul(quantity),
          },
        );

        setTransactionHash(publicMint.hash);
        const publicMinted = await publicMint.wait(2);
        await getTotalSupply();
        setTransactionResult(publicMinted);
        return publicMinted;
      }

      return false;
    } catch (error) {
      console.error('mintPrivate');
      handleError(error);
      return false;
    }
  };

  useEffect(() => {
    if (switchNetwork) return;

    checkIfWalletIsConnected();
    if (currentAccount) {
      getContractStatus();
      getCanPremint();
      getPrice();
    }
  }, [checkIfWalletIsConnected, currentAccount, getCanPremint, getContractStatus, getPrice, switchNetwork]);

  useInterval(() => {
    if (currentAccount && !switchNetwork) {
      getTotalSupply();
      getMaxSupply();
      getContractStatus();
    }
  }, 5000);

  return (
    <ContractContext.Provider value={{
      canPremint,
      connectWallet,
      contractStatus,
      currentAccount,
      errorMessage,
      getCanPremint,
      maxSupply,
      mintPublic,
      premint,
      setErrorMessage,
      setSwitchNetwork,
      switchNetwork,
      totalSupply,
      transactionHash,
      transactionResult,
    }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractContextProvider;
