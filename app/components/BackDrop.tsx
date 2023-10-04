import { AnimatePresence, motion } from "framer-motion";
const BackDrop = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="layer flex-center"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BackDrop;
