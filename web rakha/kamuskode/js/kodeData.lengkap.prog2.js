/* KamusKode - pelengkap sintaks TypeScript, Java, C, C++, C#. */
(function () {
  if (!window.KODE_DATA || !Array.isArray(window.KODE_DATA.languages)) return;
  var L = window.KODE_DATA.languages;
  function lang(id) { for (var i = 0; i < L.length; i++) if (L[i].id === id) return L[i]; return null; }
  function add(id, entries) { var l = lang(id); if (l && Array.isArray(l.entries)) l.entries = l.entries.concat(entries); }

  add('typescript', [
    {
      name: 'async / await',
      usage: 'Menulis kode asinkron dengan rapi. Fungsi async mengembalikan Promise; await menunggu hasilnya.',
      pemahaman: { inti: 'Kombinasikan dengan tipe return Promise<T>.', poin: ['try/catch untuk error.'] },
      code: ['async function ambil(url: string): Promise<string> {', '  const res = await fetch(url);', '  return res.text();', '}'],
      output: 'Fungsi mengembalikan teks isi respons setelah permintaan selesai.'
    },
    {
      name: 'Partial, Pick, Omit (utility types)',
      usage: 'Mengubah tipe yang sudah ada. Partial membuat semua opsional, Pick memilih sebagian, Omit membuang sebagian.',
      pemahaman: { inti: 'Hindari menulis ulang tipe untuk variasi.', poin: ['Pick<T, "a"> mengambil properti a.'] },
      code: ['interface User { id: number; nama: string; email: string }', 'type Ringkas = Pick<User, "id" | "nama">;', 'type Ubah = Partial<User>;', 'type TanpaEmail = Omit<User, "email">;'],
      output: 'Tiga tipe turunan tanpa menulis ulang properti.'
    },
    {
      name: 'as const dan readonly',
      usage: 'as const menjadikan nilai literal tidak berubah. readonly mencegah mutasi properti/array.',
      pemahaman: { inti: 'Membantu TypeScript memberi tipe yang lebih sempit.', poin: ['readonly hanya saat kompilasi.'] },
      code: ['const arah = ["atas", "bawah"] as const;', 'interface Titik { readonly x: number; readonly y: number }'],
      output: 'arah bertipe tuple literal; properti Titik tidak bisa diubah setelah dibuat.'
    }
  ]);

  add('java', [
    {
      name: 'try / catch / finally',
      usage: 'Menangani exception. Exception yang dicek (checked) wajib ditangani atau dideklarasikan.',
      pemahaman: { inti: 'catch menangkap tipe exception spesifik.', poin: ['finally selalu dijalankan.'] },
      code: ['try {', '    int x = Integer.parseInt("abc");', '} catch (NumberFormatException e) {', '    System.out.println("Bukan angka");', '} finally {', '    System.out.println("selesai");', '}'],
      output: 'Bukan angka\\nselesai'
    },
    {
      name: 'while dan do-while',
      usage: 'while mengecek kondisi sebelum blok; do-while menjalankan blok sekali dulu, lalu mengecek.',
      pemahaman: { inti: 'do-while cocok untuk menu yang harus tampil minimal sekali.', poin: ['Pastikan kondisi berubah.'] },
      code: ['int n = 3;', 'while (n > 0) { System.out.print(n); n--; }', 'do { System.out.print("x"); } while (false);'],
      output: '321x'
    },
    {
      name: 'interface dan implements',
      usage: 'Interface mendefinisikan kontrak method. Class yang implements wajib menyediakan method tersebut.',
      pemahaman: { inti: 'Interface memisahkan kontrak dari implementasi.', poin: ['Satu class bisa implements banyak interface.'] },
      code: ['interface Bentuk { double luas(); }', 'class Persegi implements Bentuk {', '    double s;', '    Persegi(double s) { this.s = s; }', '    public double luas() { return s * s; }', '}'],
      output: 'Persegi memenuhi kontrak Bentuk dengan method luas().'
    }
  ]);

  add('c', [
    {
      name: 'struct',
      usage: 'Mengelompokkan beberapa variabel bertipe berbeda dalam satu tipe. Akses anggota dengan titik.',
      pemahaman: { inti: 'struct adalah fondasi tipe data bentukan di C.', poin: ['Gunakan typedef untuk nama singkat.'] },
      code: ['struct Titik { int x; int y; };', 'struct Titik t = {2, 3};', 'printf("%d,%d", t.x, t.y);'],
      output: '2,3'
    },
    {
      name: 'switch / case',
      usage: 'Memilih blok berdasarkan nilai integer/char. Setiap case perlu break agar tidak jatuh ke case berikutnya.',
      pemahaman: { inti: 'Cocok untuk banyak pilihan tetap.', poin: ['default menangani sisanya.'] },
      code: ['int hari = 3;', 'switch (hari) {', '  case 1: printf("Senin"); break;', '  case 3: printf("Rabu"); break;', '  default: printf("Lain");', '}'],
      output: 'Rabu'
    },
    {
      name: 'malloc dan free',
      usage: 'Alokasi memori dinamis dari heap. free wajib dipanggil untuk mencegah kebocoran memori.',
      pemahaman: { inti: 'Setiap malloc harus berpasangan dengan free.', poin: ['Periksa hasil malloc terhadap NULL.'] },
      code: ['int *arr = malloc(3 * sizeof(int));', 'if (arr) { arr[0] = 10; printf("%d", arr[0]); free(arr); }'],
      output: '10'
    }
  ]);

  add('cpp', [
    {
      name: 'try / catch',
      usage: 'Menangani exception C++. throw melempar, catch menangkap berdasarkan tipe.',
      pemahaman: { inti: 'Tangkap dengan referensi (const std::exception&).', poin: ['catch (...) menangkap semua.'] },
      code: ['try {', '    throw std::runtime_error("Gagal");', '} catch (const std::exception &e) {', '    cout << e.what();', '}'],
      output: 'Gagal'
    },
    {
      name: 'template',
      usage: 'Menulis fungsi/class generik yang bekerja untuk banyak tipe tanpa duplikasi.',
      pemahaman: { inti: 'Compiler membuat versi konkret saat dipakai.', poin: ['Sama seperti generics di bahasa lain.'] },
      code: ['template <typename T>', 'T maks(T a, T b) { return a > b ? a : b; }', 'cout << maks(3, 7) << " " << maks(string("a"), string("b"));'],
      output: '7 b'
    },
    {
      name: 'map (std::map)',
      usage: 'Kamus terurut berdasarkan kunci. Akses dengan operator [] atau at().',
      pemahaman: { inti: 'map menyimpan kunci unik terurut.', poin: ['unordered_map untuk performa hash.'] },
      code: ['map<string,int> umur;', 'umur["Ani"] = 20;', 'cout << umur["Ani"];'],
      output: '20'
    }
  ]);

  add('csharp', [
    {
      name: 'try / catch / finally',
      usage: 'Menangani exception. catch bisa menyaring tipe dengan when.',
      pemahaman: { inti: 'Gunakan exception, bukan kode error manual, untuk kegagalan tak terduga.', poin: ['finally selalu dijalankan.'] },
      code: ['try {', '    int.Parse("abc");', '} catch (FormatException) {', '    Console.WriteLine("Bukan angka");', '} finally {', '    Console.WriteLine("selesai");', '}'],
      output: 'Bukan angka\\nselesai'
    },
    {
      name: 'async / await',
      usage: 'Menulis kode asinkron. async menandai method, await menunggu Task.',
      pemahaman: { inti: 'Jangan blokir dengan .Result; gunakan await.', poin: ['Task<T> mewakili operasi asinkron.'] },
      code: ['async Task<string> AmbilAsync() {', '    using var http = new HttpClient();', '    return await http.GetStringAsync("https://example.com");', '}'],
      output: 'Method mengembalikan isi halaman sebagai string setelah permintaan selesai.'
    },
    {
      name: 'interface dan implements',
      usage: 'Kontrak anggota yang harus disediakan class. Nama interface lazim diawali I.',
      pemahaman: { inti: 'Memungkinkan banyak implementasi untuk satu kontrak.', poin: ['Satu class bisa implements banyak interface.'] },
      code: ['interface IBentuk { double Luas(); }', 'class Persegi : IBentuk {', '    public double Sisi { get; set; }', '    public double Luas() => Sisi * Sisi;', '}'],
      output: 'Persegi memenuhi IBentuk dengan method Luas().'
    }
  ]);
})();
