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

export default function Home() {
  return (
    <PageBG>
      <Navbar />
      <Hero />

      <Section id="about" title="About">
        <p style={{ opacity: 0.78, lineHeight: 1.8, maxWidth: 820, margin: 0 }}>
          I’m Tejaswi, a Software Engineer with 3 years of experience in a
          software consulting firm, working across frontend and backend on
          multiple client projects. In my first year, I contributed to a job
          recruiting platform where I built reusable React components,
          implemented responsive UI, integrated API data, and handled
          loading/error/empty states for a smooth user experience. In my second
          year, I worked on a hotel booking website, improving key UI flows,
          enhancing usability, and collaborating with backend teams to deliver
          reliable features. After that, I transitioned into backend development
          for an online tools platform, building REST APIs with Node/Express and
          working with PostgreSQL to support scalable data flow and product
          features.
        </p>

        <p style={{ opacity: 0.7, marginTop: 14 }}>
          Tech: React • JavaScript • HTML • CSS • CSS-in-JS • Bootstrap •
          Node.js • Express • PostgreSQL
        </p>
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
