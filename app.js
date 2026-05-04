// بيانات الباقات
const plansData = [
  {
    id: "flex30",
    name: "فليكس 30",
    category: "flex",
    price: 30,
    description: "باقة مرنة للاستخدام اليومي",
    link: "https://wael2468.github.io/vodafone-plans/plan/flex30",
    features: [
      { icon: "fas fa-wifi", label: "إنترنت", value: "2 جيجابايت" },
      { icon: "fas fa-phone", label: "دقائق", value: "200 دقيقة" },
      { icon: "fas fa-envelope", label: "رسائل", value: "50 رسالة" },
    ],
    benefits: ["استخدام يومي", "انترنت سريع", "دقائق محلية"],
    headerColor: "#FF6B6B",
  },
  {
    id: "flex50",
    name: "فليكس 50",
    category: "flex",
    price: 50,
    description: "باقة مرنة متوسطة",
    link: "https://wael2468.github.io/vodafone-plans/plan/flex50",
    features: [
      { icon: "fas fa-wifi", label: "إنترنت", value: "5 جيجابايت" },
      { icon: "fas fa-phone", label: "دقائق", value: "500 دقيقة" },
      { icon: "fas fa-envelope", label: "رسائل", value: "100 رسالة" },
    ],
    benefits: ["استخدام متوسط", "انترنت عالي", "دقائق وفيرة"],
    headerColor: "#4ECDC4",
  },
  {
    id: "plus100",
    name: "بلس 100",
    category: "plus",
    price: 100,
    description: "باقة بلس كاملة",
    link: "https://wael2468.github.io/vodafone-plans/plan/plus100",
    features: [
      { icon: "fas fa-wifi", label: "إنترنت", value: "20 جيجابايت" },
      { icon: "fas fa-phone", label: "دقائق", value: "1000 دقيقة" },
      { icon: "fas fa-envelope", label: "رسائل", value: "500 رسالة" },
    ],
    benefits: ["استخدام ثقيل", "انترنت فائق", "دقائق غير محدودة تقريباً"],
    headerColor: "#45B7D1",
  },
  {
    id: "plusapps",
    name: "بلس أبس",
    category: "plus_apps",
    price: 80,
    description: "باقة تطبيقات الإنترنت",
    link: "https://wael2468.github.io/vodafone-plans/plan/plusapps",
    features: [
      { icon: "fas fa-wifi", label: "إنترنت", value: "15 جيجابايت" },
      {
        icon: "fas fa-instagram",
        label: "تطبيقات",
        value: "Instagram, TikTok, Snap",
      },
      { icon: "fas fa-phone", label: "دقائق", value: "300 دقيقة" },
    ],
    benefits: ["التطبيقات المجانية", "انترنت خاص بالتطبيقات", "توفير بيانات"],
    headerColor: "#F7B731",
  },
  {
    id: "red50",
    name: "ريد 50",
    category: "red",
    price: 50,
    description: "باقة ريد مميزة",
    link: "https://wael2468.github.io/vodafone-plans/plan/red50",
    features: [
      { icon: "fas fa-wifi", label: "إنترنت", value: "10 جيجابايت" },
      { icon: "fas fa-phone", label: "دقائق", value: "500 دقيقة" },
      { icon: "fas fa-star", label: "مميزات", value: "أولويات عالية" },
    ],
    benefits: ["خدمة VIP", "أولويات عالية", "دعم فني 24/7"],
    headerColor: "#E60000",
  },
  {
    id: "red100",
    name: "ريد 100",
    category: "red",
    price: 100,
    description: "باقة ريد كاملة",
    link: "https://wael2468.github.io/vodafone-plans/plan/red100",
    features: [
      { icon: "fas fa-wifi", label: "إنترنت", value: "30 جيجابايت" },
      { icon: "fas fa-phone", label: "دقائق", value: "2000 دقيقة" },
      { icon: "fas fa-star", label: "مميزات", value: "أولويات قصوى" },
    ],
    benefits: ["خدمة VIP premium", "أولويات قصوى", "ضمان شامل"],
    headerColor: "#B30000",
  },
  {
    id: "dsl",
    name: "DSL انترنت منزلي",
    category: "dsl",
    price: 150,
    description: "باقة الإنترنت المنزلي السريع",
    link: "https://wael2468.github.io/vodafone-plans/plan/dsl",
    features: [
      { icon: "fas fa-wifi", label: "السرعة", value: "8 ميجابت/ثانية" },
      { icon: "fas fa-router", label: "الاتصال", value: "نطاق واسع" },
      { icon: "fas fa-phone", label: "الهاتف", value: "خط منزلي" },
    ],
    benefits: ["سرعة عالية", "اتصال ثابت", "خط هاتفي مجاني"],
    headerColor: "#95E1D3",
  },
  {
    id: "businessflex",
    name: "بيزنس فليكس",
    category: "business flex",
    price: 200,
    description: "باقة مرنة للشركات",
    link: "https://wael2468.github.io/vodafone-plans/plan/businessflex",
    features: [
      { icon: "fas fa-briefcase", label: "الاستخدام", value: "تجاري" },
      { icon: "fas fa-wifi", label: "إنترنت", value: "50 جيجابايت" },
      { icon: "fas fa-phone", label: "دقائق", value: "5000 دقيقة" },
    ],
    benefits: ["حسابات متعددة", "فواتير موحدة", "دعم تجاري"],
    headerColor: "#2C3E50",
  },
  {
    id: "redbusiness",
    name: "ريد بيزنس",
    category: "Red business",
    price: 300,
    description: "باقة ريد المميزة للشركات",
    link: "https://wael2468.github.io/vodafone-plans/plan/redbusiness",
    features: [
      { icon: "fas fa-briefcase", label: "الاستخدام", value: "تجاري VIP" },
      { icon: "fas fa-wifi", label: "إنترنت", value: "100 جيجابايت" },
      { icon: "fas fa-star", label: "الدعم", value: "24/7 VIP" },
    ],
    benefits: ["حسابات VIP", "أولويات عالية", "مدير حساب خاص"],
    headerColor: "#8B0000",
  },
];

