import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content-center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 900;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 30px;
  padding: 0 25px;

  .slick-list {
    margin: 0 -10px;
    overflow: hidden;
  }

  .slick-track {
    display: flex !important;
    justify-content: center;
    touch-action: pan-y pinch-zoom;
  }

  .slick-slide {
    opacity: 0.5;
    transition: all 0.5s ease;
    transform: scale(0.85);
    filter: blur(2px);
    pointer-events: none;
    
    &.slick-active {
      opacity: 0.5;
      transform: scale(0.85);
      filter: blur(2px);
      pointer-events: none;

      @media (max-width: 1000px) {
        opacity: 1;
        transform: scale(1);
        filter: blur(0);
        pointer-events: auto;
      }
    }
    
    &.slick-current {
      opacity: 1;
      transform: scale(1);
      filter: blur(0);
      pointer-events: auto;
    }
  }

  .slick-slide > div {
    padding: 0 10px;
    @media (max-width: 1000px) {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
      max-width: 500px;
    }
  }

  @media (max-width: 1024px) {
    padding: 0;
  }
`;

const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin-top: 32px;
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.text_primary};
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
          speed: 200,
          cssEase: "linear",
          infinite: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
          speed: 200,
          cssEase: "linear",
          infinite: true
        },
      },
    ],
  };

  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          My portfolio highlights my skills and experience through concrete examples of my work. Each project, linked to its code repository and live demo, showcases my ability to tackle complex challenges, leverage diverse technologies, and manage projects efficiently.
        </Desc>
        <CarouselContainer>
          <Slider ref={setSliderRef} {...settings}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                onClick={() => handleProjectClick(project.demo)}
              />
            ))}
          </Slider>
          <ArrowContainer>
            <Arrow onClick={() => sliderRef?.slickPrev()}>
              <ChevronLeft />
            </Arrow>
            <Arrow onClick={() => sliderRef?.slickNext()}>
              <ChevronRight />
            </Arrow>
          </ArrowContainer>
        </CarouselContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
