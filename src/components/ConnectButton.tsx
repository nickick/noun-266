import { useContext, useState } from 'react';
import { ContractContext } from './ContractContext';
import shortenAddress from './utils/shortenAddress';

const ConnectButton = () => {
  const { connectWallet, currentAccount } = useContext(ContractContext);

  const onConnectWallet = () => {
    if (!currentAccount) {
      connectWallet()
    }
  }

  return (
    <div
      onClick={connectWallet}
      className="rounded-2xl w-1/2 sm:w-full mx-auto my-6 sm:my-0 px-6 py-2 sm:py-0 cursor-pointer text-center bg-[#DF30A8]"
    >
      {!currentAccount
        ? 'Connect'
        : `${shortenAddress(currentAccount)}`
      }
    </div>
  )
}

export default ConnectButton