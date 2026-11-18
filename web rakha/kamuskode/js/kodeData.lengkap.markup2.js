/* KamusKode - pelengkap sintaks JSON, YAML, SVG. Dimuat setelah kodeData.markup2.js. */
(function () {
  if (!window.KODE_DATA || !Array.isArray(window.KODE_DATA.languages)) return;
  var L = window.KODE_DATA.languages;
  function lang(id) { for (var i = 0; i < L.length; i++) if (L[i].id === id) return L[i]; return null; }
  function add(id, entries) { var l = lang(id); if (l && Array.isArray(l.entries)) l.entries = l.entries.concat(entries); }

  add('json', [
    {
      name: 'Escape karakter',
      usage: 'Kutip ganda di dalam string ditulis dengan backslash di depannya, dan backslash itu sendiri juga perlu di-escape. Karakter kontrol seperti pindah baris ditulis sebagai dua karakter: backslash lalu n.',
      pemahaman: { inti: 'JSON tidak mengizinkan newline mentah di dalam string.', poin: ['Backslash harus di-escape jadi dua backslash.'] },
      code: ['{', '  "pesan": "Dia berkata: \\"Halo\\"",', '  "baris": "baris1\\nbaris2"', '}'],
      output: 'Nilai pesan memuat tanda kutip, nilai baris memuat pindah baris.'
    },
    {
      name: 'JSONL (JSON Lines)',
      usage: 'Satu objek JSON per baris, tanpa array pembungkus. Cocok untuk log atau streaming data besar.',
      pemahaman: { inti: 'Tiap baris harus objek JSON valid sendiri.', poin: ['Tidak ada koma antar baris.', 'Mudah diproses baris demi baris.'] },
      code: ['{"id":1,"nama":"Sari"}', '{"id":2,"nama":"Budi"}'],
      output: 'Dua record terpisah, masing-masing bisa di-parse sendiri.'
    }
  ]);

  add('yaml', [
    {
      name: 'Multi-dokumen (--- dan ...)',
      usage: 'Satu file memuat beberapa dokumen, tiap dokumen dibuka dengan ---.',
      pemahaman: { inti: 'Berguna untuk manifes Kubernetes atau konfigurasi bertahap.', poin: ['--- pemisah antar dokumen.'] },
      code: ['---', 'nama: layanan-a', 'port: 80', '---', 'nama: layanan-b', 'port: 81'],
      output: 'Dua dokumen konfigurasi dalam satu file.'
    },
    {
      name: 'Tag !! dan tipe eksplisit',
      usage: 'Memaksa tipe nilai, misalnya !!str agar "123" dibaca sebagai teks.',
      pemahaman: { inti: 'Kadang parser menebak tipe; tag menghilangkan ambiguitas.', poin: ['!!str untuk teks.'] },
      code: ['kode: !!str 007'],
      output: 'Nilai kode tersimpan sebagai teks "007", bukan angka 7.'
    }
  ]);

  add('svg', [
    {
      name: '<polygon>',
      usage: 'Bentuk tertutup dari banyak titik. Berbeda dari polyline, polygon otomatis menutup ke titik awal.',
      pemahaman: { inti: 'Untuk segi banyak berisi warna.', poin: ['points berisi pasangan x,y.'] },
      code: ['<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">', '  <polygon points="50,10 90,90 10,90" fill="#0284c7" />', '</svg>'],
      output: 'Segitiga biru dengan puncak di atas.'
    },
    {
      name: 'Gradien (linearGradient, radialGradient)',
      usage: 'Mengisi bentuk dengan perpindahan warna. Didefinisikan di <defs> lalu dipanggil lewat url(#id).',
      pemahaman: { inti: 'Gradien didefinisikan sekali, dipakai berulang.', poin: ['<stop offset> menentukan warna pada posisi.'] },
      code: ['<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">', '  <defs>', '    <linearGradient id="g">', '      <stop offset="0%" stop-color="#0284c7" />', '      <stop offset="100%" stop-color="#38bdf8" />', '    </linearGradient>', '  </defs>', '  <rect width="100" height="100" fill="url(#g)" />', '</svg>'],
      output: 'Persegi dengan gradien biru dari kiri ke kanan.'
    },
    {
      name: 'Transform (translate, rotate, scale)',
      usage: 'Menggeser, memutar, atau menskalakan elemen. Bisa digabung dan diterapkan pada <g>.',
      pemahaman: { inti: 'Transform tidak mengubah geometri, hanya tampilan.', poin: ['Urutan transform berpengaruh.'] },
      code: ['<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">', '  <rect x="10" y="10" width="30" height="30" fill="#0284c7"', '        transform="rotate(45 25 25)" />', '</svg>'],
      output: 'Persegi diputar 45 derajat mengelilingi titik pusatnya.'
    }
  ]);
})();
