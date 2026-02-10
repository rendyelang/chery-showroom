/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna brand Chery (Dark Luxury Vibe)
        primary: '#C6A87C', // Warna Emas/Bronze mewah untuk tombol/aksen
        secondary: '#1A1A1A', // Hitam tidak pekat (lebih elegan)
        dark: '#050505', // Background utama (sangat gelap)
        light: '#F3F4F6', // Teks utama
        gray: {
          800: '#1F2937', // Untuk card background
          400: '#9CA3AF', // Untuk teks deskripsi/sub-heading
        }
      },
      fontFamily: {
        // Kita akan pakai font 'Outfit' biar modern & techy
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}