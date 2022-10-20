type HeaderProps = {

}

const Header = ({
}: HeaderProps) => {
  return (
    <div className="relative font-sans text-white border-b border-b-gray-400 flex justify-between z-10">
      <div className="border-r-gray-400 border-r font-bold p-6">
        Noun266
      </div>
      <div className="flex justify-end items-center font-normal space-x-6 p-6">
        <div>
          Album
        </div>
        <div>
          Watch video
        </div>
        <div>
          Merch
        </div>
        <div>
          Bio
        </div>
      </div>
    </div>
  )
}

export default Header;