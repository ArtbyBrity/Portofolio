# artbybrity 🌟 Little Ideas, Big Adventures

브리띠(Brity)의 일러스트 포트폴리오 & 작업 의뢰 웹사이트입니다.
HTML / CSS / JavaScript만으로 만들어졌고, **데이터베이스·백엔드·로그인·API 키가 필요 없습니다.**
빌드 과정 없이 GitHub Pages에 그대로 올리면 됩니다.

> ⚠️ **중요:** 현재 `assets/artworks/`의 그림 6점, 메인 일러스트, 프로필 아바타는 모두 **샘플(placeholder)** 입니다.
> 실제 작품이 아니므로 반드시 본인의 작품으로 교체해 주세요. (갤러리에는 "샘플" 표시와 안내 문구가 자동으로 나옵니다.)

---

## 📁 폴더 구조

```
artbybrity/
├── index.html           # 페이지 구조
├── style.css            # 디자인 (색상은 맨 위 :root 에서 변경)
├── script.js            # 언어 전환, 갤러리, 라이트박스, 메뉴
├── portfolio-data.js    # ⭐ 작품 목록 (여기만 수정하면 갤러리가 바뀝니다)
├── translations.js      # ⭐ 4개 언어 문구 (한국어/English/Bahasa Indonesia/Tiếng Việt)
├── README.md
├── .nojekyll            # GitHub Pages 설정 파일 (그대로 두세요)
└── assets/
    ├── artworks/        # 작품 이미지
    ├── profile/         # 프로필 이미지
    └── decorations/     # 별, 꽃, 구름, 낙서, 아이콘, 파비콘, 메인 일러스트
```

---

## 🚀 GitHub Pages 배포 방법

1. GitHub에 로그인하고 **New repository**로 `artbybrity` 저장소를 만듭니다. (Public)
2. 이 폴더 안의 **모든 파일과 폴더**(`index.html`, `assets` 폴더 포함)를 저장소에 업로드합니다.
   - 웹에서: 저장소 화면 → **Add file → Upload files** → 파일/폴더를 끌어다 놓고 **Commit changes**.
   - `.nojekyll` 같은 점(.)으로 시작하는 파일이 보이지 않을 수 있는데, 없어도 사이트는 정상 작동합니다.
3. 저장소 상단의 **Settings**를 엽니다.
4. 왼쪽 메뉴에서 **Pages**를 선택합니다.
5. **Build and deployment → Source**를 **Deploy from a branch**로 선택합니다.
6. **Branch**는 `main`, 폴더는 `/ (root)`를 선택합니다.
7. **Save**를 누르고 1~3분 기다립니다.
8. 같은 Pages 화면 위쪽에 주소가 나타납니다.
   `https://<GitHub사용자이름>.github.io/artbybrity/`
   (저장소 이름을 `<사용자이름>.github.io`로 만들면 `https://<사용자이름>.github.io/` 주소가 됩니다.)

모든 경로는 상대 경로라서 위 주소 어디에서든 그대로 작동합니다.

---

## 🖼️ 작품 추가 · 수정하기

### 새 작품 추가
1. 이미지 파일을 `assets/artworks/` 폴더에 업로드합니다. (예: `my-new-art.jpg`)
   - jpg / png / webp 권장. **가로 1600px 이하, 500KB~1MB 이하**로 줄이면 사이트가 빠르게 열립니다.
2. `portfolio-data.js`의 `ARTWORKS` 목록에 항목을 추가합니다.

```js
{
  image: "assets/artworks/my-new-art.jpg",
  title: "작은 꿈",
  category: "Illustration",
  caption: "일상의 순간에서 영감을 받은 작은 일러스트.",
  date: "2026"
},
```

3. 저장소에 커밋하면 갤러리에 자동으로 나타납니다. 카테고리 필터도 자동으로 만들어집니다.

### 언어별로 다른 제목/설명을 쓰고 싶을 때
`title`, `caption`, `alt`를 객체로 쓰면 언어를 바꿀 때 함께 바뀝니다.

```js
title:   { ko: "작은 꿈", en: "A Little Dream", id: "Mimpi Kecil", vi: "Giấc mơ nhỏ" },
caption: { ko: "...", en: "...", id: "...", vi: "..." },
```
문자열 하나만 쓰면 모든 언어에서 같은 글이 표시됩니다. 빠진 언어는 한국어 → 영어 순서로 대신 표시됩니다.

### 설명·카테고리 바꾸기
- 설명: 해당 작품의 `caption`을 고칩니다.
- 카테고리: `category`를 아래 중 하나로 바꿉니다.
  `Illustration`, `Character Design`, `Digital Art`, `Traditional Art`, `Event Artwork`, `Personal Projects`, `Others`
- 새 카테고리를 만들려면 `CATEGORIES`에 이름을 추가하고, `translations.js`의 `gallery.categories`에 4개 언어 이름을 추가하세요.

### 샘플 작품 지우기
샘플 6개 항목(`placeholder: true`)을 삭제하거나 실제 작품 정보로 교체하세요.
`placeholder: true`가 남아 있는 항목이 하나도 없으면 "샘플" 표시와 안내 문구가 자동으로 사라집니다.
(사용하지 않는 `artwork-0x.svg` 파일도 삭제해 주세요.)

---

## 👤 프로필·메인 일러스트 교체

- **프로필 이미지:** `assets/profile/`에 새 이미지를 올리고 `index.html`에서
  `assets/profile/artist-profile.svg` 를 새 파일 이름으로 바꿉니다. (정사각형 400×400 이상 권장)
- **메인(히어로) 일러스트:** `assets/decorations/hero-illustration.svg` 를 같은 방식으로 바꿉니다. (정사각형 권장)
- 이미지 아래 "샘플 아바타 / 샘플 일러스트" 문구는 `translations.js`의 `about.sample`, `hero.sample`에서 수정하거나 빈 문자열(`""`)로 바꿔 지울 수 있습니다.

## ✏️ 글·연락처 수정

- **모든 화면 문구**(소개글, 서비스 설명, 단계 안내 등): `translations.js`에서 언어별로 수정합니다.
- **연락처**(전화, 인스타그램, 이메일): `index.html`의 `id="contact"` 섹션에서 수정합니다.
  이메일을 바꾸면 `script.js`의 `updateMailto()` 안 주소도 함께 바꿔 주세요.
- 연락 방법은 전화·인스타그램·이메일 링크이며, 서버가 필요한 문의 양식은 일부러 넣지 않았습니다.

## 🎨 색상 바꾸기

`style.css` 맨 위 `:root` 안의 색상 값만 바꾸면 사이트 전체에 적용됩니다.

```css
--cream:  #FFF8EC;   /* 배경 */
--pink:   #F9C6D0;   /* 메인 포인트 */
--peach:  #FFD9B8;
--brown:  #6B4A35;   /* 글자와 선 */
--blue:   #BFE0F2;
--red:    #D9645A;   /* 강조 */
```

> 🎫 명함 이미지를 보내 주시면 위 색상을 명함의 실제 색상과 똑같이 맞출 수 있습니다.
> 지금 색상은 명함을 보지 않고 정한 **파스텔 기본 팔레트**입니다.

---

## 🌐 언어

한국어(기본) / English / Bahasa Indonesia / Tiếng Việt.
상단 메뉴의 언어 선택으로 새로고침 없이 바뀌며, 선택한 언어는 브라우저(localStorage)에 저장되어 다음 방문에도 유지됩니다.

## 🔤 글꼴

Google Fonts(무료, API 키 불필요)를 사용합니다: Baloo 2 + Jua(제목), Nunito + Noto Sans KR(본문).
인터넷에 연결되지 않으면 기본 글꼴로 대신 표시됩니다.

## 🖥️ 내 컴퓨터에서 미리보기

`index.html`을 더블클릭해서 열어도 작동합니다. (서버 불필요)

---

© 2026 artbybrity. All rights reserved.
