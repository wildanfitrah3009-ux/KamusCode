/* Tambahan bahasa pemrograman bagian 1: TypeScript, Java, C, C++, C#. Dimuat setelah kodeData.js. */
(function () {
  if (!window.KODE_DATA) return;
  window.KODE_DATA.languages.push(
    {
      id: 'typescript', name: 'TypeScript', category: 'prog', codeLang: 'typescript',
      entries: [
        {
          name: 'Anotasi tipe',
          usage: 'Menulis tipe variabel, parameter, dan nilai kembalian setelah titik dua. Kesalahan tipe, misalnya mengirim teks ke fungsi yang meminta angka, ketahuan saat menulis kode, bukan saat program berjalan.',
          code: [
            'let umur: number = 20;',
            'let nama: string = "Sari";',
            '',
            'function tambah(a: number, b: number): number {',
            '  return a + b;',
            '}',
            'tambah(2, "3");'
          ],
          output: 'Baris terakhir ditandai error oleh editor dan compiler: argumen "3" bertipe string, padahal fungsi meminta number.'
        },
        {
          name: 'interface',
          usage: 'Mendefinisikan bentuk sebuah objek: nama properti dan tipenya. Tanda tanya menandai properti opsional. Pakai interface agar objek yang dikirim antar fungsi selalu punya struktur yang sama.',
          code: [
            'interface Pengguna {',
            '  id: number;',
            '  nama: string;',
            '  email?: string;',
            '}',
            '',
            'const u: Pengguna = { id: 1, nama: "Budi" };'
          ],
          output: 'Kode valid karena email bersifat opsional. Jika properti nama dihapus, compiler langsung memberi error.'
        },
        {
          name: 'type dan union',
          usage: 'Alias type memberi nama pada sebuah tipe. Tanda | (union) berarti nilainya boleh salah satu dari beberapa tipe. Cocok untuk nilai yang pilihannya terbatas, seperti status.',
          code: [
            'type Status = "menunggu" | "proses" | "selesai";',
            'type Id = number | string;',
            '',
            'let s: Status = "proses";',
            's = "batal";'
          ],
          output: 'Baris terakhir error karena "batal" tidak termasuk dalam tiga pilihan Status.'
        },
        {
          name: 'Generics <T>',
          usage: 'Membuat fungsi atau tipe yang bekerja untuk berbagai tipe tanpa kehilangan pemeriksaan tipe. T adalah penampung nama tipe yang ditentukan saat fungsi dipakai.',
          code: [
            'function pertama<T>(daftar: T[]): T {',
            '  return daftar[0];',
            '}',
            '',
            'const a = pertama([10, 20, 30]);',
            'const b = pertama(["x", "y"]);'
          ],
          output: 'TypeScript menyimpulkan a bertipe number dan b bertipe string, tanpa perlu menulis tipenya satu per satu.'
        },
        {
          name: 'enum',
          usage: 'Kumpulan konstanta bernama. Berguna agar kode memakai nama yang jelas, bukan angka atau teks mentah yang mudah salah ketik.',
          code: [
            'enum Peran {',
            '  Admin,',
            '  Editor,',
            '  Tamu',
            '}',
            '',
            'console.log(Peran.Editor);'
          ],
          output: 'Konsol mencetak: 1. Enum diberi nomor otomatis mulai dari 0 sesuai urutan penulisan.'
        },
        {
          name: 'Tanda ? dan ! (opsional dan non-null)',
          usage: 'Tanda ?. mengakses properti dengan aman: jika nilainya null atau undefined, hasilnya undefined dan tidak error. Tanda ! menyatakan kepada compiler bahwa nilainya pasti ada. Pakai ! hanya bila benar-benar yakin.',
          code: [
            'const judul = document.querySelector("h1");',
            'console.log(judul?.textContent);',
            'console.log(judul!.textContent);'
          ],
          output: 'Baris kedua aman walau h1 tidak ada. Baris ketiga akan error saat program berjalan jika h1 tidak ditemukan.'
        }
      ]
    },
    {
      id: 'java', name: 'Java', category: 'prog', codeLang: 'java',
      entries: [
        {
          name: 'Struktur program dan main',
          usage: 'Setiap program Java berada di dalam class. Eksekusi dimulai dari method main. Nama file harus sama dengan nama class publik.',
          code: [
            'public class Halo {',
            '    public static void main(String[] args) {',
            '        System.out.println("Halo, dunia");',
            '    }',
            '}'
          ],
          output: 'Setelah dikompilasi dan dijalankan, konsol menampilkan: Halo, dunia'
        },
        {
          name: 'Variabel dan tipe data',
          usage: 'Java mewajibkan tipe ditulis saat mendeklarasikan variabel. Tipe dasar: int, double, boolean, char. String adalah class, bukan tipe dasar, sehingga ditulis dengan huruf kapital.',
          code: [
            'int umur = 20;',
            'double tinggi = 1.65;',
            'boolean aktif = true;',
            'String nama = "Dewi";',
            'System.out.println(nama + " " + umur);'
          ],
          output: 'Dewi 20'
        },
        {
          name: 'if, else if, else',
          usage: 'Memilih blok kode berdasarkan kondisi boolean. Kondisi wajib berada di dalam kurung. Bandingkan String dengan equals(), bukan ==.',
          code: [
            'int nilai = 75;',
            'if (nilai >= 85) {',
            '    System.out.println("A");',
            '} else if (nilai >= 70) {',
            '    System.out.println("B");',
            '} else {',
            '    System.out.println("C");',
            '}'
          ],
          output: 'B'
        },
        {
          name: 'for loop',
          usage: 'Mengulang kode dengan tiga bagian di dalam kurung: nilai awal, syarat lanjut, dan langkah perubahan. Cocok bila jumlah pengulangan sudah diketahui.',
          code: [
            'for (int i = 1; i <= 3; i++) {',
            '    System.out.println("Ke-" + i);',
            '}'
          ],
          output: 'Ke-1\nKe-2\nKe-3'
        },
        {
          name: 'Array dan ArrayList',
          usage: 'Array berukuran tetap sejak dibuat. ArrayList ukurannya bisa bertambah dan berkurang lewat add() dan remove(), sehingga lebih sering dipakai untuk daftar yang berubah.',
          code: [
            'int[] angka = {10, 20, 30};',
            'System.out.println(angka[1]);',
            '',
            'ArrayList<String> buah = new ArrayList<>();',
            'buah.add("apel");',
            'buah.add("jeruk");',
            'System.out.println(buah.size());'
          ],
          output: '20\n2'
        },
        {
          name: 'class dan object',
          usage: 'Class adalah cetakan yang berisi atribut dan method. Object dibuat dari class dengan new. Constructor dijalankan saat object dibuat untuk mengisi nilai awal.',
          code: [
            'class Siswa {',
            '    String nama;',
            '    Siswa(String nama) { this.nama = nama; }',
            '    void sapa() { System.out.println("Halo, " + nama); }',
            '}',
            '',
            'Siswa s = new Siswa("Rina");',
            's.sapa();'
          ],
          output: 'Halo, Rina'
        }
      ]
    },
    {
      id: 'c', name: 'C', category: 'prog', codeLang: 'c',
      entries: [
        {
          name: '#include dan main',
          usage: '#include memuat header berisi fungsi bawaan, misalnya stdio.h untuk input dan output. Eksekusi dimulai dari main, dan return 0 menandakan program selesai tanpa error.',
          code: [
            '#include <stdio.h>',
            '',
            'int main(void) {',
            '    printf("Halo, dunia\\n");',
            '    return 0;',
            '}'
          ],
          output: 'Halo, dunia'
        },
        {
          name: 'Tipe data dan printf',
          usage: 'Tipe dasar: int, float, double, char. printf memakai kode format: %d untuk int, %f untuk float, %c untuk char, %s untuk string. Kode format yang salah memberi hasil keliru.',
          code: [
            'int umur = 20;',
            'float tinggi = 1.65f;',
            'char huruf = ' + "'A'" + ';',
            'printf("%d %.2f %c\\n", umur, tinggi, huruf);'
          ],
          output: '20 1.65 A'
        },
        {
          name: 'scanf',
          usage: 'Membaca input dari keyboard sesuai kode format. Tanda & di depan variabel wajib untuk tipe angka, karena scanf perlu alamat memori tempat menyimpan hasil.',
          code: [
            'int usia;',
            'printf("Usia: ");',
            'scanf("%d", &usia);',
            'printf("Tahun depan %d\\n", usia + 1);'
          ],
          output: 'Jika pengguna mengetik 20, layar menampilkan: Tahun depan 21'
        },
        {
          name: 'for dan while',
          usage: 'for cocok bila jumlah pengulangan diketahui, while bila pengulangan bergantung pada kondisi. Pastikan ada baris yang mengubah kondisi agar tidak berulang tanpa akhir.',
          code: [
            'for (int i = 1; i <= 3; i++) {',
            '    printf("%d ", i);',
            '}',
            'int n = 3;',
            'while (n > 0) { printf("%d ", n); n--; }'
          ],
          output: '1 2 3 3 2 1'
        },
        {
          name: 'Array dan string',
          usage: 'Array menyimpan banyak nilai bertipe sama dengan ukuran tetap. String di C adalah array char yang berakhir karakter null, jadi ruangnya harus satu lebih banyak dari jumlah hurufnya.',
          code: [
            'int nilai[3] = {80, 90, 70};',
            'char nama[6] = "Budi";',
            'printf("%d %s\\n", nilai[1], nama);'
          ],
          output: '90 Budi'
        },
        {
          name: 'Pointer (*) dan alamat (&)',
          usage: '& mengambil alamat memori sebuah variabel. * pada deklarasi membuat pointer yang menyimpan alamat, dan * saat dipakai membaca atau mengubah nilai di alamat itu. Pointer memungkinkan fungsi mengubah variabel milik pemanggilnya.',
          code: [
            'void tambahSatu(int *p) {',
            '    *p = *p + 1;',
            '}',
            '',
            'int x = 5;',
            'tambahSatu(&x);',
            'printf("%d\\n", x);'
          ],
          output: '6. Fungsi mengubah x langsung karena menerima alamatnya, bukan salinan nilainya.'
        }
      ]
    },
    {
      id: 'cpp', name: 'C++', category: 'prog', codeLang: 'cpp',
      entries: [
        {
          name: 'cout dan cin',
          usage: 'Input dan output standar C++. cout menampilkan ke layar dengan operator <<, cin membaca dari keyboard dengan operator >>. Keduanya berasal dari header iostream dan namespace std.',
          code: [
            '#include <iostream>',
            'using namespace std;',
            '',
            'int main() {',
            '    string nama;',
            '    cout << "Nama: ";',
            '    cin >> nama;',
            '    cout << "Halo, " << nama << endl;',
            '}'
          ],
          output: 'Jika pengguna mengetik Ani, layar menampilkan: Halo, Ani'
        },
        {
          name: 'auto dan referensi (&)',
          usage: 'auto membiarkan compiler menyimpulkan tipe dari nilai awal. Referensi (&) membuat nama lain untuk variabel yang sudah ada, sehingga fungsi bisa mengubah argumen tanpa pointer.',
          code: [
            'void gandakan(int &x) { x *= 2; }',
            '',
            'auto n = 4;',
            'gandakan(n);',
            'cout << n;'
          ],
          output: '8'
        },
        {
          name: 'vector',
          usage: 'Array dinamis dari library standar. Ukurannya bertambah otomatis lewat push_back, dan size() memberi jumlah elemen. Lebih aman daripada array biasa untuk daftar yang berubah.',
          code: [
            '#include <vector>',
            '',
            'vector<int> angka = {1, 2, 3};',
            'angka.push_back(4);',
            'cout << angka.size() << " " << angka[3];'
          ],
          output: '4 4'
        },
        {
          name: 'Range-based for',
          usage: 'Mengulang setiap elemen kontainer tanpa mengurus indeks. Tambahkan const dan & agar elemen tidak disalin saat dibaca.',
          code: [
            'vector<string> buah = {"apel", "jeruk"};',
            'for (const auto &b : buah) {',
            '    cout << b << endl;',
            '}'
          ],
          output: 'apel\njeruk'
        },
        {
          name: 'class',
          usage: 'Membungkus data dan fungsi dalam satu tipe. Anggota private hanya bisa diakses dari dalam class, anggota public dari luar. Constructor dijalankan saat object dibuat.',
          code: [
            'class Persegi {',
            'private:',
            '    int sisi;',
            'public:',
            '    Persegi(int s) : sisi(s) {}',
            '    int luas() { return sisi * sisi; }',
            '};',
            '',
            'Persegi p(4);',
            'cout << p.luas();'
          ],
          output: '16'
        },
        {
          name: 'Smart pointer (unique_ptr)',
          usage: 'Pointer yang menghapus object di memori secara otomatis saat sudah tidak dipakai. Gunakan sebagai pengganti new dan delete manual agar tidak terjadi kebocoran memori.',
          code: [
            '#include <memory>',
            '',
            'auto p = make_unique<int>(42);',
            'cout << *p;'
          ],
          output: '42. Memori dibebaskan sendiri ketika p keluar dari cakupannya.'
        }
      ]
    },
    {
      id: 'csharp', name: 'C#', category: 'prog', codeLang: 'csharp',
      entries: [
        {
          name: 'Console.WriteLine',
          usage: 'Menampilkan teks ke konsol dan pindah baris. Console.ReadLine membaca satu baris input. Interpolasi string dengan tanda $ dan kurung kurawal menyisipkan nilai variabel ke dalam teks.',
          code: [
            'string nama = "Tono";',
            'Console.WriteLine($"Halo, {nama}");'
          ],
          output: 'Halo, Tono'
        },
        {
          name: 'Variabel dan var',
          usage: 'C# berbasis tipe statis: int, double, bool, string. Kata var membuat compiler menyimpulkan tipe dari nilai awal, tetapi tipenya tetap tetap setelah itu.',
          code: [
            'int umur = 20;',
            'var tinggi = 1.65;',
            'bool aktif = true;',
            'Console.WriteLine(tinggi.GetType());'
          ],
          output: 'System.Double'
        },
        {
          name: 'if dan switch',
          usage: 'if memilih berdasarkan kondisi. switch cocok bila satu nilai dibandingkan dengan banyak kemungkinan. Ekspresi switch memakai => dan lebih ringkas.',
          code: [
            'int hari = 3;',
            'string nama = hari switch {',
            '    1 => "Senin",',
            '    2 => "Selasa",',
            '    3 => "Rabu",',
            '    _ => "Lainnya"',
            '};',
            'Console.WriteLine(nama);'
          ],
          output: 'Rabu'
        },
        {
          name: 'foreach',
          usage: 'Mengulang setiap elemen dari array atau koleksi tanpa indeks. Variabel perulangan hanya bisa dibaca, tidak bisa diubah di dalam blok.',
          code: [
            'string[] buah = { "apel", "jeruk", "mangga" };',
            'foreach (string b in buah) {',
            '    Console.WriteLine(b);',
            '}'
          ],
          output: 'apel\njeruk\nmangga'
        },
        {
          name: 'List<T>',
          usage: 'Daftar bertipe yang ukurannya bisa berubah. Add menambah, Remove menghapus, Count memberi jumlah elemen. T diganti dengan tipe isi daftar.',
          code: [
            'var angka = new List<int> { 1, 2, 3 };',
            'angka.Add(4);',
            'Console.WriteLine(angka.Count);'
          ],
          output: '4'
        },
        {
          name: 'class dan property',
          usage: 'Property adalah anggota class dengan get dan set, dipakai seperti variabel tetapi bisa dikendalikan. Penulisan singkat { get; set; } membuat penyimpanan otomatis.',
          code: [
            'class Siswa {',
            '    public string Nama { get; set; }',
            '    public int Nilai { get; set; }',
            '}',
            '',
            'var s = new Siswa { Nama = "Rina", Nilai = 90 };',
            'Console.WriteLine(s.Nama);'
          ],
          output: 'Rina'
        }
      ]
    }
  );
})();
