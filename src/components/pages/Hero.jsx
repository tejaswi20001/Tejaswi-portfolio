import styled from "styled-components";
import Lottie from "lottie-react";
import projectAnim from "../../assets/lottie/Project.json";
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
  border: 1px solid rgba(125, 211, 252, 0.18);
  background: rgba(125, 211, 252, 0.06);
  font-size: 13px;
  color: #bae6fd;
  opacity: 0.95;
`;

const Title = styled.h1`
  margin: 18px 0 10px;
  font-size: 52px;
  line-height: 1.05;
  letter-spacing: -0.8px;
  color: #f8fafc;

  @media (max-width: 900px) {
    font-size: 42px;
  }
`;

const NameAccent = styled.span`
  color: #22d3ee;
`;

const Subtitle = styled.p`
  margin: 0 0 22px;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(226, 232, 240, 0.8);
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
  text-decoration: none;

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
  text-decoration: none;
  color: #c4b5fd;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(196, 181, 253, 0.16);
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
    background: rgba(196, 181, 253, 0.08);
    color: #ddd6fe;
  }
`;

const LeftPreviewCard = styled.div`
  margin-top: 16px;
  width: min(560px, 100%);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  overflow: hidden;
`;

const LeftPreviewInner = styled.div`
  height: 260px;
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
  color: #f0abfc;
  font-size: 16px;
`;

const Social = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(125, 211, 252, 0.14);
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 10px;
  color: #e2e8f0;
  text-decoration: none;
  opacity: 0.95;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
    background: rgba(125, 211, 252, 0.06);
    border-color: rgba(125, 211, 252, 0.24);
    color: #7dd3fc;
  }

  span:last-child {
    color: #c084fc;
    font-weight: 700;
  }

  &:hover span:last-child {
    color: #ddd6fe;
  }
`;

export default function Hero() {
  return (
    <Wrap id="home">
      <Inner>
        {/* LEFT */}
        <div>
          <Title>
            <NameAccent>Tejaswi Methuku</NameAccent>
            <br />
            Software Engineer
          </Title>

          <Subtitle>
            Software Engineer with 3 years of experience building scalable web
            applications across frontend and backend development. Skilled in
            developing reusable React components, responsive user interfaces,
            and backend APIs using Node.js, Express, and PostgreSQL. Currently
            seeking Software Engineer, Frontend Engineer, or Full-Stack
            Developer roles where I can contribute to building reliable,
            user-focused, and maintainable products.
          </Subtitle>

          <CTA>
            <PrimaryBtn href="#projects">View Projects</PrimaryBtn>
            <SecondaryBtn href="#contact">Contact Me</SecondaryBtn>
          </CTA>

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
