import { Dialog } from '@headlessui/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { ContractContext } from '../ContractContext';
import useInterval from '../useInterval';
import TransactionStatus from './TransactionStatus';

const SELLOUT_DATE = 1675929599 * 1000;

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

  const {
    currentAccount, connectWallet, hasMintedNFT, mintPublic, transactionHash
  } = useContext(ContractContext)

  const onClick = () => {
    if (currentAccount && selectedMerchTile !== undefined) {
      // selectedMerchTile is 0 index but NFTs are indexed starting at 1
      mintPublic(selectedMerchTile + 1);
    } else {
      connectWallet();
    }
  }

  const [afterDate, setAfterDate] = useState(false)

  useInterval(() => {
    if(Date.now() > SELLOUT_DATE) {
      setAfterDate(true)
    }
  }, 500)

  return (
    <div className="bg-[rgba(26,0,2,0.6)] p-4 py-8 sm:p-12 sm:py-8 sm:pb-12">
      <div className="sm:flex sm:items-start sm:justify-between relative">
        <div className="sm:mt-0 sm:text-left sm:w-1/2">
          <Dialog.Title
            as="h3"
            className="text-4xl leading-10 font-bold text-white"
          >
            Time to mint
          </Dialog.Title>
          <video width='312' height='312' className='rounded-[15px] w-48 sm:w-full mx-auto mt-10' autoPlay loop muted playsInline>
            <source src={`${merchTile.image}.mp4`} type="video/mp4" />
            <source src={`${merchTile.image}.webm`} type="video/webm" />
          </video>
        </div>
        <TransactionStatus />
        {(selectedMerchTile !== undefined && merchTile && !transactionHash) && (
          <div className='space-y-6 text-center flex flex-col items-center justify-center sm:absolute sm:-right-6 h-full sm:w-1/2 flex-1 my-4 mt-12 sm:mt-0'>
            <div className='space-y-2'>
              <p className='text-2xl'>{merchTile.title}</p>
              <p className='text-sm'>{merchTile.price}</p>
            </div>
            <button
              type="button"
              className="mt-3 inline-flex justify-center py-4 rounded-md text-base font-medium shadow-sm bg-[#Df30A8] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-6 w-full sm:w-44 sm:text-sm disabled:cursor-not-allowed"
              onClick={onClick}
              disabled={afterDate || hasMintedNFT}
              ref={cancelButtonRef}
            >
              {
                currentAccount
                  ? hasMintedNFT
                    ? 'Already minted'
                    : afterDate
                      ? 'Sold out'
                      : 'Mint'
                  : 'Connect Wallet'
              }
            </button>
            <p className='text-sm italic'>
              Limit 1 piece of merch per wallet
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MintState