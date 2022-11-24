import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/future/image';
import { Dispatch, Fragment, SetStateAction, useContext, useRef, useState } from 'react';
import { merchTiles } from '../NonFungibleMerch/MerchTile';
import ShareState from './ShareState';
import MintState from './MintState';

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
  const [dialogStep, setDialogStep] = useState(0);

  const onClose = () => {
    setDialogStep(0);
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
                  {
                    dialogStep === 0 ? (
                      <ShareState merchTile={merchTile} selectedMerchTile={selectedMerchTile} setDialogStep={setDialogStep} />
                    ) : (
                      <MintState merchTile={merchTile} selectedMerchTile={selectedMerchTile} />
                    )
                  }
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
