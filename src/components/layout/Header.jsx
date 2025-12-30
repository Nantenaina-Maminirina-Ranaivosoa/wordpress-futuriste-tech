import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      className="site-header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div className="container header-container">
        <div className="logo">
          DEV<span>NANTE</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#immobilier">Immobilier</a></li>
            <li><a href="#competences">Compétences</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="cta-btn desktop-only">Me Contacter</button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className={`menu-toggle ${isOpen ? 'active' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul>
              <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
              <li><a href="#immobilier" onClick={() => setIsOpen(false)}>Immobilier</a></li>
              <li><a href="#competences" onClick={() => setIsOpen(false)}>Compétences</a></li>
              <li><button className="cta-btn mobile-cta desktop-only">Me Contacter</button></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;