import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import NavigationLinks from "./components/NavigationLinks";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ModeToggle";
import { PRIMARY_BG } from "@/constants/tailwindConstants";
import AuthButton from "./components/AuthButton";
import { useTheme } from "@/components/ThemeProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <>
      <nav className="fixed left-0 right-0 z-50 flex items-center justify-between overflow-hidden border-b-2 bg-secondary p-3 px-10 md:px-20 [&>*]:flex">
        <Link to={"/"} className="flex items-center">
          <img
            src={`/logos/logo2-${theme}.png`}
            className="w-[120px] md:w-[150px]"
          />
        </Link>
        <ul className="!hidden gap-5 md:!flex [&>*]:cursor-pointer">
          <NavigationLinks />
        </ul>
        <div className="items-center text-xl md:gap-5 md:text-2xl [&>*]:cursor-pointer">
          <AuthButton />
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
        <NavigationLinks
          onClick={() => {
            setIsMenuOpen(false);
          }}
          className="flex hover:bg-white/15"
        />
      </ul>
    </>
  );
};

export default NavBar;
