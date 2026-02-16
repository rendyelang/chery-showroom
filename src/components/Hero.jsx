import { motion } from "framer-motion";
import j6Hero from "/j6/j6_hero.png";
import { createWaLink } from "../utils/whatsapp";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Parallax Effect */}
      <motion.div initial={{ scale: 1.25 }} animate={{ scale: 1.15, y: -60 }} transition={{ duration: 2, ease: "easeOut" }} className="absolute inset-0 z-0">
        <img src={j6Hero} alt="Chery J6" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Content Animation */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-block py-1 px-3 border border-primary/30 rounded-full bg-black/30 backdrop-blur-md text-primary font-medium tracking-[0.2em] text-xs md:text-sm uppercase mb-6 shadow-lg"
        >
          Chery Super Hybrid
        </motion.span>

        <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight md:leading-[1.1]">
          With Chery with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-100 to-primary">Love</span>
          <span className="block mt-2">
            Cheery for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-100 to-primary">Us.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-gray-300 text-base md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto font-light leading-relaxed text-balance"
        >
          Rasakan sensasi berkendara tanpa batas dengan teknologi Chery Super Hybrid dan EV terbaru. Mewah, Canggih, Efisien, dan Futuristik.
        </motion.p>

        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }} className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="#models" className="group relative px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-transform duration-300 hover:scale-105">
            <span className="relative z-10">Lihat Unit</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute -inset-3 bg-white/30 blur-lg opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          </a>

          <a
            href={createWaLink("Halo, saya butuh bantuan sales consultant Chery!")}
            target="_blank"
            className="px-8 py-4 border border-white/20 text-white backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Konsultasi Sales
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
