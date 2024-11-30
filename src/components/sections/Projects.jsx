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
  }

  .slick-slide {
    opacity: 0;
    transition: all 0.5s ease;
    transform: scale(0.85);
    filter: blur(2px);
    pointer-events: none;
    
    &.slick-active {
      opacity: 0.5;
      transform: scale(0.85);
      filter: blur(2px);
      pointer-events: auto;

      @media (max-width: 1000px) {
        opacity: 1;
        transform: scale(1);
        filter: blur(0);
      }
    }
    
    &.slick-current {
      opacity: 1;
      transform: scale(1);
      filter: blur(0);
      pointer-events: auto;
    }

    & > div {
      display: flex;
      justify-content: center;
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
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 32px;

  @media (max-width: 640px) {
    gap: 24px;
    margin-top: 24px;
  }
`;

const Arrow = styled.div`
  width: 55px;
  height: 55px;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 0.2) 0%,
    hsla(294, 100%, 50%, 0.2) 100%
  );
  border: 2px solid transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      225deg,
      hsla(271, 100%, 50%, 1) 0%,
      hsla(294, 100%, 50%, 1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 20px rgba(138, 43, 226, 0.4);
    
    &:before {
      opacity: 1;
    }

    svg {
      color: white;
      transform: scale(1.1);
    }
  }

  &:active {
    transform: scale(0.95) translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 640px) {
    width: 45px;
    height: 45px;
  }

  svg {
    font-size: 28px;
    color: ${({ theme }) => theme.text_primary};
    position: relative;
    z-index: 1;
    transition: all 0.3s ease-in-out;

    @media (max-width: 640px) {
      font-size: 24px;
    }
  }
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    draggable: false,
    accessibility: false,
    centerMode: true,
    centerPadding: '0',
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          swipe: false,
          swipeToSlide: false,
          touchMove: false,
          draggable: false
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          speed: 800,
          swipe: false,
          swipeToSlide: false,
          touchMove: false,
          draggable: false
        }
      }
    ]
  };

  const displayProjects = projects;

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects.</Title>
        <Desc>
          My portfolio highlights my skills and experience through concrete
          examples of my work. Each project, linked to its code repository and
          live demo, showcases my ability to tackle complex challenges, leverage
          diverse technologies, and manage projects efficiently.
        </Desc>
        <CarouselContainer>
          <Slider ref={setSliderRef} {...settings}>
            {displayProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          </Slider>
          <ArrowContainer>
            <Arrow onClick={sliderRef?.slickPrev}>
              <ChevronLeft />
            </Arrow>
            <Arrow onClick={sliderRef?.slickNext}>
              <ChevronRight />
            </Arrow>
          </ArrowContainer>
        </CarouselContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
