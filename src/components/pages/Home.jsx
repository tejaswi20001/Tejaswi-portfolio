import styled from "styled-components";
import Navbar from "../layout/Navbar";
import Hero from "./Hero";
import Section from "../layout/Section";
import Footer from "../layout/Footer";

import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import ContactSection from "./ContactSection";

import Reveal from "../ui/Reveal";

const PageBG = styled.div`
  min-height: 100vh;
  position: relative;
`;

const AboutText = styled.p`
  color: #cbd5e1;
  line-height: 1.85;
  max-width: 820px;
  margin: 0;
  font-size: 15.5px;
`;

const TechText = styled.p`
  margin-top: 14px;
  color: #c4b5fd;
  font-size: 14px;
  font-weight: 600;
`;

const TechAccent = styled.span`
  color: #22d3ee;
  font-weight: 700;
`;

export default function Home() {
  return (
    <PageBG>
      <Navbar />
      <Hero />

      <Section id="about" title="About">
        <AboutText>
          I’m Tejaswi, a Software Engineer with 3 years of experience developing
          modern web applications across both frontend and backend technologies.
          My experience includes building reusable React components, creating
          responsive and user-friendly interfaces, integrating RESTful APIs, and
          developing backend services using Node.js, Express, and PostgreSQL. I
          have also built personal MERN stack projects to further strengthen my
          full-stack development skills. Additionally, I have a strong
          foundation in data structures, algorithms, and core software
          engineering principles, which I apply to build clean, reliable, and
          scalable applications.
        </AboutText>

        <TechText>
          <TechAccent>Tech Stack:</TechAccent> React • JavaScript • HTML • CSS •
          CSS-in-JS • Bootstrap • Node.js • Express • PostgreSQL
        </TechText>
      </Section>

      <Section id="skills" title="Skills">
        <Reveal>
          <SkillsSection />
        </Reveal>
      </Section>

      <Section id="experience" title="Experience">
        <Reveal>
          <ExperienceSection />
        </Reveal>
      </Section>

      <Section id="projects" title="Projects">
        <Reveal>
          <ProjectsSection />
        </Reveal>
      </Section>

      <Section id="contact" title="Contact">
        <Reveal>
          <ContactSection />
        </Reveal>
      </Section>

      <Footer />
    </PageBG>
  );
}
