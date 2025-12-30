import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* CTA de clôture immersif */}
        <section className="footer-cta">
          <motion.div 
            className="cta-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="cta-title">
              Prêt à bâtir le <span className="highlight">futur ?</span>
            </h2>
            <p className="cta-text">Fusionnons vos ambitions avec une architecture web d'exception.</p>
            <motion.a 
              href="mailto:contact@devestate.com" 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Démarrer un projet
            </motion.a>
          </motion.div>
        </section>

        <div className="footer-main">
          <div className="footer-brand-section">
            <div className="logo">DEV<span>NANTE</span></div>
            <p className="brand-description">
              Expertise senior en développement React et stratégies digitales pour l'immobilier de luxe.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-nav-col">
              <h4 className="footer-label">Expertises</h4>
              <ul className="footer-links">
                <li><a href="#services">Marketing Digital</a></li>
                <li><a href="#immobilier">Immobilier Tech</a></li>
                <li><a href="#competences">Headless CMS</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-label">Social</h4>
              <ul className="footer-links">
                <li><a href="#linkedin">LinkedIn</a></li>
                <li><a href="#github">GitHub</a></li>
                <li><a href="#x">Twitter / X</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-label">Contact</h4>
              <address className="footer-address">
                Paris / Remote<br />
                <a href="tel:+33600000000" className="phone-link">+33 6 00 00 00 00</a>
              </address>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <p className="copyright">&copy; {currentYear} DEVNANTE. Tous droits réservés.</p>
          <div className="status-badge">
            <span className="status-dot"></span>
            Disponible pour nouveaux projets
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;