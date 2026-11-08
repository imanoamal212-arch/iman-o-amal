/* app.js — الهيكل المشترك + اللغة + عرض الدروس + المشغّل */
const $ = s => document.querySelector(s);
let lang = localStorage.getItem("lang") || "ur";
const T = o => (typeof o === "string" ? o : o[lang] || o.en);
const L = (en, ur) => (lang === "ur" ? ur : en);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const lessonsOf = id => (LESSONS[id] || []).map(([t, a, y], i) => ({ t, a, y, i, cat: id }));
const total = () => CATS.reduce((n, c) => n + lessonsOf(c.id).length, 0);

/* ---------- Header / Footer ---------- */
const NAV = [
  ["index.html", "Home", "ہوم"],
  ["lessons.html#g:tafseer", "Tafseer", "تفسیر القرآن"],
  ["lessons.html#g:seerah", "Seerah", "سیرت"],
  ["lessons.html#g:topics", "Topics", "مختلف موضوعات"],
  ["index.html#about", "About", "تعارف"],
  ["index.html#contact", "Contact", "رابطہ"]
];
function buildChrome() {
  $("#site-header").innerHTML = `
  <div class="wrap bar">
    <a class="brand" href="index.html"><img src="logo.svg" alt=""><b data-en="${SITE.name.en}" data-ur="${SITE.name.ur}"></b></a>
    <nav id="nav">${NAV.map(n => `<a href="${n[0]}" data-en="${n[1]}" data-ur="${n[2]}"></a>`).join("")}</nav>
    <button id="langBtn" class="pill" aria-label="Language"></button>
    <button id="menuBtn" class="menu" aria-label="Menu">☰</button>
  </div>`;
  $("#site-footer").innerHTML = `<div class="wrap"><p>© 2026 <span data-en="${SITE.name.en}" data-ur="${SITE.name.ur}"></span></p></div>`;
  $("#langBtn").onclick = () => { lang = lang === "ur" ? "en" : "ur"; localStorage.setItem("lang", lang); applyLang(); };
  $("#menuBtn").onclick = () => $("#nav").classList.toggle("open");
  $("#nav").onclick = e => e.target.tagName === "A" && $("#nav").classList.remove("open");
}
function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
  document.querySelectorAll("[data-en]").forEach(e => (e.textContent = e.dataset[lang]));
  document.querySelectorAll("[data-pen]").forEach(e => (e.placeholder = e.dataset["p" + lang]));
  $("#langBtn").textContent = lang === "ur" ? "English" : "اردو";
  if (window.render) render();
}

/* ---------- Home ---------- */
function renderHome() {
  $("#stat").innerHTML = `<b>${total()}</b> ${L("lessons", "دروس")} · <b>${CATS.length}</b> ${L("series", "سلسلے")}`;
  $("#groups").innerHTML = GROUPS.map(g => {
    const cs = CATS.filter(c => c.g === g.id);
    return `<a class="gcard" href="lessons.html#g:${g.id}"><span class="ic">${g.icon}</span>
      <h3>${esc(T(g.t))}</h3><p>${esc(T(g.d))}</p>
      <small>${cs.reduce((n, c) => n + lessonsOf(c.id).length, 0)} ${L("lessons", "دروس")}</small></a>`;
  }).join("");
  const c = SITE.contact, links = [];
  if (c.youtube) links.push(`<a class="btn" href="${c.youtube}" target="_blank" rel="noopener">▶ YouTube</a>`);
  if (c.whatsapp) links.push(`<a class="btn" href="${c.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>`);
  if (c.email) links.push(`<a class="btn" href="mailto:${c.email}">✉ ${esc(c.email)}</a>`);
  $("#contactLinks").innerHTML = links.join("") || `<p class="muted">${L("Contact details coming soon.", "رابطے کی تفصیلات جلد شامل کی جائیں گی۔")}</p>`;
}

/* ---------- Lessons page ---------- */
let queue = [], cur = -1;
const audio = () => $("#audio");

