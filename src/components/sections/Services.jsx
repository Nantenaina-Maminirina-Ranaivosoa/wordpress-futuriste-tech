import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getServices } from '../../services/wpService';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <header className="services-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Solutions <span className="highlight">Digitales</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Une approche architecturale pour vos besoins en marketing et tech.
          </motion.p>
        </header>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              className="service-card"
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-card-inner">
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="service-icon">
                    <path d={service.icon} />
                  </svg>
                  <div className="icon-glow"></div>
                </div>
                
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                
                <div className="service-decoration"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;