"use client";

import Link from "next/link";
import Logo from "../logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container">
        <nav className="flex items-center justify-between py-5">

          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-8">

            <Link href="#about" className="hover:text-orange-500 transition">
              About
            </Link>

            <Link href="#skills" className="hover:text-orange-500 transition">
              Skills
            </Link>

            <Link href="#projects" className="hover:text-orange-500 transition">
              Projects
            </Link>

            <Link href="#education" className="hover:text-orange-500 transition">
              Education
            </Link>

            <Link href="#contact" className="hover:text-orange-500 transition">
              Contact
            </Link>

          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="px-5 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
          >
            Resume
          </a>

        </nav>
      </div>
    </header>
  );
};

export default Header;