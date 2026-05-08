// Vodafone Egypt Plans Data
const plansData = [
  // Flex Plans
  {
    id: "flex_45",
    name: "Flex 52",
    category: "flex",
    categoryName: "فليكس",
    price: 52,
    priceWithTax: 75,
    description: "1,500 فليكس شهرياً",
    color: "#E60000",
    features: {
      "وحدات الفليكس": "1,500",
      الإنترنت: "1 فليكس = 1 ميجا",
      "مكالمات فودافون": "1 فليكس = 1 دقيقة",
      "مكالمات الشبكات الأخرى": "5 فليكس = 1 دقيقة",
      الرسائل: "1 فليكس = 1 رسالة",
      "السوشيال ميديا": "2 ميجا = 1 فليكس",
    },
    benefits: ["WATCH IT بالإعلانات"],
    code: "*880#",
    isPopular: false,
  },
  {
    id: "flex_70",
    name: "Flex 80",
    category: "flex",
    categoryName: "فليكس",
    price: 80,
    priceWithTax: 115,
    description: "3,000 فليكس شهرياً",
    color: "#E60000",
    features: {
      "وحدات الفليكس": "3,000",
      الإنترنت: "1 فليكس = 1 ميجا",
      "مكالمات فودافون": "1 فليكس = 1 دقيقة",
      "مكالمات الشبكات الأخرى": "5 فليكس = 1 دقيقة",
      الرسائل: "1 فليكس = 1 رسالة",
      "السوشيال ميديا": "2 ميجا = 1 فليكس",
    },
    benefits: ["WATCH IT بالإعلانات"],
    code: "*880#",
    isPopular: false,
  },
  {
    id: "flex_100",
    name: "Flex 115",
    category: "flex",
    categoryName: "فليكس",
    price: 115,
    priceWithTax: 165,
    description: "5,000 فليكس شهرياً",
    color: "#E60000",
    features: {
      "وحدات الفليكس": "5,000",
      الإنترنت: "1 فليكس = 1 ميجا",
      "مكالمات فودافون": "1 فليكس = 1 دقيقة",
      "مكالمات الشبكات الأخرى": "5 فليكس = 1 دقيقة",
      الرسائل: "1 فليكس = 1 رسالة",
      "السوشيال ميديا": "2 ميجا = 1 فليكس",
    },
    benefits: ["WATCH IT", "Yango Play", "أنغامي بلس"],
    code: "*880#",
    isPopular: true,
  },
  {
    id: "flex_150",
    name: "Flex 175",
    category: "flex",
    categoryName: "فليكس",
    price: 175,
    priceWithTax: 252,
    description: "9,000 فليكس شهرياً",
    color: "#E60000",
    features: {
      "وحدات الفليكس": "9,000",
      الإنترنت: "1 فليكس = 1 ميجا",
      "مكالمات فودافون": "1 فليكس = 1 دقيقة",
      "مكالمات الشبكات الأخرى": "5 فليكس = 1 دقيقة",
      الرسائل: "1 فليكس = 1 رسالة",
      "السوشيال ميديا": "2 ميجا = 1 فليكس",
    },
    benefits: ["WATCH IT", "Yango Play", "أنغامي بلس"],
    code: "*880#",
    isPopular: false,
  },
  {
    id: "flex_300",
    name: "Flex 345",
    category: "flex",
    categoryName: "فليكس",
    price: 345,
    priceWithTax: 497,
    description: "21,000 فليكس شهرياً",
    color: "#E60000",
    features: {
      "وحدات الفليكس": "21,000",
      الإنترنت: "1 فليكس = 1 ميجا",
      "مكالمات فودافون": "1 فليكس = 1 دقيقة",
      "مكالمات الشبكات الأخرى": "5 فليكس = 1 دقيقة",
      الرسائل: "1 فليكس = 1 رسالة",
      "السوشيال ميديا": "2 ميجا = 1 فليكس",
    },
    benefits: ["WATCH IT", "Yango Play", "أنغامي بلس"],
    code: "*880#",
    isPopular: false,
  },

  // Plus Plans
  {
    id: "plus_32",
    name: "Plus 32",
    category: "plus",
    categoryName: "بلس",
    price: 32,
    priceWithTax: 50,
    description: "1,400 ميجابايت",
    color: "#00B050",
    features: {
      البيانات: "1,400 MB",
      الصلاحية: "28 يوم",
      "ترحيل البيانات": "نعم",
    },
    benefits: ["تجديد تلقائي", "ترحيل البيانات"],
    code: "*888#",
    isPopular: false,
  },
  {
    id: "plus_60",
    name: "Plus 60",
    category: "plus",
    categoryName: "بلس",
    price: 60,
    priceWithTax: 90,
    description: "3,000 ميجابايت",
    color: "#00B050",
    features: {
      البيانات: "3,000 MB",
      الصلاحية: "28 يوم",
      "ترحيل البيانات": "نعم",
    },
    benefits: ["تجديد تلقائي", "ترحيل البيانات"],
    code: "*888#",
    isPopular: true,
  },
  {
    id: "plus_85",
    name: "Plus 85",
    category: "plus",
    categoryName: "بلس",
    price: 85,
    priceWithTax: 125,
    description: "4,750 ميجابايت",
    color: "#00B050",
    features: {
      البيانات: "4,750 MB",
      الصلاحية: "28 يوم",
      "ترحيل البيانات": "نعم",
    },
    benefits: ["تجديد تلقائي", "ترحيل البيانات"],
    code: "*888#",
    isPopular: false,
  },
  {
    id: "plus_105",
    name: "Plus 105",
    category: "plus",
    categoryName: "بلس",
    price: 105,
    priceWithTax: 150,
    description: "6,000 ميجابايت",
    color: "#00B050",
    features: {
      البيانات: "6,000 MB",
      الصلاحية: "28 يوم",
      "ترحيل البيانات": "نعم",
    },
    benefits: ["تجديد تلقائي", "ترحيل البيانات"],
    code: "*888#",
    isPopular: false,
  },
  {
    id: "plus_155",
    name: "Plus 155",
    category: "plus",
    categoryName: "بلس",
    price: 155,
    priceWithTax: 225,
    description: "10 جيجابايت",
    color: "#00B050",
    features: {
      البيانات: "10 GB",
      الصلاحية: "28 يوم",
      "ترحيل البيانات": "نعم",
    },
    benefits: ["تجديد تلقائي", "ترحيل البيانات"],
    code: "*888#",
    isPopular: false,
  },
  {
    id: "plus_260",
    name: "Plus 260",
    category: "plus",
    categoryName: "بلس",
    price: 260,
    priceWithTax: 375,
    description: "18 جيجابايت",
    color: "#00B050",
    features: {
      البيانات: "18 GB",
      الصلاحية: "28 يوم",
      "ترحيل البيانات": "نعم",
    },
    benefits: ["تجديد تلقائي", "ترحيل البيانات"],
    code: "*888#",
    isPopular: false,
  },
  {
    id: "plus_520",
    name: "Plus 520",
    category: "plus",
    categoryName: "بلس",
    price: 520,
    priceWithTax: 745.8,
    description: "45 جيجابايت",
    color: "#00B050",
    features: {
      البيانات: "45 GB",
      الصلاحية: "28 يوم",
      "ترحيل البيانات": "نعم",
    },
    benefits: ["تجديد تلقائي", "ترحيل البيانات"],
    code: "*888#",
    isPopular: false,
  },

  // Plus Apps
  {
    id: "plus_youtube",
    name: "Plus YouTube",
    category: "plus_apps",
    categoryName: "بلس أبس",
    price: 6.5,
    priceWithTax: 7.41,
    description: "بيانات مخصصة ليوتيوب",
    color: "#FFC000",
    features: {
      "بيانات YouTube (كارت)": "450 ميجا",
      "بيانات YouTube (Flex 25-55)": "1,000 ميجا",
      "بيانات YouTube (Flex 60-100)": "2,000 ميجا",
    },
    benefits: ["YouTube بدون استهلاك الباقة الرئيسية"],
    code: "*00*1#",
    isPopular: false,
  },
  {
    id: "plus_tiktok",
    name: "Plus TikTok",
    category: "plus_apps",
    categoryName: "بلس أبس",
    price: 6.5,
    priceWithTax: 7.41,
    description: "بيانات مخصصة لتيك توك",
    color: "#FFC000",
    features: {
      "بيانات TikTok (كارت)": "450 ميجا",
      "بيانات TikTok (Flex 25-55)": "1,000 ميجا",
      "بيانات TikTok (Flex 60-100)": "2,000 ميجا",
    },
    benefits: ["TikTok بدون استهلاك الباقة الرئيسية"],
    code: "*00*2#",
    isPopular: false,
  },
  {
    id: "plus_play",
    name: "Plus Play",
    category: "plus_apps",
    categoryName: "بلس أبس",
    price: 6.5,
    priceWithTax: 7.41,
    description: "بيانات مخصصة للألعاب",
    color: "#FFC000",
    features: {
      "بيانات الألعاب (كارت)": "450 ميجا",
      "بيانات الألعاب (Flex 25-55)": "1,000 ميجا",
      "بيانات الألعاب (Flex 60-100)": "2,000 ميجا",
      "الألعاب المشمولة": "PUBG, Clash Royale, COD, Mobile Legends, Free Fire",
    },
    benefits: ["ألعابك المفضلة بدون استهلاك الباقة الرئيسية"],
    code: "*00*3#",
    isPopular: false,
  },

  // Red Plans
  {
    id: "red_essential",
    name: "RED Essential+",
    category: "red",
    categoryName: "ريد",
    price: 575,
    priceWithTax: 706.25,
    description: "3,500 دقيقة + 16 جيجا + DSL مجاني",
    color: "#C00000",
    features: {
      الدقائق: "3,500 دقيقة",
      الإنترنت: "16 جيجا",
      "DSL مجاني": "140 جيجا / 30 ميجا",
      الترفيه: "4 من 5 اشتراكات",
      "مشاركة الباقة": "1 فرد",
      التقسيط: "حتى 15,000 جنيه",
    },
    benefits: [
      "WATCH IT",
      "Anghami+",
      "OSN+",
      "Amazon Prime",
      "Yango Play",
      "Talabat Pro",
      "BEFIT 30",
      "Qanz",
    ],
    code: "*888#",
    isPopular: false,
  },
  {
    id: "red_advance",
    name: "RED Advance+",
    category: "red",
    categoryName: "ريد",
    price: 980,
    priceWithTax: 1204.4,
    description: "6,000 دقيقة + 32 جيجا + DSL مجاني",
    color: "#C00000",
    features: {
      الدقائق: "6,000 دقيقة",
      الإنترنت: "32 جيجا",
      "DSL مجاني": "140 جيجا / 30 ميجا",
      الترفيه: "5 من 7 اشتراكات",
      "مشاركة الباقة": "2 فرد",
      التقسيط: "حتى 20,000 جنيه",
      التجوال: "1 أسبوع/سنة",
    },
    benefits: [
      "WATCH IT",
      "Anghami+",
      "OSN+",
      "Amazon Prime",
      "Yango Play",
      "BEIN Connect",
      "Talabat Pro",
      "BEFIT 30",
      "Qanz",
    ],
    code: "*888#",
    isPopular: true,
  },
  {
    id: "red_prime+",
    name: "RED Prime+",
    category: "red",
    categoryName: "ريد",
    price: 1380,
    priceWithTax: 1695.4,
    description: "8,000 دقيقة + 50 جيجا + DSL مجاني",
    color: "#C00000",
    features: {
      الدقائق: "8,000 دقيقة",
      الإنترنت: "50 جيجا",
      "DSL مجاني": "300 جيجا / 30 ميجا",
      الترفيه: "6 من 8 اشتراكات",
      "مشاركة الباقة": "3 فرد",
      التقسيط: "حتى 30,000 جنيه",
      التجوال: "2 أسبوع/سنة",
    },
    benefits: [
      "WATCH IT",
      "شاهد",
      "OSN+",
      "Amazon Prime",
      "Yango Play",
      "BEIN Connect",
      "Anghami+",
      "Talabat Pro",
      "BEFIT 30",
      "Qanz",
    ],
    code: "*888#",
    isPopular: false,
  },
  {
    id: "red_elite+",
    name: "RED Elite+",
    category: "red",
    categoryName: "ريد",
    price: 2000,
    priceWithTax: 2460,
    description: "10,000 دقيقة + 85 جيجا + DSL مجاني",
    color: "#C00000",
    features: {
      الدقائق: "10,000 دقيقة",
      الإنترنت: "85 جيجا",
      "DSL مجاني": "300 جيجا / 30 ميجا",
      الترفيه: "7 من 8 اشتراكات",
      "مشاركة الباقة": "5 فرد",
      التقسيط: "حتى 40,000 جنيه",
      التجوال: "3 أسابيع/سنة + 10 دقائق دولية",
    },
    benefits: [
      "WATCH IT",
      "شاهد",
      "OSN+",
      "Amazon Prime",
      "Yango Play",
      "BEIN Connect",
      "Anghami+",
      "Talabat Pro",
      "BEFIT 30",
      "Qanz",
    ],
    code: "*888#",
    isPopular: false,
  },
  {
    id: "red_exclusive+",
    name: "RED Exclusive+",
    category: "red",
    categoryName: "ريد",
    price: 3450,
    priceWithTax: 4243.5,
    description: "11,000 دقيقة + 200 جيجا + DSL مجاني",
    color: "#C00000",
    features: {
      الدقائق: "11,000 دقيقة",
      الإنترنت: "200 جيجا",
      "DSL مجاني": "600 جيجا / 30 ميجا",
      الترفيه: "8 من 8 اشتراكات",
      "مشاركة الباقة": "6 فرد",
      التقسيط: "حتى 60,000 جنيه",
      التجوال: "4 أسابيع/سنة + 60 دقيقة دولية",
    },
    benefits: [
      "WATCH IT",
      "شاهد",
      "OSN+",
      "Amazon Prime",
      "Yango Play",
      "BEIN Connect",
      "Anghami+",
      "Talabat Pro",
      "BEFIT 30",
      "Qanz",
    ],
    code: "*888#",
    isPopular: false,
  },

  // DSL Plans
  {
    id: "dsl_50_30",
    name: "DSL 50 GB",
    category: "dsl",
    categoryName: "DSL",
    price: 150,
    priceWithTax: 171,
    description: "50 جيجا - 30 ميجا/ث",
    color: "#7030A0",
    features: {
      السرعة: "30 ميجا/ث",
      البيانات: "50 جيجا",
      الراوتر: "ZTE VDSL متاح",
    },
    benefits: ["إنترنت منزلي مستقر", "دعم فني 24/7"],
    code: null,
    isPopular: false,
  },
  {
    id: "DSL_150",
    name: "DSL 150 GB",
    category: "dsl",
    categoryName: "DSL",
    price: 260,
    priceWithTax: 296.4,
    description: "150 جيجا - 30 ميجا/ث",
    color: "#7030A0",
    features: {
      البيانات: "150 جيجا",
      السرعة: "حتى 50 ميجا/ث",
      الصلاحية: "28 يوم",
      الراوتر: "متوفر",
    },
    benefits: ["إنترنت منزلي سريع", "سهولة التركيب", "دعم فني 24/7"],
    code: null,
    isPopular: false,
  },
  {
    id: "dsl_200_30",
    name: "DSL 200 GB",
    category: "dsl",
    categoryName: "DSL",
    price: 330,
    priceWithTax: 376.2,
    description: "200 جيجا - 30 ميجا/ث",
    color: "#7030A0",
    features: {
      السرعة: "30 ميجا/ث",
      البيانات: "200 جيجا",
      الراوتر: "ZTE VDSL متاح",
    },
    benefits: ["إنترنت منزلي مستقر", "دعم فني 24/7"],
    code: null,
    isPopular: false,
  },
  {
    id: "dsl_300_30",
    name: "DSL 300 GB (30 Mbps)",
    category: "dsl",
    categoryName: "DSL",
    price: 460,
    priceWithTax: 524.4,
    description: "300 جيجا - 30 ميجا/ث",
    color: "#7030A0",
    features: {
      السرعة: "30 ميجا/ث",
      البيانات: "300 جيجا",
      الراوتر: "ZTE VDSL متاح",
    },
    benefits: ["إنترنت منزلي مستقر", "دعم فني 24/7"],
    code: null,
    isPopular: false,
  },
  {
    id: "dsl_600_30",
    name: "DSL 750 GB (30 Mbps)",
    category: "dsl",
    categoryName: "DSL",
    price: 925,
    priceWithTax: 1054.5,
    description: "750 جيجا - 30 ميجا/ث",
    color: "#7030A0",
    features: {
      السرعة: "30 ميجا/ث",
      البيانات: "750 جيجا",
      الراوتر: "ZTE VDSL متاح",
    },
    benefits: ["إنترنت منزلي مستقر", "دعم فني 24/7"],
    code: null,
    isPopular: false,
  },
  {
    id: "dsl_300_70",
    name: "DSL 300 GB (70 Mbps)",
    category: "dsl",
    categoryName: "DSL",
    price: 690,
    priceWithTax: 786.6,
    description: "300 جيجا - 70 ميجا/ث",
    color: "#7030A0",
    features: {
      السرعة: "70 ميجا/ث",
      البيانات: "300 جيجا",
      الراوتر: "ZTE VDSL متاح",
    },
    benefits: ["إنترنت منزلي مستقر", "دعم فني 24/7"],
    code: null,
    isPopular: false,
  },
  {
    id: "dsl_300_100",
    name: "DSL 300 GB (100 Mbps)",
    category: "dsl",
    categoryName: "DSL",
    price: 880,
    priceWithTax: 1003.2,
    description: "300 جيجا - 100 ميجا/ث",
    color: "#7030A0",
    features: {
      السرعة: "100 ميجا/ث",
      البيانات: "300 جيجا",
      الراوتر: "ZTE VDSL متاح",
    },
    benefits: ["إنترنت منزلي مستقر", "دعم فني 24/7"],
    code: null,
    isPopular: false,
  },
  {
    id: "dsl_600_100",
    name: "DSL 750 GB (100 Mbps)",
    category: "dsl",
    categoryName: "DSL",
    price: 1425,
    priceWithTax: 1624.5,
    description: "750 جيجا - 100 ميجا/ث",
    color: "#7030A0",
    features: {
      السرعة: "100 ميجا/ث",
      البيانات: "750 جيجا",
      الراوتر: "ZTE VDSL متاح",
    },
    benefits: ["إنترنت منزلي مستقر", "دعم فني 24/7"],
    code: null,
    isPopular: false,
  },
  {
    id: "dsl_1500_200",
    name: "DSL 1.5TB (200 Mbps)",
    category: "dsl",
    categoryName: "DSL",
    price: 2350,
    priceWithTax: 2679,
    description: "1,500 جيجا - 200 ميجا/ث",
    color: "#7030A0",
    features: {
      السرعة: "200 ميجا/ث",
      البيانات: "1,500 جيجا",
      الراوتر: "ZTE VDSL متاح",
    },
    benefits: ["إنترنت منزلي مستقر", "دعم فني 24/7"],
    code: null,
    isPopular: false,
  },
  // New Business Flex Plans (2026)
  {
    id: "bus_flex_70",
    name: "Business Flex 52",
    category: "business",
    categoryName: "بيزنس فليكس",
    price: 52,
    priceWithTax: 74.88,
    description: "3000 فليكس + دقائق مجانية للشركة",
    color: "#4A4A4A",
    features: {
      "وحدات الفليكس": "3,000",
      "مكالمات الشركة": "ببلاش (1000)",
      الإنترنت: "1 فليكس = 1 ميجا",
      "الشبكات الأخرى": "5 فليكس = 1 دقيقة",
    },
    benefits: ["WATCH IT بالإعلانات", "دقائق مجانية لكل زمايلك"],
    code: "*247#",
    isPopular: false,
  },
  {
    id: "bus_flex_100",
    name: "Business Flex 80",
    category: "business",
    categoryName: "بيزنس فليكس",
    price: 80,
    priceWithTax: 115.2,
    description: "5,000 فليكس + تطبيقات السوشيال مجاناً",
    color: "#4A4A4A",
    features: {
      "وحدات الفليكس": "5,000",
      "مكالمات الشركة": "ببلاش (1000)",
      "سوشيال ميديا": "فليكس بلس سوشيال",
      الإنترنت: "1 فليكس = 1 ميجا",
    },
    benefits: ["WATCH IT", "Anghami Plus", "عرض ضعف الباقة للخطوط الجديدة"],
    code: "*247#",
    isPopular: true,
  },
  {
    id: "bus_flex_150",
    name: "Business Flex 115",
    category: "business",
    categoryName: "بيزنس فليكس",
    price: 115,
    priceWithTax: 165.6,
    description: "9,000 فليكس + باقة ترفيهية كاملة",
    color: "#4A4A4A",
    features: {
      "وحدات الفليكس": "9,000",
      "مكالمات الشركة": "ببلاش (1000)",
      "رقم إضافي": "إمكانية إضافة رقم فردي",
      الإنترنت: "استهلاك ذكي للفليكسات",
    },
    benefits: [
      "WATCH IT",
      "Shahid VIP",
      "Anghami Plus",
      "خصومات من فودافون وان",
    ],
    code: "*247#",
    isPopular: false,
  },
  {
    id: "bus_flex_175",
    name: "Business Flex 175",
    category: "business",
    categoryName: "بيزنس فليكس",
    price: 175,
    priceWithTax: 252,
    description: "9,000 فليكس + باقة ترفيهية كاملة",
    color: "#4A4A4A",
    features: {
      "وحدات الفليكس": "9,000",
      "مكالمات الشركة": "ببلاش (1000)",
      "رقم إضافي": "إمكانية إضافة رقم فردي",
      الإنترنت: "استهلاك ذكي للفليكسات",
    },
    benefits: [
      "WATCH IT",
      "Shahid VIP",
      "Anghami Plus",
      "خصومات من فودافون وان",
    ],
    code: "*247#",
    isPopular: false,
  },
  {
    id: "bus_flex_345",
    name: "Business Flex 345",
    category: "business",
    categoryName: "بيزنس فليكس",
    price: 345,
    priceWithTax: 497,
    description: "21,000 فليكس + باقة ترفيهية كاملة",
    color: "#4A4A4A",
    features: {
      "وحدات الفليكس": "21,000",
      "مكالمات الشركة": "ببلاش (1000)",
      "رقم إضافي": "إمكانية إضافة رقم فردي",
      الإنترنت: "استهلاك ذكي للفليكسات",
    },
    benefits: [
      "WATCH IT",
      "Shahid VIP",
      "Anghami Plus",
      "خصومات من فودافون وان",
    ],
    code: "*247#",
    isPopular: false,
  },
  // Home Wireless Plans
  {
    id: "home_wireless_290",
    name: "Home Wireless 40 GB",
    category: "home_wireless",
    categoryName: "هوم وايرلس",
    price: 290,
    priceWithTax: 415,
    description: "40 جيجا - إنترنت منزلي لاسلكي",
    color: "#0070C0",
    features: {
      البيانات: "40 جيجا",
      السرعة: "حتى 50 ميجا/ث",
      الصلاحية: "28 يوم",
      الراوتر: "متوفر",
    },
    benefits: ["إنترنت منزلي سريع", "سهولة التركيب", "دعم فني 24/7"],
    code: null,
    isPopular: false,
  },
  {
    id: "home_wireless_520",
    name: "Home Wireless 135 GB",
    category: "home_wireless",
    categoryName: "هوم وايرلس",
    price: 520,
    priceWithTax: 745,
    description: "135 جيجا - إنترنت منزلي لاسلكي",
    color: "#0070C0",
    features: {
      البيانات: "135 جيجا",
      السرعة: "حتى 50 ميجا/ث",
      الصلاحية: "28 يوم",
      الراوتر: "متوفر",
    },
    benefits: ["إنترنت منزلي سريع", "سهولة التركيب", "دعم فني 24/7"],
    code: null,
    isPopular: false,
  },
  {
    id: "home_wireless_250",
    name: "Home Wireless 250 GB",
    category: "home_wireless",
    categoryName: "هوم وايرلس",
    price: 830,
    priceWithTax: 1186,
    description: "250 جيجا - إنترنت منزلي لاسلكي",
    color: "#0070C0",
    features: {
      البيانات: "250 جيجا",
      السرعة: "حتى 50 ميجا/ث",
      الصلاحية: "28 يوم",
      الراوتر: "متوفر",
    },
    benefits: ["إنترنت منزلي سريع", "سهولة التركيب", "دعم فني 24/7"],
    code: null,
    isPopular: true,
  },
  {
    id: "400",
    name: "Home Wireless 400 GB",
    category: "home_wireless",
    categoryName: "هوم وايرلس",
    price: 1270,
    priceWithTax: 1815,
    description: "400 جيجا - إنترنت منزلي لاسلكي",
    color: "#0070C0",
    features: {
      البيانات: "400 جيجا",
      السرعة: "حتى 50 ميجا/ث",
      الصلاحية: "28 يوم",
      الراوتر: "متوفر",
    },
    benefits: ["إنترنت منزلي سريع", "سهولة التركيب", "دعم فني 24/7"],
    code: null,
    isPopular: false,
  },

  // RED Business 2026 - البيانات المحدثة من الصورة
  {
    id: "red_bus_360",
    name: "RED Business 415",
    category: "business_red",
    categoryName: "بيزنس ريد",
    price: 415,
    priceWithTax: 593.45, // تقريبي شامل الضريبة
    description: "10 جيجا بايت + 2,500 دقيقة",
    color: "#E60000",
    features: {
      الإنترنت: "10 جيجا",
      الدقائق: "2,500 دقيقة",
      "أفراد العائلة": "0",
      "الإنترنت المنزلي": "ADSL بـ 160 ج.م",
    },
    benefits: ["WATCH IT", "Anghami Plus", "Yango Play", "Amazon Prime"],
    code: "*247#",
  },
  {
    id: "red_bus_500",
    name: "RED Business 575",
    category: "business_red",
    categoryName: "بيزنس ريد",
    price: 575,
    priceWithTax: 822.25,
    description: "16 جيجا بايت + 3,500 دقيقة",
    color: "#E60000",
    features: {
      الإنترنت: "16 جيجا",
      الدقائق: "3,500 دقيقة",
      "أفراد العائلة": "عضو واحد",
      "الإنترنت المنزلي": "ADSL بـ 210 ج.م",
    },
    benefits: ["4 اختيارات من 5 منصات ترفيهية", "BeFit 30", "Ganz كنز"],
    code: "*247#",
    isPopular: true,
  },
  {
    id: "red_bus_850",
    name: "RED Business 980",
    category: "business_red",
    categoryName: "بيزنس ريد",
    price: 980,
    priceWithTax: 1401.4,
    description: "32 جيجا بايت + 6,000 دقيقة",
    color: "#E60000",
    features: {
      الإنترنت: "32 جيجا",
      الدقائق: "6,000 دقيقة",
      "أفراد العائلة": "2 أعضاء",
      التجوال: "سفر بالباقة لمدة أسبوع",
    },
    benefits: ["5 اختيارات من 7 منصات", "TOD", "Disney+", "BeFit 30"],
    code: "*247#",
  },
  {
    id: "red_bus_1200",
    name: "RED Business 1,380",
    category: "business_red",
    categoryName: "بيزنس ريد",
    price: 1380,
    priceWithTax: 1971.4,
    description: "50 جيجا بايت + 8,000 دقيقة",
    color: "#E60000",
    features: {
      الإنترنت: "50 جيجا",
      الدقائق: "8,000 دقيقة",
      "أفراد العائلة": "3 أعضاء",
      التجوال: "سفر بالباقة لمدة أسبوعين",
    },
    benefits: ["6 اختيارات من 8 منصات", "YouTube Premium", "Ganz كنز"],
    code: "*247#",
  },
  {
    id: "red_bus_1750",
    name: "RED Business 2,000",
    category: "business_red",
    categoryName: "بيزنس ريد",
    price: 2000,
    priceWithTax: 2860,
    description: "85 جيجا بايت + 10,000 دقيقة",
    color: "#E60000",
    features: {
      الإنترنت: "85 جيجا",
      الدقائق: "10,000 دقيقة",
      "أفراد العائلة": "5 أعضاء",
      الدولي: "10 دقائق دولي",
    },
    benefits: ["7 اختيارات من 8 منصات", "Talabat Pro", "تجوال لمدة 3 أسابيع"],
    code: "*247#",
  },
  {
    id: "red_bus_3000",
    name: "RED Business 3,450",
    category: "business_red",
    categoryName: "بيزنس ريد",
    price: 3450,
    priceWithTax: 4933.5,
    description: "200 جيجا بايت + 11,000 دقيقة",
    color: "#E60000",
    features: {
      الإنترنت: "200 جيجا",
      الدقائق: "11,000 دقيقة",
      "أفراد العائلة": "6 أعضاء",
      الدولي: "60 دقيقة دولي",
    },
    benefits: ["كل المنصات الترفيهية (8)", "Talabat Pro", "تجوال لمدة شهر"],
    code: "*247#",
  },
];

