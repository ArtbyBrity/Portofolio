/* ==========================================================================
   artbybrity - translations (ko / en / id / vi)
   웹사이트의 모든 글자는 여기에서 수정할 수 있습니다.
   문단을 나누려면 빈 줄(\n\n)을 넣으세요.
   ========================================================================== */

const LANGUAGES = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "vi", label: "Tiếng Việt" }
];

const DEFAULT_LANG = "ko";

const TRANSLATIONS = {
  /* ------------------------------------------------------------------ 한국어 */
  ko: {
    meta: {
      title: "artbybrity | 브리띠의 일러스트 포트폴리오",
      description: "artbybrity (브리띠) - Little Ideas, Big Adventures. 일러스트 포트폴리오와 일러스트·디자인 작업 의뢰 안내."
    },
    nav: {
      home: "홈", about: "작가 소개", gallery: "작품 갤러리", services: "작업 의뢰",
      process: "의뢰 방법", contact: "문의", menu: "메뉴 열기", language: "언어 선택"
    },
    hero: {
      title: "안녕하세요, 브리띠의 작은 예술 공간에 오신 것을 환영합니다!",
      intro: "작은 아이디어에서 시작되는 특별한 그림 이야기. 브리띠의 시선으로 세상을 조금 더 귀엽고 따뜻하게 표현합니다.",
      explore: "작품 구경하기",
      commission: "작업 문의하기",
      imageAlt: "구름과 별, 꽃 사이에 있는 귀여운 캐릭터 (샘플 일러스트)",
      sample: "샘플 일러스트 - 실제 작품으로 교체해 주세요"
    },
    about: {
      title: "작가 소개",
      text: "안녕하세요! 저는 브리띠(Brity)입니다.\n\n그림과 창작을 통해 작은 아이디어를 특별한 이야기로 만드는 것을 좋아합니다.\n\n일러스트와 다양한 시각적 표현을 통해 일상 속의 순간, 특별한 행사, 그리고 사람들의 소중한 추억을 그림으로 담아내고 있습니다.\n\n이곳은 제가 좋아하는 그림과 창작물을 모아 놓은 작은 예술 공간입니다.\n\n제 작품을 통해 여러분에게 작은 즐거움과 영감을 전할 수 있으면 좋겠습니다.",
      avatarAlt: "브리띠 프로필 일러스트 (샘플)",
      sample: "샘플 아바타"
    },
    gallery: {
      title: "작품 갤러리",
      subtitle: "작은 아이디어들이 모인 스케치북",
      notice: "안내: 현재 표시된 작품과 설명은 모두 샘플(placeholder)입니다. 실제 작품 이미지로 교체될 예정입니다.",
      all: "전체",
      empty: "이 카테고리에는 아직 작품이 없어요.",
      sample: "샘플",
      open: "크게 보기",
      close: "닫기",
      prev: "이전 작품",
      next: "다음 작품",
      filterLabel: "카테고리 필터",
      categories: {
        "Illustration": "일러스트",
        "Character Design": "캐릭터 디자인",
        "Digital Art": "디지털 아트",
        "Traditional Art": "아날로그 아트",
        "Event Artwork": "행사 작품",
        "Personal Projects": "개인 프로젝트",
        "Others": "기타"
      }
    },
    services: {
      title: "일러스트 및 디자인 작업 의뢰",
      subtitle: "여러분의 특별한 아이디어를 그림으로 만들어 드립니다.",
      text: "artbybrity에서는 개인 및 단체를 위한 다양한 일러스트와 창작 디자인 의뢰를 받고 있습니다.\n\n특별한 날을 기념하는 그림부터 행사와 공간을 더욱 돋보이게 하는 일러스트까지, 여러분의 아이디어와 목적에 맞춰 정성스럽게 작업합니다.\n\n세상에 하나뿐인 특별한 그림이 필요하다면 언제든 문의해 주세요!",
      cards: [
        { title: "행사 일러스트", desc: "행사, 축제, 기념일 및 특별한 이벤트를 위한 맞춤형 일러스트." },
        { title: "맞춤형 일러스트", desc: "고객의 아이디어와 요청을 바탕으로 제작하는 개인 맞춤형 그림." },
        { title: "행사 및 공간 데코레이션", desc: "행사 포스터, 배너, 안내물, 공간 장식 등에 활용할 수 있는 일러스트 및 시각 디자인." },
        { title: "개인 작품 및 선물", desc: "기념일, 선물, 추억을 위한 특별한 개인 맞춤형 작품." }
      ],
      cta: "작업 문의하기"
    },
    process: {
      title: "작업 의뢰 방법",
      stepLabel: "STEP",
      steps: [
        { title: "문의하기", desc: "원하는 그림이나 디자인에 대해 연락해 주세요." },
        { title: "상담하기", desc: "작업 목적, 스타일, 크기, 일정 등을 함께 이야기합니다." },
        { title: "작업 진행", desc: "상담한 내용을 바탕으로 작품을 제작합니다." },
        { title: "완성 및 전달", desc: "완성된 작품을 확인하고 협의한 방식으로 전달합니다." }
      ],
      note: "작업 가능 여부와 일정은 프로젝트의 내용에 따라 달라질 수 있습니다."
    },
    contact: {
      title: "함께 작업하고 싶으신가요?",
      text: "제 작품이 마음에 드시거나 일러스트 및 디자인 작업을 의뢰하고 싶으시다면 아래 연락처를 통해 편하게 문의해 주세요.\n\n여러분의 작은 아이디어가 특별한 작품으로 완성될 수 있도록 정성을 다하겠습니다.\n\n작품과 작업 의뢰에 관심이 있으시다면 언제든 연락해 주세요!",
      artist: "작가", artistValue: "브리띠 (Brity)",
      brand: "브랜드",
      phone: "전화",
      instagram: "인스타그램",
      email: "이메일",
      location: "위치", locationValue: "남해, 대한민국",
      emailBtn: "이메일로 문의하기",
      mailSubject: "[artbybrity] 작업 문의",
      mailBody: "안녕하세요, 브리띠님!\n\n작업 문의드립니다.\n\n- 원하는 작업 종류:\n- 용도(행사/선물 등):\n- 원하는 스타일:\n- 크기:\n- 희망 일정:\n\n감사합니다."
    },
    footer: { rights: "© 2026 artbybrity. All rights reserved.", top: "맨 위로" }
  },

  /* ------------------------------------------------------------------ English */
  en: {
    meta: {
      title: "artbybrity | Brity's Illustration Portfolio",
      description: "artbybrity (Brity) - Little Ideas, Big Adventures. Illustration portfolio and freelance illustration & design commissions."
    },
    nav: {
      home: "Home", about: "About", gallery: "Gallery", services: "Commissions",
      process: "How It Works", contact: "Contact", menu: "Open menu", language: "Choose language"
    },
    hero: {
      title: "Welcome to Brity's little art space!",
      intro: "Every special illustration begins with a little idea. Through Brity's eyes, the world becomes a little more colorful, cute, and warm.",
      explore: "Explore My Art",
      commission: "Contact for Commission",
      imageAlt: "A cute character among clouds, stars and flowers (sample illustration)",
      sample: "Sample illustration - replace with your real artwork"
    },
    about: {
      title: "About the Artist",
      text: "Hello! I'm Brity.\n\nI love turning little ideas into special stories through drawing and creating.\n\nThrough illustration and different kinds of visual expression, I capture everyday moments, special events, and people's precious memories in pictures.\n\nThis is a small art space where I collect the drawings and creations I love.\n\nI hope my work can bring you a little joy and inspiration.",
      avatarAlt: "Brity's profile illustration (sample)",
      sample: "Sample avatar"
    },
    gallery: {
      title: "Art Gallery",
      subtitle: "A sketchbook full of little ideas",
      notice: "Note: the artworks and captions shown right now are all samples (placeholders). They will be replaced with real artwork.",
      all: "All",
      empty: "There is no artwork in this category yet.",
      sample: "Sample",
      open: "View larger",
      close: "Close",
      prev: "Previous artwork",
      next: "Next artwork",
      filterLabel: "Category filter",
      categories: {
        "Illustration": "Illustration",
        "Character Design": "Character Design",
        "Digital Art": "Digital Art",
        "Traditional Art": "Traditional Art",
        "Event Artwork": "Event Artwork",
        "Personal Projects": "Personal Projects",
        "Others": "Others"
      }
    },
    services: {
      title: "Illustration & Design Commissions",
      subtitle: "Let's turn your special idea into a picture.",
      text: "At artbybrity, I take on a variety of illustration and creative design commissions for individuals and groups.\n\nFrom artwork that celebrates a special day to illustrations that make events and spaces stand out, I work with care to fit your ideas and purpose.\n\nIf you need a one-of-a-kind picture, please get in touch anytime!",
      cards: [
        { title: "Event Illustration", desc: "Custom illustrations for events, festivals, anniversaries and special occasions." },
        { title: "Custom Illustration", desc: "Personalized artwork created from your own ideas and requests." },
        { title: "Event & Space Decoration", desc: "Illustrations and visual design for event posters, banners, signs and space decoration." },
        { title: "Personalized Artwork", desc: "Special personalized pieces for anniversaries, gifts and memories." }
      ],
      cta: "Contact for Commission"
    },
    process: {
      title: "How to Commission",
      stepLabel: "STEP",
      steps: [
        { title: "Get in touch", desc: "Tell me about the picture or design you have in mind." },
        { title: "Discuss", desc: "We talk about the purpose, style, size, schedule and more." },
        { title: "Creation", desc: "I create the artwork based on what we discussed." },
        { title: "Completion & delivery", desc: "You review the finished artwork and I deliver it in the way we agreed." }
      ],
      note: "Availability and schedule may vary depending on the project."
    },
    contact: {
      title: "Would you like to work together?",
      text: "If you like my work or would like to commission an illustration or design, feel free to reach out using the contact details below.\n\nI will do my best to turn your little idea into a special piece of art.\n\nIf you're interested in my art or commissions, contact me anytime!",
      artist: "Artist", artistValue: "브리띠 (Brity)",
      brand: "Brand",
      phone: "Phone",
      instagram: "Instagram",
      email: "Email",
      location: "Location", locationValue: "Namhae, South Korea",
      emailBtn: "Contact by Email",
      mailSubject: "[artbybrity] Commission inquiry",
      mailBody: "Hello Brity!\n\nI'd like to ask about a commission.\n\n- Type of work:\n- Purpose (event / gift, etc.):\n- Preferred style:\n- Size:\n- Preferred schedule:\n\nThank you."
    },
    footer: { rights: "© 2026 artbybrity. All rights reserved.", top: "Back to top" }
  },

  /* ------------------------------------------------------------------ Bahasa Indonesia */
  id: {
    meta: {
      title: "artbybrity | Portofolio Ilustrasi Brity",
      description: "artbybrity (Brity) - Little Ideas, Big Adventures. Portofolio ilustrasi dan pemesanan ilustrasi & desain freelance."
    },
    nav: {
      home: "Beranda", about: "Tentang", gallery: "Galeri", services: "Pesanan",
      process: "Cara Pesan", contact: "Kontak", menu: "Buka menu", language: "Pilih bahasa"
    },
    hero: {
      title: "Selamat datang di ruang seni kecil milik Brity!",
      intro: "Setiap ilustrasi istimewa berawal dari sebuah ide kecil. Lewat mata Brity, dunia menjadi sedikit lebih berwarna, lucu, dan hangat.",
      explore: "Lihat Karya Saya",
      commission: "Hubungi untuk Pesanan",
      imageAlt: "Karakter lucu di antara awan, bintang, dan bunga (ilustrasi contoh)",
      sample: "Ilustrasi contoh - ganti dengan karya asli Anda"
    },
    about: {
      title: "Tentang Seniman",
      text: "Halo! Saya Brity.\n\nSaya suka mengubah ide-ide kecil menjadi cerita istimewa lewat menggambar dan berkarya.\n\nMelalui ilustrasi dan berbagai ekspresi visual, saya mengabadikan momen sehari-hari, acara spesial, dan kenangan berharga orang-orang dalam bentuk gambar.\n\nIni adalah ruang seni kecil tempat saya mengumpulkan gambar dan karya yang saya sukai.\n\nSaya berharap karya saya bisa memberi sedikit kegembiraan dan inspirasi untuk Anda.",
      avatarAlt: "Ilustrasi profil Brity (contoh)",
      sample: "Avatar contoh"
    },
    gallery: {
      title: "Galeri Karya",
      subtitle: "Buku sketsa penuh ide-ide kecil",
      notice: "Catatan: karya dan keterangan yang tampil saat ini semuanya contoh (placeholder). Akan diganti dengan karya asli.",
      all: "Semua",
      empty: "Belum ada karya di kategori ini.",
      sample: "Contoh",
      open: "Lihat lebih besar",
      close: "Tutup",
      prev: "Karya sebelumnya",
      next: "Karya berikutnya",
      filterLabel: "Filter kategori",
      categories: {
        "Illustration": "Ilustrasi",
        "Character Design": "Desain Karakter",
        "Digital Art": "Seni Digital",
        "Traditional Art": "Seni Tradisional",
        "Event Artwork": "Karya Acara",
        "Personal Projects": "Proyek Pribadi",
        "Others": "Lainnya"
      }
    },
    services: {
      title: "Pesanan Ilustrasi & Desain",
      subtitle: "Mari wujudkan ide istimewa Anda menjadi gambar.",
      text: "Di artbybrity, saya menerima berbagai pesanan ilustrasi dan desain kreatif untuk perorangan maupun kelompok.\n\nMulai dari gambar untuk merayakan hari istimewa hingga ilustrasi yang membuat acara dan ruangan lebih menonjol, saya mengerjakannya dengan sepenuh hati sesuai ide dan tujuan Anda.\n\nJika Anda membutuhkan gambar yang benar-benar unik, silakan hubungi saya kapan saja!",
      cards: [
        { title: "Ilustrasi Acara", desc: "Ilustrasi khusus untuk acara, festival, perayaan, dan momen spesial." },
        { title: "Ilustrasi Custom", desc: "Gambar personal yang dibuat berdasarkan ide dan permintaan Anda." },
        { title: "Dekorasi Acara & Ruang", desc: "Ilustrasi dan desain visual untuk poster acara, spanduk, papan informasi, dan dekorasi ruangan." },
        { title: "Karya Personal & Hadiah", desc: "Karya personal istimewa untuk perayaan, hadiah, dan kenangan." }
      ],
      cta: "Hubungi untuk Pesanan"
    },
    process: {
      title: "Cara Memesan",
      stepLabel: "LANGKAH",
      steps: [
        { title: "Hubungi saya", desc: "Ceritakan gambar atau desain yang Anda inginkan." },
        { title: "Konsultasi", desc: "Kita bicarakan tujuan, gaya, ukuran, jadwal, dan lainnya." },
        { title: "Proses pengerjaan", desc: "Saya membuat karya berdasarkan hasil konsultasi." },
        { title: "Selesai & pengiriman", desc: "Anda memeriksa karya yang sudah jadi, lalu saya kirim dengan cara yang disepakati." }
      ],
      note: "Ketersediaan dan jadwal pengerjaan dapat berbeda tergantung isi proyek."
    },
    contact: {
      title: "Ingin berkarya bersama?",
      text: "Jika Anda menyukai karya saya atau ingin memesan ilustrasi maupun desain, silakan hubungi saya melalui kontak di bawah ini.\n\nSaya akan berusaha sebaik mungkin agar ide kecil Anda menjadi karya yang istimewa.\n\nJika tertarik dengan karya atau pesanan saya, hubungi saya kapan saja!",
      artist: "Seniman", artistValue: "브리띠 (Brity)",
      brand: "Merek",
      phone: "Telepon",
      instagram: "Instagram",
      email: "Email",
      location: "Lokasi", locationValue: "Namhae, Korea Selatan",
      emailBtn: "Hubungi lewat Email",
      mailSubject: "[artbybrity] Pertanyaan pesanan",
      mailBody: "Halo Brity!\n\nSaya ingin bertanya tentang pesanan.\n\n- Jenis karya:\n- Tujuan (acara / hadiah, dll.):\n- Gaya yang diinginkan:\n- Ukuran:\n- Jadwal yang diinginkan:\n\nTerima kasih."
    },
    footer: { rights: "© 2026 artbybrity. All rights reserved.", top: "Kembali ke atas" }
  },

  /* ------------------------------------------------------------------ Tiếng Việt */
  vi: {
    meta: {
      title: "artbybrity | Portfolio minh họa của Brity",
      description: "artbybrity (Brity) - Little Ideas, Big Adventures. Portfolio minh họa và nhận đặt vẽ minh họa, thiết kế freelance."
    },
    nav: {
      home: "Trang chủ", about: "Giới thiệu", gallery: "Thư viện tranh", services: "Đặt vẽ",
      process: "Quy trình", contact: "Liên hệ", menu: "Mở menu", language: "Chọn ngôn ngữ"
    },
    hero: {
      title: "Chào mừng bạn đến với không gian nghệ thuật nhỏ của Brity!",
      intro: "Mỗi bức minh họa đặc biệt đều bắt đầu từ một ý tưởng nhỏ. Qua đôi mắt của Brity, thế giới trở nên nhiều màu sắc, dễ thương và ấm áp hơn một chút.",
      explore: "Xem tác phẩm",
      commission: "Liên hệ đặt vẽ",
      imageAlt: "Nhân vật dễ thương giữa mây, sao và hoa (minh họa mẫu)",
      sample: "Minh họa mẫu - hãy thay bằng tác phẩm thật của bạn"
    },
    about: {
      title: "Giới thiệu họa sĩ",
      text: "Xin chào! Mình là Brity.\n\nMình thích biến những ý tưởng nhỏ thành những câu chuyện đặc biệt qua việc vẽ và sáng tạo.\n\nThông qua minh họa và nhiều cách thể hiện hình ảnh khác nhau, mình lưu giữ những khoảnh khắc đời thường, những sự kiện đặc biệt và những kỷ niệm quý giá của mọi người bằng tranh.\n\nĐây là không gian nghệ thuật nhỏ nơi mình gom lại những bức vẽ và sáng tác mình yêu thích.\n\nMình hy vọng tác phẩm của mình có thể mang đến cho bạn chút niềm vui và cảm hứng.",
      avatarAlt: "Ảnh minh họa đại diện của Brity (mẫu)",
      sample: "Ảnh đại diện mẫu"
    },
    gallery: {
      title: "Thư viện tranh",
      subtitle: "Cuốn sổ phác thảo đầy ý tưởng nhỏ",
      notice: "Lưu ý: các tác phẩm và chú thích đang hiển thị đều là mẫu (placeholder). Chúng sẽ được thay bằng tác phẩm thật.",
      all: "Tất cả",
      empty: "Chưa có tác phẩm nào trong danh mục này.",
      sample: "Mẫu",
      open: "Xem lớn hơn",
      close: "Đóng",
      prev: "Tác phẩm trước",
      next: "Tác phẩm tiếp theo",
      filterLabel: "Bộ lọc danh mục",
      categories: {
        "Illustration": "Minh họa",
        "Character Design": "Thiết kế nhân vật",
        "Digital Art": "Nghệ thuật số",
        "Traditional Art": "Nghệ thuật truyền thống",
        "Event Artwork": "Tác phẩm sự kiện",
        "Personal Projects": "Dự án cá nhân",
        "Others": "Khác"
      }
    },
    services: {
      title: "Nhận đặt vẽ minh họa & thiết kế",
      subtitle: "Hãy để mình biến ý tưởng đặc biệt của bạn thành tranh.",
      text: "Tại artbybrity, mình nhận nhiều loại đơn đặt vẽ minh họa và thiết kế sáng tạo cho cá nhân và tổ chức.\n\nTừ những bức tranh kỷ niệm ngày đặc biệt đến minh họa giúp sự kiện và không gian thêm nổi bật, mình thực hiện tận tâm theo ý tưởng và mục đích của bạn.\n\nNếu bạn cần một bức tranh độc nhất vô nhị, hãy liên hệ với mình bất cứ lúc nào nhé!",
      cards: [
        { title: "Minh họa sự kiện", desc: "Minh họa theo yêu cầu cho sự kiện, lễ hội, ngày kỷ niệm và những dịp đặc biệt." },
        { title: "Minh họa theo yêu cầu", desc: "Tranh cá nhân hóa được vẽ dựa trên ý tưởng và yêu cầu của bạn." },
        { title: "Trang trí sự kiện & không gian", desc: "Minh họa và thiết kế hình ảnh cho poster sự kiện, banner, bảng hướng dẫn và trang trí không gian." },
        { title: "Tác phẩm cá nhân & quà tặng", desc: "Tác phẩm cá nhân hóa đặc biệt cho ngày kỷ niệm, quà tặng và những kỷ niệm." }
      ],
      cta: "Liên hệ đặt vẽ"
    },
    process: {
      title: "Cách đặt vẽ",
      stepLabel: "BƯỚC",
      steps: [
        { title: "Liên hệ", desc: "Hãy cho mình biết bức tranh hoặc thiết kế bạn mong muốn." },
        { title: "Trao đổi", desc: "Chúng ta cùng trao đổi về mục đích, phong cách, kích thước, lịch trình, v.v." },
        { title: "Thực hiện", desc: "Mình vẽ tác phẩm dựa trên những gì đã trao đổi." },
        { title: "Hoàn thành & giao tranh", desc: "Bạn xem tác phẩm hoàn chỉnh và mình giao theo cách đã thống nhất." }
      ],
      note: "Khả năng nhận vẽ và lịch trình có thể khác nhau tùy theo nội dung dự án."
    },
    contact: {
      title: "Bạn muốn cùng làm việc chứ?",
      text: "Nếu bạn thích tác phẩm của mình hoặc muốn đặt vẽ minh họa, thiết kế, hãy thoải mái liên hệ qua thông tin bên dưới.\n\nMình sẽ cố gắng hết sức để biến ý tưởng nhỏ của bạn thành một tác phẩm đặc biệt.\n\nNếu bạn quan tâm đến tác phẩm hoặc việc đặt vẽ, hãy liên hệ với mình bất cứ lúc nào!",
      artist: "Họa sĩ", artistValue: "브리띠 (Brity)",
      brand: "Thương hiệu",
      phone: "Điện thoại",
      instagram: "Instagram",
      email: "Email",
      location: "Địa điểm", locationValue: "Namhae, Hàn Quốc",
      emailBtn: "Liên hệ qua Email",
      mailSubject: "[artbybrity] Hỏi về đặt vẽ",
      mailBody: "Xin chào Brity!\n\nMình muốn hỏi về việc đặt vẽ.\n\n- Loại tác phẩm:\n- Mục đích (sự kiện / quà tặng, v.v.):\n- Phong cách mong muốn:\n- Kích thước:\n- Lịch trình mong muốn:\n\nCảm ơn bạn."
    },
    footer: { rights: "© 2026 artbybrity. All rights reserved.", top: "Lên đầu trang" }
  }
};
