import { motion } from 'framer-motion';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div 
      className="modal-overlay"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ 
    opacity: 0,
    transition: { delay: 0.1, duration: 0.3 } // Attend un peu avant de disparaître complètement
  }}
  onClick={onClose}
>
      <motion.div 
  className="modal-content"
  initial={{ scale: 0.8, opacity: 0, y: 40 }} // Commence petit et bas
  animate={{ 
    scale: 1, 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      damping: 25, 
      stiffness: 300,
      velocity: 2 
    }
  }}
  exit={{ 
    scale: 0.7,      // Rétrécit plus fort à la sortie
    opacity: 0, 
    y: 100,          // Tombe légèrement
    transition: { 
      duration: 0.4, 
      ease: [0.32, 0, 0.67, 0] // Ease-in pour un effet de chute naturelle
    } 
  }}
  onClick={(e) => e.stopPropagation()}
>
        <button className="modal-close-btn" onClick={onClose} aria-label="Fermer">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        <div className="modal-inner-layout">
          <div className="modal-visual">
            <img src={project.image} alt={project.title} />
            <div className="image-overlay-glow"></div>
          </div>
          
          <div className="modal-body-content">
            <header className="modal-header-info">
              <span className="modal-tag">{project.location}</span>
              <h2>{project.title}</h2>
              <div className="modal-price-display">{project.price}</div>
            </header>
            
            <div className="modal-scroll-area">
              <p className="modal-desc">
                {project.description || "Une fusion parfaite entre design avant-gardiste et confort absolu, optimisée pour les standards de demain."}
              </p>
              
              <div className="modal-features-grid">
                <div className="feature-card">
                  <span className="feature-label">Surface</span>
                  <span className="feature-value">250 m²</span>
                </div>
                <div className="feature-card">
                  <span className="feature-label">Catégorie</span>
                  <span className="feature-value">Smart Villa</span>
                </div>
                <div className="feature-card">
                  <span className="feature-label">Énergie</span>
                  <span className="feature-value">Classe A+</span>
                </div>
                <div className="feature-card">
                  <span className="feature-label">Dispo</span>
                  <span className="feature-value">Immédiate</span>
                </div>
              </div>
            </div>

            <footer className="modal-footer-action">
              <button className="cta-btn primary-cta">Demander une brochure</button>
            </footer>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;