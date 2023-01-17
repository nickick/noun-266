import React, { useContext } from 'react'
import { ContractContext } from '../ContractContext'
import shortenAddress from '../utils/shortenAddress'
import Loading from './Loading'

const TransactionStatus = () => {
  const { transactionHash, transactionResult } = useContext(ContractContext)
  const token = transactionResult?.events?.map((event) => (parseInt(event.topics[3], 16)))[0];

  return (
    <div>
      {
        (transactionHash || transactionResult) && (
          <div className='my-10'>
            {transactionHash && (
              <div className='flex items-center space-x-4'>
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
              <div className='flex flex-col space-y-2 mt-2'>
                <div>{transactionResult.status === 1 ? '🎉🎉 Success! 🎉🎉' : 'Something went wrong'}</div>
                {transactionResult.status === 1 && (
                  <div>
                    <span>View on</span>
                    <a href={`${process.env.NEXT_PUBLIC_OPENSEA_ASSET_URL}/${process.env.NEXT_PUBLIC_MANIFOLD_CONTRACT_ADDRESS}/${token}`} target="_blank" rel="noreferrer" className='underline ml-1'>OpenSea</a>.
                  </div>
                )}
              </div>
            )}
          </div>
        )
      }
    </div>
  )
}

export default TransactionStatus