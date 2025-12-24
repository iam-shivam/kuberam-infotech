// src/App.tsx
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import FloatingContactButtons from './components/shared/FloatingContactButtons';
import IndustriesWeServe from './components/sections/IndustriesWeServe';
import CaseStudies from './components/sections/CaseStudies';
import TimedContactPopup from './components/sections/TimedContactPopup';

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <IndustriesWeServe />
        <CaseStudies />
        <WhyChooseUs />
        <TechStack />
        <Contact />
      <TimedContactPopup />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}

export default App;