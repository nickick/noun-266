import React, { Dispatch, SetStateAction } from 'react'
import TermsAndConditions from './TermsAndConditions'

const TermsState = ({
  setDialogStep
}: {
  setDialogStep: Dispatch<SetStateAction<number>>,
}) => {
  return (
    <div className='bg-[rgba(26,0,2,0.6)] px-4 pb-4 sm:p-16 sm:pt-12 sm:pb-12'>
      Terms and Conditions
      <TermsAndConditions />
      <div className='flex justify-end'>
        <button
          type="button"
          className="mt-3 inline-flex justify-center border border-gray-300 bg-white px-8 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-6 sm:w-auto sm:text-sm"
          onClick={() => setDialogStep(2)}
        >
          I accept the Terms and Conditions
        </button>
      </div>
    </div>
  )
}

export default TermsState