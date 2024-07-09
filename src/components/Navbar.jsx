import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <header id="home" className="bg-transparent">
        <div className="flex justify-evenly ml-4 p-2 sm:ml-0 sm:p-0">
          <div className="flex items-center ml-4">
            <FaRegClock className="text-xl"/>
            <p className="ml-4 sm:text-xs">10 AM - 10 PM</p>
          </div>
          <div className="flex items-center mx-4">
            <CiLocationOn className="text-xl"/>
            <p className="ml-4 sm:text-xs">
              New Town Road, Marker Street, New City 123456
            </p>
          </div>
          <div className="flex items-center ml-4">
            <CiPhone className="text-xl"/>
            <p className="ml-4 sm:text-xs">+1 (123) 456-78-90</p>
          </div>
        </div>
      </header>
      <nav className="size-full flex justify-between items-center py-4 px-8 sm:p-4 border-y-2 border-solid border-amber-400">
        <div className="w-36 sm:110px">
          <Link to="/">
            <p className="text-xl font-bold uppercase">Muskaan</p>
          </Link>
        </div>
        <ul className="flex-1 flex justify-center items-center list-none xl:hidden [&_a:hover]:text-gray-400">
          <li className="mx-4 p__opensans">
            <HashLink to={"/#home"}>
              Home
            </HashLink>
          </li>
          <li className="mx-4 p__opensans">
            <HashLink to={"/#about"}>About</HashLink>
          </li>
          <li className="mx-4 p__opensans">
            <HashLink to={"/#menu"}>Menu</HashLink>
          </li>
          <li className="mx-4 p__opensans">
            <HashLink to={"/#gallery"}>Gallery</HashLink>
          </li>
          <li className="mx-4 p__opensans">
            <HashLink to={"/#contact"}>Contact</HashLink>
          </li>
        </ul>
        <div className="app__navbar-login flex justify-end items-center sm:hidden [&_a:hover]:text-gray-400">
          <Link to="/table" className="p__opensans">
            Book Table
          </Link>
        </div>
        <div className="hidden xl:flex">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="fixed top-0 left-0 w-full h-screen bg-black delay-100 flex-col z-10 app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className=" text-3xl [&_a:hover]:text-gray-400">
                <li className="m-8">
                <HashLink to={"/#home"} onClick={() => setToggleMenu(false)}>
                    Home
                  </HashLink>
                </li>
                <li className="m-8">
                <HashLink to={"/#about"} onClick={() => setToggleMenu(false)}>
                    About
                  </HashLink>
                </li>
                <li className="m-8">
                <HashLink to={"/#menu"} onClick={() => setToggleMenu(false)}>
                    Menu
                  </HashLink>
                </li>
                <li className="m-8">
                <HashLink to={"/#gallery"}  onClick={() => setToggleMenu(false)}>
                    Gallery
                  </HashLink>
                </li>
                <li className="m-8">
                <HashLink to={"/#contact"} onClick={() => setToggleMenu(false)}>
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
