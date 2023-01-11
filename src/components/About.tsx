import Image from 'next/future/image'
import React from 'react'

const About = () => {
  return (
    <div className='md:w-4/5 md:mx-auto border mx-6 rounded-[40px] p-6 pb-16 pt-48 md:pt-24 md:pl-24 md:pb-16 text-base leading-8 relative mt-48 md:mt-24 max-w-screen-xl' id="bio">
      <div className='md:w-[25.5rem] space-y-8 relative z-30'>
        <h3 className='text-5xl'>
          About the Noun 266
        </h3>
        <p className='text-base leading-8'>
          Noun266 was born on April 7, 2022, in the Nouns family of two hundred twenty-six. He tried a bunch of hobbies very early in his life, but once he first touched the electronic music pad, it hit home. Black-rgb glasses and the equalizer head all of a sudden felt home. In no time he hit up his buddy Richerd Intern about the &quot;We Can Have Fun&quot; music video and they were off shooting and recording and shooting and recording. Rest is history you can listen on Spotify, Apple Music, and other streaming services.
        </p>
      </div>
      <div className='absolute -top-40 md:-top-20 md:right-0 md:bottom-0'>
        <Image src='/nouns-dj-cropped.png' alt='Noun 266 person' width='642' height='656' />
        <div className='absolute h-[20rem] w-full mx-auto z-20 top-36 md:top-1/2 bg-gradient-to-b from-transparent via-black to-black md:hidden' />
      </div>
    </div>
  )
}

export default About