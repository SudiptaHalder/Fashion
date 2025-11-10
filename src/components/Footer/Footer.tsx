import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterSection = styled.footer`
  font-family: sans-serif;
  font-size: 12px;
  box-sizing: border-box;
  -webkit-font-smoothing: inherit;
//   background-color: rgb(0, 0, 0);
  width: 100%;
  opacity: 1;
  flex: none;
  order: 1002;
  position: relative;
`;

const FooterHeader = styled.header`
  background-color: rgb(22, 22, 22);
  border-radius: 156px;
  opacity: 1;
  padding: 80px 60px 60px 60px;
  position: relative;

  @media (max-width: 768px) {
    border-radius: 80px;
    padding: 60px 40px 40px 40px;
  }

  @media (max-width: 480px) {
    border-radius: 40px;
    padding: 40px 20px 30px 20px;
  }
`;

const MainContent = styled.div`
  opacity: 1;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 80px;
  align-items: start;
  margin-bottom: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  @media (max-width: 768px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`;

const LeftContent = styled.div`
  opacity: 1;
`;

const TextContent = styled.div`
  opacity: 1;
  margin-bottom: 50px;
`;

const StayConnected = styled(motion.h5)`
  color: rgb(255, 255, 255);
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  font-weight: 600;
  margin: 0 0 30px 0;
  text-transform: uppercase;
  letter-spacing: 1px;

  span {
    white-space: nowrap;
  }
`;

const EmailLink = styled(motion.h2)`
  color: rgb(255, 255, 255);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  margin: 0 0 30px 0;
  line-height: 1.1;

  a {
    color: inherit;
    text-decoration: none;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  span {
    white-space: unset;
  }
`;

const Description = styled(motion.p)`
  color: rgb(155, 161, 165);
  font-size: clamp(1.1rem, 1.4vw, 1.4rem);
  line-height: 1.5;
  margin: 0;
  max-width: 500px;
`;

const MadeWithLove = styled.div`
  opacity: 1;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MadeWithText = styled.p`
  color: rgb(255, 255, 255);
  font-size: clamp(0.9rem, 1vw, 1rem);
  margin: 0;
`;

const FutureThingsLink = styled(motion.a)`
  color: rgb(255, 255, 255);
  font-family: "Neue Montreal Regular", sans-serif;
  font-size: clamp(0.9rem, 1vw, 1rem);
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Navigation = styled.div`
  opacity: 1;
`;

const NavLinks = styled.div`
  opacity: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const NavLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
  opacity: 1;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    .nav-label {
      color: rgba(255, 255, 255, 0.8);
    }
    
    .line-1 {
      transform: scaleX(1);
    }
  }
`;

const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  opacity: 1;
`;

const NavLabel = styled.h4`
  color: rgb(255, 255, 255);
  font-size: clamp(1.1rem, 1.3vw, 1.3rem);
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;
`;

const LineWrap = styled.div`
  opacity: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Line1 = styled.div`
  background-color: rgb(255, 255, 255);
  height: 2px;
  width: 100%;
  transform: scaleX(0.8);
  transition: transform 0.3s ease;
`;

const Line2 = styled.div`
  background-color: rgb(255, 255, 255);
  height: 2px;
  width: 100%;
  opacity: 0;
`;

const NavCount = styled.p`
  color: rgb(242, 242, 242);
  font-size: clamp(0.9rem, 1vw, 1rem);
  margin: 0;
`;

const SocialSection = styled.div`
  opacity: 1;
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const SocialLabel = styled.h4`
  color: rgb(199, 199, 199);
  font-size: clamp(1rem, 1.1vw, 1.1rem);
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SocialIcons = styled.div`
  opacity: 1;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const SocialIcon = styled(motion.a)`
  opacity: 1;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: rgba(255, 255, 255, 0.44);
  }
`;

const BrandSection = styled.div`
  opacity: 1;
  text-align: center;
  margin: 60px 0 40px 0;
