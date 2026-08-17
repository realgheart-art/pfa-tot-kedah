/* ==========================================================
   content.js — Kandungan modul & lapisan penjelasan
   Sistem Latihan Jurulatih PFA · JPN Kedah
   Sumber: Modul Kepimpinan Krisis & Latihan Bantuan Awal
           Psikologi (PFA) Untuk Warga Pendidikan JPN Kedah
   ==========================================================
   Jenis seksyen yang disokong:
     {j:'prosa',  teks:'...'}
     {j:'poin',   tajuk:'', items:[{t:'', why:{tajuk,isi,contoh}}]}
     {j:'kad',    items:[{tajuk, isi, why:{...}}]}
     {j:'banding',kiri:{tajuk,items[]}, kanan:{tajuk,items[]}}
     {j:'ia',     komponen:'piramid'|'nafas'|'grounding'|'validasi'}
   Guna {{SINGKATAN}} dalam teks untuk chip glosari.
   ========================================================== */

const GLOSARI = {
  'PFA': { penuh: 'Psychological First Aid', maksud: 'Bantuan Awal Psikologi — sokongan kemanusiaan praktikal untuk meredakan ketegangan emosi ketika krisis. Bukan terapi, bukan diagnosis.' },
  'MHPSS': { penuh: 'Mental Health and Psychosocial Support', maksud: 'Sokongan Kesihatan Mental dan Psikososial. Rangka kerja IASC yang menyusun bantuan dalam empat lapisan intervensi.' },
  'IASC': { penuh: 'Inter-Agency Standing Committee', maksud: 'Jawatankuasa Tetap Antara Agensi PBB yang menerbitkan panduan MHPSS dalam kecemasan kemanusiaan (2010, 2020).' },
  'GBK': { penuh: 'Guru Bimbingan dan Kaunseling', maksud: 'Guru terlatih dalam bimbingan & kaunseling. Dalam modul ini, bertindak sebagai Penyelaras Teknikal dan Ketua Pasukan PFA Sekolah.' },
  'GBLD': { penuh: 'Guru Bimbingan Lantikan Dalaman', maksud: 'Guru yang dilantik dalaman untuk memikul tugas bimbingan di sekolah yang tiada GBK bertauliah.' },
  'AKP': { penuh: 'Anggota Kumpulan Pelaksana', maksud: 'Kakitangan sokongan sekolah — pembantu tadbir, pengawal keselamatan, pekerja pembersihan dan lain-lain. Ahli penting Pasukan PFA Sekolah.' },
  'SME': { penuh: 'Subject Matter Expert', maksud: 'Pakar Rujuk Bidang. GBK/GBLD bertindak sebagai penasihat teknikal kepada pentadbir, bukan pelaksana tunggal.' },
  'MySAVE': { penuh: 'Malaysia Suicide Awareness Voice of Hope', maksud: 'Program induk kebangsaan KKM untuk pencegahan tingkah laku bunuh diri. Pelaporan media selamat ialah salah satu strategi terasnya.' },
  'HEAL': { penuh: 'Help with Empathy and Love', maksud: 'Talian sokongan emosi KKM: 15555. Dikendalikan Pegawai Psikologi (Kaunseling), beroperasi 8:00 pagi – 12:00 tengah malam setiap hari.' },
  'PHQ-9': { penuh: 'Patient Health Questionnaire-9', maksud: 'Instrumen saringan simptom kemurungan (9 item). Skor Teruk/Sangat Teruk ialah salah satu kriteria pengaktifan pasukan luar.' },
  'GAD-7': { penuh: 'Generalized Anxiety Disorder-7', maksud: 'Instrumen saringan simptom kebimbangan melampau (7 item).' },
  'SST': { penuh: 'SMART Support Team', maksud: 'Pasukan Sokongan Pintar peringkat daerah yang boleh digerakkan oleh PPD apabila insiden melebihi kapasiti sekolah.' },
  'PKD': { penuh: 'Pejabat Kesihatan Daerah', maksud: 'Pejabat kesihatan peringkat daerah. Pasukan MHPSS PKD boleh dimobilisasi untuk kes yang perlukan rujukan klinikal.' },
  'PRS': { penuh: 'Pembimbing Rakan Sebaya', maksud: 'Murid terlatih yang memberi sokongan awal kepada rakan. Bertugas pada Lapisan 2 Piramid MHPSS.' },
  'PPD': { penuh: 'Pejabat Pendidikan Daerah', maksud: 'Pentadbiran pendidikan peringkat daerah — saluran pelaporan pertama sekolah selepas insiden.' },
  'JPN': { penuh: 'Jabatan Pendidikan Negeri', maksud: 'Pentadbiran pendidikan peringkat negeri. Menyelaras sumber dan pelaporan 1-3-7 ke KPM.' },
  'KKM': { penuh: 'Kementerian Kesihatan Malaysia', maksud: 'Rakan strategik dalam modul ini melalui JKN Kedah — menyediakan perkhidmatan pakar pada Lapisan 4.' },
  'MERS 999': { penuh: 'Malaysia Emergency Response Services 999', maksud: 'Talian respons kecemasan bersepadu. Diaktifkan untuk keadaan mengancam nyawa.' },
  'LDK': { penuh: 'Latihan Dalam Kumpulan', maksud: 'Kaedah latihan berkumpulan melalui simulasi dan perbincangan kes.' },
  'PK HEM': { penuh: 'Penolong Kanan Hal Ehwal Murid', maksud: 'Pentadbir sekolah yang menyelia kebajikan & disiplin murid. Boleh bertindak sebagai Komander Krisis.' },
  'burnout': { penuh: 'lesu upaya', maksud: 'Keletihan emosi, fizikal dan mental akibat tekanan kerja berpanjangan. Risiko utama petugas PFA yang tidak menjaga diri.' },
  'compassion fatigue': { penuh: 'keletihan belas kasihan', maksud: 'Kelesuan empati akibat pendedahan berterusan kepada penderitaan orang lain. Berbeza daripada burnout kerana ia khusus berpunca daripada empati.' },
  'grounding': { penuh: 'teknik pengukuhan realiti', maksud: 'Teknik menggunakan deria fizikal untuk mengalihkan fokus minda daripada trauma kepada realiti semasa.' },
  'triaj': { penuh: 'triage', maksud: 'Proses menilai keterukan keadaan untuk menentukan keutamaan dan tahap bantuan yang diperlukan.' },
  'Werther': { penuh: 'Werther Effect', maksud: 'Fenomena peniruan tingkah laku bunuh diri selepas pendedahan kepada laporan atau perbincangan yang tidak selamat.' },
  'toxic positivity': { penuh: 'positiviti toksik', maksud: 'Desakan untuk berfikir positif yang menafikan atau merendahkan emosi sukar seseorang, menyebabkan mereka rasa bersalah kerana bersedih.' },
  'dissociation': { penuh: 'disosiasi', maksud: 'Keadaan terpisah daripada realiti, perasaan atau identiti diri — mekanisme perlindungan minda terhadap trauma.' }
};

