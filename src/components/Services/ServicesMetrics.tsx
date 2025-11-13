import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesMetricsSection = styled.section`
  font-family: sans-serif;
  font-size: 12px;
  box-sizing: border-box;
  -webkit-font-smoothing: inherit;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  will-change: transform;
  border-radius: 156px;
  display: flex;
  flex-flow: column;
  flex: none;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  height: 140vh;
  max-height: 1400px;
  padding: 80px 0 60px 0;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 120, 120, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(120, 120, 120, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    border-radius: 80px;
    height: auto;
    min-height: 120vh;
    padding: 60px 0 40px 0;
  }

  @media (max-width: 480px) {
    border-radius: 40px;
    padding: 40px 0 30px 0;
  }
`;

const ServicesHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  width: 100%;
  align-items: start;
  padding: 0 60px;
  margin-bottom: 80px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 40px;
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    gap: 30px;
    padding: 0 30px;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
    margin-bottom: 40px;
  }
`;

const ServicesTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ServicesHeading = styled(motion.h1)`
  color: rgb(255, 255, 255);
  font-size: clamp(5rem, 10vw, 10rem);
  font-weight: 700;
  margin: 0;
  line-height: 0.8;
  letter-spacing: -0.03em;
  background: transparent;
  text-align: left;
`;

const ServicesWord = styled.span`
  white-space: nowrap;
`;

const ServicesDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 20px;
`;

const DescriptionText = styled(motion.p)`
  color: rgb(155, 161, 165);
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  line-height: 1.5;
  margin: 0;
  opacity: 0.9;
  background: transparent;
  text-align: left;
  max-width: 500px;
`;

const JournalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  width: 100%;
  padding: 0 60px;
  align-items: start;

  @media (max-width: 1200px) {
    gap: 40px;
    padding: 0 40px;
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 0 30px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
    gap: 40px;
  }
`;

const JournalItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  position: relative;
`;

const JournalImageContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 60px;
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-10px);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 1200px) {
    height: 450px;
    border-radius: 50px;
  }

  @media (max-width: 968px) {
    height: 400px;
    border-radius: 40px;
  }

  @media (max-width: 768px) {
    height: 350px;
    border-radius: 30px;
  }

  @media (max-width: 480px) {
    height: 300px;
    border-radius: 25px;
    margin-bottom: 25px;
  }
`;

const JournalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;

  ${JournalImageContainer}:hover & {
    transform: scale(1.08);
  }
`;

const JournalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0 20px;
`;

const JournalTitle = styled.h3`
  color: rgb(255, 255, 255);
  font-size: clamp(1.3rem, 1.6vw, 1.6rem);
  font-weight: 600;
  margin: 0 0 12px 0;
  line-height: 1.3;
  background: transparent;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
`;

const JournalCategory = styled.h5`
  color: rgb(155, 161, 165);
  font-size: clamp(0.9rem, 1.1vw, 1.1rem);
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: 0.9;
  background: transparent;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

// Animation components
const AnimatedLetter: React.FC<{ children: string; delay: number }> = ({ children, delay }) => (
  <motion.span
    initial={{ opacity: 0, filter: 'blur(5px)', y: 20 }}
    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    transition={{ delay: delay, duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    style={{ display: 'inline-block', willChange: 'transform' }}
  >
    {children}
  </motion.span>
);

const AnimatedText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  return (
    <>
      {text.split('').map((letter, index) => (
        <AnimatedLetter key={index} delay={delay + index * 0.05}>
          {letter}
        </AnimatedLetter>
      ))}
    </>
  );
};

const ServicesMetrics: React.FC = () => {
  const journalItems = [
    {
      id: 1,
      title: 'How AI is Transforming Design in 2025',
      category: 'AI Design',
      imageUrl: 'https://framerusercontent.com/images/r1Q4APz4TNMV5x9oKRYscAL06c.jpg',
      href: './journal/how-ai-is-transforming-design-in-2025',
      alt: 'How AI is Transforming Design in 2025'
    },
    {
      id: 2,
      title: 'How to Choose the Right Palette for Your Brand',
      category: 'Visual Design',
      imageUrl: 'https://framerusercontent.com/images/BYTBcqFikmPNhvjQYU7pi3ciyI.jpg',
      href: './journal/how-to-choose-the-right-palette-for-your-brand',
      alt: 'How to Choose the Right Palette for Your Brand'
    },
    {
      id: 3,
      title: '10 Web Design Trends That Will Dominate This Year',
      category: 'Trends',
      imageUrl: 'https://framerusercontent.com/images/ZNnj2toPGisdyf6eClzPnuV72fM.jpg',
      href: './journal/10-web-design-trends-that-will-dominate-this-year',
      alt: '10 Web Design Trends That Will Dominate This Year'
    }
  ];

  return (
    <ServicesMetricsSection id="journal">
      <ServicesHeader>
        <ServicesTitleSection>
          <ServicesHeading
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ServicesWord>
              <AnimatedText text="Journal" delay={0.2} />
            </ServicesWord>
          </ServicesHeading>
        </ServicesTitleSection>
        
        <ServicesDescriptionSection>
          <DescriptionText
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our journal is where design meets thought leadership. From industry trends to creative breakthroughs, we share insights that inspire, challenge, and push the boundaries of design.
          </DescriptionText>
        </ServicesDescriptionSection>
      </ServicesHeader>

      <JournalGrid>
        {journalItems.map((item, index) => (
          <JournalItem
            key={item.id}
            as={motion.a}
            href={item.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <JournalImageContainer>
              <JournalImage
                src={item.imageUrl}
                alt={item.alt}
                decoding="async"
              />
            </JournalImageContainer>
            <JournalContent>
              <JournalTitle>
                {item.title}
              </JournalTitle>
              <JournalCategory>
                {item.category}
              </JournalCategory>
            </JournalContent>
          </JournalItem>
        ))}
      </JournalGrid>
    </ServicesMetricsSection>
  );
};

export default ServicesMetrics;