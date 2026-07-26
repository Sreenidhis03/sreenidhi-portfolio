import AnimatedSection from "../../AnimatedSection";
import {
  FaGraduationCap,
  FaSchool,
  FaBookOpen,
} from "react-icons/fa";
const educationDetails = [
  {
    title: "Integrated M.Sc. Computer Science",
    subtitle: "Artificial Intelligence & Machine Learning",
    institution: "Bharata Mata College (Autonomous), Thrikkakara",
    duration: "2022 – Present",
    icon: <FaGraduationCap />,
  },
  {
    title: "Higher Secondary ",
    subtitle: "Computer Science",
    institution: "St. Paul's Higher Secondary School, Kozhinjampara",
    duration: "2020 – 2022",
    icon: <FaBookOpen />,
  },
  {
    title: "Secondary School",
    subtitle: "CBSE",
    institution: "Ahalia Public School,Kozhipara",
    duration: "2019 – 2020",
    icon: <FaSchool />,
  },
];

const Education = () => {
  return (
    <AnimatedSection>
    <section id="education" className="py-24 bg-gray-50">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-widest font-semibold">
            Education
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-2">
            Academic Journey
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">
            My academic background has provided a strong foundation in Computer
            Science while allowing me to explore Artificial Intelligence,
            Machine Learning, and modern software development.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationDetails.map((education) => (
            <div
              key={education.title}
              className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-orange-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
  <div className="text-3xl text-orange-500">
    {education.icon}
  </div>
</div>

              <h3 className="text-2xl font-semibold text-gray-900">
                {education.title}
              </h3>

              <p className="text-orange-500 font-semibold mt-3">
                {education.subtitle}
              </p>

              <p className="text-gray-600 mt-4 leading-7">
                {education.institution}
              </p>

              <div className="mt-6 inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium">
                {education.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Education;