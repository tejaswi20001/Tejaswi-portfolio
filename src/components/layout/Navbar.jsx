import { useState } from "react";
import styled from "styled-components";

const NavWrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  position: sticky;
  top: 0;

  /* add this */
  position: sticky;
  /* and this */
  position: relative;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(11, 18, 32, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const NavInner = styled.div`
  width: min(1100px, 92%);
  margin: 0 auto;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.a`
  font-weight: 800;
  letter-spacing: 0.6px;
  font-size: 15px;
`;

const Links = styled.nav`
  display: flex;
  gap: 18px;
  align-items: center;

  @media (max-width: 720px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 14px;
  opacity: 0.8;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const ResumeBtn = styled.a`
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;

  background: rgba(59, 130, 246, 0.18);
  border: 1px solid rgba(59, 130, 246, 0.35);
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
    background: rgba(59, 130, 246, 0.24);
  }
`;

const Burger = styled.button`
  display: none;
  @media (max-width: 720px) {
    display: inline-flex;
  }

  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 10px 12px;
  cursor: pointer;
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 720px) {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 70px; /* navbar height */
    z-index: 60;
  }

  background: rgba(11, 18, 32, 0.92);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  overflow: hidden;
  max-height: ${({ open }) => (open ? "420px" : "0px")};
  transition: max-height 0.25s ease;
`;

const MobileInner = styled.div`
  width: min(1100px, 92%);
  margin: 0 auto;
  padding: 14px 0;

  display: grid;
  gap: 10px;
`;

const MobileLink = styled.a`
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  opacity: 0.92;
  font-size: 14px;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  &:active {
    transform: scale(0.99);
  }
`;

const EmailBtn = styled.a`
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <NavWrap>
      <NavInner>
        <Brand href="#home" onClick={closeMenu}>
          MY-PORTFOLIO
        </Brand>

        <Links>
          <NavLink href="#about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink href="#skills" onClick={closeMenu}>
            Skills
          </NavLink>
          <NavLink href="#experience" onClick={closeMenu}>
            Experience
          </NavLink>
          <NavLink href="#projects" onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink href="#contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink
            href="https://mail.google.com/mail/?view=cm&fs=1&to=methukutejaswi@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </NavLink>

          <ResumeBtn href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </ResumeBtn>
        </Links>

        <Burger onClick={() => setOpen((v) => !v)} aria-label="Open menu">
          {open ? "✕" : "☰"}
        </Burger>
      </NavInner>

      <MobileInner>
        <MobileLink href="#about" onClick={closeMenu}>
          About
        </MobileLink>
        <MobileLink href="#skills" onClick={closeMenu}>
          Skills
        </MobileLink>
        <MobileLink href="#experience" onClick={closeMenu}>
          Experience
        </MobileLink>
        <MobileLink href="#projects" onClick={closeMenu}>
          Projects
        </MobileLink>
        <MobileLink href="#contact" onClick={closeMenu}>
          Contact
        </MobileLink>

        <MobileLink
          href="https://mail.google.com/mail/?view=cm&fs=1&to=methukutejaswi@gmail.com"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Email
        </MobileLink>

        <MobileLink
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Resume
        </MobileLink>
      </MobileInner>
    </NavWrap>
  );
}
