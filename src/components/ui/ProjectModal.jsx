import { useEffect } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  background: rgba(0, 0, 0, 0.65);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  padding: 18px;
`;

const Modal = styled.div`
  width: min(980px, 100%);
  margin: 0 auto;

  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(14, 18, 34, 0.96);
  box-shadow: 0 24px 120px rgba(0, 0, 0, 0.55);

  overflow: hidden;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  padding: 14px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(14, 18, 34, 0.98);
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 16px;
`;

const CloseBtn = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.92);
  border-radius: 12px;
  padding: 10px 12px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.09);
  }
`;

const Body = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);

  @media (max-width: 900px) {
    height: 240px;
  }
`;

const Box = styled.div`
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  padding: 14px;
`;

const Label = styled.div`
  font-weight: 800;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  margin: 0;
  opacity: 0.85;
  line-height: 1.7;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 18px;
  opacity: 0.88;
  line-height: 1.7;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.92;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Btn = styled.a`
  padding: 10px 14px;
  border-radius: 14px;
  font-weight: 800;
  font-size: 13px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const PrimaryBtn = styled(Btn)`
  background: rgba(59, 130, 246, 0.22);
  border: 1px solid rgba(59, 130, 246, 0.35);
`;

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    // lock background scroll, but ALWAYS restore
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const stop = (e) => e.stopPropagation();

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={stop}>
        <Header>
          <Title>{project.title}</Title>
          <CloseBtn onClick={onClose} aria-label="Close modal">
            ✕
          </CloseBtn>
        </Header>

        <Body>
          <div>
            <Image src={project.image} alt={project.title} />
            <div style={{ height: 12 }} />
            <Box>
              <Label>Overview</Label>
              <Desc>{project.desc}</Desc>
            </Box>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            <Box>
              <Label>Key Features</Label>
              <List>
                {(project.highlights || []).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </List>
            </Box>

            <Box>
              <Label>Tech Stack</Label>
              <Tags>
                {(project.tech || []).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </Tags>
            </Box>

            <Box>
              <Label>Links</Label>
              <Actions>
                <PrimaryBtn
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </PrimaryBtn>
                <Btn href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </Btn>
              </Actions>
            </Box>
          </div>
        </Body>
      </Modal>
    </Overlay>
  );
}
