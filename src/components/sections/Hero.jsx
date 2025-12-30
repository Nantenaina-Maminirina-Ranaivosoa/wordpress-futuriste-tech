import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Architecte Web <span className="gradient-text">Futuriste</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Fusionner le Marketing Digital & l'Immobilier grâce à la puissance de React et WordPress Headless.
        </motion.p>

        <motion.div 
          className="hero-grid"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
           {/* Éléments décoratifs en CSS pur */}
           <div className="glow-circle"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;