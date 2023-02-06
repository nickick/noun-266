import { useContext, useState } from 'react';
import { ContractContext } from '../ContractContext';
import MintModal from '../MintModal';
import MerchTile, { merchTiles } from './MerchTile';

const NonFungibleMerch = () => {
  const [selectedMerchTile, setSelectedMerchTile] = useState<number>();

  return (
    <section id="merch">
      <div className='text-[2rem] px-6 md:px-0 md:w-4/5 flex flex-row flex-nowrap mx-auto max-w-screen-xl border-white sm:border-b'>
        <p className='md:whitespace-nowrap pr-4 w-full border-b sm:border-none'>
          Noun 266 Merch
          <br className='md:hidden'/>
        </p>
      </div>
      <div className='text-lg py-2 max-w-screen-xl mx-auto pl-6 sm:pl-0 md:w-4/5'>
        Free + gas. Limit 1 per wallet.
      </div>
      <div className='flex flex-col items-center md:w-2/3 md:grid md:grid-cols-3 gap-10 mx-auto mt-12 max-w-screen-lg'>
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