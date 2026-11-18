/* KamusKode - pelengkap sintaks MARKUP. Dimuat setelah kodeData.markup2.js.
 * Setiap entri: name, usage, pemahaman{inti,poin[]}, code[], output.
 * File ini menambah entri baru ke bahasa yang sudah ada (id sama).
 */
(function () {
  if (!window.KODE_DATA || !Array.isArray(window.KODE_DATA.languages)) return;
  var L = window.KODE_DATA.languages;
  function lang(id) { for (var i = 0; i < L.length; i++) if (L[i].id === id) return L[i]; return null; }
  function add(id, entries) { var l = lang(id); if (l && Array.isArray(l.entries)) l.entries = l.entries.concat(entries); }

  add('html', [
    {
      name: '<ul>, <ol>, <li>',
      usage: 'Daftar. <ul> untuk daftar tak berurut (poin), <ol> untuk berurut (nomor), tiap item dibungkus <li>.',
      pemahaman: { inti: 'Pilih <ul> bila urutan tidak penting, <ol> bila urutan bermakna.', poin: ['Jangan menaruh <li> di luar <ul>/<ol>.', '<ol> bisa diatur dengan atribut type dan start.'] },
      code: ['<ul>', '  <li>Apel</li>', '  <li>Jeruk</li>', '</ul>', '<ol>', '  <li>Cuci beras</li>', '  <li>Masak</li>', '</ol>'],
      output: 'Daftar berpoin diikuti daftar bernomor 1, 2.'
    },
    {
      name: '<table>, <tr>, <td>, <th>',
      usage: 'Tabel data. <tr> baris, <th> sel judul, <td> sel data. Gunakan <thead>, <tbody>, <caption> untuk struktur yang jelas.',
      pemahaman: { inti: 'Tabel hanya untuk data tabular, bukan untuk layout halaman.', poin: ['<th scope="col"> membantu pembaca layar.', 'Gunakan <caption> sebagai judul tabel.'] },
      code: ['<table>', '  <caption>Nilai Siswa</caption>', '  <thead>', '    <tr><th scope="col">Nama</th><th scope="col">Nilai</th></tr>', '  </thead>', '  <tbody>', '    <tr><td>Rina</td><td>90</td></tr>', '  </tbody>', '</table>'],
      output: 'Tabel dengan judul, baris kepala Nama/Nilai, dan satu baris data.'
    },
    {
      name: '<button>',
      usage: 'Tombol yang bisa diklik. Selalu pakai <button>, bukan <div onclick>, agar bisa difokus dan diaktifkan dengan keyboard.',
      pemahaman: { inti: 'Elemen semantik memberi perilaku aksesibilitas gratis.', poin: ['Atribut type default submit; set type="button" bila bukan pengirim form.'] },
      code: ['<button type="button" onclick="alert(\'Halo\')">Klik saya</button>'],
      output: 'Tombol yang menampilkan alert "Halo" saat diklik.'
    }
  ]);

  add('css', [
    {
      name: 'Pseudo-class (:hover, :focus, :nth-child)',
      usage: 'Gaya untuk keadaan atau posisi elemen. :hover saat kursor di atas, :focus saat fokus keyboard, :nth-child untuk pola urutan.',
      pemahaman: { inti: 'Pseudo-class menambah interaksi tanpa JavaScript.', poin: [':focus-visible hanya saat fokus keyboard.', ':nth-child(odd) untuk baris ganjil.'] },
      code: ['a:hover { color: #0284c7; }', 'input:focus-visible { outline: 2px solid #0284c7; }', 'li:nth-child(odd) { background: #f4f4f5; }'],
      output: 'Tautan berubah biru saat hover, input punya outline saat fokus keyboard, baris ganjil berlatar abu muda.'
    },
    {
      name: 'Pseudo-element (::before, ::after)',
      usage: 'Menyisipkan konten dekoratif sebelum/sesudah elemen. Wajib punya properti content.',
      pemahaman: { inti: 'Bukan untuk konten bermakna; hanya hiasan.', poin: ['content: "" untuk bentuk/ikon.', 'Posisikan absolut bila perlu overlay.'] },
      code: ['.badge::after {', '  content: " âœ“";', '  color: #16a34a;', '}'],
      output: 'Setiap elemen .badge mendapat tanda centang hijau setelah teksnya.'
    },
    {
      name: 'Variabel CSS (--nama) dan var()',
      usage: 'Menyimpan nilai sekali lalu dipakai berulang. Ditulis di :root dan dipanggil dengan var().',
      pemahaman: { inti: 'Memudahkan ganti tema dan konsistensi.', poin: ['var(--nama, fallback) memberi nilai cadangan.', 'Bisa ditimpa per selector untuk tema.'] },
      code: [':root { --brand: #0284c7; }', 'button { background: var(--brand); }', '.dark { --brand: #38bdf8; }'],
      output: 'Tombol memakai warna --brand; bisa berganti tanpa mengubah aturan button.'
    },
    {
      name: 'Transisi dan animasi (transition, @keyframes)',
      usage: 'transition menghaluskan perubahan properti. @keyframes + animation membuat gerakan berulang.',
      pemahaman: { inti: 'Animasi halus tanpa JS; hargai prefers-reduced-motion.', poin: ['transition: all bisa berat; sebut properti spesifik.', 'Bungkus animasi dengan @media (prefers-reduced-motion: reduce).'] },
      code: ['.card { transition: transform 150ms ease, box-shadow 150ms ease; }', '.card:hover { transform: translateY(-2px); }', '@keyframes spin { to { transform: rotate(360deg); } }', '.loader { animation: spin 1s linear infinite; }'],
      output: 'Kartu terangkat sedikit saat hover dan pemuat berputar terus.'
    }
  ]);

  add('xml', [
    {
      name: 'Prosesor instruksi (<?...?>)',
      usage: 'Instruksi untuk aplikasi pemroses, misalnya xml-stylesheet untuk mengaitkan XSL.',
      pemahaman: { inti: 'Bukan data; hanya petunjuk ke parser/aplikasi.', poin: ['Sering dipakai untuk mengaitkan XSLT.'] },
      code: ['<?xml-stylesheet type="text/xsl" href="tampilan.xsl"?>'],
      output: 'Parser dapat memakai tampilan.xsl untuk merender dokumen.'
    },
    {
      name: 'DTD (DOCTYPE)',
      usage: 'Mendefinisikan aturan struktur dokumen. Internal subset ditulis di dalam [ ].',
      pemahaman: { inti: 'Deklarasi skema lama; di sistem modern lebih umum XSD.', poin: ['Berguna untuk validasi sederhana.'] },
      code: ['<!DOCTYPE katalog [', '  <!ELEMENT katalog (produk*)>', '  <!ELEMENT produk (#PCDATA)>', ']>'],
      output: 'Dokumen divalidasi: katalog berisi nol atau lebih produk.'
    }
  ]);

  add('markdown', [
    {
      name: 'Tabel',
      usage: 'Membuat tabel dengan pipa | dan baris pemisah ---. Titik dua mengatur perataan.',
      pemahaman: { inti: 'Baris kedua wajib berisi pemisah.', poin: [':--- kiri, :---: tengah, ---: kanan.'] },
      code: ['| Nama | Nilai |', '|:---|---:|', '| Rina | 90 |', '| Budi | 85 |'],
      output: 'Tabel dua kolom; kolom Nilai rata kanan.'
    },
    {
      name: 'Tautan referensi dan gambar referensi',
      usage: 'Mendefinisikan alamat sekali lalu dipakai berkali-kali lewat label.',
      pemahaman: { inti: 'Rapi untuk dokumen panjang dengan banyak tautan sama.', poin: ['Definisi di mana saja dalam dokumen.'] },
      code: ['[MDN][mdn] dan [Dokumentasi][mdn]', '', '[mdn]: https://developer.mozilla.org'],
      output: 'Dua tautan menuju alamat yang sama tanpa menulis URL dua kali.'
    },
    {
      name: 'Checkbox tugas',
      usage: 'Daftar tugas dengan [ ] dan [x]. Didukung banyak platform (GitHub).',
      pemahaman: { inti: 'Ringkas untuk to-do list di issue/PR.', poin: ['[x] untuk selesai.'] },
      code: ['- [x] Menulis HTML', '- [ ] Menulis CSS'],
      output: 'Satu tugas selesai dan satu belum.'
    }
  ]);
})();
