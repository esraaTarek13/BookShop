import { Link, useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaListUl } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";
import NavButton from "./NavButton";
import HeaderIcons from "./HeaderIcons";
import { useAuthStore } from "../../Stores/useAuthStore";
import useModalStore from "../../Stores/useModalStore";

export default function Header() {
  const token = useAuthStore((state) => state.token);
  const isOpen = useModalStore((state) => state.isMobileMenuOpen);
  const toggleMobileMenu = useModalStore((state) => state.toggleMobileMenu);
  const closeMobileMenu = useModalStore((state) => state.closeMobileMenu);
  const location = useLocation();

  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  return (
    <header className="bg-(--nav-bg) absolute w-full z-30">
      <div className="Custom-container flex justify-between md:gap-6 items-center py-7.5 font-(--text-font-weight) text-(--secondary-text-color) text-[18px]">
        <div className="md:w-50">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="md:border-r md:border-[#FFFFFF4D] md:px-6 h-full w-full object-contain"
            />
          </Link>
        </div>

        <div
          className={`${isOpen ? "translate-y-0 opacity-100" : "translate-y-[150%]"} h-screen md:h-fit md:translate-0 pt-15 px-5 md:p-0 fixed z-20 md:relative right-0 top-0 bg-(--main-color) md:bg-transparent text-(--main-text-color) md:text-inherit flex flex-col-reverse md:flex-row items-center justify-end md:justify-between w-full transition-transform md:transition-none duration-700`}
        >
          <ul className="flex flex-col md:flex-row gap-10 md:gap-4 lg:gap-6 items-center">
            <NavLinks />
          </ul>

          <div className="w-full md:w-fit flex md:block justify-between items-center mb-20 md:mb-0">
            {token ? <HeaderIcons /> : <NavButton />}
            <IoCloseSharp
              onClick={toggleMobileMenu}
              className="md:hidden text-3xl cursor-pointer"
            />
          </div>
        </div>

        <FaListUl
          className="text-2xl block md:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>
    </header>
  );
}
