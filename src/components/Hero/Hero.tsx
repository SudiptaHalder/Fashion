// import React from 'react';
// import styled from 'styled-components';
// import { motion, Variants } from 'framer-motion';

// const HeroContainer = styled.section`
//   background-color: #ffffff;
//   height: calc(100vh - 0px);
//   max-width: 1920px;
//   width: 100%;
//   opacity: 1;
//   position: relative;
//   padding:10px;
// `;

// const MainContainer = styled.div`
//   border-radius: 156px;
//   opacity: 1;
//   position: relative;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   border-radius: inherit;
//   inset: 0px;
  
//   img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     border-radius: inherit;
//     object-position: center center;
//     object-fit: cover;
//   }
// `;

// const TextContent = styled.div`
//   opacity: 1;
//   position: absolute;
//   top: 50%;
//   right: 10%;
//   transform: translateY(-50%);
//   text-align: right;
//   z-index: 2;
//   max-width: 500px;
// `;

// const Stack = styled.div`
//   opacity: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   gap: 8px;
//   margin-bottom: 24px;
// `;

// const MainTitle = styled(motion.h1)`
//   @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
//   font-family: 'Orbitron', monospace;
//   font-size: clamp(4rem, 10vw, 8rem);
//   font-weight: 700;
//   color: #000000;
//   margin: 0;
//   line-height: 0.9;
//   letter-spacing: -0.02em;
// `;

// const Subtitle = styled(motion.h5)`
//   font-family: sans-serif;
//   font-size: clamp(1rem, 2vw, 1.25rem);
//   font-weight: 400;
//   color: #000000;
//   margin: 0;
//   letter-spacing: 0.02em;
//   text-transform: uppercase;
// `;

// const Description = styled.div`
//   opacity: 1;
// `;

// const DescriptionText = styled.p`
//   font-family: sans-serif;
//   font-size: clamp(0.875rem, 1.5vw, 1rem);
//   color: #707070;
//   line-height: 1.5;
//   margin: 0;
//   text-align: right;
//   font-weight: 400;
// `;

// // Letter animation variants with proper TypeScript typing
// const letterVariants: Variants = {
//   hidden: { 
//     opacity: 0, 
//     filter: 'blur(10px)',
//     y: 20
//   },
//   visible: (i: number) => ({
//     opacity: 1,
//     filter: 'blur(0px)',
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.8,
//       ease: [0.2, 0.65, 0.3, 0.9]
//     }
//   })
// };

// // Container variants for staggered children
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.1
//     }
//   }
// };

// // Individual letter component with proper typing
// interface LetterProps {
//   children: string;
//   delayIndex: number;
// }

// const Letter: React.FC<LetterProps> = ({ children, delayIndex }) => (
//   <motion.span
//     custom={delayIndex}
//     variants={letterVariants}
//     initial="hidden"
//     animate="visible"
//     style={{ display: 'inline-block' }}
//   >
//     {children}
//   </motion.span>
// );

// const Hero: React.FC = () => {
//   const mainTitle = "Noiré";
//   const subtitle = "design Studio・london";

//   return (
//     <HeroContainer>
//       <MainContainer>
//         <BackgroundImage>
//           <img
//             decoding="auto"
//             src="/op.JPG"
//             alt="Maverick"
//             sizes="calc(min(100vw, 1920px) - 16px)"
//           />
//         </BackgroundImage>

//         <TextContent>
//           <Stack>
//             <MainTitle
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               {mainTitle.split('').map((letter, index) => (
//                 <Letter key={index} delayIndex={index}>
//                   {letter}
//                 </Letter>
//               ))}
//             </MainTitle>
            
//             <Subtitle
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               {subtitle.split('').map((letter, index) => (
//                 <Letter key={index} delayIndex={index + mainTitle.length}>
//                   {letter}
//                 </Letter>
//               ))}
//             </Subtitle>
//           </Stack>

//           <Description>
//             <DescriptionText>
//               At Noiré, we break boundaries to craft designs that stand out and deliver results. We blend creativity with strategy, turning bold ideas into digital experiences that captivate and inspire.
//             </DescriptionText>
//           </Description>
//         </TextContent>
//       </MainContainer>
//     </HeroContainer>
//   );
// };

// export default Hero;
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const HeroContainer = styled.section`
  background-color: #ffffff;
  height: calc(100vh - 0px);
  max-width: 1920px;
  width: 100%;
  opacity: 1;
  position: relative;
  padding: 10px;
  cursor: pointer;
  overflow: hidden;
`;

const MainContainer = styled.div`
  border-radius: 156px;
  opacity: 1;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
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

const RippleContainer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  border-radius: inherit;
  overflow: hidden;
`;

const Ripple = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: 
    radial-gradient(circle, 
      rgba(0, 0, 0, 0.1) 0%, 
      rgba(0, 0, 0, 0.08) 20%,
      rgba(0, 0, 0, 0.05) 40%,
      transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  mix-blend-mode: multiply;
`;

const TextContent = styled.div`
  opacity: 1;
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  text-align: right;
  z-index: 2;
  max-width: 500px;
`;

const Stack = styled.div`
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 24px;
`;

const MainTitle = styled(motion.h1)`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
  font-family: 'Orbitron', monospace;
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 700;
  color: #000000;
  margin: 0;
  line-height: 0.9;
  letter-spacing: -0.02em;
`;

const Subtitle = styled(motion.h5)`
  font-family: sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  color: #000000;
  margin: 0;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const Description = styled.div`
  opacity: 1;
`;

const DescriptionText = styled.p`
  font-family: sans-serif;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: #707070;
  line-height: 1.5;
  margin: 0;
  text-align: right;
  font-weight: 400;
`;

// Letter animation variants
const letterVariants: Variants = {
  hidden: { 
    opacity: 0, 
    filter: 'blur(10px)',
    y: 20
  },
  visible: (i: number) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  })
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

interface LetterProps {
  children: string;
  delayIndex: number;
}

const Letter: React.FC<LetterProps> = ({ children, delayIndex }) => (
  <motion.span
    custom={delayIndex}
    variants={letterVariants}
    initial="hidden"
    animate="visible"
    style={{ display: 'inline-block' }}
  >
    {children}
  </motion.span>
);

interface RippleType {
  id: number;
  x: number;
  y: number;
}

const Hero: React.FC = () => {
  const mainTitle = "Noiré";
  const subtitle = "design Studio・london";
  const [ripples, setRipples] = useState<RippleType[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create new ripple
    const newRipple: RippleType = {
      id: Date.now(),
      x,
      y
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1000);
  };

  return (
    <HeroContainer onMouseMove={handleMouseMove}>
      <MainContainer>
        <BackgroundImage>
          <img
            decoding="auto"
            src="/op.JPG"
            alt="Maverick"
            sizes="calc(min(100vw, 1920px) - 16px)"
          />
        </BackgroundImage>

        <RippleContainer>
          {ripples.map((ripple) => (
            <Ripple
              key={ripple.id}
              initial={{
                width: 0,
                height: 0,
                opacity: 1,
                x: ripple.x,
                y: ripple.y
              }}
              animate={{
                width: 300,
                height: 300,
                opacity: 0
              }}
              transition={{
                duration: 1,
                ease: "easeOut"
              }}
            />
          ))}
        </RippleContainer>

        <TextContent>
          <Stack>
            <MainTitle
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {mainTitle.split('').map((letter, index) => (
                <Letter key={index} delayIndex={index}>
                  {letter}
                </Letter>
              ))}
            </MainTitle>
            
            <Subtitle
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {subtitle.split('').map((letter, index) => (
                <Letter key={index} delayIndex={index + mainTitle.length}>
                  {letter}
                </Letter>
              ))}
            </Subtitle>
          </Stack>

          <Description>
            <DescriptionText>
              At Noiré, we redefine the edge of creativity — blending artistry and precision to craft digital experiences that captivate, convert, and endure.
            </DescriptionText>
          </Description>
        </TextContent>
      </MainContainer>
    </HeroContainer>
  );
};

export default Hero;