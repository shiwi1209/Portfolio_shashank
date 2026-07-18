import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="site-nav fixed w-full top-0 z-50">
      <div className="nav-inner flex justify-between items-center px-6 md:px-10 py-4">
        <h1 className="nav-brand text-xl font-serif font-semibold">
          Shashank Shekhar
        </h1>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={linkClass}>
              Education
            </NavLink>
          </li>
          <li>
            <a href="#research" className="nav-link">
              Research
            </a>
          </li>
          <li>
            <NavLink to="/publications" className={linkClass}>
              Publications
            </NavLink>
          </li>
          <li>
            <a href="#certificates" className="nav-link">
              Certificates
            </a>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        <button
          className="menu-toggle md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="mobile-menu md:hidden flex flex-col gap-4 px-6 pb-4 text-sm font-medium">
          <li>
            <NavLink to="/" end className={linkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={linkClass} onClick={() => setIsOpen(false)}>
              Education
            </NavLink>
          </li>
          <li>
            <a href="#research" className="nav-link" onClick={() => setIsOpen(false)}>
              Research
            </a>
          </li>
          <li>
            <NavLink to="/publications" className={linkClass} onClick={() => setIsOpen(false)}>
              Publications
            </NavLink>
          </li>
          <li>
            <a href="#certificates" className="nav-link" onClick={() => setIsOpen(false)}>
              Certificates
            </a>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
