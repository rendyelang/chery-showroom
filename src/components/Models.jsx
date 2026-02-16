import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { carDetails } from "../data/cars";
import { createWaLink } from "../utils/whatsapp";

const Models = () => {
  // 1. Tambahkan "All" di array categories
  const categories = ["All", "BEV", "CSH", "ICE"];

  // 2. Set default active jadi "All" (opsional, terserah mau BEV dulu atau All dulu)
  const [activeCategory, setActiveCategory] = useState("All");

  // 3. Update logic filter
  const filteredCars = activeCategory === "All" ? carDetails : carDetails.filter((car) => car.type === activeCategory);

  // Helper: Format Rupiah (Jauh lebih rapi pake Intl)
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  // Helper: Cari Harga Termurah dari Variants
  const getLowestPrice = (variants) => {
    if (!variants || variants.length === 0) return "Hubungi Kami";

    // 1. Filter: Pisahkan varian yang harganya berupa ANGKA
    const numericPrices = variants.filter((v) => typeof v.price === "number");

    // 2. Kalau ada yang berupa angka, cari yang termurah
    if (numericPrices.length > 0) {
      const minPrice = Math.min(...numericPrices.map((v) => v.price));
      return formatRupiah(minPrice);
    }

    // 3. Kalau SEMUANYA teks (misal "Call for Price."), tampilkan teksnya langsung
    return variants[0].price;
  };

  return (
    <section id="models" className="py-24 bg-dark relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Masterpiece <span className="text-primary">Collection</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Inovasi teknologi berkendara terbaik untuk Anda.</p>
        </motion.div>

        {/* === FILTER BUTTONS === */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-10 py-3 rounded-full text-base font-bold tracking-widest transition-all duration-300 relative overflow-hidden group border
                ${
                  activeCategory === category
                    ? "bg-primary text-black border-primary shadow-[0_0_25px_rgba(198,168,124,0.6)] scale-105"
                    : "bg-transparent text-primary border-primary/50 shadow-[0_0_8px_rgba(198,168,124,0.2)] hover:shadow-[0_0_15px_rgba(198,168,124,0.4)] hover:border-primary hover:text-white"
                }
              `}
            >
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* === GRID MOBIL === */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => (
              <motion.div
                layout
                key={car.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group bg-gray-900/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(198,168,124,0.15)] flex flex-col"
              >
                {/* --- IMAGE AREA --- */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-b from-gray-800/20 to-transparent">
                  {" "}
                  {/* Opsional: kasih bg gradient tipis biar keren */}
                  <img
                    src={car.variants[0].image}
                    alt={car.name}
                    // PERBAIKAN DISINI:
                    // 1. Ganti object-cover jadi object-contain
                    // 2. Tambah p-4 biar ada jarak nafas
                    className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  {/* Badge Type */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <p className="text-white text-xs font-bold tracking-widest">{car.type}</p>
                  </div>
                </div>

                {/* --- CONTENT AREA --- */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Nama & Harga Mulai Dari */}
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{car.name}</h3>
                    <p className="text-gray-400 text-sm mb-1">Mulai dari</p>
                    <p className="text-primary text-2xl font-bold">{getLowestPrice(car.variants)}</p>
                  </div>

                  {/* Fitur (3 Items Fixed) */}
                  <div className="flex flex-col gap-2 mb-8">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto flex gap-3">
                    <Link
                      to={`/product/${car.id}`}
                      className="flex-1 text-center py-3 bg-white/10 text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-bold border border-white/10 flex items-center justify-center"
                    >
                      Detail
                    </Link>

                    <a
                      href={createWaLink(`Halo, saya tertarik dengan ${car.name} (${car.type}). Boleh minta pricelist lengkap variannya?`)}
                      target="_blank"
                      className="flex-1 text-center py-3 bg-primary text-black rounded-xl hover:bg-primary/90 transition-all duration-300 font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                      </svg>
                      Tanya Seller
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Models;
