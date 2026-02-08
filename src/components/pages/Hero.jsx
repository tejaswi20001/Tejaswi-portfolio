import styled from "styled-components";
const prefersReducedMotion = window.matchMedia?.(
  "(prefers-reduced-motion: reduce)",
)?.matches;

import Lottie from "lottie-react";
import computerAnim from "../../assets/lottie/coding.json";

const Wrap = styled.section`
  padding: 90px 0 70px;
`;

const Inner = styled.div`
  width: min(1100px, 92%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.6fr);
  gap: 40px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;

  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  font-size: 13px;
  opacity: 0.9;
`;

const Title = styled.h1`
  margin: 18px 0 10px;
  font-size: 52px;
  line-height: 1.05;
  letter-spacing: -0.8px;

  background: linear-gradient(
    90deg,
    var(--text),
    rgba(34, 211, 238, 0.95),
    rgba(59, 130, 246, 0.95)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 900px) {
    font-size: 42px;
  }
`;

const Subtitle = styled.p`
  margin: 0 0 22px;
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.75;
  max-width: 56ch;
`;

const CTA = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
  padding: 12px 16px;
  border-radius: 14px;
  font-weight: 800;
  font-size: 14px;

  background: rgba(59, 130, 246, 0.92);
  border: 1px solid rgba(59, 130, 246, 0.45);
  color: rgba(255, 255, 255, 0.96);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    filter 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(59, 130, 246, 0.22);
    filter: brightness(1.05);
  }
`;

const SecondaryBtn = styled.a`
  padding: 12px 16px;
  border-radius: 14px;
  font-weight: 700;
  font-size: 14px;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 420px;
  justify-self: end;

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 18px;

  @media (max-width: 900px) {
    justify-self: start;
    max-width: 520px;
  }
`;

const CardTitle = styled.div`
  font-weight: 700;
  margin-bottom: 10px;
`;

const Social = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 12px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 10px;
  opacity: 0.9;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.06);
  }
`;

export default function Hero() {
  return (
    <Wrap id="home">
      <Inner>
        <div>
          <Badge>🚀 Actively applying — Frontend / Full-Stack roles</Badge>

          <Title>
            Tejaswi Methuku <br /> Software Engineer
          </Title>

          <Subtitle>
            Software Engineer with 3 years of consulting experience building
            modern web apps. I specialize in React UI (reusable components,
            responsive layouts, polished UX) and backend APIs with Node/Express
            + PostgreSQL. Currently targeting Frontend / Full-Stack roles where
            I can ship clean, scalable features end-to-end.
          </Subtitle>

          <CTA>
            <PrimaryBtn href="#projects">View Projects</PrimaryBtn>
            <SecondaryBtn href="#contact">Contact Me</SecondaryBtn>
          </CTA>
        </div>

        <Card>
          <CardTitle>Links</CardTitle>

          <div style={{ marginBottom: 12 }}>
            <Lottie
              animationData={computerAnim}
              loop
              style={{ width: "100%", maxWidth: 340, margin: "0 auto" }}
            />
          </div>

          <Social
            href="https://www.linkedin.com/in/tejaswi-methuku-4a406b3a5/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <span>→</span>
          </Social>

          <Social
            href="https://github.com/tejaswi20001"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <span>→</span>
          </Social>

          <Social
            href="https://mail.google.com/mail/?view=cm&fs=1&to=methukutejaswi@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>Email</span>
            <span>→</span>
          </Social>

          <Social href="/resume.pdf" target="_blank" rel="noreferrer">
            <span>Resume</span>
            <span>→</span>
          </Social>
        </Card>
      </Inner>
    </Wrap>
  );
}
