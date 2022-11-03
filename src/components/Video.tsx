import React from 'react'

const Video = () => {
  return (
    <section>
      <div className='text-[2rem] w-4/5 flex flex-row flex-nowrap mx-auto'>
        <p className='whitespace-nowrap pr-4'>
          Watch the video
        </p>
        <div className='border-white border-b-2 w-full relative bottom-3' />
      </div>
      <div className='flex items-center justify-center py-12'>
        <iframe
          width="1120"
          height="620"
          src="https://www.youtube.com/embed/2sCiVfsxN7g&autoplay=1"
          srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/2sCiVfsxN7g?autoplay=1><img src=https://img.youtube.com/vi/2sCiVfsxN7g/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default Video