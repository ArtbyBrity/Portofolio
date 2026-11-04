/* ==========================================================================
   artbybrity - portfolio data  (이 파일만 수정하면 갤러리가 자동으로 바뀝니다)
   ==========================================================================

   새 작품 추가 방법 (How to add artwork)
   1) 이미지를 assets/artworks/ 폴더에 업로드합니다. (jpg, png, webp, svg 모두 가능)
   2) 아래 ARTWORKS 목록 맨 위에 새 항목을 한 줄 추가합니다.

   간단한 형식 (모든 언어에 같은 글이 표시됩니다):
   {
     image: "assets/artworks/my-new-art.jpg",
     title: "A Little Dream",
     category: "Illustration",
     caption: "A small illustration inspired by everyday moments.",
     date: "2026"
   },

   다국어 형식 (언어별로 다른 글을 보여주고 싶을 때):
   {
     image: "assets/artworks/my-new-art.jpg",
     title:   { ko: "작은 꿈", en: "A Little Dream", id: "Mimpi Kecil", vi: "Giấc mơ nhỏ" },
     category: "Illustration",
     caption: { ko: "...", en: "...", id: "...", vi: "..." },
     alt:     { ko: "...", en: "...", id: "...", vi: "..." },   // 선택 (이미지 설명)
     date: "2026"
   },

   category 는 아래 CATEGORIES 목록에 있는 영어 이름 중 하나를 그대로 쓰세요.
   placeholder: true 는 "샘플" 표시용입니다. 실제 작품에는 쓰지 않습니다 (지우면 됩니다).
   ========================================================================== */

const CATEGORIES = [
  "Illustration",
  "Character Design",
  "Digital Art",
  "Traditional Art",
  "Event Artwork",
  "Personal Projects",
  "Others"
];

const ARTWORKS = [
  /* ---- SAMPLE PLACEHOLDERS: 아래 6개는 예시용 가짜 그림입니다. 실제 작품으로 교체하세요. ---- */
  {
    image: "assets/artworks/artwork-01.svg",
    title: { ko: "작은 꿈 (샘플)", en: "A Little Dream (sample)", id: "Mimpi Kecil (contoh)", vi: "Giấc mơ nhỏ (mẫu)" },
    category: "Illustration",
    caption: {
      ko: "샘플 이미지입니다. 일상의 순간에서 영감을 받은 작은 일러스트 자리입니다.",
      en: "Sample image. A spot for a small illustration inspired by everyday moments.",
      id: "Gambar contoh. Tempat untuk ilustrasi kecil yang terinspirasi dari momen sehari-hari.",
      vi: "Hình mẫu. Chỗ dành cho một bức minh họa nhỏ lấy cảm hứng từ những khoảnh khắc đời thường."
    },
    alt: {
      ko: "구름과 별, 꽃 사이에 있는 귀여운 캐릭터의 샘플 그림",
      en: "Sample drawing of a cute character among clouds, stars and flowers",
      id: "Gambar contoh karakter lucu di antara awan, bintang, dan bunga",
      vi: "Hình mẫu nhân vật dễ thương giữa mây, sao và hoa"
    },
    date: "2026",
    placeholder: true
  },
   {
     image: "assets/artworks/art1.jpg",
     title:   { ko: "작은 꿈", en: "A Little Dream", id: "Mimpi Kecil", vi: "Giấc mơ nhỏ" },
     category: "Illustration",
     caption: { ko: "...", en: "...", id: "...", vi: "..." },
     alt:     { ko: "...", en: "...", id: "...", vi: "..." },   // 선택 (이미지 설명)
     date: "2026"
   },
  {
    image: "assets/artworks/artwork-02.svg",
    title: { ko: "꽃밭 산책 (샘플)", en: "Flower Field Walk (sample)", id: "Jalan di Ladang Bunga (contoh)", vi: "Dạo bước vườn hoa (mẫu)" },
    category: "Digital Art",
    caption: {
      ko: "샘플 이미지입니다. 디지털 작업물을 올리면 이 자리에 표시됩니다.",
      en: "Sample image. Your digital artwork will appear in this spot.",
      id: "Gambar contoh. Karya digital Anda akan tampil di sini.",
      vi: "Hình mẫu. Tác phẩm kỹ thuật số của bạn sẽ hiển thị ở đây."
    },
    alt: {
      ko: "여러 색 꽃이 피어 있는 샘플 그림",
      en: "Sample drawing of colorful flowers in bloom",
      id: "Gambar contoh bunga warna-warni yang sedang mekar",
      vi: "Hình mẫu những bông hoa nhiều màu đang nở"
    },
    date: "2026",
    placeholder: true
  },
  {
    image: "assets/artworks/artwork-03.svg",
    title: { ko: "별이 쏟아지는 밤 (샘플)", en: "A Night of Falling Stars (sample)", id: "Malam Bintang Berjatuhan (contoh)", vi: "Đêm sao rơi (mẫu)" },
    category: "Personal Projects",
    caption: {
      ko: "샘플 이미지입니다. 개인 프로젝트 작업물을 소개하는 자리입니다.",
      en: "Sample image. A spot to introduce your personal project work.",
      id: "Gambar contoh. Tempat untuk memperkenalkan proyek pribadi Anda.",
      vi: "Hình mẫu. Chỗ để giới thiệu dự án cá nhân của bạn."
    },
    alt: {
      ko: "별과 달, 구름이 있는 파란 밤하늘 샘플 그림",
      en: "Sample drawing of a blue night sky with stars, a moon and clouds",
      id: "Gambar contoh langit malam biru dengan bintang, bulan, dan awan",
      vi: "Hình mẫu bầu trời đêm xanh với sao, trăng và mây"
    },
    date: "2026",
    placeholder: true
  },
  {
    image: "assets/artworks/artwork-04.svg",
    title: { ko: "작은 친구들 (샘플)", en: "Little Friends (sample)", id: "Teman-teman Kecil (contoh)", vi: "Những người bạn nhỏ (mẫu)" },
    category: "Character Design",
    caption: {
      ko: "샘플 이미지입니다. 캐릭터 디자인 작업물이 들어갈 자리입니다.",
      en: "Sample image. A spot for your character design work.",
      id: "Gambar contoh. Tempat untuk karya desain karakter Anda.",
      vi: "Hình mẫu. Chỗ dành cho tác phẩm thiết kế nhân vật của bạn."
    },
    alt: {
      ko: "모자를 쓴 귀여운 캐릭터 세 마리의 샘플 그림",
      en: "Sample drawing of three cute characters wearing hats",
      id: "Gambar contoh tiga karakter lucu yang memakai topi",
      vi: "Hình mẫu ba nhân vật dễ thương đội mũ"
    },
    date: "2026",
    placeholder: true
  },
  {
    image: "assets/artworks/artwork-05.svg",
    title: { ko: "축제의 바다 (샘플)", en: "Festival Sea (sample)", id: "Laut Festival (contoh)", vi: "Biển lễ hội (mẫu)" },
    category: "Event Artwork",
    caption: {
      ko: "샘플 이미지입니다. 행사·축제용 일러스트를 소개하는 자리입니다.",
      en: "Sample image. A spot for illustrations made for events and festivals.",
      id: "Gambar contoh. Tempat untuk ilustrasi acara dan festival.",
      vi: "Hình mẫu. Chỗ dành cho minh họa sự kiện và lễ hội."
    },
    alt: {
      ko: "바다 위 작은 배가 있는 샘플 그림",
      en: "Sample drawing of a small boat on the sea",
      id: "Gambar contoh perahu kecil di atas laut",
      vi: "Hình mẫu chiếc thuyền nhỏ trên biển"
    },
    date: "2026",
    placeholder: true
  },
  {
    image: "assets/artworks/artwork-06.svg",
    title: { ko: "버섯 마을 (샘플)", en: "Mushroom Village (sample)", id: "Desa Jamur (contoh)", vi: "Làng nấm (mẫu)" },
    category: "Traditional Art",
    caption: {
      ko: "샘플 이미지입니다. 손으로 그린 작업물을 촬영해서 올려 보세요.",
      en: "Sample image. Photograph your hand-drawn work and add it here.",
      id: "Gambar contoh. Foto karya gambar tangan Anda dan tambahkan di sini.",
      vi: "Hình mẫu. Hãy chụp ảnh tác phẩm vẽ tay của bạn và thêm vào đây."
    },
    alt: {
      ko: "여러 색 버섯이 모여 있는 샘플 그림",
      en: "Sample drawing of colorful mushrooms",
      id: "Gambar contoh jamur warna-warni",
      vi: "Hình mẫu những cây nấm nhiều màu"
    },
    date: "2026",
    placeholder: true
  }
];
