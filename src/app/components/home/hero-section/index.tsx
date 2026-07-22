import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Button from "../../common/button";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-40 pb-20 lg:pb-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Section */}
          <div className="flex flex-col gap-7">

            {/* Badge */}
            <div className="inline-flex w-fit items-center rounded-full border border-orange-200 bg-orange-50 px-5 py-2">
              <span className="text-sm font-semibold tracking-wider uppercase text-orange-600">
                5th Year Integrated M.Sc. Computer Science Student
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-black">
                Sreenidhi <span className="text-orange-500">S.</span>
              </h1>

              <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-gray-700 leading-relaxed">
                Specialization:
                <br />
                <span className="text-orange-500">
                  Artificial Intelligence & Machine Learning
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-xl text-lg leading-9 text-gray-600">
              I'm a 5th-year Integrated M.Sc. Computer Science student at
              Bharata Mata College (Autonomous), passionate about building
              practical software, exploring data-driven solutions, and
              continuously learning through real-world projects.
            </p>

            {/* Information */}
            <div className="flex flex-col gap-3 text-gray-700">

              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-orange-500" />
                <span>Bharata Mata College (Autonomous)</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>Kerala, India</span>
              </div>

              <div className="flex items-center gap-3">
                <FaBriefcase className="text-orange-500" />
                <span>Seeking Internship & Placement Opportunities</span>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                text="View Projects"
                href="#projects"
              />

              <Button
                text="Download Resume"
                href="/resume.pdf"
                primary={false}
              />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">

              <a
                href="https://github.com/Sreenidhis03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/sreenidhi-s-aa427b372"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:sreenidhi3114@gmail.com"
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
              >
                <FaEnvelope size={20} />
              </a>

            </div>

          </div>

          {/* Mobile Image */}
          <div className="lg:hidden">
            <Image
              src={getImgPath("/images/home/banner/cropped.jpg.jpeg")}
              alt="Sreenidhi"
              width={500}
              height={500}
              className="rounded-3xl shadow-xl object-cover mx-auto"
            />
          </div>

        </div>
      </div>

      {/* Desktop Image */}
      <div className="hidden lg:block absolute right-12 top-28 w-[38%]">
        <Image
          src={getImgPath("/images/home/banner/cropped.jpg.jpeg")}
          alt="Sreenidhi"
          width={550}
          height={550}
          className="w-full h-auto rounded-3xl shadow-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;