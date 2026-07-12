// ════════════════════════════════════════════════════════════════
//  VIATGES MARINÉ SÁNCHEZ — DADES LLAVOR
//  Es carreguen a IndexedDB només si la base de dades és buida
//  (vegeu index.html — seedIfEmpty()). Edita aquest fitxer per
//  corregir les dades de fàbrica; les edicions fetes dins l'app
//  viuen a IndexedDB i no toquen aquest fitxer.
// ════════════════════════════════════════════════════════════════

// Números de passaport i dates de naixement NO s'inclouen aquí perquè aquest fitxer
// es publica en un repositori públic de GitHub (GitHub Pages). Omple'ls des de la
// pestanya "Viatgers" un cop oberta l'app — es desen només al navegador/dispositiu
// que facis servir, mai es pugen enlloc.
const SEED_TRAVELERS = [
  { id: 't1', firstName: 'Raimon',  lastName: 'Mariné Bellido',   birthDate: null, sex: 'M', nationality: 'Espanyola', placeOfBirth: null, passportNumber: null, passportIssueDate: null, passportExpiryDate: null, isCoreFamily: true },
  { id: 't2', firstName: 'Judit',   lastName: 'Sánchez Guerra',   birthDate: null, sex: 'F', nationality: 'Espanyola', placeOfBirth: null, passportNumber: null, passportIssueDate: null, passportExpiryDate: null, isCoreFamily: true },
  { id: 't3', firstName: 'Candela', lastName: 'Mariné Sánchez',   birthDate: null, sex: 'F', nationality: 'Espanyola', placeOfBirth: null, passportNumber: null, passportIssueDate: null, passportExpiryDate: null, isCoreFamily: true },
  { id: 't4', firstName: 'Martí',   lastName: 'Mariné Sánchez',   birthDate: null, sex: 'M', nationality: 'Espanyola', placeOfBirth: null, passportNumber: null, passportIssueDate: null, passportExpiryDate: null, isCoreFamily: true },
  // Viatgers addicionals — s'afegeixen només en viatges concrets (p.ex. Filipines amb la família Sánchez Puga)
  { id: 't5', firstName: 'Mateo',   lastName: 'Sánchez Guerra', birthDate: null, sex: 'M', nationality: 'Espanyola', placeOfBirth: null, passportNumber: null, passportIssueDate: null, passportExpiryDate: null, isCoreFamily: false },
  { id: 't6', firstName: 'Maia',    lastName: 'Sánchez Puga',   birthDate: null, sex: 'F', nationality: 'Espanyola', placeOfBirth: null, passportNumber: null, passportIssueDate: null, passportExpiryDate: null, isCoreFamily: false },
  { id: 't7', firstName: 'Guillem', lastName: 'Sánchez Puga',   birthDate: null, sex: 'M', nationality: 'Espanyola', placeOfBirth: null, passportNumber: null, passportIssueDate: null, passportExpiryDate: null, isCoreFamily: false },
];

// Els PDFs originals només existien a l'ordinador on es va crear l'app —
// adjunta'ls de nou des de cada dispositiu amb "+ Adjuntar PDF" (queden
// desats només localment, no es comparteixen ni se sincronitzen enlloc).
const FIL_FLIGHT_ATTACHMENTS = [];

const FILIPINES_TRIP = {
  id: 'filipines-2026',
  name: 'Filipines 2026',
  destination: 'Palawan · Visayas, Filipines',
  status: 'confirmat',
  isDefault: true,
  dateStart: '2026-07-28',
  dateEnd: '2026-08-12',
  currency: 'EUR',
  notes:
`CONSELLS PRÀCTICS
• Confirma habitacions twin (dos llits) i el llit supletori del nen en reservar; a l'estiu s'esgoten.
• Variant C: el trasllat Cebu–Moalboal (~3h) es fa en van privat; reserva'l amb antelació juntament amb l'excursió a Oslob.
• A Moalboal el sardine run és a la platja de Panagsama, sense barca; porta escarpins i càmera aquàtica.
• Agost és temporada de pluges (xàfecs curts a la tarda); planifica el mar al matí.
• Porta efectiu (pesos): a moltes illes els caixers escassegen.
• Sigues a Manila el dia 10 (nit prèvia al vol), tal com preveuen les tres variants.
• Regla d'or (tauró balena): no tocar, no muntar, sense flaix, 1,5 m de distància.
• A Bohol l'alimentació de taurons balena està prohibida des de febrer 2025 — Oslob és l'únic lloc amb albiraments garantits.

CANVI DE DIVISA
1 € ≈ 63 ₱ (pesos filipins). Preus consultats juliol 2026.`,
  travelerIds: ['t1', 't2', 't3', 't4', 't5', 't6', 't7'],
  familyGroups: [
    { id: 'f1', label: 'F1 · Mariné Sánchez', travelerIds: ['t1', 't2', 't3', 't4'], roomConfig: '2 habitacions dobles twin' },
    { id: 'f2', label: 'F2 · Sánchez Puga', travelerIds: ['t5', 't6', 't7'], roomConfig: '1 habitació triple (o doble + llit supletori)' },
  ],
  variants: [
    { id: 'v-a', label: 'A · Siquijor', recommended: false },
    { id: 'v-b', label: 'B · Bohol', recommended: false },
    { id: 'v-c', label: 'C · Moalboal (Cebu)', recommended: true },
  ],

  // ── ITINERARI ── variantId null = comú a totes les variants (dies 1-8)
  itinerary: [
    { day: 1, date: '2026-07-28', variantId: null, location: 'Vol', transit: 'EY114 BCN → Abu Dhabi 22:30', activity: 'Vol internacional (nit al vol)', lodging: 'Nit al vol', whereToEat: '', tips: '' },
    { day: 2, date: '2026-07-29', variantId: null, location: 'Manila', transit: 'EY446 Abu Dhabi → Manila (arr. 22:00)', activity: 'Grab NAIA → hotel', lodging: 'Manila (Belmont / Savoy, prop NAIA)', whereToEat: '', tips: 'Canviar € a pesos (₱) a l’aeroport si cal.' },
    { day: 3, date: '2026-07-30', variantId: null, location: 'Puerto Princesa', transit: 'Vol MNL → PPS ~16:30', activity: 'Trasllat a Palawan', lodging: 'Puerto Princesa (Aziza Paradise Hotel — reservat)', whereToEat: '', tips: '' },
    { day: 4, date: '2026-07-31', variantId: null, location: 'El Nido', transit: 'Van Puerto Princesa → El Nido (~5h)', activity: 'Corong-Corong Beach, posta de sol', lodging: 'El Nido (1/3) — Cadlao Resort / The Nest', whereToEat: 'Altrove (italià, pizza forn de llenya)', tips: '' },
    { day: 5, date: '2026-08-01', variantId: null, location: 'El Nido', transit: '—', activity: 'Tour A: Big/Small Lagoon, Shimizu, 7 Commandos', lodging: 'El Nido (2/3)', whereToEat: 'La Plage (francès-filipí, peix a la brasa)', tips: '' },
    { day: 6, date: '2026-08-02', variantId: null, location: 'El Nido', transit: '—', activity: 'Tour C (Helicopter Island, Matinloc, Secret Beach) o Nacpan Beach', lodging: 'El Nido (3/3)', whereToEat: 'Squidos (marisc) / Night Market Corong-Corong', tips: '' },
    { day: 7, date: '2026-08-03', variantId: null, location: 'Coron', transit: 'Ferry El Nido → Coron (~3,5-4h)', activity: 'Mont Tapyas al capvespre', lodging: 'Coron (1/3) — Coron Soleil / Sunlight Guest', whereToEat: 'Lobster House (llagosta a bon preu)', tips: 'Ferri ràpid i escènic.' },
    { day: 8, date: '2026-08-04', variantId: null, location: 'Coron', transit: '—', activity: 'Ultimate Tour: Kayangan Lake, Twin Lagoon, Barracuda Lake, CYC Beach', lodging: 'Coron (2/3)', whereToEat: 'Kawayanan Grill Station (filipí a la brasa)', tips: '' },

    // Variant A · Siquijor
    { day: 9,  date: '2026-08-05', variantId: 'v-a', location: 'Coron', transit: '—', activity: 'Illes Malcapuya/Banana o busseig als naufragis WWII', lodging: 'Coron (3/3)', whereToEat: "LevID's Kitchen (kare-kare)", tips: '' },
    { day: 10, date: '2026-08-06', variantId: 'v-a', location: 'Siquijor', transit: 'Vol Coron (USU) → Cebu (CEB) + Sunlight Air/ferry a Siquijor', activity: 'Transfer interilles', lodging: 'Siquijor (1/4) — Coco Grove Beach Resort (àncora: organitza Oslob i Apo)', whereToEat: 'Coco Grove (bufet a la platja)', tips: '' },
    { day: 11, date: '2026-08-07', variantId: 'v-a', location: 'Siquijor', transit: '—', activity: "Volta a l'illa: Cambugahay Falls, arbre balete, Paliton Beach", lodging: 'Siquijor (2/4)', whereToEat: 'Marco Polo (pizza de llenya al capvespre)', tips: '' },
    { day: 12, date: '2026-08-08', variantId: 'v-a', location: 'Siquijor', transit: 'Excursió a Oslob (via Coco Grove)', activity: 'TAURÓ BALENA a Oslob', lodging: 'Siquijor (3/4)', whereToEat: "Baha Ba' Bar (adobo + posta de sol)", tips: '~95% d’albirament. No tocar, no muntar, sense flaix.' },
    { day: 13, date: '2026-08-09', variantId: 'v-a', location: 'Siquijor', transit: 'Excursió a Apo Island', activity: 'APO ISLAND — snorkel amb tortugues', lodging: 'Siquijor (4/4)', whereToEat: 'Monkey Business Bar', tips: 'Últim vespre a Siquijor.' },
    { day: 14, date: '2026-08-10', variantId: 'v-a', location: 'Manila', transit: 'Ferry Siquijor → Dumaguete + vol a Manila', activity: 'Trasllat (nit de seguretat)', lodging: 'Nit a Manila (Belmont / Savoy)', whereToEat: '', tips: 'Cal ser a Manila avui per assegurar el vol de l’11.' },
    { day: 15, date: '2026-08-11', variantId: 'v-a', location: 'Vol', transit: 'EY441 Manila → AUH 19:05 · EY111 → BCN', activity: 'Tornada', lodging: 'Vol de tornada', whereToEat: '', tips: '' },

    // Variant B · Bohol
    { day: 9,  date: '2026-08-05', variantId: 'v-b', location: 'Panglao', transit: 'Vol Coron → Cebu + Cebu → Tagbilaran', activity: 'Alona Beach (Coron: només 2 nits en aquesta variant)', lodging: 'Panglao (1/3) — Bohol Sunside / Henann Alona', whereToEat: 'Bee Farm Restaurant (orgànic)', tips: '' },
    { day: 10, date: '2026-08-06', variantId: 'v-b', location: 'Panglao', transit: 'Illa-hopping', activity: 'BALICASAG (snorkel tortugues) + Virgin Island (sandbar) + dofins a l’alba', lodging: 'Panglao (2/3)', whereToEat: 'Isis Thai & Shakes', tips: 'Dofins a l’alba, recollida matinera.' },
    { day: 11, date: '2026-08-07', variantId: 'v-b', location: 'Panglao', transit: 'Excursió a Oslob (recollida ~05:00)', activity: 'TAURÓ BALENA des de Panglao (tornada ~15:00)', lodging: 'Panglao (3/3)', whereToEat: 'Giuseppe Pizzeria', tips: 'Alternativa: Chocolate Hills / tarsers.' },
    { day: 12, date: '2026-08-08', variantId: 'v-b', location: 'Siquijor', transit: 'Ferry OceanJet Tagbilaran → Siquijor 15:20–17:00 (~1h40)', activity: 'Arribada a Siquijor', lodging: 'Siquijor (1/2) — Coco Grove Beach Resort', whereToEat: 'Alona Beach seafood (abans d’agafar el ferri)', tips: 'Ferri directe i diari (₱880 turista / ₱1.320 business).' },
    { day: 13, date: '2026-08-09', variantId: 'v-b', location: 'Siquijor', transit: 'Excursió a Apo Island', activity: "Apo Island (snorkel tortugues) + tast de la volta a l'illa", lodging: 'Siquijor (2/2)', whereToEat: "Baha Ba' Bar", tips: '' },
    { day: 14, date: '2026-08-10', variantId: 'v-b', location: 'Manila', transit: 'Ferry Siquijor → Dumaguete + vol a Manila', activity: 'Trasllat (nit de seguretat)', lodging: 'Nit a Manila (Belmont / Savoy)', whereToEat: '', tips: 'Cal ser a Manila avui per assegurar el vol de l’11.' },
    { day: 15, date: '2026-08-11', variantId: 'v-b', location: 'Vol', transit: 'EY441 Manila → AUH 19:05 · EY111 → BCN', activity: 'Tornada', lodging: 'Vol de tornada', whereToEat: '', tips: '' },

    // Variant C · Moalboal (recomanada)
    { day: 9,  date: '2026-08-05', variantId: 'v-c', location: 'Coron', transit: '—', activity: 'Illes Malcapuya/Banana o busseig als naufragis WWII', lodging: 'Coron (3/3)', whereToEat: 'Trattoria Altrove (pizza forn de llenya)', tips: '' },
    { day: 10, date: '2026-08-06', variantId: 'v-c', location: 'Moalboal', transit: 'Vol Coron (USU) → Cebu (CEB) 1h15 + van ~3h per la costa', activity: 'Primer snorkel al sardine run de Panagsama (capvespre)', lodging: 'Moalboal (1/4) — Kasai Village Dive Resort', whereToEat: 'Lantaw (marisc amb vistes)', tips: 'Cap ferry interilles en aquesta variant.' },
    { day: 11, date: '2026-08-07', variantId: 'v-c', location: 'Moalboal', transit: 'Excursió a Oslob (~1-1,5h)', activity: 'TAURÓ BALENA + cascades de Tumalog', lodging: 'Moalboal (2/4)', whereToEat: "Ven'z Kitchen (adobo i sinigang)", tips: 'Sortida matinera; nedar amb els taurons.' },
    { day: 12, date: '2026-08-08', variantId: 'v-c', location: 'Moalboal', transit: 'Illa-hopping', activity: 'Pescador Island + sardine run + tortugues (opcional: canyoning a Kawasan Falls)', lodging: 'Moalboal (3/4)', whereToEat: 'Shaka (bols i batuts saludables)', tips: '' },
    { day: 13, date: '2026-08-09', variantId: 'v-c', location: 'Moalboal', transit: '—', activity: 'Dia lliure: snorkel des de la platja (sardines i tortugues sense barca), spa', lodging: 'Moalboal (4/4)', whereToEat: 'Chili Bar / Three Bears Café', tips: '' },
    { day: 14, date: '2026-08-10', variantId: 'v-c', location: 'Manila', transit: 'Van Moalboal → Cebu (~3h) + vol Cebu → Manila (1h35, molt freqüent)', activity: 'Trasllat (nit de seguretat)', lodging: 'Nit a Manila (Belmont / Savoy)', whereToEat: '', tips: 'Cal ser a Manila avui per assegurar el vol de l’11.' },
    { day: 15, date: '2026-08-11', variantId: 'v-c', location: 'Vol', transit: 'EY441 Manila → AUH 19:05 · EY111 → BCN', activity: 'Tornada', lodging: 'Vol de tornada', whereToEat: '', tips: '' },
  ],

  // ── VOLS I TRANSPORT ──
  // Els codis de reserva (bookingRef) reals NO s'inclouen aquí perquè aquest fitxer
  // es publica en obert: amb el nom + el localitzador, algú podria consultar o
  // modificar la reserva des del portal de la companyia. Torna'ls a introduir des
  // de la pestanya "Vols" un cop tinguis la contrasenya de xifrat configurada —
  // es sincronitzaran xifrats entre els teus dispositius.
  transportLegs: [
    { id: 'leg-ey114', type: 'flight_intl', variantId: null, code: 'EY114', route: 'Barcelona (BCN) → Abu Dhabi (AUH)', dateDep: '2026-07-28', timeDep: '22:30', dateArr: '2026-07-29', timeArr: '07:05', provider: 'Etihad Airways', pricePerPerson: 1000, priceTotal: 7000, status: 'reservat', bookingRef: '', bookingLink: '', notes: 'Anada · nit al vol. 1 canvi de data gratuït per bitllet (bitllets emesos des del 6/3/2026, viatge fins 31/3/2027).', attachments: FIL_FLIGHT_ATTACHMENTS },
    { id: 'leg-ey446', type: 'flight_intl', variantId: null, code: 'EY446', route: 'Abu Dhabi (AUH) → Manila (MNL)', dateDep: '2026-07-29', timeDep: '09:00', dateArr: '2026-07-29', timeArr: '22:00', provider: 'Etihad Airways', pricePerPerson: null, priceTotal: null, status: 'reservat', bookingRef: '', bookingLink: '', notes: 'Arribada Manila 29 jul nit.', attachments: FIL_FLIGHT_ATTACHMENTS },
    { id: 'leg-ey441', type: 'flight_intl', variantId: null, code: 'EY441', route: 'Manila (MNL) → Abu Dhabi (AUH)', dateDep: '2026-08-11', timeDep: '19:05', dateArr: '2026-08-12', timeArr: '00:35', provider: 'Etihad Airways', pricePerPerson: null, priceTotal: null, status: 'reservat', bookingRef: '', bookingLink: '', notes: 'Cal ser a Manila el dia 10 per garantir la connexió.', attachments: FIL_FLIGHT_ATTACHMENTS },
    { id: 'leg-ey111', type: 'flight_intl', variantId: null, code: 'EY111', route: 'Abu Dhabi (AUH) → Barcelona (BCN)', dateDep: '2026-08-12', timeDep: '02:30', dateArr: '2026-08-12', timeArr: '07:35', provider: 'Etihad Airways', pricePerPerson: null, priceTotal: null, status: 'reservat', bookingRef: '', bookingLink: '', notes: 'Arribada BCN 12 ago.', attachments: FIL_FLIGHT_ATTACHMENTS },

    { id: 'leg-mnl-pps', type: 'flight_domestic', variantId: null, code: '', route: 'Manila (MNL) → Puerto Princesa (PPS)', dateDep: '2026-07-30', timeDep: '~16:30', dateArr: '2026-07-30', timeArr: '', provider: 'Cebu Pacific / PAL', pricePerPerson: 55, priceTotal: 385, status: 'reservat', bookingRef: '', bookingLink: 'https://www.cebupacificair.com/', notes: 'Factura Cebu Pacific: 33.172,72 ₱ per 7 passatgers (inclou taxes).', attachments: [] },
    { id: 'leg-usu-ceb', type: 'flight_domestic', variantId: null, code: '', route: 'Coron (USU) → Cebu (CEB)', dateDep: '2026-08-06', timeDep: '', dateArr: '2026-08-06', timeArr: '', provider: 'Cebgo / PAL / Sunlight Air', pricePerPerson: 45, priceTotal: 315, status: 'opcio', bookingRef: '', bookingLink: '', notes: '1h15 de vol.', attachments: [] },
    { id: 'leg-ceb-mnl', type: 'flight_domestic', variantId: null, code: '', route: 'Cebu (CEB) → Manila (MNL)', dateDep: '2026-08-10', timeDep: '', dateArr: '2026-08-10', timeArr: '', provider: 'Diverses (~25 vols/dia)', pricePerPerson: 50, priceTotal: 350, status: 'opcio', bookingRef: '', bookingLink: '', notes: '1h35 de vol, molta freqüència.', attachments: [] },

    { id: 'leg-van-pp-elnido', type: 'van', variantId: null, code: '', route: 'Puerto Princesa → El Nido', dateDep: '2026-07-31', timeDep: '', dateArr: '2026-07-31', timeArr: '', provider: 'Van compartida', pricePerPerson: 13, priceTotal: 91, status: 'opcio', bookingRef: '', bookingLink: '', notes: '~5 hores.', attachments: [] },
    { id: 'leg-ferry-elnido-coron', type: 'ferry', variantId: null, code: '', route: 'El Nido → Coron', dateDep: '2026-08-03', timeDep: '', dateArr: '2026-08-03', timeArr: '', provider: 'Ferri ràpid', pricePerPerson: 40, priceTotal: 280, status: 'opcio', bookingRef: '', bookingLink: '', notes: '~4 hores, escènic.', attachments: [] },

    { id: 'leg-van-cebu-moalboal', type: 'van', variantId: 'v-c', code: '', route: 'Cebu → Moalboal', dateDep: '2026-08-06', timeDep: '', dateArr: '2026-08-06', timeArr: '', provider: 'Van privada', pricePerPerson: 25, priceTotal: 175, status: 'opcio', bookingRef: '', bookingLink: '', notes: '~3 hores per la costa. Reservar amb antelació junt amb l’excursió a Oslob.', attachments: [] },
    { id: 'leg-ferry-tagbilaran-siquijor', type: 'ferry', variantId: 'v-b', code: '', route: 'Tagbilaran (Bohol) → Siquijor', dateDep: '2026-08-08', timeDep: '15:20', dateArr: '2026-08-08', timeArr: '17:00', provider: 'OceanJet', pricePerPerson: null, priceTotal: null, status: 'opcio', bookingRef: '', bookingLink: '', notes: '₱880 turista / ₱1.320 business. Directe i diari.', attachments: [] },
    { id: 'leg-siquijor-manila-a', type: 'ferry', variantId: 'v-a', code: '', route: 'Siquijor → Dumaguete (ferry) + Dumaguete → Manila (vol)', dateDep: '2026-08-10', timeDep: '', dateArr: '2026-08-10', timeArr: '', provider: '', pricePerPerson: null, priceTotal: null, status: 'opcio', bookingRef: '', bookingLink: '', notes: 'Trasllat de seguretat per garantir el vol EY441 de l’11.', attachments: [] },
    { id: 'leg-siquijor-manila-b', type: 'ferry', variantId: 'v-b', code: '', route: 'Siquijor → Dumaguete (ferry) + Dumaguete → Manila (vol)', dateDep: '2026-08-10', timeDep: '', dateArr: '2026-08-10', timeArr: '', provider: '', pricePerPerson: null, priceTotal: null, status: 'opcio', bookingRef: '', bookingLink: '', notes: 'Trasllat de seguretat per garantir el vol EY441 de l’11.', attachments: [] },
  ],

  // ── ALLOTJAMENT ── reserva/planificació real (una entrada per estada)
  lodging: [
    { id: 'lg-manila-1', destination: 'Manila (arribada)', variantId: null, category: 'confort', name: 'Belmont / Savoy (prop NAIA)', pricePerNight: 110, nights: 1, checkIn: '2026-07-29', checkOut: '2026-07-30', roomConfig: 'F1: 2 hab. twin · F2: 1 hab. triple', status: 'opcio', bookingLink: 'https://www.booking.com/', cancellationPolicy: '', notes: 'Arribada EY446 22:00.', attachments: [] },
    { id: 'lg-pp', destination: 'Puerto Princesa', variantId: null, category: 'confort', name: 'Aziza Paradise Hotel', pricePerNight: 172, nights: 1, checkIn: '2026-07-30', checkOut: '2026-07-31', roomConfig: '2 dobles i 1 triple', status: 'reservat', bookingLink: 'https://www.booking.com/', cancellationPolicy: 'Cancel·lació gratuïta abans del 27 de juliol', notes: '172 € tots · inclou trasllat aeroport-hotel. Vol MNL-PPS de tarda.', attachments: [] },
    { id: 'lg-elnido', destination: 'El Nido', variantId: null, category: 'confort', name: 'The Nest / Cadlao Resort', pricePerNight: 135, nights: 3, checkIn: '2026-07-31', checkOut: '2026-08-03', roomConfig: 'F1: 2 hab. twin · F2: 1 hab. triple', status: 'opcio', bookingLink: 'https://www.booking.com/', cancellationPolicy: '', notes: 'Island hopping Tours A i C.', attachments: [] },
    { id: 'lg-coron-a', destination: 'Coron', variantId: 'v-a', category: 'confort', name: 'Coron Soleil / Sunlight Guest', pricePerNight: 110, nights: 3, checkIn: '2026-08-03', checkOut: '2026-08-06', roomConfig: 'F1: 2 hab. twin · F2: 1 hab. triple', status: 'opcio', bookingLink: 'https://www.booking.com/', cancellationPolicy: '', notes: 'Ultimate Tour + illes.', attachments: [] },
    { id: 'lg-coron-b', destination: 'Coron', variantId: 'v-b', category: 'confort', name: 'Coron Soleil / Sunlight Guest', pricePerNight: 110, nights: 2, checkIn: '2026-08-03', checkOut: '2026-08-05', roomConfig: 'F1: 2 hab. twin · F2: 1 hab. triple', status: 'opcio', bookingLink: 'https://www.booking.com/', cancellationPolicy: '', notes: 'Ultimate Tour.', attachments: [] },
    { id: 'lg-coron-c', destination: 'Coron', variantId: 'v-c', category: 'confort', name: 'Coron Soleil / TAG Resort', pricePerNight: 110, nights: 3, checkIn: '2026-08-03', checkOut: '2026-08-06', roomConfig: 'F1: 2 hab. twin · F2: 1 hab. triple', status: 'opcio', bookingLink: 'https://www.booking.com/', cancellationPolicy: '', notes: 'Ultimate Tour + illes.', attachments: [] },
    { id: 'lg-siquijor-a', destination: 'Siquijor', variantId: 'v-a', category: 'confort', name: 'Coco Grove Beach Resort', pricePerNight: 120, nights: 4, checkIn: '2026-08-06', checkOut: '2026-08-10', roomConfig: 'F1: 2 hab. twin · F2: 1 hab. triple', status: 'opcio', bookingLink: 'https://www.booking.com/', cancellationPolicy: '', notes: 'Oslob (tauró balena) + Apo Island.', attachments: [] },
    { id: 'lg-panglao-b', destination: 'Panglao (Bohol)', variantId: 'v-b', category: 'confort', name: 'Bohol Sunside / Henann Alona', pricePerNight: 90, nights: 3, checkIn: '2026-08-05', checkOut: '2026-08-08', roomConfig: 'F1: 2 hab. twin · F2: 1 hab. triple', status: 'opcio', bookingLink: 'https://www.booking.com/', cancellationPolicy: '', notes: 'Balicasag + Oslob des de Panglao.', attachments: [] },
    { id: 'lg-siquijor-b', destination: 'Siquijor', variantId: 'v-b', category: 'confort', name: 'Coco Grove Beach Resort', pricePerNight: 120, nights: 2, checkIn: '2026-08-08', checkOut: '2026-08-10', roomConfig: 'F1: 2 hab. twin · F2: 1 hab. triple', status: 'opcio', bookingLink: 'https://www.booking.com/', cancellationPolicy: '', notes: 'Ferry des de Tagbilaran + Apo Island.', attachments: [] },
    { id: 'lg-moalboal-c', destination: 'Moalboal (Cebu)', variantId: 'v-c', category: 'confort', name: 'Moalboal Beach Resort / Kasai Village', pricePerNight: 95, nights: 4, checkIn: '2026-08-06', checkOut: '2026-08-10', roomConfig: 'F1: 2 hab. twin · F2: 1 hab. triple', status: 'opcio', bookingLink: 'https://www.booking.com/', cancellationPolicy: '', notes: 'Oslob + sardine run + Pescador.', attachments: [] },
    { id: 'lg-manila-2', destination: 'Manila (tornada)', variantId: null, category: 'confort', name: 'Belmont / Savoy (prop NAIA)', pricePerNight: 110, nights: 1, checkIn: '2026-08-10', checkOut: '2026-08-11', roomConfig: 'F1: 2 hab. twin · F2: 1 hab. triple', status: 'opcio', bookingLink: 'https://www.booking.com/', cancellationPolicy: '', notes: 'Nit prèvia al vol EY441.', attachments: [] },
  ],

  // Catàleg d'opcions per comparar categories (econòmic/confort/premium) — no és la reserva real
  lodgingOptions: [
    { destination: 'El Nido', nights: 3, economic: { name: 'Spin Designer Hostel (family)', priceRange: '50–90', notes: 'Cèntric, ambient jove-familiar' }, confort: { name: 'The Nest / Cadlao Resort', priceRange: '90–160', notes: 'Prop del poble i la platja' }, premium: { name: 'Cauayan Island Resort', priceRange: '250–450', notes: 'Illa privada, snorkel a la porta' } },
    { destination: 'Coron', nights: '2–3', economic: { name: 'Coron Hilltop / Casa Alutaya', priceRange: '45–80', notes: 'Vistes, net i acollidor' }, confort: { name: 'Coron Soleil / Sunlight Guest', priceRange: '80–140', notes: 'Piscina, cèntric, familiar' }, premium: { name: 'Two Seasons Coron Island', priceRange: '200–380', notes: 'Illa privada, transfer amb llanxa' } },
    { destination: 'Siquijor', nights: 'A/B', economic: { name: "Baha Ba' / JJ's Backpackers", priceRange: '40–75', notes: 'Prop de Cambugahay' }, confort: { name: 'Villa Marmarine / Coco Grove', priceRange: '70–130', notes: 'Platja, familiar' }, premium: { name: 'Coco Grove Beach Resort', priceRange: '120–220', notes: "Àncora: organitza Oslob i Apo Island" } },
    { destination: 'Panglao / Bohol', nights: 'B', economic: { name: 'Whitehouse by the Sea / Bathala', priceRange: '50–90', notes: 'Tranquil, bona nota' }, confort: { name: 'Bohol Sunside / Henann Alona', priceRange: '90–160', notes: 'Apartaments grans, piscina' }, premium: { name: 'Amorita Resort / Bohol Shores', priceRange: '180–350', notes: 'Suites familiars, sobre Alona' } },
    { destination: 'Moalboal / Cebu', nights: 'C · 4', economic: { name: 'Marina Village / Villa Belza', priceRange: '35–70', notes: 'Senzill i cèntric' }, confort: { name: 'Moalboal Beach Resort / Blue Abyss', priceRange: '60–110', notes: 'Prop del mar, bona relació' }, premium: { name: 'Kasai Village Dive Resort', priceRange: '90–160', notes: 'Piscina, prop de Panagsama' } },
    { destination: 'Puerto Princesa', nights: 1, economic: { name: '', priceRange: '', notes: '' }, confort: { name: 'Hue Hotel / Canvas', priceRange: '70–120', notes: "Nit d'arribada a Palawan" }, premium: { name: '', priceRange: '', notes: '' } },
    { destination: 'Manila', nights: 2, economic: { name: '', priceRange: '', notes: '' }, confort: { name: 'Belmont / Savoy (NAIA)', priceRange: '90–150', notes: 'Nits del 29 jul i del 10 ago' }, premium: { name: '', priceRange: '', notes: '' } },
  ],

  // ── ACTIVITATS ──
  activities: [
    { location: 'El Nido', variantId: null, name: 'Tour A — Llacunes', description: 'Big/Small Lagoon, Shimizu, 7 Commandos', price: 30 },
    { location: 'El Nido', variantId: null, name: 'Tour C / Nacpan', description: 'Helicopter Island, Matinloc, Secret Beach — o platja de Nacpan', price: 30 },
    { location: 'Coron', variantId: null, name: 'Ultimate Tour', description: 'Kayangan Lake, Twin Lagoon, Barracuda Lake, CYC Beach', price: 30 },
    { location: 'Coron', variantId: null, name: 'Illes / naufragis WWII', description: 'Malcapuya, Banana, Bulog o busseig als naufragis', price: 25 },
    { location: 'Oslob', variantId: 'v-a', name: 'Tauró balena', description: 'Excursió d’un dia des de Siquijor (via Coco Grove)', price: 35 },
    { location: 'Oslob', variantId: 'v-b', name: 'Tauró balena', description: 'Recollida ~05:00, llanxa des de Panglao, tornada ~15:00', price: 35 },
    { location: 'Oslob', variantId: 'v-c', name: 'Tauró balena + Tumalog Falls', description: 'Excursió d’un dia des de Moalboal (~1-1,5h)', price: 35 },
    { location: 'Siquijor', variantId: 'v-a', name: 'Apo Island', description: 'Snorkel amb tortugues', price: null },
    { location: 'Siquijor', variantId: 'v-b', name: 'Apo Island', description: 'Snorkel amb tortugues + tast de la volta a l’illa', price: null },
    { location: 'Panglao', variantId: 'v-b', name: 'Balicasag + Virgin Island', description: 'Snorkel amb tortugues, sandbar, dofins a l’alba', price: null },
    { location: 'Bohol (opcional)', variantId: 'v-b', name: 'Chocolate Hills / tarsers', description: 'Alternativa terrestre a l’excursió d’Oslob', price: null },
    { location: 'Moalboal', variantId: 'v-c', name: 'Pescador + sardine run + tortugues', description: 'Illa-hopping, snorkel (platja gratis)', price: 20 },
    { location: 'Moalboal (opcional)', variantId: 'v-c', name: 'Canyoning a Kawasan Falls', description: '', price: null },
    { location: 'Comú', variantId: null, name: 'Taxes ambientals / entrades', description: 'Ecotaxes, terminal fees', price: 20 },
  ],

  // ── GASTRONOMIA ──
  restaurants: [
    { location: 'El Nido', variantId: null, name: 'Altrove', specialty: 'Italià', dish: 'Pizza forn de llenya' },
    { location: 'El Nido', variantId: null, name: 'La Plage', specialty: 'Francès-filipí', dish: 'Peix fresc a la brasa' },
    { location: 'El Nido', variantId: null, name: 'Squidos', specialty: 'Marisc', dish: 'Calamars i gambes' },
    { location: 'El Nido', variantId: null, name: 'Night Market Corong-Corong', specialty: 'Carrer', dish: 'Barbacoa i halo-halo' },
    { location: 'Coron', variantId: null, name: 'Lobster House', specialty: 'Marisc', dish: 'Llagosta a bon preu' },
    { location: 'Coron', variantId: null, name: 'Kawayanan Grill', specialty: 'Filipí a la brasa', dish: 'Sinigang de gambes' },
    { location: 'Coron', variantId: null, name: "LevID's Kitchen", specialty: 'Filipí casolà', dish: 'Kare-kare' },
    { location: 'Coron', variantId: null, name: 'Trattoria Altrove', specialty: 'Pizza', dish: 'Pizza forn de llenya' },
    { location: 'Siquijor', variantId: 'v-a', name: 'Coco Grove', specialty: 'Internacional', dish: 'Bufet a la platja' },
    { location: 'Siquijor', variantId: 'v-a', name: 'Marco Polo', specialty: 'Pizza', dish: 'Pizza de llenya al capvespre' },
    { location: 'Siquijor', variantId: 'v-b', name: "Baha Ba' Bar", specialty: 'Fusió', dish: 'Adobo + posta de sol' },
    { location: 'Siquijor', variantId: 'v-b', name: 'Monkey Business Bar', specialty: 'Bar-restaurant', dish: 'Hamburgueses i còctels' },
    { location: 'Panglao', variantId: 'v-b', name: 'Bee Farm Restaurant', specialty: 'Orgànic', dish: 'Amanida de flors + gelat' },
    { location: 'Panglao', variantId: 'v-b', name: 'Isis Thai & Shakes', specialty: 'Tailandès', dish: 'Curry verd + batuts' },
    { location: 'Panglao', variantId: 'v-b', name: 'Giuseppe Pizzeria', specialty: 'Italià', dish: 'Pizza napolitana' },
    { location: 'Panglao', variantId: 'v-b', name: 'Alona Beach seafood', specialty: 'Marisc', dish: 'Graella de peix del dia' },
    { location: 'Moalboal', variantId: 'v-c', name: 'Lantaw', specialty: 'Marisc amb vistes', dish: 'Graella de peix del dia' },
    { location: 'Moalboal', variantId: 'v-c', name: "Ven'z Kitchen", specialty: 'Filipí econòmic', dish: 'Adobo i sinigang' },
    { location: 'Moalboal', variantId: 'v-c', name: 'Shaka', specialty: 'Saludable', dish: 'Bols i batuts' },
    { location: 'Moalboal', variantId: 'v-c', name: 'Chili Bar / Three Bears', specialty: 'Bar-cafè', dish: 'Còctels i esmorzars' },
    { location: 'Arreu', variantId: null, name: 'Cuina filipina', specialty: 'Filipí', dish: 'Lechon, adobo, sinigang, halo-halo' },
  ],

  // ── PRESSUPOST ── totals per a 7 persones
  budget: {
    scenarios: [
      { id: 'economic', label: 'Econòmic' },
      { id: 'confort', label: 'Confort' },
      { id: 'premium', label: 'Premium' },
    ],
    categories: [
      { name: 'Vols internacionals Etihad (fix, ja comprats)', valuesByScenario: { economic: 7000, confort: 7000, premium: 7000 }, notes: '1.000 €/persona · 7 pax' },
      { name: 'Vols interns + equipatge (3 trams)', valuesByScenario: { economic: 1197, confort: 1197, premium: 1197 }, notes: '' },
      { name: 'Transport terrestre i ferris', valuesByScenario: { economic: 546, confort: 546, premium: 546 }, notes: '' },
      { name: 'Allotjament · 3 hab. · 13 nits', valuesByScenario: { economic: 2993, confort: 4275, premium: 6840 }, notes: '' },
      { name: 'Activitats i entrades', valuesByScenario: { economic: 1120, confort: 1330, premium: 1680 }, notes: '' },
      { name: 'Menjar i begudes (13 dies)', valuesByScenario: { economic: 2730, confort: 3731, premium: 5460 }, notes: '30 / 41 / 60 €/pers/dia' },
      { name: 'Transport local · assegurança · SIM · souvenirs', valuesByScenario: { economic: 840, confort: 1050, premium: 1400 }, notes: '' },
    ],
    imprevistosPct: 0.10,
    familyTotals: [
      { familyGroupId: 'f1', byScenario: { economic: 10638, confort: 12472, premium: 15880 } },
      { familyGroupId: 'f2', byScenario: { economic: 7431, confort: 8570, premium: 10656 } },
    ],
  },

  // ── DESPESES REALS ── seguiment de pagaments per liquidar al final (buit fins que s'hi apunti alguna cosa)
  expenses: [],

  // ── MAPA ── (font: MyMaps_Filipines_3variants_combinat.csv)
  mapWaypoints: [
    { name: 'Barcelona-El Prat (BCN)', lat: 41.2971, lng: 2.0785, variantId: null, day: 1, order: 1, category: 'Aeroport', description: 'Sortida EY114 28 jul 22:30' },
    { name: 'Manila (NAIA)', lat: 14.5086, lng: 121.0195, variantId: null, day: 2, order: 2, category: 'Ciutat/Aeroport', description: 'Arribada EY446 29 jul 22:00 · nit' },
    { name: 'Puerto Princesa', lat: 9.7392, lng: 118.7353, variantId: null, day: 3, order: 3, category: 'Ciutat', description: 'Vol MNL-PPS · nit a Palawan' },
    { name: 'El Nido (poble)', lat: 11.1955, lng: 119.3949, variantId: null, day: 4, order: 4, category: 'Base', description: "3 nits · island hopping" },
    { name: 'Big Lagoon (El Nido)', lat: 11.1897, lng: 119.3183, variantId: null, day: 5, order: 5, category: 'Excursio', description: 'Tour A: llacunes i snorkel' },
    { name: 'Nacpan Beach', lat: 11.266, lng: 119.4098, variantId: null, day: 6, order: 6, category: 'Platja', description: 'Tour C o dia de platja' },
    { name: 'Coron (poble)', lat: 11.9983, lng: 120.2043, variantId: null, day: 7, order: 7, category: 'Base', description: '2-3 nits · Mont Tapyas' },
    { name: 'Kayangan Lake (Coron)', lat: 11.9297, lng: 120.2028, variantId: null, day: 8, order: 8, category: 'Excursio', description: 'Ultimate Tour' },
    { name: 'Twin Lagoon (Coron)', lat: 11.9436, lng: 120.2069, variantId: null, day: 8, order: 9, category: 'Excursio', description: 'Ultimate Tour' },
    { name: 'Barracuda Lake (Coron)', lat: 11.952, lng: 120.2136, variantId: null, day: 9, order: 10, category: 'Excursio', description: 'Llac termal / naufragis WWII' },
    { name: 'Aeroport Busuanga (USU)', lat: 12.1214, lng: 120.0996, variantId: null, day: 9, order: 11, category: 'Aeroport', description: 'Vol Coron -> Cebu' },

    { name: 'Cebu (Mactan · CEB)', lat: 10.3075, lng: 123.979, variantId: 'v-a', day: 10, order: 12, category: 'Connexio', description: 'Escala vol cap a Siquijor' },
    { name: 'Siquijor - Coco Grove (San Juan)', lat: 9.1706, lng: 123.506, variantId: 'v-a', day: 10, order: 13, category: 'Base', description: "4 nits · organitza Oslob i Apo" },
    { name: 'Cambugahay Falls (Siquijor)', lat: 9.1747, lng: 123.6316, variantId: 'v-a', day: 11, order: 14, category: 'Excursio', description: "Volta a l'illa" },
    { name: 'Paliton Beach (Siquijor)', lat: 9.1836, lng: 123.4939, variantId: 'v-a', day: 11, order: 15, category: 'Platja', description: 'Posta de sol' },
    { name: 'Oslob - Tauro balena (Tan-awan)', lat: 9.4602, lng: 123.3806, variantId: 'v-a', day: 12, order: 16, category: 'Estrella', description: 'Nedar amb taurons balena' },
    { name: 'Apo Island', lat: 9.0733, lng: 123.2699, variantId: 'v-a', day: 13, order: 17, category: 'Estrella', description: 'Snorkel amb tortugues' },
    { name: 'Dumaguete (port/aeroport)', lat: 9.3072, lng: 123.305, variantId: 'v-a', day: 14, order: 18, category: 'Connexio', description: 'Ferry + vol a Manila' },

    { name: 'Cebu (Mactan · CEB)', lat: 10.3075, lng: 123.979, variantId: 'v-b', day: 9, order: 12, category: 'Connexio', description: 'Escala vol cap a Bohol' },
    { name: 'Tagbilaran / Panglao (Bohol)', lat: 9.6496, lng: 123.856, variantId: 'v-b', day: 9, order: 13, category: 'Connexio', description: 'Port i aeroport de Bohol' },
    { name: 'Alona Beach (Panglao)', lat: 9.5486, lng: 123.7756, variantId: 'v-b', day: 9, order: 14, category: 'Base', description: '3 nits' },
    { name: 'Balicasag Island', lat: 9.5183, lng: 123.6839, variantId: 'v-b', day: 10, order: 15, category: 'Estrella', description: 'Snorkel amb tortugues' },
    { name: 'Virgin Island (Panglao)', lat: 9.5602, lng: 123.716, variantId: 'v-b', day: 10, order: 16, category: 'Excursio', description: 'Sandbar de sorra blanca' },
    { name: 'Oslob - Tauro balena (Tan-awan)', lat: 9.4602, lng: 123.3806, variantId: 'v-b', day: 11, order: 17, category: 'Estrella', description: 'Excursio des de Panglao' },
    { name: 'Chocolate Hills (opcional)', lat: 9.928, lng: 124.173, variantId: 'v-b', day: 11, order: 18, category: 'Opcional', description: 'Alternativa terrestre' },
    { name: 'Loboc River (opcional)', lat: 9.6376, lng: 124.0308, variantId: 'v-b', day: 11, order: 19, category: 'Opcional', description: 'Creuer amb dinar' },
    { name: 'Siquijor - Coco Grove', lat: 9.1706, lng: 123.506, variantId: 'v-b', day: 12, order: 20, category: 'Base', description: 'Ferry Tagbilaran->Siquijor · 2 nits' },
    { name: 'Apo Island', lat: 9.0733, lng: 123.2699, variantId: 'v-b', day: 13, order: 21, category: 'Estrella', description: 'Snorkel amb tortugues' },
    { name: 'Dumaguete (port/aeroport)', lat: 9.3072, lng: 123.305, variantId: 'v-b', day: 14, order: 22, category: 'Connexio', description: 'Ferry + vol a Manila' },

    { name: 'Cebu (Mactan · CEB)', lat: 10.3075, lng: 123.979, variantId: 'v-c', day: 10, order: 12, category: 'Connexio', description: 'Vol Coron->Cebu + van a Moalboal' },
    { name: 'Moalboal - Panagsama Beach', lat: 9.949, lng: 123.386, variantId: 'v-c', day: 10, order: 13, category: 'Base', description: '4 nits · sardine run des de la platja' },
    { name: 'Oslob - Tauro balena (Tan-awan)', lat: 9.4602, lng: 123.3806, variantId: 'v-c', day: 11, order: 14, category: 'Estrella', description: 'Excursio des de Moalboal' },
    { name: 'Tumalog Falls (Oslob)', lat: 9.453, lng: 123.3937, variantId: 'v-c', day: 11, order: 15, category: 'Excursio', description: "Cascada prop d'Oslob" },
    { name: 'Pescador Island (Moalboal)', lat: 9.9086, lng: 123.3733, variantId: 'v-c', day: 12, order: 16, category: 'Estrella', description: 'Snorkel · sardines i tortugues' },
    { name: 'Kawasan Falls (opcional)', lat: 9.8145, lng: 123.3878, variantId: 'v-c', day: 12, order: 17, category: 'Opcional', description: 'Canyoning' },
    { name: 'Cebu (Mactan · CEB)', lat: 10.3075, lng: 123.979, variantId: 'v-c', day: 14, order: 18, category: 'Connexio', description: 'Van + vol Cebu->Manila' },

    { name: 'Manila (NAIA)', lat: 14.5086, lng: 121.0195, variantId: null, day: 15, order: 99, category: 'Aeroport', description: 'EY441 11 ago 19:05 -> EY111 -> BCN' },
  ],

  myMapsUrl: null,
};

const SEED_TRIPS = [FILIPINES_TRIP];

if (typeof window !== 'undefined') {
  window.SEED_TRAVELERS = SEED_TRAVELERS;
  window.SEED_TRIPS = SEED_TRIPS;
}
