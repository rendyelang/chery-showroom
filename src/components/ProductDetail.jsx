import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { carDetails } from "../data/cars";
import { createWaLink } from "../utils/whatsapp";

const ProductDetail = () => {
  const { id } = useParams();
  const car = carDetails.find((c) => c.id === parseInt(id));

  // State untuk warna yang dipilih (Default: warna pertama)
  const [selectedColor, setSelectedColor] = useState(car ? car.colors[0] : null);

  if (!car) return <div className="text-white text-center py-20">Mobil tidak ditemukan</div>;

  return (
    <div className="pt-20 min-h-screen relative z-10">
      {/* Tombol Back */}
      <div className="container mx-auto px-6 mb-4">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-primary transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Kembali ke Showroom
        </Link>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* --- KOLOM KIRI: GAMBAR UTAMA --- */}
        <div className="relative">
          {/* Efek Glow di belakang mobil */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

          <AnimatePresence mode="wait">
            <motion.img
              key={selectedColor.hex} // Key berubah = animasi ulang
              src={selectedColor.img}
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full rounded-3xl shadow-2xl z-10 border border-white/10"
              alt={car.name}
            />
          </AnimatePresence>
        </div>

        {/* --- KOLOM KANAN: INFO & COLOR SELECTOR --- */}
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold text-white mb-2">
            {car.name}
          </motion.h1>
          <p className="text-2xl text-primary font-medium mb-6">{car.price}</p>

          <p className="text-gray-300 leading-relaxed mb-8 text-lg font-light border-l-4 border-primary pl-4">{car.desc}</p>

          {/* Color Selector */}
          <div className="mb-10">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              Available Colors: <span className="text-primary font-normal">{selectedColor.name}</span>
            </h3>
            <div className="flex gap-4">
              {car.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-full border-2 transition-all duration-300 relative group
                    ${selectedColor.name === color.name ? "border-primary scale-110 shadow-[0_0_15px_rgba(198,168,124,0.6)]" : "border-gray-600 hover:border-white"}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  {/* Ceklis icon kalau aktif */}
                  {selectedColor.name === color.name && (
                    <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </motion.svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {car.specs.map((spec, idx) => (
              <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-gray-400 text-sm uppercase tracking-wider">{spec.label}</p>
                <p className="text-white font-bold text-xl">{spec.value}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={createWaLink(`Halo, saya tertarik dengan ${car.name} warna ${selectedColor.name}. Apakah unit ready?`)}
              target="_blank"
              className="flex-1 bg-green-600 text-white font-bold py-4 rounded-full text-center hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Konsul via WhatsApp
            </a>
            <button className="flex-1 border border-white text-white font-bold py-4 rounded-full hover:bg-white hover:text-black transition-all">Download Brosur</button>
          </div>
        </div>
      </div>

      {/* --- GALLERY SECTION --- */}
      <div className="container mx-auto px-6 mt-32 mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
          Visual <span className="text-primary">Gallery</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {car.gallery.map((img, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className={`rounded-2xl overflow-hidden shadow-lg border border-white/10 ${idx === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <img src={img} alt="Gallery" className="w-full h-full object-cover hover:opacity-90 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
