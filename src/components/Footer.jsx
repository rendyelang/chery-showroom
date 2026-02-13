const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Garis Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* === KOLOM 1: BRAND === */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-wider mb-2">
                CHERY<span className="text-primary">BOGOR</span>
              </h2>
              <p className="text-gray-500 text-sm">Authorized Dealer Resmi</p>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">Kami menghadirkan pengalaman berkendara masa depan dengan teknologi premium dan pelayanan purna jual terbaik di Kota Bogor.</p>
            {/* <div className="flex gap-4">
              Social Icons (Contoh Instagram)
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.148 3.252-1.667 4.771-4.919 4.919-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-3.252-.148-4.771-1.667-4.919-4.919-.058-1.266-.069-1.646-.069-4.85s.011-3.584.069-4.85c.148-3.252 1.667-4.771 4.919-4.919 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44 0 .795.645 1.44 1.441 1.44.795 0 1.439-.645 1.439-1.44 0-.794-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div> */}
          </div>

          {/* === KOLOM 2: LOKASI === */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-widest border-b-2 border-primary w-fit pb-2">Kunjungi Showroom</h3>

            <div className="flex items-start gap-4">
              <div className="mt-1 bg-white/10 p-3 rounded-full text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Chery Pajajaran Bogor</p>
                <p className="text-gray-400 text-sm leading-relaxed mt-2 font-light">Jl. Raya Pajajaran No.76, RT.01/RW.11, Baranangsiang, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16143</p>
                <a href="https://maps.app.goo.gl/UxoYqV8k54kS4jQC6" target="_blank" className="text-primary text-xs font-bold mt-3 inline-block hover:underline">
                  BUKA DI GOOGLE MAPS →
                </a>
              </div>
            </div>
          </div>

          {/* === KOLOM 3: LIVE MAP (Interactive) === */}
          <div className="h-full min-h-[250px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            {/* TIPS: Paste link dari langkah di bawah ini ke dalam src="..."
                Saya pasang placeholder sementara yang valid agar peta muncul.
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7926.609867986442!2d106.80149412498697!3d-6.608980399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c507a7a549e5%3A0x3ceef7490f4c67e5!2sChery%20Pajajaran%20Bogor!5e0!3m2!1sid!2sid!4v1770945621674!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* === BOTTOM COPYRIGHT === */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2026 Chery Bogor Sales. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-600 font-medium">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
