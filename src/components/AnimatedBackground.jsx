import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Blob 1 - Primary Color (Emas/Bronze) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px]"
      />

      {/* Blob 2 - Secondary Accent (Agak Biru/Putih dikit biar dingin) */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/20 rounded-full blur-[150px]"
      />

      {/* Blob 3 - Tengah */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[100px]"
      />

      {/* Noise Overlay (Biar ada tekstur film grain dikit, makin mewah) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default AnimatedBackground;
