import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Models from "./components/Models";
import Services from "./components/Services";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";
// import AnimatedBackground from './components/AnimatedBackground';
import ProductDetail from "./components/ProductDetail";
import ScrollToTop from "./components/ScrollToTop";

// Halaman Home
const Home = () => (
  <>
    <Hero />
    <Models />
    <Services />
  </>
);

// Komponen Pembungkus untuk Logic Navbar
const MainContent = () => {
  const location = useLocation();

  // Cek apakah user sedang di halaman detail (url mengandung '/product/')
  const isDetailPage = location.pathname.startsWith("/product/");

  return (
    <div className="min-h-screen text-light selection:bg-primary selection:text-black relative">
      {/* <AnimatedBackground /> */}

      {/* Navbar hanya muncul jika BUKAN halaman detail */}
      {!isDetailPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
      <FloatingWA />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainContent />
    </Router>
  );
}

export default App;