// Compare list
let compareList = [];

// DOM Elements
const plansGrid = document.getElementById("plansGrid");
const categoryBtns = document.querySelectorAll(".category-btn");
const searchInput = document.getElementById("searchInput");
const planModal = document.getElementById("planModal");
const modalHeader = document.getElementById("modalHeader");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close-btn");
const compareContainer = document.getElementById("compareContainer");

// Initialize
function init() {
  renderPlans(plansData);
  setupEventListeners();
  setupSliders();
}

// Render Plans
function renderPlans(plans) {
  plansGrid.innerHTML = plans
    .map(
      (plan) => `
        <div class="plan-card" data-id="${plan.id}">
            <div class="plan-header" style="background: ${plan.color}15;">
                <span class="plan-category" style="background: ${plan.color};">${plan.categoryName}</span>
                ${plan.isPopular ? '<span class="plan-badge">الأشهر</span>' : ""}
            </div>
            <div class="plan-body">
                <div class="plan-name">${plan.name}</div>
                <div class="plan-desc">${plan.description}</div>
                <div class="plan-price">
                    <span class="amount" style="color: ${plan.color};">${plan.priceWithTax.toFixed(2)}</span>
                    <span class="currency">ج.م</span>
                </div>
                <span class="plan-price period">شهرياً شامل الضريبة</span>
                <button class="plan-btn" style="background: ${plan.color};" onclick="showPlanDetail('${plan.id}')">التفاصيل</button>
            </div>
        </div>
    `,
    )
    .join("");
}

