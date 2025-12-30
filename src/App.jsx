import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import RealEstate from './components/sections/RealEstate';
import Skills from './components/sections/Skills';
import './styles/variables.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RealEstate />
        <Skills />
      </main>
      <footer style={{ textAlign: 'center', padding: '50px', color: 'var(--text-muted)' }}>
        <p>© 2024 DevEstate - Architecture Headless</p>
      </footer>
    </>
  );
}

export default App;