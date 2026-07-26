import AnimatedSection from "../../AnimatedSection";
const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "C++"],
  },
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MERN Stack",
    ],
  },
  {
    title: "Database",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "MongoDB Compass",
      "MySQL",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "TensorFlow",
      "Natural Language Processing",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Jupyter Notebook",
    ],
  },
];

const Skills = () => {
  return (
    <AnimatedSection>
    <section id="skills" className="py-24 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-widest font-semibold">
            Technical Skills
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-2">
            Technologies I've Worked With
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">
            Through academic coursework, hands-on projects, and continuous
            learning, I have explored a range of programming languages, web
            technologies, databases, and Artificial Intelligence concepts while
            building practical software solutions.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-orange-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Skills;