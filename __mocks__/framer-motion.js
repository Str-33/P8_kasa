// On remplace framer-motion par des composants simples
// car framer-motion ne fonctionne pas dans l'environnement de test jsdom
const motion = {
  div: ({ children, ...props }) => <div {...props}>{children}</div>,
};

const AnimatePresence = ({ children }) => <>{children}</>;

module.exports = { motion, AnimatePresence };