import styled from "styled-components";
import Lottie from "lottie-react";
import projectAnim from "../../assets/lottie/project.json";
import codingAnim from "../../assets/lottie/coding.json";

const Wrap = styled.section`
  padding: 90px 0 70px;
`;

const Inner = styled.div`
  width: min(1100px, 92%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 22px;
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

  @media (max-width: 900px) {
    font-size: 42px;
  }
`;

const NameAccent = styled.span`
  color: rgba(34, 211, 238, 0.95);
`;

const Subtitle = styled.p`
  margin: 0 0 22px;
  font-size: 16px;
  line-height: 1.7;
  opacity: 0.75;
  max-width: 62ch;
`;

const CTA = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const PrimaryBtn = styled.a`
  padding: 12px 16px;
  border-radius: 14px;
  font-weight: 800;
  font-size: 14px;

  background: rgba(59, 130, 246, 0.92);
  border: 1px solid rgba(59, 130, 246, 0.4);
  color: rgba(255, 255, 255, 0.96);
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
  }
`;

const SecondaryBtn = styled.a`
  padding: 12px 16px;
  border-radius: 14px;
  font-weight: 800;
  font-size: 14px;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

/* ✅ LEFT preview card under the buttons */
const LeftPreviewCard = styled.div`
  margin-top: 16px;
  width: min(560px, 100%);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  overflow: hidden;
`;

const LeftPreviewInner = styled.div`
  height: 260px; /* ✅ adjust height here */
  display: grid;
  place-items: center;
  padding: 10px;

  @media (max-width: 900px) {
    height: 240px;
  }

  & > div {
    width: 100%;
    height: 100%;
  }
`;

const RightCol = styled.div`
  display: grid;
  gap: 14px;
  align-content: start;

  @media (max-width: 900px) {
    max-width: 520px;
  }
`;

const IllustrationCard = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  overflow: hidden;

  box-shadow: 0 18px 90px rgba(34, 211, 238, 0.08);
`;

const LottieWrap = styled.div`
  width: 100%;
  height: 320px;
  display: grid;
  place-items: center;

  @media (max-width: 900px) {
    height: 260px;
  }

  & > div {
    width: 100%;
    height: 100%;
  }
`;

const Card = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  padding: 18px;
  min-height: 280px;
`;

const CardTitle = styled.div`
  font-weight: 900;
  margin-bottom: 10px;
`;

const Social = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 12px;
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
        {/* LEFT */}
        <div>
          <Badge>🚀 Actively applying — Frontend / Full-Stack roles</Badge>

          <Title>
            <NameAccent>Tejaswi Methuku</NameAccent>
            <br />
            Software Engineer
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

          {/* ✅ ADD THIS: Project animation under buttons */}
          <LeftPreviewCard>
            <LeftPreviewInner>
              <Lottie
                animationData={projectAnim}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </LeftPreviewInner>
          </LeftPreviewCard>
        </div>

        {/* RIGHT (kept same as your code) */}
        <RightCol>
          <IllustrationCard>
            <LottieWrap>
              <Lottie
                animationData={codingAnim}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </LottieWrap>
          </IllustrationCard>

          <Card>
            <CardTitle>Links</CardTitle>

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
        </RightCol>
      </Inner>
    </Wrap>
  );
}
