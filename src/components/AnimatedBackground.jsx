import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    // Tambahkan bg-[#050505] di sini sebagai warna dasar paling bawah
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      {/* Blob 1 - Primary Color (Emas/Bronze) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 80, -30, 0],
          y: [0, -40, 40, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        // HAPUS blur-[], gunakan style radial-gradient
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] mix-blend-screen will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(198,168,124,0.15) 0%, rgba(198,168,124,0) 70%)",
        }}
      />

      {/* Blob 2 - Secondary Accent (Agak Biru/Ungu dikit biar dingin) */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -80, 40, 0],
          y: [0, 60, -40, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] mix-blend-screen will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(88,28,135,0.15) 0%, rgba(88,28,135,0) 70%)",
        }}
      />

      {/* Blob 3 - Tengah */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] mix-blend-screen will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(30,58,138,0.1) 0%, rgba(30,58,138,0) 70%)",
        }}
      />

      {/* Noise Overlay (Biar ada tekstur film grain dikit, makin mewah) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    </div>
  );
};

export default AnimatedBackground;
