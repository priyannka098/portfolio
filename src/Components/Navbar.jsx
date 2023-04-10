import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link
          to="/"
          className=" text-black hover:text-yellow hover:border-2 lg:text-white navbar-style hover:border-blue rounded"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="text-black hover:text-yellow-600  lg:text-white navbar-style  hover:border-2 font-sans hover:border-blue rounder"
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="text-black hover:text-yellow-600  navbar-style lg:text-white  hover:border-2 hover:border-blue rounder"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="text-black hover:text-yellow-600  text-bold lg:text-white  navbar-style hover:border-2 hover:border-blue rounder"
        >
          Contact Me
        </Link>{" "}
      </li>
    </>
  );

  return (
    <div className="navbar ">
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
          to="/"
          className="btn btn-ghost normal-case text-2xl bold  navbar-style text-white"
        >
          Priyanka Kumari
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <a
          href=" https://drive.google.com/file/d/16wYavPDBNFVKyP7UB9A2fDLHd2kKkOoI/view"
          target="_blank"
          className="btn hover:text-yellow-600 font-bold  bg-white text-black  hover:bg-white border-3 hover: border-red-600 rounded font-sans"
        >
          {" "}
          Download Resume
        </a>
      </div>
    </div>
  );
};
export default Navbar;
