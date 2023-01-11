import React from 'react'

const Video = () => {
  return (
    <section id='video' className='h-[20rem] sm:h-[40rem] mb-24'>
      <div className='text-[2rem] px-6 md:px-0 md:w-4/5 flex flex-row flex-nowrap mx-auto max-w-screen-xl'>
        <p className='md:whitespace-nowrap pr-4 w-[20rem]'>
          Watch the {' '}
          <br className='md:hidden'/>
          video
        </p>
        <div className='border-white border-b-2 w-full relative bottom-3' />
      </div>
      <div className='py-12 relative pt-10 h-4/5 max-w-screen-lg mx-auto sm:mt-20'>
        <iframe
          src="https://www.youtube.com/embed/2sCiVfsxN7g&autoplay=1"
          srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/2sCiVfsxN7g?autoplay=1><img src=https://img.youtube.com/vi/2sCiVfsxN7g/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition"
          allowFullScreen
          className='absolute top-0 left-0 w-full h-full'
        ></iframe>
      </div>
    </section>
  )
}

export default Video