import React, { Dispatch, SetStateAction } from 'react'
import TermsAndConditions from './TermsAndConditions'

const TermsState = ({
  setDialogStep
}: {
  setDialogStep: Dispatch<SetStateAction<number>>,
}) => {
  return (
    <div className='bg-[rgba(26,0,2,0.6)] p-4 py-4 sm:p-10 sm:py-8'>
      <h2 className='text-3xl'>Terms and Conditions</h2>
      <TermsAndConditions />
      <div className='flex justify-end mt-2 sm:mt-0'>
        <button
          type="button"
          className="mt-3 inline-flex justify-center bg-[#Df30A8] rounded-md py-4 text-base font-medium text-white shadow-sm hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-6 w-full sm:w-44 sm:text-sm"
          onClick={() => setDialogStep(2)}
        >
          Accept terms
        </button>
      </div>
    </div>
  )
}

export default TermsState