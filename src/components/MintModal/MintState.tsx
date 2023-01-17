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
  merchTile?: {
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
      <div className="sm:flex sm:items-start sm:justify-between">
        <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left sm:w-1/2">
          <Dialog.Title
            as="h3"
            className="text-4xl leading-10 font-bold text-white"
          >
            Get ready to mint!
          </Dialog.Title>
          <div className="mt-6 space-y-4">
            <p className='leading-8'>
              Take a piece of the show with you. Claim this free NFT as a token of appreciation from Noun 266. Just pay gas!
              <br/><br/>
              Limit 1 per wallet, so choose wisely.
            </p>
          </div>
          <TransactionStatus />
        </div>
        {(selectedMerchTile !== undefined && merchTile) && (
          <div className='space-y-4'>
            <Image src={merchTile.image} alt={merchTile.title} width='312' height='312' className='rounded-[40px]' />
            <div>
              <p className='text-2xl'>{merchTile.title}</p>
              <p>{merchTile.price}</p>
            </div>
            <button
              type="button"
              className="mt-3 inline-flex justify-center border border-gray-300 px-8 py-2 text-base font-medium shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-6 sm:w-auto sm:text-sm disabled:cursor-not-allowed"
              onClick={onClick}
              ref={cancelButtonRef}
            >
              {
                currentAccount ? 'Mint' : 'Connect Wallet'
              }
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MintState