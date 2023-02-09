import { useContext } from 'react';
import { ContractContext, ContractStatus } from './ContractContext';
import shortenAddress from './utils/shortenAddress';

const ConnectButton = ({
  matchMintButton,
  callback
}: {
  matchMintButton?: boolean
  callback?: () => void;
}) => {
  const { connectWallet, currentAccount, getContractStatus } = useContext(ContractContext);
  const onClick = async () => {
    const status = await connectWallet()
    const contractStatus = await getContractStatus()
    if (status === 'success' && (contractStatus === ContractStatus.Open) && callback) {
      callback()
    }
  }

  return (
    <button
      onClick={onClick}
      className={`sm:w-full mx-auto my-6 sm:my-0 px-6 ${matchMintButton ? 'rounded-lg py-4 sm:py-4 w-full' : 'rounded-2xl py-2 sm:py-0 w-1/2'} cursor-pointer text-center bg-[#777777]`}
      disabled
    >
      {!currentAccount
        ? matchMintButton ? 'Mint has closed' : 'Connect'
        : `${shortenAddress(currentAccount)}`
      }
    </button>
  )
}

export default ConnectButton