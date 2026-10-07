"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setNavActive((prev) => !prev);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/" onClick={closeNav}>
          <img
            src="/logo/Parul_University_Logo.png"
            alt="Parul University Logo"
            className="logo-img"
          />
        </Link>
      </div>
      <button
        className="nav-toggle"
        id="navToggle"
        aria-label="Toggle navigation"
        onClick={toggleNav}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className={`nav-links ${navActive ? "active" : ""}`} id="navLinks">
        <li>
          <Link
            href="/#about"
            className={pathname === "/" ? "active" : ""}
            onClick={closeNav}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/tracks"
            className={pathname === "/tracks" || pathname === "/track-detail" ? "active" : ""}
            onClick={closeNav}
          >
            Tracks & Panels
          </Link>
        </li>
        <li>
          <Link
            href="/speakers"
            className={pathname === "/speakers" ? "active" : ""}
            onClick={closeNav}
          >
            Speakers
          </Link>
        </li>
        <li>
          <Link
            href="/hosts"
            className={pathname === "/hosts" ? "active" : ""}
            onClick={closeNav}
          >
            The Hosts
          </Link>
        </li>
        <li>
          <Link
            href="/schedule"
            className={pathname === "/schedule" ? "active" : ""}
            onClick={closeNav}
          >
            Schedule
          </Link>
        </li>
        <li>
          <Link
            href="/important-dates"
            className={pathname === "/important-dates" ? "active" : ""}
            onClick={closeNav}
          >
            Important Dates
          </Link>
        </li>
        <li>
          <Link
            href="/venue"
            className={pathname === "/venue" ? "active" : ""}
            onClick={closeNav}
          >
            Venue
          </Link>
        </li>
        <li>
          <Link
            href="/call-for-papers"
            className={pathname === "/call-for-papers" ? "active" : ""}
            onClick={closeNav}
          >
            Call for Papers
          </Link>
        </li>
        <li>
          <Link href="#" onClick={closeNav}>
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
            onClick={closeNav}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/register"
            className="btn btn-primary"
            style={{ fontSize: "0.75rem", padding: "0.45rem 1rem" }}
            onClick={closeNav}
          >
            Register Now
          </Link>
        </li>
      </ul>
      <div className="right-logos">
        <a
          href="https://cumulusassociation.org/"
          target="_blank"
          rel="noopener noreferrer"
          title="Cumulus Association"
        >
          <img
            src="/logo/Cumulus_Association_Logo.png"
            alt="Cumulus Association Logo"
            className="logo-img"
          />
        </a>
      </div>
    </nav>
  );
}
