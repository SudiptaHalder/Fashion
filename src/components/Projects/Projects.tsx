import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  font-family: sans-serif;
  font-size: 12px;
  box-sizing: border-box;
  -webkit-font-smoothing: inherit;
  display: flex;
  flex-flow: column;
  flex: none;
  place-content: center flex-start;
  align-items: center;
  gap: 60px;
  width: 100%;
  max-width: 1920px;
  height: min-content;
  padding: 16px;
  position: relative;
`;

const AboutSection = styled.section`
  font-family: sans-serif;
  font-size: 12px;
  box-sizing: border-box;
  -webkit-font-smoothing: inherit;
  display: flex;
  flex-flow: row;
  flex: none;
  place-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 656px;
  max-height: 1080px;
  padding: 8px;
  position: relative;
  overflow: hidden;
  border-radius: 100px;
`;

const AboutContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
`;

const AboutBackground = styled.div`
  position: absolute;
  border-radius: inherit;
  inset: 0px;
  
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-position: center center;
    object-fit: cover;
  }
`;

const TextStack = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  display: flex;
  align-items: baseline;
  gap: 20px;
  background: transparent;
`;

const AboutSubtitle = styled(motion.h5)`
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: rgb(255, 255, 255);
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: transparent;
`;

const AboutTitle = styled(motion.h1)`
  font-family: sans-serif;
  font-size: 8rem;
  font-weight: 400;
  color: rgb(255, 255, 255);
  margin: 0;
  line-height: 0.8;
  letter-spacing: -0.02em;
  background: transparent;
`;

const AboutDescription = styled(motion.div)`
  position: absolute;
  bottom: 10%;
  right: 10%;
  max-width: 400px;
  background: transparent;
`;

const DescriptionText = styled.p`
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: rgb(255, 255, 255);
  line-height: 1.5;
  margin: 0;
  background: transparent;
`;

const Collection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  height: 800px;
  width: 100%;
  border-radius: 100px;
  opacity: 1;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    .content-overlay {
      backdrop-filter: blur(44px);
      background-color: rgba(0, 0, 0, 0.24);
    }
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  border-radius: inherit;
  inset: 0px;
  
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-position: center center;
    object-fit: cover;
  }
`;

const ContentOverlay = styled.div`
  position: absolute;
  border-radius: 72px;
  inset: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(0px);
  background-color: transparent;
`;

const Category = styled.h5`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const ProjectTitle = styled.h2`
  font-family: sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 0;
  line-height: 1.1;
`;

const ExploreButton = styled(motion.a)`
  backdrop-filter: blur(32px);
  background-color: rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  opacity: 0;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ButtonText = styled.p`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  margin: 0;
`;

const PlusIcon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '+';
    font-size: 18px;
    font-weight: 300;
    color: rgb(255, 255, 255);
  }
`;

const projects = [
  {
    id: 1,
    image: "https://framerusercontent.com/images/vDS2R7LCoOompxmBq9rV6LicTqI.webp",
    category: "Art Direction",
    title: "Beyond Time",
    link: "./projects/beyond-time"
  },
  {
    id: 2,
    image: "https://framerusercontent.com/images/qWafyJa8F6xJsc3zslvSVczRiac.webp",
    category: "Brand Identity",
    title: "Brand Redefine",
    link: "./projects/brand-redefine"
  },
  {
    id: 3,
    image: "https://framerusercontent.com/images/vLFNQftWxn8GlWaCrxJpZKWD10.webp",
    category: "Ad Campaign",
    title: "Every Second",
    link: "./projects/every-second"
  },
  {
    id: 4,
    image: "https://framerusercontent.com/images/mq1HgIRqnDetOlR0yUFJ40kEIT4.webp",
    category: "Art Direction",
    title: "Timeless Mastery",
    link: "./projects/timeless-mastery"
  }
];

const AnimatedText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  return (
    <>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: delay + index * 0.05, duration: 0.5 }}
          style={{ display: 'inline-block', willChange: 'transform' }}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
};

const AnimatedLetter: React.FC<{ children: string; delay: number }> = ({ children, delay }) => (
  <motion.span
    initial={{ opacity: 0, filter: 'blur(5px)' }}
    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
    transition={{ delay: delay, duration: 0.5 }}
    style={{ display: 'inline-block', willChange: 'transform' }}
  >
    {children}
  </motion.span>
);

const Projects: React.FC = () => {
  return (
    <>
      <ProjectsSection id="projects">
        <Collection>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BackgroundImage>
                <img
                  decoding="auto"
                  src={project.image}
                  alt={project.title}
                  sizes="max((min(100vw, 1920px) - 52px) / 2, 50px)"
                  srcSet={`
                    ${project.image}?scale-down-to=512 512w,
                    ${project.image}?scale-down-to=1024 1024w,
                    ${project.image} 1920w
                  `}
                />
              </BackgroundImage>
              
              <ContentOverlay className="content-overlay">
                <Category>
                  <AnimatedText text={project.category} delay={0.2} />
                </Category>
                
                <ProjectTitle>
                  <AnimatedText text={project.title} delay={0.4} />
                </ProjectTitle>
                
                <ExploreButton href={project.link}>
                  <ButtonText>Explore More</ButtonText>
                  <PlusIcon />
                </ExploreButton>
              </ContentOverlay>
            </ProjectCard>
          ))}
        </Collection>
      </ProjectsSection>

      <AboutSection id="about">
        <AboutContainer>
          <AboutBackground>
            <img
              decoding="auto"
              src="/model.jpg"
              alt="About Noiré"
            />
          </AboutBackground>
          
          <TextStack>
            <AboutSubtitle
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              about Us.25
            </AboutSubtitle>
            
            <AboutTitle
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {"about".split('').map((letter, index) => (
                <AnimatedLetter key={index} delay={0.6 + index * 0.1}>
                  {letter}
                </AnimatedLetter>
              ))}
            </AboutTitle>
          </TextStack>
          
          <AboutDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <DescriptionText>
              At Noiré, we craft designs that don't just look stunning—they create impact. Blending creativity with strategy, we transform ideas into immersive digital experiences that captivate, engage, and convert.
            </DescriptionText>
          </AboutDescription>
        </AboutContainer>
      </AboutSection>
    </>
  );
};

export default Projects;