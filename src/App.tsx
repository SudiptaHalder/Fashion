// // App.tsx
// import React from 'react';
// import { GlobalStyles } from './styles/GlobalStyles';
// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
// import Projects from './components/Projects/Projects';
// import ServicesMetrics from './components/Services/ServicesMetrics';
// import Clients from './components/Clients/Clients';
// import Contact from './components/contact/Contact';
// import Footer from './components/Footer/Footer';

// const App: React.FC = () => {
//   return (
//     <>
//       <GlobalStyles />
//       <Header />
//       <Hero />
//       <Projects />
      
//       <Clients />
//       <ServicesMetrics />
//       <Contact />
//       <Footer />
//     </>
//   );
// };

// export default App;
import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import ServicesMetrics from './components/Services/ServicesMetrics';
import Clients from './components/Clients/Clients';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      
      {/* White Background Sections */}
      <div className="light-section">
        <Header />
        <Hero />
        <Projects />
        <Clients />
        
        {/* Gradient Transition Overlay */}
        <div className="gradient-transition" />
      </div>
      
      {/* Black Background Sections */}
      <div className="dark-section">
        <ServicesMetrics />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;