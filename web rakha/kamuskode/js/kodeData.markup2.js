/* Tambahan bahasa markup dan data: JSON, YAML, SVG. Dimuat setelah kodeData.js. */
(function () {
  if (!window.KODE_DATA) return;
  window.KODE_DATA.languages.push(
    {
      id: 'json', name: 'JSON', category: 'markup', codeLang: 'json',
      entries: [
        {
          name: 'Objek { }',
          usage: 'Kumpulan pasangan kunci dan nilai. Kunci harus berupa teks dalam tanda kutip ganda, dan antar pasangan dipisah koma. Pakai objek untuk satu benda dengan beberapa sifat, misalnya satu pengguna atau satu produk.',
          code: [
            '{',
            '  "nama": "Sari",',
            '  "umur": 24,',
            '  "aktif": true',
            '}'
          ],
          output: 'Satu objek dengan tiga sifat. Di JavaScript, nilainya dibaca lewat data.nama atau data["nama"].'
        },
        {
          name: 'Array [ ]',
          usage: 'Daftar nilai berurutan yang dipisah koma. Isinya boleh angka, teks, objek, atau array lain. Pakai array saat datanya berupa daftar, misalnya kumpulan produk.',
          code: [
            '[',
            '  "apel",',
            '  "jeruk",',
            '  "mangga"',
            ']'
          ],
          output: 'Daftar tiga teks. Elemen pertama berindeks 0, jadi data[0] bernilai "apel".'
        },
        {
          name: 'Tipe nilai',
          usage: 'JSON hanya mengenal enam jenis nilai: teks, angka, true atau false, null, objek, dan array. Tidak ada tanggal, fungsi, maupun undefined, jadi tanggal biasanya disimpan sebagai teks.',
          code: [
            '{',
            '  "teks": "halo",',
            '  "angka": 3.14,',
            '  "benar": false,',
            '  "kosong": null,',
            '  "tanggal": "2026-11-18"',
            '}'
          ],
          output: 'Lima sifat dengan lima jenis nilai berbeda. Tanggal tersimpan sebagai teks berformat tahun-bulan-hari.'
        },
        {
          name: 'Objek bersarang',
          usage: 'Nilai sebuah kunci boleh berupa objek atau array lagi. Cara ini dipakai untuk data yang punya bagian-bagian, seperti pesanan yang berisi daftar barang.',
          code: [
            '{',
            '  "pesanan": 1001,',
            '  "pembeli": { "nama": "Budi", "kota": "Surabaya" },',
            '  "barang": [',
            '    { "nama": "Pensil", "jumlah": 2 },',
            '    { "nama": "Buku", "jumlah": 1 }',
            '  ]',
            '}'
          ],
          output: 'Kota pembeli dibaca lewat data.pembeli.kota, dan nama barang kedua lewat data.barang[1].nama.'
        },
        {
          name: 'JSON.parse()',
          usage: 'Mengubah teks JSON menjadi objek JavaScript yang bisa dipakai. Bungkus dengan try dan catch, karena teks yang formatnya salah, misalnya memakai kutip tunggal atau koma berlebih di akhir, akan memunculkan error.',
          code: [
            'const teks = ' + "'" + '{"nama":"Sari","umur":24}' + "'" + ';',
            'try {',
            '  const data = JSON.parse(teks);',
            '  console.log(data.nama);',
            '} catch (e) {',
            '  console.log("Format JSON salah");',
            '}'
          ],
          output: 'Konsol mencetak: Sari. Jika teksnya rusak, yang tercetak adalah: Format JSON salah.'
        },
        {
          name: 'JSON.stringify()',
          usage: 'Mengubah objek JavaScript menjadi teks JSON, misalnya untuk dikirim ke server atau disimpan di localStorage. Argumen ketiga mengatur jumlah spasi indentasi agar hasilnya mudah dibaca.',
          code: [
            'const data = { nama: "Sari", hobi: ["baca", "lari"] };',
            'console.log(JSON.stringify(data));',
            'console.log(JSON.stringify(data, null, 2));'
          ],
          output: 'Baris pertama: {"nama":"Sari","hobi":["baca","lari"]}. Baris kedua berisi data yang sama, tetapi terbagi per baris dengan indentasi dua spasi.'
        }
      ]
    },
    {
      id: 'yaml', name: 'YAML', category: 'markup', codeLang: 'yaml',
      entries: [
        {
          name: 'Pasangan kunci: nilai',
          usage: 'Bentuk dasar YAML. Kunci diikuti titik dua dan satu spasi, lalu nilainya. Tidak perlu kutip untuk teks biasa, dan satu baris berisi satu pasangan. Sering dipakai untuk file konfigurasi.',
          code: [
            'nama: KamusKode',
            'versi: 1.2',
            'publik: true'
          ],
          output: 'Tiga pengaturan: teks "KamusKode", angka 1.2, dan nilai benar (true).'
        },
        {
          name: 'Indentasi (struktur bersarang)',
          usage: 'YAML memakai spasi di awal baris untuk menunjukkan hierarki. Pakai spasi saja, tidak boleh tab, dan jaga jumlahnya konsisten (umumnya dua spasi per tingkat). Salah indentasi sama dengan salah struktur.',
          code: [
            'server:',
            '  host: localhost',
            '  port: 8080',
            'database:',
            '  nama: toko',
            '  pengguna: admin'
          ],
          output: 'Dua kelompok pengaturan, server dan database, masing-masing punya sub-pengaturan sendiri.'
        },
        {
          name: 'Daftar (tanda -)',
          usage: 'Setiap item daftar diawali tanda hubung dan satu spasi. Cocok untuk kumpulan nilai seperti daftar paket, langkah, atau port yang dibuka.',
          code: [
            'buah:',
            '  - apel',
            '  - jeruk',
            '  - mangga',
            'port: [80, 443]'
          ],
          output: 'Kunci buah berisi tiga item. Kunci port berisi dua angka, ditulis dengan gaya ringkas bersiku.'
        },
        {
          name: 'Teks beberapa baris (| dan >)',
          usage: 'Tanda | mempertahankan setiap pindah baris, cocok untuk skrip atau alamat. Tanda > menggabungkan baris menjadi satu paragraf, cocok untuk deskripsi panjang.',
          code: [
            'alamat: |',
            '  Jl. Melati 5',
            '  Sidoarjo',
            'deskripsi: >',
            '  Kamus sintaks kode',
            '  untuk pemula.'
          ],
          output: 'alamat tersimpan dalam dua baris. deskripsi menjadi satu kalimat: Kamus sintaks kode untuk pemula.'
        },
        {
          name: 'Komentar (#)',
          usage: 'Semua teks setelah tanda # sampai akhir baris diabaikan. Pakai untuk menjelaskan alasan sebuah pengaturan atau menonaktifkannya sementara.',
          code: [
            '# Batas waktu dalam detik',
            'timeout: 30',
            '# debug: true'
          ],
          output: 'Hanya timeout yang terbaca. Dua baris komentar tidak berpengaruh pada data.'
        },
        {
          name: 'Anchor dan alias (& dan *)',
          usage: 'Anchor (&nama) menandai sebuah blok, alias (*nama) memakainya lagi, dan <<: * menggabungkan isinya. Berguna agar pengaturan yang sama tidak ditulis berulang.',
          code: [
            'umum: &umum',
            '  restart: always',
            '  waktu: 30',
            'web:',
            '  <<: *umum',
            '  port: 80'
          ],
          output: 'Kunci web mewarisi restart dan waktu dari blok umum, lalu menambahkan port 80.'
        }
      ]
    },
    {
      id: 'svg', name: 'SVG', category: 'markup', codeLang: 'svg',
      entries: [
        {
          name: '<svg> dan viewBox',
          usage: 'Elemen pembungkus gambar vektor. viewBox mendefinisikan sistem koordinat internal (x, y, lebar, tinggi), sehingga gambar tetap tajam dan bisa diskalakan ke ukuran berapa pun lewat CSS.',
          code: [
            '<svg viewBox="0 0 200 100" width="200" height="100"',
            '     xmlns="http://www.w3.org/2000/svg">',
            '  <!-- isi gambar di sini -->',
            '</svg>'
          ],
          output: 'Kanvas kosong berukuran 200 kali 100 satuan. Gambar di dalamnya akan ikut membesar atau mengecil bila width dan height diubah.'
        },
        {
          name: '<rect>',
          usage: 'Menggambar persegi atau persegi panjang. x dan y menentukan sudut kiri atas, width dan height ukurannya, rx membulatkan sudut, dan fill mengisi warna.',
          code: [
            '<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">',
            '  <rect x="20" y="20" width="160" height="60" rx="8"',
            '        fill="#38bdf8" stroke="#0c4a6e" stroke-width="2" />',
            '</svg>'
          ],
          output: 'Persegi panjang biru muda bersudut halus dengan garis tepi biru tua, berada di tengah kanvas.'
        },
        {
          name: '<circle> dan <ellipse>',
          usage: 'Circle membutuhkan titik pusat (cx, cy) dan jari-jari r. Ellipse memakai dua jari-jari, rx dan ry. Cocok untuk titik data, avatar bulat, dan indikator.',
          code: [
            '<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">',
            '  <circle cx="50" cy="50" r="30" fill="#a1a1aa" />',
            '  <ellipse cx="140" cy="50" rx="40" ry="20" fill="none" stroke="#a1a1aa" />',
            '</svg>'
          ],
          output: 'Satu lingkaran abu-abu penuh di kiri dan satu elips berongga dengan garis tepi di kanan.'
        },
        {
          name: '<line> dan <polyline>',
          usage: 'Line menggambar satu garis lurus dari titik awal ke titik akhir. Polyline menghubungkan banyak titik berurutan, cocok untuk grafik garis sederhana. Keduanya butuh stroke agar terlihat.',
          code: [
            '<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">',
            '  <line x1="10" y1="90" x2="190" y2="90" stroke="#71717a" />',
            '  <polyline points="10,80 60,40 110,60 190,10"',
            '            fill="none" stroke="#38bdf8" stroke-width="3" />',
            '</svg>'
          ],
          output: 'Garis dasar abu-abu di bagian bawah dan garis biru bersudut yang naik turun menuju pojok kanan atas.'
        },
        {
          name: '<path>',
          usage: 'Elemen paling serbaguna untuk bentuk bebas. Atribut d berisi perintah: M pindah titik, L garis lurus, C kurva bezier, Z menutup bentuk. Huruf kapital memakai koordinat mutlak, huruf kecil relatif.',
          code: [
            '<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">',
            '  <path d="M20 80 L100 20 L180 80 Z" fill="#38bdf8" />',
            '</svg>'
          ],
          output: 'Segitiga biru. M memulai di kiri bawah, dua L menarik ke puncak lalu ke kanan bawah, dan Z menutupnya.'
        },
        {
          name: '<text> dan <g>',
          usage: 'Text menampilkan teks di dalam gambar, diposisikan dengan x dan y (y adalah garis dasar teks). G mengelompokkan beberapa elemen sehingga fill atau transform cukup ditulis sekali untuk semuanya.',
          code: [
            '<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">',
            '  <g fill="#a1a1aa" transform="translate(20 10)">',
            '    <rect width="60" height="40" />',
            '    <text x="0" y="70" font-size="14">Label</text>',
            '  </g>',
            '</svg>'
          ],
          output: 'Persegi panjang abu-abu dengan tulisan Label di bawahnya. Keduanya bergeser bersama 20 satuan ke kanan dan 10 ke bawah karena berada dalam satu grup.'
        }
      ]
    }
  );
})();
