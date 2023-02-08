import { useContext } from 'react';
import { ContractContext } from './ContractContext';
import shortenAddress from './utils/shortenAddress';

const ConnectButton = ({
  matchMintButton,
  callback
}: {
  matchMintButton?: boolean
  callback?: () => void;
}) => {
  const { connectWallet, currentAccount } = useContext(ContractContext);
  const onClick = async () => {
    const status = await connectWallet()
    if (status === 'success' && callback) {
      callback()
    }
  }

  return (
    <div
      onClick={onClick}
      className={`sm:w-full mx-auto my-6 sm:my-0 px-6 ${matchMintButton ? 'rounded-lg py-4 sm:py-4 w-full' : 'rounded-2xl py-2 sm:py-0 w-1/2'} cursor-pointer text-center bg-[#DF30A8]`}
    >
      {!currentAccount
        ? matchMintButton ? 'Mint' : 'Connect'
        : `${shortenAddress(currentAccount)}`
      }
    </div>
  )
}

export default ConnectButton