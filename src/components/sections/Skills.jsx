import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getSkills } from '../../services/wpService';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills().then(setSkills);
  }, []);

  return (
    <section id="competences" className="skills-section">
      <div className="container">
        <header className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Expertise <span className="highlight">Technique</span>
          </motion.h2>
          <p className="subtitle">Maîtrise des outils de l'architecture moderne.</p>
        </header>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              className="skill-item"
              key={skill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              
              <div className="progress-track">
                <motion.div 
                  className="progress-thumb"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }} // Effet ressort (Spring)
                />
              </div>
              
              {/* Effet de brillance en arrière-plan */}
              <div className="skill-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;