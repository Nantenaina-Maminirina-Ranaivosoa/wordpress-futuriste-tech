import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getSkills } from '../../services/wpService';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills().then(data => setSkills(data));
  }, []);

  return (
    <section id="competences" className="skills-section">
      <div className="container">
        <h2>Stack <span className="highlight">Technique</span></h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              className="skill-card"
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px var(--primary)" }}
            >
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <motion.div 
                  className="progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;