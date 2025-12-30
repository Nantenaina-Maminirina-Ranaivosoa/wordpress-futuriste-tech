import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Decorators - Séparés pour ne pas gêner le flux du texte */}
      <div className="hero-bg-effects">
        <div className="glow-circle primary-glow"></div>
        <div className="glow-circle secondary-glow"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            Digital Marketing & Real Estate Tech
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Architecte Web <br />
            <span className="gradient-text">Futuriste</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Conception d'écosystèmes digitaux haute performance. 
            L'alliance de la data immobilière et de l'innovation React.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#immobilier" className="btn-primary">Explorer les Projets</a>
            <a href="#services" className="btn-secondary">Expertises</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;