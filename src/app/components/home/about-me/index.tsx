import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AnimatedSection from "../../AnimatedSection";

const AboutMe = () => {
  const cards = [
    {
      icon: <FaGraduationCap className="text-2xl text-orange-500" />,
      title: "Education",
      text: "Integrated M.Sc. Computer Science \n Specialization:\nArtificial Intelligence &\n Machine Learning\nBharata Mata College (Autonomous)",
    },
    {
      icon: <FaLaptopCode className="text-2xl text-orange-500" />,
      title: "Interests",
      text: "Artificial Intelligence\nMachine Learning\nWeb Development",
    },
    {
      icon: <FaRocket className="text-2xl text-orange-500" />,
      title: "Current Focus",
      text: "Developing Real-World Projects\nLearning New Technologies\nPreparing for Software Careers",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-orange-500" />,
      title: "Location",
      text: "Kerala, India\n\nOpen to Internship &\nPlacement Opportunities",
    },
  ];

  return (
    <AnimatedSection>
    <section
  id="about"
  className="py-24 bg-gray-50"
>
      <div className="container">

        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-5xl font-bold text-gray-900">
  Driven by Curiosity, Inspired by Technology
</h2>

         <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">
  I enjoy solving problems through technology and believe that the best way to
  learn is by building. Whether it's developing web applications or exploring
  intelligent systems, I'm always looking for opportunities to improve my
  skills, take on new challenges, and create meaningful projects.
</p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card, index) => (

            <div
              key={index}
className="
bg-white
rounded-3xl
p-8
border
border-gray-200
shadow-sm
hover:shadow-2xl
hover:-translate-y-3
hover:border-orange-500
transition-all
duration-300
cursor-default
"            >

              {card.icon}

              <h3 className="text-2xl font-semibold mt-6 mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 whitespace-pre-line leading-8">
                {card.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
    </AnimatedSection>
  );
};

export default AboutMe;