import { Dialog } from '@headlessui/react';
import Image from 'next/future/image';
import { Dispatch, SetStateAction, useRef } from 'react';

const ShareState = ({
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
  const tweetMessage = `@Noun_266 just released his first single -- "We Can Have Fun".

There's digital merch too, but it's only available for 24 hours!

`

  return (
    <div className="bg-[rgba(26,0,2,0.6)] px-4 pt-4 pb-4 sm:p-10">
      <div className="sm:flex sm:items-start sm:justify-between">
        <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-4xl leading-10 font-bold text-white"
          >
            Collect Noun266 Merch
          </Dialog.Title>
          <div className="mt-6 space-y-4">
            <p className='leading-8'>
              Add limited edition Noun266 merch to your personal collection. It&apos;s completely free (just pay gas).
              <br /><br />
              Before you mint it, Noun266 would greatly appreciate your help in spreading the word on Twitter so he can play more shows around the world.
            </p>
          </div>
          <div className='flex sm:flex-row justify-end space-x-4 mt-10 sm:mt-10'>
            <button
              type="button"
              className="mt-3 inline-flex justify-center border rounded-md border-[#DF30A8] bg-transparent py-4 text-base font-medium text-[#DF30A8] shadow-sm hover:opacity-80 focus:outline-none sm:mt-6 w-44 sm:text-sm"
              onClick={() => {setDialogStep(1)}}
              ref={cancelButtonRef}
            >
              Just mint it
            </button>
            <button
              type="button"
              className="mt-3 inline-flex justify-center border rounded-md border-[#DF30A8] bg-[#DF30A8] py-4 text-base font-medium text-white shadow-sm hover:opacity-80 focus:outline-none sm:mt-6 w-44 sm:text-sm"
              onClick={() => {
                setDialogStep(1)
                window.open(`https://twitter.com/share?text=${encodeURIComponent(tweetMessage)}`, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
              }}
              ref={cancelButtonRef}
            >
              Share the news
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShareState