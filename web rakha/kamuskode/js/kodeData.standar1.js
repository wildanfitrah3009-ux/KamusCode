/* KamusKode - entri standar kelompok 1: JavaScript, TypeScript, Python.
 * Urutan wajib: output&komentar, variabel&tipe, percabangan, perulangan, fungsi, koleksi.
 * Ditambahkan sebagai entri BARU berurutan di depan; entri lama tetap ada.
 */
(function () {
  if (!window.KODE_DATA || !Array.isArray(window.KODE_DATA.languages)) return;
  var L = window.KODE_DATA.languages;
  function lang(id) { for (var i = 0; i < L.length; i++) if (L[i].id === id) return L[i]; return null; }
  function prepend(id, entries) {
    var l = lang(id);
    if (!l || !Array.isArray(l.entries)) return;
    entries.forEach(function (e) { e.std = true; });
    l.entries = entries.concat(l.entries);
  }

  prepend('javascript', [
    {
      name: 'Output & Komentar (console.log, //, /* */)',
      usage: 'console.log menampilkan nilai ke konsol browser untuk memeriksa hasil. Komentar // untuk satu baris dan /* */ untuk banyak baris, tidak dijalankan program.',
      code: ['console.log("Halo, dunia");', '// komentar satu baris', '/* komentar', '   banyak baris */'],
      output: 'Konsol mencetak: Halo, dunia. Dua komentar tidak tampil karena diabaikan.'
    },
    {
      name: 'Variabel & Tipe Data (let, const)',
      usage: 'let dan const mendeklarasikan variabel. Tipe data utama: string (teks), number (angka), boolean (true/false). Pakai const untuk nilai tetap.',
      code: ['const nama = "Sari";', 'let umur = 24;', 'let aktif = true;', 'console.log(typeof nama, typeof umur, aktif);'],
      output: 'Konsol mencetak: string number true'
    },
    {
      name: 'Percabangan If / Else',
      usage: 'if menjalankan blok bila kondisi benar; else menangani kondisi lain. Gunakan === untuk perbandingan ketat.',
      code: ['const nilai = 75;', 'if (nilai >= 85) {', '  console.log("A");', '} else if (nilai >= 70) {', '  console.log("B");', '} else {', '  console.log("C");', '}'],
      output: 'Konsol mencetak: B'
    },
    {
      name: 'Perulangan For & While',
      usage: 'for mengulang dengan penghitung; while mengulang selama kondisi benar. Gunakan for...of untuk menelusuri isi array.',
      code: ['for (let i = 1; i <= 3; i++) {', '  console.log(i);', '}', 'let n = 2;', 'while (n > 0) { console.log(n); n--; }'],
      output: '1, 2, 3, lalu 2, 1.'
    },
    {
      name: 'Fungsi (function, parameter, return)',
      usage: 'Fungsi membungkus logika yang bisa dipanggil ulang. Parameter adalah masukan, return mengembalikan hasil.',
      code: ['function tambah(a, b) {', '  return a + b;', '}', 'console.log(tambah(3, 4));'],
      output: 'Konsol mencetak: 7'
    },
    {
      name: 'Array / Koleksi Data',
      usage: 'Array menyimpan banyak nilai berurutan. Akses dengan indeks mulai 0; map dan filter mengubah atau menyaring isi.',
      code: ['const angka = [1, 2, 3, 4];', 'console.log(angka[0]);', 'console.log(angka.map(n => n * n));', 'console.log(angka.filter(n => n % 2 === 0));'],
      output: 'Konsol mencetak: 1, [1, 4, 9, 16], [2, 4]'
    }
  ]);

  prepend('typescript', [
    {
      name: 'Output & Komentar (console.log)',
      usage: 'console.log menampilkan nilai ke konsol. Komentar ditulis dengan // atau /* */ dan diabaikan compiler.',
      code: ['console.log("Halo TS");', '// satu baris', '/* banyak baris */'],
      output: 'Konsol mencetak: Halo TS'
    },
    {
      name: 'Variabel & Tipe Data',
      usage: 'TypeScript mewajibkan atau menyimpulkan tipe. Tipe utama: string, number, boolean. Anotasi ditulis setelah titik dua.',
      code: ['let nama: string = "Sari";', 'let umur: number = 24;', 'let aktif: boolean = true;', 'console.log(nama, umur, aktif);'],
      output: 'Konsol mencetak: Sari 24 true'
    },
    {
      name: 'Percabangan If / Else',
      usage: 'if memilih blok berdasarkan kondisi boolean. else if menangani kondisi tambahan.',
      code: ['const nilai: number = 75;', 'if (nilai >= 85) console.log("A");', 'else if (nilai >= 70) console.log("B");', 'else console.log("C");'],
      output: 'Konsol mencetak: B'
    },
    {
      name: 'Perulangan For & While',
      usage: 'for untuk jumlah pengulangan tetap; while selama kondisi benar. for...of menelusuri array.',
      code: ['for (let i = 1; i <= 3; i++) console.log(i);', 'for (const b of ["apel", "jeruk"]) console.log(b);'],
      output: '1, 2, 3, lalu apel, jeruk.'
    },
    {
      name: 'Fungsi dengan Tipe',
      usage: 'Fungsi dapat memberi tipe pada parameter dan nilai kembalian agar kesalahan terdeteksi saat kompilasi.',
      code: ['function tambah(a: number, b: number): number {', '  return a + b;', '}', 'console.log(tambah(3, 4));'],
      output: 'Konsol mencetak: 7'
    },
    {
      name: 'Array & Tipe Koleksi',
      usage: 'Array bertipe T[] atau Array<T>. map dan filter menjaga tipe hasil.',
      code: ['const angka: number[] = [1, 2, 3, 4];', 'const kuadrat: number[] = angka.map(n => n * n);', 'console.log(kuadrat);'],
      output: 'Konsol mencetak: [1, 4, 9, 16]'
    }
  ]);

  prepend('python', [
    {
      name: 'Output & Komentar (print, #)',
      usage: 'print menampilkan nilai ke layar. Komentar dimulai tanda # dan diabaikan Python.',
      code: ['print("Halo, dunia")', '# komentar satu baris'],
      output: 'Halo, dunia'
    },
    {
      name: 'Variabel & Tipe Data',
      usage: 'Variabel dibuat dengan tanda = tanpa perlu menulis tipe. Tipe utama: str, int/float, bool.',
      code: ['nama = "Sari"', 'umur = 24', 'tinggi = 1.65', 'aktif = True', 'print(type(nama), type(umur), type(aktif))'],
      output: '<class "str"> <class "int"> <class "bool">'
    },
    {
      name: 'Percabangan If / Elif / Else',
      usage: 'if memeriksa kondisi, elif untuk kondisi tambahan, else untuk sisanya. Indentasi menentukan isi blok.',
      code: ['nilai = 75', 'if nilai >= 85:', '    print("A")', 'elif nilai >= 70:', '    print("B")', 'else:', '    print("C")'],
      output: 'B'
    },
    {
      name: 'Perulangan For & While',
      usage: 'for menelusuri urutan atau range(); while mengulang selama kondisi benar.',
      code: ['for i in range(1, 4):', '    print(i)', 'n = 2', 'while n > 0:', '    print(n)', '    n -= 1'],
      output: '1, 2, 3, lalu 2, 1.'
    },
    {
      name: 'Fungsi (def, parameter, return)',
      usage: 'def membuat fungsi. Parameter bisa punya nilai default; return mengembalikan hasil.',
      code: ['def tambah(a, b):', '    return a + b', '', 'print(tambah(3, 4))'],
      output: '7'
    },
    {
      name: 'List & Dict (Koleksi Data)',
      usage: 'list menyimpan data berurutan, dict pasangan kunci-nilai. Akses list dengan indeks mulai 0.',
      code: ['buah = ["apel", "jeruk"]', 'buah.append("mangga")', 'siswa = {"nama": "Rina", "kelas": 10}', 'print(buah[0], siswa["nama"])'],
      output: 'apel Rina'
    }
  ]);
})();
