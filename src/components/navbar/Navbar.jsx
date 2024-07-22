import { useState } from "react";
import "./Navbar.module.css";
import Logo from "../../assets/images/logo.svg";
import OpenIcon from "../../assets/images/icon-menu.svg";
import CloseIcon from "../../assets/images/icon-menu-close.svg";

const Navbar = () => {
  const [Menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!Menu);
  };

  return (
    <>
      <div className="container w-[70%] mx-auto my-9 flex justify-between items-center relative">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <ul className=" hidden md:flex gap-6 font-semibold text-Dark-grayish-blue text-base font-Inter cursor-pointer">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
          <div className="z-40">
            <ul className="md:hidden" onClick={handleMenu}>
              <img src={Menu ? CloseIcon : OpenIcon} alt="menu" />
            </ul>
          </div>
        </div>
      </div>
      {Menu && (
        <div className="md:hidden">
          <ul className=" flex flex-col gap-4 font-semibold text-Dark-grayish-blue text-base font-Inter cursor-pointer absolute top-24 right-14 p-5 py-40 shadow-md h-screen bg-white">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
