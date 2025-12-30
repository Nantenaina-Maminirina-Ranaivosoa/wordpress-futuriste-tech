import { motion } from 'framer-motion';

const sectionVariants = {
  offscreen: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)"
  },
  onscreen: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

const SectionWrapper = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }} // Déclenche quand 20% de la section est visible
      variants={sectionVariants}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;