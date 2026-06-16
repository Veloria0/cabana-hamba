// Cabana Hamba - Sprachwechsel + Bildpfade korrigieren
// Diese Datei ersetzt deine alte script.js komplett.

const T = {
  ro: {
    navGallery:"Galerie", navFacilities:"Facilități", navActivities:"Activități", navContact:"Contact",
    heroTitle:"Cabana Hamba – Sibiu",
    heroSubtitle:"Piscină încălzită • Ciubăr • Wi‑Fi gratuit • Natură și relaxare",
    whatsapp:"Rezervă pe WhatsApp",
    introTitle:"Locul ideal pentru familie și prieteni",
    introText:"Cabana Hamba oferă confort, intimitate și relaxare lângă Sibiu, cu piscină încălzită, ciubăr, șemineu, living spațios, bucătărie complet utilată și internet de mare viteză.",
    galleryTitle:"Galerie foto",
    g1:"Piscină & Cabana", g2:"Exterior cabană", g3:"Sufragerie spațioasă", g4:"Șemineu",
    g5:"Dormitoare confortabile", g6:"Bucătărie complet utilată", g7:"Ciubăr exterior", g8:"Aventuri ATV",
    facilitiesTitle:"Facilități",
    f1:"🏊 Piscină încălzită", f2:"🛁 Ciubăr încălzit", f3:"📶 Wi‑Fi gratuit și internet de mare viteză",
    f4:"🔥 Șemineu în living", f5:"🍽️ Bucătărie complet utilată", f6:"🍖 Foișor și grătar",
    f7:"🚗 Parcare gratuită", f8:"🌲 Locație liniștită lângă pădure", f9:"👨‍👩‍👧‍👦 Capacitate până la 10 persoane",
    activitiesTitle:"Activități & aventură",
    activitiesText:"Zona oferă trasee frumoase prin natură, plimbări, relaxare și aventuri cu ATV-ul în împrejurimile Hamba.",
    rulesTitle:"Check-in / Check-out", checkin:"Check-in:", checkout:"Check-out:", minStay:"Sejur minim: 2 nopți.",
    contactTitle:"Contact & rezervare", contactText:"Pentru disponibilitate și rezervări, contactează-ne direct:"
  },
  en: {
    navGallery:"Gallery", navFacilities:"Facilities", navActivities:"Activities", navContact:"Contact",
    heroTitle:"Cabana Hamba – Sibiu",
    heroSubtitle:"Heated pool • Hot tub • Free Wi‑Fi • Nature & relaxation",
    whatsapp:"Book via WhatsApp",
    introTitle:"The perfect place for family and friends",
    introText:"Cabana Hamba offers comfort, privacy and relaxation near Sibiu, with a heated pool, hot tub, fireplace, spacious living room, fully equipped kitchen and high-speed internet.",
    galleryTitle:"Photo gallery",
    g1:"Pool & Cabin", g2:"Cabin exterior", g3:"Spacious living room", g4:"Fireplace",
    g5:"Comfortable bedrooms", g6:"Fully equipped kitchen", g7:"Outdoor hot tub", g8:"ATV adventures",
    facilitiesTitle:"Facilities",
    f1:"🏊 Heated swimming pool", f2:"🛁 Heated hot tub", f3:"📶 Free Wi‑Fi and high-speed internet",
    f4:"🔥 Fireplace in the living room", f5:"🍽️ Fully equipped kitchen", f6:"🍖 Gazebo and BBQ area",
    f7:"🚗 Free parking", f8:"🌲 Quiet location near the forest", f9:"👨‍👩‍👧‍👦 Capacity up to 10 guests",
    activitiesTitle:"Activities & adventure",
    activitiesText:"The area offers beautiful nature trails, walks, relaxation and ATV adventures around Hamba.",
    rulesTitle:"Check-in / Check-out", checkin:"Check-in:", checkout:"Check-out:", minStay:"Minimum stay: 2 nights.",
    contactTitle:"Contact & booking", contactText:"For availability and bookings, contact us directly:"
  },
  de: {
    navGallery:"Galerie", navFacilities:"Ausstattung", navActivities:"Aktivitäten", navContact:"Kontakt",
    heroTitle:"Cabana Hamba – Sibiu",
    heroSubtitle:"Beheizter Pool • Ciubăr • Kostenloses WLAN • Natur & Erholung",
    whatsapp:"Über WhatsApp buchen",
    introTitle:"Der ideale Ort für Familie und Freunde",
    introText:"Cabana Hamba bietet Komfort, Privatsphäre und Erholung nahe Sibiu – mit beheiztem Pool, Ciubăr, Kamin, großem Wohnzimmer, voll ausgestatteter Küche und High-Speed-Internet.",
    galleryTitle:"Fotogalerie",
    g1:"Pool & Cabana", g2:"Außenansicht", g3:"Großes Wohnzimmer", g4:"Kamin",
    g5:"Gemütliche Schlafzimmer", g6:"Voll ausgestattete Küche", g7:"Ciubăr im Außenbereich", g8:"ATV-Abenteuer",
    facilitiesTitle:"Ausstattung",
    f1:"🏊 Beheizter Pool", f2:"🛁 Beheizter Ciubăr / Hot Tub", f3:"📶 Kostenloses WLAN und High-Speed-Internet",
    f4:"🔥 Kamin im Wohnzimmer", f5:"🍽️ Voll ausgestattete Küche", f6:"🍖 Pavillon und Grillplatz",
    f7:"🚗 Kostenlose Parkplätze", f8:"🌲 Ruhige Lage am Wald", f9:"👨‍👩‍👧‍👦 Platz für bis zu 10 Gäste",
    activitiesTitle:"Aktivitäten & Abenteuer",
    activitiesText:"Die Umgebung bietet schöne Naturwege, Spaziergänge, Erholung und ATV-Abenteuer rund um Hamba.",
    rulesTitle:"Check-in / Check-out", checkin:"Check-in:", checkout:"Check-out:", minStay:"Mindestaufenthalt: 2 Nächte.",
    contactTitle:"Kontakt & Buchung", contactText:"Für Verfügbarkeit und Buchungen kontaktieren Sie uns direkt:"
  }
};

function setLang(lang) {
  const d = T[lang] || T.ro;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (d[key]) el.textContent = d[key];
  });
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  localStorage.setItem("cabanaLang", lang);
}

function fixImages() {
  // Deine Bilder liegen im Hauptordner, nicht im Ordner /assets.
  const imageMap = {
    "assets/hero-pool.jpg": "hero-pool.jpg",
    "assets/cabana-exterior.jpg": "cabana-exterior.jpg",
    "assets/living-room.jpg": "living-room.jpg",
    "assets/fireplace.jpg": "fireplace.jpg",
    "assets/bedrooms.jpg": "bedrooms.jpg",
    "assets/kitchen.jpg": "kitchen.jpg",
    "assets/hot-tub.jpg": "hot-tub.jpg",
    "assets/atv.jpg": "atv.jpg",
    "assets/route-map.png": "route-map.png",
    "assets/route-original.jpg": "route-original.jpg"
  };

  document.querySelectorAll("img").forEach(img => {
    const current = img.getAttribute("src");
    if (imageMap[current]) {
      img.setAttribute("src", imageMap[current]);
    }
  });

  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.backgroundImage =
      "linear-gradient(#0005,#0006), url('hero-pool.jpg')";
    hero.style.backgroundPosition = "center";
    hero.style.backgroundSize = "cover";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fixImages();

  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  setLang(localStorage.getItem("cabanaLang") || "ro");
});
