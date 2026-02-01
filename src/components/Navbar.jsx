import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "underline font-semibold"
      : "hover:underline transition";

  return (
    <nav
      style={{ backgroundColor: "#D4E157" }} // lime yellow
      className="flex justify-between items-center px-10 py-4 border-b fixed w-full top-0 z-50"
    >
      <h1 className="text-xl font-serif font-semibold text-gray-900">
        Shashank Shekhar
      </h1>

      <ul className="flex gap-6 text-sm text-gray-900 font-medium">
        {/* HOME */}
        <li>
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
        </li>

        {/* ABOUT PAGE */}
        <li>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </li>

        {/* CONTACT */}
        <li>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </li>

        <NavLink to="/education" className={linkClass}>
  Education
</NavLink>

        {/* SECTION SCROLL LINKS (Home only) */}
    
        <li>
          <a href="#research" className="hover:underline transition">
            Research
          </a>
        </li>
        <li>
          <a href="#publications" className="hover:underline transition">
            Publications
          </a>
        </li>
        <li>
          <a href="#certificates" className="hover:underline transition">
            Certificates
          </a>
        </li>
      </ul>
    </nav>
  );
}
