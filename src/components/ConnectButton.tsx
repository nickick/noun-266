import { useContext } from 'react';
import { ContractContext } from './ContractContext';
import shortenAddress from './utils/shortenAddress';

const ConnectButton = ({
  matchMintButton
}: {
  matchMintButton?: boolean
}) => {
  const { connectWallet, currentAccount } = useContext(ContractContext);

  return (
    <div
      onClick={connectWallet}
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