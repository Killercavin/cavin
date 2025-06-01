'use client';
import { data } from "@/types/main";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Socials from "@/components/Socials";
import Experiences from "@/components/experiences/Experiences";
import Contact from "@/components/Contact";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  data: data;
}

const HomePage = ({ data }: Props) => {
  const { main, socials, about, skills, projects, experiences, educations } = data;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header logo={main.name} />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero mainData={main} />
        <Socials socials={socials} />
        <About aboutData={about} name={main.name} />
        <Skills skillData={skills} />
        <Projects projectsData={projects} />
        <Experiences experienceData={experiences} educationData={educations} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        socials={socials.map((social) => ({
          ...social,
          icon: social.icon as any, // Adjust `icon` typing if needed
        }))}
        name={main.name}
      />
    </div>
  );
};

export default HomePage;