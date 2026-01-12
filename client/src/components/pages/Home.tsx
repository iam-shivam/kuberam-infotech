import Header from "../layout/Header";
import Hero from "../sections/Hero";
import About from "../sections/About"
import Services from "../sections/Services";
import CaseStudies from "../sections/CaseStudies";
import WhyChooseUs from "../sections/WhyChooseUs";
import TechStack from "../sections/TechStack";
import Contact from "../sections/Contact";
import TimedContactPopup from "../sections/TimedContactPopup";
import Footer from "../layout/Footer";
import FloatingContactButtons from "../shared/FloatingContactButtons";


export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
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
