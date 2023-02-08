import React, { useContext } from 'react'
import ConnectButton from '../ConnectButton'
import { ContractContext, ContractStatus } from '../ContractContext'

export const MerchInfo = ({
  title, image
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
      <p className='text-2xl font-semibold text-center'>{title}</p>
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

  const { currentAccount, contractStatus, hasMintedNFT } = useContext(ContractContext);

  return (
    <div className='flex flex-col space-y-6 mb-6 sm:pb-0'>
      <MerchInfo title={title} image={image} price={price} />
      {
        currentAccount ? (
          <button
            className={`${contractStatus === ContractStatus.Open && !hasMintedNFT ? 'bg-[#DF30A8]' : 'bg-[#777]'} w-full py-4 rounded-lg`}
            onClick={onClick}
            disabled={contractStatus != ContractStatus.Open || hasMintedNFT}
          >
            { hasMintedNFT
            ? 'Already minted'
            : contractStatus === ContractStatus.Paused
              ? 'Mint not open'
              : contractStatus === ContractStatus.Closed
              ? 'Mint has ended'
              : 'Mint'
            }
          </button>
        ) : (
          <ConnectButton matchMintButton callback={onClick} />
        )
      }

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