function catCard(c) {
  const n = lessonsOf(c.id).length;
  return `<a class="card" href="#c:${c.id}"><span class="ic">${c.icon}</span><div><h3>${esc(T(c.t))}</h3>
    <small>${n ? n + " " + L("lessons", "دروس") : L("Coming soon", "جلد آرہا ہے")}</small></div></a>`;
}
function row(l, showCat) {
  const c = CATS.find(x => x.id === l.cat), id = l.cat + "-" + l.i;
  return `<li class="lesson" id="${id}"><button class="play" data-play="${id}" aria-label="Play">▶</button>
    <div class="info"><span class="num">${l.i + 1}</span><span class="ttl">${esc(T(l.t))}</span>
    ${showCat ? `<small>${esc(T(c.t))}</small>` : ""}</div>
    <div class="acts">${l.y ? `<a class="yt" href="${l.y}" target="_blank" rel="noopener">▶ YouTube</a>` : ""}
    <a class="dl" href="${l.a}" download title="${L("Download", "ڈاؤن لوڈ")}">⬇</a></div></li>`;
}
function render() {
  const [k, id] = location.hash.slice(1).split(":");
  const q = $("#q").value.trim().toLowerCase();
  const cat = k === "c" && CATS.find(c => c.id === id);
  const grp = GROUPS.find(g => g.id === (k === "g" ? id : cat && cat.g));
  let h = "", list = [];
  const crumbs = [`<a href="lessons.html">${L("All Lessons", "تمام دروس")}</a>`];
  if (grp) crumbs.push(`<a href="#g:${grp.id}">${esc(T(grp.t))}</a>`);
  $("#title").textContent = cat ? T(cat.t) : grp ? T(grp.t) : L("Lessons", "دروس");
  $("#crumbs").innerHTML = crumbs.join(" ‹ ".replace("‹", lang === "ur" ? "›" : "‹"));
  if (q) {
    CATS.filter(c => !cat || c.id === cat.id).forEach(c => list.push(...lessonsOf(c.id)));
    list = list.filter(l => (JSON.stringify(l.t) + T(CATS.find(c => c.id === l.cat).t)).toLowerCase().includes(q));
    h = list.length ? `<ul class="list">${list.map(l => row(l, !cat)).join("")}</ul>` : `<p class="muted">${L("No results.", "کوئی نتیجہ نہیں ملا۔")}</p>`;
  } else if (cat) {
    list = lessonsOf(cat.id);
    const pl = cat.pl ? `<a class="btn plbtn" href="${cat.pl}" target="_blank" rel="noopener">▶ ${L("Full series on YouTube", "پوری سیریز یوٹیوب پر دیکھیں")}</a>` : "";
    h = pl + (list.length ? `<ul class="list">${list.map(l => row(l)).join("")}</ul>` : `<p class="muted">${L("Lessons will be added soon.", "دروس جلد شامل کیے جائیں گے۔")}</p>`);
  } else {
    const gs = grp ? [grp] : GROUPS;
    h = gs.map(g => `<section><h2>${g.icon} ${esc(T(g.t))}</h2><div class="grid">${CATS.filter(c => c.g === g.id).map(catCard).join("")}</div></section>`).join("");
  }
  $("#content").innerHTML = h;
  queue = list; cur = -1; mark();
}
function mark() {
  document.querySelectorAll(".lesson").forEach(e => e.classList.remove("on"));
  document.querySelectorAll(".play").forEach(b => (b.textContent = "▶"));
  const l = queue[cur]; if (!l) return;
  const li = document.getElementById(l.cat + "-" + l.i);
  if (li) { li.classList.add("on"); li.querySelector(".play").textContent = audio().paused ? "▶" : "❚❚"; }
}
function playAt(i) {
  const l = queue[i]; if (!l) return;
  if (i === cur) { audio().paused ? audio().play() : audio().pause(); return; }
  cur = i; audio().src = l.a; audio().play().catch(() => {});
  $("#player").classList.add("show"); $("#pTitle").textContent = T(l.t); mark();
}
function fmt(s) { s = Math.floor(s || 0); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }
function initLessons() {
  const a = audio(), speeds = [1, 1.25, 1.5, 1.75, 2, 0.75];
  $("#q").value = new URLSearchParams(location.search).get("q") || "";
  $("#q").oninput = render; window.onhashchange = () => { render(); scrollTo(0, 0); };
  $("#content").onclick = e => {
    const b = e.target.closest("[data-play]"); if (!b) return;
    playAt(queue.findIndex(l => l.cat + "-" + l.i === b.dataset.play));
  };
  $("#pPlay").onclick = () => (a.paused ? a.play() : a.pause());
  $("#pNext").onclick = () => playAt(cur + 1); $("#pPrev").onclick = () => playAt(cur - 1);
  $("#pBack").onclick = () => (a.currentTime -= 15); $("#pFwd").onclick = () => (a.currentTime += 15);
  $("#pSpeed").onclick = () => { const n = speeds[(speeds.indexOf(a.playbackRate) + 1) % speeds.length]; a.playbackRate = n; $("#pSpeed").textContent = n + "×"; };
  $("#pSeek").oninput = e => (a.currentTime = (e.target.value / 1000) * a.duration);
  a.ontimeupdate = () => { $("#pSeek").value = a.duration ? (a.currentTime / a.duration) * 1000 : 0; $("#pTime").textContent = fmt(a.currentTime) + " / " + fmt(a.duration); };
  a.onplay = a.onpause = () => { $("#pPlay").textContent = a.paused ? "▶" : "❚❚"; mark(); };
  a.onended = () => playAt(cur + 1);
}

buildChrome();
if ($("#groups")) window.render = renderHome;
if ($("#content")) initLessons();
applyLang();
