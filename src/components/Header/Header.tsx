// import React from 'react';
// import styled from 'styled-components';

// const HeaderContainer = styled.nav`
//   backdrop-filter: blur(64px);
//   background-color: rgba(0, 0, 0, 0.24);
//   opacity: 1;
//   border-radius: 34px;
//   position: fixed;
//   bottom: 32px;
//   left: 50%;
//   transform: translateX(-50%);
//   z-index: 9;
//   height: auto;
//   display: flex;
//   align-items: center;
//   padding: 8px;
//   gap: 8px;
//   min-width: 400px;
// `;

// const LogoContainer = styled.a`
//   border-radius: 25px;
//   opacity: 1;
//   width: 50px;
//   height: 50px;
//   overflow: hidden;
//   position: relative;
//   flex-shrink: 0;
  
//   img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     border-radius: inherit;
//     object-position: center;
//     object-fit: cover;
//   }
// `;

// const TabsContainer = styled.div`
//   opacity: 1;
//   display: flex;
//   align-items: center;
//   gap: 4px;
// `;

// const Tab = styled.a`
//   height: 40px;
//   opacity: 1;
//   padding: 0 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 20px;
//   transition: background-color 0.3s ease;
  
//   &:hover {
//     background-color: rgba(255, 255, 255, 0.1);
//   }
// `;

// const TabText = styled.p`
//   font-family: monospace;
//   font-size: 14px;
//   font-weight: 500;
//   color: rgb(255, 255, 255);
//   text-transform: uppercase;
//   margin: 0;
//   letter-spacing: 0.5px;
// `;

// const Divider = styled.div`
//   background-color: rgba(0, 0, 0, 0.08);
//   opacity: 1;
//   width: 1px;
//   height: 20px;
//   margin: 0 8px;
// `;

// const ContactButton = styled.a`
//   backdrop-filter: blur(32px);
//   background-color: rgb(255, 255, 255);
//   border-radius: 20px;
//   opacity: 1;
//   height: 40px;
//   padding: 0 20px;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   transition: transform 0.3s ease;
  
//   &:hover {
//     transform: translateY(-1px);
//   }
// `;

// const ContactText = styled.p`
//   font-family: monospace;
//   font-size: 14px;
//   font-weight: 500;
//   color: rgb(0, 0, 0);
//   text-transform: uppercase;
//   margin: 0;
//   letter-spacing: 0.5px;
// `;

// const PlusIcon = styled.div`
//   width: 16px;
//   height: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
  
//   &::before {
//     content: '+';
//     font-size: 18px;
//     font-weight: 300;
//     color: rgb(0, 0, 0);
//   }
// `;

// const Header: React.FC = () => {
//   return (
//     <HeaderContainer>
//       <LogoContainer href="./">
//         <img
//           decoding="auto"
//           src="https://framerusercontent.com/images/PWNFxFRREdvfApytv3KFyOq9fcQ.jpg"
//           alt="Logo"
//         />
//       </LogoContainer>
      
//       <TabsContainer>
//         <Tab href="./" data-framer-page-link-current="true">
//           <TabText>home</TabText>
//         </Tab>
        
//         <Tab href="./about">
//           <TabText>About</TabText>
//         </Tab>
        
//         <Tab href="./projects">
//           <TabText>projects</TabText>
//         </Tab>
        
//         <Tab href="./journal">
//           <TabText>journal</TabText>
//         </Tab>
//       </TabsContainer>
      
//       <Divider />
      
//       <ContactButton href="./contact-us">
//         <ContactText>Contact</ContactText>
//         <PlusIcon />
//       </ContactButton>
//     </HeaderContainer>
//   );
// };

// export default Header;
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.nav`
  backdrop-filter: blur(64px);
  background-color: rgba(0, 0, 0, 0.24);
  opacity: 1;
  border-radius: 34px;
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
  height: auto;
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
  min-width: 400px;
`;

const LogoContainer = styled.a`
  border-radius: 25px;
  opacity: 1;
  width: 50px;
  height: 50px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-position: center;
    object-fit: cover;
  }
`;

const TabsContainer = styled.div`
  opacity: 1;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Tab = styled.a`
  height: 40px;
  opacity: 1;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const TabText = styled.p`
  font-family: monospace;
  font-size: 14px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0.5px;
`;

const Divider = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  opacity: 1;
  width: 1px;
  height: 20px;
  margin: 0 8px;
`;

const ContactButton = styled.a`
  backdrop-filter: blur(32px);
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  opacity: 1;
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const ContactText = styled.p`
  font-family: monospace;
  font-size: 14px;
  font-weight: 500;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0.5px;
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
    color: rgb(0, 0, 0);
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer href="./">
        <img
          decoding="auto"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
          alt="Magnetto Logo"
        />
      </LogoContainer>
      
      <TabsContainer>
        <Tab href="./" data-framer-page-link-current="true">
          <TabText>home</TabText>
        </Tab>
        
        <Tab href="./about">
          <TabText>About</TabText>
        </Tab>
        
        <Tab href="./projects">
          <TabText>projects</TabText>
        </Tab>
        
        <Tab href="./journal">
          <TabText>journal</TabText>
        </Tab>
      </TabsContainer>
      
      <Divider />
      
      <ContactButton href="./contact-us">
        <ContactText>Contact</ContactText>
        <PlusIcon />
      </ContactButton>
    </HeaderContainer>
  );
};

export default Header;