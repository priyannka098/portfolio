import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <a
          className=" text-black hover:text-yellow hover:border-2 lg:text-white navbar-style hover:border-blue rounded" href="#about"
        >
          About Me
        </a>
      </li>

      <li>
        <a
          className="text-black hover:text-yellow-600  lg:text-white navbar-style  hover:border-2 font-sans hover:border-blue rounder" href ="#projects"
        >
          Projects
        </a>
      </li>

      <li>
        <a
          className="text-black hover:text-yellow-600  navbar-style lg:text-white  hover:border-2 hover:border-blue rounder" href="#experience"
        >
          Experience
        </a>
      </li>

      <li>
        <a
          className="text-black hover:text-yellow-600  text-bold lg:text-white  navbar-style hover:border-2 hover:border-blue rounder" href="#contactme"
        >
          Contact Me
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar sticky w-full top-0 z-10 nav-color min-h-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
        className="btn btn-ghost normal-case text-xl md:text-2xl bold  navbar-style text-white name-style"
        >
          Priyanka Kumari
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/115YBdMj0CsVWfy5JUZ0z6tSOaBwjVqZ9/view?usp=sharing"
          target="_blank"
          className="btn hover:text-yellow-600 font-bold text-white  hover:bg-white border-3 rounded font-sans0 lg:mr-8"
        >
          {/* <img className="lg" src="images/download-icon.png" /> */}
    
          <span className="max-md:hidden">Download Resume</span>
          <span className="md:hidden">Resume</span>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
