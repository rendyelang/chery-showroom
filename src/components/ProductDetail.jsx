import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { carDetails } from "../data/cars";
import { createWaLink } from "../utils/whatsapp";

const ProductDetail = () => {
  const { id } = useParams();
  const car = carDetails.find((c) => c.id === id);

  // STATE PENTING:
  // 1. Varian mana yang dipilih? (Default: varian pertama)
  const [activeVariant, setActiveVariant] = useState(null);

  // 2. Warna mana yang dipilih? (Default: warna pertama dari varian aktif)
  const [activeColor, setActiveColor] = useState(null);

  // Inisialisasi saat data car loaded
  useEffect(() => {
    if (car && car.variants && car.variants.length > 0) {
      setActiveVariant(car.variants[0]); // Pilih varian pertama
    }
  }, [car]);

  // Reset warna setiap kali ganti Varian
  useEffect(() => {
    if (activeVariant && activeVariant.colors && activeVariant.colors.length > 0) {
      setActiveColor(activeVariant.colors[0]);
    }
  }, [activeVariant]);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  // NEW: Fungsi untuk ganti varian sekaligus scroll ke atas (khusus mobile friendly)
  const handleVariantChange = (variant) => {
    setActiveVariant(variant);

    // Auto-scroll ke atas dengan animasi halus (smooth)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!car || !activeVariant) return <div className="min-h-screen flex justify-center items-center text-white">Loading...</div>;

  return (
    <div className="pt-20 min-h-screen relative z-10 pb-20">
      {/* Header Nav */}
      <div className="container mx-auto px-6 mb-4 pt-6">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-primary transition-colors text-sm font-medium">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Kembali ke Showroom
        </Link>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* === KOLOM KIRI: VISUALISASI DINAMIS === */}
        <div className="relative">
          {/* Foto Utama (Berubah ikut Warna & Varian) */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900 aspect-[4/3] group flex items-center justify-center">
            {/* Background Gradient tetap cover biar menuhin kotak */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

            <AnimatePresence mode="wait">
              {activeColor && (
                <motion.img
                  key={activeColor.img}
                  src={activeColor.img}
                  initial={{ opacity: 0, scale: 0.9 }} // Scale awal jgn kebesaran
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  // PERBAIKAN DISINI:
                  // Ganti object-cover -> object-contain
                  // Tambah p-8 atau p-10 biar mobilnya pas di tengah dan gak kepotong
                  className="relative z-0 w-full h-full object-contain p-6 md:p-12"
                  alt={`${activeVariant.name} - ${activeColor.name}`}
                />
              )}
            </AnimatePresence>

            {/* Badge Varian di Foto */}
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-primary/90 text-black font-bold px-4 py-1 rounded-full text-xs tracking-widest shadow-lg">{activeVariant.name}</span>
            </div>

            {/* Info Warna Active */}
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">Color</p>
              <p className="text-white font-bold text-xl">{activeColor?.name}</p>
            </div>
          </div>

          {/* Color Selector (Hanya muncul jika varian punya pilihan warna) */}
          {activeVariant.colors && (
            <div className="mt-8">
              <h3 className="text-white text-xs font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-gray-400">Pilih Warna untuk {activeVariant.name}:</h3>
              <div className="flex gap-4">
                {activeVariant.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setActiveColor(color)}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300 relative group
                        ${activeColor?.name === color.name ? "border-primary scale-110 shadow-[0_0_15px_rgba(198,168,124,0.6)]" : "border-gray-600 hover:border-white"}`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {activeColor?.name === color.name && <div className="absolute inset-0 border-2 border-black/50 rounded-full"></div>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* === KOLOM KANAN: KONFIGURATOR VARIAN === */}
        <div>
          <div className="mb-8">
            <span className="text-primary font-bold tracking-widest text-sm border border-primary/30 px-3 py-1 rounded-full">{car.type} SERIES</span>
            {/* === JUDUL DINAMIS (UPDATED) === */}
            <div className="h-20 flex items-center mt-4 mb-2">
              {" "}
              {/* Container fixed height biar layout ga lompat pas animasi */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeVariant.id} // Kunci animasi: berubah setiap ID varian ganti
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-3xl md:text-5xl font-bold text-white"
                >
                  {activeVariant.name}
                </motion.h1>
              </AnimatePresence>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm font-light mb-6">{car.desc}</p>

            {/* HARGA UTAMA (Ikut Varian) */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-1">Harga OTR Jakarta</p>
              <AnimatePresence mode="wait">
                <motion.div key={activeVariant.price} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2">
                  <p className="text-4xl md:text-5xl font-bold text-primary">{typeof activeVariant.price === "number" ? formatRupiah(activeVariant.price) : activeVariant.price}</p>

                  {/* NEW: Teks Pancingan Khusus Harga Misterius */}
                  {typeof activeVariant.price !== "number" && (
                    <motion.a href="#cta-button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-medium text-green-400 flex items-center gap-2 animate-pulse">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Klik tombol di bawah untuk penawaran harga spesial!
                    </motion.a>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* === VARIANT SELECTOR (SUB-KATEGORI 3) === */}
          {/* Ini jawaban dari request kamu biar user bisa pilih sub-produk */}
          <div className="mb-8">
            <h3 className="text-white font-bold mb-3 uppercase text-sm tracking-widest">Pilih Tipe Varian:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {car.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => handleVariantChange(variant)}
                  className={`
                    text-left p-4 rounded-xl border transition-all duration-300 group relative overflow-hidden
                    ${activeVariant.id === variant.id ? "bg-white/10 border-primary shadow-[0_0_15px_rgba(198,168,124,0.2)]" : "bg-transparent border-white/10 hover:border-white/30 hover:bg-white/5"}
                  `}
                >
                  <div className="relative z-10 flex justify-between items-center">
                    <div>
                      <p className={`font-bold text-sm ${activeVariant.id === variant.id ? "text-primary" : "text-white"}`}>{variant.name}</p>
                      {/* Tampilkan harga kecil di tombol */}
                      <p className="text-gray-400 text-xs mt-1">
                        {/* PERUBAHAN DI SINI */}
                        <p className="text-gray-400 text-xs mt-1">{typeof variant.price === "number" ? formatRupiah(variant.price) : variant.price}</p>
                      </p>
                    </div>

                    {/* Checkmark icon kalo aktif */}
                    {activeVariant.id === variant.id && (
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Highlights (Dynamic per Variant) */}
          <h3 className="text-white font-bold mb-3 uppercase text-sm tracking-widest">Features</h3>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {/* Ambil features dari activeVariant, kalau ga ada fallback ke car.features */}
            {(activeVariant.features || car.features).map((feature, idx) => (
              <div key={idx} className="bg-gray-800/50 p-3 rounded-xl border border-white/5 text-center flex flex-col items-center justify-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <p className="text-gray-300 text-xs font-medium">{feature}</p>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="flex flex-col gap-3 mt-4">
            <a
              id="cta-button"
              href={createWaLink(
                typeof activeVariant.price === "number"
                  ? `Halo, saya fix berminat dengan ${car.name} tipe ${activeVariant.name} warna ${activeColor?.name}.`
                  : `Halo, saya sangat tertarik dengan unit eksklusif ${car.name} tipe ${activeVariant.name}. Boleh info untuk harga spesialnya?`,
              )}
              target="_blank"
              className={`w-full font-bold py-4 rounded-full text-center transition-all flex items-center justify-center gap-2
      ${
        typeof activeVariant.price === "number"
          ? // Styling Normal: Hijau Biasa
            "bg-green-600 hover:bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          : // Styling Harga Misterius: Gradasi Hijau Terang & Animasi Pulse (Nge-trigger user klik)
            "bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-400 hover:to-emerald-300 text-black shadow-[0_0_25px_rgba(52,211,153,0.6)] animate-[pulse_2s_ease-in-out_infinite] scale-105"
      }
    `}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>

              {typeof activeVariant.price === "number" ? `Tanya Unit Ini (${activeVariant.name})` : `Dapatkan Harga Spesial (${activeVariant.name})`}
            </a>

            {/* === NEW: TOMBOL DOWNLOAD BROSUR DINAMIS === */}
            {car.brochure && (
              <a
                href={car.brochure}
                // Atribut download akan memaksa browser mengunduh file, bukan membukanya di tab baru
                // Kita format nama filenya biar rapi pas masuk ke laptop/HP user
                download={`Brosur-${car.name.replace(/\s+/g, "-")}.pdf`}
                className="w-full border border-white/20 text-white font-bold py-4 rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group"
              >
                {/* Icon Download biar makin interaktif */}
                <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Brosur {car.name}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* --- GALLERY SECTION (General) --- */}
      {/* {car.gallery && (
        <div className="container mx-auto px-6 mt-20">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {car.gallery.map((img, idx) => (
              <img key={idx} src={img} className="rounded-xl w-full" alt="Gallery" />
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ProductDetail;
