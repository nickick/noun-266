import React from 'react'

const Video = () => {
  return (
    <section id='video' className='h-[20rem] sm:h-[40rem] mb-24'>
      <div className='text-[2rem] px-6 md:px-0 md:w-4/5 flex flex-row flex-nowrap mx-auto max-w-screen-xl'>
        <p className='md:whitespace-nowrap pr-4 w-[40rem]'>
          We Can Have Fun (Official Music Video) {' '}
          <br className='md:hidden'/>
        </p>
        <div className='border-white border-b-2 w-full relative bottom-3' />
      </div>
      <div className='py-12 relative pt-10 h-4/5 max-w-screen-lg mx-auto sm:mt-20'>
      <iframe src="https://player.vimeo.com/video/781320182?h=db24612c0a&color=eaeae5&title=0&byline=0&portrait=0"
        width="100%" height="100%"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen>
      </iframe>
      </div>
    </section>
  )
}

export default Video