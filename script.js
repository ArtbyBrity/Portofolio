/* ==========================================================================
   artbybrity - script.js
   - 언어 전환 (localStorage 저장, 새로고침 없음)
   - 갤러리 자동 생성 + 카테고리 필터
   - 라이트박스 (이전/다음, 키보드, 터치 스와이프)
   - 모바일 메뉴, 현재 섹션 표시
   ========================================================================== */
(function () {
  'use strict';

  var STORAGE_KEY = 'artbybrity-lang';
  var currentLang = DEFAULT_LANG;
  var currentFilter = 'All';
  var visibleItems = [];       // 현재 필터로 보이는 작품 목록
  var lbIndex = 0;
  var lastFocus = null;

  /* ------------------------------------------------------------ helpers */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function getPath(obj, path) {
    return path.split('.').reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }

  function t(path) {
    var v = getPath(TRANSLATIONS[currentLang], path);
    if (v === undefined) v = getPath(TRANSLATIONS[DEFAULT_LANG], path);
    return v === undefined ? '' : v;
  }

  /* 작품 데이터: 문자열이면 모든 언어 공통, 객체이면 언어별 */
  function pick(field) {
    if (field == null) return '';
    if (typeof field === 'string') return field;
    return field[currentLang] || field[DEFAULT_LANG] || field.en || '';
  }

  function safeGet() { try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; } }
  function safeSet(v) { try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* 저장 불가 환경은 무시 */ } }

  function isValidLang(code) { return LANGUAGES.some(function (l) { return l.code === code; }); }

  /* ------------------------------------------------------------ language */
  function renderParas(el, text) {
    el.textContent = '';
    String(text).split(/\n\s*\n/).forEach(function (chunk) {
      var p = document.createElement('p');
      p.textContent = chunk.trim();
      el.appendChild(p);
    });
  }

  function applyLanguage(lang) {
    if (!isValidLang(lang)) lang = DEFAULT_LANG;
    currentLang = lang;
    document.documentElement.lang = lang;

    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-paras]').forEach(function (el) { renderParas(el, t(el.getAttribute('data-i18n-paras'))); });
    $$('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length === 2) el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });

    document.title = t('meta.title');
    var md = $('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.description'));
    var ogt = $('meta[property="og:title"]');
    if (ogt) ogt.setAttribute('content', 'artbybrity | Little Ideas, Big Adventures');

    var sel = $('#langSelect');
    if (sel && sel.value !== lang) sel.value = lang;

    updateMailto();
    buildFilters();
    renderGallery();
    if (!$('#lightbox').hidden) fillLightbox();   // 열려 있으면 언어에 맞게 갱신
    safeSet(lang);
  }

  function buildLanguageSelect() {
    var sel = $('#langSelect');
    LANGUAGES.forEach(function (l) {
      var o = document.createElement('option');
      o.value = l.code; o.textContent = l.label;
      sel.appendChild(o);
    });
    sel.addEventListener('change', function () { applyLanguage(sel.value); });
  }

  function updateMailto() {
    var btn = $('#emailBtn');
    if (!btn) return;
    btn.href = 'mailto:femleeb@gmail.com?subject=' + encodeURIComponent(t('contact.mailSubject')) +
               '&body=' + encodeURIComponent(t('contact.mailBody'));
  }

  /* ------------------------------------------------------------ gallery */
  function categoryLabel(cat) {
    return t('gallery.categories.' + cat) || cat;
  }

  function buildFilters() {
    var box = $('#filters');
    box.textContent = '';
    var used = CATEGORIES.filter(function (c) {
      return ARTWORKS.some(function (a) { return a.category === c; });
    });
    // 데이터에는 있는데 CATEGORIES 에 없는 카테고리도 자동으로 포함
    ARTWORKS.forEach(function (a) { if (a.category && used.indexOf(a.category) === -1) used.push(a.category); });

    if (currentFilter !== 'All' && used.indexOf(currentFilter) === -1) currentFilter = 'All';

    [{ key: 'All', label: t('gallery.all') }].concat(used.map(function (c) { return { key: c, label: categoryLabel(c) }; }))
      .forEach(function (f) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'filter-btn';
        b.textContent = f.label;
        b.setAttribute('data-filter', f.key);
        b.setAttribute('aria-pressed', String(f.key === currentFilter));
        b.addEventListener('click', function () {
          currentFilter = f.key;
          $$('.filter-btn', box).forEach(function (x) {
            x.setAttribute('aria-pressed', String(x.getAttribute('data-filter') === currentFilter));
          });
          renderGallery();
        });
        box.appendChild(b);
      });
  }

  function renderGallery() {
    var grid = $('#galleryGrid');
    grid.textContent = '';

    visibleItems = ARTWORKS.filter(function (a) { return currentFilter === 'All' || a.category === currentFilter; });

    visibleItems.forEach(function (a, i) {
      var title = pick(a.title);
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'art-card';
      card.style.animationDelay = (i * 60) + 'ms';
      card.setAttribute('aria-label', title + ' - ' + t('gallery.open'));

      var media = document.createElement('span');
      media.className = 'art-media';
      media.style.display = 'block';
      var img = document.createElement('img');
      img.src = a.image;
      img.alt = pick(a.alt) || title;
      img.loading = 'lazy';
      img.decoding = 'async';
      media.appendChild(img);
      if (a.placeholder) {
        var badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = t('gallery.sample');
        media.appendChild(badge);
      }

      var info = document.createElement('span');
      info.className = 'art-info';
      info.style.display = 'block';
      info.innerHTML = '';
      var cat = document.createElement('span');
      cat.className = 'art-cat'; cat.textContent = categoryLabel(a.category);
      var h = document.createElement('span');
      h.className = 'art-title'; h.style.display = 'block'; h.textContent = title;
      var cap = document.createElement('span');
      cap.className = 'art-caption'; cap.style.display = 'block'; cap.textContent = pick(a.caption);
      info.appendChild(cat); info.appendChild(h); info.appendChild(cap);
      if (a.date) {
        var d = document.createElement('span');
        d.className = 'art-date'; d.textContent = a.date;
        info.appendChild(d);
      }

      card.appendChild(media);
      card.appendChild(info);
      card.addEventListener('click', function () { openLightbox(i); });
      grid.appendChild(card);
    });

    $('#galleryEmpty').hidden = visibleItems.length !== 0;
    $('#galleryNotice').hidden = !ARTWORKS.some(function (a) { return a.placeholder; });
  }

  /* ------------------------------------------------------------ lightbox */
  var lb, lbImg;

  function fillLightbox() {
    var a = visibleItems[lbIndex];
    if (!a) return;
    lbImg.src = a.image;
    lbImg.alt = pick(a.alt) || pick(a.title);
    $('#lbTitle').textContent = pick(a.title);
    $('#lbCat').textContent = categoryLabel(a.category);
    $('#lbCaption').textContent = pick(a.caption);
    $('#lbDate').textContent = a.date || '';
    var multi = visibleItems.length > 1;
    $('#lbPrev').style.display = multi ? '' : 'none';
    $('#lbNext').style.display = multi ? '' : 'none';
  }

  function openLightbox(i) {
    lbIndex = i;
    lastFocus = document.activeElement;
    fillLightbox();
    lb.hidden = false;
    lb.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lb-open');
    $('#lbClose').focus();
  }

  function closeLightbox() {
    lb.hidden = true;
    lb.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lb-open');
    lbImg.removeAttribute('src');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function stepLightbox(dir) {
    if (!visibleItems.length) return;
    lbIndex = (lbIndex + dir + visibleItems.length) % visibleItems.length;
    fillLightbox();
  }

  function initLightbox() {
    lb = $('#lightbox');
    lbImg = $('#lbImg');
    $('#lbClose').addEventListener('click', closeLightbox);
    $('#lbPrev').addEventListener('click', function () { stepLightbox(-1); });
    $('#lbNext').addEventListener('click', function () { stepLightbox(1); });

    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeLightbox();    // 배경 클릭 시 닫기
    });

    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') stepLightbox(-1);
      else if (e.key === 'ArrowRight') stepLightbox(1);
      else if (e.key === 'Tab') {                 // 포커스를 라이트박스 안에 유지
        var f = $$('button', lb).filter(function (b) { return b.style.display !== 'none'; });
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // 터치 스와이프
    var sx = null;
    lb.addEventListener('touchstart', function (e) { sx = e.changedTouches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) stepLightbox(dx < 0 ? 1 : -1);
      sx = null;
    }, { passive: true });
  }

  /* ------------------------------------------------------------ nav */
  function initNav() {
    var burger = $('#hamburger');
    var links = $('#navLinks');

    function setOpen(open) {
      links.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
    }
    burger.addEventListener('click', function () { setOpen(!links.classList.contains('open')); });
    $$('a', links).forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    document.addEventListener('click', function (e) {
      if (!links.contains(e.target) && !burger.contains(e.target)) setOpen(false);
    });

    // 현재 섹션 강조
    if ('IntersectionObserver' in window) {
      var map = {};
      $$('a', links).forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && map[en.target.id]) {
            $$('a', links).forEach(function (x) { x.classList.remove('active'); });
            map[en.target.id].classList.add('active');
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  /* ------------------------------------------------------------ init */
  document.addEventListener('DOMContentLoaded', function () {
    buildLanguageSelect();
    initLightbox();
    initNav();

    var saved = safeGet();
    applyLanguage(saved && isValidLang(saved) ? saved : DEFAULT_LANG);
  });
})();
