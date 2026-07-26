import Logo from "../logo";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Logo */}
        <div className="relative flex items-center mb-8">
          <div className="flex-grow h-px bg-gray-700" />
          <div className="mx-4">
            <Logo />
          </div>
          <div className="flex-grow h-px bg-gray-700" />
        </div>

        {/* Name & Description */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-orange-500">
            Sreenidhi S.
          </h3>

          <p className="text-gray-400 mt-2">
            AI & ML Entuasiast
          </p>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Thank you for visiting my portfolio. Feel free to connect with me
            through GitHub or LinkedIn.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-8">
          <a
            href="https://github.com/Sreenidhis03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-orange-500 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sreenidhi-s-aa427b372"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-orange-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sreenidhi S. All Rights Reserved.
          </p>

          <p className="text-gray-600 text-sm mt-2">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;