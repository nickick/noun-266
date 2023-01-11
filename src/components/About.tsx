import Image from 'next/future/image'
import React from 'react'

const About = () => {
  return (
    <div className='md:w-4/5 md:mx-auto border mx-6 rounded-[40px] p-6 pb-16 pt-48 md:pt-24 md:pl-24 md:pb-16 text-base leading-8 relative mt-48 md:mt-24 max-w-screen-xl' id="bio">
      <div className='md:w-[25.5rem] space-y-8 relative z-30'>
        <h3 className='text-5xl'>
          Noun 266
        </h3>
        <p className='text-base leading-8'>
          Born '266' on April 7th, 2022 to the Nouns family, Noun 266 was destined for music greatness. With his signature Chart Head and clean aesthetics, he found his calling collaborating with Richerd Intern in late 2022. Now having performed on national television as a world-renowned DJ, Noun 266 is ready to take the world by storm with his debut single, "We Can Have Fun".
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