import Image from "next/future/image"
import React from "react"

const links = [
  {
    label: 'Album',
    link: '#album'
  },
  {
    label: 'Watch video',
    link: '#video'
  },
  {
    label: 'Merch',
    link: '#merch'
  },
  {
    label: 'Bio',
    link: '#bio'
  },
]

const Link = ({
  label,
  link
}: {
  label: string,
  link: string
}) => {
  const onClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    document.getElementById(link.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <a href={link} onClick={onClick}>
      {label}
    </a>
  )
}

const Links = ({
  className
}: {
  className?: string
}) => (
  <div className={className}>
    {links.map(link => <Link key={link.label} {...link} /> )}
  </div>
)

export default Links

export const SocialLinks = ({
  className,
  size,
}: {
  className?: string
  size?: number
}) => (
  <div className={className}>
    <Image src='/icons/twitter.svg' height={size || 24} width={size || 24} alt='Twitter profile' />
    <Image src='/icons/youtube.svg' height={size || 24} width={size || 24} alt='Youtube profile' />
    <Image src='/icons/spotify.svg' height={size || 24} width={size || 24} alt='Spotify profile' />
    <Image src='/icons/noun.svg'    height={size || 24} width={size || 24} alt='Noun profile' />
  </div>
)