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
    <Image src={image} alt={title} width='312' height='312' className='rounded-[15px]' />
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
      <button className='border border-white w-full sm:w-32 py-4' onClick={onClick}>
        Mint
      </button>
    </div>
  )
}

export default MerchTile;

export const merchTiles = [
  {
    title: 'Cereal',
    image: '/tiles/cereal.jpg',
    price: 'Free (just pay gas)',
  },
  {
    title: 'Tee',
    image: '/tiles/shirt.jpg',
    price: 'Free (just pay gas)'
  },
  {
    title: 'Milk',
    image: '/tiles/milk.jpg',
    price: 'Free (just pay gas)'
  },
  {
    title: 'Vinyl',
    image: '/tiles/vinyl.jpg',
    price: 'Free (just pay gas)'
  },
  {
    title: 'Sunglasses',
    image: '/tiles/glasses.jpg',
    price: 'Free (just pay gas)'
  },
  {
    title: 'Cassette',
    image: '/tiles/cassette.jpg',
    price: 'Free (just pay gas)'
  },
]
