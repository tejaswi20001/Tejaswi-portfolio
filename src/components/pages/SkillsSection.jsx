import styled from "styled-components";
import SkillsMarquee from "./SkillsMarquee";
import { skills } from "../data/PortfolioData";

const Grid = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
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
  font-weight: 700;
  margin-bottom: 12px;
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Chip = styled.span`
  padding: 8px 12px;
  font-size: 13px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
  opacity: 0.95;
  transition:
    transform 0.16s ease,
    background 0.16s ease,
    border 0.16s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(34, 211, 238, 0.12);
    border: 1px solid rgba(34, 211, 238, 0.28);
  }
`;

export default function SkillsSection() {
  return (
    <Grid>
      <SkillsMarquee />

      {skills.map((group) => (
        <Card key={group.title}>
          <Title>{group.title}</Title>
          <Chips>
            {group.items.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </Chips>
        </Card>
      ))}
    </Grid>
  );
}
