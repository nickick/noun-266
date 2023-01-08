import Image from 'next/future/image'
import React from 'react'
import Links, { SocialLinks } from './Links'

const Footer = () => {
  return (
    <footer className='relative'>
      <div className='w-4/5 mx-auto pt-24 relative max-w-screen-xl'>
        <Image src='/noun-266.webp' height='60' width='96' alt='Noun 266' className='absolute md:hidden right-0 top-8 md:top-48 md:bottom-0 md:left-0 md:h-24 w-[60px]'/>
        <Image src='/noun-266.webp' height='60' width='96' alt='Noun 266' className='absolute hidden md:block md:bottom-0 md:left-0 md:h-24 w-[60px]'/>
        <div className='flex flex-col md:flex-row justify-between'>
          <p className='text-[2rem]'>
            Noun266
          </p>
          <div className='flex flex-col md:flex-row justify-between md:space-x-10'>
            <div className='flex flex-col'>
              <Links className='flex flex-col space-y-2'/>
              <SocialLinks className='flex space-x-4 justify-between w-32 mt-4 md:mt-20 mb-6 md:mb-4'/>
            </div>
            <div className='flex flex-col space-y-4 mb-20 md:mb-0'>
              <p>Made by:</p>
              <Image src='/icons/curated.svg' width='80' height='16' alt='Curated' />
              <Image src='/icons/intern-studios.svg' width='128' height='16' alt='Intern Studios'/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer