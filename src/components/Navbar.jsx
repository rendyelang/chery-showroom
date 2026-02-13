import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "/logo_chery.png";
import SellerModal from "./SellerModal"; // Import modalnya

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // State untuk mengontrol modal
  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Models", href: "#models" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <div className="fixed w-full z-50 top-0 flex justify-center pt-4 transition-all duration-300">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`
          flex items-center justify-between px-6 transition-all duration-500 ease-in-out
          ${
            isScrolled
              ? "w-full py-4 mt-[-16px] bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg" // Glass Effect
              : "w-[90%] md:w-[85%] max-w-5xl rounded-full py-3 bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          }
        `}
        >
          {/* === Logo Section === */}
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-widest text-white pl-2">
              {/* Logo Image: Ukuran responsive */}
              <img className="w-10 md:w-12 lg:w-20" src={Logo} alt="Logo Chery" />

              {/* Teks CHERY: Hidden di mobile, muncul di md ke atas */}
              <span>CHERY</span>
            </a>
          </div>

          {/* === Menu Tengah (Desktop Only) === */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <div key={link.name} className="flex items-center gap-6">
                <a href={link.href} className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary relative group ${index === 0 ? "text-white" : "text-gray-300"}`}>
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                {/* Dot Separator */}
                {index < navLinks.length - 1 && <span className="w-1 h-1 rounded-full bg-red-600/80 shadow-[0_0_5px_rgba(220,38,38,0.8)]"></span>}
              </div>
            ))}
          </div>

          {/* === Meet The Seller Button === */}
          <div className="flex items-center gap-4 pr-1">
            <button
              onClick={() => setIsSellerModalOpen(true)}
              className="group flex items-center gap-3 bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur-sm pr-1 pl-3 md:pl-4 py-1 rounded-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(198,168,124,0.2)] relative" // Tambah relative
            >
              {/* Text Section */}
              <div className="text-right hidden md:block">
                <p className="text-white/60 text-[10px] uppercase tracking-wider leading-tight group-hover:text-primary transition-colors flex items-center justify-end gap-1">
                  Meet the Seller
                  {/* Status Text Kecil (Opsional, kalau mau teks 'Online' juga) */}
                  {/* <span className="text-[8px] text-green-400 font-bold">• Online</span> */}
                </p>
                <p className="text-white font-bold text-sm leading-tight">Romi Andre</p>
              </div>

              {/* Profile Image Circle */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/20 p-[2px] group-hover:border-primary transition-colors overflow-hidden relative">
                <img src="/romi.jpeg" alt="Romi Andre" className="w-full h-full object-cover object-top rounded-full" />
              </div>

              {/* === ACTIVE DOT INDICATOR (NAVBAR) === */}
              {/* Posisi: di pojok kanan bawah foto profil */}
              <div className="absolute right-0 bottom-0 md:right-0 md:bottom-0 translate-x-[-2px] translate-y-[-2px]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-[#1A1A2E]"></span>
                </span>
              </div>
            </button>
          </div>
        </motion.nav>
      </div>
      {/* === RENDER MODAL DI LUAR NAV === */}
      {/* Gunakan AnimatePresence agar animasi exit modal berjalan */}
      <AnimatePresence>{isSellerModalOpen && <SellerModal isOpen={isSellerModalOpen} onClose={() => setIsSellerModalOpen(false)} />}</AnimatePresence>
    </>
  );
};

export default Navbar;
