/* KamusKode - profil ringkas setiap bahasa. Menempel ke KODE_DATA.languages lewat id.
 * Field: kategori, kegunaan, tempatBerjalan, keunggulan, kapanMemilih.
 */
(function () {
  if (!window.KODE_DATA || !Array.isArray(window.KODE_DATA.languages)) return;
  var PROFIL = {
    html: {
      kategori: 'Bahasa Markup',
      kegunaan: 'Menyusun kerangka isi setiap halaman web, mulai dari judul, paragraf, gambar, sampai formulir.',
      tempatBerjalan: 'Langsung di browser (client-side); browser membaca tag lalu menampilkannya.',
      keunggulan: 'Wajib dikuasai karena semua halaman web dibangun di atas HTML.',
      kapanMemilih: 'Pilih HTML saat membuat struktur halaman, blog, portofolio, atau dasar aplikasi web.'
    },
    css: {
      kategori: 'Bahasa Styling',
      kegunaan: 'Mengatur warna, huruf, jarak, tata letak, dan animasi halaman web.',
      tempatBerjalan: 'Langsung di browser (client-side); browser menerapkan aturan gaya ke elemen.',
      keunggulan: 'Memisahkan desain dari struktur sehingga tampilan mudah diubah dan dirawat.',
      kapanMemilih: 'Pilih CSS saat ingin halaman terlihat rapi, responsif, dan sesuai identitas desain.'
    },
    xml: {
      kategori: 'Bahasa Markup',
      kegunaan: 'Menyimpan dan bertukar data terstruktur antar aplikasi dengan tag yang kamu tentukan sendiri.',
      tempatBerjalan: 'Dibaca aplikasi atau parser di server maupun perangkat pengguna.',
      keunggulan: 'Sangat fleksibel dan menjadi format standar pertukaran data, konfigurasi, dan dokumen.',
      kapanMemilih: 'Pilih XML bila butuh format data dengan struktur ketat dan skema yang jelas.'
    },
    markdown: {
      kategori: 'Bahasa Markup',
      kegunaan: 'Menulis dokumentasi, catatan, dan README dengan format sederhana yang mudah dibaca sebagai teks biasa.',
      tempatBerjalan: 'Dikonversi menjadi HTML oleh aplikasi seperti GitHub, editor, atau generator situs.',
      keunggulan: 'Ringan dan cepat ditulis sehingga menjadi standar dokumentasi di dunia pemrograman.',
      kapanMemilih: 'Pilih Markdown saat menulis dokumentasi proyek, catatan, atau artikel yang rapi tanpa editor berat.'
    },
    json: {
      kategori: 'Bahasa Markup',
      kegunaan: 'Menyimpan dan mengirim data antar aplikasi, terutama dari server ke halaman web.',
      tempatBerjalan: 'Dibaca aplikasi di browser, server, maupun penyimpanan lokal.',
      keunggulan: 'Ringkas dan mudah dibaca mesin sehingga menjadi format data paling umum di web.',
      kapanMemilih: 'Pilih JSON saat mengirim data API, menyimpan konfigurasi, atau bertukar data antar layanan.'
    },
    javascript: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Membuat halaman web interaktif dan menjalankan logika di server lewat Node.js.',
      tempatBerjalan: 'Di browser (client-side) atau di server lewat Node.js (server-side).',
      keunggulan: 'Satu bahasa untuk frontend dan backend, dengan ekosistem library terbesar di dunia.',
      kapanMemilih: 'Pilih JavaScript untuk situs interaktif, aplikasi web, atau API ringan dengan Node.js.'
    },
    typescript: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Menulis aplikasi web berskala besar dengan sistem tipe yang mengurangi kesalahan.',
      tempatBerjalan: 'Dikompilasi menjadi JavaScript, lalu berjalan di browser atau server.',
      keunggulan: 'Pemeriksaan tipe saat menulis kode membuat proyek besar lebih aman dan mudah dirawat.',
      kapanMemilih: 'Pilih TypeScript untuk proyek tim besar, aplikasi berskala, atau saat ingin kode lebih aman.'
    },
    python: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Membuat skrip, backend web, otomasi, hingga aplikasi kecerdasan buatan dan analisis data.',
      tempatBerjalan: 'Di server atau komputer sendiri lewat interpreter Python.',
      keunggulan: 'Sintaksnya paling mudah dibaca sehingga cocok bagi pemula dan sangat kuat di bidang data serta AI.',
      kapanMemilih: 'Pilih Python untuk otomasi, analisis data, machine learning, atau backend dengan Django/FastAPI.'
    },
    php: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Membangun situs dan aplikasi web dinamis di sisi server, termasuk WordPress dan Laravel.',
      tempatBerjalan: 'Di server (server-side); pengunjung hanya menerima hasil HTML-nya.',
      keunggulan: 'Sudah mendarah daging di web dan didukung hampir semua layanan hosting.',
      kapanMemilih: 'Pilih PHP saat membuat situs dinamis, toko online, atau memakai WordPress dan Laravel.'
    },
    sql: {
      kategori: 'Bahasa Kueri Database',
      kegunaan: 'Mengambil, menambah, mengubah, dan menghapus data di database relasional.',
      tempatBerjalan: 'Di dalam sistem database seperti MySQL, PostgreSQL, atau SQL Server.',
      keunggulan: 'Standar industri untuk mengelola data terstruktur di hampir semua aplikasi.',
      kapanMemilih: 'Pilih SQL saat aplikasi perlu menyimpan dan mencari data yang rapi di database relasional.'
    },
    java: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Membangun aplikasi perusahaan, sistem perbankan, backend, dan aplikasi Android lama.',
      tempatBerjalan: 'Dikompilasi ke bytecode lalu dijalankan di Java Virtual Machine (JVM) di server atau perangkat.',
      keunggulan: 'Stabil, cepat, dan sangat matang untuk sistem besar yang berjalan bertahun-tahun.',
      kapanMemilih: 'Pilih Java untuk aplikasi enterprise, backend berskala besar, atau sistem yang butuh keandalan tinggi.'
    },
    c: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Membuat sistem operasi, mikrokontroler, dan perangkat tertanam yang butuh kontrol penuh atas memori.',
      tempatBerjalan: 'Dikompilasi langsung menjadi kode mesin yang dijalankan sistem operasi.',
      keunggulan: 'Sangat cepat dan efisien karena dekat dengan perangkat keras.',
      kapanMemilih: 'Pilih C untuk pemrograman sistem, embedded, atau saat butuh performa dan kontrol memori penuh.'
    },
    cpp: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Membuat game berat, perangkat lunak grafis, dan aplikasi yang menuntut performa tinggi.',
      tempatBerjalan: 'Dikompilasi menjadi kode mesin yang berjalan langsung di sistem operasi.',
      keunggulan: 'Performa tinggi dengan fitur berorientasi objek, menjadi standar game engine seperti Unreal.',
      kapanMemilih: 'Pilih C++ untuk game, aplikasi grafis, atau program yang butuh kecepatan maksimal.'
    },
    csharp: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Membuat game dengan Unity, aplikasi desktop Windows, dan backend enterprise di .NET.',
      tempatBerjalan: 'Dikompilasi lalu dijalankan di runtime .NET pada Windows, server, atau perangkat lain.',
      keunggulan: 'Terintegrasi kuat dengan ekosistem Microsoft dan populer untuk pengembangan game Unity.',
      kapanMemilih: 'Pilih C# untuk game Unity, aplikasi Windows, atau backend .NET.'
    },
    go: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Membangun server, API, dan infrastruktur cloud berskala besar yang cepat dan ringan.',
      tempatBerjalan: 'Dikompilasi menjadi satu executable yang berjalan di server atau sistem operasi.',
      keunggulan: 'Ringan, cepat, dan mudah dipakai untuk konkurensi sehingga digemari layanan cloud.',
      kapanMemilih: 'Pilih Go untuk backend, microservice, atau layanan jaringan yang butuh performa dan kesederhanaan.'
    },
    rust: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Membuat sistem yang aman dan cepat, pengganti modern untuk C/C++ di banyak proyek.',
      tempatBerjalan: 'Dikompilasi menjadi kode mesin yang berjalan langsung di sistem operasi.',
      keunggulan: 'Keamanan memori terjamin tanpa pengumpul sampah, tetap secepat C/C++.',
      kapanMemilih: 'Pilih Rust untuk sistem kritis, program jaringan, atau saat butuh performa dan keamanan memori.'
    },
    kotlin: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Mengembangkan aplikasi Android modern dan juga backend lewat JVM.',
      tempatBerjalan: 'Dikompilasi ke bytecode JVM atau menjadi aplikasi native Android.',
      keunggulan: 'Bahasa resmi Android yang ringkas, aman dari null, dan terintegrasi dengan Java.',
      kapanMemilih: 'Pilih Kotlin untuk aplikasi Android modern atau backend JVM yang ringkas.'
    },
    swift: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Membuat aplikasi untuk iPhone, iPad, dan macOS di ekosistem Apple.',
      tempatBerjalan: 'Dikompilasi menjadi aplikasi native yang berjalan di perangkat Apple.',
      keunggulan: 'Bahasa resmi Apple yang cepat, aman, dan terasa modern.',
      kapanMemilih: 'Pilih Swift untuk aplikasi iOS, iPadOS, atau macOS.'
    },
    dart: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Membangun aplikasi Android dan iOS sekaligus lewat framework Flutter.',
      tempatBerjalan: 'Dikompilasi menjadi kode native aplikasi mobile atau berjalan di browser.',
      keunggulan: 'Satu basis kode untuk Android dan iOS dengan performa mendekati native.',
      kapanMemilih: 'Pilih Dart saat ingin membuat aplikasi mobile Android dan iOS dari satu kode dengan Flutter.'
    },
    ruby: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Membangun aplikasi web cepat lewat framework Ruby on Rails, populer di kalangan startup.',
      tempatBerjalan: 'Di server (server-side) lewat interpreter Ruby.',
      keunggulan: 'Sintaksnya enak dibaca dan Rails mempercepat pembuatan aplikasi web.',
      kapanMemilih: 'Pilih Ruby saat membangun aplikasi web dengan Rails atau prototipe cepat.'
    },
    bash: {
      kategori: 'Bahasa Skrip',
      kegunaan: 'Mengotomatisasi tugas di Linux dan server, seperti mengelola file dan menjalankan perintah.',
      tempatBerjalan: 'Di terminal shell pada sistem operasi Linux, macOS, atau WSL.',
      keunggulan: 'Langsung tersedia di hampir semua sistem Unix dan ampuh untuk otomasi.',
      kapanMemilih: 'Pilih Bash untuk otomasi server, penjadwalan tugas, atau skrip perintah harian.'
    },
    powershell: {
      kategori: 'Bahasa Skrip',
      kegunaan: 'Mengelola dan mengotomatisasi sistem operasi Windows serta layanan cloud Microsoft.',
      tempatBerjalan: 'Di terminal PowerShell pada Windows, Linux, atau macOS.',
      keunggulan: 'Bekerja dengan objek, bukan sekadar teks, sehingga otomasi Windows sangat kuat.',
      kapanMemilih: 'Pilih PowerShell untuk administrasi Windows dan otomasi tugas sistem.'
    },
    r: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Menganalisis data statistik, riset ilmiah, dan membuat visualisasi data.',
      tempatBerjalan: 'Di komputer analis lewat interpreter R atau di server analitik.',
      keunggulan: 'Kaya pustaka statistik dan visualisasi, favorit di dunia akademik dan data science.',
      kapanMemilih: 'Pilih R untuk analisis statistik, riset, atau visualisasi data ilmiah.'
    },
    matlab: {
      kategori: 'Bahasa Pemrograman',
      kegunaan: 'Simulasi ilmiah, pemrosesan sinyal, dan perhitungan teknik di bidang matematika terapan.',
      tempatBerjalan: 'Di lingkungan MATLAB pada komputer atau server komputasi.',
      keunggulan: 'Kuat untuk perhitungan matriks dan simulasi teknik dengan alat siap pakai.',
      kapanMemilih: 'Pilih MATLAB untuk simulasi teknik, pemrosesan sinyal, atau riset matematika terapan.'
    },
    lua: {
      kategori: 'Bahasa Skrip',
      kegunaan: 'Menulis skrip ringan di dalam game dan aplikasi, misalnya Roblox dan World of Warcraft.',
      tempatBerjalan: 'Ditanamkan di dalam aplikasi atau game sebagai mesin skrip.',
      keunggulan: 'Sangat ringan dan mudah ditanam sehingga jadi pilihan populer untuk skrip game.',
      kapanMemilih: 'Pilih Lua untuk skrip game, mod, atau menambahkan logika ringan ke aplikasi.'
    }
  };
  window.KODE_DATA.languages.forEach(function (l) {
    if (PROFIL[l.id]) l.profil = PROFIL[l.id];
  });
})();
