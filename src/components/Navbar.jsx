import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import image from "../assets/b-hub.jpg";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const NAV_LINKS = [
    { path: "/", label: "Home" },
    { path: "/designs", label: "Designs" },
    { path: "/about", label: "About" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.style.overflow = isNavOpen ? "auto" : "hidden";
  };

  const handleNavItemClick = () => {
    setIsNavOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="fixed top-0 z-50 flex flex-row justify-between w-screen px-4 md:fixed md:top-0 md:z-50 md:flex md:flex-row md:justify-between md:w-screen md:px-4 lg:fixed lg:top-0 lg:z-50 lg:flex lg:flex-row lg:justify-between lg:w-full lg:px-4">
      <div className="flex items-center md:flex md:items-center lg:flex lg:items-center">
        <img src={image} alt="logo" className="w-20 rounded mt-3 h-8" />
      </div>
      <button
        className={`z-50 p-2 rounded-full flex ${isNavOpen ? "text-background-0" : "text-textcolor-0"
          }`}
        onClick={toggleNav}
      >
        <Hamburger size={20} toggled={isNavOpen} toggle={setIsNavOpen} />
      </button>
      {isNavOpen && (
        <div className="overlay fixed top-0 left-0 w-screen bg-black bg-opacity-90 overflow-hidden transition-all duration-500 h-full">
          <div className="bg-textcolor-0 text-[25px] lg:text-[50px] font-primary text-background-0 rounded-b-[100px] overlay-content flex flex-col items-center justify-center lg:h-[700px]">
            {NAV_LINKS.map(({ path, label }, index) => (
              <Link
                key={index}
                to={path}
                className="hover:scale-125 block py-2 text-gray-300 hover:text-white transition-colors duration-300"
                onClick={handleNavItemClick}
              >
                {label}
              </Link>
            ))}
            <div className=" w-48 rounded-lg shadow-lg bg-white ring-1 ring-background-0 flex text-background-0 gap-3 p-3 bottom-0 mt-12">
              <a href="https://wa.me/8124813376" target="_blank">
                <FaWhatsapp
                  size={22}
                  className="cursor-pointer hover:scale-125"
                />
              </a>
              <a href="https://www.instagram.com/bhub_2024/" target="_blank">
                <FaInstagram
                  size={22}
                  className="cursor-pointer hover:scale-125"
                />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bhubconsultancy@gmail.com"
                target="_blank"
              >
                <FiMail
                  size={22}
                  className="cursor-pointer hover:scale-125"
                  alt="Gmail Logo"
                />
              </a>
              <FaLinkedinIn
                size={22}
                className="cursor-pointer hover:scale-125"
              />
              <FaYoutube size={22} className="cursor-pointer hover:scale-125" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
