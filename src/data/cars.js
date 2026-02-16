export const carDetails = [
  // =================================================================
  // KATEGORI: BEV
  // =================================================================
  {
    id: "j6",
    name: "Chery J6",
    type: "BEV",
    desc: "SUV Listrik Off-road pertama dengan desain Fashion Cube.",
    brochure: "/brochures/j6-iwd.pdf",
    // Fitur Default (untuk tampilan Card di depan)
    features: ["Baterai LFP", "Panjang 4406 mm", "Suspensi Multi-Link Aluminium H-Arm"],
    gallery: ["https://images.unsplash.com/photo-1503376763036-066120622c74?w=800"],
    variants: [
      {
        id: "j6-rwd",
        name: "J6 RWD",
        price: 560500000,
        image: "/models/bev/j6/j6_rwd/j6_rwd_white.png",
        features: ["Rear Wheel Drive", "Suspensi Multi-Link Aluminium H-Arm", "Unique All-Aluminium Multi-Cavity Body"], // Fitur Spesifik
        colors: [
          { name: "WHITE HOWLITE", hex: "#ffffff", img: "/models/bev/j6/j6_rwd/j6_rwd_white.png" },
          { name: "BLACK PLATINUM", hex: "#000000", img: "/models/bev/j6/j6_rwd/j6_rwd_black.webp" },
          { name: "GRAY MORGANITE", hex: "#474747", img: "/models/bev/j6/j6_rwd/j6_rwd_gray.webp" },
          { name: "GREEN EMERALD", hex: "#071f27", img: "/models/bev/j6/j6_rwd/j6_rwd_green.webp" },
        ],
      },
      {
        id: "j6-t-rwd",
        name: "J6T RWD",
        price: 580500000,
        image: "/models/bev/j6/j6t_rwd/j6t_rwd_black.png",
        features: ["Suspensi Multi-Link Aluminium H-Arm", "625mm Wading Depth", "225mm Ground Clearance"],
        colors: [
          { name: "BLACK PLATINUM", hex: "#000000", img: "/models/bev/j6/j6t_rwd/j6t_rwd_black.png" },
          { name: "GREY TECH", hex: "#393b3c", img: "/models/bev/j6/j6t_rwd/j6t_rwd_gray.png" },
          { name: "RED MATRIX", hex: "#871719", img: "/models/bev/j6/j6t_rwd/j6t_rwd_red.png" },
          { name: "WHITE HOWLITE", hex: "#ffffff", img: "/models/bev/j6/j6t_rwd/j6t_rwd_white.png" },
        ],
      },
      {
        id: "j6-phantom-rwd",
        name: "J6 RWD PHANTOM",
        price: "Rp. XXX.XXX.XXX",
        image: "/models/bev/j6/j6_rwd_phantom.png",
        features: ["Rear Wheel Drive", "Suspensi Multi-Link Aluminium H-Arm", "Unique All-Aluminium Multi-Cavity Body"], // Fitur Beda
        colors: [{ name: "BLACK PHANTOM", hex: "#000", img: "/models/bev/j6/j6_rwd_phantom.png" }],
      },
      {
        id: "j6-iwd",
        name: "J6 IWD",
        price: 625500000,
        image: "/models/bev/j6/j6_iwd.png",
        features: ["Intelligent Wheel Drive", "12 Infinity Speaker", "14 ADAS"],
        colors: [
          { name: "GREEN EMERALD", hex: "#071f27", img: "/models/bev/j6/j6_iwd/j6_iwd_green.png" },
          { name: "BLACK PLATINUM", hex: "#000000", img: "/models/bev/j6/j6_iwd/j6_iwd_black.webp" },
          { name: "GRAY MORGANITE", hex: "#474747", img: "/models/bev/j6/j6_iwd/j6_iwd_gray.webp" },
          { name: "WHITE HOWLITE", hex: "#ffffff", img: "/models/bev/j6/j6_iwd/j6_iwd_white.webp" },
        ],
      },
      {
        id: "j6-t-iwd",
        name: "J6T IWD",
        price: 645500000,
        image: "/models/bev/j6/j6t_iwd.png",
        features: ["Intelligent Wheel Drive", "Jarak EV 436 km (NEDC)", "30 - 80% SOC Fast Charging 25 Menit"],
        colors: [
          { name: "RED MATRIX", hex: "#871719", img: "/models/bev/j6/j6t_iwd/j6t_iwd_red.png" },
          { name: "WHITE HOWLITE", hex: "#ffffff", img: "/models/bev/j6/j6t_iwd/j6t_iwd_white.png" },
          { name: "BLACK PLATINUM", hex: "#000000", img: "/models/bev/j6/j6t_iwd/j6t_iwd_black.png" },
          { name: "GREY TECH", hex: "#393b3c", img: "/models/bev/j6/j6t_iwd/j6t_iwd_gray.png" },
        ],
      },
      {
        id: "j6-phantom-iwd",
        name: "J6 IWD PHANTOM",
        price: "Rp. XXX.XXX.XXX",
        image: "/models/bev/j6/j6_iwd_phantom.png",
        features: ["Intelligent Wheel Drive", "12 Infinity Speaker", "14 ADAS + Phantom Kit"],
        colors: [{ name: "BLACK PHANTOM", hex: "#000", img: "/models/bev/j6/j6_iwd_phantom.png" }],
      },
    ],
  },
  {
    id: "e5",
    name: "Chery Omoda E5",
    type: "BEV",
    desc: "Crossover listrik futuristik dengan performa tinggi dan teknologi cerdas.",
    brochure: "/brochures/e5-pure.pdf",
    features: ["Baterai LFP", "0 - 100 km/h dalam 6,5s", "Jarak EV 505 Km (NEDC)"],
    gallery: ["https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800"],
    variants: [
      {
        id: "e5-pure",
        name: "E5 PURE",
        price: 369900000,
        image: "/models/bev/chery_e5/pure/e5_pure_white.png",
        features: ["Akselerasi 0 - 100 km/h dalam 6,5s", "Jarak EV 505 Km (NEDC)", "17 ADAS"],
        colors: [
          { name: "WHITE HOWLITE", hex: "#ffffff", img: "/models/bev/chery_e5/pure/e5_pure_white.png" },
          { name: "BLACK PLATINUM", hex: "#000000", img: "/models/bev/chery_e5/pure/e5_pure_black.png" },
        ],
      },
      {
        id: "e5-standard",
        name: "E5",
        price: 399900000,
        image: "/models/bev/chery_e5/base/e5_base_white",
        features: ["Sunroof Elektrik", "Kamera Panoramik 540 HD", "Power Tailgate Elektrik"],
        colors: [
          { name: "WHITE HOWLITE", hex: "#fff", img: "/models/bev/chery_e5/base/e5_base_white.png" },
          { name: "GREEN JADE TWO TONE", hex: "#87a6a2", img: "/models/bev/chery_e5/base/e5_base_green.png" },
          { name: "BLACK PLATINUM", hex: "#000", img: "/models/bev/chery_e5/base/e5_base_black.png" },
          { name: "GRAY MORGANITE", hex: "#474747", img: "/models/bev/chery_e5/base/e5_base_gray.png" },
        ],
      },
    ],
  },

  // =================================================================
  // KATEGORI: CSH
  // =================================================================
  {
    id: "tiggo-cross-csh",
    name: "Tiggo Cross CSH",
    type: "CSH",
    desc: "Efisiensi hybrid dalam balutan compact SUV yang lincah.",
    features: ["Mesin 1,5L DHE", "Panjang 4330 MM", "17 ADAS"],
    gallery: ["https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800"],
    variants: [
      {
        id: "cross-csh",
        name: "CROSS CSH",
        price: 319800000,
        image: "/models/csh/tiggo_cross/cross_silver.png",
        features: ["Mesin 1,5L DHE", "Panjang 4330 MM", "17 ADAS"],
        colors: [
          { name: "SILVER MOONLIGHT", hex: "#a2b2d1", img: "/models/csh/tiggo_cross/cross_silver.png" },
          { name: "BLACK PLATINUM", hex: "#000000", img: "/models/csh/tiggo_cross/cross_black.png" },
          { name: "GREY TECH", hex: "#393b3c", img: "/models/csh/tiggo_cross/cross_grey.png" },
          { name: "RED RUBY", hex: "#871719", img: "/models/csh/tiggo_cross/cross_red.png" },
          { name: "WHITE HOWLITE", hex: "#fff", img: "/models/csh/tiggo_cross/cross_white.png" },
        ],
      },
    ],
  },
  {
    id: "tiggo-8-csh",
    name: "Tiggo 8 CSH",
    type: "CSH",
    desc: "SUV 7-Seater Hybrid untuk kenyamanan keluarga maksimal.",
    brochure: "/brochures/tiggo-8-csh.pdf",
    features: ["Jarak Tempuh EV 90 Km", "Jarak Tempuh Hybrid 1300+ Km", "14 ADAS"],
    gallery: ["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800"],
    variants: [
      {
        id: "t8-csh-comfort",
        name: "FWD COMFORT",
        price: 439900000,
        image: "/models/csh/tiggo8/tiggo_8_csh_fwd_comfort.png",
        features: ["Front Wheel Drive", "Comprehensive Mileage 1300+ Km", "90 km Pure EV Mileage"],
        colors: [{ name: "GREY BAMBOO ASH", hex: "#6e7471", img: "/models/csh/tiggo8/tiggo_8_csh_fwd_comfort.png" }],
      },
      {
        id: "t8-csh-premium",
        name: "FWD PREMIUM",
        price: 509900000,
        image: "/models/csh/tiggo8/tiggo_8_csh_fwd_premium.png",
        features: ["Front Wheel Drive", "Panoramic Sunroof", "Power Tailgate & 12 Speakers"],
        colors: [{ name: "GREEN AURORA", hex: "#315050", img: "/models/csh/tiggo8/tiggo_8_csh_fwd_premium.png" }],
      },
      {
        id: "t8-csh-awd",
        name: "AWD",
        price: 559900000,
        image: "/models/csh/tiggo8/tiggo_8_csh_awd.png",
        features: ["All Wheel Drive", "Triple Motor", "Akselerasi 1-100 km/h dalam 6.8s"],
        colors: [{ name: "BLACK CARBON CRYSTAL", hex: "#000", img: "/models/csh/tiggo8/tiggo_8_csh_awd.png" }],
      },
    ],
  },
  {
    id: "tiggo-9-csh",
    name: "Tiggo 9 CSH",
    type: "CSH",
    desc: "Flagship SUV Hybrid dengan kemewahan tingkat tinggi.",
    brochure: "/brochures/tiggo-9-csh.pdf",
    features: ["Pure EV Mileage 180km+", "Queen Seat", "Automatic Parking Assist"],
    gallery: ["https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800"],
    variants: [
      {
        id: "t9-csh",
        name: "TIGGO 9 CSH",
        price: 729900000,
        image: "/models/csh/tiggo9/tiggo9_green.png",
        features: ["Captain Seat", "2.0 PHEV", "Face ID"],
        colors: [
          { name: "AURORA GREEN", hex: "#315050", img: "/models/csh/tiggo9/tiggo9_green.png" },
          { name: "WHITE KHAKI", hex: "#fff", img: "/models/csh/tiggo9/tiggo9_white.png" },
          { name: "BLACK CARBON CRYSTAL", hex: "#000", img: "/models/csh/tiggo9/tiggo9_black.png" },
          { name: "UNIVERSAL GREY", hex: "#393b3c", img: "/models/csh/tiggo9/tiggo9_grey.png" },
        ],
      },
    ],
  },

  // =================================================================
  // KATEGORI: ICE
  // =================================================================
  {
    id: "tiggo-cross",
    name: "Tiggo Cross",
    type: "ICE",
    desc: "Compact SUV lincah dengan harga terjangkau untuk perkotaan.",
    brochure: "/brochures/tiggo-cross-comfort.pdf",
    features: ["Mesin 1,5L CVT", "Panjang 4320 MM", "Wheelbase 2630 MM"],
    gallery: ["https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800"],
    variants: [
      {
        id: "cross-comfort",
        name: "COMFORT",
        price: 259500000,
        image: "/models/ice/tiggo_cross/tiggo_cross_red.png",
        features: ["Mesin N/A 1,5 L & 7 Speed CVT", "Intelligent Voice Assistant", "Car Link O"],
        colors: [
          { name: "RED RUBY", hex: "#871719", img: "/models/ice/tiggo_cross/tiggo_cross_red.png" },
          { name: "SILVER MOONLIGHT", hex: "#a2b2d1", img: "/models/ice/tiggo_cross/tiggo_cross_silver.png" },
          { name: "BLACK PLATINUM", hex: "#000", img: "/models/ice/tiggo_cross/tiggo_cross_black.png" },
          { name: "WHITE HOWLITE", hex: "#fff", img: "/models/ice/tiggo_cross/tiggo_cross_white.png" },
        ],
      },
      {
        id: "cross-premium",
        name: "PREMIUM",
        price: 289500000,
        image: "/models/ice/tiggo_cross/tiggo_cross_silver.png",
        features: ["Sunroof Elektrik", "6 Airbag", "15 ADAS"],
        colors: [
          { name: "SILVER MOONLIGHT", hex: "#a2b2d1", img: "/models/ice/tiggo_cross/tiggo_cross_silver.png" },
          { name: "RED RUBY", hex: "#871719", img: "/models/ice/tiggo_cross/tiggo_cross_red.png" },
          { name: "BLACK PLATINUM", hex: "#000", img: "/models/ice/tiggo_cross/tiggo_cross_black.png" },
          { name: "WHITE HOWLITE", hex: "#fff", img: "/models/ice/tiggo_cross/tiggo_cross_white.png" },
        ],
      },
    ],
  },
  {
    id: "tiggo-cross-sport",
    name: "Tiggo Cross Sport",
    type: "ICE",
    desc: "Varian sporty dari Tiggo Cross untuk jiwa muda.",
    features: ["Mesin 1,5T DCT", "Panjang 4330 MM", "Wheelbase 2610 MM"],
    gallery: ["https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800"],
    variants: [
      {
        id: "cross-sport",
        name: "SPORT",
        price: 299900000,
        image: "/models/ice/tiggo_cross_sport/tiggo_cross_sport_red.png",
        features: ["7 Airbag", "Torsi 320 Nm", "6-Speed Wet DCT"],
        colors: [
          { name: "RED RUBY", hex: "#871719", img: "/models/ice/tiggo_cross_sport/tiggo_cross_sport_red.png" },
          { name: "SILVER MOONLIGHT", hex: "#a2b2d1", img: "/models/ice/tiggo_cross_sport/tiggo_cross_sport_silver.png" },
          { name: "BLACK PLATINUM", hex: "#000", img: "/models/ice/tiggo_cross_sport/tiggo_cross_sport_black.png" },
          { name: "WHITE HOWLITE", hex: "#fff", img: "/models/ice/tiggo_cross_sport/tiggo_cross_sport_white.png" },
        ],
      },
    ],
  },
  {
    id: "chery-c5",
    name: "Chery C5",
    type: "ICE",
    desc: "Crossover dengan desain radikal dan fitur teknologi canggih.",
    features: ["Mesin 1,5L TCI", "Panjang 4400 MM", "10 ADAS"],
    gallery: ["https://images.unsplash.com/photo-1605559424843-9e4c2287f386?w=800"],
    variants: [
      {
        id: "c5-z",
        name: "C5 Z",
        price: 319900000,
        image: "/models/ice/cherry_c5/rz_black.png",
        features: ["Mesin 1,5L TCI", "Suspensi Belakang Multi-link", "Idling Start Stop"],
        colors: [
          { name: "BLACK PLATINUM", hex: "#000", img: "/models/ice/cherry_c5/rz_black.png" },
          { name: "WHITE HOWLITE", hex: "#fff", img: "/models/ice/cherry_c5/rz_white.png" },
        ],
      },
      {
        id: "c5-rz",
        name: "C5 RZ",
        price: 349900000,
        image: "/models/ice/cherry_c5/rz_white.png",
        features: ["Sunroof Elektrik", "Kamera Panoramik 540 HD", "Power Tailgate Elektrik"],
        colors: [
          { name: "WHITE HOWLITE", hex: "#fff", img: "/models/ice/cherry_c5/rz_white.png" },
          { name: "WHITE HOWLITE BLACK", hex: "#fff", img: "/models/ice/cherry_c5/rz_white_black.png" },
          { name: "RED RUBY", hex: "#871719", img: "/models/ice/cherry_c5/rz_red.png" },
          { name: "BLACK PLATINUM", hex: "#000", img: "/models/ice/cherry_c5/rz_black.png" },
        ],
      },
    ],
  },
  {
    id: "tiggo-8",
    name: "Tiggo 8",
    type: "ICE",
    desc: "SUV Keluarga 7-Seater dengan kabin luas dan harga kompetitif.",
    features: ["Mesin Turbo 1.6", "Panjang 4722 mm", "FWD"],
    gallery: ["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800"],
    variants: [
      {
        id: "t8-comfort",
        name: "COMFORT",
        price: 357500000,
        image: "/models/ice/tiggo8/tiggo8_blue.png",
        features: ["1,5L TGDI", "Kamera Panoramik 360", "6 Airbag"],
        colors: [
          { name: "BLUE SAPPHIRE", hex: "#101a54", img: "/models/ice/tiggo8/tiggo8_blue.png" },
          { name: "WHITE HOWLITE", hex: "#fff", img: "/models/ice/tiggo8/tiggo8_white.png" },
          { name: "BLACK PLATINUM", hex: "#000", img: "/models/ice/tiggo8/tiggo8_black.png" },
          { name: "GREY MORGANITE", hex: "#474747", img: "/models/ice/tiggo8/tiggo8_grey.png" },
        ],
      },
      {
        id: "t8-premium",
        name: "PREMIUM",
        price: 397500000,
        image: "/models/ice/tiggo8/tiggo8_black.png",
        features: ["Sunroof Panoramik Elektrik", "9 ADAS", "Memory Seat + Driving Seat Welcome Function"],
        colors: [
          { name: "BLACK PLATINUM", hex: "#000", img: "/models/ice/tiggo8/tiggo8_black.png" },
          { name: "BLUE SAPPHIRE", hex: "#101a54", img: "/models/ice/tiggo8/tiggo8_blue.png" },
          { name: "WHITE HOWLITE", hex: "#fff", img: "/models/ice/tiggo8/tiggo8_white.png" },
          { name: "GREY MORGANITE", hex: "#474747", img: "/models/ice/tiggo8/tiggo8_grey.png" },
        ],
      },
    ],
  },
  {
    id: "tiggo-8-promax",
    name: "Tiggo 8 Pro Max",
    type: "ICE",
    desc: "Varian tertinggi Tiggo 8 dengan mesin 2.0L Turbo yang buas.",
    features: ["Mesin, 2,0 T", "Panjang 4720 mm", "AWD"],
    gallery: ["https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800"],
    variants: [
      {
        id: "t8-promax-fwd",
        name: "FWD",
        price: 568500000,
        image: "/models/ice/tiggo8_promax/tiggo_8_pro_max_fwd.png",
        features: ["Front Wheel Drive", "12 ADAS", "9 Airbag"],
        colors: [{ name: "WHITE HOWLITE", hex: "#fff", img: "/models/ice/tiggo8_promax/tiggo_8_pro_max_fwd.png" }],
      },
      {
        id: "t8-promax-awd",
        name: "AWD",
        price: 628500000,
        image: "/models/ice/tiggo8_promax/tiggo_8_pro_max_awd.png",
        features: ["2,0 L TGDI & All Wheel Drive", "10 Speaker", "10 Airbag"],
        colors: [{ name: "BLACK PLATINUM", hex: "#000", img: "/models/ice/tiggo8_promax/tiggo_8_pro_max_awd.png" }],
      },
    ],
  },
];
