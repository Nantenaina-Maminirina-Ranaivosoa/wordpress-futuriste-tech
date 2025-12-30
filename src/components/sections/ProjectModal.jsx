import { motion } from 'framer-motion';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="modal-content"
        initial={{ scale: 0.9, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 50, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()} // Empêche de fermer en cliquant sur le contenu
      >
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-grid">
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>
          
          <div className="modal-info">
            <span className="modal-location">{project.location}</span>
            <h2>{project.title}</h2>
            <div className="modal-price">{project.price}</div>
            
            <p className="modal-description">
              {project.description || "Ce projet représente l'apogée de l'architecture moderne, alliant durabilité, technologie intelligente et design minimaliste."}
            </p>
            
            <div className="modal-specs">
              <div className="spec-item"><span>Surface:</span> 250m²</div>
              <div className="spec-item"><span>Type:</span> Villa Futuriste</div>
              <div className="spec-item"><span>Statut:</span> Disponible</div>
            </div>

            <button className="cta-btn">Demander un devis</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;