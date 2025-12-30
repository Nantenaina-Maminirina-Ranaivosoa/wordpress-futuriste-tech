import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getRealEstateProjects } from '../../services/wpService';
import './RealEstate.css';

// Variantes pour l'animation d'apparition en cascade (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const RealEstate = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getRealEstateProjects().then(data => setProjects(data));
  }, []);

  return (
    <section id="immobilier" className="real-estate-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2>Projets <span className="highlight">Exclusifs</span></h2>
          <p className="subtitle">Une sélection de biens immobiliers futuristes.</p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.article 
              className="project-card" 
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="image-wrapper">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  variants={{ hover: { scale: 1.1 } }}
                  transition={{ duration: 0.4 }}
                />
                <div className="overlay" />
                <motion.div 
                  className="card-badges"
                  variants={{ hover: { opacity: 1, y: 0 } }}
                  initial={{ opacity: 0, y: -10 }}
                >
                  {project.tags.map(tag => <span key={tag} className="badge">{tag}</span>)}
                </motion.div>
              </div>

              <div className="card-content">
                <div className="card-meta">
                  <span className="location">{project.location}</span>
                  <span className="price">{project.price}</span>
                </div>
                <h3>{project.title}</h3>
                <motion.button 
                  className="view-btn"
                  variants={{ hover: { x: 5, color: "var(--primary)" } }}
                >
                  Découvrir le projet &rarr;
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RealEstate;