import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import NonFungibleMerch from '../src/components/NonFungibleMerch'
import Video from '../src/components/Video'
import About from '../src/components/About'
import { SocialLinks } from '../src/components/Links'
import SwitchNetwork from '../src/components/SwitchNetwork'
import { useState } from 'react'
import VideoModal from '../src/components/VideoModal'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Noun 266</title>
        <meta name="description" content="Noun266 releases his new album!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-black w-full h-full min-h-screen text-white'>
        <SwitchNetwork />
        <div className='relative max-w-screen-2xl mx-auto'>
          <div className='relative h-screen'>
            <Image src='/noun-266-dj.webp' alt='Noun 266 person' width='626' height='1112' className='relative mx-auto z-20 object-contain h-[70%] md:h-full transform -translate-y-28 md:-translate-y-32' style={{aspectRatio: '626 / 1112'}}/>
            <div className='absolute h-1/2 w-full mx-auto z-20 top-36 md:top-1/2 bg-gradient-to-b from-transparent via-black to-black' />
            <div className='absolute overflow-hidden w-full h-[40rem] md:h-[100rem] -top-20'>
              <div className='absolute h-[40rem] md:h-[100rem] w-[40rem] md:w-[100rem] z-0 transform top-0 -translate-x-1/2 left-1/2 -translate-y-32 md:-translate-y-72 animate-pulse' style={{
                background: 'radial-gradient(#5F40B5, #5F40B5, #000, #000, #000)'
              }} />
            </div>
          </div>
          <div className='absolute top-[18rem] md:top-1/2 z-20 left-8 md:left-12'>
            <div className='relative'>
              <h1 className='text-5xl leading-snug md:text-8xl font-bold'>
                <span>
                  New
                  <button className='px-10 md:px-12 mx-4 bg-[#5f40b5] rounded-full relative top-4'>
                    <div className='w-8 md:w-14'>
                      <Image src='/noun-266.webp' alt='Noun 266 button' width="80" height="120" className='w-full relative'/>
                    </div>
                  </button>
                  <br className='md:hidden' />
                  Single
                </span>
                <br />
                <span className='md:flex'>
                  Available
                  <br className='md:hidden' />
                  <div className='flex'>
                    <button className='px-6 md:px-12 md:mx-4 mr-4 md:mr-4 h-[3.5rem] md:h-[5.5rem] border border-white rounded-full relative flex justify-center items-center bg-black' onClick={() => setOpen(true)}>
                      <Image src='/play-button.svg' alt='Noun 266 button' height='32' width='32' className='absolute h-4 md:h-8 w-4 md:w-8 top-1/2 left-4 md:left-9 transform -translate-y-1/2' />
                      &nbsp;
                      <span className='text-white font-semi-bold relative left-3 text-xl md:text-5xl'>
                        Play
                      </span>
                    </button>
                    <span>
                      Now
                    </span>
                  </div>
                </span>
              </h1>
            </div>
            <SocialLinks className='w-full flex mx-auto mt-10 md:hidden space-x-6' size={36} />
          </div>
        </div>
        <div className='relative -mt-28 z-30 bg-black'>
          <div className='flex flex-col md:flex-row relative top-12 justify-center' id='album'>
            <div className='flex flex-col items-centered relative md:left-0 justify-center'>
              <p className='text-5xl font-sans font-bold capitalize w-72 relative'>
                “We can have fun”
              </p>
              <p className='w-80 mt-8 mb-6 mx-auto'>
                Noun266&apos;s debut single hot off the charts and in fresh-pressed vinyl for your listening pleasure.
              </p>
              <p className='w-80 ml-8 md:ml-0'>
                Single side colored LP, 180g
              </p>
            </div>
            <Image src='/vinyl.png' width='940' height='418' alt='album' className='relative mt-10 md:mt-0' />
          </div>
          <div className='bg-gradient-to-b from-[#24202F] to-black w-full h-64 z-10' />
        </div>
        <Video />
        <VideoModal open={open} setOpen={setOpen} />
        <NonFungibleMerch />
        <About />
      </main>
    </>
  )
}

export default Home