// Setup Event Listeners
function setupEventListeners() {
  // Category filters
  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.category;
      filterPlans(category, searchInput.value);
    });
  });

  // Search
  searchInput.addEventListener("input", (e) => {
    const activeCategory = document.querySelector(".category-btn.active")
      .dataset.category;
    filterPlans(activeCategory, e.target.value);
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    planModal.classList.remove("active");
  });

  planModal.addEventListener("click", (e) => {
    if (e.target === planModal) {
      planModal.classList.remove("active");
    }
  });
}

// Filter Plans
function filterPlans(category, searchQuery) {
  let filtered = plansData;

  if (category !== "all") {
    filtered = filtered.filter((plan) => plan.category === category);
  }

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (plan) =>
        plan.name.toLowerCase().includes(query) ||
        plan.description.toLowerCase().includes(query),
    );
  }

  renderPlans(filtered);
}

// Show Plan Detail
function showPlanDetail(planId) {
  const plan = plansData.find((p) => p.id === planId);
  if (!plan) return;

  modalHeader.style.background = `linear-gradient(135deg, ${plan.color} 0%, ${plan.color}dd 100%)`;
  modalHeader.innerHTML = `
        <h2>${plan.name}</h2>
        <p>${plan.description}</p>
    `;

  const featuresHtml = Object.entries(plan.features)
    .map(
      ([key, value]) => `
        <div class="feature-item">
            <i class="fas ${getFeatureIcon(key)}" style="background: ${plan.color}15; color: ${plan.color};"></i>
            <div class="feature-info">
                <h4>${key}</h4>
                <p>${value}</p>
            </div>
        </div>
    `,
    )
    .join("");

  const benefitsHtml = plan.benefits
    .map(
      (benefit) => `
        <span class="benefit-tag" style="background: ${plan.color}15; color: ${plan.color}; border: 1px solid ${plan.color}30;">
            <i class="fas fa-check-circle"></i>
            ${benefit}
        </span>
    `,
    )
    .join("");

  modalBody.innerHTML = `
        <div class="price-box">
            <div>
                <span class="price" style="color: ${plan.color};">${plan.priceWithTax.toFixed(2)}</span>
                <span class="currency">ج.م</span>
            </div>
            <div class="period">شهرياً شامل الضريبة</div>
            <div class="tax">السعر قبل الضريبة: ${plan.price.toFixed(2)} ج.م</div>
        </div>
        
        ${
          plan.code
            ? `
        <div class="code-box">
            <i class="fas fa-dialpad"></i>
            <span>كود الاشتراك: <strong>${plan.code}</strong></span>
        </div>
        `
            : ""
        }
        
        <div class="features-list">
            <h3>المميزات</h3>
            ${featuresHtml}
        </div>
        
        <div class="benefits-list">
            <h3>الخدمات الترفيهية</h3>
            <div class="benefits-tags">
                ${benefitsHtml}
            </div>
        </div>
        
        <div class="modal-actions">
            <button class="btn-primary" style="background: ${plan.color};" onclick="addToCompare('${plan.id}')">
                <i class="fas fa-plus"></i> أضف للمقارنة
            </button>
            <button class="btn-secondary" style="border-color: ${plan.color}; color: ${plan.color};">
                اشترك الآن
            </button>
        </div>
    `;

  planModal.classList.add("active");
}

