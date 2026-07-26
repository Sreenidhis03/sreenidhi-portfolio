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

            <Link
              href="#about"
              className="hover:text-orange-500 transition duration-300"
            >
              About
            </Link>

            <Link
              href="#skills"
              className="hover:text-orange-500 transition duration-300"
            >
              Skills
            </Link>

            <Link
              href="#education"
              className="hover:text-orange-500 transition duration-300"
            >
              Education
            </Link>

            <Link
              href="#projects"
              className="hover:text-orange-500 transition duration-300"
            >
              Projects
            </Link>

            <Link
              href="#experience"
              className="hover:text-orange-500 transition duration-300"
            >
              Experience
            </Link>

            <Link
              href="#achievements"
              className="hover:text-orange-500 transition duration-300"
            >
              Achievements
            </Link>

            <Link
              href="#contact"
              className="hover:text-orange-500 transition duration-300"
            >
              Contact
            </Link>

          </div>

          {/* Resume Button */}
          <a
  href="/Sreenidhi_Resume.pdf"
  download
  className="px-5 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 hover:scale-105 transition-all duration-300"
>
  Download Resume
</a>

        </nav>
      </div>
    </header>
  );
};

export default Header;