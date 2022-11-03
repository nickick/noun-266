import Image from 'next/future/image'
import React from 'react'

const MerchTile = ({
  title,
  image,
  price,
}: {
  title: string,
  image: string
  price: string
}) => {
  return (
    <div className='flex flex-col space-y-6 pb-24' id='merch'>
      <Image src={image} alt={title} width='312' height='312' className='rounded-[40px]' />
      <div>
        <p className='text-2xl'>{title}</p>
        <p>{price}</p>
      </div>
      <button className='border border-white w-32 py-4'>
        Mint
      </button>
    </div>
  )
}

const merchTiles = [
  {
    title: '266 Cereal',
    image: '/tiles/cereal.jpg',
    price: 'Free + gas'
  },
  {
    title: '266 Unisex T-shirt',
    image: '/tiles/shirt.jpg',
    price: 'Free + gas'
  },
  {
    title: '266 Milk',
    image: '/tiles/milk.jpg',
    price: 'Free + gas'
  },
  {
    title: '266 Vinyl',
    image: '/tiles/vinyl.jpg',
    price: 'Free + gas'
  },
  {
    title: '266 Sunglasses',
    image: '/tiles/glasses.jpg',
    price: 'Free + gas'
  },
  {
    title: '266 Single Cassette',
    image: '/tiles/casette.jpg',
    price: 'Free + gas'
  },
]

const NonFungibleMerch = () => {
  return (
    <section>
      <div className='text-[2rem] w-4/5 flex flex-row flex-nowrap mx-auto'>
        <p className='whitespace-nowrap pr-4'>
          Non-fungible merch
        </p>
        <div className='border-white border-b-2 w-full relative bottom-3' />
      </div>
      <div className='w-2/3 grid grid-cols-3 gap-4 mx-auto mt-12'>
        {merchTiles.map((tile) => (
          <MerchTile key={tile.title} {...tile} />
        ))}
      </div>
    </section>
  )
}

export default NonFungibleMerch