let compareList = [];
const maxCompare = 3;

// تهيئة الصفحة
function init() {
  renderPlans("all");
  setupEventListeners();
}

// عرض الباقات
function renderPlans(category) {
  const plansGrid = document.getElementById("plansGrid");
  plansGrid.innerHTML = "";

  const filteredPlans =
    category === "all"
      ? plansData
      : plansData.filter((plan) => plan.category === category);

  filteredPlans.forEach((plan) => {
    const planCard = createPlanCard(plan);
    plansGrid.appendChild(planCard);
  });
}

// إنشاء بطاقة الباقة
function createPlanCard(plan) {
  const card = document.createElement("div");
  card.className = "plan-card";

  const headerBg = `background: ${plan.headerColor}`;

  card.innerHTML = `
        <div class="plan-header" style="${headerBg}">
            <span class="plan-category" style="${headerBg}">${plan.category}</span>
            ${plan.featured ? '<span class="plan-badge">مشهورة</span>' : ""}
        </div>
        <div class="plan-body">
            <h3 class="plan-name">${plan.name}</h3>
            <p class="plan-desc">${plan.description}</p>
            <div class="plan-price">
                <span class="amount">${plan.price}</span>
                <span class="currency">ج.م</span>
                <span class="period">/شهر</span>
            </div>
            <button class="plan-btn" style="${headerBg}">تفاصيل الباقة</button>
        </div>
    `;

  card
    .querySelector(".plan-btn")
    .addEventListener("click", () => openPlanModal(plan));

  return card;
}

