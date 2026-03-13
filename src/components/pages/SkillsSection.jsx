import styled from "styled-components";
import SkillsMarquee from "./SkillsMarquee";
import { skills } from "../data/PortfolioData";

const titleColors = {
  Frontend: "#67e8f9",
  Backend: "#a78bfa",
  Database: "#4ade80",
  Tools: "#f472b6",
};

const chipColors = [
  {
    text: "#67e8f9",
    bg: "rgba(103, 232, 249, 0.1)",
    border: "rgba(103, 232, 249, 0.24)",
  },
  {
    text: "#a78bfa",
    bg: "rgba(167, 139, 250, 0.1)",
    border: "rgba(167, 139, 250, 0.24)",
  },
  {
    text: "#4ade80",
    bg: "rgba(74, 222, 128, 0.1)",
    border: "rgba(74, 222, 128, 0.24)",
  },
  {
    text: "#f472b6",
    bg: "rgba(244, 114, 182, 0.1)",
    border: "rgba(244, 114, 182, 0.24)",
  },
  {
    text: "#facc15",
    bg: "rgba(250, 204, 21, 0.1)",
    border: "rgba(250, 204, 21, 0.24)",
  },
  {
    text: "#fb923c",
    bg: "rgba(251, 146, 60, 0.1)",
    border: "rgba(251, 146, 60, 0.24)",
  },
  {
    text: "#38bdf8",
    bg: "rgba(56, 189, 248, 0.1)",
    border: "rgba(56, 189, 248, 0.24)",
  },
  {
    text: "#2dd4bf",
    bg: "rgba(45, 212, 191, 0.1)",
    border: "rgba(45, 212, 191, 0.24)",
  },
];

const Grid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MarqueeWrap = styled.div`
  grid-column: 1 / -1;
`;

const Card = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 18px;
  transition:
    transform 0.18s ease,
    border 0.18s ease,
    background 0.18s ease,
    box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(34, 211, 238, 0.28);
    box-shadow: 0 18px 70px rgba(34, 211, 238, 0.1);
  }
`;

const Title = styled.div`
  font-weight: 800;
  margin-bottom: 12px;
  font-size: 15px;
  color: ${({ color }) => color || "#f8fafc"};
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Chip = styled.span`
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 999px;
  color: ${({ textColor }) => textColor};
  background: ${({ bgColor }) => bgColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  opacity: 0.97;
  transition:
    transform 0.16s ease,
    background 0.16s ease,
    border 0.16s ease,
    color 0.16s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.08);
  }
`;

export default function SkillsSection() {
  return (
    <Grid>
      <MarqueeWrap>
        <SkillsMarquee />
      </MarqueeWrap>

      {skills.map((group) => (
        <Card key={group.title}>
          <Title color={titleColors[group.title]}>{group.title}</Title>
          <Chips>
            {group.items.map((item, idx) => {
              const colorSet = chipColors[idx % chipColors.length];
              return (
                <Chip
                  key={item}
                  textColor={colorSet.text}
                  bgColor={colorSet.bg}
                  borderColor={colorSet.border}
                >
                  {item}
                </Chip>
              );
            })}
          </Chips>
        </Card>
      ))}
    </Grid>
  );
}
