const text = {
  en: {
    title: "Welcome to Uber",
    desc: "book a car or scooter in seconds.",
    moveTitle: "Two ways to move",
    book: "Book a Ride",
    start: "let's get started",
    login: "Log in",
    home: "Home",
    cars: "Cars",
    scooters: "scooters",
    aboutus: "about",
    contactus: "contact",
    text: "whether you need four wheels or two, we've got you covered.",
    carsdesc: "sedans, SUVs &amp; vans for every occasion",
    scodesc: "quick, eco-friendly city rides",
    reviews: "quick, eco-friendly city rides",
    review1:
      "Incredibly smooth ride. The app is so easy to use, and my driver was professional and friendly.",
    review2:
      "I use the scooter service daily for my commute. Fast, affordable, and always available when I need it.",
    review3:
      "Best ride-hailing service in the city. Clean vehicles, fair prices, and excellent customer support.",
    map: "we're everywhere",
    mapdesc: "available across the country, 24/7.",
    paymenttitle: "easy & secure payments",
    paymentdesc: "multiple payment options for your convenience",
    cardp: "card payments",
    cardd: "visa, mastercard, meeza",
    cash: "pay with cash",
    cashd: "pay to the driver",
    wallet: "e-wallets",
    walletd: "vodafone cash, fawry pay, paymob",

    footerparagraph:
      " Premium ride-hailing service. Fast, safe, and reliable transportation at your fingertips.",
    footerLinks: "Quick Links",
    footerCars: "Cars",
    footerScooters: "Scooters",
    footerReservation: "Reservation",
    footerAbout: "About Us",
    footerContact: "Contact",
    support: "Contact",
    center: "help center",
    safety: "safety",
    terms: "Terms of Service",
    policy: "Privacy Policy",
    access: "Accessibility",
    footercontact: "contact",
    loc: "new cairo",
  },

  ar: {
    title: "مرحبا بك في أوبر",
    desc: "احجز سيارة أو سكوتر في ثواني",
    moveTitle: "طريقتان للتنقل",
    book: "احجز رحلة",
    start: "هيا نبدأ",
    login: "تسجيل الدخول",
    home: "الرئيسية",
    cars: "السيارات",
    scooters: "السكوترز",
    aboutus: "عنا",
    contactus: "التواصل",
    text: "سواء اردت عجلتين او اربعة، جميعها متاحة",
    carsdesc: " السيدان، والدفع الرباعي، والشاحنات الصغيرة متاحة لكل المناسبات",
    scodesc: "سريع، ومناسب للرحلات داخل المدن",
    reviews: "اراء العملاء",
    review1:
      "رحلة سلسة للغاية. التطبيق سهل الاستخدام، وكان سائقي محترفاً وودوداً.",
    review2:
      "أستخدم خدمة الدراجات البخارية يومياً للتنقل. إنها سريعة، وبأسعار معقولة، ومتاحة دائماً عندما أحتاجها.",
    review3:
      "أفضل خدمة نقل ركاب في المدينة. سيارات نظيفة، أسعار مناسبة، ودعم عملاء ممتاز.",
    map: "متواجدون في كل مكان",
    mapdesc: "متاحون في جميع انحاء الجمهورية، 24/7",
    paymenttitle: "دفع سهل وآمن",
    paymentdesc: "طرق دفع متعددة تناسب احتياجاتك",
    cardp: "دفع ببطاقة بنكية",
    cardd: "فيزا، ماستر كارد، ميزة",
    cash: "دفع كاش",
    cashd: "ادفع النقود للسائق",
    wallet: "المحافظ الالكترونية",
    walletd: "فودافون كاش، فوري، باي موب",

    footerparagraph:
      "خدمة نقل مميزة. وسيلة نقل سريعة وآمنة وموثوقة في متناول يديك.",
    footerLinks: "روابط سريعة",
    footerCars: "سيارات",
    footerScooters: "السكوترز",
    footerReservation: "حجز",
    footerAbout: "عنا",
    footerContact: "التواصل",
    support: "الدعم",
    center: "مركز الدعم",
    safety: "الامان",
    terms: "شروط الخدمة",
    policy: "سياسة الخصوصية",
    access: "إمكانية الوصول",
    footercontact: "التواصل",
    loc: "القاهرة الجديدة",
  },
};

function setLang(lang) {
  debugger;

  document.documentElement.lang = lang;

  document.getElementById("title").innerText = text[lang].title;
  document.getElementById("desc").innerText = text[lang].desc;
  document.getElementById("moveTitle").innerText = text[lang].moveTitle;
  document.getElementById("book").innerText = text[lang].book;
  document.getElementById("uname").innerText = text[lang].login;
  document.getElementById("started").innerText = text[lang].start;
  document.getElementById("home-l").innerText = text[lang].home;
  document.getElementById("cars").innerText = text[lang].cars;
  document.getElementById("cars2").innerText = text[lang].cars;
  document.getElementById("scooter").innerText = text[lang].scooters;
  document.getElementById("scooter2").innerText = text[lang].scooters;
  document.getElementById("about").innerText = text[lang].aboutus;
  document.getElementById("contact").innerText = text[lang].contactus;
  document.getElementById("ride-text").innerText = text[lang].text;
  document.getElementById("cars-desc").innerText = text[lang].carsdesc;
  document.getElementById("sco-desc").innerText = text[lang].scodesc;
  document.getElementById("rev-title").innerText = text[lang].reviews;
  document.getElementById("rev1").innerText = text[lang].review1;
  document.getElementById("rev2").innerText = text[lang].review2;
  document.getElementById("rev3").innerText = text[lang].review3;
  document.getElementById("map-title").innerText = text[lang].map;
  document.getElementById("map-desc").innerText = text[lang].mapdesc;
  document.getElementById("payment-title").innerText = text[lang].paymenttitle;
  document.getElementById("payment-desc").innerText = text[lang].paymentdesc;
  document.getElementById("cardp").innerText = text[lang].cardp;
  document.getElementById("cardd").innerText = text[lang].cardd;
  document.getElementById("cash").innerText = text[lang].cash;
  document.getElementById("cashd").innerText = text[lang].cashd;
  document.getElementById("wallet").innerText = text[lang].wallet;
  document.getElementById("walletd").innerText = text[lang].walletd;

  document.getElementById("footer-paragraph").innerText =
    text[lang].footerparagraph;
  document.getElementById("footerLinks").innerText = text[lang].footerLinks;
  document.getElementById("footerCars").innerText = text[lang].footerCars;
  document.getElementById("footerScooters").innerText =
    text[lang].footerScooters;
  document.getElementById("footerReservation").innerText =
    text[lang].footerReservation;
  document.getElementById("footerAbout").innerText = text[lang].footerAbout;
  document.getElementById("footerContact").innerText = text[lang].footerContact;
  document.getElementById("support").innerText = text[lang].support;
  document.getElementById("h-center").innerText = text[lang].center;
  document.getElementById("safety").innerText = text[lang].safety;
  document.getElementById("terms").innerText = text[lang].terms;
  document.getElementById("policy").innerText = text[lang].policy;
  document.getElementById("access").innerText = text[lang].access;
  document.getElementById("footercontact").innerText = text[lang].footercontact;
  document.getElementById("loc").innerText = text[lang].loc;
}
