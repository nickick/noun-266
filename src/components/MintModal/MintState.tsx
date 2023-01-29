import { Dialog } from '@headlessui/react';
import Image from 'next/future/image';
import Link from 'next/link';
import { useContext, useRef, useState } from 'react';
import { ContractContext } from '../ContractContext';
import TermsAndConditions from './TermsAndConditions';
import TransactionStatus from './TransactionStatus';

const MintState = ({
  merchTile,
  selectedMerchTile,
}: {
  merchTile: {
    title: string,
    image: string,
    price: string,
  },
  selectedMerchTile?: number,
}) => {
  const cancelButtonRef = useRef(null);

  const [checked, setChecked] = useState(false);

  const {
    currentAccount, connectWallet, mintPublic
  } = useContext(ContractContext)

  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleCheck = () => {
    setChecked(!checked)
  }

  const onClick = () => {
    if (currentAccount && selectedMerchTile !== undefined) {
      setTermsAccepted(true);
      // selectedMerchTile is 0 index but NFTs are indexed starting at 1
      mintPublic(selectedMerchTile + 1);
    } else {
      connectWallet();
    }
  }

  return (
    <div className="bg-[rgba(26,0,2,0.6)] px-4 pt-4 pb-4 sm:p-16 sm:pb-12">
      <div className="sm:flex sm:items-start sm:justify-between relative">
        <div className="sm:mt-0 sm:ml-4 sm:text-left sm:w-1/2">
          <Dialog.Title
            as="h3"
            className="text-4xl leading-10 font-bold text-white"
          >
            Time to mint
          </Dialog.Title>
          <video src={merchTile.image} width='312' height='312' className='rounded-[15px] mt-10' autoPlay loop muted />
          <TransactionStatus />
        </div>
        {(selectedMerchTile !== undefined && merchTile) && (
          <div className='space-y-6 text-center flex flex-col items-center justify-center absolute right-0 h-full w-1/2 flex-1'>
            <div className='space-y-2'>
              <p className='text-2xl'>{merchTile.title}</p>
              <p className='text-sm'>{merchTile.price}</p>
            </div>
            <button
              type="button"
              className="mt-3 inline-flex justify-center py-4 rounded-md text-base font-medium shadow-sm bg-[#Df30A8] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-6 sm:w-44 sm:text-sm disabled:cursor-not-allowed"
              onClick={onClick}
              ref={cancelButtonRef}
            >
              {
                currentAccount ? 'Mint' : 'Connect Wallet'
              }
            </button>
            <p className='text-sm italic'>
              Limit 1 per wallet
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MintState