import AnimatedSection from "../../AnimatedSection";
const experiences = [
  {
    title: "Python Intern",
    company: "IROHUB, Kochi",
    duration: "May 2023 – June 2023",
    description:
      "Completed a Python internship where I strengthened my programming fundamentals, problem-solving skills, and gained practical exposure to software development.",
  },
  {
    title: "Industrial Internship",
    company: "Cochin Shipyard Limited",
    duration: "2026",
    description:
      "Completed an industrial internship to gain exposure to professional work environments, industry practices, and organizational workflows.",
  },
];

const Experience = () => {
  return (
    <AnimatedSection>
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-orange-500 font-semibold">
            Experience
          </p>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Internships
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            Hands-on learning experiences that strengthened my technical and
            professional skills.
          </p>
        </div>

        <div className="space-y-8">

          {experiences.map((exp) => (
            <div
              key={exp.title}
className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-orange-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.title}
                  </h3>

                  <p className="text-orange-500 font-semibold mt-2">
                    {exp.company}
                  </p>

                  <p className="text-gray-600 mt-5 leading-7">
                    {exp.description}
                  </p>
                </div>

                <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-medium whitespace-nowrap">
                  {exp.duration}
                </span>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
    </AnimatedSection>
  );
};

export default Experience;