// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  // Loader
  window.addEventListener("load", function () {
    setTimeout(function () {
      const loader = document.getElementById("loader");
      loader.style.opacity = "0";
      setTimeout(function () {
        loader.style.display = "none";
      }, 300);
    }, 1000);
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("nav");

  mobileMenuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
    const icon = mobileMenuBtn.querySelector("i");
    if (nav.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
    // Close mobile language dropdown when menu is toggled
    mobileLangDropdown.classList.remove("show");
  });

  // Language dropdown toggle
  const languageBtn = document.getElementById("languageBtn");
  const languageDropdown = document.getElementById("languageDropdown");
  const mobileLangBtn = document.getElementById("mobileLangBtn");
  const mobileLangDropdown = document.getElementById("mobileLangDropdown");

  languageBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    languageDropdown.classList.toggle("show");
  });

  mobileLangBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileLangDropdown.classList.toggle("show");
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function () {
    languageDropdown.classList.remove("show");
    mobileLangDropdown.classList.remove("show");
  });

  // Prevent dropdown from closing when clicking inside it
  languageDropdown.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  mobileLangDropdown.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Language translation functionality
  const translations = {
    id: {
      home: "Beranda",
      services: "Layanan",
      areas: "Area Layanan",
      booking: "Pemesanan",
      testimonials: "Testimoni",
      contact: "Kontak",
      "hero-title":
        'Perjalanan Nyaman Bersama <span class="highlight">Wahyu Trans</span>',
      "hero-description":
        "Layanan transportasi terpercaya untuk wisata religi, tour, travel, dan charter di seluruh Indonesia. Nikmati perjalanan yang aman, nyaman, dan berkesan.",
      "book-now": "Pesan Sekarang",
      "view-services": "Lihat Layanan",
      "our-services": "Layanan Kami",
      "services-description":
        "Wahyu Trans menyediakan berbagai layanan transportasi untuk memenuhi kebutuhan perjalanan Anda",
      "religious-tour": "Wisata Religi",
      "religious-tour-desc":
        "Kunjungi tempat ibadah dan lokasi bersejarah dengan nyaman dan khusyuk bersama keluarga atau rombongan.",
      "book-now-link": "Pesan Sekarang",
      tour: "Tour",
      "tour-desc":
        "Jelajahi destinasi wisata populer dengan paket tour lengkap termasuk transportasi, akomodasi, dan pemandu.",
      travel: "Travel",
      "travel-desc":
        "Layanan antar-jemput ke berbagai kota dengan jadwal rutin menggunakan kendaraan yang nyaman dan aman.",
      charter: "Charter",
      "charter-desc":
        "Sewa kendaraan dengan sopir profesional untuk kebutuhan pribadi, keluarga, atau perusahaan Anda.",
      "service-areas": "Area Layanan",
      "areas-description":
        "Wahyu Trans melayani destinasi populer di Indonesia",
      "bali-desc": "Pulau Dewata dengan pesona alam dan budaya yang memukau",
      "java-desc": "Jelajahi keindahan Pulau Jawa dari Jakarta hingga Surabaya",
      "lombok-desc": "Nikmati pantai indah dan keagungan Gunung Rinjani",
      "view-details": "Lihat Detail",
      "book-your-trip": "Pesan Perjalanan Anda",
      "booking-desc-1":
        "Untuk memesan layanan transportasi Wahyu Trans, silakan isi formulir di samping. Tim kami akan segera menghubungi Anda untuk konfirmasi dan detail lebih lanjut.",
      "booking-desc-2":
        "Dapatkan diskon khusus untuk pemesanan rombongan dan pelanggan setia. Hubungi kami untuk informasi lebih lanjut.",
      "feature-1": "Kendaraan Berkualitas",
      "feature-2": "Sopir Profesional",
      "feature-3": "Harga Terjangkau",
      "feature-4": "Layanan 24 Jam",
      "full-name": "Nama Lengkap",
      email: "Email",
      phone: "Nomor Telepon",
      "service-type": "Jenis Layanan",
      "select-service": "Pilih Layanan",
      "religious-tour-option": "Wisata Religi",
      "tour-option": "Tour",
      "travel-option": "Travel",
      "charter-option": "Charter",
      "vehicle-type": "Jenis Kendaraan",
      "select-vehicle": "Pilih Kendaraan",
      "toyota-hiace": "Toyota Hiace",
      bus: "Bus",
      "elf-short": "Elf Short",
      "elf-long": "Elf Long",
      "private-car": "Mobil Pribadi",
      "departure-date": "Tanggal Berangkat",
      "return-date": "Tanggal Kembali",
      "origin-city": "Kota Asal",
      "destination-city": "Kota Tujuan",
      passengers: "Jumlah Penumpang",
      "additional-message": "Pesan Tambahan",
      "send-request": "Kirim Permintaan",
      "testimonials-title": "Testimoni",
      "testimonials-description":
        "Apa kata pelanggan tentang layanan Wahyu Trans",
      "testimonial-1":
        '"Perjalanan wisata religi ke Jawa Timur bersama Wahyu Trans sangat berkesan. Sopirnya ramah dan profesional, kendaraannya nyaman, dan itinerary-nya tersusun dengan baik."',
      "testimonial-2":
        '"Saya dan keluarga baru saja menggunakan jasa Wahyu Trans untuk liburan di Bali. Pelayanannya sangat memuaskan, mobilnya bersih dan nyaman. Sopirnya juga mengenal rute dan spot wisata terbaik!"',
      "footer-description":
        "Layanan transportasi terpercaya untuk wisata religi, tour, travel, dan charter di seluruh Indonesia. Nikmati perjalanan yang aman, nyaman, dan berkesan.",
      "services-footer": "Layanan",
      "religious-tour-footer": "Wisata Religi",
      "tour-footer": "Tour",
      "travel-footer": "Travel",
      "charter-footer": "Charter",
      "quick-links": "Link Cepat",
      "home-footer": "Beranda",
      "services-footer-link": "Layanan",
      "areas-footer": "Area Layanan",
      "booking-footer": "Pemesanan",
      "testimonials-footer": "Testimoni",
      "contact-footer": "Kontak",
      address: "Jl. Raya Utama No. 123, Surabaya",
      hours: "Senin - Minggu: 24 Jam",
      copyright: "&copy; 2023 Wahyu Trans. All Rights Reserved.",
    },
    en: {
      home: "Home",
      services: "Services",
      areas: "Service Areas",
      booking: "Booking",
      testimonials: "Testimonials",
      contact: "Contact",
      "hero-title":
        'Comfortable Journey with <span class="highlight">Wahyu Trans</span>',
      "hero-description":
        "Trusted transportation services for religious tours, general tours, travel, and charter throughout Indonesia. Enjoy safe, comfortable, and memorable journeys.",
      "book-now": "Book Now",
      "view-services": "View Services",
      "our-services": "Our Services",
      "services-description":
        "Wahyu Trans provides various transportation services to meet your travel needs",
      "religious-tour": "Religious Tour",
      "religious-tour-desc":
        "Visit places of worship and historical sites comfortably with your family or group.",
      "book-now-link": "Book Now",
      tour: "Tour",
      "tour-desc":
        "Explore popular tourist destinations with complete tour packages including transportation, accommodation, and guides.",
      travel: "Travel",
      "travel-desc":
        "Pick-up and drop-off services to various cities with regular schedules using comfortable and safe vehicles.",
      charter: "Charter",
      "charter-desc":
        "Rent vehicles with professional drivers for your personal, family, or company needs.",
      "service-areas": "Service Areas",
      "areas-description":
        "Wahyu Trans serves popular destinations in Indonesia",
      "bali-desc":
        "The Island of Gods with captivating natural beauty and culture",
      "java-desc": "Explore the beauty of Java Island from Jakarta to Surabaya",
      "lombok-desc": "Enjoy beautiful beaches and the majesty of Mount Rinjani",
      "view-details": "View Details",
      "book-your-trip": "Book Your Trip",
      "booking-desc-1":
        "To book Wahyu Trans transportation services, please fill out the form beside. Our team will contact you soon for confirmation and further details.",
      "booking-desc-2":
        "Get special discounts for group bookings and loyal customers. Contact us for more information.",
      "feature-1": "Quality Vehicles",
      "feature-2": "Professional Drivers",
      "feature-3": "Affordable Prices",
      "feature-4": "24-Hour Service",
      "full-name": "Full Name",
      email: "Email",
      phone: "Phone Number",
      "service-type": "Service Type",
      "select-service": "Select Service",
      "religious-tour-option": "Religious Tour",
      "tour-option": "Tour",
      "travel-option": "Travel",
      "charter-option": "Charter",
      "vehicle-type": "Vehicle Type",
      "select-vehicle": "Select Vehicle",
      "toyota-hiace": "Toyota Hiace",
      bus: "Bus",
      "elf-short": "Elf Short",
      "elf-long": "Elf Long",
      "private-car": "Private Car",
      "departure-date": "Departure Date",
      "return-date": "Return Date",
      "origin-city": "Origin City",
      "destination-city": "Destination City",
      passengers: "Number of Passengers",
      "additional-message": "Additional Message",
      "send-request": "Send Request",
      "testimonials-title": "Testimonials",
      "testimonials-description":
        "What customers say about Wahyu Trans services",
      "testimonial-1":
        '"The religious tour to East Java with Wahyu Trans was very memorable. The driver was friendly and professional, the vehicle was comfortable, and the itinerary was well-arranged."',
      "testimonial-2":
        '"My family and I just used Wahyu Trans services for a vacation in Bali. The service was very satisfying, the car was clean and comfortable. The driver also knew the best routes and tourist spots!"',
      "footer-description":
        "Trusted transportation services for religious tours, general tours, travel, and charter throughout Indonesia. Enjoy safe, comfortable, and memorable journeys.",
      "services-footer": "Services",
      "religious-tour-footer": "Religious Tour",
      "tour-footer": "Tour",
      "travel-footer": "Travel",
      "charter-footer": "Charter",
      "quick-links": "Quick Links",
      "home-footer": "Home",
      "services-footer-link": "Services",
      "areas-footer": "Service Areas",
      "booking-footer": "Booking",
      "testimonials-footer": "Testimonials",
      "contact-footer": "Contact",
      address: "Jl. Raya Utama No. 123, Surabaya",
      hours: "Monday - Sunday: 24 Hours",
      copyright: "&copy; 2023 Wahyu Trans. All Rights Reserved.",
    },
    zh: {
      home: "首页",
      services: "服务",
      areas: "服务区域",
      booking: "预订",
      testimonials: "客户评价",
      contact: "联系我们",
      "hero-title":
        '与 <span class="highlight">Wahyu Trans</span> 一起舒适旅行',
      "hero-description":
        "印度尼西亚全境可靠的宗教旅游、一般旅游、旅行和包车服务。享受安全、舒适和难忘的旅程。",
      "book-now": "立即预订",
      "view-services": "查看服务",
      "our-services": "我们的服务",
      "services-description": "Wahyu Trans 提供各种交通服务，满足您的旅行需求",
      "religious-tour": "宗教旅游",
      "religious-tour-desc": "与家人或团体一起舒适地参观宗教场所和历史遗迹。",
      "book-now-link": "立即预订",
      tour: "旅游",
      "tour-desc": "探索热门旅游目的地，包含交通、住宿和导游的完整旅游套餐。",
      travel: "旅行",
      "travel-desc": "使用舒适安全的车辆，定期提供往返各城市的接送服务。",
      charter: "包车",
      "charter-desc": "为您的个人、家庭或公司需求租用带专业司机的车辆。",
      "service-areas": "服务区域",
      "areas-description": "Wahyu Trans 服务印度尼西亚热门目的地",
      "bali-desc": "巴厘岛以其迷人的自然美景和文化而闻名",
      "java-desc": "探索从雅加达到泗水的爪哇岛美景",
      "lombok-desc": "享受美丽的海滩和壮观的林贾尼火山",
      "view-details": "查看详情",
      "book-your-trip": "预订您的行程",
      "booking-desc-1":
        "要预订 Wahyu Trans 交通服务，请填写旁边的表格。我们的团队将尽快联系您进行确认和提供更多详情。",
      "booking-desc-2":
        "团体预订和忠实客户可获得特别折扣。请联系我们了解更多信息。",
      "feature-1": "优质车辆",
      "feature-2": "专业司机",
      "feature-3": "实惠价格",
      "feature-4": "24小时服务",
      "full-name": "全名",
      email: "电子邮件",
      phone: "电话号码",
      "service-type": "服务类型",
      "select-service": "选择服务",
      "religious-tour-option": "宗教旅游",
      "tour-option": "旅游",
      "travel-option": "旅行",
      "charter-option": "包车",
      "vehicle-type": "车辆类型",
      "select-vehicle": "选择车辆",
      "toyota-hiace": "丰田海狮",
      bus: "巴士",
      "elf-short": "短轴精灵",
      "elf-long": "长轴精灵",
      "private-car": "私家车",
      "departure-date": "出发日期",
      "return-date": "返回日期",
      "origin-city": "出发城市",
      "destination-city": "目的地城市",
      passengers: "乘客数量",
      "additional-message": "附加信息",
      "send-request": "发送请求",
      "testimonials-title": "客户评价",
      "testimonials-description": "客户对 Wahyu Trans 服务的评价",
      "testimonial-1":
        '"与 Wahyu Trans 一起去东爪哇的宗教之旅非常难忘。司机友好专业，车辆舒适，行程安排得很好。"',
      "testimonial-2":
        '"我和家人刚刚使用了 Wahyu Trans 的服务去巴厘岛度假。服务非常令人满意，汽车干净舒适。司机还了解最佳路线和旅游景点！"',
      "footer-description":
        "印度尼西亚全境可靠的宗教旅游、一般旅游、旅行和包车服务。享受安全、舒适和难忘的旅程。",
      "services-footer": "服务",
      "religious-tour-footer": "宗教旅游",
      "tour-footer": "旅游",
      "travel-footer": "旅行",
      "charter-footer": "包车",
      "quick-links": "快速链接",
      "home-footer": "首页",
      "services-footer-link": "服务",
      "areas-footer": "服务区域",
      "booking-footer": "预订",
      "testimonials-footer": "客户评价",
      "contact-footer": "联系我们",
      address: "印度尼西亚泗水 Jl. Raya Utama No. 123",
      hours: "周一至周日：24小时",
      copyright: "&copy; 2023 Wahyu Trans. 版权所有。",
    },
    ja: {
      home: "ホーム",
      services: "サービス",
      areas: "サービスエリア",
      booking: "予約",
      testimonials: "お客様の声",
      contact: "お問い合わせ",
      "hero-title": '<span class="highlight">Wahyu Trans</span> で快適な旅を',
      "hero-description":
        "インドネシア全土での宗教ツアー、一般ツアー、トラベル、チャーターの信頼できる交通サービス。安全で快適な思い出に残る旅をお楽しみください。",
      "book-now": "今すぐ予約",
      "view-services": "サービスを見る",
      "our-services": "私たちのサービス",
      "services-description":
        "Wahyu Transはあなたの旅行ニーズに応えるさまざまな交通サービスを提供しています",
      "religious-tour": "宗教ツアー",
      "religious-tour-desc":
        "家族やグループと一緒に礼拝所や歴史的な場所を快適に訪れましょう。",
      "book-now-link": "今すぐ予約",
      tour: "ツアー",
      "tour-desc":
        "交通機関、宿泊施設、ガイド付きの完全なツアーパッケージで人気の観光地を探索しましょう。",
      travel: "トラベル",
      "travel-desc":
        "快適で安全な車両を使用して、定期的なスケジュールで様々な都市への送迎サービスを提供します。",
      charter: "チャーター",
      "charter-desc":
        "プロのドライバー付きの車両を個人、家族、または会社のニーズに合わせてレンタルします。",
      "service-areas": "サービスエリア",
      "areas-description":
        "Wahyu Transはインドネシアの人気の目的地にサービスを提供しています",
      "bali-desc": "魅力的な自然の美しさと文化を持つ神々の島",
      "java-desc": "ジャカルタからスラバヤまでのジャワ島の美しさを探索",
      "lombok-desc": "美しいビーチとリンジャニ山の雄大さを楽しむ",
      "view-details": "詳細を見る",
      "book-your-trip": "旅行を予約する",
      "booking-desc-1":
        "Wahyu Transの交通サービスを予約するには、隣のフォームに記入してください。確認と詳細について、チームがすぐにご連絡いたします。",
      "booking-desc-2":
        "グループ予約と常連のお客様には特別割引があります。詳細はお問い合わせください。",
      "feature-1": "高品質の車両",
      "feature-2": "プロのドライバー",
      "feature-3": "手頃な価格",
      "feature-4": "24時間サービス",
      "full-name": "氏名",
      email: "メール",
      phone: "電話番号",
      "service-type": "サービスタイプ",
      "select-service": "サービスを選択",
      "religious-tour-option": "宗教ツアー",
      "tour-option": "ツアー",
      "travel-option": "トラベル",
      "charter-option": "チャーター",
      "vehicle-type": "車両タイプ",
      "select-vehicle": "車両を選択",
      "toyota-hiace": "トヨタ ハイエース",
      bus: "バス",
      "elf-short": "エルフ ショート",
      "elf-long": "エルフ ロング",
      "private-car": "乗用車",
      "departure-date": "出発日",
      "return-date": "帰国日",
      "origin-city": "出発都市",
      "destination-city": "目的地都市",
      passengers: "乗客数",
      "additional-message": "追加メッセージ",
      "send-request": "リクエスト送信",
      "testimonials-title": "お客様の声",
      "testimonials-description": "Wahyu Transのサービスについてお客様の声",
      "testimonial-1":
        '"Wahyu Transと一緒に東ジャワへの宗教ツアーは非常に思い出深いものでした。ドライバーはフレンドリーでプロフェッショナル、車は快適で、旅程もよく整っていました。"',
      "testimonial-2":
        '"私と家族はバリ島への休暇でWahyu Transのサービスを利用したばかりです。サービスは非常に満足でき、車はきれいで快適でした。ドライバーも最高のルートと観光スポットを知っていました！"',
      "footer-description":
        "インドネシア全土での宗教ツアー、一般ツアー、トラベル、チャーターの信頼できる交通サービス。安全で快適な思い出に残る旅をお楽しみください。",
      "services-footer": "サービス",
      "religious-tour-footer": "宗教ツアー",
      "tour-footer": "ツアー",
      "travel-footer": "トラベル",
      "charter-footer": "チャーター",
      "quick-links": "クイックリンク",
      "home-footer": "ホーム",
      "services-footer-link": "サービス",
      "areas-footer": "サービスエリア",
      "booking-footer": "予約",
      "testimonials-footer": "お客様の声",
      "contact-footer": "お問い合わせ",
      address: "Jl. Raya Utama No. 123, スラバヤ",
      hours: "月曜日〜日曜日：24時間",
      copyright: "&copy; 2023 Wahyu Trans. All Rights Reserved.",
    },
    ar: {
      home: "الرئيسية",
      services: "الخدمات",
      areas: "مناطق الخدمة",
      booking: "الحجز",
      testimonials: "آراء العملاء",
      contact: "اتصل بنا",
      "hero-title": 'رحلة مريحة مع <span class="highlight">واهيو ترانس</span>',
      "hero-description":
        "خدمات نقل موثوقة للجولات الدينية والسياحية والسفر والتأجير في جميع أنحاء إندونيسيا. استمتع برحلات آمنة ومريحة ولا تُنسى.",
      "book-now": "احجز الآن",
      "view-services": "عرض الخدمات",
      "our-services": "خدماتنا",
      "services-description":
        "توفر واهيو ترانس خدمات نقل متنوعة لتلبية احتياجات سفرك",
      "religious-tour": "جولة دينية",
      "religious-tour-desc":
        "زيارة أماكن العبادة والمواقع التاريخية بشكل مريح مع عائلتك أو مجموعتك.",
      "book-now-link": "احجز الآن",
      tour: "جولة",
      "tour-desc":
        "استكشف وجهات سياحية شهيرة مع باقات سياحية كاملة تشمل النقل والإقامة والمرشدين.",
      travel: "سفر",
      "travel-desc":
        "خدمات الاستقبال والتوصيل إلى مختلف المدن بجداول منتظمة باستخدام مركبات مريحة وآمنة.",
      charter: "تأجير",
      "charter-desc":
        "استئجار مركبات مع سائقين محترفين لاحتياجاتك الشخصية أو العائلية أو الشركة.",
      "service-areas": "مناطق الخدمة",
      "areas-description": "تخدم واهيو ترانس الوجهات الشهيرة في إندونيسيا",
      "bali-desc": "جزيرة الآلهة بجمالها الطبيعي وثقافتها الآسرة",
      "java-desc": "استكشف جمال جزيرة جاوة من جاكرتا إلى سورابايا",
      "lombok-desc": "استمتع بالشواطئ الجميلة وعظمة جبل رينجاني",
      "view-details": "عرض التفاصيل",
      "book-your-trip": "احجز رحلتك",
      "booking-desc-1":
        "لحجز خدمات النقل من واهيو ترانس، يرجى ملء النموذج المجاور. سيتصل بك فريقنا قريبًا للتأكيد والمزيد من التفاصيل.",
      "booking-desc-2":
        "احصل على خصومات خاصة للحجوزات الجماعية والعملاء الدائمين. اتصل بنا لمزيد من المعلومات.",
      "feature-1": "مركبات عالية الجودة",
      "feature-2": "سائقون محترفون",
      "feature-3": "أسعار معقولة",
      "feature-4": "خدمة على مدار 24 ساعة",
      "full-name": "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      "service-type": "نوع الخدمة",
      "select-service": "اختر الخدمة",
      "religious-tour-option": "جولة دينية",
      "tour-option": "جولة",
      "travel-option": "سفر",
      "charter-option": "تأجير",
      "vehicle-type": "نوع المركبة",
      "select-vehicle": "اختر المركبة",
      "toyota-hiace": "تويوتا هايس",
      bus: "حافلة",
      "elf-short": "إلف قصير",
      "elf-long": "إلف طويل",
      "private-car": "سيارة خاصة",
      "departure-date": "تاريخ المغادرة",
      "return-date": "تاريخ العودة",
      "origin-city": "مدينة المغادرة",
      "destination-city": "مدينة الوصول",
      passengers: "عدد الركاب",
      "additional-message": "رسالة إضافية",
      "send-request": "إرسال الطلب",
      "testimonials-title": "آراء العملاء",
      "testimonials-description": "ما يقوله العملاء عن خدمات واهيو ترانس",
      "testimonial-1":
        '"كانت الجولة الدينية إلى شرق جاوة مع واهيو ترانس لا تُنسى. كان السائق ودودًا ومحترفًا، والمركبة مريحة، وكان جدول الرحلة منظمًا جيدًا."',
      "testimonial-2":
        '"أنا وعائلتي استخدمنا للتو خدمات واهيو ترانس لقضاء عطلة في بالي. كانت الخدمة مرضية للغاية، والسيارة نظيفة ومريحة. كما كان السائق يعرف أفضل الطرق والمواقع السياحية!"',
      "footer-description":
        "خدمات نقل موثوقة للجولات الدينية والسياحية والسفر والتأجير في جميع أنحاء إندونيسيا. استمتع برحلات آمنة ومريحة ولا تُنسى.",
      "services-footer": "الخدمات",
      "religious-tour-footer": "جولة دينية",
      "tour-footer": "جولة",
      "travel-footer": "سفر",
      "charter-footer": "تأجير",
      "quick-links": "روابط سريعة",
      "home-footer": "الرئيسية",
      "services-footer-link": "الخدمات",
      "areas-footer": "مناطق الخدمة",
      "booking-footer": "الحجز",
      "testimonials-footer": "آراء العملاء",
      "contact-footer": "اتصل بنا",
      address: "شارع رايا أوتاما رقم 123، سورابايا",
      hours: "الاثنين - الأحد: 24 ساعة",
      copyright: "&copy; 2023 واهيو ترانس. جميع الحقوق محفوظة.",
    },
  };

  // Function to change language
  function changeLanguage(lang) {
    // Update active language in dropdowns
    document.querySelectorAll(".language-option").forEach((option) => {
      if (option.getAttribute("data-lang") === lang) {
        option.classList.add("active");
      } else {
        option.classList.remove("active");
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update text content for all elements with data-lang-key attribute
    document.querySelectorAll("[data-lang-key]").forEach((element) => {
      const key = element.getAttribute("data-lang-key");
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = translations[lang][key];
        } else if (element.tagName === "OPTION") {
          element.text = translations[lang][key];
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });

    // Close dropdowns
    languageDropdown.classList.remove("show");
    mobileLangDropdown.classList.remove("show");

    // Store selected language in localStorage
    localStorage.setItem("selectedLanguage", lang);
  }

  // Add click event to language options
  document.querySelectorAll(".language-option").forEach((option) => {
    option.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      changeLanguage(lang);
    });
  });

  // Check if there's a stored language preference
  const storedLang = localStorage.getItem("selectedLanguage");
  if (storedLang) {
    changeLanguage(storedLang);
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Close mobile menu
      nav.classList.remove("active");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");

      // Scroll to section
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.getElementById("header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Testimonial slider functionality
  const testimonialContainer = document.getElementById("testimonialContainer");
  const testimonialDots = document.querySelectorAll(".testimonial-dot");
  let currentIndex = 0;
  const totalSlides = testimonialDots.length;

  // Function to update the slider position
  function updateSlider(index) {
    // Update the transform to show the correct slide
    testimonialContainer.style.transform = `translateX(-${index * 100}%)`;

    // Update active dot
    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    // Update current index
    currentIndex = index;
  }

  // Dot navigation
  testimonialDots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      updateSlider(index);
    });
  });

  // Touch swipe functionality
  let touchStartX = 0;
  let touchEndX = 0;

  testimonialContainer.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  testimonialContainer.addEventListener(
    "touchend",
    function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true }
  );

  function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance to be considered a swipe

    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - show next slide
      let newIndex = currentIndex + 1;
      if (newIndex >= totalSlides) newIndex = 0;
      updateSlider(newIndex);
    }

    if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - show previous slide
      let newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = totalSlides - 1;
      updateSlider(newIndex);
    }
  }

  // Mouse drag functionality for desktop
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;

  testimonialContainer.addEventListener("mousedown", function (e) {
    isDragging = true;
    startPos = e.clientX;
    testimonialContainer.style.cursor = "grabbing";
    testimonialContainer.style.transition = "none";
    e.preventDefault();
  });

  window.addEventListener("mouseup", function () {
    if (!isDragging) return;

    isDragging = false;
    testimonialContainer.style.cursor = "grab";
    testimonialContainer.style.transition = "transform 0.5s ease";

    const movedBy = startPos - currentTranslate;

    if (movedBy > 100) {
      // Moved left significantly - show next slide
      let newIndex = currentIndex + 1;
      if (newIndex >= totalSlides) newIndex = 0;
      updateSlider(newIndex);
    } else if (movedBy < -100) {
      // Moved right significantly - show previous slide
      let newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = totalSlides - 1;
      updateSlider(newIndex);
    } else {
      // Not moved enough - stay on current slide
      updateSlider(currentIndex);
    }
  });

  window.addEventListener("mousemove", function (e) {
    if (!isDragging) return;

    currentTranslate = e.clientX;
    const diff = startPos - currentTranslate;
    const translateX =
      -(currentIndex * 100) - (diff / testimonialContainer.offsetWidth) * 100;

    // Limit the drag to the next/previous slide only
    if (
      translateX > -((currentIndex + 1) * 100) &&
      translateX < -(currentIndex - 1) * 100
    ) {
      testimonialContainer.style.transform = `translateX(${translateX}%)`;
    }
  });

  // Auto-advance the slider every 5 seconds
  let sliderInterval = setInterval(function () {
    let newIndex = currentIndex + 1;
    if (newIndex >= totalSlides) newIndex = 0;
    updateSlider(newIndex);
  }, 5000);

  // Pause auto-advance when user interacts with the slider
  testimonialContainer.addEventListener("mouseenter", function () {
    clearInterval(sliderInterval);
  });

  testimonialContainer.addEventListener("mouseleave", function () {
    sliderInterval = setInterval(function () {
      let newIndex = currentIndex + 1;
      if (newIndex >= totalSlides) newIndex = 0;
      updateSlider(newIndex);
    }, 5000);
  });

  // Form submission
  const bookingForm = document.getElementById("bookingFormElement");

  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple form validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;

    if (!name || !email || !phone || !service) {
      const lang = document.documentElement.lang;
      if (lang === "id") {
        alert("Mohon lengkapi semua field yang wajib diisi.");
      } else if (lang === "en") {
        alert("Please complete all required fields.");
      } else if (lang === "zh") {
        alert("请填写所有必填字段。");
      } else if (lang === "ja") {
        alert("必須フィールドをすべて入力してください。");
      } else if (lang === "ar") {
        alert("يرجى إكمال جميع الحقول المطلوبة.");
      }
      return;
    }

    // Show success message
    const lang = document.documentElement.lang;
    if (lang === "id") {
      alert(
        "Terima kasih! Permintaan pemesanan Anda telah kami terima. Tim kami akan segera menghubungi Anda."
      );
    } else if (lang === "en") {
      alert(
        "Thank you! Your booking request has been received. Our team will contact you soon."
      );
    } else if (lang === "zh") {
      alert("谢谢！我们已收到您的预订请求。我们的团队将很快与您联系。");
    } else if (lang === "ja") {
      alert(
        "ありがとうございます！予約リクエストを受け付けました。チームがまもなくご連絡いたします。"
      );
    } else if (lang === "ar") {
      alert("شكرا لك! تم استلام طلب الحجز الخاص بك. سيتصل بك فريقنا قريبًا.");
    }

    // Reset form
    bookingForm.reset();
  });

  // Smooth scroll for all anchor links with class scroll-link
  document.querySelectorAll(".scroll-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.getElementById("header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Parallax effect for hero section
  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;
    const parallaxBg = document.getElementById("parallaxBg");
    const parallaxCircle = document.getElementById("parallaxCircle");
    const parallaxSquare = document.getElementById("parallaxSquare");

    if (parallaxBg && parallaxCircle && parallaxSquare) {
      parallaxBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      parallaxCircle.style.transform = `translate(-${scrollPosition * 0.2}px, ${
        scrollPosition * 0.3
      }px) rotate(${scrollPosition * 0.1}deg)`;
      parallaxSquare.style.transform = `translate(${scrollPosition * 0.2}px, -${
        scrollPosition * 0.3
      }px) rotate(-${scrollPosition * 0.1}deg)`;
    }
  });
});
