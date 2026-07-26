import AnimatedSection from "../../AnimatedSection";

import {
  FaCloud,
  FaRobot,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";
const achievements = [
  {
    title: "Google Cloud Study Jams",
    icon: <FaCloud />,
    description:
      "Successfully completed Google Cloud Study Jams and gained practical exposure to Google Cloud Platform technologies.",
  },
  {
    title: "International Seminar on AI & Machine Learning",
    icon: <FaRobot />,
    description:
      "Participated in the International Seminar on AI & Machine Learning held at Bharata Mata College, Thrikkakara.",
  },
  {
    title: "Digital Marketing Workshop",
    icon: <FaLaptopCode />,
    description:
      "Attended a Digital Workshop conducted by Zoople Technologies to explore modern software technologies and industry practices.",
  },
  {
    title: "Generative AI for All",
    icon: <FaAward />,
    description:
      "Successfully completed the 'Generative AI for All' course offered through Infosys Springboard.",
  },
];

const Achievements = () => {
  return (
    <AnimatedSection>
    <section id="achievements" className="py-24 bg-white">
      <div className="container">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-orange-500 font-semibold">
            Achievements
          </p>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Achievements & Certifications
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            Workshops, certifications, seminars, and learning experiences that
            have contributed to my technical growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item) => (
            <div
              key={item.title}
className="bg-white rounded-3xl border border-gray-200 p-8 hover:border-orange-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"            >
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <div className="text-3xl text-orange-500">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7 mt-5">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
    </AnimatedSection>
  );
};

export default Achievements;