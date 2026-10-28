
const PARTIJ = {
  naam: "De Beste Politieke Partij",
  kop: "PZV (Partij voor Zekerheid en Vooruitgang)",
  slogan: "Samen bouwen aan een eerlijker en veiliger Nederland.",
  intro: [
    "Wij zijn de Partij voor Zekerheid en Vooruitgang. Wij willen een Nederland waarin iedereen een eerlijke kans krijgt en waarin mensen zich geen zorgen hoeven te maken over de basisbehoeften van het leven.",
    "Wij zetten ons in voor betaalbare woningen, keuzevrijheid, digitale veiligheid, betaalbaar glutenvrij voedsel en een schoner milieu. Met praktische oplossingen willen we Nederland eerlijker, veiliger en duurzamer maken."
  ],
  voordelen: [
    "Jouw stem telt - Denk mee over plannen en ideeën die Nederland eerlijker en beter kunnen maken.",
    "Samen maken we verschil - Met meer mensen kunnen we onze ideeën verder verspreiden en onze doelen nastreven.",
    "Iedereen verdient een kans - Help mee bouwen aan een samenleving waarin iedereen eerlijk behandeld wordt."
  ]
};

const SPEERPUNTEN = [
  {
    titel: "Woningnood",
    kort: "Wij willen meer betaalbare huizen bouwen!",
    uitleg: "Wij vinden dat iedereen recht heeft op een betaalbare en goede woning. Op dit moment is het voor veel mensen, vooral jongeren en mensen met een laag inkomen, moeilijk om een huis te vinden. Daarom willen wij dat er meer betaalbare huur- en koopwoningen worden gebouwd. Ook willen we dat de overheid meer sociale huurwoningen beschikbaar maakt en dat huisjesmelkers en buitensporig hoge huren worden aangepakt. Een woning moet een basisrecht zijn en geen luxeproduct waar alleen rijke mensen toegang toe hebben."
  },
  {
    titel: "Abortus",
    kort: "Iedereen heeft recht op een eigen keuze.",
    uitleg: "Wij zijn voor het recht op abortus en vinden dat iedereen zelf moet kunnen beslissen over het eigen lichaam. Niemand mag gedwongen worden om een zwangerschap voort te zetten als diegene dat niet wil. Daarom willen wij dat abortus veilig, toegankelijk en betaalbaar blijft. Iedereen moet goede informatie en medische begeleiding kunnen krijgen, zonder veroordeling of discriminatie. Ook vinden wij seksuele voorlichting en toegang tot anticonceptie belangrijk om ongewenste zwangerschappen te voorkomen. Wij staan voor keuzevrijheid en vinden dat de overheid mensen hierin moet ondersteunen in plaats van hun keuzes te beperken."
  },
  {
    titel: "Cybersecurity",
    kort: "Iedereen moet veilig zijn online.",
    uitleg: "Wij vinden dat iedereen veilig gebruik moet kunnen maken van het internet. Cybercriminaliteit, zoals online oplichting, identiteitsdiefstal en datalekken, vormt een risico voor burgers, bedrijven en de overheid. Daarom willen wij investeren in betere digitale beveiliging en meer voorlichting over online veiligheid. Ook moeten bedrijven en overheidsinstanties zorgvuldig omgaan met persoonlijke gegevens en mensen beter beschermen tegen misbruik van hun data. Daarnaast willen wij dat iedereen, ongeacht leeftijd, inkomen of digitale vaardigheden, toegang heeft tot kennis over cybersecurity. Digitale veiligheid moet een recht zijn en niet alleen iets waar mensen met veel geld of technische kennis van kunnen profiteren."
  },
  {
    titel: "Glutenvrije producten",
    kort: "Glutenvrije producten moeten goedkoper zijn.",
    uitleg: "Wij vinden dat mensen met coeliakie of een glutenintolerantie veilig en betaalbaar glutenvrij voedsel moeten kunnen kopen. Glutenvrije producten zijn vaak duurder dan gewone producten, waardoor mensen met een medische noodzaak extra kosten hebben. Daarom willen wij dat glutenvrije basisproducten betaalbaarder worden en dat supermarkten voldoende keuze aanbieden. Ook vinden wij duidelijke etiketten en goede informatie over ingrediënten belangrijk, zodat mensen weten wat ze veilig kunnen eten. Daarnaast willen wij meer aandacht voor voedselveiligheid in restaurants, scholen en andere openbare instellingen. Iedereen moet zonder onnodige zorgen of hoge extra kosten kunnen deelnemen aan het dagelijks leven."
  },
  {
    titel: "Milieuvervuiling",
    kort: "Wij kiezen voor een schoner en gezonder Nederland.",
    uitleg: "Wij willen dat Nederland beter voor het milieu zorgt en de klimaatverandering actief tegengaat. Luchtvervuiling, plastic afval en vervuild water zijn slecht voor mens, dier en natuur. Daarom willen wij dat bedrijven minder schadelijke stoffen uitstoten, dat er meer wordt geïnvesteerd in duurzame energie en dat afval beter wordt verminderd en gerecycled. Grote vervuilers moeten meer verantwoordelijkheid nemen voor de schade die zij veroorzaken. Tegelijkertijd willen we dat duurzame keuzes betaalbaar blijven voor mensen met een laag inkomen. Ook willen we meer groen in steden, betere bescherming van natuurgebieden en goed openbaar vervoer, zodat mensen minder afhankelijk zijn van de auto. Een gezonde leefomgeving moet voor iedereen toegankelijk zijn, niet alleen voor mensen die het zich kunnen veroorloven."
  }
];

const FOTOS = {
  hero: "",
  meedoen: ""
};

