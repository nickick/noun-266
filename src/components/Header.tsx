import { useState } from "react";
import ConnectButton from "./ConnectButton";
import Links from "./Links";

type HeaderProps = {
  borderOnly?: boolean
}

const Hamburger = ({
  setOpen,
  open,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) => (
  <div className="space-y-2 cursor-pointer relative z-100" onClick={() => setOpen(!open)}>
    <span
      className={`block w-8 h-0.5 bg-gray-600 transform transition-transform ${
        open ? "rotate-45 translate-y-1.5" : ""
      }`}
    ></span>
    <span
      className={`block w-8 h-0.5 bg-gray-600 transform transition-transform ${
        open ? "-rotate-45 -translate-y-1" : ""
      }`}
    ></span>
  </div>
);

const Header = ({
  borderOnly = false
}: HeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${borderOnly ? 'absolute' : 'relative'} top-0 w-full font-sans text-white border-b border-b-gray-400 flex justify-between z-10`}>
      <div className="border-r-gray-400 md:border-r font-medium p-[2.5rem] text-2xl">
        Noun266
      </div>
      <div className="flex justify-end items-center font-normal md:space-x-6 p-[2.5rem] pr-12" style={{
          opacity: borderOnly ? 0 : 1
        }}>
        <Links className="hidden md:flex space-x-12" />
        <ConnectButton />
        <div className="block md:hidden">
          <Hamburger open={open} setOpen={setOpen} />
        </div>
        {/* hamburger menu */}
        <div
          className={`
            ${open ? "translate-y-0" : "translate-y-full"}
            bg-black transform md:hidden fixed top-0 bottom-0 right-0 left-0 transition-transform shadow z-50
          `}
        >
          <div className="relative h-full">
            <div className="border-b-gray-400 border-b font-bold p-6 flex justify-between items-center">
              <div>Noun266</div>
              <Hamburger open={open} setOpen={setOpen} />
            </div>
            <div className="flex flex-col justify-start align-middle h-full">
              <div onClick={() => setOpen(false)}>
                <Links className="flex flex-col items-center mt-12 text-3xl space-y-4" />
                <ConnectButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;