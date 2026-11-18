/* KamusKode - pelengkap sintaks JavaScript, Python, PHP, SQL. */
(function () {
  if (!window.KODE_DATA || !Array.isArray(window.KODE_DATA.languages)) return;
  var L = window.KODE_DATA.languages;
  function lang(id) { for (var i = 0; i < L.length; i++) if (L[i].id === id) return L[i]; return null; }
  function add(id, entries) { var l = lang(id); if (l && Array.isArray(l.entries)) l.entries = l.entries.concat(entries); }

  add('javascript', [
    {
      name: 'if / else if / else',
      usage: 'Percabangan berdasarkan kondisi boolean. Gunakan === untuk perbandingan ketat.',
      pemahaman: { inti: 'Gunakan === bukan == untuk menghindari konversi tipe implisit.', poin: ['Rantai else if dievaluasi berurutan.', 'Operator && dan || untuk gabungan kondisi.'] },
      code: ['const nilai = 75;', 'if (nilai >= 85) {', '  console.log("A");', '} else if (nilai >= 70) {', '  console.log("B");', '} else {', '  console.log("C");', '}'],
      output: 'Konsol mencetak: B'
    },
    {
      name: 'for, for...of, while',
      usage: 'Perulangan. for untuk indeks, for...of untuk nilai iterable, while selama kondisi benar.',
      pemahaman: { inti: 'for...of lebih ringkas untuk array.', poin: ['for...in untuk kunci objek, bukan array.', 'Pastikan while mengubah kondisi agar tidak infinite.'] },
      code: ['for (let i = 1; i <= 3; i++) console.log(i);', 'for (const b of ["apel", "jeruk"]) console.log(b);', 'let n = 2; while (n > 0) { console.log(n); n--; }'],
      output: '1 2 3 apel jeruk 2 1'
    },
    {
      name: 'Promise dan async/await',
      usage: 'Menangani operasi asinkron. async membuat fungsi mengembalikan Promise; await menunggu hasilnya.',
      pemahaman: { inti: 'await mempermudah rantai .then.', poin: ['Bungkus dengan try/catch untuk error.', 'Promise.all menjalankan banyak Promise paralel.'] },
      code: ['async function ambil() {', '  try {', '    const res = await fetch("/data.json");', '    const data = await res.json();', '    console.log(data);', '  } catch (e) {', '    console.error("Gagal", e);', '  }', '}'],
      output: 'Data JSON dicetak ke konsol; bila gagal, pesan error dicetak.'
    },
    {
      name: 'try / catch / finally',
      usage: 'Menangani error yang dilempar. finally selalu dijalankan, baik sukses maupun gagal.',
      pemahaman: { inti: 'Lindungi kode yang mungkin melempar error.', poin: ['throw new Error("...") melempar error.'] },
      code: ['try {', '  JSON.parse("{");', '} catch (e) {', '  console.log("JSON tidak valid");', '} finally {', '  console.log("selesai");', '}'],
      output: 'JSON tidak valid\\nselesai'
    },
    {
      name: 'class dan constructor',
      usage: 'Blueprint objek. constructor dijalankan saat new. Method ditulis di dalam class.',
      pemahaman: { inti: 'class sintaks lebih rapi dari fungsi prototipe.', poin: ['extends untuk pewarisan.', 'super() memanggil constructor induk.'] },
      code: ['class Siswa {', '  constructor(nama) { this.nama = nama; }', '  sapa() { return "Halo, " + this.nama; }', '}', 'console.log(new Siswa("Rina").sapa());'],
      output: 'Halo, Rina'
    }
  ]);

  add('python', [
    {
      name: 'f-string',
      usage: 'Format teks dengan menyisipkan ekspresi di { }. Awali string dengan f.',
      pemahaman: { inti: 'Cara paling ringkas dan terbaca untuk format string.', poin: ['Bisa format angka: {x:.2f}.'] },
      code: ['nama = "Sari"', 'umur = 24', 'print(f"{nama} berumur {umur} tahun")', 'print(f"Pi = {3.14159:.2f}")'],
      output: 'Sari berumur 24 tahun\\nPi = 3.14'
    },
    {
      name: 'List comprehension',
      usage: 'Membuat list baru dari iterable dalam satu baris, dengan filter opsional.',
      pemahaman: { inti: 'Sama dengan map/filter tetapi lebih Pythonic.', poin: ['Sintaks: [expr for x in it if cond].'] },
      code: ['kuadrat = [n*n for n in range(1, 5)]', 'genap = [n for n in range(10) if n % 2 == 0]', 'print(kuadrat, genap)'],
      output: '[1, 4, 9, 16] [0, 2, 4, 6, 8]'
    },
    {
      name: 'try / except / finally',
      usage: 'Menangani pengecualian. except menangkap tipe error tertentu.',
      pemahaman: { inti: 'Tangkap error spesifik, bukan semua.', poin: ['finally selalu dijalankan.'] },
      code: ['try:', '    angka = int("abc")', 'except ValueError:', '    print("Bukan angka")', 'finally:', '    print("selesai")'],
      output: 'Bukan angka\\nselesai'
    },
    {
      name: 'class dan __init__',
      usage: 'Mendefinisikan kelas. __init__ adalah konstruktor yang dijalankan saat objek dibuat.',
      pemahaman: { inti: 'self merujuk pada instance.', poin: ['Method diawali self sebagai parameter pertama.'] },
      code: ['class Siswa:', '    def __init__(self, nama):', '        self.nama = nama', '    def sapa(self):', '        return f"Halo, {self.nama}"', '', 'print(Siswa("Rina").sapa())'],
      output: 'Halo, Rina'
    },
    {
      name: 'with (context manager)',
      usage: 'Mengelola resource yang perlu dibuka dan ditutup, misalnya file. with menutup otomatis.',
      pemahaman: { inti: 'Lebih aman daripada open/close manual.', poin: ['File tertutup walau terjadi error.'] },
      code: ['with open("data.txt", "w") as f:', '    f.write("halo")'],
      output: 'File data.txt dibuat dan diisi "halo", lalu ditutup otomatis.'
    }
  ]);

  add('php', [
    {
      name: 'if / elseif / else',
      usage: 'Percabangan di PHP. Gunakan elseif (satu kata) atau else if, keduanya valid.',
      pemahaman: { inti: 'PHP longgar tipe; gunakan === untuk perbandingan ketat.', poin: ['Kondisi dievaluasi berurutan.'] },
      code: ['<?php', '$nilai = 75;', 'if ($nilai >= 85) {', '    echo "A";', '} elseif ($nilai >= 70) {', '    echo "B";', '} else {', '    echo "C";', '}', '?>'],
      output: 'B'
    },
    {
      name: 'for, foreach, while',
      usage: 'Perulangan. foreach paling sering untuk array.',
      pemahaman: { inti: 'foreach menghindari pengelolaan indeks manual.', poin: ['while selama kondisi benar.'] },
      code: ['<?php', 'for ($i = 1; $i <= 3; $i++) echo $i;', 'foreach (["apel", "jeruk"] as $b) echo $b;', '$n = 2; while ($n > 0) { echo $n; $n--; }', '?>'],
      output: '123apeljeruk21'
    },
    {
      name: 'try / catch / finally',
      usage: 'Menangani exception. Exception harus berupa objek turunan Exception/Throwable.',
      pemahaman: { inti: 'Gunakan throw untuk melempar exception.', poin: ['catch (Exception $e) menangkap.'] },
      code: ['<?php', 'try {', '    throw new Exception("Gagal");', '} catch (Exception $e) {', '    echo $e->getMessage();', '} finally {', '    echo " selesai";', '}', '?>'],
      output: 'Gagal selesai'
    },
    {
      name: 'class dan __construct',
      usage: 'Kelas dengan konstruktor __construct. Properti dideklarasikan dengan visibilitas.',
      pemahaman: { inti: 'Visibilitas: public, protected, private.', poin: ['$this->properti mengakses anggota.'] },
      code: ['<?php', 'class Siswa {', '    public function __construct(public string $nama) {}', '    public function sapa(): string {', '        return "Halo, " . $this->nama;', '    }', '}', 'echo (new Siswa("Rina"))->sapa();', '?>'],
      output: 'Halo, Rina'
    }
  ]);

  add('sql', [
    {
      name: 'GROUP BY dan agregat (COUNT, SUM, AVG)',
      usage: 'Mengelompokkan baris dan menghitung agregat per kelompok.',
      pemahaman: { inti: 'Kolom non-agregat di SELECT harus ada di GROUP BY.', poin: ['HAVING menyaring hasil agregat.'] },
      code: ['SELECT kelas, COUNT(*) AS jumlah, AVG(nilai) AS rata', 'FROM siswa', 'GROUP BY kelas', 'HAVING COUNT(*) > 1;'],
      output: 'Daftar kelas dengan jumlah siswa dan rata-rata nilai, hanya kelas berisi lebih dari satu siswa.'
    },
    {
      name: 'DISTINCT dan alias (AS)',
      usage: 'DISTINCT menghilangkan duplikat. AS memberi nama kolom hasil.',
      pemahaman: { inti: 'DISTINCT berlaku untuk kombinasi kolom yang dipilih.', poin: ['Alias membuat hasil lebih terbaca.'] },
      code: ['SELECT DISTINCT kelas FROM siswa;', 'SELECT nama AS siswa, nilai AS skor FROM siswa;'],
      output: 'Daftar kelas unik; lalu kolom nama dan nilai berganti judul siswa dan skor.'
    },
    {
      name: 'BETWEEN dan IN',
      usage: 'BETWEEN menyaring rentang, IN menyaring dari daftar nilai.',
      pemahaman: { inti: 'Keduanya menyederhanakan kondisi OR berantai.', poin: ['BETWEEN inklusif di kedua ujung.'] },
      code: ['SELECT nama FROM siswa WHERE nilai BETWEEN 70 AND 90;', 'SELECT nama FROM siswa WHERE kelas IN ("10A", "10B");'],
      output: 'Siswa dengan nilai 70-90, lalu siswa di kelas 10A atau 10B.'
    },
    {
      name: 'Subquery',
      usage: 'Query di dalam query, misalnya untuk membandingkan dengan agregat.',
      pemahaman: { inti: 'Bisa dipakai di WHERE, FROM, atau SELECT.', poin: ['Subquery skalar mengembalikan satu nilai.'] },
      code: ['SELECT nama FROM siswa', 'WHERE nilai > (SELECT AVG(nilai) FROM siswa);'],
      output: 'Nama siswa dengan nilai di atas rata-rata.'
    }
  ]);
})();
