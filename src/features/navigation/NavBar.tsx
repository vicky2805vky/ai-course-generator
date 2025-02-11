import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import NavigationLinks from "./components/NavigationLinks";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="group fixed left-0 right-0 z-50 flex items-center justify-between overflow-hidden border-b-[2px] border-white/15 bg-white bg-opacity-5 p-3 px-10 backdrop-blur-sm md:px-20 [&>*]:flex">
        <div>LOGO</div>
        <ul className="!hidden gap-5 md:!flex [&>*]:cursor-pointer">
          <NavigationLinks />
        </ul>
        <div className="gap-5 text-xl md:text-2xl [&>*]:cursor-pointer">
          <FaRegUserCircle />
          <button
            className="md:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <FaXmark /> : <IoMdMenu />}
          </button>
        </div>
        <div className="absolute inset-0 left-[-100%] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent [transition:0.5s] group-hover:left-[100%]"></div>
      </nav>
      <ul
        className={`${isMenuOpen ? "scale-y-100" : "scale-y-0"} fixed top-[50px] z-40 flex w-full origin-top flex-col gap-0 bg-white bg-opacity-5 px-0 py-3 text-xs backdrop-blur-sm transition-all md:hidden [&>*]:cursor-pointer [&>*]:p-3`}
      >
        <NavigationLinks className="hover:bg-white/15" />
      </ul>
    </>
  );
};

export default NavBar;
