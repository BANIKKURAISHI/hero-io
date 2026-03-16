import React from "react";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  const links = [
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
            ? "font-semibold text-md text-[#6b35e5] underline mr-3"
            : "font-semibold text-md mr-3"
      }
    >
      Home
    </NavLink>,
    <NavLink
      to="/apps"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
            ? "font-semibold text-md text-[#6b35e5] underline mr-3"
            : "font-semibold text-md mr-3"
      }
    >
      Apps
    </NavLink>,
    <NavLink
      to="/installation"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
            ? "font-semibold text-md text-[#6b35e5] underline mr-3"
            : "font-semibold text-md mr-3"
      }
    >
      Installation
    </NavLink>,
  ];

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content text-2xl  bg-base-100 rounded-box z-1 -ml-4 w-48  p-4 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="w-12 h-12">
            <img src="https://i.ibb.co.com/wFc9GJRh/logo.png" alt="main Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to="https://github.com/BANIKKURAISHI" className="btn bg-gradient-to-r from-[#6b35e5] to-[#9d61f2]">
            <span>
              <FaGithub />
            </span>{" "}
            <span>Contribute</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
