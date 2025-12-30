import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import RealEstate from './components/sections/RealEstate';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Footer from './components/layout/Footer';
import './styles/variables.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <RealEstate />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;