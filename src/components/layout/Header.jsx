import { motion } from 'framer-motion';
import './Header.css'; // CSS spécifique au composant

const Header = () => {
  return (
    <motion.header 
      className="site-header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="logo">
          DEV<span>ESTATE</span>
        </div>
        <nav>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#immobilier">Immobilier</a></li>
            <li><a href="#competences">Compétences</a></li>
          </ul>
        </nav>
        <button className="cta-btn">Me Contacter</button>
      </div>
    </motion.header>
  );
};

export default Header;