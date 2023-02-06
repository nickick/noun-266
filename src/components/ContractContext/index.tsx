/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import { BigNumber, ethers } from 'ethers';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import useInterval from '../useInterval';
import isDebug from '../utils/debug';
import contractAbi from './contractAbi.json';

// eslint-disable-next-line no-shadow
export const enum ContractStatus {
  Paused,
  Open,
  Closed,
}

interface ContextInterface {
  connectWallet: () => void;
  contractStatus: ContractStatus;
  currentAccount: `0x${string}` | undefined;
  errorMessage: string | undefined;
  hasMintedNFT: boolean;
  mintPublic: (tokenType: number) => Promise<false | ethers.ContractReceipt>;
  resetTransaction: () => void;
  setErrorMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSwitchNetwork: React.Dispatch<React.SetStateAction<boolean>>;
  switchNetwork: boolean;
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
  const [errorMessage, setErrorMessage] = useState<string>();
  const [contractStatus, setContractStatus] = useState<ContractStatus>(0);
  const [transactionHash, setTransactionHash] = useState<string>();
  const [transactionResult, setTransactionResult] = useState<ethers.ContractReceipt>();
  const [switchNetwork, setSwitchNetwork] = useState(false);
  const [chainId, setChainId] = useState<number>();
  const [hasMintedNFT, setHasMintedNFT] = useState(false);

  const resetTransaction = () => {
    setTransactionResult(undefined);
    setTransactionHash(undefined);
  }

  useEffect(() => {
    if (window && window.ethereum) {

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      })
      window.ethereum.on("accountsChanged", (accounts: `0x${string}`[]) => {
        setCurrentAccount(accounts[0]);
      })
    }
  })

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

    // todo: connect message when wallet connect refused

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
          window.location.replace(`https://metamask.app.link/dapp/${process.env.NEXT_PUBLIC_HOSTNAME}`);
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
    window.debugMode = Boolean(process.env.NEXT_PUBLIC_DEBUG || 'true');
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


  const mintPublic = async (tokenTypeIndex: number) => {
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
        const publicMint: ethers.ContractTransaction = await contract.mintPublic(tokenTypeIndex);

        setTransactionHash(publicMint.hash);
        const publicMinted = await publicMint.wait(2);
        setTransactionResult(publicMinted);
        return publicMinted;
      }

      return false;
    } catch (error) {
      console.error('mintPublic');
      handleError(error);
      return false;
    }
  };

  const checkHasMinted = async () => {
    const { ethereum } = window;

    try {
      if (!ethereum) {
        // eslint-disable-next-line no-alert
        alert('Please install MetaMask or another wallet provider.');
        return false;
      }

      if (currentAccount) {
        const contract = getContract();
        const status = await contract.addressHasMinted(currentAccount);
        setHasMintedNFT(status);
      }
    } catch (error) {
      console.error('mintPublic');
      handleError(error);
      return false;
    }
  }

  useEffect(() => {
    if (switchNetwork) return;

    checkIfWalletIsConnected();
    if (currentAccount) {
      getContractStatus();
      checkHasMinted();
    }
  }, [checkIfWalletIsConnected, currentAccount, getContractStatus, switchNetwork, checkHasMinted]);

  useInterval(() => {
    if (currentAccount && !switchNetwork) {
      getContractStatus();
    }
  }, 5000);

  return (
    <ContractContext.Provider value={{
      connectWallet,
      contractStatus,
      currentAccount,
      errorMessage,
      hasMintedNFT,
      mintPublic,
      resetTransaction,
      setErrorMessage,
      setSwitchNetwork,
      switchNetwork,
      transactionHash,
      transactionResult,
    }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractContextProvider;
