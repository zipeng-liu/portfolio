import IntroSection from "../components/homeSections/IntroSection";
import ProjectsSection from "../components/homeSections/ProjectsSection";
import SkillsSection from "../components/homeSections/SkillsSection";
import ContactSection from "../components/homeSections/ContactSection";

const HomePage = () => {
  return (
    <div>
      <IntroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
