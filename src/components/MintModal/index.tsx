import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/future/image';
import { Dispatch, Fragment, SetStateAction, useContext, useRef, useState } from 'react';
import { ContractContext } from '../ContractContext';
import { merchTiles } from '../NonFungibleMerch/MerchTile';
import Notification from '../Notification';
import MintState from './MintState';
import ShareState from './ShareState';
import TermsState from './TermsState';


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

  const { setErrorMessage, resetTransaction } = useContext(ContractContext)

  const onClose = () => {
    setDialogStep(0);
    setOpen(undefined);
    setErrorMessage(undefined);
    resetTransaction();
  }

  const merchTile = merchTiles[selectedMerchTile || 0]

  const getDialogStep = (step: number) => {
    switch (step) {
      case (0):
        return <ShareState merchTile={merchTile} selectedMerchTile={selectedMerchTile} setDialogStep={setDialogStep} />
      case (1):
        return <TermsState setDialogStep={setDialogStep} />
      case (2):
        return <MintState merchTile={merchTile} selectedMerchTile={selectedMerchTile} />
    }
  }

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
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0 w-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className='relative flex-1'>
                <Notification />
                <Dialog.Panel className="relative w-[90%] mx-auto sm:w-[64rem] transform overflow rounded-lg text-left shadow-xl transition-all sm:my-8 sm:max-w-4xl text-white border border-[#DF30A8] backdrop-blur-md">
                  <div className='absolute top-4 right-4 sm:-top-8 sm:-right-10 text-white z-50' onClick={onClose}>
                    <Image src='/icons/close.svg' height='30' width='30' alt='close' className='cursor-pointer' />
                  </div>
                  {getDialogStep(dialogStep)}
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
