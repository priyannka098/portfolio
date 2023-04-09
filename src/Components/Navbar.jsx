import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-yellow-600 font-bold hover:border-2 hover:border-blue rounder"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="hover:text-yellow-600 font-bold hover:border-2 hover:border-blue rounder"
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="hover:text-yellow-600 font-bold hover:border-2 hover:border-blue rounder"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="hover:text-yellow-600 font-bold hover:border-2 hover:border-blue rounder"
        >
          Contact Me
        </Link>{" "}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Priyanka Kumari
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="www.google.com"
          target="_blank"
          className="btn text-yellow-600 font-bold border-2 border-blue rounder"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};
export default Navbar;
