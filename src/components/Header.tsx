import Links from "./Links";

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
        <Links className="flex space-x-12" />
      </div>
    </div>
  )
}

export default Header;