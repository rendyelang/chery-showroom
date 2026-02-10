import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { carDetails } from "../data/cars";
import { createWaLink } from "../utils/whatsapp";

const Models = () => {
  const [activeTab, setActiveTab] = useState("Omoda");

  // 2. Filter dari data import, bukan data lokal
  const filteredCars = carDetails.filter((car) => car.category === activeTab);

  return (
    <section id="models" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Masterpiece <span className="text-primary">Collection</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Inovasi desain dan teknologi yang berpadu sempurna.</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {["Tiggo", "Omoda", "J6"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-500 relative overflow-hidden group
                ${activeTab === tab ? "text-black" : "text-gray-400 hover:text-white"}`}
            >
              {activeTab === tab && <motion.div layoutId="activeTab" className="absolute inset-0 bg-primary w-full h-full" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
              <span className="relative z-10">{tab.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Grid Mobil */}
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
                <div className="relative h-72 overflow-hidden">
                  <img src={car.img} alt={car.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <p className="text-primary font-bold text-sm">{car.price}</p>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-white mb-4">{car.name}</h3>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {car.features.map((feature, idx) => (
                      <span key={idx} className="text-xs text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3">
                    <Link
                      to={`/product/${car.id}`}
                      className="flex-1 text-center py-3 bg-white/10 text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 font-bold border border-white/10 flex items-center justify-center"
                    >
                      Detail
                    </Link>

                    {/* 3. TOMBOL WA TANYA SELLER DINAMIS */}
                    <a
                      href={createWaLink(`Halo, saya mau tanya tentang ${car.name} dong, bisa info promo?`)}
                      target="_blank"
                      className="flex-1 text-center py-3 bg-primary text-black rounded-xl hover:bg-primary/90 transition-all duration-300 font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                    >
                      {/* Icon Chat Bubble Kecil */}
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
