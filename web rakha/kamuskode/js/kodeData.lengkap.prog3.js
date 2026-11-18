/* KamusKode - pelengkap sintaks Go, Rust, Kotlin, Bash, Ruby. */
(function () {
  if (!window.KODE_DATA || !Array.isArray(window.KODE_DATA.languages)) return;
  var L = window.KODE_DATA.languages;
  function lang(id) { for (var i = 0; i < L.length; i++) if (L[i].id === id) return L[i]; return null; }
  function add(id, entries) { var l = lang(id); if (l && Array.isArray(l.entries)) l.entries = l.entries.concat(entries); }

  add('go', [
    {
      name: 'defer',
      usage: 'Menunda eksekusi fungsi sampai fungsi sekitarnya selesai. Sering untuk menutup file atau koneksi.',
      pemahaman: { inti: 'defer dijalankan LIFO (terakhir masuk, pertama keluar).', poin: ['Pastikan argumen defer dievaluasi saat defer dipanggil.'] },
      code: ['func baca() {', '    f, _ := os.Open("data.txt")', '    defer f.Close()', '    // gunakan f', '}'],
      output: 'File ditutup otomatis saat baca() selesai, walau terjadi error.'
    },
    {
      name: 'goroutine (go)',
      usage: 'Menjalankan fungsi secara konkuren. Kata kunci go memulai goroutine ringan.',
      pemahaman: { inti: 'Gunakan channel atau sync.WaitGroup untuk sinkronisasi.', poin: ['Program utama tidak menunggu goroutine tanpa sinkronisasi.'] },
      code: ['var wg sync.WaitGroup', 'wg.Add(1)', 'go func() {', '    defer wg.Done()', '    fmt.Println("dari goroutine")', '}()', 'wg.Wait()'],
      output: 'dari goroutine'
    },
    {
      name: 'channel (chan)',
      usage: 'Mengirim nilai antar goroutine. Buat dengan make(chan T); kirim dengan <- dan terima dengan <-ch.',
      pemahaman: { inti: 'Channel adalah pipa aman antar goroutine.', poin: ['close(ch) menutup channel.'] },
      code: ['ch := make(chan string)', 'go func() { ch <- "halo" }()', 'fmt.Println(<-ch)'],
      output: 'halo'
    }
  ]);

  add('rust', [
    {
      name: 'Vec dan HashMap',
      usage: 'Vec<T> adalah array dinamis. HashMap<K,V> menyimpan pasangan kunci-nilai.',
      pemahaman: { inti: 'Keduanya di library standar, bukan bawaan bahasa.', poin: ['vec.push menambah, map.insert menyisipkan.'] },
      code: ['let mut v = vec![1, 2];', 'v.push(3);', 'let mut m = std::collections::HashMap::new();', 'm.insert("a", 1);', 'println!("{:?} {:?}", v, m);'],
      output: '[1, 2, 3] {"a": 1}'
    },
    {
      name: 'Iterator (map, filter, collect)',
      usage: 'Rangkaian operasi malas pada koleksi. collect mengumpulkan hasil menjadi koleksi baru.',
      pemahaman: { inti: 'Iterator tidak mengubah koleksi asli.', poin: ['Gunakan .iter() untuk meminjam.'] },
      code: ['let v = vec![1, 2, 3, 4];', 'let kuadrat: Vec<i32> = v.iter().map(|x| x * x).collect();', 'println!("{:?}", kuadrat);'],
      output: '[1, 4, 9, 16]'
    },
    {
      name: 'trait dan impl',
      usage: 'Trait mendefinisikan perilaku bersama. impl Trait for Tipe menyediakan implementasinya.',
      pemahaman: { inti: 'Mirip interface, tapi bisa punya default method.', poin: ['fn luas(&self) -> f64; mendefinisikan method wajib.'] },
      code: ['trait Bentuk { fn luas(&self) -> f64; }', 'struct Persegi(f64);', 'impl Bentuk for Persegi {', '    fn luas(&self) -> f64 { self.0 * self.0 }', '}', 'println!("{}", Persegi(3.0).luas());'],
      output: '9'
    }
  ]);

  add('kotlin', [
    {
      name: 'lambda dan higher-order function',
      usage: 'Fungsi bisa menerima fungsi lain sebagai parameter atau mengembalikannya.',
      pemahaman: { inti: 'Lambda ditulis { x -> ... }.', poin: ['it merujuk parameter tunggal.'] },
      code: ['fun hitung(a: Int, b: Int, op: (Int, Int) -> Int) = op(a, b)', 'println(hitung(3, 4) { x, y -> x * y })'],
      output: '12'
    },
    {
      name: 'listOf dan map',
      usage: 'Koleksi immutable listOf/mapOf, dan mutable mutableListOf/mutableMapOf.',
      pemahaman: { inti: 'listOf tidak bisa diubah setelah dibuat.', poin: ['Gunakan map/filter untuk transformasi.'] },
      code: ['val buah = listOf("apel", "jeruk")', 'val umur = mapOf("Ani" to 20)', 'println(buah.map { it.uppercase() })', 'println(umur["Ani"])'],
      output: '[APEL, JERUK]\\n20'
    },
    {
      name: 'try / catch / finally',
      usage: 'Menangani exception. try bisa menjadi ekspresi yang mengembalikan nilai.',
      pemahaman: { inti: 'Kotlin tidak punya checked exception.', poin: ['catch menangkap tipe tertentu.'] },
      code: ['val hasil = try { "10".toInt() } catch (e: NumberFormatException) { 0 }', 'println(hasil)'],
      output: '10'
    }
  ]);

  add('bash', [
    {
      name: 'Variabel dan parameter khusus',
      usage: '$1, $2 adalah argumen posisi. $#, $@, $? memberi jumlah argumen, semua argumen, dan status keluar terakhir.',
      pemahaman: { inti: 'Kutip "$@" agar argumen berspasi tetap utuh.', poin: ['$? bernilai 0 berarti sukses.'] },
      code: ['echo "Skrip: $0"', 'echo "Jumlah argumen: $#"', 'for a in "$@"; do echo "- $a"; done'],
      output: 'Menampilkan nama skrip, jumlah argumen, lalu tiap argumen satu per baris.'
    },
    {
      name: 'Fungsi',
      usage: 'Mendefinisikan fungsi dengan nama() { ... }. Parameter diakses lewat $1, $2.',
      pemahaman: { inti: 'Fungsi tidak punya return nilai; gunakan echo + $(...).', poin: ['return hanya untuk status keluar.'] },
      code: ['sapa() { echo "Halo, $1"; }', 'sapa "Dunia"'],
      output: 'Halo, Dunia'
    },
    {
      name: 'while read (membaca baris file)',
      usage: 'Membaca file baris demi baris dengan aman.',
      pemahaman: { inti: 'Gunakan IFS= dan read -r agar spasi/backslash tidak rusak.', poin: ['Redirect < file.'] },
      code: ['while IFS= read -r baris; do', '  echo "Baris: $baris"', 'done < data.txt'],
      output: 'Satu baris "Baris: ..." untuk setiap baris di data.txt.'
    }
  ]);

  add('ruby', [
    {
      name: 'each_with_index dan map',
      usage: 'Iterasi dengan indeks memakai each_with_index, transformasi memakai map.',
      pemahaman: { inti: 'Blok |item, i| menerima nilai dan indeks.', poin: ['map mengembalikan array baru.'] },
      code: ['buah = ["apel", "jeruk"]', 'buah.each_with_index { |b, i| puts "#{i}: #{b}" }', 'p buah.map { |b| b.upcase }'],
      output: '0: apel\\n1: jeruk\\n["APEL", "JERUK"]'
    },
    {
      name: 'class dan attr_accessor',
      usage: 'attr_accessor membuat getter/setter otomatis untuk properti.',
      pemahaman: { inti: 'Instance variable diawali @.', poin: ['initialize adalah konstruktor.'] },
      code: ['class Siswa', '  attr_accessor :nama', '  def initialize(nama)', '    @nama = nama', '  end', 'end', 'puts Siswa.new("Rina").nama'],
      output: 'Rina'
    },
    {
      name: 'begin / rescue / ensure',
      usage: 'Menangani exception. rescue menangkap error, ensure selalu dijalankan.',
      pemahaman: { inti: 'Setara try/catch/finally di bahasa lain.', poin: ['rescue => e memberi akses objek error.'] },
      code: ['begin', '  raise "Gagal"', 'rescue => e', '  puts e.message', 'ensure', '  puts "selesai"', 'end'],
      output: 'Gagal\\nselesai'
    }
  ]);
})();
