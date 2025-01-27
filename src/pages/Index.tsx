import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen gradient-background flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Meatware
        </h1>
        <p className="text-lg md:text-xl text-meatware-accent/80 mb-8">
          Coming Soon
        </p>
        <a
          href="mailto:ma@meatware.io"
          className="email-link text-lg md:text-xl text-meatware-accent hover:text-meatware-accent/90"
        >
          ma@meatware.io
        </a>
      </motion.div>
    </div>
  );
};

export default Index;