// Add to Compare
function addToCompare(planId) {
  const plan = plansData.find((p) => p.id === planId);
  if (!plan) return;

  if (compareList.length >= 3) {
    alert("يمكنك مقارنة 3 باقات فقط!");
    return;
  }

  if (compareList.find((p) => p.id === planId)) {
    alert("هذه الباقة مضافة بالفعل!");
    return;
  }

  compareList.push(plan);
  renderCompare();
  planModal.classList.remove("active");
}

// Remove from Compare
function removeFromCompare(planId) {
  compareList = compareList.filter((p) => p.id !== planId);
  renderCompare();
}

// Render Compare
function renderCompare() {
  if (compareList.length === 0) {
    compareContainer.innerHTML = `
            <div class="compare-empty">
                <i class="fas fa-exchange-alt"></i>
                <p>لم تضف أي باقات للمقارنة</p>
                <span>اختر حتى 3 باقات للمقارنة</span>
            </div>
        `;
    return;
  }

  const allFeatures = new Set();
  compareList.forEach((plan) => {
    Object.keys(plan.features).forEach((f) => allFeatures.add(f));
  });

  const featureRows = Array.from(allFeatures)
    .map(
      (feature) => `
        <div class="compare-row">
            <div class="compare-cell">${feature}</div>
            ${compareList
              .map(
                (plan) => `
                <div class="compare-cell">${plan.features[feature] || "-"}</div>
            `,
              )
              .join("")}
        </div>
    `,
    )
    .join("");

  const allBenefits = new Set();
  compareList.forEach((plan) => {
    plan.benefits.forEach((b) => allBenefits.add(b));
  });

  const benefitRows = Array.from(allBenefits)
    .map(
      (benefit) => `
        <div class="compare-row">
            <div class="compare-cell">${benefit}</div>
            ${compareList
              .map(
                (plan) => `
                <div class="compare-cell">
                    <i class="fas ${plan.benefits.includes(benefit) ? "fa-check-circle" : "fa-times-circle"}" 
                       style="color: ${plan.benefits.includes(benefit) ? "#2e7d32" : "#ccc"}; font-size: 20px;"></i>
                </div>
            `,
              )
              .join("")}
        </div>
    `,
    )
    .join("");

  compareContainer.innerHTML = `
        <div class="compare-table">
            <div class="compare-row header">
                <div class="compare-cell">الميزة</div>
                ${compareList
                  .map(
                    (plan) => `
                    <div class="compare-cell">
                        <div class="compare-plan-header" style="background: ${plan.color}15; border: 2px solid ${plan.color}30;">
                            <h3 style="color: ${plan.color};">${plan.name}</h3>
                            <div class="price">${plan.priceWithTax.toFixed(2)} ج.م</div>
                            <button class="remove-btn" onclick="removeFromCompare('${plan.id}')">حذف</button>
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
            
            <div class="compare-row">
                <div class="compare-cell">السعر</div>
                ${compareList
                  .map(
                    (plan) => `
                    <div class="compare-cell" style="font-weight: 700; color: ${plan.color};">${plan.priceWithTax.toFixed(2)} ج.م</div>
                `,
                  )
                  .join("")}
            </div>
            
            <div class="compare-row">
                <div class="compare-cell">الفئة</div>
                ${compareList
                  .map(
                    (plan) => `
                    <div class="compare-cell">${plan.categoryName}</div>
                `,
                  )
                  .join("")}
            </div>
            
            ${featureRows}
            
            <div class="compare-row" style="background: #f8f8f8;">
                <div class="compare-cell" style="font-weight: 700;">الخدمات الترفيهية</div>
                ${compareList.map(() => '<div class="compare-cell"></div>').join("")}
            </div>
            
            ${benefitRows}
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
            <button onclick="clearCompare()" style="padding: 12px 30px; background: #E60000; color: white; border: none; border-radius: 10px; font-family: 'Cairo', sans-serif; font-size: 16px; font-weight: 700; cursor: pointer;">
                مسح الكل
            </button>
        </div>
    `;
}

// Clear Compare
function clearCompare() {
  compareList = [];
  renderCompare();
}

// Setup Sliders
function setupSliders() {
  const dataSlider = document.getElementById("dataSlider");
  const callSlider = document.getElementById("callSlider");
  const smsSlider = document.getElementById("smsSlider");
  const budgetSlider = document.getElementById("budgetSlider");

  dataSlider.addEventListener("input", (e) => {
    document.getElementById("dataValue").textContent =
      `${e.target.value} جيجابايت/شهر`;
    updateRecommendations();
  });

  callSlider.addEventListener("input", (e) => {
    document.getElementById("callValue").textContent =
      `${e.target.value} دقيقة/شهر`;
    updateRecommendations();
  });

  smsSlider.addEventListener("input", (e) => {
    document.getElementById("smsValue").textContent =
      `${e.target.value} رسالة/شهر`;
    updateRecommendations();
  });

  budgetSlider.addEventListener("input", (e) => {
    document.getElementById("budgetValue").textContent =
      `${e.target.value} ج.م`;
    updateRecommendations();
  });

  updateRecommendations();
}

// Update Recommendations
function updateRecommendations() {
  const budget = parseFloat(document.getElementById("budgetSlider").value);
  const dataUsage = parseFloat(document.getElementById("dataSlider").value);
  const callUsage = parseFloat(document.getElementById("callSlider").value);

  const recommended = plansData
    .filter((plan) => {
      const withinBudget = plan.priceWithTax <= budget;
      const hasData =
        dataUsage < 10 ||
        plan.features["البيانات"] ||
        plan.features["الإنترنت"];
      const hasCalls =
        callUsage < 300 ||
        plan.features["الدقائق"] ||
        plan.features["مكالمات فودافون"];
      return withinBudget && (hasData || hasCalls);
    })
    .slice(0, 3);

  const container = document.getElementById("recommendedPlans");

  if (recommended.length === 0) {
    container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #f8f8f8; border-radius: 15px;">
                <p style="color: #666;">لا توجد باقات تطابق احتياجاتك بالضبط. جرب تعديل المؤشرات.</p>
            </div>
        `;
    return;
  }

  container.innerHTML = recommended
    .map(
      (plan) => `
        <div class="recommended-card" onclick="showPlanDetail('${plan.id}')" style="border-color: ${plan.color}30;">
            <div class="card-header">
                <div class="card-icon" style="background: ${plan.color}15; color: ${plan.color};">
                    <i class="fas ${getCategoryIcon(plan.category)}"></i>
                </div>
                <div class="card-title">
                    <h3>${plan.name}</h3>
                    <p>${plan.description}</p>
                </div>
            </div>
            <div class="card-badges">
                <span class="badge badge-success">مطابق 85%</span>
                <span class="badge badge-warning">توفير ${(budget - plan.priceWithTax).toFixed(0)} ج.م</span>
            </div>
            <div class="card-price">
                <span class="amount" style="color: ${plan.color};">${plan.priceWithTax.toFixed(2)}</span>
                <span class="period">ج.م/شهر</span>
            </div>
        </div>
    `,
    )
    .join("");
}

