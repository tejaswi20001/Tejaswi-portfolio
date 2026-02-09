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

  @media (max-width: 900px) {
    font-size: 28px;
    margin-bottom: 14px;
  }
`;

const Underline = styled.div`
  width: 64px;
  height: 3px;
  border-radius: 999px;
  background: rgba(34, 211, 238, 0.75);
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
        <Title>
          {title}
          <Underline />
        </Title>

        <Content>{children}</Content>
      </Inner>
    </Wrap>
  );
}
