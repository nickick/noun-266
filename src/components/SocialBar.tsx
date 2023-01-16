import Image from "next/image";

const SocialBar = () => {
  return (
    <div className="hidden md:block fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col h-48 px-6 justify-between">
        <a href='https://twitter.co' target='_blank' rel="noreferrer" >
          <Image src='/icons/twitter.svg' height='24' width='24' alt='Twitter profile' />
        </a>
        <a href='https://twitter.co' target='_blank' rel="noreferrer" >
          <Image src='/icons/youtube.svg' height='24' width='24' alt='Twitter profile' />
        </a>
        <a href='https://twitter.co' target='_blank' rel="noreferrer" >
          <Image src='/icons/spotify.svg' height='24' width='24' alt='Twitter profile' />
        </a>
        <a href='https://twitter.co' target='_blank' rel="noreferrer" >
          <Image src='/icons/noun.svg'    height='24' width='24' alt='Twitter profile' />
        </a>
      </div>
    </div>
  )
}

export default SocialBar;