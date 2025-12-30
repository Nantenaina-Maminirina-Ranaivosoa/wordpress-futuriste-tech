import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getRealEstateProjects } from '../../services/wpService';
import ProjectModal from './ProjectModal'; // Nouveau composant
import './RealEstate.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const RealEstate = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    getRealEstateProjects().then(setProjects);
  }, []);

  return (
    <section id="immobilier" className="real-estate-section">
      <div className="container">
        <header className="section-header">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Portfolio <span className="highlight">Immobilier</span>
          </motion.h2>
          <motion.p className="subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            L'excellence architecturale propulsée par l'innovation digitale.
          </motion.p>
        </header>

        <motion.div className="projects-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          {projects.map((project) => (
            <motion.article 
              className="project-card" 
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedProject(project)} // Ouvre la modale
            >
              <div className="card-inner">
                <div className="image-container">
                  <motion.img src={project.image} alt={project.title} variants={{ hover: { scale: 1.05 } }} transition={{ duration: 0.6 }} loading="lazy" />
                  <div className="card-overlay" />
                  <div className="card-badges">
                    {project.tags.map(tag => <span key={tag} className="tag-badge">{tag}</span>)}
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-top">
                    <span className="location">{project.location}</span>
                    <span className="price-tag">{project.price}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <div className="card-footer">
                    <span className="explore-text">Voir les détails</span>
                    <div className="arrow-icon">→</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Rendu de la modale avec AnimatePresence pour une sortie fluide */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default RealEstate;