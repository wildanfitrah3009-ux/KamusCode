/* Tambahan bahasa pemrograman bagian 2: Go, Rust, Kotlin, Bash, Ruby. Dimuat setelah kodeData.js. */
(function () {
  if (!window.KODE_DATA) return;
  window.KODE_DATA.languages.push(
    {
      id: 'go', name: 'Go', category: 'prog', codeLang: 'go',
      entries: [
        {
          name: 'package main dan func main',
          usage: 'Program Go yang bisa dijalankan wajib berada di package main dan punya fungsi main sebagai titik awal. Paket bawaan seperti fmt diimpor di bagian atas.',
          code: [
            'package main',
            '',
            'import "fmt"',
            '',
            'func main() {',
            '    fmt.Println("Halo, dunia")',
            '}'
          ],
          output: 'Halo, dunia'
        },
        {
          name: 'Variabel (var dan :=)',
          usage: 'var mendeklarasikan variabel dengan tipe eksplisit. Tanda := adalah bentuk singkat yang menyimpulkan tipe, dan hanya boleh dipakai di dalam fungsi. Variabel yang dideklarasikan tetapi tidak dipakai menyebabkan error kompilasi.',
          code: [
            'var umur int = 20',
            'nama := "Dewi"',
            'tinggi := 1.65',
            'fmt.Println(nama, umur, tinggi)'
          ],
          output: 'Dewi 20 1.65'
        },
        {
          name: 'func dengan banyak nilai kembali',
          usage: 'Fungsi Go boleh mengembalikan lebih dari satu nilai. Pola yang umum: hasil dan error. Pemanggil wajib memeriksa error sebelum memakai hasilnya.',
          code: [
            'func bagi(a, b float64) (float64, error) {',
            '    if b == 0 {',
            '        return 0, fmt.Errorf("pembagi nol")',
            '    }',
            '    return a / b, nil',
            '}',
            '',
            'hasil, err := bagi(10, 4)',
            'fmt.Println(hasil, err)'
          ],
          output: '2.5 <nil>'
        },
        {
          name: 'for (satu-satunya perulangan)',
          usage: 'Go hanya punya for, tetapi bentuknya fleksibel: gaya tiga bagian, gaya while (hanya kondisi), dan range untuk menelusuri slice atau map.',
          code: [
            'for i := 1; i <= 3; i++ {',
            '    fmt.Print(i, " ")',
            '}',
            'buah := []string{"apel", "jeruk"}',
            'for idx, b := range buah {',
            '    fmt.Println(idx, b)',
            '}'
          ],
          output: '1 2 3 0 apel\n1 jeruk'
        },
        {
          name: 'Slice dan map',
          usage: 'Slice adalah daftar yang ukurannya bisa bertambah lewat append. Map menyimpan pasangan kunci dan nilai. Keduanya adalah struktur data yang paling sering dipakai di Go.',
          code: [
            'angka := []int{1, 2, 3}',
            'angka = append(angka, 4)',
            '',
            'umur := map[string]int{"Ani": 20, "Budi": 22}',
            'fmt.Println(len(angka), umur["Budi"])'
          ],
          output: '4 22'
        },
        {
          name: 'struct',
          usage: 'Mengelompokkan beberapa field menjadi satu tipe. Method ditulis di luar struct dengan menyebut penerimanya. Nama field berawalan huruf kapital bisa diakses dari paket lain.',
          code: [
            'type Siswa struct {',
            '    Nama  string',
            '    Nilai int',
            '}',
            '',
            'func (s Siswa) Sapa() string {',
            '    return "Halo, " + s.Nama',
            '}',
            '',
            'fmt.Println(Siswa{"Rina", 90}.Sapa())'
          ],
          output: 'Halo, Rina'
        }
      ]
    },
    {
      id: 'rust', name: 'Rust', category: 'prog', codeLang: 'rust',
      entries: [
        {
          name: 'fn main dan println!',
          usage: 'Titik awal program Rust adalah fungsi main. println! adalah macro (ditandai tanda seru) untuk mencetak teks, dengan {} sebagai penampung nilai.',
          code: [
            'fn main() {',
            '    let nama = "Dunia";',
            '    println!("Halo, {}", nama);',
            '}'
          ],
          output: 'Halo, Dunia'
        },
        {
          name: 'let dan mut',
          usage: 'Variabel di Rust tidak bisa diubah secara bawaan. Tambahkan mut bila nilainya memang perlu berubah. Aturan ini mencegah perubahan data yang tidak disengaja.',
          code: [
            'let x = 5;',
            'let mut y = 5;',
            'y += 1;',
            'println!("{} {}", x, y);',
            'x = 6;'
          ],
          output: 'Baris x = 6 ditolak compiler karena x tidak mut. Tanpa baris itu, hasilnya: 5 6'
        },
        {
          name: 'Ownership dan borrowing (&)',
          usage: 'Setiap nilai punya satu pemilik. Memberikan nilai ke variabel lain memindahkan kepemilikan, sehingga variabel lama tidak bisa dipakai lagi. Untuk sekadar meminjam, kirim referensi dengan &.',
          code: [
            'let a = String::from("halo");',
            'let b = a;',
            '// println!("{}", a);  error: a sudah dipindahkan',
            '',
            'let panjang = hitung(&b);',
            'println!("{} {}", b, panjang);',
            '',
            'fn hitung(s: &String) -> usize { s.len() }'
          ],
          output: 'halo 4. b masih bisa dipakai setelah dipinjam karena fungsi hanya menerima referensi.'
        },
        {
          name: 'match',
          usage: 'Mencocokkan sebuah nilai dengan beberapa pola, dan compiler memastikan semua kemungkinan tercakup. Tanda _ menangkap semua sisanya.',
          code: [
            'let hari = 3;',
            'let nama = match hari {',
            '    1 => "Senin",',
            '    2 => "Selasa",',
            '    3 => "Rabu",',
            '    _ => "Lainnya",',
            '};',
            'println!("{}", nama);'
          ],
          output: 'Rabu'
        },
        {
          name: 'struct dan impl',
          usage: 'struct mendefinisikan data, blok impl menambahkan method. &self berarti method meminjam instance tanpa mengambil kepemilikannya.',
          code: [
            'struct Persegi { sisi: u32 }',
            '',
            'impl Persegi {',
            '    fn luas(&self) -> u32 { self.sisi * self.sisi }',
            '}',
            '',
            'let p = Persegi { sisi: 4 };',
            'println!("{}", p.luas());'
          ],
          output: '16'
        },
        {
          name: 'Option dan Result',
          usage: 'Rust tidak punya null. Nilai yang mungkin kosong dibungkus Option (Some atau None), dan operasi yang mungkin gagal memakai Result (Ok atau Err). Operator ? meneruskan error ke pemanggil.',
          code: [
            'let angka: Result<i32, _> = "42".parse::<i32>();',
            'match angka {',
            '    Ok(n) => println!("Angka: {}", n),',
            '    Err(_) => println!("Bukan angka"),',
            '}'
          ],
          output: 'Angka: 42. Jika teksnya "abc", yang tercetak: Bukan angka'
        }
      ]
    },
    {
      id: 'kotlin', name: 'Kotlin', category: 'prog', codeLang: 'kotlin',
      entries: [
        {
          name: 'fun main dan println',
          usage: 'Titik awal program Kotlin adalah fungsi main. println mencetak teks dan pindah baris. Tanda titik koma di akhir baris tidak diperlukan.',
          code: [
            'fun main() {',
            '    println("Halo, dunia")',
            '}'
          ],
          output: 'Halo, dunia'
        },
        {
          name: 'val dan var',
          usage: 'val membuat variabel yang tidak bisa diganti nilainya, var yang bisa. Pilih val secara bawaan, lalu pakai var hanya bila memang perlu berubah. String template memakai $ untuk menyisipkan nilai.',
          code: [
            'val nama = "Sari"',
            'var skor = 10',
            'skor += 5',
            'println("$nama: $skor")'
          ],
          output: 'Sari: 15'
        },
        {
          name: 'fun dengan nilai default',
          usage: 'Fungsi dideklarasikan dengan fun. Parameter boleh punya nilai default dan boleh dipanggil dengan nama, sehingga urutan argumen tidak lagi penting. Fungsi satu ekspresi bisa ditulis dengan tanda =.',
          code: [
            'fun sapa(nama: String, salam: String = "Halo") = "$salam, $nama!"',
            '',
            'println(sapa("Budi"))',
            'println(sapa(salam = "Selamat pagi", nama = "Ani"))'
          ],
          output: 'Halo, Budi!\nSelamat pagi, Ani!'
        },
        {
          name: 'Null safety (? dan ?:)',
          usage: 'Tipe yang boleh null ditandai ?. Operator ?. memanggil dengan aman, dan operator ?: (Elvis) memberi nilai cadangan bila hasilnya null. Cara ini menghindari NullPointerException.',
          code: [
            'var nama: String? = null',
            'println(nama?.length)',
            'println(nama ?: "Tanpa nama")'
          ],
          output: 'null\nTanpa nama'
        },
        {
          name: 'when',
          usage: 'Pengganti switch yang lebih kuat. when bisa mencocokkan nilai, rentang, atau tipe, dan bisa dipakai sebagai ekspresi yang menghasilkan nilai.',
          code: [
            'val nilai = 75',
            'val huruf = when {',
            '    nilai >= 85 -> "A"',
            '    nilai >= 70 -> "B"',
            '    else -> "C"',
            '}',
            'println(huruf)'
          ],
          output: 'B'
        },
        {
          name: 'data class',
          usage: 'Class khusus untuk menyimpan data. Kotlin otomatis membuatkan toString, equals, hashCode, dan copy. Cocok untuk model data seperti pengguna atau produk.',
          code: [
            'data class Pengguna(val nama: String, val umur: Int)',
            '',
            'val a = Pengguna("Rina", 20)',
            'val b = a.copy(umur = 21)',
            'println(a)',
            'println(b)'
          ],
          output: 'Pengguna(nama=Rina, umur=20)\nPengguna(nama=Rina, umur=21)'
        }
      ]
    },
    {
      id: 'bash', name: 'Bash', category: 'prog', codeLang: 'bash',
      entries: [
        {
          name: 'echo dan variabel',
          usage: 'echo mencetak teks. Variabel dibuat tanpa spasi di sekitar tanda sama dengan, dan dibaca dengan awalan $. Beri tanda kutip ganda agar nilai yang mengandung spasi tetap utuh.',
          code: [
            'nama="Dunia"',
            'echo "Halo, $nama"'
          ],
          output: 'Halo, Dunia'
        },
        {
          name: 'ls, cd, pwd',
          usage: 'Perintah navigasi dasar. pwd menunjukkan folder aktif, ls mendaftar isinya (ls -l untuk rincian), dan cd berpindah folder. cd .. naik satu tingkat.',
          code: [
            'pwd',
            'ls -l',
            'cd proyek',
            'cd ..'
          ],
          output: 'Baris pertama mencetak path folder aktif, baris kedua mendaftar file beserta ukuran dan izinnya. Dua baris terakhir berpindah folder tanpa mencetak apa pun.'
        },
        {
          name: 'mkdir, cp, mv, rm',
          usage: 'Mengelola file dan folder. mkdir membuat folder, cp menyalin, mv memindah atau mengganti nama, rm menghapus. rm tidak memakai tempat sampah, jadi periksa dulu sebelum menghapus.',
          code: [
            'mkdir cadangan',
            'cp data.txt cadangan/',
            'mv data.txt arsip.txt',
            'rm arsip.txt'
          ],
          output: 'Folder cadangan dibuat berisi salinan data.txt. File asli lalu diganti nama menjadi arsip.txt dan akhirnya dihapus.'
        },
        {
          name: 'Pipe (|) dan redirect (>)',
          usage: 'Pipe mengirim keluaran satu perintah sebagai masukan perintah berikutnya. Tanda > menulis keluaran ke file (menimpa), dan >> menambahkan di akhir file.',
          code: [
            'ls | wc -l',
            'echo "baris baru" >> catatan.txt',
            'grep "error" log.txt > hasil.txt'
          ],
          output: 'Baris pertama mencetak jumlah file di folder. Baris kedua menambah satu baris ke catatan.txt. Baris ketiga menyimpan semua baris log yang memuat kata error ke hasil.txt.'
        },
        {
          name: 'if dan test ([ ])',
          usage: 'Memilih perintah berdasarkan kondisi. Beri spasi di dalam kurung siku. Beberapa pemeriksaan umum: -f file ada, -d folder ada, -z teks kosong, -eq untuk membandingkan angka.',
          code: [
            'if [ -f "config.txt" ]; then',
            '  echo "Config ditemukan"',
            'else',
            '  echo "Config tidak ada"',
            'fi'
          ],
          output: 'Mencetak Config ditemukan bila file config.txt ada di folder aktif, jika tidak mencetak Config tidak ada.'
        },
        {
          name: 'for loop',
          usage: 'Mengulang perintah untuk setiap item dalam daftar atau hasil pola file. Gunakan tanda kutip di sekitar variabel agar nama file berspasi tidak pecah.',
          code: [
            'for f in *.txt; do',
            '  echo "Memproses $f"',
            'done'
          ],
          output: 'Satu baris Memproses nama-file untuk setiap file berakhiran .txt di folder aktif.'
        }
      ]
    },
    {
      id: 'ruby', name: 'Ruby', category: 'prog', codeLang: 'ruby',
      entries: [
        {
          name: 'puts dan variabel',
          usage: 'puts mencetak nilai dan pindah baris. Variabel tidak perlu dideklarasikan tipenya. Interpolasi memakai #{ } di dalam string berkutip ganda.',
          code: [
            'nama = "Sari"',
            'umur = 24',
            'puts "#{nama} berumur #{umur} tahun"'
          ],
          output: 'Sari berumur 24 tahun'
        },
        {
          name: 'if, elsif, else',
          usage: 'Percabangan berakhir dengan kata end. Ruby juga mengenal bentuk modifier satu baris, yaitu puts "lulus" if nilai >= 70, dan kata unless sebagai kebalikan if.',
          code: [
            'nilai = 75',
            'if nilai >= 85',
            '  puts "A"',
            'elsif nilai >= 70',
            '  puts "B"',
            'else',
            '  puts "C"',
            'end'
          ],
          output: 'B'
        },
        {
          name: 'Array dan each',
          usage: 'Array menyimpan daftar nilai. Method each menjalankan blok untuk setiap elemen. Ruby lebih suka each daripada perulangan for.',
          code: [
            'buah = ["apel", "jeruk", "mangga"]',
            'buah.each do |b|',
            '  puts b',
            'end'
          ],
          output: 'apel\njeruk\nmangga'
        },
        {
          name: 'Hash',
          usage: 'Menyimpan pasangan kunci dan nilai. Simbol (diawali titik dua) umum dipakai sebagai kunci karena ringan. Nilai dibaca lewat kunci di dalam kurung siku.',
          code: [
            'siswa = { nama: "Rina", kelas: 10 }',
            'siswa[:nilai] = 90',
            'puts siswa[:nama]',
            'puts siswa.length'
          ],
          output: 'Rina\n3'
        },
        {
          name: 'def (method)',
          usage: 'Mendefinisikan method. Nilai ekspresi terakhir otomatis menjadi nilai kembalian, jadi return biasanya tidak ditulis. Parameter boleh punya nilai default.',
          code: [
            'def sapa(nama, salam = "Halo")',
            '  "#{salam}, #{nama}!"',
            'end',
            '',
            'puts sapa("Budi")'
          ],
          output: 'Halo, Budi!'
        },
        {
          name: 'map dan select',
          usage: 'map membuat array baru dari hasil blok untuk tiap elemen, select menyaring elemen yang lolos syarat. Keduanya tidak mengubah array asli.',
          code: [
            'angka = [1, 2, 3, 4]',
            'p angka.map { |n| n * n }',
            'p angka.select(&:even?)'
          ],
          output: '[1, 4, 9, 16]\n[2, 4]'
        }
      ]
    }
  );
})();
