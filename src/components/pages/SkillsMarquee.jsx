import styled, { keyframes } from "styled-components";
import { skills } from "../data/PortfolioData";

// Flatten your skills into a single list of items
const allSkills = skills.flatMap((group) => group.items);

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
  faster: 16s;
  slower: 30s;
  animation: ${scroll} 22s linear infinite;

  /* pause on hover like Abu Said */
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
  opacity: 0.92;
`;

export default function SkillsMarquee() {
  // Duplicate list to create seamless loop
  const loop = [...allSkills, ...allSkills];

  // Split into two identical rows inside Track (Row1 + Row2) for better layout control
  // We animate Track left by -50% which equals one copy’s width.
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
              <SkillText>{name}</SkillText>
            </SkillCard>
          ))}
        </Row>

        <Row aria-hidden="true">
          {second.map((name, idx) => (
            <SkillCard key={`${name}-dup-${idx}`}>
              <SkillText>{name}</SkillText>
            </SkillCard>
          ))}
        </Row>
      </Track>
    </Wrap>
  );
}
