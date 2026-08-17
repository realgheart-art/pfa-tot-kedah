# Panduan Pemasangan — Sistem Latihan Jurulatih PFA

Sistem Latihan Jurulatih (TOT) Bantuan Awal Psikologi
**Jabatan Pendidikan Negeri Kedah × Jabatan Kesihatan Negeri Kedah**

---

## Apa yang ada dalam pakej ini

| Fail | Fungsi |
|---|---|
| `index.html` | Satu-satunya halaman — login, dashboard, unit, kuiz, sijil, pentadbiran |
| `styles.css` | Reka bentuk (palet tenang / *healing*) |
| `content.js` | Kandungan 8 unit + lapisan penjelasan + glosari |
| `soalan.js` | Bank soalan kuiz (40 soalan, 5 setiap unit) |
| `app.js` | Logik aplikasi |
| `Code.gs` | Backend Google Apps Script |
| `manifest.json`, `sw.js` | Tetapan PWA supaya boleh dipasang ke telefon & dibaca luar talian |

> **Mod demo:** jika `API_URL` dalam `app.js` dibiarkan kosong, sistem berjalan sepenuhnya pada peranti (data disimpan dalam pelayar). Berguna untuk demonstrasi kepada pengurusan sebelum backend disiapkan. Log masuk dengan sebarang e-mel dan PIN `123456`.

---

## BAHAGIAN A — Backend (Google Sheets + Apps Script)

