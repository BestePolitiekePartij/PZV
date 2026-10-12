// ====== HIER PAS JE ALLES AAN ======
const PARTIJ = {
  naam: "Beste Politieke Partij",          // naam wijzigt later
  kop: "Tijd voor een eerlijker Nederland",
  slogan: "Links, progressief en klaar voor de toekomst.",
  intro: [
    "Hier komt de introductietekst van onze partij. Vertel in een paar zinnen waar jullie voor staan en waarom jullie deze partij zijn begonnen.",
    "Nog een alinea over jullie visie: wat willen jullie veranderen in de samenleving, en voor wie?"
  ],
  voordelen: [   // wat krijg je als je meedoet
    "Voordeel 1 (nog in te vullen)",
    "Voordeel 2 (nog in te vullen)",
    "Voordeel 3 (nog in te vullen)"
  ]
};

// Vul titel en tekst in zodra jullie het besproken hebben
const SPEERPUNTEN = [
  { titel: "", kort: "", uitleg: "" },
  { titel: "", kort: "", uitleg: "" },
  { titel: "", kort: "", uitleg: "" },
  { titel: "", kort: "", uitleg: "" },
  { titel: "", kort: "", uitleg: "" }
];

// Echte foto's: zet een bestandsnaam of link (bijv. "fotos/hero.jpg"). Leeg = illustratie.
const FOTOS = { hero: "", meedoen: "" };
// ====================================

const $ = id => document.getElementById(id);
const KLEUREN = ["var(--c1)", "var(--c2)", "var(--c3)", "var(--c4)", "var(--c5)"];

// Eigen illustratie (plaatje) als er geen foto is
function scene(variant) {
  const mensen = ["#c0432f", "#d49a1f", "#2a8a8f", "#4a78b8", "#a8548a", "#c0432f", "#2a8a8f"];
  let p = "";
  mensen.forEach((c, i) => {
    const x = 70 + i * 75, y = 300 + (i % 2) * 10;
    p += `<circle cx="${x}" cy="${y - 38}" r="15" fill="#f1c9a5"/><path d="M${x - 24} ${y + 60} q0 -78 24 -78 q24 0 24 78z" fill="${c}"/>`;
  });
  const turbine = (x, y) => `<g stroke="#fff" stroke-width="4" stroke-linecap="round"><path d="M${x} ${y} v90"/><path d="M${x} ${y} l0 -34 M${x} ${y} l29 17 M${x} ${y} l-29 17"/></g>`;
  return `<svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustratie">
    <rect width="600" height="450" fill="${variant ? "#f6d9b8" : "#f9e2c6"}"/>
    <rect y="170" width="600" height="280" fill="#fdf1de"/>
    <circle cx="${variant ? 140 : 450}" cy="105" r="55" fill="#e8a33a"/>
    <path d="M0 270 Q150 200 300 255 T600 235 V450 H0z" fill="#7fb7a2"/>
    <g fill="#35708a"><rect x="40" y="190" width="50" height="110"/><rect x="95" y="215" width="40" height="85"/><rect x="430" y="180" width="55" height="120"/><rect x="490" y="205" width="45" height="95"/></g>
    <g fill="#f9e2c6"><rect x="52" y="205" width="10" height="10"/><rect x="68" y="205" width="10" height="10"/><rect x="52" y="225" width="10" height="10"/><rect x="443" y="195" width="10" height="10"/><rect x="460" y="195" width="10" height="10"/><rect x="443" y="215" width="10" height="10"/></g>
    ${turbine(260, 190)}${turbine(335, 205)}
    <path d="M0 330 Q200 290 400 335 T600 320 V450 H0z" fill="#2f6b57"/>
    ${p}</svg>`;
}
function vul(el, url, variant, alt) {
  if (url) { const i = document.createElement("img"); i.src = url; i.alt = alt; el.appendChild(i); }
  else el.innerHTML = scene(variant);
}

document.title = PARTIJ.naam;
$("logo").textContent = "★ " + PARTIJ.naam;
$("kop").textContent = PARTIJ.kop;
$("slogan").textContent = PARTIJ.slogan;
$("footer").textContent = "© " + new Date().getFullYear() + " " + PARTIJ.naam + " · Schoolproject Wereldburgerschap";
vul($("heroFoto"), FOTOS.hero, 0, "Hoofdfoto");
vul($("meedoenFoto"), FOTOS.meedoen, 1, "Doe mee");
PARTIJ.intro.forEach(t => { const p = document.createElement("p"); p.textContent = t; $("intro").appendChild(p); });
PARTIJ.voordelen.forEach(t => { const li = document.createElement("li"); li.textContent = t; $("voordelen").appendChild(li); });

SPEERPUNTEN.forEach((p, i) => {
  const leeg = !p.titel;
  const t = document.createElement("article");
  t.className = "tile" + (leeg ? " empty" : "");
  t.style.setProperty("--c", KLEUREN[i]);
  t.innerHTML = `<div class="nr">${i + 1}</div><h3></h3><p class="kort"></p>
    <div class="more"><p class="lang"></p></div>
    <button class="toggle" aria-expanded="false">Meer lezen ▾</button>`;
  t.querySelector("h3").textContent = leeg ? "Speerpunt " + (i + 1) + " – nog in te vullen" : p.titel;
  t.querySelector(".kort").textContent = p.kort || "Hier komt een korte omschrijving.";
  t.querySelector(".lang").textContent = p.uitleg || "Hier komt de uitgebreide uitleg van dit speerpunt.";
  const b = t.querySelector(".toggle");
  b.addEventListener("click", () => {
    const open = t.classList.toggle("open");
    b.setAttribute("aria-expanded", open);
    b.textContent = open ? "Minder lezen ▴" : "Meer lezen ▾";
  });
  $("tiles").appendChild(t);
});
const cta = document.createElement("article");
cta.className = "tile cta";
cta.style.setProperty("--c", "var(--band)");
cta.innerHTML = `<h3>Sta jij ook voor een eerlijker land?</h3><p>Sluit je aan en help ons om dit waar te maken.</p><a class="btn" href="#meedoen">Word lid</a>`;
$("tiles").appendChild(cta);

let steun = 0;
$("ctaBtn").addEventListener("click", () => {
  steun++;
  $("msg").textContent = steun === 1 ? "Bedankt voor je steun! 🎉" : "Je hebt " + steun + " keer gesteund. Sterk bezig! 💪";
});

const PALETTES = { mint: "#eaf1ec", roze: "#f7e6e0", blauw: "#e4edf3", wit: "#faf8f4" };
Object.entries(PALETTES).forEach(([n, c]) => {
  const b = document.createElement("button");
  b.className = "sw"; b.style.background = c; b.title = n;
  b.setAttribute("aria-label", "Achtergrond " + n);
  b.onclick = () => { document.documentElement.dataset.bg = n; };
  $("swatches").appendChild(b);
});
$("themeBtn").addEventListener("click", () => {
  const r = document.documentElement;
  const dark = r.dataset.theme === "dark" || (!r.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
  r.dataset.theme = dark ? "light" : "dark";
});
