import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skills } from "../../data/constants";

const Container = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content-center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 50px;
  text-align: center;
  font-weight: 900;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 900px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  padding: 40px;
  background: rgba(17, 17, 40, 0.7);
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  margin-top: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 30px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 15px;
    gap: 12px;
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 12px;
  padding: 15px;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(23, 92, 230, 0.3);
  }

  img {
    width: 45px;
    height: 45px;
    margin-bottom: 8px;
    transition: all 0.4s ease-in-out;

    @media (max-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }

  span {
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const Skills = () => {
  const technologies = skills[0].skills;

  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills.</Title>
        <Desc>TECHNOLOGIES</Desc>
        <SkillsContainer>
          {technologies.map((tech, index) => (
            <SkillItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img 
                src={tech.image} 
                alt={tech.name}
              />
              <span>{tech.name}</span>
            </SkillItem>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
