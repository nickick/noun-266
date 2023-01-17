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
      className="border rounded rounded-2xl border-white px-4 py- cursor-pointer"
    >
      {!currentAccount
        ? 'Connect'
        : `${shortenAddress(currentAccount)}`
      }
    </div>
  )
}

export default ConnectButton