import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  font-family: sans-serif;
  font-size: 12px;
  box-sizing: border-box;
  -webkit-font-smoothing: inherit;
  background-color: #000000;
  will-change: transform;
  border-radius: 156px;
  display: flex;
  flex-direction: column;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  height: 100vh;
  max-height: 1080px;
  padding: 0;
  position: relative;
  overflow: hidden;
  order: 1001;

  @media (max-width: 768px) {
    border-radius: 80px;
    height: auto;
    min-height: 100vh;
  }

  @media (max-width: 480px) {
    border-radius: 40px;
  }
`;

const ContactHeader = styled.header`
  border-radius: 156px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
    mix-blend-mode: overlay;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  width: 100%;
  max-width: 1400px;
  padding: 0 60px;
  opacity: 1;

  @media (max-width: 1200px) {
    gap: 60px;
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0 40px;
    gap: 40px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
    gap: 30px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  height: 100%;
  min-height: 500px;

  @media (max-width: 968px) {
    align-items: center;
    text-align: center;
    min-height: auto;
    padding: 40px 0;
  }
`;

const ContactHeading = styled(motion.h1)`
  color: rgb(255, 255, 255);
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 700;
  margin: 0 0 40px 0;
  line-height: 0.9;
  letter-spacing: -0.03em;
  background: transparent;
  text-align: left;

  @media (max-width: 968px) {
    text-align: center;
  }

  span {
    white-space: nowrap;
  }
`;

const ContactDescription = styled(motion.p)`
  color: rgb(242, 242, 242);
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  line-height: 1.5;
  margin: 0;
  opacity: 0.9;
  background: transparent;
  text-align: left;
  max-width: 500px;

  @media (max-width: 968px) {
    text-align: center;
  }
`;

const ContactFormContainer = styled(motion.div)`
  --border-bottom-width: 1px;
  --border-color: rgba(255, 255, 255, 0.37);
  --border-left-width: 1px;
  --border-right-width: 1px;
  --border-style: solid;
  --border-top-width: 1px;
  backdrop-filter: blur(44px);
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 46px;
  padding: 50px;
  width: 100%;
  max-width: 500px;
  opacity: 1;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  @media (max-width: 1200px) {
    padding: 40px;
    max-width: 450px;
  }

  @media (max-width: 968px) {
    margin: 0 auto;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
    border-radius: 36px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    border-radius: 26px;
  }
`;

const FormTitle = styled.h5`
  color: rgb(255, 255, 255);
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  font-weight: 600;
  margin: 0 0 40px 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ContactForm = styled.form`
  opacity: 1;
  width: 100%;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
  opacity: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const FormField = styled.div`
  opacity: 1;
`;

const FieldLabel = styled.p`
  color: rgb(255, 255, 255);
  font-size: clamp(0.9rem, 1vw, 1rem);
  margin: 0 0 12px 0;
  text-align: left;
`;

const InputWrapper = styled.div`
  --framer-input-border-bottom-width: 1px;
  --framer-input-border-color: rgba(255, 255, 255, 0.2);
  --framer-input-border-left-width: 1px;
  --framer-input-border-radius-bottom-left: 12px;
  --framer-input-border-radius-bottom-right: 12px;
  --framer-input-border-radius-top-left: 12px;
  --framer-input-border-radius-top-right: 12px;
  --framer-input-border-right-width: 1px;
  --framer-input-border-style: solid;
  --framer-input-border-top-width: 1px;
  --framer-input-font-color: rgb(255, 255, 255);
  --framer-input-placeholder-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  opacity: 1;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:focus-within {
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  background: transparent;
  border: none;
  color: rgb(255, 255, 255);
  font-size: clamp(0.9rem, 1vw, 1rem);
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    background: transparent;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  font-family: monospace;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  padding: 18px 40px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  width: 100%;
  opacity: 1;
  will-change: transform;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  }

  @media (max-width: 480px) {
    padding: 16px 30px;
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

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <ContactSection id="contact">
      <ContactHeader>
        <BackgroundImage>
          <img
            decoding="async"
            loading="lazy"
            src="/contact.jpg"
            alt="Modern abstract background"
          />
        </BackgroundImage>
        
        <ContentWrapper>
          {/* Left Side - Text Content */}
          <TextContent>
            <ContactHeading
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span style={{ whiteSpace: 'nowrap' }}>
                <AnimatedText text="get" delay={0.1} />
              </span>{' '}
              <span style={{ whiteSpace: 'nowrap' }}>
                <AnimatedText text="in" delay={0.3} />
              </span>{' '}
              <span style={{ whiteSpace: 'nowrap' }}>
                <AnimatedText text="touch" delay={0.5} />
              </span>
            </ContactHeading>

            <ContactDescription
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Have a project in mind? Whether you're launching a brand, designing a product, or elevating your digital presence, we're here to bring your vision to life.
            </ContactDescription>
          </TextContent>

          {/* Right Side - Contact Form */}
          <ContactFormContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <FormTitle>Contact Us</FormTitle>
            
            <ContactForm onSubmit={handleSubmit}>
              <FormRow>
                <FormField>
                  <FieldLabel>First name</FieldLabel>
                  <InputWrapper>
                    <FormInput
                      type="text"
                      name="firstName"
                      placeholder="Jane"
                      required
                    />
                  </InputWrapper>
                </FormField>
                
                <FormField>
                  <FieldLabel>Last name</FieldLabel>
                  <InputWrapper>
                    <FormInput
                      type="text"
                      name="lastName"
                      placeholder="Smith"
                      required
                    />
                  </InputWrapper>
                </FormField>
              </FormRow>

              <FormRow>
                <FormField>
                  <FieldLabel>Email</FieldLabel>
                  <InputWrapper>
                    <FormInput
                      type="email"
                      name="email"
                      placeholder="jane@framer.com"
                      required
                    />
                  </InputWrapper>
                </FormField>
                
                <FormField>
                  <FieldLabel>Phone no.</FieldLabel>
                  <InputWrapper>
                    <FormInput
                      type="tel"
                      name="phone"
                      placeholder="(347)-000-0000"
                    />
                  </InputWrapper>
                </FormField>
              </FormRow>

              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit
              </SubmitButton>
            </ContactForm>
          </ContactFormContainer>
        </ContentWrapper>
      </ContactHeader>
    </ContactSection>
  );
};

export default Contact;