import styled, { keyframes } from "styled-components";
import { skills } from "../data/PortfolioData";

// Flatten your skills into a single list of items
const allSkills = skills.flatMap((group) => group.items);

const skillColors = [
  "#67e8f9", // cyan
  "#a78bfa", // violet
  "#f472b6", // pink
  "#facc15", // yellow
  "#4ade80", // green
  "#fb923c", // orange
  "#38bdf8", // sky
  "#c084fc", // purple
  "#22d3ee", // teal-cyan
  "#f87171", // red
  "#2dd4bf", // teal
  "#fde047", // soft yellow
];

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Wrap = styled.div`
  margin-top: 14px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  overflow: hidden;
  position: relative;
`;

const FadeLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  pointer-events: none;
  background: linear-gradient(to right, rgba(7, 11, 22, 1), rgba(7, 11, 22, 0));
`;

const FadeRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  pointer-events: none;
  background: linear-gradient(to left, rgba(7, 11, 22, 1), rgba(7, 11, 22, 0));
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  gap: 14px;
  padding: 14px;
  animation: ${scroll} 22s linear infinite;

  ${Wrap}:hover & {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 14px;
`;

const SkillCard = styled.div`
  min-width: 150px;
  height: 86px;
  border-radius: 16px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  transition:
    transform 0.18s ease,
    border 0.18s ease,
    background 0.18s ease,
    box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    border: 1px solid rgba(34, 211, 238, 0.28);
    background: rgba(255, 255, 255, 0.06);
    box-shadow: 0 18px 60px rgba(34, 211, 238, 0.1);
  }
`;

const SkillText = styled.div`
  font-weight: 800;
  font-size: 14px;
  color: ${({ color }) => color};
  text-shadow: 0 0 14px rgba(255, 255, 255, 0.08);
`;

export default function SkillsMarquee() {
  const loop = [...allSkills, ...allSkills];

  const half = loop.length / 2;
  const first = loop.slice(0, half);
  const second = loop.slice(half);

  return (
    <Wrap>
      <FadeLeft />
      <FadeRight />

      <Track>
        <Row>
          {first.map((name, idx) => (
            <SkillCard key={`${name}-${idx}`}>
              <SkillText color={skillColors[idx % skillColors.length]}>
                {name}
              </SkillText>
            </SkillCard>
          ))}
        </Row>

        <Row aria-hidden="true">
          {second.map((name, idx) => (
            <SkillCard key={`${name}-dup-${idx}`}>
              <SkillText color={skillColors[idx % skillColors.length]}>
                {name}
              </SkillText>
            </SkillCard>
          ))}
        </Row>
      </Track>
    </Wrap>
  );
}
