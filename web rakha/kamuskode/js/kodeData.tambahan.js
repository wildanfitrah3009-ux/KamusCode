/* KamusKode - tambahan bahasa populer: Swift, Dart, R, MATLAB, PowerShell, Lua. */
(function () {
  if (!window.KODE_DATA || !Array.isArray(window.KODE_DATA.languages)) return;
  window.KODE_DATA.languages.push(
    {
      id: 'swift', name: 'Swift', category: 'prog', codeLang: 'swift',
      entries: [
        {
          name: 'let dan var',
          usage: 'let untuk konstanta (tidak berubah), var untuk variabel yang bisa diubah. Swift mendorong pemakaian let sebagai default.',
          pemahaman: { inti: 'Default-nya let; gunakan var hanya bila perlu berubah.', poin: ['Tipe disimpulkan otomatis.', 'Kesalahan mengubah let terdeteksi saat kompilasi.'] },
          code: ['let nama = "Sari"', 'var skor = 10', 'skor += 5', 'print("\(nama): \(skor)")'],
          output: 'Sari: 15'
        },
        {
          name: 'if let (optional binding)',
          usage: 'Membuka nilai Optional dengan aman. if let nama = optional mengeksekusi blok hanya bila nilainya tidak nil.',
          pemahaman: { inti: 'Optional adalah cara Swift menghindari null yang tak terduga.', poin: ['Nilai kosong bertipe T?.', '?? memberi nilai cadangan.'] },
          code: ['var umur: Int? = 20', 'if let u = umur {', '  print("Umur: \(u)")', '} else {', '  print("Umur tidak diketahui")', '}'],
          output: 'Umur: 20'
        },
        {
          name: 'func',
          usage: 'Mendefinisikan fungsi dengan parameter dan tipe kembalian. Parameter bisa punya label eksternal.',
          pemahaman: { inti: 'Tanda _ menghilangkan label parameter.', poin: ['-> Tipe untuk nilai kembalian.'] },
          code: ['func sapa(_ nama: String, salam: String = "Halo") -> String {', '  return "\(salam), \(nama)!"', '}', 'print(sapa("Budi"))'],
          output: 'Halo, Budi!'
        },
        {
          name: 'struct dan class',
          usage: 'struct adalah tipe nilai (disalin), class adalah tipe referensi (dibagi).',
          pemahaman: { inti: 'Pilih struct untuk data sederhana.', poin: ['struct tidak butuh initializer eksplisit bila semua properti punya nilai.'] },
          code: ['struct Titik {', '  var x: Int', '  var y: Int', '}', 'let t = Titik(x: 2, y: 3)', 'print(t.x + t.y)'],
          output: '5'
        },
        {
          name: 'Array dan Dictionary',
          usage: 'Array berurutan, Dictionary pasangan kunci-nilai. Keduanya bertipe jelas.',
          pemahaman: { inti: 'Kunci Dictionary harus Hashable.', poin: ['append untuk menambah array.'] },
          code: ['var buah = ["apel", "jeruk"]', 'buah.append("mangga")', 'var umur = ["Ani": 20, "Budi": 22]', 'print(buah.count, umur["Budi"]!)'],
          output: '3 22'
        },
        {
          name: 'for-in dan while',
          usage: 'Mengulang isi koleksi atau rentang. while selama kondisi benar.',
          pemahaman: { inti: 'Rentang ditulis a...b (inklusif) atau a..<b (eksklusif).', poin: ['enumerated() memberi indeks.'] },
          code: ['for i in 1...3 { print(i) }', 'for (i, b) in ["apel", "jeruk"].enumerated() { print(i, b) }'],
          output: '1 2 3 0 apel 1 jeruk'
        }
      ]
    },
    {
      id: 'dart', name: 'Dart', category: 'prog', codeLang: 'dart',
      entries: [
        {
          name: 'var, final, const',
          usage: 'var menyimpulkan tipe, final nilai tetap saat runtime, const nilai tetap saat kompilasi.',
          pemahaman: { inti: 'Gunakan const bila nilai benar-benar konstan.', poin: ['final boleh diisi sekali.'] },
          code: ['var nama = "Sari";', 'final umur = 20;', 'const phi = 3.14;', 'print("$nama $umur $phi");'],
          output: 'Sari 20 3.14'
        },
        {
          name: 'Fungsi dan named parameter',
          usage: 'Parameter bisa diberi nama dalam { } sehingga urutan tidak penting.',
          pemahaman: { inti: 'Named parameter membuat pemanggilan lebih terbaca.', poin: ['required untuk wajib diisi.'] },
          code: ['String sapa({required String nama, String salam = "Halo"}) {', '  return "$salam, $nama!";', '}', 'print(sapa(nama: "Budi"));'],
          output: 'Halo, Budi!'
        },
        {
          name: 'null safety (? dan ??)',
          usage: 'Tipe T? boleh null. ?. memanggil dengan aman, ?? memberi nilai cadangan.',
          pemahaman: { inti: 'Dart modern mewajibkan penanganan null eksplisit.', poin: ['! menyatakan nilai pasti tidak null.'] },
          code: ['String? nama;', 'print(nama?.length);', 'print(nama ?? "Tanpa nama");'],
          output: 'null\\nTanpa nama'
        },
        {
          name: 'class dan constructor',
          usage: 'Class dengan constructor. Named constructor menambah cara membuat objek.',
          pemahaman: { inti: 'this.nama menyimpan ke properti.', poin: ['Constructor ringkas: Siswa(this.nama).'] },
          code: ['class Siswa {', '  final String nama;', '  Siswa(this.nama);', '  String sapa() => "Halo, $nama";', '}', 'print(Siswa("Rina").sapa());'],
          output: 'Halo, Rina'
        },
        {
          name: 'List, Map, dan for-in',
          usage: 'List berurutan, Map pasangan kunci-nilai. for-in menelusuri elemen.',
          pemahaman: { inti: 'Tipe dapat ditulis eksplisit: List<int>.', poin: ['map/filter tersedia di Iterable.'] },
          code: ['var buah = ["apel", "jeruk"];', 'var umur = {"Ani": 20};', 'for (var b in buah) print(b);', 'print(umur["Ani"]);'],
          output: 'apel\\njeruk\\n20'
        },
        {
          name: 'Future dan async/await',
          usage: 'Menangani operasi asinkron. async mengembalikan Future, await menunggu hasilnya.',
          pemahaman: { inti: 'Future mirip Promise di JavaScript.', poin: ['try/catch untuk error.'] },
          code: ['Future<String> ambil() async {', '  await Future.delayed(Duration(seconds: 1));', '  return "selesai";', '}'],
          output: 'Setelah 1 detik, Future selesai dengan nilai "selesai".'
        }
      ]
    },
    {
      id: 'r', name: 'R', category: 'prog', codeLang: 'r',
      entries: [
        {
          name: 'Vektor dan tipe data',
          usage: 'Struktur data dasar R adalah vektor. c() menggabungkan nilai.',
          pemahaman: { inti: 'R berorientasi vektor: operasi berlaku ke seluruh elemen.', poin: ['Tipe: numeric, character, logical.'] },
          code: ['x <- c(1, 2, 3)', 'y <- x * 2', 'print(y)'],
          output: '[1] 2 4 6'
        },
        {
          name: 'Data frame',
          usage: 'Tabel data berkolom. Cara utama menyimpan dataset di R.',
          pemahaman: { inti: 'Setiap kolom bisa bertipe berbeda.', poin: ['$ mengakses kolom.'] },
          code: ['df <- data.frame(nama = c("Rina", "Budi"), nilai = c(90, 85))', 'print(df$nilai)'],
          output: '[1] 90 85'
        },
        {
          name: 'mean, sum, dan ringkasan',
          usage: 'Fungsi statistik dasar untuk meringkas data.',
          pemahaman: { inti: 'summary() memberi statistik lima angka.', poin: ['na.rm=TRUE mengabaikan nilai kosong.'] },
          code: ['x <- c(10, 20, 30)', 'print(mean(x))', 'print(sum(x))'],
          output: '[1] 20\\n[1] 60'
        },
        {
          name: 'if dan for',
          usage: 'Percabangan dan perulangan seperti bahasa lain, tetapi vektorisasi lebih idiomatik.',
          pemahaman: { inti: 'Untuk data besar, hindari loop; gunakan vektorisasi.', poin: ['ifelse() untuk percabangan vektor.'] },
          code: ['for (i in 1:3) print(i)', 'x <- c(5, 8, 12)', 'print(ifelse(x > 6, "besar", "kecil"))'],
          output: '1 2 3 \\"besar\\" \\"besar\\" \\"besar\\"'
        },
        {
          name: 'Fungsi dan apply',
          usage: 'Membuat fungsi sendiri dan menerapkannya ke banyak elemen dengan sapply/lapply.',
          pemahaman: { inti: 'apply family menggantikan loop.', poin: ['sapply menyederhanakan hasil.'] },
          code: ['kuadrat <- function(x) x^2', 'print(sapply(c(1, 2, 3), kuadrat))'],
          output: '[1] 1 4 9'
        }
      ]
    },
    {
      id: 'matlab', name: 'MATLAB', category: 'prog', codeLang: 'matlab',
      entries: [
        {
          name: 'Matriks dan vektor',
          usage: 'Tipe dasar MATLAB adalah matriks. Vektor baris dipisah spasi/koma, baris baru dengan titik koma.',
          pemahaman: { inti: 'Hampir semua data adalah matriks.', poin: ['A(2,3) mengakses baris 2 kolom 3.'] },
          code: ['A = [1 2; 3 4];', 'v = 1:5;', 'disp(A)'],
          output: '1 2\\n3 4'
        },
        {
          name: 'Operasi vektor dan matriks',
          usage: 'Operasi aritmetika berlaku elemen demi elemen atau sesuai aturan matriks.',
          pemahaman: { inti: '.* untuk perkalian elemen, * untuk perkalian matriks.', poin: ["' untuk transpos."] },
          code: ['A = [1 2; 3 4];', 'B = A * A;', 'disp(B)'],
          output: '7 10\\n15 22'
        },
        {
          name: 'Plot dasar',
          usage: 'Menggambar grafik dengan plot(). Dasar visualisasi data di MATLAB.',
          pemahaman: { inti: 'plot(x, y) menggambar garis; plot(y) memakai indeks.', poin: ['title/label menambah keterangan.'] },
          code: ['x = 0:0.1:2*pi;', 'y = sin(x);', 'plot(x, y)'],
          output: 'Jendela grafik menampilkan kurva sinus.'
        },
        {
          name: 'if, for, while',
          usage: 'Kontrol alur standar. Indeks MATLAB dimulai dari 1.',
          pemahaman: { inti: 'Indeks mulai 1, bukan 0.', poin: ['for i = 1:n.'] },
          code: ['for i = 1:3', '  disp(i)', 'end'],
          output: '1\\n2\\n3'
        },
        {
          name: 'Fungsi (function)',
          usage: 'Mendefinisikan fungsi di file .m dengan nama sesuai nama file.',
          pemahaman: { inti: 'Fungsi membantu memecah masalah.', poin: ['end menutup fungsi.'] },
          code: ['function y = kuadrat(x)', '  y = x^2;', 'end'],
          output: 'kuadrat(4) menghasilkan 16.'
        }
      ]
    },
    {
      id: 'powershell', name: 'PowerShell', category: 'prog', codeLang: 'powershell',
      entries: [
        {
          name: 'Cmdlet dan pipeline (|)',
          usage: 'Cmdlet adalah perintah bawaan (Verb-Noun). Pipeline mengalirkan objek, bukan teks.',
          pemahaman: { inti: 'PowerShell meneruskan objek, jadi bisa memfilter properti langsung.', poin: ['Get-Command untuk melihat cmdlet.'] },
          code: ['Get-Process | Where-Object { $_.CPU -gt 10 } | Select-Object Name, CPU'],
          output: 'Daftar proses dengan CPU di atas 10, hanya kolom Name dan CPU.'
        },
        {
          name: 'Variabel ($) dan tipe',
          usage: 'Variabel diawali $. Tipe disimpulkan otomatis; bisa ditegaskan dengan [int] dsb.',
          pemahaman: { inti: 'Tanda $ wajib saat membaca variabel.', poin: ['Penulisan tipe: [string]$nama.'] },
          code: ['$nama = "Sari"', '$umur = 20', 'Write-Output "$nama berumur $umur"'],
          output: 'Sari berumur 20'
        },
        {
          name: 'if / elseif / else',
          usage: 'Percabangan di PowerShell. Kondisi memakai operator perbandingan seperti -eq, -gt, -lt.',
          pemahaman: { inti: 'Operator perbandingan diawali tanda hubung.', poin: ['-and, -or untuk gabungan.'] },
          code: ['$nilai = 75', 'if ($nilai -ge 85) { "A" } elseif ($nilai -ge 70) { "B" } else { "C" }'],
          output: 'B'
        },
        {
          name: 'foreach dan for',
          usage: 'Menelusuri koleksi dengan foreach, atau menghitung dengan for.',
          pemahaman: { inti: 'foreach lebih ringkas untuk koleksi.', poin: ['$_ merujuk elemen saat ini di pipeline.'] },
          code: ['foreach ($b in @("apel", "jeruk")) { Write-Output $b }', 'for ($i = 1; $i -le 3; $i++) { $i }'],
          output: 'apel\\njeruk\\n1\\n2\\n3'
        },
        {
          name: 'Fungsi (function)',
          usage: 'Mendefinisikan fungsi dengan parameter. Output dikembalikan lewat Write-Output atau nilai.',
          pemahaman: { inti: 'Parameter bisa wajib: [Parameter(Mandatory)].', poin: ['return mengembalikan nilai.'] },
          code: ['function Sapa($nama) { "Halo, $nama" }', 'Sapa "Budi"'],
          output: 'Halo, Budi'
        }
      ]
    },
    {
      id: 'lua', name: 'Lua', category: 'prog', codeLang: 'lua',
      entries: [
        {
          name: 'Variabel lokal dan global',
          usage: 'Variabel diawali local agar cakupannya terbatas. Tanpa local berarti global.',
          pemahaman: { inti: 'Selalu pakai local kecuali benar-benar butuh global.', poin: ['Nama bebas tipe.'] },
          code: ['local nama = "Sari"', 'local skor = 10', 'print(nama, skor)'],
          output: 'Sari 10'
        },
        {
          name: 'Tabel dan pasangan kunci',
          usage: 'Tabel adalah satu-satunya struktur data di Lua; bisa dipakai sebagai array maupun map.',
          pemahaman: { inti: 'Indeks array mulai 1.', poin: ['Kunci teks ditulis ["kunci"] atau .kunci.'] },
          code: ['local buah = {"apel", "jeruk"}', 'local siswa = {nama = "Rina"}', 'print(buah[1], siswa.nama)'],
          output: 'apel Rina'
        },
        {
          name: 'if / elseif / else',
          usage: 'Percabangan dengan blok end.',
          pemahaman: { inti: 'operator ~= untuk tidak sama dengan.', poin: ['and, or, not untuk logika.'] },
          code: ['local nilai = 75', 'if nilai >= 85 then print("A") elseif nilai >= 70 then print("B") else print("C") end'],
          output: 'B'
        },
        {
          name: 'for dan while',
          usage: 'for numerik dan generik (ipairs/pairs). while selama kondisi benar.',
          pemahaman: { inti: 'ipairs untuk array berurutan, pairs untuk map.', poin: ['for i = 1, 3 do ... end.'] },
          code: ['for i = 1, 3 do print(i) end', 'for i, b in ipairs({"apel", "jeruk"}) do print(i, b) end'],
          output: '1\\n2\\n3\\n1 apel\\n2 jeruk'
        },
        {
          name: 'Fungsi (function)',
          usage: 'Mendefinisikan fungsi dengan function. Bisa mengembalikan banyak nilai.',
          pemahaman: { inti: 'Fungsi adalah nilai; bisa disimpan di variabel.', poin: ['return a, b mengembalikan dua nilai.'] },
          code: ['function tambah(a, b) return a + b end', 'print(tambah(3, 4))'],
          output: '7'
        }
      ]
    }
  );
})();
