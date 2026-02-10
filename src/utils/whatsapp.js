// 1. Ganti nomor kamu di sini (format 62...)
// Cukup ubah ini, semua tombol di website otomatis berubah!
export const WA_NUMBER = "6282142048886";

// 2. Fungsi Helper untuk bikin link otomatis
export const createWaLink = (message) => {
  if (!message) {
    // Kalau ga ada pesan khusus, link ke nomor aja
    return `https://wa.me/${WA_NUMBER}`;
  }

  // encodeURIComponent bikin spasi jadi %20, dll (biar URL valid)
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WA_NUMBER}?text=${encodedMessage}`;
};