// Helper Functions
function getFeatureIcon(featureName) {
  const icons = {
    "وحدات الفليكس": "fa-exchange-alt",
    الإنترنت: "fa-wifi",
    البيانات: "fa-wifi",
    "مكالمات فودافون": "fa-phone",
    "مكالمات الشبكات الأخرى": "fa-phone-slash",
    الدقائق: "fa-phone",
    الرسائل: "fa-envelope",
    "السوشيال ميديا": "fa-share-alt",
    الصلاحية: "fa-calendar-alt",
    "ترحيل البيانات": "fa-redo",
    "DSL مجاني": "fa-router",
    الترفيه: "fa-tv",
    "مشاركة الباقة": "fa-users",
    التقسيط: "fa-credit-card",
    التجوال: "fa-plane",
    السرعة: "fa-tachometer-alt",
    الراوتر: "fa-router",
  };
  return icons[featureName] || "fa-check-circle";
}

function getCategoryIcon(category) {
  const icons = {
    flex: "fa-exchange-alt",
    plus: "fa-plus-circle",
    plus_apps: "fa-mobile-alt",
    red: "fa-star",
    dsl: "fa-wifi",
  };
  return icons[category] || "fa-th";
}

// Smooth scroll for navigation
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      document
        .querySelectorAll(".nav a")
        .forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// Initialize app
init();
