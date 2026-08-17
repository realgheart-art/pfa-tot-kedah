/* ==========================================================
   soalan.js — Bank Soalan Kuiz
   Sistem Latihan Jurulatih PFA · JPN Kedah

   Struktur:
     { unit, jenis:'mcq'|'multi', senario?, soalan, pilihan[], jawapan (index|array),
       rasional, rujuk }
   Syarat lulus: 80% setiap unit.
   Untuk menambah soalan: tambah objek di bawah, naikkan CACHE_VER dalam sw.js.
   ========================================================== */

const SOALAN = [

/* ---------- UNIT 1 · Konsep & pembezaan ---------- */
{ unit:1, jenis:'mcq',
  soalan:'Apakah tujuan utama Bantuan Awal Psikologi (PFA)?',
  pilihan:[
    'Menyembuhkan trauma mangsa secara profesional',
    'Memberi kelegaan awal, memastikan keselamatan, dan mengelakkan keadaan emosi menjadi lebih teruk',
    'Membuat diagnosis awal supaya rawatan boleh dimulakan',
    'Menggantikan sesi kaunseling yang memerlukan masa panjang'
  ], jawapan:1,
  rasional:'PFA bertujuan meredakan ketegangan emosi ketika krisis — bukan menyembuhkan. Memahami had ini melindungi mangsa daripada intervensi melebihi kompetensi petugas, dan melegakan petugas daripada tekanan untuk "membetulkan" segala-galanya.',
  rujuk:'Unit 1.2 — Definisi PFA' },

{ unit:1, jenis:'mcq',
  senario:'Seorang guru mata pelajaran bertanya kepada anda: "Saya bukan kaunselor, boleh ke saya buat PFA?"',
  soalan:'Apakah jawapan yang paling tepat?',
  pilihan:[
    'Tidak boleh — PFA hanya untuk GBK dan profesional kesihatan mental',
    'Boleh, tetapi hanya jika GBK tiada di sekolah pada hari tersebut',
    'Boleh — seperti bantuan mula kecederaan, sesiapa yang telah dilatih boleh menjalankan PFA',
    'Boleh, tetapi perlu kelulusan bertulis daripada Pengarah Pendidikan Negeri'
  ], jawapan:2,
  rasional:'WHO (2011) menegaskan PFA seperti first aid — sesiapa boleh dilatih dan mereka yang dilatih boleh melaksanakannya. Menghadkan PFA kepada GBK sahaja mewujudkan sistem yang runtuh sebaik GBK tiada.',
  rujuk:'Unit 1.2 — Definisi PFA' },

{ unit:1, jenis:'mcq',
  soalan:'Manakah antara berikut merupakan ciri KAUNSELING dan bukan PFA?',
  pilihan:[
    'Memastikan mangsa mendapat air dan tempat berlindung yang selamat',
    'Proses terapi jangka panjang yang berstruktur dalam persekitaran kondusif',
    'Menghubungkan mangsa dengan ibu bapa atau penjaga',
    'Memerhati tanda tekanan seperti panik dan gelisah'
  ], jawapan:1,
  rasional:'Kaunseling melibatkan proses terapi mendalam, berstruktur dan memerlukan bilik kaunseling. Tiga pilihan lain adalah tindakan PFA yang boleh dilakukan di mana-mana oleh sesiapa yang terlatih.',
  rujuk:'Unit 1.3 — Perbezaan PFA dengan Kaunseling' },

{ unit:1, jenis:'mcq',
  soalan:'Dalam konsep Pemilikan dan Kepimpinan Krisis, apakah peranan GBK/GBLD?',
  pilihan:[
    'Pelaksana tunggal semua intervensi emosi di sekolah',
    'Pakar Rujuk Bidang (SME) dan penyelaras strategik yang mengupayakan pasukan',
    'Pegawai perhubungan awam yang menguruskan kenyataan media',
    'Pemantau disiplin murid yang terlibat dalam kejadian'
  ], jawapan:1,
  rasional:'Modul ini mengangkat GBK/GBLD daripada pelaksana tunggal kepada SME dan penyelaras strategik. Nilai mereka diukur pada berapa ramai warga sekolah yang diupayakan, bukan berapa ramai murid yang dilihat sendiri.',
  rujuk:'Unit 1.4 — Ownership and Leadership' },

{ unit:1, jenis:'multi',
  soalan:'Siapakah yang boleh menjadi ahli Pasukan PFA Sekolah sebagai "Pemilik Bersama"? (Pilih semua yang betul)',
  pilihan:[
    'Guru kelas dan guru mata pelajaran',
    'Anggota Kumpulan Pelaksana (AKP) termasuk pengawal keselamatan',
    'Pentadbir sekolah',
    'Hanya kaunselor berdaftar dengan Lembaga Kaunselor'
  ], jawapan:[0,1,2],
  rasional:'PFA ialah tanggungjawab bersama. AKP sering menjadi orang pertama di lokasi — pengawal keselamatan atau pekerja pembersihan mungkin yang mula-mula menemui sesuatu yang membimbangkan. Menghadkan kepada kaunselor berdaftar bercanggah dengan seluruh falsafah modul.',
  rujuk:'Unit 1.4 — Warga pendidikan sebagai Pemilik Bersama' },

/* ---------- UNIT 2 · Pengecaman & klasifikasi ---------- */
{ unit:2, jenis:'mcq',
  soalan:'Mengapa kesihatan mental digambarkan sebagai satu "spektrum"?',
  pilihan:[
    'Kerana setiap orang mempunyai satu tahap tetap sepanjang hayat',
    'Kerana ia bersifat dinamik — individu boleh bergerak antara tahap bergantung pada faktor semasa',
    'Kerana hanya doktor boleh menentukan kedudukan seseorang',
    'Kerana ia hanya terpakai kepada murid, bukan guru'
  ], jawapan:1,
  rasional:'Melihatnya sebagai spektrum menghalang pelabelan kekal dan mengingatkan bahawa pergerakan ke arah pulih sentiasa mungkin. Murid yang menunjukkan distres teruk minggu lepas boleh kembali sejahtera apabila faktor sekelilingnya berubah.',
  rujuk:'Unit 2.1 — Spektrum Kesihatan Mental' },

{ unit:2, jenis:'mcq',
  senario:'Seorang murid Tingkatan 2 kerap mengadu sakit perut dan sakit kepala sejak seminggu selepas kejadian banjir. Pemeriksaan klinik tidak menemui punca perubatan.',
  soalan:'Ini paling tepat dikategorikan sebagai kesan psikologi jenis apa?',
  pilihan:['Kognitif','Fizikal','Emosi','Tingkah laku'],
  jawapan:1,
  rasional:'Aduan somatik seperti sakit kepala dan sakit perut tanpa punca perubatan adalah kesan FIZIKAL. Kanak-kanak dan remaja sering tidak mempunyai kosa kata untuk emosi, jadi tekanan keluar melalui badan — jangan diabaikan sebagai alasan hendak keluar kelas.',
  rujuk:'Unit 2.4 — Kesan Psikologi (Fizikal)' },

{ unit:2, jenis:'mcq',
  senario:'Selepas kematian seorang rakan sekelas, seorang murid tidak menangis langsung, tidak menunjukkan sebarang reaksi, dan berkata dia "tak rasa apa-apa".',
  soalan:'Apakah tafsiran yang paling tepat?',
  pilihan:[
    'Murid ini tidak terjejas dan tidak memerlukan perhatian',
    'Murid ini berdaya tahan tinggi dan boleh dijadikan contoh',
    'Ini mungkin emotional numbness — tanda distres yang perlu diberi perhatian',
    'Murid ini tidak rapat dengan mangsa, jadi tiada isu'
  ], jawapan:2,
  rasional:'Rasa "kosong" dan disosiasi adalah tanda distres serius — minda menutup diri kerana emosi terlalu berat. Petugas sering paling bimbang tentang murid yang menangis kuat, sedangkan murid yang senyap juga perlu diperhatikan.',
  rujuk:'Unit 2.4 — Kesan Psikologi (Emosi)' },

{ unit:2, jenis:'mcq',
  senario:'Seorang murid Tahun 3 mula kencing malam dan terlalu melekat pada guru kelas selepas kejadian kebakaran di rumahnya.',
  soalan:'Bagaimanakah petugas patut memahami tingkah laku ini?',
  pilihan:[
    'Ini regresi — tindak balas normal terhadap trauma, memerlukan rasa selamat dan rutin',
    'Ini tingkah laku manja yang perlu ditegur supaya tidak berterusan',
    'Ini tanda penyakit mental yang memerlukan rujukan psikiatri segera',
    'Ini percubaan mendapatkan perhatian dan patut diabaikan'
  ], jawapan:0,
  rasional:'Regresi ialah pengunduran kepada tahap perkembangan yang terasa lebih selamat. Menegur atau memalukan murid akan memburukkan keadaan. Yang diperlukan ialah rasa selamat dan rutin yang boleh diramal.',
  rujuk:'Unit 2.4 — Kesan Psikologi (Tingkah Laku)' },

{ unit:2, jenis:'multi',
  soalan:'Manakah antara berikut merupakan FAKTOR PELINDUNG di sekolah? (Pilih semua yang betul)',
  pilihan:[
    'Hubungan sokongan yang kuat daripada guru dan rakan sebaya',
    'Persekitaran sekolah yang selamat, harmoni dan responsif',
    'Akses mudah kepada perkhidmatan bimbingan dan kaunseling',
    'Kekeliruan identiti dalam kalangan remaja'
  ], jawapan:[0,1,2],
  rasional:'Tiga yang pertama ialah faktor pelindung luaran yang boleh dibina secara aktif oleh sekolah. Kekeliruan identiti ialah faktor RISIKO dalaman. Kerja PFA bukan sekadar tindak balas — ia juga menebalkan benteng sebelum krisis datang.',
  rujuk:'Unit 2.3 — Faktor Pelindung di Sekolah' },

/* ---------- UNIT 3 · Senario: prinsip & lapisan ---------- */
{ unit:3, jenis:'mcq',
  senario:'Selepas banjir, sekolah menyediakan makanan, air bersih dan ruang perlindungan selamat untuk semua murid yang terjejas tanpa mengira latar belakang.',
  soalan:'Ini merupakan intervensi pada lapisan mana dalam Piramid MHPSS?',
  pilihan:[
    'Lapisan 1 — Perkhidmatan Asas & Keselamatan',
    'Lapisan 2 — Sokongan Komuniti & Keluarga',
    'Lapisan 3 — Sokongan Berfokus Bukan Pakar',
    'Lapisan 4 — Perkhidmatan Pakar'
  ], jawapan:0,
  rasional:'Menguruskan keperluan fizikal segera tanpa diskriminasi ialah Lapisan 1 — tapak piramid. Ia diperlukan oleh sebahagian besar individu yang terjejas dan boleh diterajui pentadbir, guru kebajikan dan AKP.',
  rujuk:'Unit 3.1 — Piramid Intervensi MHPSS' },

{ unit:3, jenis:'mcq',
  senario:'Seorang murid menunjukkan tanda kemurungan major dan menyatakan hasrat mencederakan diri. Skor saringan PHQ-9 berada pada tahap Sangat Teruk.',
  soalan:'Apakah lapisan intervensi yang diperlukan, dan siapa yang menerajui prosesnya?',
  pilihan:[
    'Lapisan 2 — PRS memberikan sokongan rakan sebaya',
    'Lapisan 3 — Pasukan PFA Sekolah memberikan sokongan berfokus',
    'Lapisan 4 — GBK/GBLD mengetuai triaj dan dokumentasi untuk rujukan segera ke fasiliti kesihatan',
    'Lapisan 1 — pastikan keperluan asas murid dipenuhi sahaja'
  ], jawapan:2,
  rasional:'Risiko tinggi seperti tanda kemurungan major atau hasrat mencederakan diri memerlukan Lapisan 4 — perkhidmatan pakar. GBK/GBLD memegang peranan kepimpinan untuk triaj dan dokumentasi bagi rujukan segera.',
  rujuk:'Unit 3.1 — Lapisan 4 Perkhidmatan Pakar' },

{ unit:3, jenis:'mcq',
  senario:'Anda tiba di lokasi kejadian. Seorang murid sedang menangis kuat di tepi tangga, manakala serpihan kaca bertaburan berhampiran.',
  soalan:'Apakah tindakan PERTAMA yang paling tepat?',
  pilihan:[
    'Terus memeluk murid tersebut untuk menenangkannya',
    'Memerhati keseluruhan keadaan dan memastikan kawasan selamat daripada bahaya fizikal',
    'Bertanya secara terperinci apa yang telah berlaku',
    'Menghubungi ibu bapa murid dengan segera'
  ], jawapan:1,
  rasional:'LIHAT mendahului DENGAR. Tiada gunanya menenangkan emosi seseorang yang masih dalam bahaya. Tiga puluh saat memerhati keseluruhan keadaan juga mendedahkan sama ada ada mangsa lain yang lebih kritikal tetapi senyap.',
  rujuk:'Unit 3.2 — LIHAT (Look)' },

{ unit:3, jenis:'mcq',
  soalan:'Mengapakah petugas perlu MEMINTA KEIZINAN sebelum berbual dengan mangsa?',
  pilihan:[
    'Untuk melindungi petugas daripada tindakan undang-undang',
    'Kerana ia diwajibkan dalam Akta Kaunselor 1998',
    'Kerana krisis merampas rasa kawalan — meminta izin memulangkan sedikit kawalan dan maruah kepada mangsa',
    'Untuk memastikan mangsa tidak menyalahkan sekolah kemudian'
  ], jawapan:2,
  rasional:'Meminta izin ialah tindakan memulihkan maruah, bukan sekadar adab. Murid yang menolak untuk bercakap sedang menggunakan hak yang kita berikan — itu bukan kegagalan sesi.',
  rujuk:'Unit 3.2 — DENGAR (Listen)' },

{ unit:3, jenis:'mcq',
  soalan:'Manakah antara berikut MELANGGAR etika komunikasi PFA?',
  pilihan:[
    'Mengatakan "Apa yang anda alami adalah difahami dan dijangkakan"',
    'Berkata "Saya rasa awak mengalami PTSD, kena jumpa doktor segera"',
    'Memberi ruang kepada murid untuk bercerita dengan cara mereka sendiri',
    'Mencari tempat sedikit terasing untuk menjaga privasi'
  ], jawapan:1,
  rasional:'Melabel dengan istilah diagnosis klinikal dilarang. Ia boleh menetapkan identiti penyakit sebelum penilaian klinikal, menakutkan keluarga dan mengundang stigma. Terangkan apa yang anda LIHAT, bukan apa yang anda SANGKA ia.',
  rujuk:'Unit 3.2 — Don\'ts dalam PFA' },

/* ---------- UNIT 4 · Padanan teknik & validasi ---------- */
{ unit:4, jenis:'mcq',
  senario:'Seorang murid mengalami serangan panik — nafas cepat, menggeletar, dan pandangan kosong.',
  soalan:'Apakah teknik yang paling sesuai digunakan pada saat itu?',
  pilihan:[
    'Teknik Grounding 5-4-3-2-1 untuk mengalihkan fokus kepada realiti semasa',
    'Sesi kaunseling mendalam untuk mencari punca panik',
    'Membiarkan murid bersendirian sehingga panik reda dengan sendirinya',
    'Meminta murid menceritakan detail kejadian traumatik dengan lengkap'
  ], jawapan:0,
  rasional:'Grounding menggunakan deria fizikal untuk mengalihkan fokus minda daripada trauma kepada realiti semasa — sesuai untuk panik, cemas atau histeria ringan. Mendesak mangsa menceritakan detail traumatik pula adalah antara Don\'ts PFA.',
  rujuk:'Unit 4.1 — Teknik Grounding' },

{ unit:4, jenis:'mcq',
  soalan:'Dalam teknik pernafasan 4-7-8, mengapakah tempoh hembusan lebih panjang daripada tarikan?',
  pilihan:[
    'Supaya murid dapat mengira dengan lebih mudah',
    'Hembusan panjang mengaktifkan sistem saraf parasimpatetik — isyarat kepada badan bahawa bahaya berkurang',
    'Untuk memastikan murid tidak bercakap semasa latihan',
    'Kerana paru-paru memerlukan masa lebih lama untuk dikosongkan'
  ], jawapan:1,
  rasional:'Hembusan yang lebih panjang daripada tarikan mengaktifkan sistem saraf parasimpatetik. Ini sebabnya kiraan 8 lebih panjang daripada 4 — dan sebabnya teknik ini berfungsi walaupun murid tidak percaya ia akan berfungsi.',
  rujuk:'Unit 4.2 — Latihan Pernafasan' },

{ unit:4, jenis:'mcq',
  senario:'Seorang murid melukis gambar yang menunjukkan unsur mencederakan diri semasa aktiviti mewarna.',
  soalan:'Apakah tindakan yang paling tepat?',
  pilihan:[
    'Memuji lukisan tersebut dan mempamerkannya di papan kenyataan kelas',
    'Membuang lukisan itu segera supaya murid lain tidak melihatnya',
    'Menggunakannya sebagai asas untuk rujukan pakar, dan menyimpannya sebagai dokumen sulit',
    'Menegur murid kerana melukis perkara yang tidak sesuai'
  ], jawapan:2,
  rasional:'Hasil seni yang menunjukkan unsur mencederakan diri atau keganasan melampau ialah isyarat klinikal — asas untuk rujukan pakar, bukan sekadar aktiviti hobi. Ia disimpan sebagai dokumen sulit dalam fail bimbingan, tidak dipamerkan secara terbuka.',
  rujuk:'Unit 4.4 — Pengurusan hasil seni beretika' },

{ unit:4, jenis:'mcq',
  senario:'Seorang murid kehilangan ibunya dalam kemalangan. Dia menangis di bilik bimbingan.',
  soalan:'Manakah respons yang menunjukkan VALIDASI dan bukan toxic positivity?',
  pilihan:[
    '"Sabar ya, mesti ada hikmah di sebalik semua ni."',
    '"Orang lain lagi teruk kena, awak kira beruntung lagi."',
    '"Saya nampak perkara ini sangat berat untuk awak lalui sekarang."',
    '"Janji ya, lepas ni semuanya akan jadi okay macam dulu."'
  ], jawapan:2,
  rasional:'Validasi mengiktiraf perasaan tanpa menghakimi. Tiga pilihan lain masing-masing membuat murid rasa bersalah kerana bersedih, merendahkan penderitaannya, atau memberi janji palsu yang akan menghancurkan kepercayaan apabila realiti berbeza.',
  rujuk:'Unit 4.6 — Validasi Emosi' },

{ unit:4, jenis:'mcq',
  soalan:'Dalam regulasi emosi, mengapakah "menormalkan perasaan" perlu dilakukan SEBELUM "peneguhan kendiri"?',
  pilihan:[
    'Kerana ia lebih mudah untuk diingat oleh murid',
    'Tiada urutan khusus — kedua-duanya boleh dilakukan bila-bila masa',
    'Kerana peneguhan kendiri sebelum perasaan diakui terasa seperti arahan supaya berhenti bersedih',
    'Kerana peneguhan kendiri hanya sesuai untuk murid sekolah menengah'
  ], jawapan:2,
  rasional:'Urutan penting. Menyuruh murid berkata "Saya boleh lalui ini" sebelum perasaannya diakui terasa seperti menafikan emosinya. Normalkan dahulu, baru peneguhan kendiri terasa menyokong.',
  rujuk:'Unit 4.5 — Regulasi Emosi' },

/* ---------- UNIT 5 · Padanan fasa tugasan ---------- */
{ unit:5, jenis:'mcq',
  soalan:'Mengapakah kesejahteraan petugas dianggap komponen KRITIKAL dalam pengurusan krisis?',
  pilihan:[
    'Kerana ia diwajibkan dalam pekeliling perkhidmatan',
    'Jika petugas tidak dapat menyumbang akibat isu kesihatan, kesan bencana terhadap populasi terjejas berisiko menjadi lebih buruk',
    'Kerana petugas berhak mendapat elaun tambahan',
    'Kerana ia mengurangkan kos perubatan jabatan'
  ], jawapan:1,
  rasional:'Hugelius et al. (2024) menunjukkan petugas yang tumbang menambah beban krisis, bukan mengurangkannya. Penjagaan diri bukan kemewahan — ia sebahagian daripada keupayaan operasi pasukan.',
  rujuk:'Unit 5 — Pengenalan' },

{ unit:5, jenis:'mcq',
  senario:'Sebelum bertugas di sekolah yang dilanda bencana, seorang guru diminta mengisi borang saringan PHQ-9 dan GAD-7.',
  soalan:'Ini merupakan aktiviti fasa yang mana?',
  pilihan:['Fasa Pra-Tugasan','Fasa Semasa Tugasan','Fasa Pasca-Tugasan','Bukan sebahagian daripada protokol'],
  jawapan:0,
  rasional:'Penilaian kendiri menggunakan borang saringan dilakukan pada fasa Pra-Tugasan (dan diulang pada Pasca-Tugasan). Tujuannya bukan menyingkirkan sesiapa, tetapi mengagihkan peranan dengan bijak.',
  rujuk:'Unit 5.1 — Fasa Pra-Tugasan' },

{ unit:5, jenis:'mcq',
  soalan:'Apakah amalan "Buddy System" dalam fasa semasa tugasan?',
  pilihan:[
    'Menugaskan dua petugas untuk satu mangsa supaya kerja lebih cepat',
    'Sesi meluahkan perasaan secara ringkas dengan rakan pasukan selepas tamat waktu bertugas harian',
    'Sistem giliran bertugas mengikut abjad nama',
    'Melantik seorang rakan untuk membuat laporan bagi pihak petugas'
  ], jawapan:1,
  rasional:'Petugas jarang mengaku mereka mula terjejas. Rakan yang bertugas bersama biasanya yang pertama perasan perubahan. Sistem berpasangan menjadikan perhatian ini rutin, bukan tuduhan.',
  rujuk:'Unit 5.2 — Fasa Semasa Tugasan' },

{ unit:5, jenis:'mcq',
  senario:'Seorang petugas pulang ke rumah selepas tiga hari mengendalikan krisis. Dia mandi sebaik sampai, menukar pakaian, dan secara sedar meniatkan untuk kembali menjadi seorang ibu.',
  soalan:'Amalan ini dikenali sebagai apa?',
  pilihan:['Peredaan Fizikal','Peralihan Peranan (Role Transition)','Debriefing','Refleksi Kendiri'],
  jawapan:1,
  rasional:'Peralihan Peranan membezakan tanggungjawab kerja daripada kehidupan peribadi. Tanpa titik peralihan yang jelas, identiti "petugas krisis" ikut masuk ke ruang keluarga — dan keluarga menerima versi diri yang sudah kehabisan.',
  rujuk:'Unit 5.3 — Fasa Pasca-Tugasan' },

{ unit:5, jenis:'mcq',
  soalan:'Berapa lamakah tempoh pemantauan gejala selepas tugasan sebelum bantuan profesional perlu didapatkan?',
  pilihan:[
    'Jika gejala berlarutan melebihi 2 minggu',
    'Jika gejala berlarutan melebihi 3 bulan',
    'Hanya jika gejala mengganggu kehadiran ke sekolah',
    'Tiada tempoh khusus — bergantung pada petugas'
  ], jawapan:0,
  rasional:'Petugas perlu memantau tanda seperti mimpi ngeri, imbas kembali atau mudah marah dalam tempoh 1–2 minggu selepas tugasan. Gejala yang berlarutan melebihi 2 minggu memerlukan bantuan profesional di Klinik Kesihatan atau Hospital.',
  rujuk:'Unit 5.3 — Pemantauan Gejala' },

/* ---------- UNIT 6 · Triaj & pengaktifan ---------- */
{ unit:6, jenis:'mcq',
  soalan:'Siapakah yang bertindak sebagai Komander Krisis dalam struktur Pasukan PFA Sekolah?',
  pilihan:[
    'GBK atau GBLD',
    'Pengetua / Guru Besar / PK HEM',
    'Pegawai Pendidikan Daerah',
    'Ketua Pasukan MHPSS PKD'
  ], jawapan:1,
  rasional:'Pengetua/Guru Besar/PK HEM bertindak sebagai Penaung dan Komander Krisis — membuat keputusan dasar, mengaktifkan pasukan, meluluskan mobilisasi dan mengeluarkan kenyataan rasmi. GBK/GBLD ialah Penyelaras Teknikal dan Ketua Pasukan.',
  rujuk:'Unit 6.1 — Pasukan PFA Sekolah' },

{ unit:6, jenis:'mcq',
  senario:'Berlaku kemalangan di sekolah. Sepuluh murid menunjukkan distres emosi ketara. Sekolah hanya mempunyai seorang GBK dan belum melatih Pasukan PFA Sekolah. Tiada kematian dan tiada kecederaan parah.',
  soalan:'Perlukah bantuan luar diaktifkan?',
  pilihan:[
    'Tidak — kerana tiada kematian atau kecederaan parah',
    'Tidak — GBK perlu cuba mengendalikannya dahulu selama seminggu',
    'Ya — kriteria Kekangan Kapasiti telah dipenuhi',
    'Ya — tetapi hanya selepas skor PHQ-9 semua murid diambil'
  ], jawapan:2,
  rasional:'Keempat-empat kriteria tidak perlu dipenuhi serentak — satu sahaja sudah mencukupi. Sepuluh murid terjejas dengan seorang GBK ialah kekangan kapasiti yang jelas, walaupun tiada kematian.',
  rujuk:'Unit 6.4 — Kriteria Pengaktifan' },

{ unit:6, jenis:'multi',
  soalan:'Manakah antara berikut merupakan kriteria pengaktifan Pasukan PFA Luar? (Pilih semua yang betul)',
  pilihan:[
    'Insiden berskala besar melibatkan ramai mangsa atau kematian',
    'Skor saringan GAD-7 atau PHQ-9 pada tahap Teruk atau Sangat Teruk',
    'Reaksi emosi kritikal yang tidak stabil',
    'Kejadian berlaku pada hari cuti umum'
  ], jawapan:[0,1,2],
  rasional:'Empat kriteria rasmi ialah insiden berskala besar, reaksi emosi kritikal, hasil saringan Teruk/Sangat Teruk, dan kekangan kapasiti. Hari kejadian bukan kriteria — walaupun ia mempengaruhi logistik mobilisasi.',
  rujuk:'Unit 6.4 — Kriteria Pengaktifan' },

{ unit:6, jenis:'mcq',
  soalan:'Apakah tempoh intervensi PFA yang dijalankan secara intensif di sekolah?',
  pilihan:['1 hingga 3 hari','2 hingga 14 hari','1 bulan','Sehingga murid pulih sepenuhnya'],
  jawapan:1,
  rasional:'Intervensi PFA dijalankan secara intensif dalam tempoh 2 hingga 14 hari. Laporan intervensi lengkap pula dihantar kepada PPD/JPN dalam tempoh 14 hari sebelum kes dianggap selesai.',
  rujuk:'Unit 6.6 — Stabilisasi & Dokumentasi' },

{ unit:6, jenis:'mcq',
  soalan:'Dalam format pelaporan 1-3-7, apakah yang perlu dilakukan pada HARI PERTAMA?',
  pilihan:[
    'Menyelesaikan kes di semua peringkat',
    'Menghantar laporan siasatan penuh kepada KPM',
    'Melaporkan maklumat awal secara ringkas — apa, siapa, di mana, bila, dan tindakan awal',
    'Mengadakan sesi debriefing dengan semua petugas'
  ], jawapan:2,
  rasional:'Hari 1: maklumat awal ringkas (apa, siapa, di mana, bila, tindakan awal) boleh dihantar melalui SMS, e-mel, telefon atau hotline BPSH. Hari 3: laporan siasatan penuh. Hari 7: kes diselesaikan di semua peringkat.',
  rujuk:'Lampiran 2 — Pelaporan Kejadian 1-3-7' },

/* ---------- UNIT 7 · Cari pelanggaran ---------- */
{ unit:7, jenis:'mcq',
  senario:'Draf kenyataan sekolah: "Dukacita dimaklumkan seorang murid Tingkatan 4 kami, Ahmad (bukan nama sebenar), telah ditemui mati akibat terjun dari tingkat 5 blok A pagi tadi selepas gagal dalam peperiksaan percubaan."',
  soalan:'Berapa banyak prinsip S.E.L.A.M.A.T yang dilanggar dalam kenyataan ini?',
  pilihan:[
    'Satu — hanya nama murid didedahkan',
    'Dua — nama dan kelas didedahkan',
    'Tiga atau lebih — butir peribadi, kaedah dan lokasi terperinci, serta punca tunggal',
    'Tiada pelanggaran kerana nama sebenar tidak digunakan'
  ], jawapan:2,
  rasional:'Kenyataan ini melanggar sekurang-kurangnya tiga prinsip: (A) mendedahkan butir peribadi — tingkatan dan nama; (A) menerangkan kaedah dan lokasi secara terperinci; (S) menyatakan punca tunggal "gagal peperiksaan". Ia juga tiada maklumat Talian HEAL (L).',
  rujuk:'Unit 7.1 & 7.2 — S.E.L.A.M.A.T dan Don\'ts' },

{ unit:7, jenis:'mcq',
  soalan:'Mengapakah menyatakan "punca tunggal" seperti "gagal peperiksaan" adalah berbahaya?',
  pilihan:[
    'Kerana ia boleh menyebabkan sekolah disaman oleh keluarga',
    'Kerana ia menghantar mesej bahawa tekanan biasa boleh membawa kepada kematian secara semula jadi — dan ia tidak benar secara klinikal',
    'Kerana pihak berkuasa belum mengesahkan keputusan peperiksaan',
    'Kerana ia memalukan pihak sekolah'
  ], jawapan:1,
  rasional:'Menyatakan punca tunggal menghantar dua mesej berbahaya: bahawa tekanan biasa boleh membawa kepada kematian, dan bahawa mangsa lain dalam keadaan serupa sedang menuju arah yang sama. Tiada kes berpunca daripada satu faktor tunggal.',
  rujuk:'Unit 7.2 — Perkara yang Perlu Dielak' },

{ unit:7, jenis:'mcq',
  soalan:'Prinsip "L" dalam S.E.L.A.M.A.T merujuk kepada apa?',
  pilihan:[
    'Lindungi identiti mangsa daripada media',
    'Langkah mendapatkan bantuan — wajib menyertakan maklumat seperti Talian HEAL 15555',
    'Laporkan kepada pihak berkuasa dalam tempoh 24 jam',
    'Larang semua warga sekolah daripada bercakap tentang kejadian'
  ], jawapan:1,
  rasional:'Setiap kenyataan akan dibaca oleh seseorang yang mungkin sedang bergelut sendiri. Kehadiran maklumat bantuan mengurangkan risiko peniruan — ia komponen perlindungan, bukan hiasan penutup.',
  rujuk:'Unit 7.1 — Prinsip S.E.L.A.M.A.T' },

{ unit:7, jenis:'mcq',
  senario:'Seorang guru menghantar mesej dalam kumpulan WhatsApp guru: "Ada gambar kejadian tadi, saya forward untuk makluman semua."',
  soalan:'Apakah respons yang paling tepat sebagai penyelaras PFA?',
  pilihan:[
    'Benarkan kerana ia dalam kumpulan tertutup guru sahaja',
    'Minta gambar tidak disebarkan — kawalan maklumat adalah amanah bersama, termasuk dalam kumpulan tertutup',
    'Minta gambar dihantar secara peribadi kepada anda sahaja',
    'Abaikan kerana ia bukan bidang kuasa GBK'
  ], jawapan:1,
  rasional:'Kawalan maklumat ialah amanah bersama seluruh warga pendidikan untuk tidak menyebarkan spekulasi, gambar atau video di mana-mana platform digital. Kumpulan "tertutup" bukan jaminan — kandungan mudah tersebar dan menjadi kecederaan kedua kepada keluarga.',
  rujuk:'Unit 7 — Kawalan maklumat sebagai amanah bersama' },

{ unit:7, jenis:'multi',
  soalan:'Templat kenyataan makluman sekolah mengandungi empat blok. Manakah antara berikut termasuk dalam templat tersebut? (Pilih semua yang betul)',
  pilihan:[
    'Ucapan takziah kepada keluarga',
    'Peringatan menghormati privasi keluarga',
    'Sumber bantuan seperti Talian HEAL 15555',
    'Penjelasan terperinci kronologi kejadian'
  ], jawapan:[0,1,2],
  rasional:'Empat blok ialah takziah, privasi, akauntabiliti/anti-spekulasi, dan sumber bantuan. Penjelasan terperinci kronologi melanggar prinsip A — elakkan penjelasan kaedah atau tempat kejadian secara terperinci.',
  rujuk:'Unit 7.3 — Templat Kenyataan' },

/* ---------- UNIT 8 · Perancangan & LDK ---------- */
{ unit:8, jenis:'mcq',
  soalan:'Mengapakah susun atur kelompok (5–6 orang semeja) disyorkan berbanding susunan dewan kuliah?',
  pilihan:[
    'Kerana ia menjimatkan ruang dewan',
    'Kerana PFA ialah kemahiran, bukan pengetahuan — peserta perlu berbincang dan berlatih, bukan sekadar mendengar',
    'Kerana ia memudahkan pengagihan bahan edaran',
    'Kerana ia keperluan protokol keselamatan dewan'
  ], jawapan:1,
  rasional:'Susunan dewan kuliah menghasilkan peserta yang mendengar; susunan kelompok menghasilkan peserta yang berbincang dan berlatih. Untuk kemahiran seperti PFA, ini keperluan pedagogi, bukan pilihan estetika.',
  rujuk:'Unit 8.3 — Susun Atur' },

{ unit:8, jenis:'multi',
  soalan:'Siapakah kumpulan sasaran latihan PFA di sekolah? (Pilih semua yang betul)',
  pilihan:[
    'GBK, GBLD dan barisan pentadbir sekolah',
    'Guru akademik dan AKP termasuk pengawal keselamatan',
    'Pemimpin pelajar seperti Pengawas Sekolah dan PRS',
    'Hanya guru yang mempunyai ijazah psikologi'
  ], jawapan:[0,1,2],
  rasional:'Latihan meliputi GBK/GBLD, pentadbir, guru akademik, AKP dan staf sokongan, serta boleh diperluas kepada pemimpin pelajar. Mensyaratkan ijazah psikologi bercanggah dengan prinsip bahawa sesiapa boleh dilatih.',
  rujuk:'Unit 8.1 — Kumpulan Sasaran' },

{ unit:8, jenis:'mcq',
  senario:'Dalam LDK Senario A (murid terjatuh dari bangunan), sebuah kumpulan membentangkan pelan mereka: menenangkan saksi, menghubungi MERS 999, dan menyediakan kenyataan mengikut MySAVE. Mereka tidak menyebut tentang murid-murid yang sedang merakam video.',
  soalan:'Apakah maklum balas yang paling tepat sebagai fasilitator?',
  pilihan:[
    'Pelan ini lengkap dan tidak memerlukan penambahbaikan',
    'Ingatkan bahawa langkah LIHAT termasuk menyuraikan orang ramai bagi menjaga maruah mangsa dan mengelak rakaman tersebar',
    'Kritik kumpulan kerana tidak membuat saringan PHQ-9 di lokasi',
    'Minta kumpulan mengulang keseluruhan pembentangan'
  ], jawapan:1,
  rasional:'Cabaran utama Senario A ialah dua tugas serentak — menguruskan mangsa dan menguruskan orang ramai. Rakaman yang tersebar menjadi kecederaan kedua kepada keluarga, jadi menyuraikan perakam adalah sebahagian daripada langkah LIHAT.',
  rujuk:'Unit 8.5 — Senario A' },

{ unit:8, jenis:'mcq',
  senario:'Dalam LDK Senario C (bencana alam), sebuah kumpulan mencadangkan supaya sesi melukis emosi diadakan sebaik murid tiba di sekolah.',
  soalan:'Apakah kelemahan utama cadangan ini?',
  pilihan:[
    'Aktiviti melukis tidak sesuai untuk murid sekolah menengah',
    'Keperluan asas Lapisan 1 (makanan, pakaian, keselamatan) perlu dipenuhi dahulu sebelum sesi emosi bermakna',
    'Kit PFA tidak mengandungi bahan melukis',
    'Melukis hanya boleh dikendalikan oleh GBK bertauliah'
  ], jawapan:1,
  rasional:'Piramid MHPSS mengingatkan: Lapisan 1 dahulu. Sesi seni bermakna hanya selepas keperluan asas dipenuhi. Menganjurkan sesi emosi kepada murid yang belum makan atau tiada pakaian sekolah ialah kesilapan biasa dalam senario bencana.',
  rujuk:'Unit 8.5 — Senario C' },

{ unit:8, jenis:'mcq',
  soalan:'Mengapakah Ujian Pasca tidak boleh dikorbankan walaupun sesi LDK melebihi masa?',
  pilihan:[
    'Kerana ia diwajibkan oleh Kementerian',
    'Kerana tanpanya tiada bukti peningkatan penguasaan untuk tujuan pelaporan dan penambahbaikan',
    'Kerana peserta tidak akan menerima elaun tanpa ujian',
    'Kerana ia menggantikan keperluan sesi rumusan'
  ], jawapan:1,
  rasional:'Sesi LDK hampir selalu melebihi masa kerana perbincangan menarik. Tetapkan had masa tegas dan lantik penjaga masa — tetapi jangan korbankan Ujian Pasca, kerana tanpanya tiada bukti peningkatan untuk pelaporan.',
  rujuk:'Unit 8.4 — Cadangan Tentatif' }

];

/* Utiliti: dapatkan soalan mengikut unit */
function soalanUnit(u){ return SOALAN.filter(s => s.unit === u); }
