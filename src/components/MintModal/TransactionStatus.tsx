import { ethers } from 'ethers'
import React, { useContext } from 'react'
import { ContractContext } from '../ContractContext'
import shortenAddress from '../utils/shortenAddress'
import Loading from './Loading'
import abi from '../ContractContext/contractAbi.json'

const TransactionStatus = () => {
  const { transactionHash, transactionResult } = useContext(ContractContext)
  const token = parseInt(((transactionResult?.events || [{}])[0].data || [{}]).slice(0,66) as string, 16)
  const tweetMessage = `I just minted some digital merch for @noun_266's new hit song "We Can Have Fun" ⌐▨_▨`

  return (
    <div className='space-y-6 text-center flex flex-col items-center justify-center sm:absolute sm:-right-6 h-full sm:w-1/2 flex-1 my-4 mt-12 sm:mt-0'>
      {
        (transactionHash || transactionResult) && (
          <div className='flex flex-col h-full items-center justify-center w-full flex-1'>
            {transactionHash && (
              <div className='flex items-center justify-center space-x-4'>
                Transaction:
                <a
                  href={`${process.env.NEXT_PUBLIC_ETHERSCAN_HOSTNAME}/tx/${transactionHash}`}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className='underline ml-2'
                >
                  {shortenAddress(transactionHash, 15)}
                </a>
                {!transactionResult && (<Loading />)}
              </div>
            )}
            {transactionResult && (
              <div className='flex flex-col mt-2'>
                <div>{transactionResult.status === 1 ? '🎉🎉 Success! 🎉🎉' : 'Something went wrong'}</div>
                {transactionResult.status === 1 && (
                  <div className='mb-2 mt-5'>
                    <span>View on</span>
                    <a href={`${process.env.NEXT_PUBLIC_OPENSEA_ASSET_URL}/${process.env.NEXT_PUBLIC_MANIFOLD_CONTRACT_ADDRESS}/${token}`} target="_blank" rel="noreferrer" className='underline ml-1'>OpenSea</a>.
                  </div>
                )}
                <button
                  type="button"
                  className="mt-3 inline-flex justify-center border rounded-md border-[#DF30A8] bg-[#DF30A8] py-4 text-base font-medium text-white shadow-sm hover:opacity-80 focus:outline-none sm:mt-6 w-44 sm:text-sm"
                  onClick={() => {
                    window.open(`https://twitter.com/share?text=${encodeURIComponent(tweetMessage)}`, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
                  }}
                >
                  Share on Twitter
                </button>
              </div>
            )}
          </div>
        )
      }
    </div>
  )
}

export default TransactionStatus