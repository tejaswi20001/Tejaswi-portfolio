import styled from "styled-components";

const Wrap = styled.footer`
  padding: 40px 0 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.08);
`;

const Inner = styled.div`
  width: min(1100px, 92%);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

const Text = styled.div`
  opacity: 0.7;
  font-size: 14px;
`;

const Top = styled.a`
  opacity: 0.8;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    opacity: 1;
  }
`;

export default function Footer() {
  return (
    <Wrap>
      <Inner>
        <Text>© {new Date().getFullYear()} Tejaswi. Built with React.</Text>
        <Top href="#home">Back to top ↑</Top>
      </Inner>
    </Wrap>
  );
}
