import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import NavigationLinks from "./components/NavigationLinks";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ModeToggle";
import { PRIMARY_BG } from "@/constants/tailwindConstants";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="fixed left-0 right-0 z-50 flex items-center justify-between overflow-hidden border-b-2 bg-secondary p-3 px-10 md:px-20 [&>*]:flex">
        <Link to={"/"}>LOGO</Link>
        <ul className="!hidden gap-5 md:!flex [&>*]:cursor-pointer">
          <NavigationLinks />
        </ul>
        <div className="gap-5 text-xl md:text-2xl [&>*]:cursor-pointer">
          <ModeToggle />
          <button
            className="md:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <FaXmark /> : <IoMdMenu />}
          </button>
        </div>
      </nav>
      <ul
        className={`${isMenuOpen ? "scale-y-100" : "scale-y-0"} fixed top-[50px] z-40 flex w-full origin-top flex-col gap-0 px-0 py-3 text-xs backdrop-blur-sm transition-all md:hidden [&>*]:cursor-pointer [&>*]:p-3 ${PRIMARY_BG}`}
      >
        <NavigationLinks className="flex hover:bg-white/15" />
      </ul>
    </>
  );
};

export default NavBar;
