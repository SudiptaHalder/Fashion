import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ClientsSection = styled.section`
  font-family: sans-serif;
  font-size: 12px;
  box-sizing: border-box;
  -webkit-font-smoothing: inherit;
  background-color: #000000; /* Client section also black */
  will-change: transform;
  border-radius: 156px;
  display: flex;
  flex-flow: column;
  flex: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  height: 100vh;
  max-height: 1080px;
  padding: 60px 0 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 80px;
    height: auto;
    min-height: 100vh;
    padding: 40px 0 0 0;
  }

  @media (max-width: 480px) {
    border-radius: 40px;
    padding: 30px 0 0 0;
  }
`;

const ClientsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  width: 100%;
  align-items: start;
  padding: 0 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    gap: 30px;
    padding: 0 30px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

const ClientsTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ClientsHeading = styled(motion.h1)`
  color: rgb(255, 255, 255);
  font-size: clamp(5rem, 10vw, 10rem);
  font-weight: 700;
  margin: 0;
  line-height: 0.8;
  letter-spacing: -0.03em;
  background: transparent;
  text-align: left;
`;

const ClientsWord = styled.span`
  white-space: nowrap;
`;

const ClientsDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 20px;
`;

const DescriptionText = styled(motion.p)`
  color: rgb(242, 242, 242);
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  line-height: 1.5;
  margin: 0;
  opacity: 0.9;
  background: transparent;
  text-align: left;
  max-width: 500px;
`;

const ClientsLogosContainer = styled.div`
  width: 100%;
  height: 65vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    height: 55vh;
  }

  @media (max-width: 480px) {
    height: 45vh;
  }
`;

const LogosScrollSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  align-items: center;
  margin: 0;
  padding: 0 20px; /* Add padding to account for gaps */
  list-style-type: none;
  opacity: 1;
  mask-image: none;
  overflow: hidden;
`;

const LogosList = styled(motion.ul)`
  display: flex;
  width: auto;
  height: 100%;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  gap: 20px; /* Small gap between boxes */
  position: relative;
  flex-direction: row;
  will-change: transform;
`;

const LogoItem = styled.li`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ClientLogo = styled.div`
  width: 400px; /* Fixed width for consistent sizing */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 40px;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.02);
    z-index: 2;
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
    border-radius: 40px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 300px;
    border-radius: 30px;

    &::before {
      border-radius: 30px;
    }
  }

  @media (max-width: 480px) {
    width: 250px;
    border-radius: 20px;

    &::before {
      border-radius: 20px;
    }
  }
`;

const LogoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  border-radius: 40px;

  ${ClientLogo}:hover & {
    color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    letter-spacing: 2px;
    border-radius: 30px;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    letter-spacing: 1px;
    border-radius: 20px;
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

const Clients: React.FC = () => {
  // Array of client logos
  const clientLogos = [
    { id: 1, name: 'OXYGEN' },
    { id: 2, name: 'NOVA' },
    { id: 3, name: 'VERGE' },
    { id: 4, name: 'AXIS' },
    { id: 5, name: 'SOLARIS' },
    { id: 6, name: 'ECHO' },
    { id: 7, name: 'LYRA' },
    { id: 8, name: 'ZENITH' },
    { id: 9, name: 'NEXUS' },
    { id: 10, name: 'QUANTUM' },
    { id: 11, name: 'ORBIT' },
    { id: 12, name: 'ATLAS' },
  ];

  // Duplicate the logos to create seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  // Calculate total width for smooth looping
  const totalWidth = (400 + 20) * clientLogos.length; // (box width + gap) * number of logos

  return (
    <ClientsSection id="clients">
      <ClientsHeader>
        <ClientsTitleSection>
          <ClientsHeading
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ClientsWord>
              <AnimatedText text="clients" delay={0.2} />
            </ClientsWord>
          </ClientsHeading>
        </ClientsTitleSection>
        
        <ClientsDescriptionSection>
          <DescriptionText
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            At Noiré, we collaborate with forward-thinking brands, startups, and industry leaders who dare to challenge the norm.
          </DescriptionText>
        </ClientsDescriptionSection>
      </ClientsHeader>

      <ClientsLogosContainer>
        <LogosScrollSection>
          <LogosList
            animate={{
              x: [0, -totalWidth], // Much slower movement
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop" as const,
                duration: 120, // Much slower - 2 minutes for full cycle
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <LogoItem key={`${logo.id}-${index}`}>
                <ClientLogo>
                  <LogoPlaceholder>
                    {logo.name}
                  </LogoPlaceholder>
                </ClientLogo>
              </LogoItem>
            ))}
          </LogosList>
        </LogosScrollSection>
      </ClientsLogosContainer>
    </ClientsSection>
  );
};

export default Clients;