const UNITS = [
{
  id: 1,
  tajuk: 'Pengenalan & Konsep Asas PFA',
  ringkas: 'Definisi PFA, bezanya dengan kaunseling, dan konsep pemilikan bersama warga pendidikan.',
  tempoh: '30 min',
  gayaKuiz: 'Konsep & pembezaan',
  objektif: [
    'Menerangkan definisi dan tujuan Bantuan Awal Psikologi',
    'Membezakan PFA daripada kaunseling formal',
    'Menjelaskan konsep Pemilikan dan Kepimpinan Krisis'
  ],
  seksyen: [
    { j:'prosa', teks:'Bahagian ini memberikan kefahaman asas tentang definisi dan prinsip {{PFA}}, membezakannya daripada kaunseling formal, serta menjelaskan tanggungjawab bersama warga pendidikan dalam situasi krisis dan bencana.' },
    { j:'prosa', tajuk:'Definisi', teks:'Bantuan Awal Psikologi ialah satu dimensi sokongan kemanusiaan yang <b>praktikal dan membina</b> untuk membantu murid dan warga sekolah yang mengalami tekanan emosi akibat krisis atau bencana (WHO, 2011). Ia bertujuan meredakan ketegangan emosi pada waktu krisis berlaku.' },
    { j:'poin', tajuk:'Tiga perkara yang PFA lakukan', items:[
      { t:'<b>Memberi kelegaan awal</b> kepada individu yang terjejas.',
        why:{ tajuk:'Kenapa "awal" itu penting?', isi:'Jam-jam pertama selepas krisis ialah tetingkap paling berpengaruh. Pada waktu ini sistem saraf mangsa berada dalam mod bertahan — kehadiran seseorang yang tenang boleh menurunkan tahap rangsangan sebelum ingatan trauma "mengeras". Kelegaan awal bukan menghapuskan trauma, tetapi ia mengurangkan kemungkinan keadaan menjadi lebih teruk.' } },
      { t:'<b>Memastikan keselamatan</b> fizikal dan emosi.',
        why:{ tajuk:'Keselamatan mendahului perbualan', isi:'Tiada gunanya menenangkan emosi seseorang yang masih berada dalam bahaya. Inilah sebabnya susunan Lihat–Dengar–Hubung bermula dengan LIHAT: pastikan persekitaran selamat dahulu, baru mendekati emosi. Kesilapan biasa petugas baharu ialah terus memujuk sedangkan kawasan masih berisiko.' } },
      { t:'<b>Mengelakkan keadaan emosi menjadi lebih teruk</b> — bukan menyembuhkan trauma.',
        why:{ tajuk:'Had yang membebaskan', isi:'PFA tidak bertujuan menyembuhkan. Memahami had ini melegakan petugas daripada tekanan untuk "membetulkan" segala-galanya, dan melindungi mangsa daripada intervensi yang melebihi kompetensi petugas. Penyembuhan ialah tugas Lapisan 4 — perkhidmatan pakar.',
              contoh:'Matlamat anda hari itu bukan "murid ini pulih", tetapi "murid ini selamat, ditemani, dan dihubungkan dengan bantuan yang betul".' } }
    ]},
    { j:'prosa', teks:'Seperti bantuan mula kecederaan (<i>first aid</i>), <b>sesiapa sahaja boleh dilatih</b> dan mereka yang telah dilatih boleh menjalankan PFA kepada mangsa yang memerlukan (WHO, 2011; {{KKM}}, 2024).' },
    { j:'banding', tajuk:'PFA berbanding Kaunseling',
      kiri:{ tajuk:'PFA', jenis:'neutral', items:[
        'Penstabilan emosi <b>segera</b>',
        'Memenuhi keperluan fizikal & asas',
        'Menghubungkan mangsa dengan bantuan perlindungan',
        '<b>Tiada</b> diagnosis klinikal',
        'Di mana-mana lokasi, oleh sesiapa yang dilatih'
      ]},
      kanan:{ tajuk:'Kaunseling', jenis:'neutral', items:[
        'Proses terapi psikologi <b>jangka panjang</b>',
        'Lebih mendalam & berstruktur',
        'Perlukan persekitaran kondusif (bilik kaunseling)',
        'Mengendalikan isu emosi & tingkah laku kompleks',
        'Oleh kaunselor terlatih & bertauliah'
      ]}
    },
    { j:'kad', tajuk:'Konsep Pemilikan dan Kepimpinan Krisis', items:[
      { tajuk:'GBK/GBLD sebagai Pakar Rujuk ({{SME}})', isi:'Bertindak sebagai penasihat teknikal kepada pentadbir dalam merancang strategi intervensi emosi, memantau kualiti sokongan, dan menentukan kriteria keperluan bantuan luar.',
        why:{ tajuk:'Daripada pelaksana kepada penyelaras', isi:'Inilah anjakan paling penting dalam modul ini. Apabila GBK menjadi satu-satunya pelaksana, sistem sokongan sekolah runtuh sebaik beliau bercuti, berkursus atau bertukar. Sebagai SME, nilai GBK diukur bukan pada berapa ramai murid beliau lihat sendiri, tetapi berapa ramai warga sekolah yang beliau <b>upayakan</b>.',
              contoh:'Ujian mudah: jika anda bertukar sekolah bulan depan, adakah sistem PFA sekolah itu masih berfungsi? Jika tidak, ia masih terlalu bergantung pada individu.' } },
      { tajuk:'Warga pendidikan sebagai Pemilik Bersama', isi:'PFA ialah tanggungjawab bersama. Guru kelas, guru mata pelajaran, pentadbir dan {{AKP}} bertindak sebagai barisan hadapan yang dilatih menguruskan keselamatan, logistik dan sokongan harian awal murid.',
        why:{ tajuk:'Mengapa AKP dimasukkan?', isi:'Pengawal keselamatan sering menjadi orang pertama di lokasi kejadian. Pekerja pembersihan mungkin yang pertama menemui sesuatu yang membimbangkan. Dalam realiti sekolah, "barisan hadapan" bukan selalunya guru — jadi latihan tidak boleh terhad kepada guru sahaja.' } },
      { tajuk:'Rujukan ke perkhidmatan profesional', isi:'GBK/GBLD memegang peranan kepimpinan untuk menilai tahap keterukan simptom ({{triaj}}) bagi membuat keputusan rujukan segera ke fasiliti kesihatan pakar.',
        why:{ tajuk:'Triaj adalah keputusan, bukan tekaan', isi:'Rujukan yang lambat membiarkan murid berisiko tanpa bantuan; rujukan yang terlalu mudah membanjiri fasiliti kesihatan dan melemahkan kredibiliti sekolah. Itulah sebabnya Unit 6 menetapkan empat kriteria objektif — supaya keputusan boleh dipertahankan di hadapan pentadbir dan pihak kesihatan.' } },
      { tajuk:'Etika dan kesejahteraan warga sekolah', isi:'Memastikan seluruh rantaian intervensi — termasuk kawalan maklumat saksi dan pelaporan media — mematuhi prinsip kerahsiaan dan garis panduan {{MySAVE}}.',
        why:{ tajuk:'Kebocoran maklumat adalah kecederaan kedua', isi:'Selepas krisis, kecederaan kedua sering datang bukan daripada kejadian itu sendiri tetapi daripada cara maklumat tersebar: gambar yang beredar dalam kumpulan WhatsApp, spekulasi punca, nama murid yang disebut. Kawalan maklumat ialah bahagian daripada bantuan, bukan urusan perhubungan awam semata-mata.' } }
    ]}
  ]
},
{
  id: 2,
  tajuk: 'Impak Krisis & Kesihatan Mental Murid',
  ringkas: 'Spektrum kesihatan mental, faktor risiko dan pelindung, serta empat kategori kesan psikologi.',
  tempoh: '45 min',
  gayaKuiz: 'Pengecaman & klasifikasi tanda',
  objektif: [
    'Menghuraikan spektrum kesihatan mental sebagai keadaan dinamik',
    'Mengenal pasti faktor risiko dan faktor pelindung murid',
    'Mengklasifikasikan kesan psikologi krisis kepada empat kategori'
  ],
  seksyen: [
    { j:'prosa', teks:'Kesihatan mental ialah keadaan seseorang menyedari potensi diri, mampu menghadapi stres kehidupan seharian, boleh berfungsi dengan baik dan boleh menyumbang kepada masyarakat (WHO, 2022).' },
    { j:'poin', tajuk:'Spektrum Kesihatan Mental', items:[
      { t:'<b>Kesejahteraan Mental:</b> menyedari potensi diri dan boleh berfungsi dengan produktif.' },
      { t:'<b>Masalah Kesihatan Mental:</b> gangguan perasaan, pemikiran atau tingkah laku yang menyebabkan fungsi seharian tidak optimum — biasanya bersifat sementara.' },
      { t:'<b>Penyakit Mental:</b> gangguan ketara dalam perasaan, pemikiran dan tingkah laku yang memerlukan rujukan profesional.',
        why:{ tajuk:'Kenapa "spektrum" dan bukan "kategori"?', isi:'Kesihatan mental bersifat <b>dinamik</b> — individu bergerak antara tahap ini bergantung pada faktor semasa. Melihatnya sebagai spektrum menghalang kita daripada melabel murid secara kekal, dan mengingatkan kita bahawa pergerakan ke arah pulih juga sentiasa mungkin dengan sokongan yang betul.',
              contoh:'Murid yang minggu lepas menunjukkan distres teruk boleh kembali sejahtera selepas keluarganya stabil — bukan kerana diagnosis berubah, tetapi kerana faktor sekelilingnya berubah.' } }
    ]},
    { j:'banding', tajuk:'Faktor Risiko',
      kiri:{ tajuk:'Faktor Dalaman', jenis:'dont', items:[
        '<b>Kesihatan:</b> masalah fizikal harian, penyakit kronik, gangguan pembelajaran',
        '<b>Daya tahan rendah:</b> keyakinan diri rendah, tiada motivasi dalaman',
        '<b>Kekeliruan identiti:</b> sukar memahami nilai, kepercayaan dan hala tuju diri'
      ]},
      kanan:{ tajuk:'Faktor Luaran', jenis:'dont', items:[
        '<b>Tragedi hidup:</b> kematian mengejut, perceraian ibu bapa, kemalangan tragis',
        '<b>Trauma persekitaran:</b> keganasan rumah tangga, penderaan, buli siber',
        '<b>Sosio-ekonomi:</b> kemiskinan & masalah kewangan keluarga',
        '<b>Konflik interpersonal:</b> hubungan toksik, diasingkan, diskriminasi'
      ]}
    },
    { j:'banding', tajuk:'Faktor Pelindung di Sekolah',
      kiri:{ tajuk:'Faktor Dalaman', jenis:'do', items:[
        'Kemahiran daya tindak (<i>coping</i>) yang baik dan fleksibel',
        'Pegangan nilai moral dan agama yang kukuh',
        'Amalan gaya hidup dan minda sihat secara konsisten'
      ]},
      kanan:{ tajuk:'Faktor Luaran', jenis:'do', items:[
        'Hubungan sokongan kuat daripada keluarga, rakan sebaya dan guru',
        'Persekitaran sekolah yang selamat, harmoni dan responsif',
        'Akses mudah kepada bimbingan, kaunseling dan sokongan psikososial'
      ]}
    },
    { j:'prosa', teks:'<b>Peranan kita:</b> faktor pelindung boleh <i>dibina</i>. Kerja PFA bukan hanya tindak balas selepas krisis — ia juga menebalkan benteng sebelum krisis datang.' },
    { j:'kad', tajuk:'Empat Kategori Kesan Psikologi', items:[
      { tajuk:'Kognitif', isi:'Sukar menerima kejadian · terbayang semula secara tiba-tiba · sukar memberi perhatian di kelas · mudah lupa arahan · mimpi buruk · sukar membuat keputusan.',
        why:{ tajuk:'Sering disalah anggap sebagai malas', isi:'Murid yang tidak dapat fokus atau lupa arahan selepas krisis kerap dilabel "tidak menumpukan perhatian" atau "malas". Sebenarnya kapasiti memori kerja mereka sedang digunakan untuk memproses trauma. Inilah sebabnya guru mata pelajaran perlu turut dilatih — mereka yang paling awal melihat tanda ini.' } },
      { tajuk:'Fizikal', isi:'Sakit kepala/migrain, sakit perut, loya · ketegangan otot · gangguan tidur · letih tidak bermaya · gangguan selera makan · jantung berdebar, berpeluh sejuk, menggeletar.',
        why:{ tajuk:'Badan bercakap sebelum mulut', isi:'Kanak-kanak dan remaja sering tidak mempunyai kosa kata untuk emosi, jadi tekanan keluar melalui badan. Aduan sakit perut berulang tanpa punca perubatan yang jelas selepas satu kejadian adalah isyarat yang patut diberi perhatian, bukan diabaikan sebagai alasan hendak keluar kelas.' } },
      { tajuk:'Emosi', isi:'Bimbang dan rasa tidak selamat walaupun di tempat selamat · kesedihan berpanjangan · mudah marah · menyalahkan diri · rasa "kosong" (<i>emotional numbness</i>) · terpisah daripada realiti ({{dissociation}}).',
        why:{ tajuk:'Ketiadaan reaksi bukan tanda baik', isi:'Petugas sering paling bimbang tentang murid yang menangis kuat, dan paling kurang bimbang tentang murid yang "nampak okay". Namun rasa kosong dan disosiasi adalah tanda distres yang serius — minda menutup diri kerana emosi terlalu berat. Murid yang senyap perlu diperhatikan, bukan dianggap selamat.' } },
      { tajuk:'Tingkah Laku', isi:'Mengasingkan diri · hilang minat pada aktiviti biasa · tingkah laku berisiko (merokok, bahan terlarang, agresif, mencederakan diri) · regresi kebudak-budakan atau terlalu bergantung · prestasi merosot dan ponteng.',
        why:{ tajuk:'Regresi adalah normal, bukan nakal', isi:'Murid yang mula menghisap jari, kencing malam atau melekat pada guru selepas krisis sedang berundur kepada tahap perkembangan yang terasa lebih selamat. Menegur atau memalukan mereka akan memburukkan keadaan. Yang diperlukan ialah rasa selamat dan rutin yang boleh diramal.' } }
    ]},
    { j:'prosa', teks:'<b>Panduan tempoh:</b> satu atau dua tanda dalam hari-hari pertama selepas krisis adalah reaksi yang dijangkakan. Tanda yang <b>berterusan melebihi dua minggu</b> atau semakin memburuk memerlukan penilaian dan rujukan.' }
  ]
},
{
  id: 3,
  tajuk: 'Lihat, Dengar, Hubung (Look, Listen, Link)',
  ringkas: 'Prinsip tindakan utama PFA di atas Piramid Intervensi MHPSS, dengan etika komunikasi.',
  tempoh: '60 min',
  gayaKuiz: 'Senario — pilih prinsip & lapisan',
  objektif: [
    'Menentukan lapisan Piramid MHPSS yang bersesuaian dengan keperluan mangsa',
    'Mengaplikasikan tiga prinsip Lihat, Dengar, Hubung dalam situasi krisis',
    'Mematuhi etika komunikasi Do\'s dan Don\'ts semasa memberikan PFA'
  ],
  seksyen: [
    { j:'prosa', teks:'Dalam situasi krisis, murid dan warga sekolah boleh terjejas dalam pelbagai cara dan memerlukan jenis sokongan yang berbeza. Semua lapisan perlu tersedia dan diselaraskan, tetapi bentuk sokongan bergantung pada tahap keperluan individu.' },
    { j:'ia', komponen:'piramid', tajuk:'Piramid Intervensi MHPSS (IASC 2010)', nota:'Ketuk setiap lapisan untuk melihat fokus, aplikasi dan siapa yang bertanggungjawab.' },
    { j:'prosa', teks:'Sokongan pada lapisan bawah diperlukan oleh <b>sebahagian besar</b> individu yang terjejas dan melibatkan keperluan asas. Semakin ke atas, bilangan individu semakin kecil tetapi sokongan menjadi semakin khusus.' },
    { j:'kad', tajuk:'Tiga Prinsip Asas PFA', items:[
      { tajuk:'LIHAT (Look)', isi:'<b>Keselamatan:</b> pastikan kawasan sekolah selamat daripada bahaya fizikal.<br><b>Keperluan asas:</b> kenal pasti siapa yang memerlukan air, makanan atau bantuan perubatan segera.<br><b>Reaksi tekanan:</b> perhatikan tanda serius seperti panik, gelisah atau menangis ketakutan.',
        why:{ tajuk:'Lihat dahulu, jangan terus bertindak', isi:'Dorongan pertama seorang guru yang penyayang ialah terus mendekati murid yang menangis. Tetapi 30 saat memerhati keseluruhan keadaan boleh menyelamatkan nyawa — mungkin ada bahaya fizikal yang belum selamat, atau mungkin ada murid lain yang lebih kritikal tetapi senyap. Lihat memberi anda gambaran keseluruhan sebelum sumber yang terhad diagihkan.' } },
      { tajuk:'DENGAR (Listen)', isi:'<b>Pendekatan:</b> perkenalkan diri, minta keizinan untuk berbual, nyatakan tujuan.<br><b>Stabilkan emosi:</b> dengar luahan dengan empati dan bantu mereka berasa tenang.<br><b>Beri ruang:</b> jangan paksa bercakap jika belum bersedia — namun pastikan mereka dalam pemerhatian.',
        why:{ tajuk:'Mengapa perlu minta izin?', isi:'Krisis merampas rasa kawalan seseorang. Meminta izin sebelum berbual memulangkan sedikit kawalan itu kepada mangsa — ia satu tindakan memulihkan maruah, bukan sekadar adab. Murid yang menolak untuk bercakap sedang menggunakan hak yang kita berikan; itu bukan kegagalan sesi.',
              contoh:'"Saya Cikgu Amir. Boleh cikgu berbual dengan awak sebentar untuk tahu keadaan awak selepas kejadian tadi?"' } },
      { tajuk:'HUBUNG (Link)', isi:'<b>Sokongan sosial:</b> hubungkan dengan ibu bapa/penjaga atau ahli keluarga yang dipercayai.<br><b>Informasi:</b> beri maklumat tepat tentang bantuan kebajikan atau kesihatan yang tersedia.<br><b>Rujukan:</b> bantu proses rujukan ke fasiliti kesihatan; maklumkan <b>Talian {{HEAL}} 15555</b>.',
        why:{ tajuk:'Hubung ialah yang paling kerap ditinggalkan', isi:'Banyak sesi PFA berakhir selepas mangsa nampak lebih tenang — dan itu dianggap selesai. Tetapi tanpa Hubung, ketenangan itu tamat sebaik murid keluar dari bilik. Hubung memastikan sokongan berterusan selepas anda tiada: keluarga tahu, guru kelas tahu, dan talian bantuan berada dalam tangan murid.',
              contoh:'Bagi keadaan yang melibatkan risiko keselamatan segera atau mengancam nyawa, terus ikut prosedur kecemasan berkuat kuasa ({{MERS 999}}) — jangan tunggu proses rujukan biasa.' } }
    ]},
    { j:'banding', tajuk:'Etika Komunikasi PFA (IASC, 2020)',
      kiri:{ tajuk:'Patut Dilakukan', jenis:'do', items:[
        'Buat pemerhatian pada persekitaran dan mangsa',
        'Tanya soalan ringkas dan penuh hormat',
        'Bercakap dengan nada tenang dan perlahan; elak jargon teknikal',
        'Tunjukkan sikap sabar, responsif dan peka',
        'Akui dan hargai kekuatan yang ada pada mangsa',
        'Cari tempat sedikit terasing; dapatkan peneman jika berlainan jantina',
        'Beri peluang bercerita dengan cara mereka sendiri',
        'Normalkan: "Apa yang anda alami adalah difahami dan dijangkakan."'
      ]},
      kanan:{ tajuk:'Tidak Patut Dilakukan', jenis:'dont', items:[
        'Menceritakan kisah orang lain atau masalah peribadi anda',
        'Memberikan janji atau jaminan palsu',
        'Melabel reaksi dengan istilah diagnosis klinikal',
        'Mengandaikan semua mangsa pasti mengalami trauma',
        'Mendesak mangsa mengingati atau menceritakan detail traumatik',
        'Memotong percakapan; melayan telefon semasa menyantuni',
        'Menunjukkan reaksi bosan, marah atau menguap',
        'Menghakimi, berkhutbah atau memberi nasihat tidak bersesuaian',
        'Mendedahkan cerita mangsa kepada pihak yang tidak berkaitan'
      ]}
    },
    { j:'poin', tajuk:'Ingat', items:[
      { t:'PFA <b>bukan</b> sesi kaunseling, <b>bukan</b> sesi rawatan, dan <b>bukan</b> hak milik eksklusif profesional kesihatan mental sahaja.',
        why:{ tajuk:'Mengapa larangan melabel begitu tegas?', isi:'Menyebut istilah seper"depression" atau "anxiety disorder" kepada mangsa boleh menetapkan identiti penyakit dalam fikiran mereka sebelum sebarang penilaian klinikal dibuat. Ia juga boleh menakutkan keluarga, mengundang stigma, dan menyukarkan rujukan sebenar kemudian. Terangkan apa yang anda <i>lihat</i>, bukan apa yang anda <i>sangka</i> ia.',
              contoh:'Elak: "Nampaknya dia ada PTSD." · Ganti: "Dia sukar tidur dan kerap terbayang kejadian sejak seminggu — saya cadangkan penilaian di klinik kesihatan."' } }
    ]}
  ]
},
{
  id: 4,
  tajuk: 'Teknik Penstabilan Emosi',
  ringkas: 'Grounding, pernafasan, relaksasi, aktiviti kreatif, regulasi dan validasi emosi.',
  tempoh: '35 min',
  gayaKuiz: 'Padanan teknik & tukar ayat validasi',
  objektif: [
    'Melaksanakan teknik grounding dan pernafasan untuk menstabilkan emosi',
    'Mengendalikan aktiviti kreatif secara beretika',
    'Menggantikan ayat toxic positivity dengan ayat validasi'
  ],
  seksyen: [
    { j:'prosa', teks:'Bahagian ini melengkapkan petugas dengan kemahiran praktikal untuk menstabilkan emosi murid yang mengalami tekanan melampau, serta membina kepercayaan antara petugas dan mangsa.' },
    { j:'ia', komponen:'grounding', tajuk:'Teknik Grounding 5-4-3-2-1', nota:'Apabila murid panik, cemas atau histeria ringan — gunakan deria fizikal untuk mengalihkan fokus daripada trauma kepada realiti semasa. Cuba sendiri sekarang.' },
    { j:'ia', komponen:'nafas', tajuk:'Pernafasan 4-7-8', nota:'Ikut bulatan: tarik nafas 4 saat, tahan 7 saat, hembus 8 saat. Ulang sehingga degupan jantung kembali tenang.' },
    { j:'poin', tajuk:'Mengapa teknik ini berkesan', items:[
      { t:'<b>Pernafasan Emosi:</b> bimbing murid menarik nafas sambil membayangkan menyedut ketenangan, dan menghembus sambil membuang ketakutan.',
        why:{ tajuk:'Bukan sekadar kepercayaan', isi:'Hembusan yang lebih panjang daripada tarikan mengaktifkan sistem saraf parasimpatetik — isyarat fisiologi kepada badan bahawa bahaya telah berkurang. Itulah sebabnya kiraan 8 lebih panjang daripada 4. Teknik ini berfungsi walaupun murid tidak percaya ia akan berfungsi.' } },
      { t:'<b>Relaksasi otot:</b> ajak mangsa melakukan regangan tangan, bahu dan kaki secara perlahan untuk melegakan ketegangan fizikal.',
        why:{ tajuk:'Laluan dua hala', isi:'Stres akut menegangkan otot; otot yang tegang pula terus menghantar isyarat "masih bahaya" kepada otak. Melonggarkan badan memutuskan gelung ini. Bagi murid yang enggan bercakap, pendekatan fizikal ini sering lebih mudah diterima daripada perbualan.' } }
    ]},
    { j:'kad', tajuk:'Aktiviti Kreatif', items:[
      { tajuk:'Bentuk aktiviti', isi:'Mewarna atau melukis dengan krayon dan pensel warna · bermain plastisin (<i>Playdoh</i>) atau menggenggam bola stres · aktiviti Garis Tubuh (<i>Body Outline</i>) untuk memetakan bahagian badan yang terasa sakit atau tegang akibat emosi.',
        why:{ tajuk:'Untuk yang belum ada kata-kata', isi:'Kanak-kanak dan remaja sering tidak dapat menamakan emosi mereka. Melukis memberi laluan keluar tanpa memerlukan kosa kata. Ia juga selamat kerana murid mengawal berapa banyak yang mahu didedahkan — sesuatu yang perbualan langsung tidak selalu berikan.' } },
      { tajuk:'Pengurusan hasil seni secara beretika', isi:'<b>Hak milik murid:</b> hasil seni ialah hak mutlak murid — benarkan mereka memilih untuk menyimpan, menyerahkan atau melupuskannya.<br><b>Penyimpanan selamat:</b> jika ditinggalkan, simpan sebagai dokumen sulit dalam fail bimbingan; jangan dipamerkan.<br><b>Tanda amaran:</b> hasil yang menunjukkan unsur mencederakan diri atau keganasan melampau menjadi asas rujukan pakar.<br><b>Pelupusan beretika:</b> musnahkan menggunakan <i>shredder</i>.',
        why:{ tajuk:'Karya itu dokumen, bukan hiasan', isi:'Melekatkan lukisan murid yang trauma di papan kenyataan — walaupun dengan niat menghargai — mendedahkan keadaan dalaman murid kepada seluruh sekolah tanpa izinnya. Sebaliknya, lukisan yang menunjukkan unsur mencederakan diri tidak boleh dianggap sekadar aktiviti seni; ia isyarat klinikal yang perlu dibawa kepada rujukan.' } }
    ]},
    { j:'poin', tajuk:'Regulasi Emosi', items:[
      { t:'<b>Bicara Diri (Self-Talk):</b> mengajar murid menyebut frasa positif dalam hati untuk menenangkan diri.' },
      { t:'<b>Menormalkan Perasaan:</b> memberitahu murid bahawa reaksi emosi mereka wajar dalam situasi luar biasa. Contoh: "Tidak mengapa untuk kamu rasa sedih atau takut sekarang."' },
      { t:'<b>Peneguhan Kendiri:</b> melatih murid menyebut ayat penguatan seperti "Saya selamat sekarang", "Saya boleh lalui ini".',
        why:{ tajuk:'Normalkan dahulu, baru teguhkan', isi:'Urutannya penting. Jika kita terus menyuruh murid berkata "Saya boleh lalui ini" sebelum perasaan mereka diakui, ia terasa seperti arahan supaya berhenti bersedih. Normalkan dahulu ("wajar untuk rasa begini"), baru peneguhan kendiri terasa menyokong dan bukan menafikan.' } }
    ]},
    { j:'ia', komponen:'validasi', tajuk:'Tukar Ayat: daripada Toxic Positivity kepada Validasi', nota:'Setiap ayat di bawah kerap diucapkan dengan niat baik — tetapi kesannya sebaliknya. Ketuk untuk melihat gantian dan mengapa.' },
    { j:'poin', tajuk:'Validasi Emosi', items:[
      { t:'<b>Mendengar secara empati:</b> mendengar dengan sepenuh perhatian supaya murid berasa difahami dan tenang.' },
      { t:'<b>Memberi ruang:</b> jika emosi terlalu tinggi, beri masa dan ruang — namun pastikan mereka tahu anda sedia membantu. Contoh: "Saya berada di sini sekiranya anda memerlukan saya."',
        why:{ tajuk:'Validasi ialah kunci langkah DENGAR', isi:'Validasi bermaksud mengiktiraf dan menerima perasaan murid <b>tanpa menghakimi</b>. Ia tidak bermakna bersetuju dengan tafsiran mereka atau menyokong tindakan mereka — hanya mengesahkan bahawa perasaan itu nyata dan boleh difahami. Tanpa ini, murid belajar bahawa emosi mereka tidak dialu-alukan, dan mereka berhenti bercerita.' } }
    ]}
  ]
},
{
  id: 5,
  tajuk: 'Penjagaan Diri Petugas (Self-Care)',
  ringkas: 'Kriteria kesediaan petugas dan amalan penjagaan diri sebelum, semasa dan selepas tugasan.',
  tempoh: '45 min',
  gayaKuiz: 'Padanan fasa tugasan',
  objektif: [
    'Menilai kesediaan diri sebelum memasuki zon krisis',
    'Mengamalkan teknik pencegahan burnout semasa bertugas',
    'Melaksanakan proses pemulihan selepas tugasan'
  ],
  seksyen: [
    { j:'prosa', teks:'Kesejahteraan petugas ialah komponen kritikal dalam misi bantuan. Jika petugas sendiri tidak dapat menyumbangkan sokongan akibat isu kesihatan fizikal atau mental, kesan bencana terhadap populasi yang terjejas berisiko menjadi <b>lebih buruk</b> (Hugelius et al., 2024).' },
    { j:'banding', tajuk:'Dua Tiang Kesediaan Petugas',
      kiri:{ tajuk:'Kesediaan (Willingness)', jenis:'do', items:[
        '<b>Daya tahan stres:</b> mampu memahami dan mengawal tekanan diri di lokasi krisis',
        '<b>Empati:</b> keinginan tulus untuk membantu',
        '<b>Kerja berpasukan:</b> terbuka menerima pandangan rakan setugas',
        '<b>Komitmen latihan:</b> bersedia menjalani latihan, taklimat dan <i>debriefing</i>'
      ]},
      kanan:{ tajuk:'Kesedaran Had (Limitation)', jenis:'do', items:[
        '<b>Ekspektasi realistik:</b> berpuas hati dengan perubahan positif yang kecil',
        '<b>Kesihatan diri:</b> tidak membawa beban emosi berlebihan',
        '<b>Kelestarian emosi:</b> tahu bila perlu berhenti atau meluahkan',
        '<b>Pengetahuan komuniti:</b> menyesuaikan bahasa dengan umur & latar murid'
      ]}
    },
    { j:'kad', tajuk:'Tiga Fasa Tugasan', items:[
      { tajuk:'Fasa Pra-Tugasan', isi:'<b>Penilaian kendiri</b> menggunakan borang saringan ({{PHQ-9}}, {{GAD-7}}) di bawah seliaan GBK/GBLD · <b>taklimat persediaan</b> tentang latar krisis dan peranan khusus · <b>penyediaan Kit PFA</b> (krayon, kertas mewarna, playdoh, bola stres) serta keperluan asas kendiri.',
        why:{ tajuk:'Kenapa petugas perlu disaring?', isi:'Petugas yang sedang bergelut dengan tekanan sendiri berisiko dua kali: keadaan mereka boleh bertambah buruk, dan penilaian mereka terhadap mangsa boleh terganggu. Saringan bukan untuk menyingkirkan sesiapa daripada pasukan, tetapi untuk mengagihkan peranan dengan bijak — mungkin logistik dan bukan sesi emosi.' } },
      { tajuk:'Fasa Semasa Tugasan', isi:'<b>Amalan kesihatan asas:</b> tidur dan rehat cukup (elak penugasan tanpa henti melebihi 8 jam), pemakanan seimbang, elak kafein berlebihan · <b>relaksasi kendiri:</b> pernafasan 4-7-8 atau {{grounding}} · <b>Buddy System:</b> sesi meluahkan perasaan ringkas dengan rakan selepas waktu bertugas · <b>tetapkan sempadan:</b> maklumkan ketua pasukan jika emosi mula terganggu.',
        why:{ tajuk:'Buddy system bukan formaliti', isi:'Petugas jarang mengaku mereka mula terjejas — kerana budaya kerja menganggap itu kelemahan. Rakan yang bertugas bersama biasanya yang pertama perasan perubahan sebelum petugas itu sendiri sedar. Sistem berpasangan menjadikan perhatian ini rutin, bukan tuduhan.' } },
      { tajuk:'Fasa Pasca-Tugasan', isi:'<b>Sesi debriefing</b> formal (boleh dikendalikan GBK/GBLD atau pasukan MHPSS {{PKD}}) · <b>peredaan fizikal:</b> berjalan, regangan, basuh muka dan tangan dengan air sejuk · <b>peralihan peranan</b> apabila pulang ke rumah · <b>pemantauan gejala</b> 1–2 minggu · <b>Mental Health Alert Card</b> sebagai rujukan · <b>refleksi kendiri</b> dan penilaian kendiri semula.',
        why:{ tajuk:'Ritual peralihan peranan', isi:'Tanpa satu titik peralihan yang jelas, identiti "petugas krisis" ikut masuk ke ruang keluarga — dan keluarga menerima versi diri yang sudah kehabisan. Ritual mudah membantu: mandi sebaik sampai, tukar pakaian, dan niatkan secara sedar untuk menanggalkan peranan petugas dan kembali menjadi ibu, ayah, suami atau isteri.',
              contoh:'Gejala seperti mimpi ngeri, imbas kembali atau mudah marah yang berlarutan <b>melebihi 2 minggu</b> memerlukan bantuan profesional di Klinik Kesihatan atau Hospital.' } }
    ]}
  ]
},
{
  id: 6,
  tajuk: 'SOP Pengaktifan & Aliran Kerja Krisis',
  ringkas: 'Struktur Pasukan PFA Sekolah, penilaian risiko, kriteria pengaktifan, mobilisasi dan dokumentasi.',
  tempoh: '45 min',
  gayaKuiz: 'Triaj & keputusan pengaktifan',
  objektif: [
    'Menyusun keahlian dan peranan Pasukan PFA Sekolah',
    'Membuat keputusan pengaktifan berdasarkan empat kriteria objektif',
    'Melaksanakan mobilisasi berlapis dan dokumentasi mengikut tempoh ditetapkan'
  ],
  seksyen: [
    { j:'prosa', teks:'Bagi memastikan kelestarian perkhidmatan dan mengelakkan beban tugas melampau kepada seorang petugas, setiap sekolah disarankan menubuhkan <b>Pasukan PFA Sekolah</b> yang diketuai oleh GBK/GBLD.' },
    { j:'kad', tajuk:'Keahlian, Struktur dan Peranan', items:[
      { tajuk:'Pengetua / Guru Besar / {{PK HEM}}', isi:'<b>Penaung / Komander Krisis.</b> Membuat keputusan dasar, mengaktifkan Pasukan PFA Sekolah, meluluskan mobilisasi, dan mengeluarkan kenyataan rasmi sekolah.' },
      { tajuk:'GBK / GBLD', isi:'<b>Penyelaras Teknikal dan Ketua Pasukan.</b> Merancang strategi intervensi psikososial, melatih ahli pasukan, mengetuai operasi PFA ketika krisis, melakukan intervensi mendalam dan menguruskan rujukan klinikal.' },
      { tajuk:'Guru Kelas / Guru Mata Pelajaran / {{AKP}} / Pemimpin Murid', isi:'<b>Ahli Pasukan.</b> Melaksanakan PFA kepada warga sekolah yang terkesan, memastikan keselamatan fizikal dan keperluan asas mangsa, membantu kawalan lokasi, dan menyalurkan maklumat awal kepada Ketua Pasukan.',
        why:{ tajuk:'Kenapa pemimpin murid dimasukkan?', isi:'Murid bercerita kepada rakan sebelum kepada guru. Pengawas dan {{PRS}} yang dilatih menjadi "penderia awal" sekolah — bukan untuk mengendalikan kes, tetapi untuk mengesan dan memaklumkan. Namun perlu jelas: mereka bertugas pada Lapisan 2, dan tidak boleh dibebani kes berisiko tinggi.' } }
    ]},
    { j:'poin', tajuk:'Contoh Kejadian yang Mencetuskan SOP', items:[
      { t:'Bencana alam — banjir, tanah runtuh.' },
      { t:'Kemalangan serius atau kebakaran.' },
      { t:'Kematian warga sekolah atau kejadian traumatik (kes jatuh bangunan / bunuh diri).' },
      { t:'Kejadian kecemasan lain seperti histeria berkelompok.' }
    ]},
    { j:'banding', tajuk:'Tindakan Segera (First Responders)',
      kiri:{ tajuk:'Pentadbir Sekolah', jenis:'do', items:[
        'Memastikan keselamatan fizikal murid dan warga sekolah',
        'Mengawal situasi di lokasi kejadian',
        'Memaklumkan pihak berkuasa (PDRM / Bomba / {{KKM}}) jika perlu'
      ]},
      kanan:{ tajuk:'GBK / GBLD', jenis:'do', items:[
        'Menasihati pentadbir dalam pembentukan Pasukan PFA Sekolah',
        'Mengetuai penilaian keperluan PFA awal kepada mangsa terkesan',
        'Menentukan keperluan rujukan dan bantuan luar'
      ]}
    },
    { j:'kad', tajuk:'Penilaian Risiko dan Keputusan Pengaktifan', items:[
      { tajuk:'Pilihan A — Risiko Rendah / Terkawal', isi:'Tanda stres ringan dan mampu dikendalikan secara dalaman. Pasukan luar <b>tidak</b> diaktifkan. Pasukan PFA Sekolah menjalankan bantuan PFA dan pemantauan berkala.' },
      { tajuk:'Pilihan B — Risiko Tinggi / Mendesak', isi:'Memenuhi kriteria pengaktifan. GBK/GBLD memaklumkan Pengetua/Guru Besar untuk memohon bantuan sokongan luar.' }
    ]},
    { j:'poin', tajuk:'Empat Kriteria Pengaktifan Pasukan PFA Luar', items:[
      { t:'<b>Insiden berskala besar:</b> melibatkan ramai mangsa, kematian, atau kecederaan parah.' },
      { t:'<b>Reaksi emosi kritikal:</b> murid menunjukkan gangguan emosi melampau yang tidak stabil.' },
      { t:'<b>Hasil saringan klinikal:</b> skor {{GAD-7}} atau {{PHQ-9}} berada pada tahap <b>Teruk</b> atau <b>Sangat Teruk</b>.' },
      { t:'<b>Kekangan kapasiti:</b> jumlah mangsa melebihi kemampuan petugas Pasukan PFA Sekolah sedia ada.',
        why:{ tajuk:'Memenuhi satu kriteria sudah mencukupi', isi:'Keempat-empat kriteria ini tidak perlu dipenuhi serentak — satu sahaja sudah menjadi asas untuk mengaktifkan bantuan luar. Kesilapan biasa ialah menunggu sampai keadaan "cukup teruk" secara keseluruhan, sedangkan kekangan kapasiti sahaja sudah cukup: sepuluh murid terjejas dengan seorang GBK bukan situasi yang boleh dikendalikan dalaman, walaupun tiada kematian.' } }
    ]},
    { j:'kad', tajuk:'Mobilisasi Berlapis', items:[
      { tajuk:'Peringkat {{PPD}}', isi:'Pentadbir melaporkan insiden kepada Pegawai Pendidikan Daerah untuk mengaktifkan Pasukan PFA sekolah berhampiran atau {{SST}} Daerah.' },
      { tajuk:'Peringkat {{JPN}}', isi:'PPD menyalurkan laporan kepada Pengarah Pendidikan Negeri bagi penyelarasan sumber peringkat negeri.' },
      { tajuk:'Peringkat Kesihatan', isi:'Pentadbir atau PPD boleh menghubungi Pasukan MHPSS di {{PKD}} atau Klinik Kesihatan berhampiran bagi mobilisasi dan pengurusan kes yang memerlukan rujukan klinikal segera.' }
    ]},
    { j:'poin', tajuk:'Stabilisasi, Pelaporan dan Dokumentasi', items:[
      { t:'<b>Tempoh intervensi:</b> pelaksanaan PFA dijalankan secara intensif dalam tempoh <b>2 hingga 14 hari</b>.' },
      { t:'<b>Talian bantuan:</b> memberikan maklumat <b>Talian {{HEAL}} 15555</b> kepada murid dan waris untuk sokongan emosi berterusan.' },
      { t:'<b>Dokumentasi:</b> gunakan format Pelaporan Kejadian <b>1-3-7</b>. Laporan intervensi lengkap dihantar kepada PPD/JPN dalam tempoh <b>14 hari</b> sebelum kes dianggap selesai.',
        why:{ tajuk:'Apa itu pelaporan 1-3-7?', isi:'<b>Hari 1:</b> JPN melaporkan maklumat awal kepada KPM — apa, siapa, di mana, bila, dan tindakan awal secara ringkas (boleh melalui SMS, e-mel, telefon atau talian hotline BPSH).<br><b>Hari 3:</b> laporan siasatan penuh dihantar termasuk tindakan yang sedang, akan atau telah diambil (borang PK04-3).<br><b>Hari 7:</b> kes diselesaikan di semua peringkat, dengan penyelesaian yang memaksimumkan kepuasan hati pihak terlibat.' } }
    ]}
  ]
},
{
  id: 7,
  tajuk: 'Pelaporan Media Selamat',
  ringkas: 'Prinsip S.E.L.A.M.A.T di bawah MySAVE, perkara yang perlu dielak, dan templat kenyataan sekolah.',
  tempoh: '30 min',
  gayaKuiz: 'Cari pelanggaran prinsip',
  objektif: [
    'Menerangkan tujuh prinsip S.E.L.A.M.A.T dalam komunikasi krisis',
    'Mengenal pasti pelanggaran prinsip dalam kenyataan atau perbualan',
    'Menyediakan draf kenyataan makluman sekolah yang selamat'
  ],
  seksyen: [
    { j:'prosa', teks:'Dalam usaha menangani peningkatan kes tingkah laku bunuh diri di Malaysia, isu ini dilihat sebagai krisis kesihatan awam yang memerlukan pendekatan holistik ({{KKM}}, 2023). {{MySAVE}} bertindak sebagai program induk kebangsaan, dan pelaporan media selamat merupakan salah satu strategi terasnya.' },
    { j:'prosa', teks:'Kawalan maklumat bukan tanggungjawab pentadbir semata-mata, malah <b>amanah bersama</b> seluruh warga pendidikan — termasuk guru, {{AKP}} dan pengawal keselamatan — untuk tidak menyebarkan sebarang spekulasi, gambar atau video di mana-mana platform digital.' },
    { j:'poin', tajuk:'Prinsip Asas S.E.L.A.M.A.T', items:[
      { t:'<b>S — Sebarkan maklumat sahih dan tepat:</b> pastikan maklumat berdasarkan fakta yang disahkan pihak berkuasa (PDRM) dan elakkan spekulasi punca kematian.' },
      { t:'<b>E — Elakkan tajuk yang sensasi:</b> hindari menyiarkan kejadian sebagai tajuk utama; jangan gunakan bahasa keterlaluan atau dramatik.' },
      { t:'<b>L — Langkah mendapatkan bantuan:</b> wajib menyertakan maklumat sumber sokongan psikososial seperti <b>Talian {{HEAL}} 15555</b> dalam setiap pelaporan.',
        why:{ tajuk:'Mengapa "wajib" dan bukan "digalakkan"?', isi:'Setiap kenyataan tentang krisis akan dibaca oleh seseorang yang sedang bergelut sendiri. Bagi mereka, satu nombor talian dalam kenyataan itu mungkin satu-satunya laluan yang mereka nampak pada hari tersebut. Kajian pelaporan selamat menunjukkan kehadiran maklumat bantuan mengurangkan risiko peniruan — jadi ia bukan hiasan penutup, tetapi komponen perlindungan.' } },
      { t:'<b>A — Adab beretika menjaga kerahsiaan peribadi:</b> jangan mendedahkan butir peribadi mangsa (nama, kelas, latar belakang keluarga) serta elakkan penjelasan kaedah atau tempat kejadian secara terperinci.' },
      { t:'<b>M — Menjaga privasi waris:</b> hormati privasi keluarga dengan memberi ruang untuk melalui tempoh berkabung tanpa gangguan.' },
      { t:'<b>A — Advokasi kesedaran kesihatan mental:</b> gunakan platform yang ada untuk mendidik warga sekolah bahawa isu kesihatan mental boleh dirawat dan sokongan sentiasa tersedia.' },
      { t:'<b>T — Tanggungjawab sosial menyampaikan berita beretika:</b> memahami bahawa laporan yang tidak selamat boleh melukai perasaan individu yang mengenali mangsa dan mencetuskan kesan {{Werther}}.' }
    ]},
    { j:'poin', tajuk:'Tiga Perkara yang Perlu Dielak', items:[
      { t:'<b>Jangan menceritakan kaedah secara terperinci.</b> Penjelasan tentang kaedah boleh memberi idea kepada individu lain yang berisiko.',
        why:{ tajuk:'Butiran adalah arahan', isi:'Bagi individu yang sedang berada dalam keadaan terdesak, penerangan terperinci tentang kaedah bukan sekadar maklumat — ia menjadi panduan yang menghapuskan halangan terakhir. Inilah sebabnya panduan antarabangsa begitu tegas: sebut bahawa kematian berlaku, tetapi tidak bagaimana.' } },
      { t:'<b>Jangan memaparkan imej atau video.</b> Elak menyiarkan gambar mangsa, lokasi kejadian, atau nota yang ditinggalkan.' },
      { t:'<b>Jangan menyatakan punca tunggal.</b> Kejadian bunuh diri ialah interaksi kompleks pelbagai faktor. Elakkan rumusan ringkas seperti "gagal peperiksaan" atau "putus cinta".',
        why:{ tajuk:'Bahaya naratif sebab-akibat', isi:'Menyatakan punca tunggal menghantar dua mesej berbahaya: bahawa tekanan biasa boleh membawa kepada kematian secara semula jadi, dan bahawa mangsa lain dalam keadaan serupa sedang menuju arah yang sama. Ia juga tidak benar secara klinikal — tiada kes yang berpunca daripada satu faktor tunggal.' } }
    ]},
    { j:'kad', tajuk:'Templat Kenyataan Makluman Sekolah (4 blok)', items:[
      { tajuk:'1 · Ucapan Takziah', isi:'"Dukacita dimaklumkan salah seorang daripada murid kami telah meninggal dunia. Pihak sekolah mengucapkan takziah kepada keluarga mangsa atas kehilangan ini."' },
      { tajuk:'2 · Peringatan Privasi', isi:'"Ini adalah situasi yang amat menyedihkan kepada semua. Kami memohon agar warga sekolah dan media menghormati privasi keluarga mangsa sepanjang tempoh yang sukar ini."' },
      { tajuk:'3 · Akauntabiliti dan Anti-Spekulasi', isi:'"Siasatan sedang dijalankan oleh pihak berkuasa. Semua pihak disarankan agar tidak menyebarkan sebarang gambar, video, atau maklumat tidak sahih bagi mengelakkan spekulasi."' },
      { tajuk:'4 · Sumber Bantuan', isi:'"Mana-mana individu yang terkesan secara emosi dengan kejadian ini digalakkan untuk bertemu Guru Bimbingan dan Kaunseling sekolah atau menghubungi Talian HEAL 15555 untuk sokongan segera."',
        why:{ tajuk:'Urutan empat blok ini bukan rawak', isi:'Takziah dahulu menunjukkan sekolah melihat kehilangan sebagai kehilangan manusia, bukan insiden pentadbiran. Privasi kedua melindungi keluarga sebelum orang ramai mula bertanya. Anti-spekulasi ketiga menutup ruang khabar angin yang biasanya terbentuk dalam beberapa jam pertama. Sumber bantuan terakhir supaya ia menjadi perkara terakhir yang dibaca dan diingat.' } }
    ]}
  ]
},
{
  id: 8,
  tajuk: 'Panduan Bengkel & Simulasi Krisis',
  ringkas: 'Kumpulan sasaran, logistik, tentatif sehari, dan tiga senario LDK.',
  tempoh: '75 min',
  gayaKuiz: 'Perancangan bengkel & pengendalian LDK',
  objektif: [
    'Merancang logistik dan susun atur bengkel PFA peringkat sekolah atau daerah',
    'Mengendalikan sesi LDK menggunakan tiga senario krisis',
    'Menilai penguasaan peserta melalui Ujian Pra dan Pasca'
  ],
  seksyen: [
    { j:'prosa', teks:'Bahagian ini menyediakan kerangka kerja lengkap bagi menjalankan bengkel latihan PFA, merangkumi logistik, tentatif dan simulasi krisis melalui {{LDK}}. Sebagai jurulatih, inilah unit yang anda akan gunakan paling kerap.' },
    { j:'kad', tajuk:'Kumpulan Sasaran dan Fasilitator', items:[
      { tajuk:'Peserta', isi:'{{GBK}}, {{GBLD}}, barisan pentadbir (Pengetua / Guru Besar / {{PK HEM}}), guru akademik, {{AKP}} serta staf sokongan (pengawal keselamatan, pekerja pembersihan). Boleh diperluaskan kepada pemimpin pelajar seperti Pengawas Sekolah dan {{PRS}}.' },
      { tajuk:'Fasilitator', isi:'Pakar dari Unit Kawalan Penyakit Tidak Berjangkit JKN Kedah / {{PKD}}, Pakar Psikiatri, Pakar Perubatan Keluarga, Pegawai Perubatan, Pegawai Psikologi (Kaunseling) {{KKM}}, atau pegawai JPN/PPD dan GBK/GBLD yang telah ditauliahkan sebagai jurulatih.' }
    ]},
    { j:'poin', tajuk:'Keperluan Latihan', items:[
      { t:'<b>Alat bantu mengajar:</b> komputer riba, projektor LCD, sistem siar raya (PA System) beserta mikrofon tanpa wayar untuk sesi simulasi.' },
      { t:'<b>Bahan edaran:</b> slaid pembentangan, borang saringan (Whooley / {{PHQ-9}} / GAD-2 / {{GAD-7}}), dan Kad Amaran Kesihatan Mental.' },
      { t:'<b>Kit PFA:</b> krayon, kertas A4, bola stres, playdoh, dan bekalan air mineral.' },
      { t:'<b>Susun atur kelompok:</b> meja dan kerusi disusun berkumpulan 5–6 orang, dengan satu ruang kosong di hadapan atau tengah dewan untuk simulasi fizikal.',
        why:{ tajuk:'Susun atur menentukan hasil latihan', isi:'Susunan dewan kuliah menghasilkan peserta yang mendengar; susunan kelompok menghasilkan peserta yang berbincang dan berlatih. Untuk PFA — yang merupakan kemahiran, bukan pengetahuan — susunan kelompok bukan pilihan estetika tetapi keperluan pedagogi. Ruang simulasi juga wajib: peserta perlu berdiri dan melakonkan, bukan membayangkan.' } }
    ]},
    { j:'kad', tajuk:'Senario LDK', items:[
      { tajuk:'Senario A — Murid Terjatuh dari Bangunan', isi:'<b>Situasi:</b> seorang murid ditemui jatuh dari tingkat 3. Keadaan menjadi cemas, murid lain mula berkumpul dan cuba merakam video.<br><br><b>LIHAT:</b> mengawal keadaan, meminta guru lain menyuraikan murid bagi menjaga maruah mangsa.<br><b>DENGAR:</b> memberi sokongan awal kepada saksi kejadian yang histeris atau trauma.<br><b>HUBUNG:</b> mengaktifkan {{MERS 999}} dan menghubungi Pasukan MHPSS PKD.<br><b>PELAPORAN:</b> draf kenyataan mengikut garis panduan {{MySAVE}}.',
        why:{ tajuk:'Apa yang diuji dalam senario ini', isi:'Cabaran utama ialah dua tugas yang berlaku serentak — menguruskan mangsa dan menguruskan orang ramai. Kumpulan yang hanya fokus pada mangsa akan terlepas isu perakaman video, yang boleh menjadi kecederaan kedua kepada keluarga apabila rakaman itu tersebar. Perhatikan sama ada kumpulan ingat menyuraikan perakam.' } },
      { tajuk:'Senario B — Histeria Berkelompok', isi:'<b>Situasi:</b> lima murid perempuan dalam sebuah kelas mula menjerit dan bertindak agresif secara tiba-tiba, menyebabkan murid lain panik.<br><br><b>LIHAT:</b> mengenal pasti murid terlibat dan mengasingkan mereka ke ruang yang tenang.<br><b>DENGAR:</b> menggunakan {{grounding}} 5-4-3-2-1 atau pernafasan teratur untuk menenangkan.<br><b>HUBUNG:</b> menghubungi ibu bapa dan memaklumkan situasi dengan tenang tanpa spekulasi mistik keterlaluan.<br><b>SELF-CARE:</b> sesi <i>debriefing</i> antara GBK dan pasukan sokongan selepas situasi terkawal.',
        why:{ tajuk:'Mengapa spekulasi perlu dielak', isi:'Histeria berkelompok merebak melalui jangkaan sosial — apabila naratif mistik disahkan secara terbuka, murid lain mula menjangkakan perkara sama akan berlaku kepada mereka, dan simptom betul-betul muncul. Tugas petugas ialah menenangkan tanpa mengesahkan atau mempertikaikan kepercayaan sesiapa; fokus kepada pengasingan, pernafasan dan rutin.' } },
      { tajuk:'Senario C — Bencana Alam', isi:'<b>Situasi:</b> murid kembali ke sekolah selepas bencana dalam keadaan sedih dan trauma; ada yang kehilangan harta benda serta ahli keluarga.<br><br><b>LIHAT:</b> memerhati dan menyaring murid yang menunjukkan petunjuk kemurungan, kesedihan melampau atau pengasingan diri.<br><b>DENGAR:</b> menyediakan aktiviti ekspresi seni menggunakan Kit PFA.<br><b>HUBUNG:</b> menghubungi unit kebajikan sekolah, PPD atau agensi luar untuk bantuan fizikal asas (Lapisan 1).<br><b>SELF-CARE:</b> saringan kendiri petugas bagi mengelakkan {{compassion fatigue}}.',
        why:{ tajuk:'Keperluan fizikal mendahului emosi', isi:'Kesilapan biasa dalam senario bencana ialah terus menganjurkan sesi emosi kepada murid yang belum makan atau tiada pakaian sekolah. Piramid MHPSS mengingatkan kita: Lapisan 1 dahulu. Sesi seni bermakna hanya selepas keperluan asas dipenuhi. Tugasan bencana juga panjang, jadi kelestarian petugas menjadi isu sebenar, bukan teori.' } }
    ]},
    { j:'poin', tajuk:'Cadangan Tentatif Latihan (1 Hari)', items:[
      { t:'<b>0830–0900</b> Pendaftaran & Ujian Pra' },
      { t:'<b>0900–0930</b> Unit 1: Pengenalan & Konsep Asas PFA' },
      { t:'<b>0930–1015</b> Unit 2: Impak Krisis & Kesihatan Mental' },
      { t:'<b>1015–1040</b> Kudapan pagi' },
      { t:'<b>1040–1140</b> Unit 3: Lihat, Dengar, Hubung' },
      { t:'<b>1140–1215</b> Unit 4: Teknik Penstabilan Emosi' },
      { t:'<b>1215–1300</b> Unit 5: Penjagaan Kendiri' },
      { t:'<b>1300–1400</b> Makan tengah hari & rehat' },
      { t:'<b>1400–1445</b> Unit 6: SOP Pengaktifan & Aliran Kerja' },
      { t:'<b>1445–1515</b> Unit 7: Pelaporan Media Selamat' },
      { t:'<b>1515–1630</b> Sesi LDK: Simulasi Pengurusan Krisis' },
      { t:'<b>1630–1700</b> Rumusan & Ujian Pasca',
        why:{ tajuk:'Slot yang paling mudah tergelincir', isi:'Sesi LDK (75 minit) hampir selalu melebihi masa kerana perbincangan kumpulan menarik dan sukar dihentikan. Tetapkan had masa tegas bagi setiap kumpulan (contoh: 8 minit persembahan, 4 minit maklum balas) dan lantik seorang penjaga masa. Jangan korbankan Ujian Pasca — tanpanya tiada bukti peningkatan untuk pelaporan.' } }
    ]},
    { j:'prosa', teks:'<b>Penutup:</b> kejayaan pengurusan krisis tidak terletak pada bahu seorang individu, tetapi pada kekuatan kolektif sebuah pasukan. Dalam setiap krisis, kehadiran kita yang tenang, teratur dan bersatu padu adalah sinar harapan pertama bagi mereka yang memerlukan.' }
  ]
}
];

/* ---------- Kandungan komponen interaktif ---------- */
const PIRAMID = [
  { no:1, nama:'Perkhidmatan Asas & Keselamatan', en:'Basic services and security', warna:'#9CB380',
    fokus:'Advokasi untuk perkhidmatan asas yang selamat, bersesuaian dengan aspek sosial, dan melindungi maruah murid.',
    aplikasi:'Menguruskan keperluan fizikal segera murid — makanan, minuman, pakaian, atau ruang perlindungan selamat — tanpa diskriminasi.',
    siapa:'Pentadbir, guru kebajikan, guru disiplin, AKP' },
  { no:2, nama:'Sokongan Komuniti & Keluarga', en:'Community and family supports', warna:'#5F9995',
    fokus:'Menyediakan persekitaran di mana mangsa dapat mengekalkan kesejahteraan mental melalui akses kepada sokongan komuniti dan keluarga.',
    aplikasi:'Mengaktifkan sokongan rakan sebaya (PRS) dan guru-guru lain untuk memberikan sokongan emosi harian agar murid tidak berasa keseorangan.',
    siapa:'PRS, guru kelas, guru mata pelajaran, keluarga' },
  { no:3, nama:'Sokongan Berfokus (Bukan Pakar)', en:'Focused, non-specialized supports', warna:'#E9A178',
    fokus:'Sokongan emosi dan praktikal asas secara berfokus kepada murid yang menunjukkan distres emosi ketara selepas krisis.',
    aplikasi:'Di sinilah PFA dilaksanakan. Petugas Pasukan PFA Sekolah yang terlatih memberikan bantuan awal, manakala GBK/GBLD mengambil alih kes yang lebih kompleks.',
    siapa:'Pasukan PFA Sekolah (guru/AKP terlatih), GBK/GBLD' },
  { no:4, nama:'Perkhidmatan Pakar', en:'Specialized services', warna:'#B25A38',
    fokus:'Penjagaan kesihatan mental oleh anggota KKM — paramedik, pegawai psikologi, pegawai perubatan dan pakar perubatan.',
    aplikasi:'GBK/GBLD mengetuai proses triaj dan dokumentasi untuk membuat rujukan segera ke klinik kesihatan atau hospital bagi murid berisiko tinggi.',
    siapa:'KKM — pakar psikiatri, pegawai psikologi, pegawai perubatan' }
];

