import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getServices } from '../../services/wpService';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then(data => setServices(data));
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-intro">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Solutions <span className="highlight">Digitales</span>
          </motion.h2>
          <p>Une approche architecturale du marketing web.</p>
        </div>

        <div className="services-wrapper">
          {services.map((service, index) => (
            <motion.div 
              className="service-card"
              key={service.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor" className="service-icon">
                  <path d={service.icon} />
                </svg>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="glow-effect"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;