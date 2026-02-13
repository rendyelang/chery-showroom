import { motion } from "framer-motion";
import { createWaLink } from "../utils/whatsapp";

const SellerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Data Seller (Bisa dipindah ke file data terpisah nantinya jika mau)
  const sellerData = {
    name: "Romi Andre Mariano",
    role: "SALES SUPERVISOR",
    email: "romiandre83@gmail.com",
    domicile: "Bogor, West Java",
    stats: [
      { label: "SOLD UNITS", value: "120+" },
      { label: "RATING", value: "5★" },
      { label: "EXP.", value: "15yr" },
    ],
    social: {
      wa: "https://wa.me/6282142048886", // Ganti dengan nomor WA asli
      ig: "https://www.instagram.com/romiandre83/",
      linkedin: "https://www.linkedin.com/in/romi-andre-mariano-799b623a1/",
    },
  };

  return (
    // --- BACKDROP BERFUNGSI SEBAGAI OVERLAY BLUR ---
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // z-index sangat tinggi (60) biar di atas navbar. backdrop-blur-md bikin ngeblur.
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose} // Klik di luar modal akan menutup modal
    >
      {/* --- MODAL CONTENT --- */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        // Stop propagasi klik biar klik di dalam modal gak nutup modalnya
        onClick={(e) => e.stopPropagation()}
        className="bg-[#1A1A2E] bg-gradient-to-br from-[#1A1A2E] to-[#161625] w-full max-w-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative"
      >
        {/* Header: Title & Close Button */}
        <div className="flex justify-between items-center p-6 pb-0">
          <h3 className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase">Seller Identity</h3>
          <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 pt-0 text-center relative z-10">
          {/* Profile Image Area */}
          <div className="relative w-32 h-32 mx-auto mb-4 mt-4">
            {" "}
            {/* Kurangi mb jadi 4 */}
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl scale-110 animate-pulse"></div>
            <img src="/romi.jpeg" alt={sellerData.name} className="w-full h-full object-cover object-top rounded-full border-4 border-[#1A1A2E] relative z-10" />
            {/* === ACTIVE STATUS BADGE (MODAL) === */}
            <div className="absolute bottom-1 right-2 z-20 bg-[#1A1A2E] px-2 py-0.5 rounded-full border border-white/10 flex items-center gap-1.5 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-white tracking-wide">ONLINE</span>
            </div>
          </div>

          {/* Nama & Role */}
          <h2 className="text-2xl font-bold text-white mb-1">{sellerData.name}</h2>
          <p className="text-primary text-sm font-bold tracking-wider uppercase mb-8">{sellerData.role}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8 border-t border-b border-white/5 py-6">
            {sellerData.stats.map((stat, idx) => (
              <div key={idx} className={`${idx !== 2 ? "border-r border-white/10" : ""}`}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-white/50 text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4 mb-8">
            {/* Email */}
            <div className="bg-white/5 rounded-xl p-4 flex items-center text-left gap-4 border border-white/5">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs">Email Address</p>
                <p className="text-white font-medium break-all">{sellerData.email}</p>
              </div>
            </div>
            {/* Domicile */}
            <div className="bg-white/5 rounded-xl p-4 flex items-center text-left gap-4 border border-white/5">
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs">Domicile</p>
                <p className="text-white font-medium">{sellerData.domicile}</p>
              </div>
            </div>
          </div>

          {/* Social Media Footer */}
          <div className="flex justify-center gap-6">
            <a href={createWaLink("Halo, saya butuh bantuan sales consultant Chery.")} target="_blank" className="text-white/50 hover:text-[#25D366] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <a href={sellerData.social.ig} target="_blank" className="text-white/50 hover:text-[#E1306C] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.148 3.252-1.667 4.771-4.919 4.919-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-3.252-.148-4.771-1.667-4.919-4.919-.058-1.266-.069-1.646-.069-4.85s.011-3.584.069-4.85c.148-3.252 1.667-4.771 4.919-4.919 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44 0 .795.645 1.44 1.441 1.44.795 0 1.439-.645 1.439-1.44 0-.794-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href={sellerData.social.linkedin} target="_blank" className="text-white/50 hover:text-[#0077B5] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SellerModal;
