import { useState } from "react";
import styled from "styled-components";

const NavWrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;

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
  font-weight: 900;
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
  font-weight: 800;

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
    align-items: center;
    justify-content: center;
  }

  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 10px 12px;
  cursor: pointer;
`;

/* ✅ Clean dropdown (no big cards) */
const MobileMenu = styled.div`
  display: none;

  @media (max-width: 720px) {
    display: block;
  }

  position: absolute;
  left: 0;
  right: 0;
  top: 70px;

  background: rgba(11, 18, 32, 0.92);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  overflow: hidden;
  max-height: ${({ open }) => (open ? "420px" : "0px")};
  transition: max-height 0.22s ease;
`;

const MobileInner = styled.div`
  width: min(1100px, 92%);
  margin: 0 auto;
  padding: 12px 0;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MobileLink = styled.a`
  padding: 10px 2px;
  font-size: 14px;
  opacity: 0.92;
  transition: 0.18s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    opacity: 1;
    transform: translateX(2px);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 6px 0;
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <NavWrap>
      <NavInner>
        <Brand href="#home" onClick={closeMenu}>
          Tejaswi Methuku Portfolio
        </Brand>

        <Links>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>

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

      <MobileMenu open={open}>
        <MobileInner>
          <MobileLink href="#about" onClick={closeMenu}>
            About <span>→</span>
          </MobileLink>
          <MobileLink href="#skills" onClick={closeMenu}>
            Skills <span>→</span>
          </MobileLink>
          <MobileLink href="#experience" onClick={closeMenu}>
            Experience <span>→</span>
          </MobileLink>
          <MobileLink href="#projects" onClick={closeMenu}>
            Projects <span>→</span>
          </MobileLink>
          <MobileLink href="#contact" onClick={closeMenu}>
            Contact <span>→</span>
          </MobileLink>

          <Divider />

          <MobileLink
            href="https://mail.google.com/mail/?view=cm&fs=1&to=methukutejaswi@gmail.com"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Email <span>↗</span>
          </MobileLink>

          <MobileLink
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Resume <span>↗</span>
          </MobileLink>
        </MobileInner>
      </MobileMenu>
    </NavWrap>
  );
}
