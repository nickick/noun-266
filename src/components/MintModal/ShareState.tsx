import { Dialog } from '@headlessui/react';
import Image from 'next/future/image';
import { Dispatch, SetStateAction, useRef } from 'react';

const ShareState = ({
  merchTile,
  selectedMerchTile,
  setDialogStep,
}: {
  merchTile?: {
    title: string,
    image: string,
    price: string,
  },
  selectedMerchTile?: number,
  setDialogStep: Dispatch<SetStateAction<number>>,
}) => {
  const cancelButtonRef = useRef(null);

  return (
    <div className="bg-[rgba(26,0,2,0.6)] px-4 pt-4 pb-4 sm:p-16 sm:pb-12">
      <div className="sm:flex sm:items-start sm:justify-between">
        <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left sm:w-1/2">
          <Dialog.Title
            as="h3"
            className="text-4xl leading-10 font-bold text-white"
          >
            Share and mint!
          </Dialog.Title>
          <div className="mt-6 space-y-4">
            <p className='leading-8'>
              Noun 266 is becoming one of the most spectacular music artist in the world. This is a global takeover.
              <br /><br />
              Move over Chainsmokers. It&apos;s time to add a Noun to the headlines. Help to spread the word in order to get Noun 266 playing shows around the world.
            </p>
          </div>
          <button
            type="button"
            className="mt-3 inline-flex justify-center border border-gray-300 bg-white px-8 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-6 sm:w-auto sm:text-sm"
            onClick={() => {
              setDialogStep(1)
              window.open('https://twitter.com/share?text=DJ%20%40Noun_266%20just%20dropped%20his%20latest%20single%21', '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
            }}
            ref={cancelButtonRef}
          >
            Share tweet
          </button>
          <p className='underline cursor-pointer mt-6 mb-6 sm:mb-0' onClick={() => setDialogStep(1)}>
            No sharing, I just want the free mint
          </p>
        </div>
        {(selectedMerchTile !== undefined && merchTile) && (
          <div className='space-y-4'>
            <Image src={merchTile.image} alt={merchTile.title} width='312' height='312' className='rounded-[40px]' />
            <div>
              <p className='text-2xl'>{merchTile.title}</p>
              <p>{merchTile.price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShareState