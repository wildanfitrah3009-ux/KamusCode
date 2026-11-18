/*
 * KamusKode - terjemahan antarmuka (id, en, zh, ja).
 * Teks statis di HTML diberi data-i18n="kunci"; apply() menggantinya.
 * Teks dinamis di app.js memakai I18N.t('kunci').
 */
(function () {
  'use strict';

  var DICT = {
    id: {
      'nav.katalog': 'Katalog', 'nav.referensi': 'Referensi', 'nav.tentang': 'Tentang',
      'nav.markup': 'Bahasa Markup', 'nav.prog': 'Bahasa Pemrograman',
      'nav.fav': 'Favorit saya', 'nav.reset': 'Hapus semua filter',
      'top.search': 'Cari', 'top.searchLabel': 'Cari sintaks, fungsi, atau bahasa',
      'top.start': 'Mulai belajar', 'top.theme': 'Ganti tema terang atau gelap',
      'top.lang': 'Pilih bahasa antarmuka',
      'side.kategori': 'Kategori', 'side.semua': 'Semua', 'side.markup': 'Markup', 'side.prog': 'Program',
      'side.fav': 'Hanya favorit', 'side.bahasa': 'Bahasa', 'side.allLang': 'Semua bahasa',
      'status.loading': 'Memuat daftar sintaks', 'status.showing': 'Menampilkan {n} dari {total} sintaks',
      'card.usage': 'Kegunaan utama', 'card.understand': 'Pemahaman materi', 'card.example': 'Contoh penggunaan',
      'card.save': 'Simpan', 'card.saved': 'Tersimpan', 'card.copy': 'Salin', 'card.copied': 'Tersalin', 'card.copyFail': 'Gagal menyalin',
      'card.result': 'Hasil: ', 'card.ariaSave': 'Simpan ke favorit: ', 'card.ariaUnsave': 'Hapus dari favorit: ',
      'int.core': 'Inti: ', 'int.auto': 'Pahami dulu kapan sintaks ini dipakai, lalu bayangkan hasil yang muncul.',
      'int.when': 'Kapan dipakai: ', 'int.result': 'Hasil yang terlihat: ',
      'empty.noFavTitle': 'Belum ada favorit', 'empty.noFavText': 'Tekan tombol Simpan pada entri mana pun, lalu entri itu muncul di sini.',
      'empty.noQueryTitle': 'Tidak ada hasil untuk "{q}"', 'empty.noQueryText': 'Coba nama tag, nama fungsi, atau nama bahasa, misalnya "form", "loop", atau "python".',
      'empty.noFilterTitle': 'Tidak ada sintaks pada filter ini', 'empty.noFilterText': 'Kombinasi kategori dan bahasa yang dipilih tidak punya entri.',
      'empty.resetBtn': 'Hapus semua filter',
      'cat.markup': 'Bahasa Markup', 'cat.prog': 'Bahasa Pemrograman', 'word.sintaks': 'sintaks',
      'profil.kategori': 'Kategori', 'profil.kegunaan': 'Kegunaan utama', 'profil.tempat': 'Tempat berjalan', 'profil.unggul': 'Keunggulan', 'profil.kapan': 'Kapan memilih',
      'nav.all': 'Semua bahasa', 'about.title': 'Tentang KamusKode', 'about.close': 'Tutup',
      'about.intro': 'KamusKode adalah referensi sintaks kode berbahasa Indonesia untuk pemula. Setiap bahasa dilengkapi profil singkat, penjelasan materi, contoh kode, dan hasil nyata.',
      'about.li1': 'Cari sintaks lewat kotak pencarian; tekan tombol / untuk fokus cepat.',
      'about.li2': 'Filter berdasarkan kategori di sidebar, atau pilih bahasa tertentu.',
      'about.li3': 'Simpan entri favorit dengan tombol Simpan; lihat daftarnya di menu Referensi.',
      'about.li4': 'Salin kode dengan tombol Salin pada tiap contoh.',
      'about.li5': 'Ganti tema gelap/terang dan bahasa antarmuka dari bilah atas.'
    },
    en: {
      'nav.katalog': 'Catalog', 'nav.referensi': 'Reference', 'nav.tentang': 'About',
      'nav.markup': 'Markup Languages', 'nav.prog': 'Programming Languages',
      'nav.fav': 'My favorites', 'nav.reset': 'Clear all filters',
      'top.search': 'Search', 'top.searchLabel': 'Search syntax, function, or language',
      'top.start': 'Start learning', 'top.theme': 'Toggle light or dark theme',
      'top.lang': 'Choose interface language',
      'side.kategori': 'Category', 'side.semua': 'All', 'side.markup': 'Markup', 'side.prog': 'Programming',
      'side.fav': 'Favorites only', 'side.bahasa': 'Languages', 'side.allLang': 'All languages',
      'status.loading': 'Loading syntax list', 'status.showing': 'Showing {n} of {total} syntax entries',
      'card.usage': 'Main purpose', 'card.understand': 'Understanding', 'card.example': 'Usage example',
      'card.save': 'Save', 'card.saved': 'Saved', 'card.copy': 'Copy', 'card.copied': 'Copied', 'card.copyFail': 'Copy failed',
      'card.result': 'Result: ', 'card.ariaSave': 'Save to favorites: ', 'card.ariaUnsave': 'Remove from favorites: ',
      'int.core': 'Core: ', 'int.auto': 'First understand when this syntax is used, then picture the result.',
      'int.when': 'When to use: ', 'int.result': 'Visible result: ',
      'empty.noFavTitle': 'No favorites yet', 'empty.noFavText': 'Press Save on any entry and it will appear here.',
      'empty.noQueryTitle': 'No results for "{q}"', 'empty.noQueryText': 'Try a tag, function, or language name, such as "form", "loop", or "python".',
      'empty.noFilterTitle': 'No syntax in this filter', 'empty.noFilterText': 'The selected category and language combination has no entries.',
      'empty.resetBtn': 'Clear all filters',
      'cat.markup': 'Markup Languages', 'cat.prog': 'Programming Languages', 'word.sintaks': 'syntax entries',
      'profil.kategori': 'Category', 'profil.kegunaan': 'Main use', 'profil.tempat': 'Runs on', 'profil.unggul': 'Strength', 'profil.kapan': 'When to choose',
      'nav.all': 'All languages', 'about.title': 'About KamusKode', 'about.close': 'Close',
      'about.intro': 'KamusKode is an Indonesian syntax reference for beginners. Each language includes a short profile, explanations, code examples, and real output.',
      'about.li1': 'Search syntax with the search box; press / to focus it quickly.',
      'about.li2': 'Filter by category in the sidebar, or pick a specific language.',
      'about.li3': 'Save favorites with the Save button; find them under the Reference menu.',
      'about.li4': 'Copy code with the Copy button on each example.',
      'about.li5': 'Switch light/dark theme and interface language from the top bar.'
    },
    zh: {
      'nav.katalog': '\u76ee\u5f55', 'nav.referensi': '\u53c2\u8003', 'nav.tentang': '\u5173\u4e8e',
      'nav.markup': '\u6807\u8bb0\u8bed\u8a00', 'nav.prog': '\u7f16\u7a0b\u8bed\u8a00',
      'nav.fav': '\u6211\u7684\u6536\u85cf', 'nav.reset': '\u6e05\u9664\u5168\u90e8\u7b5b\u9009',
      'top.search': '\u641c\u7d22', 'top.searchLabel': '\u641c\u7d22\u8bed\u6cd5\u3001\u51fd\u6570\u6216\u8bed\u8a00',
      'top.start': '\u5f00\u59cb\u5b66\u4e60', 'top.theme': '\u5207\u6362\u6d45\u8272\u6216\u6df1\u8272\u4e3b\u9898',
      'top.lang': '\u9009\u62e9\u754c\u9762\u8bed\u8a00',
      'side.kategori': '\u5206\u7c7b', 'side.semua': '\u5168\u90e8', 'side.markup': '\u6807\u8bb0', 'side.prog': '\u7f16\u7a0b',
      'side.fav': '\u4ec5\u6536\u85cf', 'side.bahasa': '\u8bed\u8a00', 'side.allLang': '\u5168\u90e8\u8bed\u8a00',
      'status.loading': '\u6b63\u5728\u52a0\u8f7d\u8bed\u6cd5\u5217\u8868', 'status.showing': '\u663e\u793a {total} \u6761\u8bed\u6cd5\u4e2d\u7684 {n} \u6761',
      'card.usage': '\u4e3b\u8981\u7528\u9014', 'card.understand': '\u7406\u89e3\u8981\u70b9', 'card.example': '\u4f7f\u7528\u793a\u4f8b',
      'card.save': '\u6536\u85cf', 'card.saved': '\u5df2\u6536\u85cf', 'card.copy': '\u590d\u5236', 'card.copied': '\u5df2\u590d\u5236', 'card.copyFail': '\u590d\u5236\u5931\u8d25',
      'card.result': '\u7ed3\u679c\uff1a', 'card.ariaSave': '\u6dfb\u52a0\u5230\u6536\u85cf\uff1a', 'card.ariaUnsave': '\u4ece\u6536\u85cf\u79fb\u9664\uff1a',
      'int.core': '\u6838\u5fc3\uff1a', 'int.auto': '\u5148\u7406\u89e3\u8be5\u8bed\u6cd5\u7684\u4f7f\u7528\u573a\u666f\uff0c\u518d\u60f3\u8c61\u8fd0\u884c\u540e\u7684\u7ed3\u679c\u3002',
      'int.when': '\u4f55\u65f6\u4f7f\u7528\uff1a', 'int.result': '\u53ef\u89c1\u7ed3\u679c\uff1a',
      'empty.noFavTitle': '\u8fd8\u6ca1\u6709\u6536\u85cf', 'empty.noFavText': '\u5728\u4efb\u610f\u6761\u76ee\u4e0a\u70b9\u51fb\u6536\u85cf\uff0c\u5b83\u5c31\u4f1a\u51fa\u73b0\u5728\u8fd9\u91cc\u3002',
      'empty.noQueryTitle': '\u6ca1\u6709\u201c{q}\u201d\u7684\u7ed3\u679c', 'empty.noQueryText': '\u8bd5\u8bd5\u6807\u7b7e\u540d\u3001\u51fd\u6570\u540d\u6216\u8bed\u8a00\u540d\uff0c\u4f8b\u5982\u201cform\u201d\u3001\u201cloop\u201d\u6216\u201cpython\u201d\u3002',
      'empty.noFilterTitle': '\u6b64\u7b5b\u9009\u4e0b\u6ca1\u6709\u8bed\u6cd5', 'empty.noFilterText': '\u6240\u9009\u5206\u7c7b\u4e0e\u8bed\u8a00\u7684\u7ec4\u5408\u6ca1\u6709\u6761\u76ee\u3002',
      'empty.resetBtn': '\u6e05\u9664\u5168\u90e8\u7b5b\u9009',
      'cat.markup': '\u6807\u8bb0\u8bed\u8a00', 'cat.prog': '\u7f16\u7a0b\u8bed\u8a00', 'word.sintaks': '\u6761\u8bed\u6cd5',
      'profil.kategori': '\u5206\u7c7b', 'profil.kegunaan': '\u4e3b\u8981\u7528\u9014', 'profil.tempat': '\u8fd0\u884c\u4f4d\u7f6e', 'profil.unggul': '\u4f18\u52bf', 'profil.kapan': '\u4f55\u65f6\u9009\u62e9',
      'nav.all': '\u5168\u90e8\u8bed\u8a00', 'about.title': '\u5173\u4e8e KamusKode', 'about.close': '\u5173\u95ed',
      'about.intro': 'KamusKode \u662f\u9762\u5411\u521d\u5b66\u8005\u7684\u7f16\u7a0b\u8bed\u6cd5\u53c2\u8003\uff0c\u6bcf\u79cd\u8bed\u8a00\u90fd\u5305\u542b\u7b80\u4ecb\u3001\u8bf4\u660e\u3001\u4ee3\u7801\u793a\u4f8b\u548c\u771f\u5b9e\u8f93\u51fa\u3002',
      'about.li1': '\u7528\u641c\u7d22\u6846\u67e5\u627e\u8bed\u6cd5\uff1b\u6309 / \u53ef\u5feb\u901f\u805a\u7126\u3002',
      'about.li2': '\u5728\u4fa7\u680f\u6309\u5206\u7c7b\u7b5b\u9009\uff0c\u6216\u9009\u62e9\u7279\u5b9a\u8bed\u8a00\u3002',
      'about.li3': '\u7528\u6536\u85cf\u6309\u94ae\u4fdd\u5b58\u6761\u76ee\uff1b\u5728\u53c2\u8003\u83dc\u5355\u4e2d\u67e5\u770b\u3002',
      'about.li4': '\u7528\u6bcf\u4e2a\u793a\u4f8b\u4e0a\u7684\u590d\u5236\u6309\u94ae\u590d\u5236\u4ee3\u7801\u3002',
      'about.li5': '\u5728\u9876\u90e8\u5de5\u5177\u680f\u5207\u6362\u6df1\u6d45\u8272\u4e3b\u9898\u548c\u754c\u9762\u8bed\u8a00\u3002'
    },
    ja: {
      'nav.katalog': '\u30ab\u30bf\u30ed\u30b0', 'nav.referensi': '\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9', 'nav.tentang': '\u6982\u8981',
      'nav.markup': '\u30de\u30fc\u30af\u30a2\u30c3\u30d7\u8a00\u8a9e', 'nav.prog': '\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e',
      'nav.fav': '\u304a\u6c17\u306b\u5165\u308a', 'nav.reset': '\u3059\u3079\u3066\u306e\u30d5\u30a3\u30eb\u30bf\u3092\u89e3\u9664',
      'top.search': '\u691c\u7d22', 'top.searchLabel': '\u69cb\u6587\u30fb\u95a2\u6570\u30fb\u8a00\u8a9e\u3092\u691c\u7d22',
      'top.start': '\u5b66\u7fd2\u3092\u59cb\u3081\u308b', 'top.theme': '\u30e9\u30a4\u30c8\uff0f\u30c0\u30fc\u30af\u30c6\u30fc\u30de\u3092\u5207\u308a\u66ff\u3048',
      'top.lang': '\u8868\u793a\u8a00\u8a9e\u3092\u9078\u629e',
      'side.kategori': '\u30ab\u30c6\u30b4\u30ea', 'side.semua': '\u3059\u3079\u3066', 'side.markup': '\u30de\u30fc\u30af\u30a2\u30c3\u30d7', 'side.prog': '\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0',
      'side.fav': '\u304a\u6c17\u306b\u5165\u308a\u306e\u307f', 'side.bahasa': '\u8a00\u8a9e', 'side.allLang': '\u3059\u3079\u3066\u306e\u8a00\u8a9e',
      'status.loading': '\u69cb\u6587\u30ea\u30b9\u30c8\u3092\u8aad\u307f\u8fbc\u307f\u4e2d', 'status.showing': '{total} \u4ef6\u4e2d {n} \u4ef6\u3092\u8868\u793a',
      'card.usage': '\u4e3b\u306a\u7528\u9014', 'card.understand': '\u7406\u89e3\u306e\u30dd\u30a4\u30f3\u30c8', 'card.example': '\u4f7f\u7528\u4f8b',
      'card.save': '\u4fdd\u5b58', 'card.saved': '\u4fdd\u5b58\u6e08\u307f', 'card.copy': '\u30b3\u30d4\u30fc', 'card.copied': '\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f', 'card.copyFail': '\u30b3\u30d4\u30fc\u5931\u6557',
      'card.result': '\u7d50\u679c\uff1a', 'card.ariaSave': '\u304a\u6c17\u306b\u5165\u308a\u306b\u8ffd\u52a0\uff1a', 'card.ariaUnsave': '\u304a\u6c17\u306b\u5165\u308a\u304b\u3089\u524a\u9664\uff1a',
      'int.core': '\u8981\u70b9\uff1a', 'int.auto': '\u307e\u305a\u3053\u306e\u69cb\u6587\u304c\u4f7f\u308f\u308c\u308b\u5834\u9762\u3092\u7406\u89e3\u3057\u3001\u305d\u306e\u7d50\u679c\u3092\u30a4\u30e1\u30fc\u30b8\u3057\u307e\u3057\u3087\u3046\u3002',
      'int.when': '\u4f7f\u3046\u5834\u9762\uff1a', 'int.result': '\u8868\u793a\u3055\u308c\u308b\u7d50\u679c\uff1a',
      'empty.noFavTitle': '\u304a\u6c17\u306b\u5165\u308a\u306f\u307e\u3060\u3042\u308a\u307e\u305b\u3093', 'empty.noFavText': '\u4efb\u610f\u306e\u9805\u76ee\u3067\u4fdd\u5b58\u3092\u62bc\u3059\u3068\u3001\u3053\u3053\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002',
      'empty.noQueryTitle': '\u300c{q}\u300d\u306e\u7d50\u679c\u306f\u3042\u308a\u307e\u305b\u3093', 'empty.noQueryText': '\u30bf\u30b0\u540d\u30fb\u95a2\u6570\u540d\u30fb\u8a00\u8a9e\u540d\u3092\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      'empty.noFilterTitle': '\u3053\u306e\u30d5\u30a3\u30eb\u30bf\u306b\u69cb\u6587\u306f\u3042\u308a\u307e\u305b\u3093', 'empty.noFilterText': '\u9078\u629e\u3057\u305f\u30ab\u30c6\u30b4\u30ea\u3068\u8a00\u8a9e\u306e\u7d44\u307f\u5408\u308f\u305b\u306b\u9805\u76ee\u304c\u3042\u308a\u307e\u305b\u3093\u3002',
      'empty.resetBtn': '\u3059\u3079\u3066\u306e\u30d5\u30a3\u30eb\u30bf\u3092\u89e3\u9664',
      'cat.markup': '\u30de\u30fc\u30af\u30a2\u30c3\u30d7\u8a00\u8a9e', 'cat.prog': '\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e', 'word.sintaks': '\u69cb\u6587',
      'profil.kategori': '\u30ab\u30c6\u30b4\u30ea', 'profil.kegunaan': '\u4e3b\u306a\u7528\u9014', 'profil.tempat': '\u5b9f\u884c\u5834\u6240', 'profil.unggul': '\u5f37\u307f', 'profil.kapan': '\u9078\u3076\u57fa\u6e96',
      'nav.all': '\u3059\u3079\u3066\u306e\u8a00\u8a9e', 'about.title': 'KamusKode \u306b\u3064\u3044\u3066', 'about.close': '\u9589\u3058\u308b',
      'about.intro': 'KamusKode \u306f\u521d\u5fc3\u8005\u5411\u3051\u306e\u65e5\u672c\u8a9e\u69cb\u6587\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u3067\u3059\u3002\u5404\u8a00\u8a9e\u306b\u6982\u8981\u3001\u8aac\u660e\u3001\u30b3\u30fc\u30c9\u4f8b\u3001\u5b9f\u969b\u306e\u51fa\u529b\u304c\u3042\u308a\u307e\u3059\u3002',
      'about.li1': '\u691c\u7d22\u30dc\u30c3\u30af\u30b9\u3067\u69cb\u6587\u3092\u691c\u7d22\u3002/ \u30ad\u30fc\u3067\u5373\u30d5\u30a9\u30fc\u30ab\u30b9\u3002',
      'about.li2': '\u30b5\u30a4\u30c9\u30d0\u30fc\u3067\u30ab\u30c6\u30b4\u30ea\u3092\u30d5\u30a3\u30eb\u30bf\u3001\u307e\u305f\u306f\u8a00\u8a9e\u3092\u9078\u629e\u3002',
      'about.li3': '\u4fdd\u5b58\u30dc\u30bf\u30f3\u3067\u304a\u6c17\u306b\u5165\u308a\u3092\u4fdd\u5b58\u3002\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30e1\u30cb\u30e5\u30fc\u3067\u78ba\u8a8d\u3002',
      'about.li4': '\u5404\u4f8b\u306e\u30b3\u30d4\u30fc\u30dc\u30bf\u30f3\u3067\u30b3\u30fc\u30c9\u3092\u30b3\u30d4\u30fc\u3002',
      'about.li5': '\u4e0a\u90e8\u30d0\u30fc\u3067\u30e9\u30a4\u30c8/\u30c0\u30fc\u30af\u30c6\u30fc\u30de\u3068\u8868\u793a\u8a00\u8a9e\u3092\u5207\u308a\u66ff\u3048\u3002'
    }
  };

  var LANG_KEY = 'kamuskode:bahasa';
  var LANGS = ['id', 'en', 'zh', 'ja'];

  function detect() {
    var saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) { saved = null; }
    if (saved && LANGS.indexOf(saved) !== -1) return saved;
    var n = (navigator.language || 'id').slice(0, 2).toLowerCase();
    return LANGS.indexOf(n) !== -1 ? n : 'id';
  }

  var current = detect();

  function t(key, vars) {
    var s = (DICT[current] && DICT[current][key]) || DICT.id[key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }

  function apply(root) {
    root = root || document;
    Array.prototype.forEach.call(root.querySelectorAll('[data-i18n]'), function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    Array.prototype.forEach.call(root.querySelectorAll('[data-i18n-label]'), function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-label')));
    });
    Array.prototype.forEach.call(root.querySelectorAll('[data-i18n-placeholder]'), function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    document.documentElement.setAttribute('lang', current === 'zh' ? 'zh-CN' : current);
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    current = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* diabaikan */ }
    apply();
    if (typeof window.onLangChange === 'function') window.onLangChange(lang);
  }

  window.I18N = { t: t, apply: apply, setLang: setLang, getLang: function () { return current; } };
})();
