import Image from 'next/future/image'
import React from 'react'
import Links, { SocialLinks } from './Links'

const Footer = () => {
  return (
    <footer className='relative'>
      <div className='w-4/5 mx-auto pt-24 relative max-w-screen-xl'>
        <Image src='/noun266.svg' height='360' width='360' alt='Noun 266' className='absolute md:hidden right-0 bottom-0 md:top-48 md:bottom-0 md:left-0 md:h-24 w-24'/>
        <Image src='/noun266.svg' height='360' width='360' alt='Noun 266' className='absolute hidden md:block md:bottom-0 md:left-0 md:h-24 w-24'/>
        <div className='flex flex-col md:flex-row justify-between'>
          <p className='text-[2rem]'>
            Noun266
          </p>
          <div className='flex flex-col md:flex-row justify-between md:space-x-10'>
            <div className='flex flex-col'>
              <Links className='flex flex-col space-y-2'/>
              <SocialLinks className='flex space-x-4 justify-between w-32 mt-4 md:mt-20 mb-6 md:mb-4' size={18} />
            </div>
            <div className='flex flex-col space-y-4 mb-20 md:mb-0'>
              <p>Made by:</p>
              <a href='https://curated.xyz' target='_blank' rel="noreferrer" >
                <Image src='/icons/curated.svg' width='80' height='16' alt='Curated' />
                </a>
              <a href='https://twitter.com/richerdIntern' target='_blank' rel="noreferrer" >
                <Image src='/icons/intern-studios.svg' width='128' height='16' alt='Intern Studios' className='pt-2'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer