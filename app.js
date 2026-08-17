/* ==========================================================
   app.js — Enjin Aplikasi
   Sistem Latihan Jurulatih PFA · JPN Kedah
   ========================================================== */

/* ---------- KONFIGURASI ----------
   Tampal URL GAS Web App di bawah selepas deploy.
   Biarkan kosong ('') untuk MOD DEMO (tiada backend, data
   disimpan pada peranti sahaja — sesuai untuk pratonton).
----------------------------------- */
const API_URL = '';
const LULUS   = 80;   // peratus minimum setiap kuiz unit
const VERSI   = 'v1.0';

/* ---------- storan selamat (fallback memori) ---------- */
const Simpan = (() => {
  let mem = {}; let ada = false;
  try { localStorage.setItem('__t','1'); localStorage.removeItem('__t'); ada = true; } catch(e){ ada = false; }
  return {
    get(k){ try { return ada ? localStorage.getItem(k) : (mem[k] ?? null); } catch(e){ return mem[k] ?? null; } },
    set(k,v){ try { ada ? localStorage.setItem(k,v) : (mem[k]=v); } catch(e){ mem[k]=v; } },
    del(k){ try { ada ? localStorage.removeItem(k) : delete mem[k]; } catch(e){ delete mem[k]; } }
  };
})();

/* ---------- keadaan global ---------- */
let SESI = null;              // {id, nama, emel, peranan, ppd, sekolah, token}
let PROGRES = {};             // {unitId: {baca:true, skor:n, lulus:bool, cubaan:n}}
const DEMO = !API_URL;

/* ---------- utiliti ---------- */
const $  = s => document.querySelector(s);
const $$ = s => Array.prototype.slice.call(document.querySelectorAll(s));
const esc = s => String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function toast(msg, ms=2600){
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(t._t); t._t = setTimeout(()=>t.classList.remove('show'), ms);
}
function initials(n){
  const p = String(n||'?').trim().split(/\s+/);
  return ((p[0]||'?')[0] + (p.length>1 ? p[p.length-1][0] : '')).toUpperCase();
}
function labelPeranan(p){
  return {peserta:'Peserta', fasilitator:'Fasilitator / Jurulatih', admin:'Admin JPN'}[p] || 'Peserta';
}

/* ---------- panggilan API ---------- */
async function api(action, data={}){
  if(DEMO) return demoApi(action, data);
  const body = JSON.stringify(Object.assign({action, token: SESI?.token || ''}, data));
  const res  = await fetch(API_URL, {
    method:'POST', headers:{'Content-Type':'text/plain;charset=utf-8'}, body
  });
  const txt = await res.text();
  let json; try { json = JSON.parse(txt); } catch(e){ throw new Error('Respons pelayan tidak sah.'); }
  if(!json.ok) throw new Error(json.error || 'Ralat tidak diketahui.');
  return json.data;
}

/* ---------- MOD DEMO (tiada backend) ---------- */
function demoUsers(){ try { return JSON.parse(Simpan.get('demo_users')||'{}'); } catch(e){ return {}; } }
function demoSaveUsers(u){ Simpan.set('demo_users', JSON.stringify(u)); }

async function demoApi(action, d){
  await new Promise(r=>setTimeout(r,180));
  const users = demoUsers();
  if(action === 'daftar'){
    if(users[d.emel]) throw new Error('E-mel ini sudah berdaftar.');
    users[d.emel] = {id:'D'+Date.now(), nama:d.nama, emel:d.emel, pin:d.pin,
      peranan:'peserta', ppd:d.ppd, sekolah:d.sekolah, progres:{}};
    demoSaveUsers(users);
    return {mesej:'Pendaftaran berjaya.'};
  }
  if(action === 'login'){
    const u = users[d.emel];
    // akaun demo terbina: sebarang e-mel dengan PIN 123456
    if(!u){
      if(d.pin === '123456'){
        const baru = {id:'D'+Date.now(), nama:d.emel.split('@')[0].replace(/[._]/g,' '), emel:d.emel,
          pin:'123456', peranan:'admin', ppd:'JPN Kedah', sekolah:'Sektor Pengurusan', progres:{}};
        users[d.emel] = baru; demoSaveUsers(users);
        return {sesi:{...baru, token:'demo'}, progres:{}};
      }
      throw new Error('Akaun tidak dijumpai. Sila daftar dahulu.');
    }
    if(u.pin !== d.pin) throw new Error('PIN tidak tepat.');
    return {sesi:{id:u.id,nama:u.nama,emel:u.emel,peranan:u.peranan,ppd:u.ppd,sekolah:u.sekolah,token:'demo'},
            progres:u.progres||{}};
  }
  if(action === 'simpanBaca' || action === 'simpanKuiz'){
    const u = users[SESI.emel]; if(!u) return {};
    u.progres = u.progres || {};
    const p = u.progres[d.unit] || {};
    if(action==='simpanBaca'){ p.baca = true; }
    else {
      p.skor = Math.max(p.skor||0, d.skor);
      p.lulus = (p.skor >= LULUS);
      p.cubaan = (p.cubaan||0) + 1;
    }
    u.progres[d.unit] = p; demoSaveUsers(users);
    return {progres:u.progres};
  }
  if(action === 'sijil'){
    const u = users[SESI.emel];
    const no = u.sijilNo || ('PFA/KDH/' + new Date().getFullYear() + '/' + String(Math.floor(Math.random()*900)+100));
    if(!u.sijilNo){ u.sijilNo = no; u.sijilTarikh = new Date().toISOString(); demoSaveUsers(users); }
    return {no, tarikh:u.sijilTarikh};
  }
  if(action === 'senaraiPeserta'){
    return {senarai: Object.values(users).map(u=>({
      nama:u.nama, emel:u.emel, ppd:u.ppd, sekolah:u.sekolah, peranan:u.peranan,
      progres:u.progres||{}, sijilNo:u.sijilNo||''
    }))};
  }
  return {};
}

/* ==========================================================
   AUTENTIKASI
   ========================================================== */
function initLogin(){
  if(DEMO) $('#demoTag').classList.remove('hidden');

  $('#lnkDaftar').onclick = ()=>{ $('#formLogin').classList.add('hidden'); $('#formDaftar').classList.remove('hidden'); msgLogin(''); };
  $('#lnkLogin').onclick  = ()=>{ $('#formDaftar').classList.add('hidden'); $('#formLogin').classList.remove('hidden'); msgLogin(''); };
  $('#btnLogin').onclick  = doLogin;
  $('#btnDaftar').onclick = doDaftar;
  $('#inPin').addEventListener('keydown', e=>{ if(e.key==='Enter') doLogin(); });

  if(DEMO) msgLogin('Mod demo aktif — data disimpan pada peranti ini sahaja. Log masuk dengan sebarang e-mel dan PIN <b>123456</b> untuk mencuba sebagai Admin.','info');

  // sesi tersimpan
  const s = Simpan.get('sesi');
  if(s){ try { SESI = JSON.parse(s); masukShell(); } catch(e){} }
}
function msgLogin(html, jenis='err'){
  $('#loginMsg').innerHTML = html ? `<div class="msg msg-${jenis}">${html}</div>` : '';
}
async function doLogin(){
  const emel = $('#inEmel').value.trim().toLowerCase();
  const pin  = $('#inPin').value.trim();
  if(!emel || !pin) return msgLogin('Sila isi e-mel dan PIN.');
  $('#btnLogin').disabled = true; $('#btnLogin').textContent = 'Sedang log masuk…';
  try{
    const r = await api('login', {emel, pin});
    SESI = r.sesi; PROGRES = r.progres || {};
    Simpan.set('sesi', JSON.stringify(SESI));
    masukShell();
  }catch(e){ msgLogin(esc(e.message)); }
  $('#btnLogin').disabled = false; $('#btnLogin').textContent = 'Log masuk';
}
async function doDaftar(){
  const nama=$('#dNama').value.trim(), emel=$('#dEmel').value.trim().toLowerCase(),
        ppd=$('#dPpd').value, sekolah=$('#dSekolah').value.trim(), pin=$('#dPin').value.trim();
  if(!nama||!emel||!ppd||!pin) return msgLogin('Sila lengkapkan nama, e-mel, PPD dan PIN.');
  if(pin.length < 4) return msgLogin('PIN mestilah sekurang-kurangnya 4 digit.');
  $('#btnDaftar').disabled = true; $('#btnDaftar').textContent = 'Mendaftar…';
  try{
    await api('daftar', {nama, emel, ppd, sekolah, pin});
    $('#formDaftar').classList.add('hidden'); $('#formLogin').classList.remove('hidden');
    $('#inEmel').value = emel;
    msgLogin('Pendaftaran berjaya. Sila log masuk.','ok');
  }catch(e){ msgLogin(esc(e.message)); }
  $('#btnDaftar').disabled = false; $('#btnDaftar').textContent = 'Daftar akaun';
}
function keluar(){
  Simpan.del('sesi'); SESI=null; PROGRES={};
  $('#shell').classList.add('hidden'); $('#view-login').classList.remove('hidden');
  $('#inPin').value='';
}

function masukShell(){
  $('#view-login').classList.add('hidden');
  $('#shell').classList.remove('hidden');
  $('#whoNama').textContent = SESI.nama;
  $('#whoPeranan').textContent = labelPeranan(SESI.peranan);
  $('#whoAv').textContent = initials(SESI.nama);
  if(SESI.peranan === 'admin' || SESI.peranan === 'fasilitator') $('#navAdmin').classList.remove('hidden');
  Paparan.pasang();
  pergi('dash');
}

/* ==========================================================
   PAPARAN — saiz teks & mod pembentangan
   ========================================================== */
const Paparan = (() => {
  const SKALA = [1, 1.15, 1.32, 1.5, 1.75];   // aras saiz teks
  const BENTANG_MUL = 1.22;                    // pembesar tambahan bila membentang
  let aras = 0, bentang = false;
  let langkah = [], kini = 0;

  function guna(){
    document.documentElement.style.setProperty('--skala', SKALA[aras]);
    document.documentElement.style.setProperty('--bmul', bentang ? BENTANG_MUL : 1);
    const s = $('#pSkala');
    if(s) s.textContent = Math.round(SKALA[aras] * (bentang ? BENTANG_MUL : 1) * 100) + '%';
    const bk = $('#btnKecil'), bb = $('#btnBesar');
    if(bk) bk.disabled = (aras === 0);
    if(bb) bb.disabled = (aras === SKALA.length - 1);
  }

  function simpanTetapan(){
    Simpan.set('paparan', JSON.stringify({ aras, bentang }));
  }

  function tukarBentang(nilai){
    bentang = (nilai === undefined) ? !bentang : !!nilai;
    document.body.classList.toggle('bentang', bentang);
    const b = $('#btnBentang');
    if(b){ b.classList.toggle('on', bentang); b.textContent = bentang ? '⛶ Keluar bentang' : '⛶ Bentang'; }
    guna(); simpanTetapan(); kemasLangkah();
    if(bentang) tunjukTip();
  }

  function tunjukTip(){
    const lama = document.querySelector('.bentang-tip'); if(lama) lama.remove();
    const t = document.createElement('div');
    t.className = 'bentang-tip';
    t.textContent = 'Mod pembentangan  ·  ← → bahagian  ·  P untuk keluar';
    document.body.appendChild(t);
    setTimeout(()=>{ t.style.opacity = '0'; }, 4200);
    setTimeout(()=>{ t.remove(); }, 5000);
  }

  /* --- langkah demi langkah dalam paparan unit --- */
  function kemasLangkah(){
    const unitAktif = !$('#view-unit').classList.contains('hidden');
    langkah = unitAktif ? $$('#view-unit .pv-step') : [];
    const guna_ = bentang && langkah.length > 1;

    document.body.classList.toggle('melangkah', guna_);
    const bar = $('#stepBar');
    if(bar) bar.classList.toggle('hidden', !guna_);

    if(guna_){
      if(kini >= langkah.length) kini = 0;
      papar(kini);
      const j = $('#sbJum'); if(j) j.textContent = langkah.length;
    } else {
      langkah.forEach(el => el.classList.remove('kini'));
    }
  }

  function papar(i){
    if(!langkah.length) return;
    kini = Math.max(0, Math.min(i, langkah.length - 1));
    langkah.forEach((el, n) => el.classList.toggle('kini', n === kini));
    const k = $('#sbKini'); if(k) k.textContent = kini + 1;
    const p = $('#sbPrev'), n = $('#sbNext');
    if(p) p.disabled = (kini === 0);
    if(n) n.disabled = (kini === langkah.length - 1);
    window.scrollTo({ top:0, behavior:'instant' });
  }

  function maju(){ papar(kini + 1); }
  function undur(){ papar(kini - 1); }
  function reset(){ kini = 0; kemasLangkah(); }

  function pasang(){
    /* pulihkan tetapan tersimpan */
    try{
      const t = JSON.parse(Simpan.get('paparan') || '{}');
      if(typeof t.aras === 'number') aras = Math.max(0, Math.min(t.aras, SKALA.length - 1));
      if(t.bentang) bentang = true;
    }catch(e){}
    document.body.classList.toggle('bentang', bentang);
    const b = $('#btnBentang');
    if(b){ b.classList.toggle('on', bentang); b.textContent = bentang ? '⛶ Keluar bentang' : '⛶ Bentang'; }
    guna();

    const bk = $('#btnKecil'), bb = $('#btnBesar');
    if(bk) bk.onclick = ()=>{ if(aras > 0){ aras--; guna(); simpanTetapan(); } };
    if(bb) bb.onclick = ()=>{ if(aras < SKALA.length - 1){ aras++; guna(); simpanTetapan(); } };
    if(b)  b.onclick  = ()=> tukarBentang();

    const sp = $('#sbPrev'), sn = $('#sbNext');
    if(sp) sp.onclick = undur;
    if(sn) sn.onclick = maju;

    document.addEventListener('keydown', (e)=>{
      const dlmMedan = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || ''));
      if(dlmMedan) return;

      /* Ctrl/Cmd + dan − untuk saiz teks */
      if((e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '+')){
        e.preventDefault(); if(aras < SKALA.length-1){ aras++; guna(); simpanTetapan(); } return;
      }
      if((e.ctrlKey || e.metaKey) && e.key === '-'){
        e.preventDefault(); if(aras > 0){ aras--; guna(); simpanTetapan(); } return;
      }
      if(e.ctrlKey || e.metaKey || e.altKey) return;

      if(e.key === 'p' || e.key === 'P'){ e.preventDefault(); tukarBentang(); return; }
      if(!document.body.classList.contains('melangkah')) return;
      if(e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' '){ e.preventDefault(); maju(); }
      else if(e.key === 'ArrowLeft' || e.key === 'PageUp'){ e.preventDefault(); undur(); }
      else if(e.key === 'Home'){ e.preventDefault(); papar(0); }
      else if(e.key === 'End'){ e.preventDefault(); papar(langkah.length - 1); }
    });
  }

  return { pasang, reset, kemasLangkah, tukarBentang };
})();

/* ==========================================================
   PENGHALAAN
   ========================================================== */
function pergi(view, arg){
  $$('#shell main > section').forEach(s=>s.classList.add('hidden'));
  $$('#navLinks button').forEach(b=>b.classList.toggle('on', b.dataset.go===view));
  window.scrollTo({top:0, behavior:'instant'});
  if(view==='dash')  { $('#view-dash').classList.remove('hidden');  renderDash(); }
  if(view==='unit')  { $('#view-unit').classList.remove('hidden');  renderUnit(arg); }
  if(view==='kuiz')  { $('#view-kuiz').classList.remove('hidden');  mulaKuiz(arg); }
  if(view==='sijil') { $('#view-sijil').classList.remove('hidden'); renderSijil(); }
  if(view==='admin') { $('#view-admin').classList.remove('hidden'); renderAdmin(); }
  if(typeof Paparan !== 'undefined') Paparan.reset();
}

/* ==========================================================
   PENANDA GLOSARI & PENJELASAN
   ========================================================== */
function tandaGlosari(teks){
  return String(teks).replace(/\{\{(.+?)\}\}/g, (m, k) => {
    const g = GLOSARI[k];
    if(!g) return k;
    return `<span class="gl" data-gl="${esc(k)}">${esc(k)}</span>`;
  });
}
function pasangGlosari(scope){
  scope.querySelectorAll('.gl').forEach(el=>{
    el.onclick = e => { e.stopPropagation(); tunjukGloss(el); };
    el.onmouseenter = () => tunjukGloss(el);
    el.onmouseleave = sorokGloss;
  });
}
function tunjukGloss(el){
  const g = GLOSARI[el.dataset.gl]; if(!g) return;
  const p = $('#glossPop');
  p.innerHTML = `<b>${esc(el.dataset.gl)}</b><span class="full">${esc(g.penuh)}</span>${esc(g.maksud)}`;
  p.classList.add('show');
  const r = el.getBoundingClientRect(), pr = p.getBoundingClientRect();
  let left = Math.min(Math.max(8, r.left), window.innerWidth - pr.width - 8);
  let top  = r.bottom + 8;
  if(top + pr.height > window.innerHeight - 8) top = r.top - pr.height - 8;
  p.style.left = left+'px'; p.style.top = Math.max(8,top)+'px';
}
function sorokGloss(){ $('#glossPop').classList.remove('show'); }
document.addEventListener('click', e=>{ if(!e.target.closest('.gl')) sorokGloss(); });

function htmlWhy(why, id){
  if(!why) return '';
  return `<div class="why" id="why-${id}">
      <h4>${tandaGlosari(esc(why.tajuk))}</h4>
      <p>${tandaGlosari(why.isi)}</p>
      ${why.contoh ? `<div class="contoh">${tandaGlosari(why.contoh)}</div>` : ''}
    </div>`;
}

/* ==========================================================
   DASHBOARD
   ========================================================== */
function kiraProgres(){
  let baca=0, lulus=0;
  UNITS.forEach(u=>{
    const p = PROGRES[u.id] || {};
    if(p.baca) baca++;
    if(p.lulus) lulus++;
  });
  return {baca, lulus, jumlah:UNITS.length, peratus: Math.round(lulus/UNITS.length*100)};
}

function renderDash(){
  const st = kiraProgres();
  const kel = 2*Math.PI*42, isi = kel * (st.peratus/100);

  let h = `<div class="hero">
    <div class="eyebrow" style="color:var(--sage-soft)">Modul Latihan Jurulatih · TOT</div>
    <h1>Selamat datang, ${esc(SESI.nama.split(' ')[0])}</h1>
    <p>Lapan unit, satu matlamat: memastikan tiada murid berjuang sendirian dalam sebarang krisis. Baca setiap unit, cuba komponen interaktifnya, dan uji kefahaman anda dengan kuiz pendek.</p>
    <div class="progress-ring">
      <div class="ring">
        <svg width="96" height="96">
          <circle cx="48" cy="48" r="42" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="7"/>
          <circle cx="48" cy="48" r="42" fill="none" stroke="#E9A178" stroke-width="7" stroke-linecap="round"
            stroke-dasharray="${isi} ${kel}"/>
        </svg>
        <div class="ring-txt"><b>${st.peratus}%</b><small>SIAP</small></div>
      </div>
      <div class="prog-stats">
        <div class="pstat"><b>${st.baca}/${st.jumlah}</b><span>Unit dibaca</span></div>
        <div class="pstat"><b>${st.lulus}/${st.jumlah}</b><span>Kuiz lulus (≥${LULUS}%)</span></div>
      </div>
    </div>
  </div>`;

  h += `<div class="unit-grid">`;
  UNITS.forEach(u=>{
    const p = PROGRES[u.id] || {};
    const kelas = p.lulus ? 'done' : (p.baca ? 'started' : '');
    const chip = p.skor!=null
      ? `<span class="score-chip ${p.lulus?'pass':'fail'}">${p.skor}%</span>`
      : `<span class="score-chip">Belum diuji</span>`;
    h += `<button class="unit-card ${kelas}" data-unit="${u.id}">
      <span class="no">UNIT ${u.id}</span>
      <h3>${esc(u.tajuk)}</h3>
      <p>${esc(u.ringkas)}</p>
      <div class="unit-foot">${chip}<span class="pill grey">${esc(u.tempoh)}</span></div>
    </button>`;
  });
  h += `</div>`;

  const layak = st.lulus === st.jumlah;
  h += `<div class="cert-banner ${layak?'':'locked'}">
    <div class="ci">${layak?'🎓':'🔒'}</div>
    <div>
      <h3>${layak?'Sijil Tauliah Jurulatih tersedia':'Sijil Tauliah Jurulatih'}</h3>
      <p>${layak
        ? 'Tahniah — anda telah melengkapkan kesemua lapan kuiz unit pada tahap yang ditetapkan.'
        : `Perlu lulus kesemua ${st.jumlah} kuiz unit pada ${LULUS}% ke atas. Setakat ini: <b>${st.lulus}/${st.jumlah}</b>.`}</p>
    </div>
    <button class="btn ${layak?'':'btn-ghost'}" ${layak?'':'disabled'} id="btnSijil">Lihat sijil</button>
  </div>`;

  $('#view-dash').innerHTML = h;
  $$('#view-dash .unit-card').forEach(b=> b.onclick = ()=> pergi('unit', +b.dataset.unit));
  const bs = $('#btnSijil'); if(bs && layak) bs.onclick = ()=> pergi('sijil');
}

/* ==========================================================
   PEMBACA UNIT
   ========================================================== */
let idWhy = 0;

function renderUnit(id){
  const u = UNITS.find(x=>x.id===id); if(!u) return pergi('dash');
  const p = PROGRES[id] || {};
  idWhy = 0;

  let h = `<button class="btn btn-ghost btn-sm" id="btnBalik">← Dashboard</button>
  <div class="pv-step"><div class="unit-head mt">
    <div class="eyebrow">Unit ${u.id} · ${esc(u.tempoh)}</div>
    <h1>${esc(u.tajuk)}</h1>
    <p>${esc(u.ringkas)}</p>
    <div class="obj-list"><b>Objektif Pembelajaran</b><ul>
      ${u.objektif.map(o=>`<li>${esc(o)}</li>`).join('')}
    </ul></div>
  </div></div>`;

  u.seksyen.forEach(s=>{ h += `<div class="pv-step">${renderSeksyen(s)}</div>`; });

  h += `<div class="pv-step"><div class="card mt2 center">
    <h3>Uji kefahaman anda</h3>
    <p class="muted small" style="margin:.4em 0 1.1em">
      ${esc(u.gayaKuiz)} · ${soalanUnit(u.id).length} soalan · perlu ${LULUS}% untuk lulus
      ${p.skor!=null ? ` · skor terbaik anda: <b>${p.skor}%</b>` : ''}
    </p>
    <button class="btn" id="btnKuiz">${p.lulus ? 'Cuba semula kuiz' : 'Mula kuiz Unit '+u.id}</button>
  </div>`;

  const prev = UNITS.find(x=>x.id===id-1), next = UNITS.find(x=>x.id===id+1);
  h += `<div class="quiz-nav mt2">
    ${prev ? `<button class="btn btn-ghost" data-nav="${prev.id}">← Unit ${prev.id}</button>` : '<span></span>'}
    ${next ? `<button class="btn btn-ghost" data-nav="${next.id}">Unit ${next.id} →</button>` : '<span></span>'}
  </div></div>`;

  const v = $('#view-unit'); v.innerHTML = h;

  $('#btnBalik').onclick = ()=> pergi('dash');
  $('#btnKuiz').onclick  = ()=> pergi('kuiz', id);
  $$('#view-unit [data-nav]').forEach(b=> b.onclick = ()=> pergi('unit', +b.dataset.nav));
  $$('#view-unit .why-btn').forEach(b=>{
    b.onclick = ()=>{
      const w = document.getElementById('why-'+b.dataset.why);
      const buka = w.classList.toggle('open');
      b.classList.toggle('on', buka);
      b.textContent = buka ? 'Tutup' : 'Kenapa?';
    };
  });
  pasangGlosari(v);
  pasangInteraktif(v);

  // tanda unit sebagai dibaca
  if(!p.baca){
    PROGRES[id] = Object.assign({}, p, {baca:true});
    api('simpanBaca', {unit:id}).catch(()=>{});
  }
}

function renderSeksyen(s){
  if(s.j === 'prosa'){
    return `<div class="section"><p class="prosa">${tandaGlosari(s.teks)}</p></div>`;
  }
  if(s.j === 'poin'){
    let h = `<div class="section">${s.tajuk?`<h2>${esc(s.tajuk)}</h2>`:''}<ul class="poin">`;
    s.items.forEach(it=>{
      const id = ++idWhy;
      h += `<li><div class="pt">
        <span class="dot"></span>
        <span class="pt-txt">${tandaGlosari(it.t)}</span>
        ${it.why?`<button class="why-btn" data-why="${id}">Kenapa?</button>`:''}
      </div>${htmlWhy(it.why, id)}</li>`;
    });
    return h + `</ul></div>`;
  }
  if(s.j === 'kad'){
    let h = `<div class="section">${s.tajuk?`<h2>${esc(s.tajuk)}</h2>`:''}<div class="kad-grid">`;
    s.items.forEach(it=>{
      const id = ++idWhy;
      h += `<div class="kad"><h4>${tandaGlosari(it.tajuk)}</h4><p>${tandaGlosari(it.isi)}</p>
        ${it.why?`<button class="why-btn" data-why="${id}">Kenapa?</button>`:''}
        ${htmlWhy(it.why, id)}</div>`;
    });
    return h + `</div></div>`;
  }
  if(s.j === 'banding'){
    const kol = c => `<div class="bcol ${c.jenis||'do'}"><h4>${esc(c.tajuk)}</h4><ul>
      ${c.items.map(i=>`<li>${tandaGlosari(i)}</li>`).join('')}</ul></div>`;
    return `<div class="section">${s.tajuk?`<h2>${esc(s.tajuk)}</h2>`:''}
      <div class="banding">${kol(s.kiri)}${kol(s.kanan)}</div></div>`;
  }
  if(s.j === 'ia'){
    return `<div class="section"><div class="ia" data-ia="${s.komponen}">
      <div class="ia-head"><span class="tag">Interaktif</span><h3>${esc(s.tajuk)}</h3></div>
      ${s.nota?`<p class="muted small" style="margin-bottom:1.1em">${tandaGlosari(s.nota)}</p>`:''}
      <div class="ia-body"></div></div></div>`;
  }
  return '';
}

/* ==========================================================
   KOMPONEN INTERAKTIF
   ========================================================== */
function pasangInteraktif(scope){
  scope.querySelectorAll('[data-ia]').forEach(el=>{
    const body = el.querySelector('.ia-body');
    const k = el.dataset.ia;
    if(k==='piramid')   iaPiramid(body);
    if(k==='nafas')     iaNafas(body);
    if(k==='grounding') iaGrounding(body);
    if(k==='validasi')  iaValidasi(body);
  });
}

function iaPiramid(el){
  const pts = [
    'M200,20 L250,95 L150,95 Z',
    'M150,95 L250,95 L285,150 L115,150 Z',
    'M115,150 L285,150 L325,215 L75,215 Z',
    'M75,215 L325,215 L370,290 L30,290 Z'
  ];
  const urut = [3,2,1,0]; // index PIRAMID untuk setiap poligon (atas → bawah)
  el.innerHTML = `<div class="pyr">
    <svg viewBox="0 0 400 310" role="img" aria-label="Piramid MHPSS">
      ${pts.map((d,i)=>`<path d="${d}" fill="${PIRAMID[urut[i]].warna}" data-l="${urut[i]}" style="cursor:pointer"/>`).join('')}
      <text x="200" y="70"  text-anchor="middle" fill="#fff" font-size="15" font-weight="700" pointer-events="none">4</text>
      <text x="200" y="130" text-anchor="middle" fill="#fff" font-size="15" font-weight="700" pointer-events="none">3</text>
      <text x="200" y="190" text-anchor="middle" fill="#fff" font-size="15" font-weight="700" pointer-events="none">2</text>
      <text x="200" y="262" text-anchor="middle" fill="#fff" font-size="15" font-weight="700" pointer-events="none">1</text>
    </svg>
    <div class="pyr-info" id="pyrInfo"></div>
  </div>`;

  const info = el.querySelector('#pyrInfo');
  function papar(i){
    const L = PIRAMID[i];
    info.innerHTML = `<div class="lbl">Lapisan ${L.no}</div>
      <h4>${esc(L.nama)}</h4>
      <p><b>Fokus:</b> ${esc(L.fokus)}</p>
      <p style="margin-top:.5em"><b>Aplikasi:</b> ${esc(L.aplikasi)}</p>
      <div class="siapa">Diterajui oleh: <b>${esc(L.siapa)}</b></div>`;
    el.querySelectorAll('path').forEach(p=>p.setAttribute('stroke','none'));
    const sel = el.querySelector(`path[data-l="${i}"]`);
    sel.setAttribute('stroke','#26403E'); sel.setAttribute('stroke-width','3');
  }
  el.querySelectorAll('path').forEach(p=>{
    p.onclick = ()=> papar(+p.dataset.l);
  });
  papar(2); // mula pada Lapisan 3 — tempat PFA berlaku
}

function iaNafas(el){
  el.innerHTML = `<div class="nafas">
    <div class="nafas-circle" id="nfC"><b id="nfF">4·7·8</b><small id="nfS">tekan mula</small></div>
    <div class="nafas-ctr">
      <button class="btn btn-sm" id="nfGo">Mula</button>
      <span class="nafas-kira" id="nfK">Kitaran 0</span>
    </div>
  </div>`;
  const c=el.querySelector('#nfC'), f=el.querySelector('#nfF'), s=el.querySelector('#nfS'),
        b=el.querySelector('#nfGo'), k=el.querySelector('#nfK');
  let jalan=false, timer=null, kitaran=0;
  const fasa=[{n:'Tarik nafas',d:4,sk:1.12},{n:'Tahan',d:7,sk:1.12},{n:'Hembus',d:8,sk:.82}];
  let fi=0, kira=0;

  function tik(){
    const F=fasa[fi];
    if(kira===0){ f.textContent=F.n; c.style.transform=`scale(${F.sk})`;
      c.style.transitionDuration = F.d+'s'; }
    s.textContent = (F.d - kira) + ' saat';
    kira++;
    if(kira > F.d){
      kira=0; fi=(fi+1)%3;
      if(fi===0){ kitaran++; k.textContent = 'Kitaran '+kitaran; }
    }
  }
  b.onclick = ()=>{
    jalan=!jalan;
    if(jalan){ b.textContent='Henti'; fi=0; kira=0; tik(); timer=setInterval(tik,1000); }
    else { clearInterval(timer); b.textContent='Mula'; f.textContent='4·7·8'; s.textContent='tekan mula';
      c.style.transitionDuration='1s'; c.style.transform='scale(1)'; }
  };
}

function iaGrounding(el){
  el.innerHTML = `<div class="gr-steps">${GROUNDING.map((g,i)=>`
    <div class="gr-step" data-i="${i}">
      <div class="gr-num">${g.n}</div>
      <div><b>${esc(g.deria)}</b><small>${esc(g.arahan)}</small></div>
    </div>`).join('')}</div>
    <div class="nafas-ctr"><button class="btn btn-sm btn-sage" id="grGo">Mula panduan</button>
    <button class="btn btn-ghost btn-sm hidden" id="grNext">Langkah seterusnya →</button></div>`;
  const steps = el.querySelectorAll('.gr-step');
  const go=el.querySelector('#grGo'), nx=el.querySelector('#grNext');
  let i=-1;
  function pilih(n){
    steps.forEach((s,j)=>{ s.classList.toggle('on', j===n); s.classList.toggle('done', j<n); });
  }
  go.onclick = ()=>{ i=0; pilih(0); go.classList.add('hidden'); nx.classList.remove('hidden'); };
  nx.onclick = ()=>{
    i++;
    if(i >= GROUNDING.length){
      pilih(-1); steps.forEach(s=>s.classList.add('on'));
      nx.classList.add('hidden'); go.classList.remove('hidden'); go.textContent='Ulang panduan';
      toast('Selesai — perhatikan bagaimana fokus kembali ke sini dan kini.');
      i=-1; return;
    }
    pilih(i);
  };
}

function iaValidasi(el){
  el.innerHTML = VALIDASI.map((v,i)=>`
    <div class="tv-card">
      <div class="lbl">${esc(v.kategori)}</div>
      <div class="bad">"${esc(v.buruk)}"</div>
      <button class="why-btn" data-tv="${i}" style="margin-top:.7em">Tunjuk gantian</button>
      <div class="tv-reveal" id="tv-${i}">
        <div class="lbl">Ganti dengan validasi</div>
        <div class="good">"${esc(v.baik)}"</div>
        <div class="kesan">${esc(v.kesan)}</div>
      </div>
    </div>`).join('');
  el.querySelectorAll('[data-tv]').forEach(b=>{
    b.onclick = ()=>{
      const r = el.querySelector('#tv-'+b.dataset.tv);
      const buka = r.classList.toggle('open');
      b.classList.toggle('on', buka);
      b.textContent = buka ? 'Sembunyikan' : 'Tunjuk gantian';
    };
  });
}

/* ==========================================================
   ENJIN KUIZ
   ========================================================== */
let Q = null;

function mulaKuiz(unitId){
  const senarai = soalanUnit(unitId).slice();
  Q = { unit:unitId, soalan:senarai, i:0, jawapan:new Array(senarai.length).fill(null), semak:false };
  paparSoalan();
}

function paparSoalan(){
  const u = UNITS.find(x=>x.id===Q.unit);
  const s = Q.soalan[Q.i];
  const jwpn = Q.jawapan[Q.i];
  const multi = s.jenis === 'multi';
  const pilihanKey = ['A','B','C','D','E'];

  let h = `<button class="btn btn-ghost btn-sm" id="qKeluar">← Kembali ke Unit ${Q.unit}</button>
  <div class="quiz-head mt">
    <div>
      <div class="eyebrow">Kuiz Unit ${Q.unit} · ${esc(u.gayaKuiz)}</div>
      <h2 style="font-size:1.3rem">${esc(u.tajuk)}</h2>
    </div>
    <span class="pill">Soalan ${Q.i+1} / ${Q.soalan.length}</span>
  </div>
  <div class="qbar"><div style="width:${(Q.i)/Q.soalan.length*100}%"></div></div>

  <div class="q-card mt">
    <div class="q-meta">
      <span class="pill ${multi?'amber':'sage'}">${multi?'Pilih semua yang betul':'Pilih satu jawapan'}</span>
    </div>
    ${s.senario ? `<div class="q-senario"><b>Situasi:</b> ${esc(s.senario)}</div>` : ''}
    <div class="q-teks">${esc(s.soalan)}</div>
    <div class="opts">`;

  s.pilihan.forEach((p,i)=>{
    let kelas = '';
    if(Q.semak){
      const betul = multi ? s.jawapan.includes(i) : s.jawapan===i;
      const dipilih = multi ? (jwpn||[]).includes(i) : jwpn===i;
      if(betul) kelas = 'betul';
      else if(dipilih) kelas = 'silap';
    } else {
      const dipilih = multi ? (jwpn||[]).includes(i) : jwpn===i;
      if(dipilih) kelas = 'sel';
    }
    h += `<button class="opt ${kelas}" data-o="${i}" ${Q.semak?'disabled':''}>
      <span class="key">${pilihanKey[i]}</span><span>${esc(p)}</span></button>`;
  });

  h += `</div>`;

  if(Q.semak){
    const tepat = semakJawapan(s, jwpn);
    h += `<div class="fb ${tepat?'tepat':'belum'} show">
      <h4>${tepat?'✓ Tepat':'○ Belum tepat'}</h4>
      <p>${esc(s.rasional)}</p>
      <div class="rujuk">Rujukan: ${esc(s.rujuk)}</div>
    </div>`;
  }

  h += `<div class="quiz-nav">
      ${Q.i>0 ? `<button class="btn btn-ghost" id="qPrev">← Sebelum</button>` : '<span></span>'}
      ${Q.semak
        ? `<button class="btn" id="qNext">${Q.i===Q.soalan.length-1?'Lihat keputusan':'Soalan seterusnya →'}</button>`
        : `<button class="btn" id="qSemak" ${jwpn==null||(multi&&!jwpn.length)?'disabled':''}>Semak jawapan</button>`}
    </div>
  </div>`;

  $('#view-kuiz').innerHTML = h;

  $('#qKeluar').onclick = ()=> pergi('unit', Q.unit);
  $$('#view-kuiz .opt').forEach(b=>{
    b.onclick = ()=>{
      const i = +b.dataset.o;
      if(multi){
        let arr = Q.jawapan[Q.i] || [];
        arr = arr.includes(i) ? arr.filter(x=>x!==i) : arr.concat(i);
        Q.jawapan[Q.i] = arr;
      } else { Q.jawapan[Q.i] = i; }
      paparSoalan();
    };
  });
  const bp=$('#qPrev'); if(bp) bp.onclick = ()=>{ Q.i--; Q.semak=false; paparSoalan(); };
  const bs=$('#qSemak'); if(bs) bs.onclick = ()=>{ Q.semak=true; paparSoalan(); };
  const bn=$('#qNext'); if(bn) bn.onclick = ()=>{
    if(Q.i === Q.soalan.length-1) return keputusanKuiz();
    Q.i++; Q.semak=false; paparSoalan();
  };
}

function semakJawapan(s, j){
  if(j==null) return false;
  if(s.jenis === 'multi'){
    const a = (j||[]).slice().sort().join(',');
    const b = s.jawapan.slice().sort().join(',');
    return a === b;
  }
  return j === s.jawapan;
}

async function keputusanKuiz(){
  let betul = 0;
  Q.soalan.forEach((s,i)=>{ if(semakJawapan(s, Q.jawapan[i])) betul++; });
  const skor = Math.round(betul / Q.soalan.length * 100);
  const lulus = skor >= LULUS;

  let h = `<div class="q-card result ${lulus?'pass':'fail'}">
    <div class="big">${skor}%</div>
    <h2>${lulus ? 'Unit '+Q.unit+' selesai' : 'Belum mencapai tahap lulus'}</h2>
    <p>${lulus
      ? `Anda menjawab ${betul} daripada ${Q.soalan.length} soalan dengan tepat. Kefahaman anda untuk unit ini mencukupi untuk disampaikan semula kepada peserta bengkel.`
      : `Anda menjawab ${betul} daripada ${Q.soalan.length} soalan dengan tepat. Tahap lulus ialah ${LULUS}%. Baca semula unit ini dan cuba sekali lagi — tiada had percubaan.`}</p>

    <div style="text-align:left;max-width:560px;margin:1.6em auto 0">`;
  Q.soalan.forEach((s,i)=>{
    const ok = semakJawapan(s, Q.jawapan[i]);
    h += `<div class="review-item ${ok?'ok':'no'}">
      <span class="rq">${ok?'✓':'○'} Soalan ${i+1}: ${esc(s.soalan)}</span>
      ${ok?'':`<span class="muted">${esc(s.rasional)}</span>`}
    </div>`;
  });
  h += `</div>
    <div class="result-acts">
      <button class="btn btn-ghost" id="rUlang">Cuba semula</button>
      <button class="btn btn-ghost" id="rUnit">Baca semula unit</button>
      <button class="btn" id="rDash">Kembali ke dashboard</button>
    </div>
  </div>`;

  $('#view-kuiz').innerHTML = h;
  $('#rUlang').onclick = ()=> mulaKuiz(Q.unit);
  $('#rUnit').onclick  = ()=> pergi('unit', Q.unit);
  $('#rDash').onclick  = ()=> pergi('dash');

  // simpan progres
  const p = PROGRES[Q.unit] || {};
  PROGRES[Q.unit] = Object.assign({}, p, {
    baca:true,
    skor: Math.max(p.skor||0, skor),
    lulus: Math.max(p.skor||0, skor) >= LULUS,
    cubaan:(p.cubaan||0)+1
  });
  try { await api('simpanKuiz', {unit:Q.unit, skor, jumlah:Q.soalan.length, betul}); }
  catch(e){ toast('Skor disimpan pada peranti; penyegerakan gagal.'); }
  if(lulus) toast('Unit '+Q.unit+' lulus dengan '+skor+'%');
}

/* ==========================================================
   SIJIL
   ========================================================== */
