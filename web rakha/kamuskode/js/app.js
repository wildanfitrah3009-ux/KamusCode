/*
 * KamusKode: pencarian, filter, salin kode, favorit (localStorage), dan pewarnaan sintaks.
 * Semua teks dirender lewat textContent, jadi tag seperti <div> tampil apa adanya.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'kamuskode:favorit';
  var data = window.KODE_DATA;

  /* Hanya tampilkan bahasa populer. Untuk memunculkan semua lagi, hapus blok ini. */
  var POPULER = ['html', 'css', 'sql', 'markdown', 'xml', 'json', 'javascript', 'typescript', 'php', 'python', 'ruby', 'kotlin', 'swift', 'dart', 'java', 'c', 'cpp', 'csharp', 'go', 'rust', 'r', 'matlab', 'bash', 'powershell', 'lua'];
  if (data && Array.isArray(data.languages)) {
    data.languages = data.languages.filter(function (l) { return l && POPULER.indexOf(l.id) !== -1; });
  }

  var root = document.getElementById('cardsRoot');
  var info = document.getElementById('resultsInfo');
  var searchInput = document.getElementById('searchInput');
  var langList = document.getElementById('langList');
  var tabsWrap = document.getElementById('categoryTabs');
  var favToggle = document.getElementById('favToggle');
  var favCountEl = document.getElementById('favCount');

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function T(key, vars) { return window.I18N ? window.I18N.t(key, vars) : key; }

  /* Keadaan galat: data tidak termuat */
  if (!data || !Array.isArray(data.languages) || !data.categories) {
    info.textContent = '';
    var err = el('div', 'state');
    err.setAttribute('role', 'alert');
    err.appendChild(el('h2', '', 'Data sintaks tidak termuat'));
    err.appendChild(el('p', '', 'File js/kodeData.js tidak ditemukan atau rusak. Periksa folder js/, lalu muat ulang halaman.'));
    var reload = el('button', '', 'Muat ulang');
    reload.type = 'button';
    reload.addEventListener('click', function () { location.reload(); });
    err.appendChild(reload);
    root.appendChild(err);
    return;
  }

  /* ---------- Pewarnaan sintaks ---------- */
  var KW = {
    javascript: 'const let var function return if else for while of in new class async await import export true false null undefined this',
    typescript: 'const let var function return if else for while of in new class interface type enum extends implements true false null undefined this async await',
    java: 'public private static void class new return if else for while int double boolean char String true false null this extends',
    c: 'int float double char void return if else for while struct const include sizeof',
    cpp: 'int float double char void return if else for while class public private auto const using namespace new include string true false',
    csharp: 'public private static void class new return if else for foreach while in int double bool string var true false null switch get set',
    go: 'package import func return if else for range var const type struct map nil true false',
    rust: 'fn let mut if else for while match struct impl pub use return self true false loop in',
    kotlin: 'fun val var if else for while when class data return null true false in is',
    python: 'def return if elif else for while in import from class True False None and or not',
    php: 'function return if else elseif foreach for while echo true false null array',
    ruby: 'def end if elsif else unless do while for in class module return true false nil puts',
    bash: 'if then else elif fi for do done while in echo cd ls mkdir cp mv rm grep',
    sql: 'select from where insert into values update set delete join inner left on order by limit and or not as group'
  };
  var SLASH = ['javascript', 'typescript', 'java', 'c', 'cpp', 'csharp', 'go', 'rust', 'kotlin', 'php'];
  var HASH = ['python', 'ruby', 'bash', 'yaml', 'php'];
  var TAGGED = ['html', 'xml', 'svg'];
  var NO_STRING = ['markdown', 'yaml'];
  var cache = {};

  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function getRegex(lang) {
    if (cache[lang]) return cache[lang];
    var parts = [];
    if (SLASH.indexOf(lang) > -1) parts.push('\\/\\/[^\\n]*', '\\/\\*[\\s\\S]*?\\*\\/');
    if (lang === 'css') parts.push('\\/\\*[\\s\\S]*?\\*\\/');
    if (HASH.indexOf(lang) > -1) parts.push('#[^\\n]*');
    if (lang === 'sql') parts.push('--[^\\n]*');
    if (TAGGED.indexOf(lang) > -1) parts.push('<!--[\\s\\S]*?-->');
    var commentCount = parts.length;
    if (NO_STRING.indexOf(lang) === -1) {
      if (TAGGED.indexOf(lang) > -1 || lang === 'json' || lang === 'css') {
        parts.push('"(?:\\\\.|[^"\\\\\\n])*"');
      } else {
        parts.push('"(?:\\\\.|[^"\\\\\\n])*"', "'(?:\\\\.|[^'\\\\\\n])*'");
      }
    }
    var kwIndex = -1;
    if (KW[lang]) {
      kwIndex = parts.length;
      parts.push('\\b(?:' + KW[lang].split(' ').map(esc).join('|') + ')\\b');
    }
    if (!parts.length) { cache[lang] = null; return null; }
    cache[lang] = { re: new RegExp(parts.join('|'), lang === 'sql' ? 'gi' : 'g'), commentCount: commentCount, kwIndex: kwIndex, parts: parts };
    return cache[lang];
  }

  function classify(def, token) {
    var i;
    for (i = 0; i < def.parts.length; i++) {
      if (new RegExp('^(?:' + def.parts[i] + ')$', def.re.flags.replace('g', '')).test(token)) {
        if (i < def.commentCount) return 'tk-cm';
        if (i === def.kwIndex) return 'tk-kw';
        return 'tk-str';
      }
    }
    return '';
  }

  function highlight(codeEl, text, lang) {
    var def = getRegex(lang);
    if (!def) { codeEl.textContent = text; return; }
    var last = 0, m;
    def.re.lastIndex = 0;
    while ((m = def.re.exec(text)) !== null) {
      if (m[0] === '') { def.re.lastIndex++; continue; }
      if (m.index > last) codeEl.appendChild(document.createTextNode(text.slice(last, m.index)));
      var cls = classify(def, m[0]);
      if (cls) codeEl.appendChild(el('span', cls, m[0]));
      else codeEl.appendChild(document.createTextNode(m[0]));
      last = m.index + m[0].length;
    }
    if (last < text.length) codeEl.appendChild(document.createTextNode(text.slice(last)));
  }

  /* ---------- Data datar untuk pencarian ---------- */
  /* Konsep wajib standar. Entri lama yang nama/konsepnya cocok disembunyikan
     bila bahasa itu sudah punya entri standar (std:true), agar tidak dobel. */
  var CONCEPTS = [
    { key: 'output', re: /output|komentar|print|console|echo|puts/i },
    { key: 'variabel', re: /variabel|tipe data|let dan const|val dan var|var,|deklarasi/i },
    { key: 'percabangan', re: /percabangan|if.*else|if, elif|if \/ else|switch/i },
    { key: 'perulangan', re: /perulangan|for|while|loop|each/i },
    { key: 'fungsi', re: /fungsi|function|def|func|method/i },
    { key: 'koleksi', re: /array|list|koleksi|vector|slice|map|dict|hash|tabel/i }
  ];
  function conceptOf(name) {
    for (var i = 0; i < CONCEPTS.length; i++) if (CONCEPTS[i].re.test(name)) return CONCEPTS[i].key;
    return null;
  }

  var entries = [];
  var byId = {};
  data.languages.forEach(function (lang) {
    if (!lang || !Array.isArray(lang.entries)) return;
    var catInfo = data.categories[lang.category];
    var catLabel = catInfo ? catInfo.label : '';
    var stdKeys = {};
    lang.entries.forEach(function (e) {
      if (e.std) { var k = conceptOf(e.name); if (k) stdKeys[k] = true; }
    });
    var seq = 0;
    lang.entries.forEach(function (e) {
      if (!e.std && stdKeys[conceptOf(e.name)]) return; /* lewati duplikat konsep */
      var slug = String(e.name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      var baseId = lang.id + '|' + slug;
      var id = baseId;
      if (byId[id]) id = baseId + '#' + seq;
      var item = {
        id: id,
        lang: lang,
        entry: e,
        catLabel: catLabel,
        hay: [e.name, e.usage, lang.name, lang.id, catLabel, e.code.join(' ')].join(' ').toLowerCase()
      };
      seq++;
      entries.push(item);
      byId[item.id] = item;
    });
  });

  /* ---------- Favorit ---------- */
  var favorites = {};
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    var parsed = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) parsed.forEach(function (id) { if (byId[id]) favorites[id] = true; });
  } catch (e) { favorites = {}; }

  function saveFavorites() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.keys(favorites))); } catch (e) { /* penyimpanan diblokir: favorit berlaku selama halaman terbuka */ }
  }
  function favCount() { return Object.keys(favorites).length; }

  var state = { query: '', category: 'all', lang: 'all', favOnly: false };

  function updateFavToggle() {
    favCountEl.textContent = String(favCount());
    favToggle.setAttribute('aria-pressed', String(state.favOnly));
  }

  function matches(item, ignoreLang) {
    if (state.category !== 'all' && item.lang.category !== state.category) return false;
    if (state.favOnly && !favorites[item.id]) return false;
    if (!ignoreLang && state.lang !== 'all' && item.lang.id !== state.lang) return false;
    var tokens = state.query.split(/\s+/).filter(Boolean);
    for (var i = 0; i < tokens.length; i++) {
      if (item.hay.indexOf(tokens[i]) === -1) return false;
    }
    return true;
  }

  /* ---------- Sidebar ---------- */
  function renderSidebar(base) {
    langList.textContent = '';
    var counts = {};
    base.forEach(function (it) { counts[it.lang.id] = (counts[it.lang.id] || 0) + 1; });

    function add(id, label, count) {
      var li = document.createElement('li');
      var btn = el('button', 'lang-btn');
      btn.type = 'button';
      btn.setAttribute('data-lang', id);
      btn.setAttribute('aria-pressed', String(state.lang === id));
      btn.appendChild(el('span', '', label));
      btn.appendChild(el('span', 'n', String(count)));
      li.appendChild(btn);
      langList.appendChild(li);
    }
    add('all', T('side.allLang'), base.length);
    data.languages.forEach(function (lang) {
      if (counts[lang.id]) add(lang.id, lang.name, counts[lang.id]);
    });
  }

  /* ---------- Entri ---------- */
  function setFavButton(btn, on, name) {
    btn.textContent = on ? T('card.saved') : T('card.save');
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', (on ? T('card.ariaUnsave') : T('card.ariaSave')) + name);
  }

  /* Blok pemahaman: pakai e.pemahaman bila ada, jika tidak susun dari usage + output. */
  function buildPemahaman(item) {
    var e = item.entry;
    var box = el('div', 'pemahaman');

    if (e.pemahaman && typeof e.pemahaman === 'object') {
      if (e.pemahaman.inti) {
        var inti = el('p');
        inti.appendChild(el('span', 'inti', T('int.core')));
        inti.appendChild(document.createTextNode(e.pemahaman.inti));
        box.appendChild(inti);
      }
      if (e.pemahaman.poin && e.pemahaman.poin.length) {
        var ul = document.createElement('ul');
        e.pemahaman.poin.forEach(function (p) { ul.appendChild(el('li', '', p)); });
        box.appendChild(ul);
      }
      return box;
    }

    /* Susunan otomatis: rangkum kegunaan + hasil nyata. */
    var intiAuto = el('p');
    intiAuto.appendChild(el('span', 'inti', T('int.core')));
    intiAuto.appendChild(document.createTextNode(T('int.auto')));
    box.appendChild(intiAuto);

    var firstSentence = String(e.usage).split(/(?<=\.)\s/)[0] || String(e.usage);
    var ul2 = document.createElement('ul');
    ul2.appendChild(el('li', '', T('int.when') + firstSentence));
    ul2.appendChild(el('li', '', T('int.result') + e.output));
    box.appendChild(ul2);
    return box;
  }

  /* Kartu profil ringkas per bahasa (5 poin). */
  function buildProfil(lang) {
    if (!lang.profil) return null;
    var p = lang.profil;
    var wrap = el('div', 'profil');
    var rows = [
      ['profil.kategori', p.kategori],
      ['profil.kegunaan', p.kegunaan],
      ['profil.tempat', p.tempatBerjalan],
      ['profil.unggul', p.keunggulan],
      ['profil.kapan', p.kapanMemilih]
    ];
    rows.forEach(function (r) {
      var cell = el('div', 'profil-item');
      cell.appendChild(el('span', 'profil-label', T(r[0])));
      cell.appendChild(el('p', 'profil-value', r[1]));
      wrap.appendChild(cell);
    });
    return wrap;
  }

  function buildEntry(item) {
    var e = item.entry;
    var card = el('article', 'entry');

    var head = el('div', 'entry-head');
    var titleBox = el('div');
    titleBox.appendChild(el('h3', 'entry-name', e.name));
    titleBox.appendChild(el('p', 'entry-meta', item.lang.name + ' \u2022 ' + T('cat.' + item.lang.category)));
    head.appendChild(titleBox);
    var fav = el('button', 'btn-fav');
    fav.type = 'button';
    fav.setAttribute('data-action', 'fav');
    fav.setAttribute('data-id', item.id);
    setFavButton(fav, !!favorites[item.id], e.name);
    head.appendChild(fav);
    card.appendChild(head);

    var body = el('div', 'entry-body');
    body.appendChild(el('p', 'field-label', T('card.usage')));
    body.appendChild(el('p', 'usage', e.usage));
    body.appendChild(el('p', 'field-label', T('card.understand')));
    body.appendChild(buildPemahaman(item));
    body.appendChild(el('p', 'field-label', T('card.example')));

    var block = el('div', 'code-block');
    var codeHead = el('div', 'code-head');
    codeHead.appendChild(el('span', '', item.lang.codeLang));
    var copy = el('button', 'btn-copy', T('card.copy'));
    copy.type = 'button';
    copy.setAttribute('data-action', 'copy');
    copy.setAttribute('data-id', item.id);
    copy.setAttribute('aria-label', T('card.copy') + ' ' + e.name);
    codeHead.appendChild(copy);
    block.appendChild(codeHead);

    var pre = document.createElement('pre');
    var code = document.createElement('code');
    highlight(code, e.code.join('\n'), item.lang.codeLang);
    pre.appendChild(code);
    block.appendChild(pre);

    var result = el('div', 'result');
    result.appendChild(el('b', '', T('card.result')));
    result.appendChild(document.createTextNode(e.output));
    block.appendChild(result);

    body.appendChild(block);
    card.appendChild(body);
    return card;
  }

  function resetFilters() {
    state.query = ''; state.category = 'all'; state.lang = 'all'; state.favOnly = false;
    searchInput.value = '';
    Array.prototype.forEach.call(tabsWrap.querySelectorAll('button[data-category]'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-category') === 'all'));
    });
    render();
  }

  function emptyState() {
    var box = el('div', 'state');
    var title, text;
    if (state.favOnly && favCount() === 0) {
      title = T('empty.noFavTitle');
      text = T('empty.noFavText');
    } else if (state.query.trim()) {
      title = T('empty.noQueryTitle', { q: state.query.trim() });
      text = T('empty.noQueryText');
    } else {
      title = T('empty.noFilterTitle');
      text = T('empty.noFilterText');
    }
    box.appendChild(el('h2', '', title));
    box.appendChild(el('p', '', text));
    var btn = el('button', '', T('empty.resetBtn'));
    btn.type = 'button';
    btn.setAttribute('data-action', 'reset');
    box.appendChild(btn);
    return box;
  }

  function render() {
    var base = entries.filter(function (it) { return matches(it, true); });
    if (state.lang !== 'all' && !base.some(function (it) { return it.lang.id === state.lang; })) state.lang = 'all';
    renderSidebar(base);
    updateFavToggle();

    var shown = state.lang === 'all' ? base : base.filter(function (it) { return it.lang.id === state.lang; });
    root.textContent = '';
    info.textContent = T('status.showing', { n: shown.length, total: entries.length });

    if (!shown.length) { root.appendChild(emptyState()); return; }

    data.languages.forEach(function (lang) {
      var items = shown.filter(function (it) { return it.lang.id === lang.id; });
      if (!items.length) return;
      var section = el('section', 'lang-section');
      section.setAttribute('aria-label', lang.name);
      var head = el('div', 'lang-head');
      head.appendChild(el('h2', '', lang.name));
      head.appendChild(el('p', '', T('cat.' + lang.category) + ' \u2022 ' + items.length + ' ' + T('word.sintaks')));
      section.appendChild(head);
      var profil = buildProfil(lang);
      if (profil) section.appendChild(profil);
      var list = el('div', 'entries');
      items.forEach(function (it) { list.appendChild(buildEntry(it)); });
      section.appendChild(list);
      root.appendChild(section);
    });
  }

  /* ---------- Salin ---------- */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      ok ? resolve() : reject(new Error('copy gagal'));
    });
  }

  function flash(btn, label, ok) {
    btn.textContent = label;
    btn.classList.toggle('copied', ok);
    window.setTimeout(function () {
      btn.textContent = T('card.copy');
      btn.classList.remove('copied');
    }, 1600);
  }

  /* ---------- Event ---------- */
  root.addEventListener('click', function (ev) {
    var btn = ev.target.closest('button[data-action]');
    if (!btn) return;
    var action = btn.getAttribute('data-action');
    if (action === 'reset') { resetFilters(); return; }
    var item = byId[btn.getAttribute('data-id')];
    if (!item) return;

    if (action === 'copy') {
      copyText(item.entry.code.join('\n')).then(
        function () { flash(btn, T('card.copied'), true); },
        function () { flash(btn, T('card.copyFail'), false); }
      );
      return;
    }
    if (action === 'fav') {
      if (favorites[item.id]) delete favorites[item.id]; else favorites[item.id] = true;
      saveFavorites();
      if (state.favOnly) render();
      else { setFavButton(btn, !!favorites[item.id], item.entry.name); updateFavToggle(); }
    }
  });

  langList.addEventListener('click', function (ev) {
    var btn = ev.target.closest('button[data-lang]');
    if (!btn) return;
    state.lang = btn.getAttribute('data-lang');
    render();
  });

  tabsWrap.addEventListener('click', function (ev) {
    var btn = ev.target.closest('button[data-category]');
    if (!btn) return;
    state.category = btn.getAttribute('data-category');
    Array.prototype.forEach.call(tabsWrap.querySelectorAll('button[data-category]'), function (b) {
      b.setAttribute('aria-pressed', String(b === btn));
    });
    render();
  });

  favToggle.addEventListener('click', function () { state.favOnly = !state.favOnly; render(); });

  searchInput.addEventListener('input', function () {
    state.query = searchInput.value.toLowerCase();
    render();
  });
  searchInput.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && searchInput.value) {
      searchInput.value = '';
      state.query = '';
      render();
    }
  });
  document.addEventListener('keydown', function (ev) {
    var tag = (document.activeElement && document.activeElement.tagName) || '';
    if (ev.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA' && !ev.ctrlKey && !ev.metaKey) {
      ev.preventDefault();
      searchInput.focus();
    }
  });

  /* ---------- Topbar: menu dropdown, mulai belajar, pemilih bahasa ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.menu'), function (menu) {
    var btn = menu.querySelector('.menu-btn');
    if (!btn) return;
    btn.addEventListener('click', function (ev) {
      ev.stopPropagation();
      var willOpen = !menu.classList.contains('open');
      closeMenus();
      if (willOpen) { menu.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    });
  });
  function closeMenus() {
    Array.prototype.forEach.call(document.querySelectorAll('.menu.open'), function (m) {
      m.classList.remove('open');
      var b = m.querySelector('.menu-btn');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
  document.addEventListener('click', closeMenus);
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') closeMenus(); });

  var menuFav = document.getElementById('menuFav');
  if (menuFav) menuFav.addEventListener('click', function () { state.favOnly = true; render(); closeMenus(); });

  var menuReset = document.getElementById('menuReset');
  if (menuReset) menuReset.addEventListener('click', function () { resetFilters(); closeMenus(); });

  var aboutBtn = document.getElementById('aboutBtn');
  var aboutModal = document.getElementById('aboutModal');
  var aboutClose = document.getElementById('aboutClose');
  function openAbout() { if (aboutModal) { aboutModal.classList.add('open'); aboutModal.setAttribute('aria-hidden', 'false'); } }
  function closeAbout() { if (aboutModal) { aboutModal.classList.remove('open'); aboutModal.setAttribute('aria-hidden', 'true'); } }
  if (aboutBtn) aboutBtn.addEventListener('click', function () { closeMenus(); openAbout(); });
  if (aboutClose) aboutClose.addEventListener('click', closeAbout);
  if (aboutModal) aboutModal.addEventListener('click', function (e) { if (e.target === aboutModal) closeAbout(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAbout(); });

  Array.prototype.forEach.call(document.querySelectorAll('[data-jump]'), function (a) {
    a.addEventListener('click', function () {
      state.category = a.getAttribute('data-jump');
      Array.prototype.forEach.call(tabsWrap.querySelectorAll('button[data-category]'), function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-category') === state.category));
      });
      render();
      closeMenus();
    });
  });

  /* ---------- Bahasa antarmuka ---------- */
  var langSelect = document.getElementById('langSelect');
  if (langSelect && window.I18N) {
    langSelect.value = window.I18N.getLang();
    langSelect.addEventListener('change', function () { window.I18N.setLang(langSelect.value); });
  }
  window.onLangChange = function () { render(); };

  if (window.I18N) window.I18N.apply();
  render();
})();
