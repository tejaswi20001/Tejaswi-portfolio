import styled from "styled-components";

const Wrap = styled.section`
  padding: 50px 0;

  @media (max-width: 900px) {
    padding: 44px 0;
  }
`;

const Inner = styled.div`
  width: min(1100px, 92%);
  margin: 0 auto;
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 34px;
  font-weight: 900;
  letter-spacing: -0.4px;
  color: ${({ $sectionId }) => {
    switch ($sectionId) {
      case "about":
        return "#67e8f9"; // cyan
      case "skills":
        return "#a78bfa"; // violet
      case "experience":
        return "#f8fafc"; // near white
      case "projects":
        return "#f472b6"; // pink
      case "contact":
        return "#4ade80"; // green
      default:
        return "#e2e8f0";
    }
  }};

  @media (max-width: 900px) {
    font-size: 28px;
    margin-bottom: 14px;
  }
`;

const Underline = styled.div`
  width: 64px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, #22d3ee, #60a5fa, #a78bfa);
  margin-top: 10px;
`;

const Content = styled.div`
  p {
    margin: 0 0 12px;
  }

  ul {
    margin: 0;
  }
`;

export default function Section({ id, title, children }) {
  return (
    <Wrap id={id}>
      <Inner>
        <Title $sectionId={id}>
          {title}
          <Underline />
        </Title>

        <Content>{children}</Content>
      </Inner>
    </Wrap>
  );
}
