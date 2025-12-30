import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Section Contact / CTA Rapide */}
        <section className="footer-cta">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-card"
          >
            <h2>Prêt à lancer votre <span className="highlight">Projet ?</span></h2>
            <p>Fusionnons vos idées avec mon expertise technique.</p>
            <a href="mailto:contact@devestate.com" className="contact-link">Démarrer la discussion</a>
          </motion.div>
        </section>

        <hr className="footer-divider" />

        {/* Navigation Footer Sémantique */}
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">DEV<span>ESTATE</span></div>
            <p>Architecte Web Senior spécialisé en Marketing Digital & Immobilier de prestige.</p>
          </div>

          <nav className="footer-nav" aria-label="Navigation secondaire">
            <div className="footer-col">
              <h4>Expertises</h4>
              <ul>
                <li>Marketing Digital</li>
                <li>Immobilier Tech</li>
                <li>SEO / Performance</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Réseaux</h4>
              <ul>
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>Twitter (X)</li>
              </ul>
            </div>
          </nav>

          <div className="footer-contact">
            <h4>Localisation</h4>
            <address>
              Digital Nomad / Base : Paris & Remote<br />
              <a href="tel:+33600000000">+33 6 00 00 00 00</a>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DEVESTATE. Tous droits réservés.</p>
          <div className="tech-badge">Powered by React & Headless Architecture</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;