const GROUNDING = [
  { n:5, deria:'Lihat',  arahan:'Nyatakan 5 perkara yang boleh dilihat di sekeliling' },
  { n:4, deria:'Sentuh', arahan:'Nyatakan 4 perkara yang boleh disentuh' },
  { n:3, deria:'Dengar', arahan:'Nyatakan 3 perkara yang boleh didengar' },
  { n:2, deria:'Hidu',   arahan:'Nyatakan 2 perkara yang boleh dihidu' },
  { n:1, deria:'Rasa',   arahan:'Nyatakan 1 perkara yang boleh dirasa' }
];

const VALIDASI = [
  { kategori:'Menafikan Perasaan', buruk:'Janganlah nangis, benda kecil je ni.',
    baik:'Saya nampak perkara ini sangat berat untuk awak lalui sekarang.',
    kesan:'Ayat asal membuatkan murid berasa malu dengan emosi sendiri, dan mengajar mereka bahawa perasaan itu tidak wajar dikongsi.' },
  { kategori:'Toxic Positivity', buruk:'Sabar ya, mesti ada hikmah di sebalik semua ni.',
    baik:'Wajar untuk awak rasa sedih atau marah dalam situasi sebegini.',
    kesan:'Ayat asal membuat murid berasa bersalah kerana tidak mampu "berfikir positif" ketika krisis, menambah beban di atas kesedihan yang sudah ada.' },
  { kategori:'Membandingkan Nasib', buruk:'Orang lain lagi teruk kena, awak kira beruntung lagi.',
    baik:'Apa yang awak alami adalah nyata, dan saya di sini untuk mendengar.',
    kesan:'Ayat asal merendahkan (invalidating) penderitaan yang sedang dialami, seolah-olah kesakitan perlu bersaing untuk diakui.' },
  { kategori:'Mendesak / Menghakimi', buruk:'Kenapa awak tak lari masa tu? Kan dah kena.',
    baik:'Dalam keadaan cemas, badan kita bertindak dengan cara yang kita tidak sentiasa boleh kawal.',
    kesan:'Ayat asal menimbulkan rasa menyalahkan diri sendiri (self-blame), yang merupakan faktor risiko kepada kesan psikologi berpanjangan.' },
  { kategori:'Janji Palsu', buruk:'Janji ya, lepas ni semuanya akan jadi okay macam dulu.',
    baik:'Saya tidak boleh janjikan semuanya kembali seperti dahulu, tetapi saya boleh pastikan awak tidak melaluinya sendiri.',
    kesan:'Ayat asal menghancurkan kepercayaan murid apabila realiti tidak seperti dijanjikan — dan kepercayaan itu sukar dibina semula.' }
];
