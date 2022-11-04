/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/future/image';
import { Dispatch, Fragment, SetStateAction, useRef } from 'react';
import { MerchInfo, merchTiles } from './NonFungibleMerch/Merchtile';

export default function MintModal({
  setOpen,
  open,
  selectedMerchTile,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<number | undefined>>;
  text: string[];
  selectedMerchTile?: number;
}) {
  const cancelButtonRef = useRef(null);
  const onClose = () => {
    setOpen(undefined);
  }

  const merchTile = merchTiles[selectedMerchTile || 0]

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[200]"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 w-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className='relative'>
                <div className='absolute top-2 right-2 sm:-top-4 sm:-right-12 text-white z-50'>
                  <Image src='/icons/close.svg' height='30' width='30' alt='close' />
                </div>
                <Dialog.Panel className="relative sm:w-[64rem] transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:max-w-4xl text-white border border-white backdrop-blur-md">
                  <div className="bg-[rgba(26,0,2,0.6)] px-4 pt-4 pb-4 sm:p-16 sm:pb-12">
                    <div className="sm:flex sm:items-start sm:justify-between">
                      <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left sm:w-1/2">
                        <Dialog.Title
                          as="h3"
                          className="text-4xl leading-10 font-bold text-white"
                        >
                          Come along on our journey!
                        </Dialog.Title>
                        <div className="mt-6 space-y-4 text-sm">
                          <p className='leading-8'>
                            Noun 266 is on a way to becoming the most popular NFT music artist in the world. This is a global takeover.
                            <br />
                            Chainsmokers? Post Malone? It&apos;s time to add a Noun to the headlines. Help to spread the word in order to get the Noun 266 playing on the radio near you.
                          </p>
                        </div>
                        <button
                          type="button"
                          className="mt-3 inline-flex justify-center border border-gray-300 bg-white px-8 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-6 sm:w-auto sm:text-sm"
                          onClick={() => onClose}
                          ref={cancelButtonRef}
                        >
                          Share tweet
                        </button>
                        <p className='underline cursor-pointer mt-6 mb-6 sm:mb-0'>
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
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
