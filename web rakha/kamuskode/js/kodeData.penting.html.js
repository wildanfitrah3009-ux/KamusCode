/* KamusKode - pelengkap HTML populer (lanjutan). Dimuat setelah kodeData.lengkap.markup.js. */
(function () {
  if (!window.KODE_DATA || !Array.isArray(window.KODE_DATA.languages)) return;
  var L = window.KODE_DATA.languages;
  function lang(id) { for (var i = 0; i < L.length; i++) if (L[i].id === id) return L[i]; return null; }
  function add(id, entries) { var l = lang(id); if (l && Array.isArray(l.entries)) l.entries = l.entries.concat(entries); }

  add('html', [
    {
      name: 'Struktur semantik: <header>, <nav>, <main>, <footer>',
      usage: 'Membagi halaman sesuai peran tiap bagian. Membantu pembaca layar, mesin pencari, dan perawatan kode.',
      pemahaman: { inti: 'Satu <main> per halaman; <header>/<footer> boleh berulang dalam section.', poin: ['<nav> untuk kumpulan tautan navigasi.', 'Hindari memakai <div> untuk semua bagian.'] },
      code: ['<header>Judul Situs</header>', '<nav><a href="/">Beranda</a></nav>', '<main>', '  <h1>Selamat datang</h1>', '</main>', '<footer>&copy; 2026</footer>'],
      output: 'Halaman dengan kepala, navigasi, isi utama, dan kaki yang jelas perannya.'
    },
    {
      name: '<select> dan <option>',
      usage: 'Dropdown pilihan. Hubungkan dengan <label> lewat for/id. multiple memungkinkan pilih banyak.',
      pemahaman: { inti: 'Nilai yang dikirim adalah value, bukan teks tampilan.', poin: ['<optgroup> mengelompokkan pilihan.'] },
      code: ['<label for="kota">Kota</label>', '<select id="kota" name="kota">', '  <option value="sby">Surabaya</option>', '  <option value="jkt">Jakarta</option>', '</select>'],
      output: 'Dropdown berisi Surabaya dan Jakarta; form mengirim value sby atau jkt.'
    },
    {
      name: '<textarea>',
      usage: 'Kolom teks multi-baris. Isi teks awal diletakkan di antara tag pembuka dan penutup.',
      pemahaman: { inti: 'Gunakan rows dan cols untuk ukuran awal, atau CSS.', poin: ['Jangan pakai <input> untuk teks panjang.'] },
      code: ['<label for="pesan">Pesan</label>', '<textarea id="pesan" name="pesan" rows="4"></textarea>'],
      output: 'Kotak teks empat baris untuk menulis pesan panjang.'
    },
    {
      name: '<iframe>',
      usage: 'Menyisipkan halaman lain di dalam halaman. Selalu beri title dan batasi dengan sandbox untuk keamanan.',
      pemahaman: { inti: 'iframe membawa risiko keamanan; pakai sandbox dan sumber tepercaya.', poin: ['loading="lazy" menunda pemuatan.'] },
      code: ['<iframe src="https://example.com" title="Contoh"', '        width="480" height="320" loading="lazy"', '        sandbox="allow-scripts"></iframe>'],
      output: 'Kotak 480x320 menampilkan halaman example.com dengan skrip dibatasi.'
    },
    {
      name: 'Atribut data-* dan id/class',
      usage: 'data-* menyimpan data khusus tanpa merusak HTML. id unik untuk satu elemen, class bisa berulang.',
      pemahaman: { inti: 'data-* diakses lewat dataset di JavaScript.', poin: ['id tidak boleh dobel dalam satu halaman.'] },
      code: ['<button class="btn" id="simpan" data-id="7" data-aksi="simpan">Simpan</button>'],
      output: 'JavaScript membaca nilai lewat btn.dataset.id ("7") dan btn.dataset.aksi ("simpan").'
    },
    {
      name: '<details> dan <summary>',
      usage: 'Membuat bagian yang bisa dibuka-tutup tanpa JavaScript. <summary> adalah judul yang selalu terlihat.',
      pemahaman: { inti: 'Cocok untuk FAQ dan info tambahan.', poin: ['Atribut open membuat langsung terbuka.'] },
      code: ['<details>', '  <summary>Apa itu HTML?</summary>', '  <p>Bahasa markup untuk halaman web.</p>', '</details>'],
      output: 'Baris judul yang bisa diklik untuk menampilkan atau menyembunyikan paragraf.'
    },
    {
      name: '<picture> dan srcset',
      usage: 'Menyediakan beberapa versi gambar untuk ukuran layar atau format berbeda. Browser memilih yang paling cocok.',
      pemahaman: { inti: 'Menghemat bandwidth di layar kecil.', poin: ['<source> menetapkan media/type.', '<img> wajib ada sebagai cadangan.'] },
      code: ['<picture>', '  <source media="(min-width: 800px)" srcset="besar.webp" type="image/webp">', '  <img src="kecil.jpg" alt="Pemandangan gunung">', '</picture>'],
      output: 'Layar lebar memuat besar.webp; layar kecil memuat kecil.jpg.'
    },
    {
      name: 'Komentar <!-- -->',
      usage: 'Catatan yang tidak dirender. Berguna untuk memberi tanda bagian kode atau menonaktifkan sementara.',
      pemahaman: { inti: 'Komentar terlihat di View Source; jangan simpan rahasia di sana.', poin: ['Tidak boleh memuat -- di dalamnya.'] },
      code: ['<!-- Bagian header mulai -->', '<header>Judul</header>', '<!-- Bagian header selesai -->'],
      output: 'Header tampil; dua komentar tidak terlihat di halaman.'
    }
  ]);
})();