const KLEUREN = [
  "var(--c1)",
  "var(--c2)",
  "var(--c3)",
  "var(--c4)",
  "var(--c5)"
];

const $ = id => document.getElementById(id);

function scene(variant = 0) {
  const mensen = [
    "#c0432f", "#d49a1f", "#2a8a8f", "#4a78b8",
    "#a8548a", "#c0432f", "#2a8a8f"
  ];

  let personen = "";

  mensen.forEach((kleur, i) => {
    const x = 65 + i * 75;
    const y = 315 + (i % 2) * 8;

    personen += `
      <circle cx="${x}" cy="${y - 38}" r="15" fill="#f1c9a5"/>
      <path d="M${x - 24} ${y + 60}
        q0 -78 24 -78 q24 0 24 78z" fill="${kleur}"/>
    `;
  });

  function turbine(x, y) {
    return `
      <g stroke="#fff" stroke-width="4" stroke-linecap="round">
        <path d="M${x} ${y} v90"/>
        <path d="M${x} ${y} l0 -34"/>
        <path d="M${x} ${y} l29 17"/>
        <path d="M${x} ${y} l-29 17"/>
      </g>
    `;
  }

  return `
    <svg viewBox="0 0 600 450"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustratie van mensen, gebouwen en windmolens">

      <rect width="600" height="450"
        fill="${variant ? "#f6d9b8" : "#f9e2c6"}"/>

      <rect y="170" width="600" height="280" fill="#fdf1de"/>

      <circle cx="${variant ? 140 : 450}" cy="105"
        r="55" fill="#e8a33a"/>

      <path d="M0 270 Q150 200 300 255 T600 235 V450 H0z"
        fill="#7fb7a2"/>

      <g fill="#35708a">
        <rect x="40" y="190" width="50" height="110"/>
        <rect x="95" y="215" width="40" height="85"/>
        <rect x="430" y="180" width="55" height="120"/>
        <rect x="490" y="205" width="45" height="95"/>
      </g>

      <g fill="#f9e2c6">
        <rect x="52" y="205" width="10" height="10"/>
        <rect x="68" y="205" width="10" height="10"/>
        <rect x="52" y="225" width="10" height="10"/>
        <rect x="443" y="195" width="10" height="10"/>
        <rect x="460" y="195" width="10" height="10"/>
        <rect x="443" y="215" width="10" height="10"/>
      </g>

      ${turbine(260, 190)}
      ${turbine(335, 205)}

      <path d="M0 330 Q200 290 400 335 T600 320 V450 H0z"
        fill="#2f6b57"/>

      ${personen}
    </svg>
  `;
}

function vul(element, url, variant, alt) {
  if (url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;
    element.replaceChildren(img);
  } else {
    element.innerHTML = scene(variant);
  }
}

function vulPagina() {
  document.title = PARTIJ.naam;

  $("logo").textContent = "★ " + PARTIJ.naam;
  $("kop").textContent = PARTIJ.kop;
  $("slogan").textContent = PARTIJ.slogan;

  $("footer").textContent =
    `© ${new Date().getFullYear()} ${PARTIJ.naam} · ` +
    "WBS Project door Xavier, Jonas, Lara, Mira en Noam";

  vul($("heroFoto"), FOTOS.hero, 0, "Illustratie van onze partij");
  vul($("meedoenFoto"), FOTOS.meedoen, 1, "Illustratie van samen meedoen");

  PARTIJ.intro.forEach(tekst => {
    const p = document.createElement("p");
    p.textContent = tekst;
    $("intro").appendChild(p);
  });

  PARTIJ.voordelen.forEach(tekst => {
    const li = document.createElement("li");
    li.textContent = tekst;
    $("voordelen").appendChild(li);
  });

  SPEERPUNTEN.forEach((punt, i) => {
    const kaart = document.createElement("article");
    kaart.className = "tile";
    kaart.style.setProperty("--c", KLEUREN[i]);

    const nummer = document.createElement("div");
    nummer.className = "nr";
    nummer.textContent = i + 1;

    const titel = document.createElement("h3");
    titel.textContent = punt.titel;

    const kort = document.createElement("p");
    kort.className = "kort";
    kort.textContent = punt.kort;

    const meer = document.createElement("div");
    meer.className = "more";

    const binnen = document.createElement("div");
    binnen.className = "more-inner";

    const uitleg = document.createElement("p");
    uitleg.className = "lang";
    uitleg.textContent = punt.uitleg;

    binnen.appendChild(uitleg);
    meer.appendChild(binnen);

    const knop = document.createElement("button");
    knop.className = "toggle";
    knop.type = "button";
    knop.textContent = "Meer lezen ▾";
    knop.setAttribute("aria-expanded", "false");

    knop.addEventListener("click", () => {
      const open = kaart.classList.toggle("open");

      knop.setAttribute("aria-expanded", String(open));
      knop.textContent = open ? "Minder lezen ▴" : "Meer lezen ▾";
    });

    kaart.append(nummer, titel, kort, meer, knop);
    $("tiles").appendChild(kaart);
  });

  const cta = document.createElement("article");
  cta.className = "tile cta";
  cta.style.setProperty("--c", "var(--accent)");

  const titel = document.createElement("h3");
  titel.textContent = "Sta jij ook voor een eerlijker land?";

  const tekst = document.createElement("p");
  tekst.textContent =
    "Samen kunnen we werken aan een betere toekomst voor iedereen.";

  const link = document.createElement("a");
  link.className = "btn";
  link.href = "#meedoen";
  link.textContent = "Doe mee";

  cta.append(titel, tekst, link);
  $("tiles").appendChild(cta);

  $("ctaBtn").addEventListener("click", () => {
    $("msg").textContent =
      "Bedankt voor je steun! Samen maken we verschil.";
  });
}

vulPagina();