// فتح نافذة تفاصيل الباقة
function openPlanModal(plan) {
  const modal = document.getElementById("planModal");
  const modalHeader = document.getElementById("modalHeader");
  const modalBody = document.getElementById("modalBody");

  modalHeader.style.background = plan.headerColor;
  modalHeader.innerHTML = `
        <h2>${plan.name}</h2>
        <p>${plan.description}</p>
    `;

  let featuresHTML = '<div class="features-list"><h3>المواصفات</h3>';
  plan.features.forEach((feature) => {
    featuresHTML += `
            <div class="feature-item">
                <i class="${feature.icon}" style="background: ${plan.headerColor}"></i>
                <div class="feature-info">
                    <h4>${feature.label}</h4>
                    <p>${feature.value}</p>
                </div>
            </div>
        `;
  });
  featuresHTML += "</div>";

  let benefitsHTML =
    '<div class="benefits-list"><h3>المميزات</h3><div class="benefits-tags">';
  plan.benefits.forEach((benefit) => {
    benefitsHTML += `
            <span class="benefit-tag" style="background: ${plan.headerColor}20; color: ${plan.headerColor}">
                <i class="fas fa-check"></i>
                ${benefit}
            </span>
        `;
  });
  benefitsHTML += "</div></div>";

  // إنشاء QR Code
  let qrHTML = `
        <div class="qr-box">
            <h4>الاشتراك السريع</h4>
            <p style="font-size: 12px; color: #999; margin-bottom: 10px;">امسح الكود بهاتفك للاشتراك مباشرة</p>
            <div id="qrcode"></div>
        </div>
    `;

  const codeBox = `
        <div class="code-box">
            <span style="font-weight: 700; font-size: 18px;">${plan.id.toUpperCase()}</span>
            <button onclick="copyCode('${plan.id}')" style="padding: 8px 15px; background: #E60000; color: white; border: none; border-radius: 8px; cursor: pointer; font-family: 'Cairo', sans-serif;">
                <i class="fas fa-copy"></i> نسخ الكود
            </button>
        </div>
    `;

  const priceBox = `
        <div class="price-box">
            <span class="price">${plan.price}</span>
            <span class="currency">ج.م</span>
            <div class="period">سعر شهري</div>
        </div>
    `;

  const actions = `
        <div class="modal-actions">
            <a href="${plan.link}" target="_blank" class="modal-actions button" style="display: block; flex: 1; padding: 15px; background: ${plan.headerColor}; color: white; border: none; border-radius: 12px; text-align: center; font-weight: 700; cursor: pointer; text-decoration: none; font-family: 'Cairo', sans-serif;">
                <i class="fas fa-external-link-alt"></i> افتح الرابط
            </a>
            <button onclick="addToCompare('${plan.id}')" class="modal-actions button" style="flex: 1; padding: 15px; background: white; border: 2px solid ${plan.headerColor}; color: ${plan.headerColor}; border-radius: 12px; cursor: pointer; font-family: 'Cairo', sans-serif; font-weight: 700;">
                <i class="fas fa-exchange-alt"></i> أضف للمقارنة
            </button>
        </div>
    `;

  modalBody.innerHTML =
    priceBox + codeBox + qrHTML + featuresHTML + benefitsHTML + actions;

  // إنشاء QR Code
  const qrElement = document.getElementById("qrcode");
  qrElement.innerHTML = "";
  new QRCode(qrElement, {
    text: plan.link,
    width: 200,
    height: 200,
  });

  modal.classList.add("active");
}

// نسخ الكود
function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    alert("تم نسخ الكود: " + code);
  });
}

// إضافة للمقارنة
function addToCompare(planId) {
  if (compareList.includes(planId)) {
    compareList = compareList.filter((id) => id !== planId);
  } else if (compareList.length < maxCompare) {
    compareList.push(planId);
  } else {
    alert(`يمكنك اختيار حتى ${maxCompare} باقات فقط`);
    return;
  }

  updateCompare();
}

// تحديث جدول المقارنة
function updateCompare() {
  const compareContainer = document.getElementById("compareContainer");

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

  const selectedPlans = plansData.filter((p) => compareList.includes(p.id));

  let html = '<div class="compare-table"><div class="compare-row header">';
  html += '<div class="compare-cell"></div>';

  selectedPlans.forEach((plan) => {
    html += `
            <div class="compare-cell">
                <div class="compare-plan-header" style="background: ${plan.headerColor}; color: white;">
                    <h3>${plan.name}</h3>
                    <div class="price" style="color: white;">${plan.price} ج.م</div>
                    <button onclick="removeFromCompare('${plan.id}')" class="remove-btn">إزالة</button>
                </div>
            </div>
        `;
  });

  html += "</div>";

  // مقارنة المواصفات
  const features = ["إنترنت", "دقائق", "رسائل"];
  features.forEach((feature) => {
    html +=
      '<div class="compare-row"><div class="compare-cell">' +
      feature +
      "</div>";
    selectedPlans.forEach((plan) => {
      const feat = plan.features.find((f) => f.label === feature);
      html +=
        '<div class="compare-cell">' + (feat ? feat.value : "-") + "</div>";
    });
    html += "</div>";
  });

  html += "</div>";
  compareContainer.innerHTML = html;
}

