import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Noun 266</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-black w-full h-full min-h-screen'>
        <div className='relative h-screen'>
          <div className='absolute h-full w-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-32 z-20' style={{
          }}>
            <div className='relative h-full w-full mx-auto z-10'>
              <Image src='/noun-266-dj.webp' alt='Noun 266 person' layout='fill' objectFit='contain' />
            </div>
          </div>
          <div className='absolute h-3/4 w-full mx-auto z-20 top-1/4 bg-gradient-to-b from-transparent via-black to-black' />
          <div className='absolute h-full w-full z-0 transform -translate-x-1/2 left-1/2 -translate-y-64 animate-pulse' style={{
            background: 'radial-gradient(#5F40B5, #000, #000)'
          }} />
        </div>
        <div className='absolute top-1/2 z-20 left-12'>
          <div className='relative'>
            <h1 className='text-8xl font-bold'>
              <span>
                New
                <button className='px-20 mx-4 h-1/2 bg-[#5f40b5] rounded-full relative'>
                  &nbsp;
                  <Image src='/noun-266.webp' alt='Noun 266 button' layout='fill' objectFit='contain' />
                </button>
                Single
              </span>
              <br />
              <span className='flex'>
                Available
                <button className='px-12 mx-4 h-1/2 border border-white rounded-full relative flex justify-center items-center bg-black'>
                  <Image src='/play-button.svg' alt='Noun 266 button' height='32' width='32' className='absolute h-8 w-8 top-0 left-6' />
                  &nbsp;
                  <span className='text-white font-normal' style={{
                    fontSize: '2rem',
                  }}>
                    Play
                  </span>
                </button>
                Now
              </span>
            </h1>
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default Home
