import React from 'react'
import reactMarkdown from 'react-markdown'
import { ReactDOM } from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

const TermsAndConditionText = `
# Some Markdown right here!

Test to see if import works as expected!

# Some Markdown right here!

Test to see if import works as expected!
# Some Markdown right here!

Test to see if import works as expected!
# Some Markdown right here!

Test to see if import works as expected!
# Some Markdown right here!

Test to see if import works as expected!
`

const TermsAndConditions = () => {
  return (
    <div className='bg-white mt-6 w-full'>
      <div className='overflow-scroll text-black max-h-[20rem] md:max-h-[20rem] p-4'>
        <ReactMarkdown>
          {TermsAndConditionText}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default TermsAndConditions