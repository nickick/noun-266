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
          Born &apos;266&apos; on <a href='https://linktosomewhere.com' className='underline' target='_blank' rel="noreferrer" >April 7th, 2022</a> to the Nouns family, Noun 266 was destined for music greatness. With his signature Chart Head and clean aesthetics, he found his calling collaborating with Richerd Intern in late 2022. Now having performed on national television as a world-renowned DJ, Noun 266 is ready to take the world by storm with his debut single, &quot;We Can Have Fun&quot;.
        </p>
      </div>
      <Image src='/nouns-dj-cropped.png' alt='Noun 266 person' width='642' height='656' className='absolute bottom-[75%] md:bottom-0 md:-right-20 z-10'/>
      <div className='absolute h-[10rem] bottom-[65%] w-full left-0 mx-auto z-20 md:top-1/2 bg-gradient-to-b from-transparent via-black to-black md:hidden' />
      <div className='absolute overflow-hidden w-full h-full z-0 top-0 right-0 rounded-[40px] hidden md:block'>
        <div className='absolute w-[80rem] h-[80rem] -top-20 -right-[50%]' style={{
          background: 'radial-gradient(#5F40B5, #5F40B5, #000, #000, #000)'
        }} />
      </div>
    </div>
  )
}

export default About