`;

const BrandName = styled(motion.h1)`
  color: rgba(255, 255, 255, 0.8);
  font-family: monospace;
  font-size: clamp(4rem, 8vw, 6rem);
  font-weight: 500;
  margin: 0 0 30px 0;
  line-height: 1em;
  letter-spacing: 0em;
`;

const Copyright = styled(motion.p)`
  color: rgb(155, 161, 165);
  font-size: clamp(0.9rem, 1vw, 1rem);
  text-align: center;
  margin: 0;
`;

// Animation components
const AnimatedLetter: React.FC<{ children: string; delay: number }> = ({ children, delay }) => (
  <motion.span
    initial={{ opacity: 0, filter: 'blur(5px)', y: 10 }}
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

const Footer: React.FC = () => {
  const navItems = [
    { name: 'Home', href: './', count: '' },
    { name: 'About', href: './about', count: '' },
    { name: 'Projects', href: './projects', count: '(06)' },
    { name: 'Journal', href: './journal', count: '(05)' },
    { name: 'Contact us', href: './contact-us', count: '' }
  ];

  const socialIcons = [
    { name: 'Twitter', href: 'https://x.com/futurethingsapp' },
    { name: 'Instagram', href: 'https://www.instagram.com/framer/#' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/framer/' },
    { name: 'YouTube', href: 'https://www.youtube.com/@framer' }
  ];

  // Simple SVG icons as placeholders
  const SocialIconSVG = ({ name }: { name: string }) => {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="rgba(255, 255, 255, 0.44)" />
      </svg>
    );
  };

  return (
    <FooterSection id="footer">
      <FooterHeader>
        <MainContent>
          <LeftContent>
            <TextContent>
              <StayConnected
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>
                  <AnimatedText text="Stay" delay={0.1} />
                </span>{' '}
                <span style={{ whiteSpace: 'nowrap' }}>
                  <AnimatedText text="connected." delay={0.3} />
                </span>
              </StayConnected>

              <EmailLink
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <a href="https://outlook.office.com/mail/" target="_blank" rel="noopener">
                  <span style={{ whiteSpace: 'unset' }}>
                    <AnimatedText text="hi@Noiré.com" delay={0.4} />
                  </span>
                </a>
              </EmailLink>

              <Description
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                At Noiré, we break boundaries to craft designs that stand out and deliver results. We blend creativity with strategy, turning bold ideas into digital experiences that captivate and inspire.
              </Description>
            </TextContent>

            <MadeWithLove>
              <MadeWithText>Made with Love by</MadeWithText>
              <FutureThingsLink
                href="https://future-things.co/"
                target="_blank"
                rel="noopener"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                FutureThings.
              </FutureThingsLink>
            </MadeWithLove>
          </LeftContent>

          <Navigation>
            <NavLinks>
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <LabelWrap>
                    <NavLabel className="nav-label">{item.name}</NavLabel>
                    <LineWrap>
                      <Line1 className="line-1" />
                      <Line2 className="line-2" />
                    </LineWrap>
                  </LabelWrap>
                  {item.count && <NavCount>{item.count}</NavCount>}
                </NavLink>
              ))}
            </NavLinks>

            <SocialSection>
              <SocialLabel>Social Media</SocialLabel>
              <SocialIcons>
                {socialIcons.map((social, index) => (
                  <SocialIcon
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <SocialIconSVG name={social.name} />
                  </SocialIcon>
                ))}
              </SocialIcons>
            </SocialSection>
          </Navigation>
        </MainContent>

        <BrandSection>
          <BrandName
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span style={{ whiteSpace: 'nowrap' }}>
              <AnimatedText text="Noiré" delay={0.2} />
            </span>
          </BrandName>

          <Copyright
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            ©2025 Noiré Studio. All right reserved.
          </Copyright>
        </BrandSection>
      </FooterHeader>
    </FooterSection>
  );
};

export default Footer;