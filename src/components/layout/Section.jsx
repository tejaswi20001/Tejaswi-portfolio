import styled from "styled-components";

const Wrap = styled.section`
  scroll-margin-top: 90px; /* sticky navbar offset */
  padding: 70px 0 50px;
  /* consistent section spacing */
`;

const Inner = styled.div`
  width: min(1100px, 92%);
  margin: 0 auto;
`;

const Heading = styled.h2`
  margin: 0 0 12px;
  font-size: 34px;
  letter-spacing: -0.6px;
  line-height: 1.15;
  color: rgba(255, 255, 255, 0.92);

  /* subtle underline accent */
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 3px;
    width: 100%;
    max-width: 90px; /* ✅ consistent underline size */
    margin-top: 8px;
    border-radius: 999px;
    background: rgba(34, 211, 238, 0.55);
  }

  @media (max-width: 720px) {
    font-size: 28px;
  }
`;

export default function Section({ id, title, children }) {
  return (
    <Wrap id={id}>
      <Inner>
        <Heading>{title}</Heading>
        {children}
      </Inner>
    </Wrap>
  );
}
