import styled from "styled-components";
import { experience } from "../data/PortfolioData";

const Wrap = styled.div`
  display: grid;
  gap: 18px;
`;

const Item = styled.div`
  position: relative;
  padding-left: 28px;
`;

const Line = styled.div`
  position: absolute;
  left: 10px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
`;

const Dot = styled.div`
  position: absolute;
  left: 4px;
  top: 18px;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.9);
  box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.12);
`;

const Card = styled.div`
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  padding: 18px;

  transition:
    transform 0.18s ease,
    background 0.18s ease,
    border 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(59, 130, 246, 0.22);
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  align-items: baseline;
`;

const Role = styled.div`
  font-weight: 900;
  font-size: 16px;
  color: #f8fafc;
`;

const Company = styled.div`
  margin-top: 6px;
  font-size: 14px;
  font-weight: 700;
  color: #38bdf8;
`;

const Duration = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #c084fc;
`;

const List = styled.ul`
  margin: 14px 0 0;
  padding-left: 18px;
  color: #cbd5e1;
  line-height: 1.75;
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 7px 10px;
  border-radius: 999px;
  color: #93c5fd;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(96, 165, 250, 0.2);
`;

export default function ExperienceSection() {
  return (
    <Wrap>
      {experience.map((e) => (
        <Item key={`${e.company}-${e.role}`}>
          <Line />
          <Dot />
          <Card>
            <TopRow>
              <div>
                <Role>{e.role}</Role>
                <Company>{e.company}</Company>
              </div>
              <Duration>{e.duration}</Duration>
            </TopRow>

            <List>
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </List>

            <TechRow>
              {e.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </TechRow>
          </Card>
        </Item>
      ))}
    </Wrap>
  );
}
