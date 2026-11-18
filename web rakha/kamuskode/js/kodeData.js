/*
 * KamusKode - database sintaks.
 * Struktur: KODE_DATA.categories (2 kategori) dan KODE_DATA.languages (8 bahasa).
 * Setiap entri: name, usage (kegunaan), code (array baris), output (hasil yang terlihat).
 */
window.KODE_DATA = {
  categories: {
    markup: { label: 'Bahasa Markup' },
    prog: { label: 'Bahasa Pemrograman' }
  },
  languages: [
    {
      id: 'html', name: 'HTML', category: 'markup', codeLang: 'html',
      entries: [
        {
          name: '<div> dan <section>',
          usage: 'Pembungkus untuk mengelompokkan elemen. Pakai <section> kalau isinya bagian dengan topik sendiri (biasanya punya judul), pakai <div> kalau hanya butuh wadah untuk styling atau layout.',
          pemahaman: {
            inti: 'Pilih tag sesuai makna isinya, bukan sekadar tampilan. <section> bercerita "ini satu bagian bermakna"; <div> hanya "kotak netral".',
            poin: [
              'Pakai <section> bila bagian itu punya judul sendiri dan bisa berdiri sendiri.',
              'Pakai <div> untuk kebutuhan layout/styling yang tidak punya makna semantik.',
              'Hindari menumpuk <div> berlebihan; struktur yang bermakna lebih mudah dirawat dan lebih ramah pembaca layar.'
            ]
          },
          code: [
            '<section>',
            '  <h2>Fitur Utama</h2>',
            '  <div class="kartu">',
            '    <p>Pencarian cepat tanpa reload.</p>',
            '  </div>',
            '</section>'
          ],
          output: 'Browser menampilkan judul "Fitur Utama" dan satu paragraf di dalam wadah. Tampilannya masih polos sampai diberi CSS.'
        },
        {
          name: '<h1> sampai <h6> dan <p>',
          usage: 'Elemen teks dasar. Heading membuat hierarki judul (h1 paling penting, satu per halaman), sedangkan <p> dipakai untuk paragraf biasa. Hierarki yang rapi membantu pembaca dan mesin pencari.',
          code: [
            '<h1>Belajar Web</h1>',
            '<h2>Mulai dari HTML</h2>',
            '<p>HTML adalah kerangka halaman web.</p>'
          ],
          output: 'Judul besar "Belajar Web", sub-judul lebih kecil, lalu paragraf teks biasa.'
        },
        {
          name: '<a href>',
          usage: 'Membuat tautan ke halaman lain, bagian lain di halaman yang sama (lewat #id), atau alamat email. Gunakan teks tautan yang jelas, bukan sekadar "klik di sini".',
          code: [
            '<a href="https://developer.mozilla.org" target="_blank" rel="noopener">',
            '  Dokumentasi MDN',
            '</a>',
            '<a href="#kontak">Ke bagian kontak</a>'
          ],
          output: 'Dua tautan bergaris bawah. Yang pertama membuka MDN di tab baru, yang kedua menggulir ke elemen ber-id "kontak".'
        },
        {
          name: '<img>',
          usage: 'Menampilkan gambar. Atribut alt wajib diisi: dibaca pembaca layar dan tampil kalau gambar gagal dimuat. Tambahkan width dan height supaya halaman tidak melompat saat gambar selesai dimuat.',
          code: [
            '<img src="foto-kucing.jpg"',
            '     alt="Kucing oranye tidur di sofa"',
            '     width="400" height="300">'
          ],
          output: 'Gambar berukuran 400x300 piksel. Jika file tidak ditemukan, teks alt yang muncul.'
        },
        {
          name: '<video> dan <audio>',
          usage: 'Memutar video atau audio langsung di browser tanpa plugin. Atribut controls menampilkan tombol putar, jeda, dan volume. Teks di dalam tag menjadi cadangan untuk browser lama.',
          code: [
            '<video controls width="480" poster="cover.jpg">',
            '  <source src="demo.mp4" type="video/mp4">',
            '  Browser Anda tidak mendukung video.',
            '</video>'
          ],
          output: 'Pemutar video selebar 480 piksel dengan kontrol bawaan browser dan gambar sampul sebelum diputar.'
        },
        {
          name: '<form> dan <input>',
          usage: 'Membuat formulir untuk mengumpulkan data dari pengguna. Setiap input perlu <label> yang terhubung lewat for dan id. Atribut required membuat browser memeriksa isian sebelum dikirim.',
          code: [
            '<form action="/daftar" method="post">',
            '  <label for="email">Email</label>',
            '  <input type="email" id="email" name="email" required>',
            '  <button type="submit">Kirim</button>',
            '</form>'
          ],
          output: 'Kolom email dan tombol Kirim. Jika kolom kosong atau format email salah, browser menampilkan pesan validasi dan formulir tidak terkirim.'
        }
      ]
    },
    {
      id: 'css', name: 'CSS', category: 'markup', codeLang: 'css',
      entries: [
        {
          name: 'Selector (class, id, elemen)',
          usage: 'Selector menentukan elemen mana yang terkena aturan gaya. Class (.nama) bisa dipakai banyak elemen, id (#nama) untuk satu elemen unik, dan selector elemen (p, h1) mengenai semua tag sejenis.',
          code: [
            'p { color: #374151; }',
            '.judul { font-size: 2rem; }',
            '#header { background: #111827; }',
            'nav a:hover { color: #3b82f6; }'
          ],
          output: 'Semua paragraf berwarna abu tua, elemen ber-class judul menjadi besar, dan tautan di dalam nav berubah biru saat kursor di atasnya.'
        },
        {
          name: 'Warna dan latar (color, background)',
          usage: 'color mengatur warna teks, background mengatur latar elemen. Warna bisa ditulis dengan nama, hex (#0b0f19), rgb(), atau hsl(). Pastikan kontras teks dan latar cukup agar mudah dibaca.',
          code: [
            '.banner {',
            '  color: #e5e7eb;',
            '  background-color: #111827;',
            '  border: 1px solid #1f2937;',
            '}'
          ],
          output: 'Kotak bergaya gelap dengan teks terang dan garis tepi tipis.'
        },
        {
          name: 'Box model (margin, border, padding)',
          usage: 'Setiap elemen adalah kotak berlapis: content, padding (jarak ke isi), border, dan margin (jarak ke elemen lain). box-sizing: border-box membuat width sudah termasuk padding dan border, jadi hitungan ukuran lebih mudah.',
          code: [
            '.kotak {',
            '  box-sizing: border-box;',
            '  width: 300px;',
            '  padding: 16px;',
            '  border: 2px solid #3b82f6;',
            '  margin: 24px auto;',
            '}'
          ],
          output: 'Kotak selebar total 300px (termasuk padding dan border), berada di tengah halaman dengan jarak 24px dari elemen di atas dan bawahnya.'
        },
        {
          name: 'Flexbox (display: flex)',
          usage: 'Menata elemen anak dalam satu baris atau kolom dengan mudah. justify-content mengatur sumbu utama, align-items mengatur sumbu silang, gap memberi jarak antar item. Cocok untuk navbar, deretan tombol, dan pemusatan.',
          code: [
            '.menu {',
            '  display: flex;',
            '  justify-content: space-between;',
            '  align-items: center;',
            '  gap: 12px;',
            '}'
          ],
          output: 'Item di dalam .menu berjajar menyamping, tersebar rata dari kiri ke kanan, sejajar vertikal di tengah, dengan jarak 12px.'
        },
        {
          name: 'Grid (display: grid)',
          usage: 'Menata elemen dalam baris dan kolom sekaligus. Pakai untuk galeri atau layout halaman. repeat(auto-fit, minmax()) membuat jumlah kolom menyesuaikan lebar layar tanpa media query.',
          code: [
            '.galeri {',
            '  display: grid;',
            '  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));',
            '  gap: 16px;',
            '}'
          ],
          output: 'Kartu tersusun dalam beberapa kolom di layar lebar dan otomatis turun menjadi satu kolom di layar sempit.'
        },
        {
          name: '@media (media query)',
          usage: 'Menerapkan gaya hanya pada kondisi tertentu, paling sering lebar layar. Dipakai untuk membuat tampilan responsif di HP dan laptop.',
          code: [
            '.sidebar { width: 260px; }',
            '',
            '@media (max-width: 768px) {',
            '  .sidebar { width: 100%; }',
            '}'
          ],
          output: 'Sidebar selebar 260px di layar besar, lalu melebar penuh saat lebar layar 768px atau kurang.'
        }
      ]
    },
    {
      id: 'xml', name: 'XML', category: 'markup', codeLang: 'xml',
      entries: [
        {
          name: 'Deklarasi XML',
          usage: 'Baris pembuka dokumen XML yang menyebut versi dan encoding. Letakkan di baris paling atas. Encoding UTF-8 menjamin huruf beraksen dan karakter non-Latin tersimpan dengan benar.',
          code: [
            '<?xml version="1.0" encoding="UTF-8"?>'
          ],
          output: 'Tidak menampilkan apa pun, tetapi memberi tahu parser cara membaca isi file.'
        },
        {
          name: 'Elemen dan root element',
          usage: 'XML tidak punya tag bawaan: kamu mendefinisikan sendiri nama tag sesuai data. Dokumen wajib punya tepat satu root element yang membungkus semuanya, dan setiap tag pembuka harus punya tag penutup.',
          code: [
            '<toko>',
            '  <produk>',
            '    <nama>Buku Tulis</nama>',
            '    <harga>5000</harga>',
            '  </produk>',
            '</toko>'
          ],
          output: 'Data berbentuk pohon: toko berisi produk, produk berisi nama dan harga. Program lain bisa membacanya dengan parser XML.'
        },
        {
          name: 'Atribut',
          usage: 'Informasi tambahan pada sebuah elemen, ditulis di tag pembuka dengan nilai dalam tanda kutip. Cocok untuk metadata seperti id atau satuan, sedangkan data utama sebaiknya tetap di dalam elemen.',
          code: [
            '<produk id="P001" stok="20">',
            '  <harga mata-uang="IDR">5000</harga>',
            '</produk>'
          ],
          output: 'Elemen produk membawa id dan stok sebagai atribut, elemen harga membawa satuan mata uang.'
        },
        {
          name: 'Komentar <!-- -->',
          usage: 'Catatan untuk manusia yang diabaikan parser. Berguna menjelaskan struktur data atau menonaktifkan sementara satu bagian. Komentar tidak boleh memuat tanda -- di dalamnya.',
          code: [
            '<!-- Daftar produk toko, diperbarui tiap minggu -->',
            '<toko>',
            '  <produk id="P001" />',
            '</toko>'
          ],
          output: 'Komentar tidak muncul di hasil pembacaan data, hanya terlihat saat file dibuka sebagai teks.'
        },
        {
          name: 'CDATA',
          usage: 'Membungkus teks yang mengandung karakter khusus seperti < dan & supaya tidak dianggap sebagai tag. Berguna untuk menyimpan potongan kode atau HTML di dalam XML.',
          code: [
            '<deskripsi>',
            '  <![CDATA[ Harga < 10000 & stok > 5 ]]>',
            '</deskripsi>'
          ],
          output: 'Isi deskripsi terbaca apa adanya: Harga < 10000 & stok > 5, tanpa error parsing.'
        },
        {
          name: 'Namespace (xmlns)',
          usage: 'Memberi awalan pada nama elemen agar tidak bentrok saat dua vocabulary XML digabung dalam satu dokumen, misalnya data buku dan data penerbit yang sama-sama punya elemen bernama title.',
          code: [
            '<katalog xmlns:b="http://contoh.id/buku"',
            '         xmlns:p="http://contoh.id/penerbit">',
            '  <b:title>Belajar XML</b:title>',
            '  <p:title>Penerbit Nusantara</p:title>',
            '</katalog>'
          ],
          output: 'Dua elemen title tetap terbedakan karena awalan b: dan p: menunjuk ke namespace yang berbeda.'
        }
      ]
    },
    {
      id: 'markdown', name: 'Markdown', category: 'markup', codeLang: 'markdown',
      entries: [
        {
          name: 'Heading (#)',
          usage: 'Membuat judul dengan tanda pagar di awal baris. Satu # untuk judul terbesar, dua ## untuk sub-judul, dan seterusnya sampai enam. Beri satu spasi setelah tanda #.',
          code: [
            '# Judul Utama',
            '## Sub Judul',
            '### Bagian Kecil'
          ],
          output: 'Tiga tingkat judul dengan ukuran huruf menurun: besar, sedang, kecil.'
        },
        {
          name: 'Tebal dan miring (** dan *)',
          usage: 'Menekankan teks. Dua bintang untuk tebal (hal penting), satu bintang untuk miring (istilah atau penekanan ringan). Tanda ~~ mencoret teks pada banyak aplikasi.',
          code: [
            'Ini **sangat penting**.',
            'Ini *istilah asing*.',
            'Ini ***keduanya***.'
          ],
          output: 'Kalimat pertama berisi teks tebal, kedua miring, ketiga tebal sekaligus miring.'
        },
        {
          name: 'Daftar (- dan 1.)',
          usage: 'Daftar tak berurut memakai tanda hubung, daftar berurut memakai angka diikuti titik. Indentasi dua atau empat spasi membuat sub-daftar.',
          code: [
            '- Apel',
            '- Jeruk',
            '  - Jeruk nipis',
            '',
            '1. Cuci beras',
            '2. Masak nasi'
          ],
          output: 'Daftar berpoin dengan satu sub-poin, lalu daftar langkah bernomor 1 dan 2.'
        },
        {
          name: 'Tautan dan gambar',
          usage: 'Tautan memakai [teks](alamat). Gambar sama, tetapi diawali tanda seru dan teks di dalam kurung siku menjadi teks alternatif.',
          code: [
            '[Situs MDN](https://developer.mozilla.org)',
            '![Logo KamusKode](logo.png)'
          ],
          output: 'Teks "Situs MDN" yang bisa diklik, dan sebuah gambar logo (atau teks alternatif jika file tidak ada).'
        },
        {
          name: 'Kode inline dan blok kode',
          usage: 'Satu tanda backtick membungkus potongan kode di tengah kalimat. Tiga backtick membuat blok kode multi-baris, dan nama bahasa setelahnya mengaktifkan pewarnaan sintaks.',
          code: [
            'Jalankan perintah `npm install` dulu.',
            '',
            '```js',
            'console.log("Halo");',
            '```'
          ],
          output: 'Kalimat dengan potongan kode bergaya monospace, diikuti blok kode JavaScript berlatar khusus.'
        },
        {
          name: 'Kutipan dan garis pemisah (> dan ---)',
          usage: 'Tanda > di awal baris membuat blok kutipan. Tiga tanda hubung di baris sendiri membuat garis horizontal untuk memisahkan bagian.',
          code: [
            '> Kode dibaca lebih sering daripada ditulis.',
            '',
            '---',
            '',
            'Bagian berikutnya.'
          ],
          output: 'Kutipan dengan garis atau indentasi di sisi kiri, garis pemisah melintang, lalu paragraf biasa.'
        }
      ]
    },
    {
      id: 'javascript', name: 'JavaScript', category: 'prog', codeLang: 'javascript',
      entries: [
        {
          name: 'let dan const',
          usage: 'Mendeklarasikan variabel. Pakai const untuk nilai yang tidak akan diganti (default yang baik), let untuk nilai yang berubah. Hindari var karena cakupannya membingungkan.',
          pemahaman: {
            inti: 'Default-nya const. Ganti ke let hanya saat nilainya memang harus berubah.',
            poin: [
              'const mencegah penggantian ulang variabel, sehingga bug "nilai tiba-tiba berubah" hilang.',
              'let dipakai untuk penghitung, akumulator, atau nilai yang di-update di loop.',
              'var sudah usang: cakupannya function-scope dan bisa diangkat (hoisting), sering mengejutkan pemula.'
            ]
          },
          code: [
            'const nama = "Sari";',
            'let skor = 10;',
            'skor = skor + 5;',
            'console.log(nama, skor);'
          ],
          output: 'Konsol mencetak: Sari 15. Mengubah nilai nama akan memunculkan error karena const.'
        },
        {
          name: 'function',
          usage: 'Membungkus langkah-langkah yang bisa dipakai berulang. Function menerima parameter dan mengembalikan hasil lewat return. Gunakan saat satu logika dipakai di lebih dari satu tempat.',
          code: [
            'function luasPersegi(sisi) {',
            '  return sisi * sisi;',
            '}',
            'console.log(luasPersegi(4));'
          ],
          output: 'Konsol mencetak: 16'
        },
        {
          name: 'Arrow function (=>)',
          usage: 'Penulisan function yang lebih ringkas, sering dipakai sebagai callback pendek. Jika isinya hanya satu ekspresi, kurung kurawal dan return boleh dihilangkan.',
          code: [
            'const kali = (a, b) => a * b;',
            'console.log(kali(3, 4));'
          ],
          output: 'Konsol mencetak: 12'
        },
        {
          name: 'querySelector dan textContent',
          usage: 'Mengambil elemen dari halaman memakai selector CSS, lalu mengubah isinya. querySelector mengembalikan elemen pertama yang cocok, atau null jika tidak ada.',
          code: [
            'const judul = document.querySelector("#judul");',
            'judul.textContent = "Halo, KamusKode";'
          ],
          output: 'Teks pada elemen ber-id judul langsung berganti menjadi "Halo, KamusKode" tanpa reload halaman.'
        },
        {
          name: 'addEventListener',
          usage: 'Menjalankan fungsi ketika terjadi peristiwa seperti klik, ketikan, atau submit. Cara ini lebih rapi daripada menulis onclick di HTML dan bisa dipasang berkali-kali pada elemen yang sama.',
          code: [
            'const tombol = document.querySelector("#tombol");',
            'tombol.addEventListener("click", () => {',
            '  alert("Tombol diklik");',
            '});'
          ],
          output: 'Setiap kali tombol diklik, muncul kotak dialog bertuliskan "Tombol diklik".'
        },
        {
          name: 'Array.map dan filter',
          usage: 'map membuat array baru dengan mengubah tiap elemen, filter membuat array baru berisi elemen yang lolos syarat. Keduanya tidak mengubah array asli.',
          code: [
            'const angka = [1, 2, 3, 4];',
            'const kuadrat = angka.map(n => n * n);',
            'const genap = angka.filter(n => n % 2 === 0);',
            'console.log(kuadrat, genap);'
          ],
          output: 'Konsol mencetak: [1, 4, 9, 16] [2, 4]'
        }
      ]
    },
    {
      id: 'python', name: 'Python', category: 'prog', codeLang: 'python',
      entries: [
        {
          name: 'Tipe data dasar',
          usage: 'Python menentukan tipe dari nilai yang diberikan: int (bilangan bulat), float (desimal), str (teks), bool (True atau False). Fungsi type() menunjukkan tipenya.',
          code: [
            'umur = 17',
            'tinggi = 1.65',
            'nama = "Dewi"',
            'aktif = True',
            'print(type(umur), type(tinggi), type(nama), type(aktif))'
          ],
          output: '<class "int"> <class "float"> <class "str"> <class "bool">'
        },
        {
          name: 'for loop',
          usage: 'Mengulang kode untuk setiap item dalam sebuah urutan, misalnya list atau range(). Pakai for saat jumlah pengulangan sudah jelas.',
          code: [
            'for i in range(1, 4):',
            '    print("Pengulangan ke-", i)'
          ],
          output: 'Pengulangan ke- 1\nPengulangan ke- 2\nPengulangan ke- 3'
        },
        {
          name: 'while loop',
          usage: 'Mengulang selama kondisi bernilai True. Pakai saat jumlah pengulangan tidak diketahui di awal. Pastikan ada baris yang mengubah kondisi supaya tidak berulang selamanya.',
          code: [
            'hitung = 3',
            'while hitung > 0:',
            '    print(hitung)',
            '    hitung -= 1',
            'print("Selesai")'
          ],
          output: '3\n2\n1\nSelesai'
        },
        {
          name: 'if, elif, else',
          usage: 'Memilih blok kode berdasarkan kondisi. Python memeriksa dari atas dan menjalankan blok pertama yang benar. Indentasi (spasi di awal baris) menentukan isi blok.',
          code: [
            'nilai = 75',
            'if nilai >= 85:',
            '    print("A")',
            'elif nilai >= 70:',
            '    print("B")',
            'else:',
            '    print("C")'
          ],
          output: 'B'
        },
        {
          name: 'def (fungsi)',
          usage: 'Membuat fungsi yang bisa dipanggil ulang. Parameter bisa diberi nilai default. Gunakan return untuk mengirim hasil keluar dari fungsi.',
          code: [
            'def sapa(nama, salam="Halo"):',
            '    return f"{salam}, {nama}!"',
            '',
            'print(sapa("Budi"))',
            'print(sapa("Ani", "Selamat pagi"))'
          ],
          output: 'Halo, Budi!\nSelamat pagi, Ani!'
        },
        {
          name: 'list dan dict',
          usage: 'list menyimpan kumpulan nilai berurutan yang diakses lewat indeks (mulai dari 0). dict menyimpan pasangan kunci dan nilai yang diakses lewat kunci.',
          code: [
            'buah = ["apel", "jeruk", "mangga"]',
            'buah.append("pisang")',
            'siswa = {"nama": "Rina", "kelas": 10}',
            'print(buah[0], len(buah))',
            'print(siswa["nama"])'
          ],
          output: 'apel 4\nRina'
        }
      ]
    },
    {
      id: 'php', name: 'PHP', category: 'prog', codeLang: 'php',
      entries: [
        {
          name: 'Tag PHP dan echo',
          usage: 'Kode PHP ditulis di antara <?php dan ?>. echo mengirim teks ke halaman yang dilihat pengunjung. PHP berjalan di server, jadi pengunjung hanya menerima hasilnya.',
          code: [
            '<?php',
            'echo "Halo dari server";',
            '?>'
          ],
          output: 'Halaman menampilkan: Halo dari server'
        },
        {
          name: 'Variabel ($)',
          usage: 'Variabel di PHP selalu diawali tanda dolar. Tipe ditentukan otomatis dari nilainya. Operator titik (.) menyambung teks.',
          code: [
            '<?php',
            '$nama = "Ayu";',
            '$umur = 20;',
            'echo "Nama: " . $nama . ", umur: " . $umur;',
            '?>'
          ],
          output: 'Nama: Ayu, umur: 20'
        },
        {
          name: 'Array',
          usage: 'Menyimpan banyak nilai dalam satu variabel. Array berindeks diakses dengan angka, array asosiatif diakses dengan kunci teks. count() menghitung jumlah elemen.',
          code: [
            '<?php',
            '$buah = ["apel", "jeruk"];',
            '$buah[] = "mangga";',
            '$user = ["nama" => "Dani", "kota" => "Surabaya"];',
            'echo $buah[2] . " " . count($buah) . " " . $user["kota"];',
            '?>'
          ],
          output: 'mangga 3 Surabaya'
        },
        {
          name: 'foreach',
          usage: 'Mengulang setiap elemen array. Untuk array asosiatif, bentuk $kunci => $nilai memberi akses ke kunci dan nilainya sekaligus.',
          code: [
            '<?php',
            '$harga = ["pensil" => 2000, "buku" => 5000];',
            'foreach ($harga as $barang => $rp) {',
            '    echo $barang . ": " . $rp . "\\n";',
            '}',
            '?>'
          ],
          output: 'pensil: 2000\nbuku: 5000'
        },
        {
          name: 'function',
          usage: 'Membuat blok kode yang bisa dipanggil ulang. Tambahkan tipe parameter dan tipe kembalian agar kesalahan terdeteksi lebih awal.',
          code: [
            '<?php',
            'function tambah(int $a, int $b): int {',
            '    return $a + $b;',
            '}',
            'echo tambah(7, 5);',
            '?>'
          ],
          output: '12'
        },
        {
          name: '$_POST',
          usage: 'Array bawaan PHP yang berisi data formulir bermetode POST. Selalu periksa isinya dan bersihkan sebelum ditampilkan (htmlspecialchars) agar aman dari serangan XSS.',
          code: [
            '<?php',
            'if ($_SERVER["REQUEST_METHOD"] === "POST") {',
            '    $nama = htmlspecialchars($_POST["nama"] ?? "");',
            '    echo "Halo, " . $nama;',
            '}',
            '?>'
          ],
          output: 'Setelah formulir dikirim dengan nama "Tono", halaman menampilkan: Halo, Tono'
        }
      ]
    },
    {
      id: 'sql', name: 'SQL', category: 'prog', codeLang: 'sql',
      entries: [
        {
          name: 'SELECT * FROM',
          usage: 'Mengambil data dari tabel. Tanda * berarti semua kolom, tetapi untuk aplikasi nyata lebih baik menyebut kolom yang dibutuhkan saja agar lebih cepat dan jelas.',
          code: [
            'SELECT * FROM siswa;',
            'SELECT nama, kelas FROM siswa;'
          ],
          output: 'Query pertama menampilkan semua kolom semua baris tabel siswa. Query kedua hanya kolom nama dan kelas.'
        },
        {
          name: 'WHERE, ORDER BY, LIMIT',
          usage: 'WHERE menyaring baris berdasarkan syarat, ORDER BY mengurutkan hasil (ASC naik, DESC turun), LIMIT membatasi jumlah baris.',
          code: [
            'SELECT nama, nilai',
            'FROM siswa',
            'WHERE nilai >= 80',
            'ORDER BY nilai DESC',
            'LIMIT 3;'
          ],
          output: 'Tiga siswa dengan nilai tertinggi di antara yang bernilai 80 ke atas, diurutkan dari nilai terbesar.'
        },
        {
          name: 'INSERT INTO',
          usage: 'Menambah baris baru ke tabel. Sebutkan nama kolom secara eksplisit supaya query tetap benar walaupun urutan kolom tabel berubah.',
          code: [
            'INSERT INTO siswa (nama, kelas, nilai)',
            'VALUES ("Rudi", "10A", 88);'
          ],
          output: 'Satu baris baru untuk Rudi tersimpan di tabel siswa. Database biasanya melaporkan: 1 row affected.'
        },
        {
          name: 'UPDATE',
          usage: 'Mengubah data yang sudah ada. Selalu sertakan WHERE: tanpa WHERE, seluruh baris di tabel ikut berubah.',
          code: [
            'UPDATE siswa',
            'SET nilai = 90',
            'WHERE nama = "Rudi";'
          ],
          output: 'Nilai Rudi berubah menjadi 90. Baris siswa lain tidak tersentuh.'
        },
        {
          name: 'DELETE FROM',
          usage: 'Menghapus baris dari tabel. Sama seperti UPDATE, WHERE wajib ada. Uji dulu dengan SELECT memakai syarat yang sama sebelum menghapus.',
          code: [
            'DELETE FROM siswa',
            'WHERE id = 7;'
          ],
          output: 'Baris dengan id 7 terhapus. Tanpa WHERE, semua isi tabel hilang.'
        },
        {
          name: 'JOIN',
          usage: 'Menggabungkan baris dari dua tabel berdasarkan kolom yang saling berhubungan. INNER JOIN hanya mengambil baris yang punya pasangan di kedua tabel, LEFT JOIN mempertahankan semua baris tabel kiri.',
          code: [
            'SELECT siswa.nama, kelas.wali',
            'FROM siswa',
            'INNER JOIN kelas ON siswa.kelas_id = kelas.id;'
          ],
          output: 'Daftar pasangan nama siswa dan wali kelasnya, misalnya: Rudi | Bu Ratna.'
        }
      ]
    }
  ]
};
