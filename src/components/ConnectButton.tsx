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
      className="border rounded-2xl w-1/2 sm:w-full mx-auto my-6 sm:my-0 border-white px-4 cursor-pointer text-center"
    >
      {!currentAccount
        ? 'Connect'
        : `${shortenAddress(currentAccount)}`
      }
    </div>
  )
}

export default ConnectButton