import React from 'react'
import Image from 'next/future/image'

export const MerchInfo = ({
  title, image, price
}: {
  title: string,
  image: string
  price: string,
}) => (
  <>
    <video width='312' height='312' className='rounded-[15px] mt-10' autoPlay loop muted playsInline>
            <source src={`${image}.mp4`} type="video/mp4" />
            <source src={`${image}.webm`} type="video/webm" />
          </video>
    <div>
      <p className='text-2xl font-semibold'>{title}</p>
    </div>
  </>
)

const MerchTile = ({
  title,
  image,
  price,
  setOpen,
  index,
}: {
  title: string,
  image: string
  price: string,
  index: number,
  setOpen?: React.Dispatch<React.SetStateAction<number | undefined>>
}) => {
  const onClick = () => {
    if (setOpen) {
      setOpen(index)
    }
  }
  return (
    <div className='flex flex-col space-y-6 mb-6 sm:pb-24'>
      <MerchInfo title={title} image={image} price={price} />
      <button className='bg-[#DF30A8] w-full sm:w-32 py-4 rounded-lg' onClick={onClick}>
        Mint
      </button>
    </div>
  )
}

export default MerchTile;

export const merchTiles = [
  {
    title: 'Cereal',
    image: '/tiles/cereal',
    price: 'Free (just pay gas)',
  },
  {
    title: 'Vinyl',
    image: '/tiles/vinyl',
    price: 'Free (just pay gas)'
  },
  {
    title: 'Milk',
    image: '/tiles/milk',
    price: 'Free (just pay gas)'
  },
  {
    title: 'Cassette',
    image: '/tiles/cassette',
    price: 'Free (just pay gas)'
  },
  {
    title: 'Tee',
    image: '/tiles/shirt',
    price: 'Free (just pay gas)'
  },
  {
    title: 'Sunglasses',
    image: '/tiles/glasses',
    price: 'Free (just pay gas)'
  },
]
