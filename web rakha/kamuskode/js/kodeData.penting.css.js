/* KamusKode - pelengkap CSS populer (lanjutan). */
(function () {
  if (!window.KODE_DATA || !Array.isArray(window.KODE_DATA.languages)) return;
  var L = window.KODE_DATA.languages;
  function lang(id) { for (var i = 0; i < L.length; i++) if (L[i].id === id) return L[i]; return null; }
  function add(id, entries) { var l = lang(id); if (l && Array.isArray(l.entries)) l.entries = l.entries.concat(entries); }

  add('css', [
    {
      name: 'position (static, relative, absolute, fixed, sticky)',
      usage: 'Mengatur cara elemen ditempatkan. relative bergeser dari posisi normal; absolute menempel ke induk berposisi; fixed menempel ke viewport; sticky menempel saat scroll melewati batas.',
      pemahaman: { inti: 'Induk dari elemen absolute harus punya position selain static.', poin: ['top/right/bottom/left bekerja pada elemen non-static.', 'z-index mengatur tumpukan.'] },
      code: ['.induk { position: relative; }', '.badge {', '  position: absolute;', '  top: 8px; right: 8px;', '}', '.kepala { position: sticky; top: 0; }'],
      output: 'Badge menempel di pojok kanan atas induknya, dan kepala halaman tetap terlihat saat digulir.'
    },
    {
      name: 'z-index',
      usage: 'Mengatur urutan tumpukan elemen berposisi. Nilai lebih besar tampil di atas.',
      pemahaman: { inti: 'Hanya berlaku untuk elemen berposisi atau flex/grid item.', poin: ['Hindari angka ekstrem seperti 9999.'] },
      code: ['.modal { position: fixed; z-index: 100; }', '.overlay { position: fixed; z-index: 90; }'],
      output: 'Modal tampil di atas overlay saat keduanya terbuka.'
    },
    {
      name: 'display (block, inline, inline-block, none, flex, grid)',
      usage: 'Menentukan perilaku kotak elemen. none menyembunyikan sepenuhnya (tidak memakan ruang).',
      pemahaman: { inti: 'visibility:hidden menyembunyikan tetapi tetap memakan ruang.', poin: ['inline tidak menerima width/height.'] },
      code: ['.sembunyi { display: none; }', '.baris { display: flex; gap: 8px; }', '.label { display: inline-block; padding: 4px 8px; }'],
      output: '.sembunyi tidak tampil; .baris menata anak menyamping; .label seperti inline tetapi bisa diberi padding.'
    },
    {
      name: 'font dan line-height',
      usage: 'font menggabungkan ukuran, ketebalan, dan jenis huruf. line-height mengatur jarak antar baris teks.',
      pemahaman: { inti: 'line-height tanpa satuan (1.6) lebih fleksibel daripada piksel.', poin: ['Gunakan system font stack untuk performa.'] },
      code: ['body {', '  font: 16px/1.6 system-ui, sans-serif;', '  line-height: 1.6;', '}'],
      output: 'Teks berukuran 16px dengan jarak baris 1.6 kali ukuran huruf.'
    },
    {
      name: 'opacity dan box-shadow',
      usage: 'opacity mengatur transparansi (0 transparan, 1 penuh). box-shadow menambah bayangan di luar kotak.',
      pemahaman: { inti: 'opacity memengaruhi seluruh isi; untuk hanya latar, pakai rgba/hsla.', poin: ['Bayangan halus: blur besar, offset kecil.'] },
      code: ['.kartu {', '  opacity: 0.9;', '  box-shadow: 0 2px 8px rgba(0,0,0,0.15);', '}'],
      output: 'Kartu sedikit transparan dengan bayangan lembut di bawahnya.'
    },
    {
      name: 'overflow',
      usage: 'Mengatur isi yang melebihi kotak: visible (default), hidden, scroll, auto.',
      pemahaman: { inti: 'auto menampilkan scrollbar hanya bila perlu.', poin: ['Berguna untuk membuat area gulir dalam kartu.'] },
      code: ['.daftar { max-height: 240px; overflow-y: auto; }'],
      output: 'Daftar maksimal 240px; muncul scrollbar bila isinya lebih tinggi.'
    },
    {
      name: '!important',
      usage: 'Memaksa satu deklarasi mengalahkan aturan lain. Gunakan sangat jarang.',
      pemahaman: { inti: 'Tanda bahwa spesifisitas CSS perlu dirapikan.', poin: ['Sulit ditimpa; hindari bila bisa.'] },
      code: ['.teks { color: red !important; }'],
      output: 'Warna merah dipakai walau ada aturan lain yang lebih spesifik.'
    },
    {
      name: 'Aturan @media bertingkat dan prefers-*',
      usage: 'Menerapkan gaya sesuai preferensi pengguna, misalnya tema gelap atau animasi dikurangi.',
      pemahaman: { inti: 'Hormati prefers-reduced-motion dan prefers-color-scheme.', poin: ['Media query bisa digabung dengan and.'] },
      code: ['@media (prefers-color-scheme: dark) {', '  body { background: #09090b; color: #fafafa; }', '}', '@media (prefers-reduced-motion: reduce) {', '  * { animation: none !important; transition: none !important; }', '}'],
      output: 'Tema gelap aktif bila sistem memakainya; animasi dimatikan bila pengguna memintanya.'
    },
    {
      name: 'transform (translate, rotate, scale)',
      usage: 'Menggeser, memutar, atau menskalakan elemen tanpa memengaruhi tata letak sekitarnya.',
      pemahaman: { inti: 'Lebih murah secara performa daripada mengubah top/left.', poin: ['Bisa digabung: translateY(-2px) scale(1.02).'] },
      code: ['.tombol { transition: transform 150ms ease; }', '.tombol:hover { transform: translateY(-2px) scale(1.02); }'],
      output: 'Tombol sedikit terangkat dan membesar saat hover.'
    },
    {
      name: 'border-radius, border, outline',
      usage: 'border-radius membulatkan sudut, border memberi garis tepi, outline adalah garis luar yang tidak memengaruhi tata letak.',
      pemahaman: { inti: 'outline sangat cocok untuk indikator fokus keyboard.', poin: ['Jangan hapus outline tanpa pengganti.'] },
      code: ['button {', '  border: 1px solid #d4d4d8;', '  border-radius: 8px;', '}', 'button:focus-visible { outline: 2px solid #0284c7; outline-offset: 2px; }'],
      output: 'Tombol bersudut bulat dan bergaris halus, dengan outline biru saat fokus keyboard.'
    }
  ]);
})();
