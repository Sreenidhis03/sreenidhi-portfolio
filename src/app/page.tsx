import AboutMe from "./components/home/about-me";
import HeroSection from "./components/home/hero-section";
import Skills from "./components/home/skills";
import Education from "./components/home/education";
import Projects from "./components/home/projects";
import Experience from "./components/home/experience";
import Achievements from "./components/home/achievements";
import Contact from "./components/home/contacts";

const Page = () => {
  return (
    <main>
  <HeroSection />
  <AboutMe />
  <Skills />
  <Education />
  <Projects />
  <Experience />
  <Achievements />
  <Contact />
</main>
  );
};

export default Page;