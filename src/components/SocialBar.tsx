import Image from "next/image";

const SocialBar = () => {
  return (
    <div className="hidden md:block fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col h-48 px-6 justify-between">
        <a href='https://twitter.com/noun_266' target='_blank' rel="noreferrer" >
          <Image src='/icons/twitter.svg' height='24' width='24' alt='Twitter' />
        </a>
        <a href='https://www.youtube.com/@noun2669' target='_blank' rel="noreferrer" >
          <Image src='/icons/youtube.svg' height='24' width='24' alt='Youtube Channel' />
        </a>
        <a href='https://open.spotify.com/artist/5ZDuOmknaQDqFO5cUIn9C4?si=p5BghDXiTNOjgL14-8IKGQ' target='_blank' rel="noreferrer" >
          <Image src='/icons/spotify.svg' height='24' width='24' alt='Spotify' />
        </a>
        <a href='https://nouns.wtf/noun/266' target='_blank' rel="noreferrer" >
          <Image src='/icons/noun.svg'    height='24' width='24' alt='Noun' />
        </a>
      </div>
    </div>
  )
}

export default SocialBar;