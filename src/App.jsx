import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import RealEstate from './components/sections/RealEstate';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Footer from './components/layout/Footer';
import SectionWrapper from './components/layout/SectionWrapper';
import './styles/variables.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionWrapper id="hero">
          <Hero />
        </SectionWrapper>
        
        <SectionWrapper id="services">
          <Services />
        </SectionWrapper>
        
        <SectionWrapper id="immobilier">
          <RealEstate />
        </SectionWrapper>
        
        <SectionWrapper id="competences">
          <Skills />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}

export default App;