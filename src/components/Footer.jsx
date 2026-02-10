const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            CHERY<span className="text-primary">BOGOR</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2">Authorized Dealer Bogor</p>
        </div>
        <p className="text-gray-600 text-sm">&copy; 2026 Chery Bogor Sales. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