async function renderSijil(){
  const st = kiraProgres();
  const v = $('#view-sijil');

  if(st.lulus < st.jumlah){
    v.innerHTML = `<div class="empty card">
      <div class="ic">🔒</div>
      <h3>Sijil belum tersedia</h3>
      <p class="muted mt">Sijil Tauliah Jurulatih dikeluarkan setelah anda lulus kesemua
      ${st.jumlah} kuiz unit pada ${LULUS}% ke atas.<br>Setakat ini: <b>${st.lulus}/${st.jumlah}</b> unit.</p>
      <button class="btn mt" onclick="pergi('dash')">Kembali ke dashboard</button>
    </div>`;
    return;
  }

  v.innerHTML = `<div class="loader"><div class="spin"></div> Menjana sijil…</div>`;
  let no='—', tarikh=new Date().toISOString();
  try { const r = await api('sijil', {}); no = r.no; tarikh = r.tarikh || tarikh; } catch(e){}

  const t = new Date(tarikh);
  const bulan = ['Januari','Februari','Mac','April','Mei','Jun','Julai','Ogos','September','Oktober','November','Disember'];
  const tarikhTeks = `${t.getDate()} ${bulan[t.getMonth()]} ${t.getFullYear()}`;
  const purata = Math.round(UNITS.reduce((a,u)=>a+(PROGRES[u.id]?.skor||0),0)/UNITS.length);

  v.innerHTML = `
  <div class="no-print" style="display:flex;gap:.7em;flex-wrap:wrap;margin-bottom:1.2em">
    <button class="btn btn-ghost btn-sm" onclick="pergi('dash')">← Dashboard</button>
    <button class="btn btn-sm" onclick="window.print()">Cetak / Simpan PDF</button>
  </div>
  <div class="sijil"><div class="sijil-in">
    <div class="kop">Jabatan Pendidikan Negeri Kedah · Jabatan Kesihatan Negeri Kedah</div>
    <h2>Sijil Tauliah Jurulatih</h2>
    <div class="sub">Modul Kepimpinan Krisis dan Bantuan Awal Psikologi<br>(<i>Psychological First Aid</i>) Untuk Warga Pendidikan</div>

    <div class="nama">${esc(SESI.nama)}</div>
    <div class="peranan">${esc(SESI.sekolah || '')}${SESI.sekolah && SESI.ppd ? ' · ' : ''}${esc(SESI.ppd || '')}</div>

    <p class="badan">telah melengkapkan kesemua lapan unit modul latihan ini dan mencapai
    tahap penguasaan yang ditetapkan dalam setiap penilaian, dengan purata skor
    <b>${purata}%</b>. Beliau dengan ini ditauliahkan sebagai <b>Jurulatih Bantuan Awal
    Psikologi</b> yang berkelayakan menyampaikan modul ini kepada warga pendidikan
    di peringkat sekolah dan daerah.</p>

    <div class="sijil-foot">
      <div><div class="line"><b>Pengarah</b>Jabatan Pendidikan Negeri Kedah</div></div>
      <div><div class="line"><b>Pengarah</b>Jabatan Kesihatan Negeri Kedah</div></div>
    </div>
    <div class="no">No. Sijil: ${esc(no)} · Tarikh: ${tarikhTeks} · ${VERSI}</div>
  </div></div>`;
}

/* ==========================================================
   PENTADBIRAN
   ========================================================== */
async function renderAdmin(){
  const v = $('#view-admin');
  v.innerHTML = `<div class="loader"><div class="spin"></div> Memuatkan data…</div>`;
  let senarai = [];
  try { const r = await api('senaraiPeserta', {}); senarai = r.senarai || []; }
  catch(e){ v.innerHTML = `<div class="empty card"><div class="ic">⚠</div><h3>Gagal memuatkan data</h3>
    <p class="muted mt">${esc(e.message)}</p></div>`; return; }

  const jum = senarai.length;
  const tauliah = senarai.filter(s=>{
    const p = s.progres||{};
    return UNITS.every(u => (p[u.id]||{}).lulus);
  }).length;
  const aktif = senarai.filter(s=>Object.keys(s.progres||{}).length>0).length;
  const semuaSkor = [];
  senarai.forEach(s=>UNITS.forEach(u=>{ const k=(s.progres||{})[u.id]; if(k&&k.skor!=null) semuaSkor.push(k.skor); }));
  const purata = semuaSkor.length ? Math.round(semuaSkor.reduce((a,b)=>a+b,0)/semuaSkor.length) : 0;

  let h = `<div class="eyebrow">Pentadbiran</div>
  <h1 style="margin-bottom:.8em">Pemantauan Latihan Jurulatih</h1>
  <div class="stat-row">
    <div class="stat"><b>${jum}</b><span>Jumlah peserta</span></div>
    <div class="stat"><b>${aktif}</b><span>Telah bermula</span></div>
    <div class="stat"><b>${tauliah}</b><span>Layak ditauliahkan</span></div>
    <div class="stat"><b>${purata}%</b><span>Purata skor kuiz</span></div>
  </div>`;

  // prestasi per unit
  h += `<h3 style="margin:1.4em 0 .7em">Prestasi mengikut unit</h3><div class="tbl-wrap"><table class="tbl">
    <tr><th>Unit</th><th>Tajuk</th><th>Cuba</th><th>Lulus</th><th>Purata</th></tr>`;
  UNITS.forEach(u=>{
    const skor = senarai.map(s=>(s.progres||{})[u.id]).filter(x=>x&&x.skor!=null);
    const lulus = skor.filter(x=>x.lulus).length;
    const pur = skor.length ? Math.round(skor.reduce((a,b)=>a+b.skor,0)/skor.length) : 0;
    h += `<tr><td><b>${u.id}</b></td><td>${esc(u.tajuk)}</td><td>${skor.length}</td>
      <td>${lulus}</td><td>${skor.length?pur+'%':'—'}</td></tr>`;
  });
  h += `</table></div>`;

  // senarai peserta
  h += `<h3 style="margin:1.6em 0 .7em">Senarai peserta</h3>`;
  if(!jum){
    h += `<div class="empty card"><div class="ic">👤</div><h3>Belum ada peserta</h3>
      <p class="muted mt">Peserta akan muncul di sini sebaik mereka mendaftar.</p></div>`;
  } else {
    h += `<div class="tbl-wrap"><table class="tbl">
      <tr><th>Nama</th><th>PPD</th><th>Peranan</th><th>Unit lulus</th><th>Status</th></tr>`;
    senarai.forEach(s=>{
      const p = s.progres||{};
      const lulus = UNITS.filter(u=>(p[u.id]||{}).lulus).length;
      const siap = lulus === UNITS.length;
      h += `<tr>
        <td><b>${esc(s.nama)}</b><br><span class="muted small">${esc(s.emel)}</span></td>
        <td>${esc(s.ppd||'—')}</td>
        <td><span class="pill grey">${esc(labelPeranan(s.peranan))}</span></td>
        <td>${lulus} / ${UNITS.length}</td>
        <td>${siap?`<span class="pill sage">Ditauliahkan</span>`:`<span class="pill grey">Dalam proses</span>`}</td>
      </tr>`;
    });
    h += `</table></div>`;
  }

  v.innerHTML = h;
}

/* ==========================================================
   MULA
   ========================================================== */
$$('#navLinks button').forEach(b=> b.onclick = ()=> pergi(b.dataset.go));
$('#btnKeluar').onclick = keluar;
initLogin();
