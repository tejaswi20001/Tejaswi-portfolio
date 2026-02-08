import styled from "styled-components";
import { projects } from "../data/PortfolioData";
import { useState } from "react";
import ProjectModal from "../ui/ProjectModal";

const Grid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-radius: 22px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  transition:
    transform 0.18s ease,
    background 0.18s ease,
    border 0.18s ease,
    box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(34, 211, 238, 0.22);
    box-shadow: 0 20px 90px rgba(34, 211, 238, 0.08);
  }

  &:focus-visible {
    outline: none;
    border: 1px solid rgba(34, 211, 238, 0.35);
    box-shadow: 0 0 0 5px rgba(34, 211, 238, 0.1);
  }
`;

const Media = styled.div`
  position: relative;
  height: 190px;
  background: rgba(255, 255, 255, 0.03);
`;

const Img = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  display: block;
  transform: scale(1);
  transition: transform 0.28s ease;

  ${Card}:hover & {
    transform: scale(1.03);
  }
`;

/* gradient overlay + subtle lighting */
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  background:
    radial-gradient(
      520px 220px at 30% 15%,
      rgba(34, 211, 238, 0.12),
      transparent 60%
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.55));

  opacity: 0.95;
`;

const ViewPill = styled.div`
  position: absolute;
  left: 14px;
  bottom: 14px;

  display: inline-flex;
  gap: 8px;
  align-items: center;

  padding: 9px 12px;
  border-radius: 999px;

  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(12, 16, 28, 0.55);
  color: rgba(255, 255, 255, 0.92);
  font-weight: 800;
  font-size: 12px;

  opacity: 0;
  transform: translateY(6px);
  transition: 0.2s;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Body = styled.div`
  padding: 16px;
`;

const Title = styled.div`
  font-weight: 900;
  margin-bottom: 8px;
  letter-spacing: -0.2px;
`;

const Desc = styled.p`
  margin: 0 0 12px;
  opacity: 0.75;
  line-height: 1.65;
`;

const Highlights = styled.ul`
  margin: 0 0 12px;
  padding-left: 18px;
  opacity: 0.84;
  line-height: 1.65;
  font-size: 14px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
`;

const Tag = styled.span`
  font-size: 12px;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.9;
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
  transition:
    transform 0.2s,
    background 0.2s,
    border 0.2s;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const PrimaryBtn = styled(Btn)`
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.35);

  &:hover {
    background: rgba(59, 130, 246, 0.26);
  }
`;

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  const open = (p) => setSelected(p);
  const close = () => setSelected(null);

  return (
    <>
      <Grid>
        {projects.map((p) => (
          <Card
            key={p.title}
            onClick={() => open(p)}
            onKeyDown={(e) => e.key === "Enter" && open(p)}
            role="button"
            tabIndex={0}
            aria-label={`Open details for ${p.title}`}
          >
            <Media>
              <Img src={p.image} alt={p.title} />
              <Overlay />
              <ViewPill>
                <span>View Details</span>
                <span>→</span>
              </ViewPill>
            </Media>

            <Body>
              <Title>{p.title}</Title>
              <Desc>{p.desc}</Desc>

              <Highlights>
                {p.highlights?.slice(0, 3).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </Highlights>

              <Tags>
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </Tags>

              <Actions>
                <PrimaryBtn
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </PrimaryBtn>
                <Btn
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </Btn>
              </Actions>
            </Body>
          </Card>
        ))}
      </Grid>

      <ProjectModal project={selected} onClose={close} />
    </>
  );
}
