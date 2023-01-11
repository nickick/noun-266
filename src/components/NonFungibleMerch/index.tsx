import { useState } from 'react';
import MintModal from '../MintModal';
import MerchTile, { merchTiles } from './MerchTile';

const NonFungibleMerch = () => {
  const [selectedMerchTile, setSelectedMerchTile] = useState<number>();

  return (
    <section id="merch">
      <div className='text-[2rem] px-6 md:px-0 md:w-4/5 flex flex-row flex-nowrap mx-auto max-w-screen-xl'>
        <p className='md:whitespace-nowrap pr-4 w-[40rem]'>
          Non-fungible merch
        </p>
        <div className='border-white border-b-2 w-full relative bottom-3' />
      </div>
      <div className='flex flex-col items-center md:w-2/3 md:grid md:grid-cols-3 gap-4 mx-auto mt-12 max-w-screen-lg'>
        {merchTiles.map((tile, index) => (
          <MerchTile key={tile.title} {...tile} setOpen={setSelectedMerchTile} index={index} />
        ))}
      </div>
      <MintModal
        open={selectedMerchTile !== undefined }
        setOpen={setSelectedMerchTile}
        selectedMerchTile={selectedMerchTile}
        text={['test']}
      />
    </section>
  )
}

export default NonFungibleMerch