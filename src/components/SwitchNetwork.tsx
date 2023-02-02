import { useContext } from 'react';

import { ContractContext } from './ContractContext';
import isDebug from './utils/debug';

const SwitchNetwork = () => {
  const { switchNetwork, setSwitchNetwork } = useContext(ContractContext);

  const handleClose = () => {
    window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId: isDebug() ? '0x5' : '0x1',
      }],
    });

    setSwitchNetwork(false);
  };

  return (
    <div className="bg-indigo-900 text-center py-4 lg:px-4 z-[1000] w-full top-0 left-0 relative" onClick={handleClose}>
      <div className="p-2 px-4 bg-indigo-900 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        {switchNetwork && (
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Switch Network</span>
        )}
        <span className="font-semibold mr-2 sm:text-left flex-auto text-sm md:text-lg">
          {isDebug() && switchNetwork ?
            isDebug()
              ? 'Switch to Goerli for debugging'
              : 'Detected test network, switch to Ethereum Mainnet to migrate'
            : 'Merch only available for a limited time! Until 11:59:59 PM 2/8/23.'
          }
        </span>
      </div>
    </div>
  );
};

export default SwitchNetwork;
