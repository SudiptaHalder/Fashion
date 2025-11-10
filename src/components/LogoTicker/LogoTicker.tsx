import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TickerSection = styled.section`
  padding: 60px 0;
  background: #f8f9fa;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TickerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TickerTitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TickerTrack = styled(motion.div)`
  display: flex;
  gap: 60px;
  align-items: center;
`;

const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  font-weight: 600;
  font-size: 18px;
  color: #333;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const logos = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Netflix', 'Spotify', 'Uber', 'Airbnb'];

const LogoTicker: React.FC = () => {
  return (
    <TickerSection>
      <TickerContainer>
        <TickerTitle>Trusted by the world's best companies</TickerTitle>
        <div style={{ overflow: 'hidden' }}>
          <TickerTrack
            animate={{ x: [-1200, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <LogoItem key={index}>
                {logo}
              </LogoItem>
            ))}
          </TickerTrack>
        </div>
      </TickerContainer>
    </TickerSection>
  );
};

export default LogoTicker;