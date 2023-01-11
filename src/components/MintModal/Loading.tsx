import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="spinner-border animate-pulse inline-block w-4 h-4 border-4 rounded-full" role="status">
        <span className="hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loading