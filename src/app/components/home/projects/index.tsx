import AnimatedSection from "../../AnimatedSection";
const technologies = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MongoDB Atlas",
  "MERN",
  "JWT",
  "Bloom's Taxonomy",
];

const features = [
  "Teacher Authentication",
  "Role-Based Access",
  "Question Bank Management",
  "Bloom's Taxonomy Classification",
  "Automatic Question Paper Generation",
  "PDF Export",
];

const Projects = () => {
  return (
    <AnimatedSection>
    <section id="projects" className="py-24 bg-white">
      <div className="container">

        {/* Heading */}

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-orange-500 font-semibold">
            Featured Project
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Automatic Question Paper Generator
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            A web-based MERN Stack application that automates question paper
            generation using a structured question bank and Bloom's Taxonomy.
          </p>
        </div>

        {/* Project Card */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="bg-orange-50 border border-orange-200 rounded-3xl p-8 shadow-sm">

            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

              <div className="bg-orange-500 px-5 py-3 flex items-center justify-between">

                <h3 className="text-white font-semibold">
                  QPcreator Dashboard
                </h3>

                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>

              </div>

              <div className="p-6">

                <div className="space-y-4">

                  <div className="bg-gray-100 rounded-xl px-4 py-3">
                    📚 Question Bank
                  </div>

                  <div className="bg-gray-100 rounded-xl px-4 py-3">
                    📝 Generate Question Paper
                  </div>

                  <div className="bg-gray-100 rounded-xl px-4 py-3">
                    👨‍🏫 Manage Teachers
                  </div>

                  <div className="bg-gray-100 rounded-xl px-4 py-3">
                    📄 Export PDF
                  </div>

                </div>

              </div>

            </div>

            <p className="text-center text-sm text-gray-500 mt-5">
              Project preview (replace with an actual screenshot later)
            </p>

          </div>

          {/* Right */}

          <div>

            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold mb-5">
              Minor Project
            </span>

            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              QPcreator
            </h3>

            <p className="text-lg text-gray-600 leading-8 mb-8">
              Developed a web-based Automatic Question Paper Generator using the
              MERN Stack. The system enables teachers to maintain question
              banks, classify questions using Bloom's Taxonomy, generate
              balanced question papers automatically, and export them as PDFs.
              Secure authentication and role-based access help streamline the
              internal examination process.
            </p>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3 mb-10">

              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white transition"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mb-10">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <span className="text-orange-500 font-bold">✓</span>

                  <span className="text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

            {/* Button */}

            <a
              href="https://github.com/Sreenidhis03/qpcreator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              View GitHub Repository →
            </a>

          </div>

        </div>

      </div>
    </section>
    </AnimatedSection>
  );
};

export default Projects;