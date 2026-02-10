import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Andi Pratama",
    role: "Omoda E5 Owner",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    text: "Awalnya ragu, tapi performa Omoda E5 beneran gila. Charging cepet, lari kenceng, fitur lengkap.",
  },
  {
    id: 2,
    name: "Siti Rahma",
    role: "Tiggo 8 Pro Owner",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    text: "Mobil keluarga paling nyaman. Service dealer ini juga top banget, ramah dan ngebantu banget pas klaim asuransi.",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Omoda 5 GT Owner",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    text: "Desainnya futuristik abis. Tiap bawa ke kantor selalu jadi pusat perhatian. Worth every penny!",
  },
  {
    id: 4,
    name: "Diana Lim",
    role: "Chery J6 Pre-book",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    text: "Udah indent J6 karena liat reviewnya. Sales di sini informatif banget ngasih tau update unitnya.",
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section id="services" className="py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-6">
        {/* === TITLE LAYANAN === */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 md:mb-20">
          <span className="text-primary tracking-[0.3em] text-sm uppercase font-bold mb-2 block">Premium Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Layanan Eksklusif</h2>
        </motion.div>

        {/* === GRID LAYANAN (4 Kolom) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 md:mb-40">
          {[
            { title: "Penjualan", desc: "Unit ready stock dengan penawaran harga terbaik.", icon: "🚗" },
            { title: "Service", desc: "Teknisi tersertifikasi standar global Chery.", icon: "🔧" },
            { title: "Suku Cadang", desc: "Jaminan sparepart 100% asli dan bergaransi.", icon: "⚙️" },
            { title: "Body Repair", desc: "Kembalikan tampilan mobil seperti baru pasca insiden.", icon: "✨" },
          ].map((item, idx) => (
            <motion.div key={idx} whileHover={{ y: -10 }} className="p-8 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 hover:border-primary/40 transition-all duration-300 group">
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* === TESTIMONIALS SECTION === */}
        <div id="testimonials">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Happy <span className="text-primary">Family</span>
            </h2>
            <p className="hidden md:block text-gray-400">Hover foto untuk melihat cerita mereka.</p>
            <p className="block md:hidden text-gray-400">Geser untuk melihat cerita mereka.</p>
          </motion.div>

          {/* ==============================================
              1. TAMPILAN MOBILE: HORIZONTAL SWIPE CAROUSEL 
              (Hanya muncul di layar kecil)
             ============================================== */}
          <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 scrollbar-none">
            {testimonials.map((testi) => (
              <div key={testi.id} className="snap-center shrink-0 w-[85vw] sm:w-[350px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-[100px] -mr-4 -mt-4"></div>

                <div className="flex items-center gap-4 mb-4">
                  <img src={testi.img} alt={testi.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary" />
                  <div>
                    <h4 className="text-white font-bold text-lg">{testi.name}</h4>
                    <p className="text-primary text-xs uppercase tracking-wider">{testi.role}</p>
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-white/10 font-serif">"</span>
                  <p className="text-gray-300 text-sm leading-relaxed italic relative z-10 pl-2">{testi.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ==============================================
              2. TAMPILAN DESKTOP: INTERACTIVE BUBBLES 
              (Hanya muncul di layar medium ke atas / md:flex)
             ============================================== */}
          <div className="hidden md:flex flex-row gap-4 justify-center items-stretch h-[300px]">
            {testimonials.map((testi) => (
              <motion.div
                key={testi.id}
                onHoverStart={() => setActiveId(testi.id)}
                layout
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out border border-white/10
                  ${activeId === testi.id ? "flex-[3] bg-white/10" : "flex-[1] bg-white/5 grayscale hover:grayscale-0"}
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>

                <div className="absolute inset-0 z-0">
                  <div className="w-full h-full bg-gray-800/50"></div>
                </div>

                <div className="relative z-20 h-full flex flex-col justify-end p-6">
                  <div className={`flex items-center gap-4 transition-all duration-300 ${activeId === testi.id ? "mb-4" : "mb-0 justify-center"}`}>
                    <img
                      src={testi.img}
                      alt={testi.name}
                      className={`rounded-full object-cover border-2 border-primary transition-all duration-500
                        ${activeId === testi.id ? "w-16 h-16" : "w-16 h-16"}
                      `}
                    />
                    <div className={`${activeId === testi.id ? "opacity-100 block" : "opacity-0 hidden"} transition-opacity duration-300 overflow-hidden whitespace-nowrap`}>
                      <h4 className="text-white font-bold text-lg">{testi.name}</h4>
                      <p className="text-primary text-xs uppercase tracking-wider">{testi.role}</p>
                    </div>
                  </div>

                  {activeId === testi.id && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                      <p className="text-gray-200 text-lg leading-relaxed italic">"{testi.text}"</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