// إزالة من المقارنة
function removeFromCompare(planId) {
  compareList = compareList.filter((id) => id !== planId);
  updateCompare();
}

// إعدادات الأحداث
function setupEventListeners() {
  // أزرار الفئات
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".category-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.category;
      renderPlans(category);
    });
  });

  // إغلاق النافذة
  document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("planModal").classList.remove("active");
  });

  // البحث
  document.getElementById("searchInput").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const plansGrid = document.getElementById("plansGrid");
    plansGrid.innerHTML = "";

    const filtered = plansData.filter(
      (plan) =>
        plan.name.includes(searchTerm) || plan.description.includes(searchTerm),
    );

    filtered.forEach((plan) => {
      plansGrid.appendChild(createPlanCard(plan));
    });
  });

  // مخصص الباقات
  setupCustomizer();
}

// إعدادات المخصص
function setupCustomizer() {
  const dataSlider = document.getElementById("dataSlider");
  const callSlider = document.getElementById("callSlider");
  const smsSlider = document.getElementById("smsSlider");
  const budgetSlider = document.getElementById("budgetSlider");

  const updateRecommendations = () => {
    const data = parseInt(dataSlider.value);
    const calls = parseInt(callSlider.value);
    const sms = parseInt(smsSlider.value);
    const budget = parseInt(budgetSlider.value);

    document.getElementById("dataValue").textContent = data + " جيجابايت/شهر";
    document.getElementById("callValue").textContent = calls + " دقيقة/شهر";
    document.getElementById("smsValue").textContent = sms + " رسالة/شهر";
    document.getElementById("budgetValue").textContent = budget + " ج.م";

    const recommended = plansData.filter((plan) => plan.price <= budget);
    renderRecommendations(recommended, data, calls, sms, budget);
  };

  [dataSlider, callSlider, smsSlider, budgetSlider].forEach((slider) => {
    slider.addEventListener("input", updateRecommendations);
  });

  updateRecommendations();
}

// عرض الباقات الموصى بها
function renderRecommendations(plans, data, calls, sms, budget) {
  const container = document.getElementById("recommendedPlans");
  container.innerHTML = "";

  plans.forEach((plan) => {
    let score = 0;
    let badges = [];

    // حساب التوافق
    if (data <= 20 && plan.features[0]) score += 30;
    if (calls <= 1000 && plan.features[1]) score += 30;
    if (plan.price <= budget) {
      score += 40;
      badges.push('<span class="badge badge-success">في الميزانية</span>');
    }

    if (score > 50) {
      const card = document.createElement("div");
      card.className = "recommended-card";
      card.innerHTML = `
                <div class="card-header">
                    <div class="card-icon" style="background: ${plan.headerColor}">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="card-title">
                        <h3>${plan.name}</h3>
                        <p>${plan.description}</p>
                    </div>
                </div>
                <div class="card-badges">
                    ${badges.join("")}
                </div>
                <div class="card-price">
                    <div class="amount">${plan.price}</div>
                    <div class="period">ج.م/شهر</div>
                </div>
                <button onclick="openPlanModal(plansData.find(p => p.id === '${plan.id}'))" style="width: 100%; padding: 12px; background: ${plan.headerColor}; color: white; border: none; border-radius: 10px; cursor: pointer; font-family: 'Cairo', sans-serif; font-weight: 700; margin-top: 15px;">
                    عرض التفاصيل
                </button>
            `;
      container.appendChild(card);
    }
  });
}

// بدء التطبيق
init();
