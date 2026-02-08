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
          software consulting firm, building web applications across frontend
          and backend. For my first 2 years, I worked on a client project for a
          job recruiting platform, where I built reusable React components,
          implemented responsive UI, integrated backend data, and handled
          loading/error/empty states to improve user experience. There after, I
          switched to another client project for an online tools website, where
          I worked as a Backend Developer building REST APIs and working with
          PostgreSQL to support reliable data flow for product features.
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