### 1. Sediakan Google Sheet
1. Buka [sheets.new](https://sheets.new) — beri nama contohnya **Pangkalan Data PFA TOT 2026**.
2. Menu **Extensions → Apps Script**.
3. Padam kod contoh, tampal keseluruhan kandungan `Code.gs`.

### 2. Tukar rahsia token
Pada baris awal `Code.gs`:
```javascript
const RAHSIA = 'TUKAR-RAHSIA-INI-2026';
```
Gantikan dengan rentetan rawak anda sendiri (contoh: campuran huruf dan nombor sepanjang 30 aksara). Ini menandatangani token sesi pengguna.

### 3. Bina struktur pangkalan data
1. Pada editor Apps Script, pilih fungsi **`setup`** daripada senarai juntai bawah.
2. Klik **Run**. Benarkan kebenaran apabila diminta.
3. Tujuh helaian akan dibina: `CONFIG`, `PENGGUNA`, `PROGRES`, `CUBAAN`, `UJIAN`, `TAULIAH`, `LOG`.
4. Satu akaun admin lalai dicipta:
   - E-mel: `admin@jpnkedah.gov.my`
   - PIN: `123456`

> **Tukar PIN admin selepas log masuk pertama.**

### 4. Deploy sebagai Web App
1. **Deploy → New deployment → Web app**
2. Tetapan:
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
3. **Deploy**, kemudian salin URL yang berakhir dengan `/exec`.

### ⚠ Untuk kemas kini kemudian
Gunakan **Manage Deployments → Edit (ikon pensel) → Version: New version → Deploy**.
**Jangan** buat *New deployment* baharu — URL akan berubah dan frontend akan terputus.

---

## BAHAGIAN B — Frontend (GitHub Pages)

### 1. Sambungkan ke backend
Buka `app.js`, cari baris ini di bahagian atas:
```javascript
const API_URL = '';
```
Tampal URL `/exec` anda:
```javascript
const API_URL = 'https://script.google.com/macros/s/AKfycb....../exec';
```

### 2. Naik ke GitHub
1. Cipta repositori baharu (contoh: `pfa-tot-kedah`).
2. Muat naik kesemua fail dalam folder ini ke akar repositori.
3. **Settings → Pages → Source:** `Deploy from a branch` → `main` → `/root` → **Save**.
4. Selepas satu hingga dua minit, sistem boleh diakses di:
   `https://<nama-pengguna>.github.io/pfa-tot-kedah/`

### 3. Setiap kali frontend dikemas kini
Naikkan nombor versi cache dalam `sw.js`:
```javascript
const CACHE_VER = 'pfa-tot-v2';   // v1 → v2
```
Tanpa ini, pengguna yang sudah memasang PWA akan terus melihat versi lama.

---

## BAHAGIAN C — Pengurusan harian

Selepas `setup()` dijalankan, satu menu baharu muncul dalam Google Sheet:
**⚙ Sistem PFA TOT**

| Menu | Kegunaan |
|---|---|
| Tetapkan peranan pengguna | Naikkan seseorang jadi `fasilitator` atau `admin` |
| Set semula PIN pengguna | Set PIN kembali kepada `123456` jika peserta terlupa |
| Aktif / nyahaktif akaun | Halang akses tanpa memadam rekod |
| Ringkasan tauliah | Bilangan jurulatih bertauliah mengikut PPD |

### Tiga peranan

| Peranan | Kebolehan |
|---|---|
| **peserta** | Baca 8 unit, jawab kuiz, jana sijil sendiri |
| **fasilitator** | Semua di atas + lihat kemajuan semua peserta |
| **admin** | Semua di atas + urus akaun dan tetapan |

### Tetapan dalam helaian `CONFIG`

| Kunci | Kesan |
|---|---|
| `pendaftaran_buka` | `TIDAK` menutup pendaftaran baharu |
| `sijil_buka` | `TIDAK` menahan penjanaan sijil sementara |
| `nama_program`, `tahun` | Muncul pada sijil |

---

## BAHAGIAN D — Menambah atau mengubah soalan kuiz

Buka `soalan.js`. Setiap soalan mengikut format berikut:

```javascript
{ unit:3, jenis:'mcq',
  senario:'Selepas banjir, sekolah menguruskan bekalan makanan dan ruang selamat.',
  soalan:'Ini aktiviti Lapisan berapa dalam Piramid MHPSS?',
  pilihan:[ 'Lapisan 1', 'Lapisan 2', 'Lapisan 3', 'Lapisan 4' ],
  jawapan:0,                    // indeks bermula dari 0
  rasional:'Menguruskan keperluan fizikal segera ialah Lapisan 1 — tapak piramid.',
  rujuk:'Unit 3.1 — Piramid Intervensi MHPSS' }
```

- `jenis:'multi'` untuk soalan berbilang jawapan; `jawapan` menjadi tatasusunan, contoh `[0,2]`.
- `rasional` **wajib** diisi — inilah yang mengajar peserta selepas mereka menjawab.
- `rujuk` membantu peserta kembali ke bahagian modul yang berkaitan.

Selepas menyunting, naikkan `CACHE_VER` dalam `sw.js`.

---

## BAHAGIAN E — Syarat sijil tauliah

Sijil hanya terbuka apabila peserta **lulus kesemua 8 kuiz unit pada 80% atau lebih**.

- Tiada had bilangan percubaan — peserta boleh mengulang kuiz sebanyak yang perlu.
- Skor tertinggi bagi setiap unit yang diambil kira.
- Nombor sijil dijana automatik dan direkodkan dalam helaian `TAULIAH`.
- Sijil boleh dicetak atau disimpan sebagai PDF terus dari pelayar.

Untuk menukar ambang lulus, ubah `LULUS` dalam **kedua-dua** `app.js` dan `Code.gs`.

---

## Penyelesaian masalah

| Masalah | Punca & penyelesaian |
|---|---|
| "Tiada sambungan ke pelayan" | `API_URL` salah, atau deployment bukan `Anyone`. Periksa kedua-duanya. |
| Log masuk gagal walau PIN betul | Rekod pengguna mungkin `tidak aktif`. Periksa helaian `PENGGUNA`. |
| Perubahan tidak muncul pada telefon | `CACHE_VER` dalam `sw.js` tidak dinaikkan. |
| "Helaian tidak dijumpai" | Fungsi `setup()` belum dijalankan. |
| Tag **MOD DEMO** masih kelihatan | `API_URL` masih kosong dalam `app.js`. |

---

## Nota kandungan

Kandungan sistem ini diambil daripada *Modul Kepimpinan Krisis dan Latihan Bantuan Awal Psikologi (PFA) Untuk Warga Pendidikan Jabatan Pendidikan Negeri Kedah*, hasil kerjasama JKN Kedah dan JPN Kedah.

Talian HEAL **15555** dipaparkan secara kekal di setiap halaman — dikendalikan Pegawai Psikologi (Kaunseling) KKM, setiap hari 8:00 pagi hingga 12:00 tengah malam. Peserta yang mempelajari topik trauma kadangkala sedang memikul trauma mereka sendiri; jangan alih keluar paparan ini.
