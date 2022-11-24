import { Dialog } from '@headlessui/react';
import Image from 'next/future/image';
import { Dispatch, SetStateAction, useContext, useRef } from 'react';
import { ContractContext, ContractStatus } from '../ContractContext';

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

  const {
    currentAccount, connectWallet, mintPublic
  } = useContext(ContractContext)

  const onClick = () => {
    if (currentAccount) {
      mintPublic(1);
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
            Thank you! Get ready to mint!
          </Dialog.Title>
          <div className="mt-6 space-y-4 text-sm">
            <p className='leading-8'>
              Take a piece of the show with you. Claim this NFT as a token of appreciation from Noun 266.
              <br />
              That way we can know who the true fans are.
            </p>
          </div>
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
              className="mt-3 inline-flex justify-center border border-gray-300 px-8 py-2 text-base font-medium shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-6 sm:w-auto sm:text-sm"
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