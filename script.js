const PARTIJ = {
  naam: "De Beste Politieke Partij",
  kop: "P.Z.V.",
  slogan: "Partij voor Zekerheid en Vooruitgang",
  intro: [
    "Wij zijn een linkse, progressieve partij die strijdt voor gelijkheid, vrijheid en een eerlijke toekomst voor iedereen. Samen willen we Nederland betaalbaarder, veiliger en duurzamer maken!",
    "Wij vinden dat iedereen gelijke kansen verdient en zichzelf moet kunnen zijn. Daarom willen wij meer betaalbare woningen bouwen, het recht op abortus beschermen, de online veiligheid verbeteren, glutenvrije producten goedkoper maken en milieuvervuiling tegengaan. Wij vinden dat niemand buitengesloten mag worden en dat iedereen toegang moet hebben tot de basisbehoeften. Samen willen we werken aan een Nederland dat eerlijker, veiliger en duurzamer is voor iedereen, nu en in de toekomst!"
  ],
  voordelen: [
    "Jouw stem telt - Denk mee over plannen en ideeën die Nederland eerlijker en beter kunnen maken.",
    "Samen maken we verschil - Met meer mensen kunnen we onze ideeën verder verspreiden en onze doelen nastreven.",
    "Iedereen verdient een kans - Help mee bouwen aan een samenleving waarin iedereen eerlijk behandeld wordt."
  ]
};

const SPEERPUNTEN = [
  { titel: "Woningnood", kort: "Wij willen meer huizen bouwen!", uitleg: "Wij vinden dat iedereen recht heeft op een betaalbare en goede woning. Op dit moment is het voor veel mensen, vooral jongeren en mensen met een laag inkomen, moeilijk om een huis te vinden. Daarom willen wij dat er meer betaalbare huur- en koopwoningen worden gebouwd." },
  { titel: "Abortus", kort: "Wij vinden dat iedereen in Nederland zelf mag kiezen of en wanneer zij abortus willen plegen.", uitleg: "Wij zijn voor het recht op abortus en vinden dat iedereen zelf moet kunnen beslissen over het eigen lichaam. Niemand mag gedwongen worden om een zwangerschap voort te zetten als diegene dat niet wil. Daarom willen wij dat abortus veilig, toegankelijk en betaalbaar blijft." },
  { titel: "Cybersecurity ", kort: "Iedereen moet veilig zijn online.", uitleg: "Wij vinden dat iedereen veilig gebruik moet kunnen maken van het internet. Cybercriminaliteit, zoals online oplichting, identiteitsdiefstal en datalekken, vormt een risico voor burgers, bedrijven en de overheid. Daarom willen wij investeren in betere digitale beveiliging." },
  { titel: "Glutenvrije producten", kort: "Wij vinden dat mensen meer aandacht moeten geven aan glutenvrije producten en etiketten", uitleg: "Wij vinden dat mensen met coeliakie of een glutenintolerantie veilig en betaalbaar glutenvrij voedsel moeten kunnen kopen. Glutenvrije producten zijn vaak duurder dan gewone producten, waardoor mensen met een medische noodzaak extra kosten hebben." },
  { titel: "Milieuvervuiling", kort: "Milieuvervuiling is slecht", uitleg: "Wij willen dat Nederland beter voor het milieu zorgt en de klimaatverandering actief tegengaat. Luchtvervuiling, plastic afval en vervuild water zijn slecht voor mens, dier en natuur. Daarom willen wij dat bedrijven minder schadelijke stoffen uitstoten." }
];

const FOTOS = { hero: "", meedoen: "assets/samen.jpg" };
// ====================================

const $ = id => document.getElementById(id);
const KLEUREN = ["var(--c1)", "var(--c2)", "var(--c3)", "var(--c4)", "var(--c5)"];

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
$("footer").textContent = "© " + new Date().getFullYear() + " " + PARTIJ.naam + " · WBS Project Door Xavier, Jonas (De Blobvis!), Lara, Mira, en Noam";
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
  t.querySelector("h3").textContent = leeg ? "Punt " + (i + 1) + " (nog in te vullen)" : p.titel;
  t.querySelector(".kort").textContent = p.kort || "Hier komt een korte uitleg.";
  t.querySelector(".lang").textContent = p.uitleg || "Hier komt de uitgebreide uitleg van dit punt.";
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
cta.innerHTML = `<h3>Sta jij ook voor een eerlijker land?</h3><p>Sluit je aan en help ons om dit waar te maken!(niet echt)</p><a class="btn" href="#meedoen">Word lid</a>`;
$("tiles").appendChild(cta);

$("ctaBtn").addEventListener("click", () => {
  $("msg").textContent = "Bedankt voor je steun! Samen werken we aan een eerlijker land.";
});
