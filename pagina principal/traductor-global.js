/* ==========================================================
   TRADUCTOR GLOBAL CON BUSCADOR Y REGIONES - RUTA TROPICAL
   ========================================================== */
(function () {
  const STORAGE_KEY = "rt_idioma_seleccionado";
  const CACHE_PREFIX = "rt_trad_auto_v3_";

  const REGIONES = {
    es: "España / Latinoamérica",
    en: "United States",
    fr: "France",
    de: "Deutschland",
    it: "Italia",
    pt: "Portugal / Brasil",
    nl: "Nederland",
    ru: "Россия",
    zh: "中国 / 简体",
    ja: "日本",
    ko: "대한민국",
    ar: "العالم العربي",
    hi: "भारत",
    bn: "বাংলাদেশ",
    ur: "پاکستان",
    fa: "ایران",
    tr: "Türkiye",
    he: "ישראל",
    pl: "Polska",
    uk: "Україна",
    cs: "Česko",
    sk: "Slovensko",
    hu: "Magyarország",
    ro: "România",
    bg: "България",
    el: "Ελλάδα",
    sr: "Србија",
    hr: "Hrvatska",
    sl: "Slovenija",
    sv: "Sverige",
    no: "Norge",
    da: "Danmark",
    fi: "Suomi",
    is: "Ísland",
    et: "Eesti",
    lv: "Latvija",
    lt: "Lietuva",
    th: "ประเทศไทย",
    vi: "Việt Nam",
    id: "Indonesia",
    ms: "Malaysia",
    tl: "Pilipinas",
    sw: "Afrika Mashariki",
    ga: "Éire"
  };

  const UI_SELECTOR = {
    es: { titulo: "SELECCIONA TU IDIOMA", buscar: "Buscar idioma..." },
    en: { titulo: "SELECT YOUR LANGUAGE", buscar: "Search language..." },
    fr: { titulo: "CHOISISSEZ VOTRE LANGUE", buscar: "Rechercher une langue..." },
    de: { titulo: "SPRACHE AUSWÄHLEN", buscar: "Sprache suchen..." },
    it: { titulo: "SELEZIONA LA TUA LINGUA", buscar: "Cerca lingua..." },
    pt: { titulo: "SELECIONE SEU IDIOMA", buscar: "Buscar idioma..." },
    ru: { titulo: "ВЫБЕРИТЕ ЯЗЫК", buscar: "Поиск языка..." },
    zh: { titulo: "选择你的语言", buscar: "搜索语言..." },
    ja: { titulo: "言語を選択", buscar: "言語を検索..." },
    ko: { titulo: "언어 선택", buscar: "언어 검색..." },
    ar: { titulo: "اختر لغتك", buscar: "ابحث عن لغة..." }
  };

  const DICCIONARIO = {
    es: {
      usaIa: "Usa la IA",
      menuVuelos: "Vuelos",
      menuHoteles: "Hoteles",
      menuAutobus: "Autobús",
      planificaIa: "planifica con IA",
      planeaViajes: "planean tus viajes",
      sobreNosotros: "Sobre nosotros",
      contacto: "Contacto",
      preguntasFrecuentes: "Preguntas frecuentes",
      explorar: "explorar",
      terminos: "Términos y condiciones",
      rastreadorVuelos: "rastraedor de vuelos",
      viajes: "viajes",
      telLabel: "Teléfono:",
      correoLabel: "Correo:",
      footerDesc: "Tu agencia de confianza para descubrir el mundo al mejor precio. Compara, ahorra y vuela sin límites.",
      colEmpresa: "Empresa",
      acercaDe: "Acerca de",
      prensa: "Prensa",
      afiliados: "Afiliados",
      socios: "Socios",
      colContacto: "Contacto",
      ayudaFaq: "Ayuda / FAQ",
      hoteles: "Hoteles",
      publicidad: "Publicidad",
      colMas: "Más",
      tarifasAereas: "Tarifas aéreas",
      ofertasBajas: "Ofertas bajas",
      privacidad: "Privacidad",
      descargaApp: "Descarga la app",
      appTexto: "Lleva tus reservas y ofertas siempre contigo.",
      derechos: "© 2026 RuTa Tropical. Todos los derechos reservados.",
      aerolineas: "Aerolíneas",
      bannerAcerca: "Tu viaje empieza en Ruta Tropical.",
      introAcerca: "Desde 2015, Ruta Tropical ayuda a los viajeros a descubrir el Caribe y más allá. ¿Un buscador de viajes con sabor tropical? Nadie lo había hecho, hasta que llegamos nosotros.",
      creemosAcerca: "En qué creemos.",
      parrafosAcerca: [
        "Ruta Tropical nació de una idea sencilla: viajar debe ser fácil, claro y emocionante desde el primer clic.",
        "Creemos que planificar unas vacaciones no debería ser complicado. Por eso construimos una plataforma que reúne en un solo lugar vuelos, hoteles, alquiler de autos y paquetes, para que compares con calma y elijas lo que mejor se adapte a ti. Somos pioneros en la búsqueda de viajes enfocada en destinos tropicales, siempre pensando en quien viaja. No importa tu presupuesto, tus preferencias ni tu destino soñado: mereces ver todas las opciones y decidir con libertad.",
        "Queremos que la web sea una herramienta a tu favor. Sin trucos, sin cargos ocultos y sin sorpresas desagradables. Solo tú, tus opciones y las ganas de partir.",
        "Hoy somos una de las plataformas de viajes de más rápido crecimiento de la región. Analizamos miles de ofertas cada día y colaboramos con aerolíneas, hoteles y agencias de confianza para que cada persona planifique su aventura de forma ágil, transparente y segura. Aunque hemos crecido, nuestros valores siguen siendo los mismos desde el primer día."
      ],
      valoresAcerca: [
        ["Todas las personas merecen elegir con transparencia.", "Nuestra plataforma te permite comparar opciones, entender los costos totales y reservar con confianza. Sin tarifas ocultas. Sin sorpresas."],
        ["La magia surge cuando tienes todas las opciones.", "Ruta Tropical está diseñada para mostrarte un panorama completo de aerolíneas, hoteles, agencias de alquiler de autos y proveedores locales, para que veas todo antes de reservar."],
        ["No tenemos favoritos.", "Trabajamos con proveedores de viajes para mostrarte precios, horarios y disponibilidad de forma clara y justa. Nuestros resultados se basan en lo que mejor se ajusta a ti, no en lo que más nos conviene a nosotros."],
        ["Un mercado abierto nos beneficia a todos.", "Cuando hay variedad, ganan tanto los viajeros como los proveedores. Mantenemos un acceso equitativo a las tarifas para que cada persona encuentre su mejor opción y para fomentar un ecosistema de viajes sano y competitivo."],
        ["Viajar debe ser accesible para todo el mundo.", "Viajar debe ser fácil, sin importar de dónde ni cómo lo planifiques. Por eso trabajamos con una amplia red de proveedores y nunca dejamos de innovar. Con herramientas intuitivas y búsqueda inteligente, te ayudamos a encontrar vuelos, alojamientos, autos y paquetes que se adapten a tus necesidades."]
      ],
      nuevoChat: "Nuevo chat",
      saludoIaPrefix: "¿Cuál es tu próximo destino,",
      estasEnIaPrefix: "Estás en",
      sug1: "Busca vuelos desde MVD para diciembre",
      sug2: "Encuentra destinos económicos desde MVD",
      sug3: "Recomiéndame un destino",
      placeholderIa: "Pregunta más detalles...",
      avisoIa: "Con tecnología de la IA de RuTa Tropical. La IA puede cometer errores.",
      pillSugerencia: "Vuelos a Nueva York, NY el próximo fin de semana"
    },
    en: {
      usaIa: "Use AI",
      menuVuelos: "Flights",
      menuHoteles: "Hotels",
      menuAutobus: "Bus",
      planificaIa: "Plan with AI",
      planeaViajes: "Plan your trips",
      sobreNosotros: "About us",
      contacto: "Contact",
      preguntasFrecuentes: "FAQ",
      explorar: "Explore",
      terminos: "Terms and conditions",
      rastreadorVuelos: "Flight tracker",
      viajes: "Trips",
      telLabel: "Phone:",
      correoLabel: "Email:",
      footerDesc: "Your trusted agency to discover the world at the best price. Compare, save, and fly without limits.",
      colEmpresa: "Company",
      acercaDe: "About",
      prensa: "Press",
      afiliados: "Affiliates",
      socios: "Partners",
      colContacto: "Contact",
      ayudaFaq: "Help / FAQ",
      hoteles: "Hotels",
      publicidad: "Advertising",
      colMas: "More",
      tarifasAereas: "Airfares",
      ofertasBajas: "Low fare deals",
      privacidad: "Privacy",
      descargaApp: "Download the app",
      appTexto: "Take your bookings and deals with you everywhere.",
      derechos: "© 2026 RuTa Tropical. All rights reserved.",
      aerolineas: "Airlines",
      bannerAcerca: "Your journey starts at Ruta Tropical.",
      introAcerca: "Since 2015, Ruta Tropical has helped travelers discover the Caribbean and beyond. A travel search engine with a tropical touch? Nobody had done it until we arrived.",
      creemosAcerca: "What we believe in.",
      parrafosAcerca: [
        "Ruta Tropical was born from a simple idea: travel should be easy, clear, and exciting from the very first click.",
        "We believe planning a vacation shouldn't be complicated. That's why we built a platform that brings together flights, hotels, car rentals, and packages in one place so you can compare calmly and choose what fits you best. We are pioneers in travel search focused on tropical destinations, always putting travelers first. No matter your budget, preferences, or dream destination: you deserve to see all options and decide freely.",
        "We want the web to be a tool in your favor. No tricks, no hidden fees, and no unpleasant surprises. Just you, your options, and the desire to set off.",
        "Today we are one of the fastest-growing travel platforms in the region. We analyze thousands of deals every day and partner with trusted airlines, hotels, and agencies so everyone can plan their adventure quickly, transparently, and safely. Even as we have grown, our values remain the same from day one."
      ],
      valoresAcerca: [
        ["Everyone deserves to choose with transparency.", "Our platform lets you compare options, understand total costs, and book with confidence. No hidden fees. No surprises."],
        ["Magic happens when you have all the options.", "Ruta Tropical is designed to give you a complete view of airlines, hotels, car rental agencies, and local providers so you see everything before booking."],
        ["We play no favorites.", "We work with travel providers to show prices, schedules, and availability clearly and fairly. Our results are based on what suits you best, not what suits us most."],
        ["An open market benefits us all.", "When there is variety, both travelers and providers win. We maintain fair access to fares so everyone finds their best option and to foster a healthy, competitive travel ecosystem."],
        ["Travel should be accessible to everyone.", "Travel should be easy, no matter where or how you plan it. That's why we work with a broad network of providers and never stop innovating. With intuitive tools and smart search, we help you find flights, stays, cars, and packages tailored to your needs."]
      ],
      nuevoChat: "New chat",
      saludoIaPrefix: "What is your next destination,",
      estasEnIaPrefix: "You are in",
      sug1: "Find flights from MVD for December",
      sug2: "Find budget destinations from MVD",
      sug3: "Recommend a destination",
      placeholderIa: "Ask for more details...",
      avisoIa: "Powered by RuTa Tropical AI. AI can make mistakes.",
      pillSugerencia: "Flights to New York, NY next weekend"
    },
    fr: {
      usaIa: "Utiliser l'IA",
      menuVuelos: "Vols",
      menuHoteles: "Hôtels",
      menuAutobus: "Bus",
      planificaIa: "Planifier avec l'IA",
      planeaViajes: "Planifiez vos voyages",
      sobreNosotros: "À propos",
      contacto: "Contact",
      preguntasFrecuentes: "FAQ",
      explorar: "Explorer",
      terminos: "Conditions générales",
      rastreadorVuelos: "Suivi des vols",
      viajes: "Voyages",
      telLabel: "Téléphone :",
      correoLabel: "E-mail :",
      footerDesc: "Votre agence de confiance pour découvrir le monde au meilleur prix. Comparez, économisez et voyagez sans limites.",
      colEmpresa: "Entreprise",
      acercaDe: "À propos",
      prensa: "Presse",
      afiliados: "Affiliés",
      socios: "Partenaires",
      colContacto: "Contact",
      ayudaFaq: "Aide / FAQ",
      hoteles: "Hôtels",
      publicidad: "Publicité",
      colMas: "Plus",
      tarifasAereas: "Tarifs aériens",
      ofertasBajas: "Meilleurs tarifs",
      privacidad: "Confidentialité",
      descargaApp: "Téléchargez l'appli",
      appTexto: "Emportez vos réservations et offres partout avec vous.",
      derechos: "© 2026 RuTa Tropical. Tous droits réservés.",
      aerolineas: "Compagnies aériennes",
      bannerAcerca: "Votre voyage commence chez Ruta Tropical.",
      introAcerca: "Depuis 2015, Ruta Tropical aide les voyageurs à découvrir les Caraïbes et au-delà. Un moteur de recherche de voyages au parfum tropical ? Personne ne l’avait fait avant nous.",
      creemosAcerca: "Ce en quoi nous croyons.",
      parrafosAcerca: [
        "Ruta Tropical est née d'une idée simple : voyager doit être facile, clair et passionnant dès le premier clic.",
        "Nous pensons que planifier des vacances ne devrait pas être compliqué. C'est pourquoi nous avons créé une plateforme réunissant vols, hôtels, location de voitures et séjours en un seul endroit afin que vous compariez tranquillement et choisiez ce qui vous convient le mieux.",
        "Nous voulons que le site soit un outil à votre avantage. Sans astuces, sans frais cachés et sans mauvaises surprises. Seulement vous, vos choix et l'envie de partir.",
        "Aujourd'hui, nous sommes l'une des plateformes de voyage à plus forte croissance de la région. Nous analysons des milliers d'offres chaque jour avec des partenaires fiables pour que chacun planifie son aventure en toute simplicité."
      ],
      valoresAcerca: [
        ["Chacun mérite de choisir en toute transparence.", "Notre plateforme vous permet de comparer les options, de comprendre le coût total et de réserver en confiance."],
        ["La magie opère quand vous avez toutes les options.", "Ruta Tropical vous offre une vue complète des compagnies aériennes, hôtels, voitures et prestataires locaux."],
        ["Nous n'avons pas de favoris.", "Nous affichons prix, horaires et disponibilités de manière claire et équitable."],
        ["Un marché ouvert bénéficie à tous.", "La diversité profite aux voyageurs comme aux partenaires et favorise un écosystème sain."],
        ["Voyager doit être accessible à tous.", "Avec des outils intuitifs et une recherche intelligente, nous vous aidons à trouver vols, hébergements et séjours adaptés à vos besoins."]
      ],
      nuevoChat: "Nouveau chat",
      saludoIaPrefix: "Quelle est votre prochaine destination,",
      estasEnIaPrefix: "Vous êtes à",
      sug1: "Trouver des vols depuis MVD pour décembre",
      sug2: "Trouver des destinations économiques depuis MVD",
      sug3: "Recommandez-moi une destination",
      placeholderIa: "Posez plus de détails...",
      avisoIa: "Propulsé par l'IA de RuTa Tropical. L'IA peut faire des erreurs.",
      pillSugerencia: "Vols vers New York, NY le week-end prochain"
    },
    de: {
      usaIa: "KI nutzen",
      menuVuelos: "Flüge",
      menuHoteles: "Hotels",
      menuAutobus: "Bus",
      planificaIa: "Mit KI planen",
      planeaViajes: "Reisen planen",
      sobreNosotros: "Über uns",
      contacto: "Kontakt",
      preguntasFrecuentes: "FAQ",
      explorar: "Entdecken",
      terminos: "Allgemeine Geschäftsbedingungen",
      rastreadorVuelos: "Flugtracker",
      viajes: "Reisen",
      telLabel: "Telefon:",
      correoLabel: "E-Mail:",
      footerDesc: "Ihr zuverlässiger Partner für Reisen zum besten Preis. Vergleichen, sparen und grenzenlos fliegen.",
      colEmpresa: "Unternehmen",
      acercaDe: "Über uns",
      prensa: "Presse",
      afiliados: "Partnerprogramm",
      socios: "Partner",
      colContacto: "Kontakt",
      ayudaFaq: "Hilfe / FAQ",
      hoteles: "Hotels",
      publicidad: "Werbung",
      colMas: "Mehr",
      tarifasAereas: "Flugpreise",
      ofertasBajas: "Günstige Angebote",
      privacidad: "Datenschutz",
      descargaApp: "App herunterladen",
      appTexto: "Buchungen und Angebote immer dabei.",
      derechos: "© 2026 RuTa Tropical. Alle Rechte vorbehalten.",
      aerolineas: "Fluggesellschaften",
      bannerAcerca: "Deine Reise beginnt bei Ruta Tropical.",
      introAcerca: "Seit 2015 hilft Ruta Tropical Reisenden dabei, die Karibik und darüber hinaus zu entdecken.",
      creemosAcerca: "Woran wir glauben.",
      parrafosAcerca: [
        "Ruta Tropical entstand aus einer einfachen Idee: Reisen soll vom ersten Klick an einfach, klar und aufregend sein.",
        "Urlaubsplanung sollte nicht kompliziert sein. Deshalb vereinen wir Flüge, Hotels, Mietwagen und Pakete an einem Ort.",
        "Keine versteckten Gebühren und keine unangenehmen Überraschungen – nur du und deine Reisepläne.",
        "Heute gehören wir zu den am schnellsten wachsenden Reiseplattformen der Region und arbeiten täglich mit zuverlässigen Partnern zusammen."
      ],
      valoresAcerca: [
        ["Jeder verdient volle Transparenz.", "Vergleiche Optionen, verstehe Gesamtkosten und buche mit Vertrauen."],
        ["Magie entsteht bei voller Auswahl.", "Alle Anbieter, Flüge und Unterkünfte übersichtlich vor der Buchung."],
        ["Keine Favoriten.", "Klare und faire Darstellung von Preisen, Zeiten und Verfügbarkeit."],
        ["Ein offener Markt hilft allen.", "Vielfalt stärkt Reisende und Anbieter gleichermaßen."],
        ["Reisen für alle zugänglich.", "Intuitive Werkzeuge und smarte Suche für deine Wunschreise."]
      ],
      nuevoChat: "Neuer Chat",
      saludoIaPrefix: "Was ist dein nächstes Ziel,",
      estasEnIaPrefix: "Du bist in",
      sug1: "Flüge ab MVD für Dezember suchen",
      sug2: "Günstige Ziele ab MVD finden",
      sug3: "Empfiehl mir ein Reiseziel",
      placeholderIa: "Stelle weitere Fragen...",
      avisoIa: "Unterstützt von RuTa Tropical KI. KI kann Fehler machen.",
      pillSugerencia: "Flüge nach New York, NY nächstes Wochenende"
    },
    it: {
      usaIa: "Usa l'IA",
      menuVuelos: "Voli",
      menuHoteles: "Hotel",
      menuAutobus: "Autobus",
      planificaIa: "Pianifica con l'IA",
      planeaViajes: "Pianifica i tuoi viaggi",
      sobreNosotros: "Chi siamo",
      contacto: "Contatti",
      preguntasFrecuentes: "FAQ",
      explorar: "Esplora",
      terminos: "Termini e condizioni",
      rastreadorVuelos: "Tracker voli",
      viajes: "Viaggi",
      telLabel: "Telefono:",
      correoLabel: "Email:",
      footerDesc: "La tua agenzia di fiducia per scoprire il mondo al miglior prezzo. Confronta, risparmia e vola senza limiti.",
      colEmpresa: "Azienda",
      acercaDe: "Chi siamo",
      prensa: "Stampa",
      afiliados: "Affiliati",
      socios: "Partner",
      colContacto: "Contatti",
      ayudaFaq: "Aiuto / FAQ",
      hoteles: "Hotel",
      publicidad: "Pubblicità",
      colMas: "Altro",
      tarifasAereas: "Tariffe aeree",
      ofertasBajas: "Offerte convenienti",
      privacidad: "Privacy",
      descargaApp: "Scarica l'app",
      appTexto: "Porta prenotazioni e offerte sempre con te.",
      derechos: "© 2026 RuTa Tropical. Tutti i diritti riservati.",
      aerolineas: "Compagnie aeree",
      bannerAcerca: "Il tuo viaggio inizia su Ruta Tropical.",
      introAcerca: "Dal 2015 Ruta Tropical aiuta i viaggiatori a scoprire i Caraibi e oltre.",
      creemosAcerca: "In cosa crediamo.",
      parrafosAcerca: [
        "Ruta Tropical è nata da un'idea semplice: viaggiare deve essere facile, chiaro ed emozionante fin dal primo clic.",
        "Pianificare una vacanza non dovrebbe essere complicato: riuniamo voli, hotel, auto e pacchetti in un solo posto.",
        "Niente trucchi, costi nascosti o brutte sorprese. Solo tu e la voglia di partire.",
        "Oggi siamo una delle piattaforme di viaggio in più rapida crescita della regione con partner affidabili."
      ],
      valoresAcerca: [
        ["Tutti meritano di scegliere con trasparenza.", "Confronta opzioni, costi totali e prenota senza sorprese."],
        ["La magia nasce con tutte le opzioni.", "Panoramica completa di voli, hotel, auto e fornitori locali."],
        ["Nessun favorito.", "Prezzi, orari e disponibilità mostrati in modo chiaro ed equo."],
        ["Un mercato aperto conviene a tutti.", "La varietà premia viaggiatori e fornitori."],
        ["Viaggi accessibili a tutti.", "Strumenti intuitivi e ricerca intelligente per ogni esigenza."]
      ],
      nuevoChat: "Nuova chat",
      saludoIaPrefix: "Qual è la tua prossima destinazione,",
      estasEnIaPrefix: "Ti trovi a",
      sug1: "Cerca voli da MVD per dicembre",
      sug2: "Trova destinazioni economiche da MVD",
      sug3: "Consigliami una destinazione",
      placeholderIa: "Chiedi maggiori dettagli...",
      avisoIa: "Basato sull'IA di RuTa Tropical. L'IA può commettere errori.",
      pillSugerencia: "Voli per New York, NY il prossimo fine settimana"
    },
    pt: {
      usaIa: "Usar IA",
      menuVuelos: "Voos",
      menuHoteles: "Hotéis",
      menuAutobus: "Ônibus",
      planificaIa: "Planejar com IA",
      planeaViajes: "Planeje suas viagens",
      sobreNosotros: "Sobre nós",
      contacto: "Contato",
      preguntasFrecuentes: "Perguntas frequentes",
      explorar: "Explorar",
      terminos: "Termos e condições",
      rastreadorVuelos: "Rastreador de voos",
      viajes: "Viagens",
      telLabel: "Telefone:",
      correoLabel: "E-mail:",
      footerDesc: "Sua agência de confiança para descobrir o mundo pelo melhor preço. Compare, economize e voe sem limites.",
      colEmpresa: "Empresa",
      acercaDe: "Sobre",
      prensa: "Imprensa",
      afiliados: "Afiliados",
      socios: "Parceiros",
      colContacto: "Contato",
      ayudaFaq: "Ajuda / FAQ",
      hoteles: "Hotéis",
      publicidad: "Publicidade",
      colMas: "Mais",
      tarifasAereas: "Tarifas aéreas",
      ofertasBajas: "Ofertas econômicas",
      privacidad: "Privacidade",
      descargaApp: "Baixe o app",
      appTexto: "Leve suas reservas e ofertas sempre com você.",
      derechos: "© 2026 RuTa Tropical. Todos os direitos reservados.",
      aerolineas: "Companhias aéreas",
      bannerAcerca: "Sua viagem começa na Ruta Tropical.",
      introAcerca: "Desde 2015, a Ruta Tropical ajuda viajantes a descobrir o Caribe e além.",
      creemosAcerca: "No que acreditamos.",
      parrafosAcerca: [
        "A Ruta Tropical nasceu de uma ideia simples: viajar deve ser fácil, claro e emocionante desde o primeiro clique.",
        "Planejar férias não precisa ser complicado: reunimos voos, hotéis, aluguel de carros e pacotes em um só lugar.",
        "Sem taxas ocultas ou surpresas desagradáveis. Apenas você e a vontade de partir.",
        "Hoje somos uma das plataformas de viagem que mais crescem na região com parceiros confiáveis."
      ],
      valoresAcerca: [
        ["Todos merecem escolher com transparência.", "Compare opções, entenda os custos totais e reserve com confiança."],
        ["A mágica surge com todas as opções.", "Visão completa de companhias aéreas, hotéis, carros e fornecedores locais."],
        ["Não temos favoritos.", "Preços, horários e disponibilidade exibidos de forma clara e justa."],
        ["Um mercado aberto beneficia a todos.", "Variedade fortalece viajantes e parceiros."],
        ["Viajar deve ser acessível a todos.", "Ferramentas intuitivas e busca inteligente para cada viagem."]
      ],
      nuevoChat: "Novo chat",
      saludoIaPrefix: "Qual é o seu próximo destino,",
      estasEnIaPrefix: "Você está em",
      sug1: "Buscar voos de MVD para dezembro",
      sug2: "Encontrar destinos econômicos de MVD",
      sug3: "Recomende um destino",
      placeholderIa: "Pergunte mais detalhes...",
      avisoIa: "Com tecnologia da IA da RuTa Tropical. A IA pode cometer erros.",
      pillSugerencia: "Voos para Nova York, NY no próximo fim de semana"
    },
    ja: {
      usaIa: "AIを使う",
      menuVuelos: "フライト",
      menuHoteles: "ホテル",
      menuAutobus: "バス",
      planificaIa: "AIで計画する",
      planeaViajes: "旅行を計画",
      sobreNosotros: "会社概要",
      contacto: "お問い合わせ",
      preguntasFrecuentes: "よくある質問",
      explorar: "探索",
      terminos: "利用規約",
      rastreadorVuelos: "フライト追跡",
      viajes: "旅行",
      telLabel: "電話：",
      correoLabel: "メール：",
      footerDesc: "ベストプライスで世界を巡る信頼のトラベルパートナー。比較して、お得に、自由に空の旅へ。",
      colEmpresa: "会社情報",
      acercaDe: "概要",
      prensa: "プレス",
      afiliados: "アフィリエイト",
      socios: "パートナー",
      colContacto: "お問い合わせ",
      ayudaFaq: "ヘルプ / FAQ",
      hoteles: "ホテル",
      publicidad: "広告掲載",
      colMas: "その他",
      tarifasAereas: "航空運賃",
      ofertasBajas: "格安航空券",
      privacidad: "プライバシー",
      descargaApp: "アプリをダウンロード",
      appTexto: "予約とお得な情報をいつでも手元に。",
      derechos: "© 2026 RuTa Tropical. All rights reserved.",
      aerolineas: "航空会社",
      bannerAcerca: "あなたの旅は Ruta Tropical から始まります。",
      introAcerca: "2015年以来、Ruta Tropical はカリブ海や世界各地の旅をサポートしてきました。",
      creemosAcerca: "私たちの信念。",
      parrafosAcerca: [
        "Ruta Tropical はシンプルな思いから生まれました。旅は最初のクリックから簡単でわかりやすく、ワクワクするものであるべきです。",
        "休暇の計画は複雑であるべきではありません。フライト、ホテル、レンタカー、パッケージをまとめて比較し、自分に合うものを選べる場所を作りました。",
        "隠れた手数料や不意打ちのない、あなたの味方になるウェブを目指しています。",
        "私たちは地域の急成長トラベルプラットフォームの一つとして、毎日多くのオファーを分析し、安全でスムーズな旅をサポートしています。"
      ],
      valoresAcerca: [
        ["すべての人が透明性をもって選べるべきです。", "総額を理解し、隠れた料金なしで安心して予約できます。"],
        ["すべての選択肢があるとき魔法が生まれます。", "航空会社、ホテル、レンタカー、地元パートナーの情報をまとめて確認できます。"],
        ["偏りのない公平な比較。", "価格や空席状況を明確に表示し、あなたに合う選択肢を提案します。"],
        ["開かれた市場はみんなに利益をもたらします。", "多様な選択肢が旅行者とパートナー双方の成長につながります。"],
        ["旅はすべての人に開かれています。", "直感的なツールとスマート検索で、ニーズに合った旅を見つけられます。"]
      ],
      nuevoChat: "新しいチャット",
      saludoIaPrefix: "次の目的地はどこですか、",
      estasEnIaPrefix: "現在地：",
      sug1: "12月発 MVD からのフライトを検索",
      sug2: "MVD からの格安目的地を探す",
      sug3: "おすすめの目的地を教えて",
      placeholderIa: "さらに詳しく質問する...",
      avisoIa: "RuTa Tropical AI 搭載。AI は誤りを犯す可能性があります。",
      pillSugerencia: "来週末のニューヨーク（NY）行きフライト"
    },
    zh: {
      usaIa: "使用 AI",
      menuVuelos: "航班",
      menuHoteles: "酒店",
      menuAutobus: "巴士",
      planificaIa: "使用 AI 规划",
      planeaViajes: "规划行程",
      sobreNosotros: "关于我们",
      contacto: "联系我们",
      preguntasFrecuentes: "常见问题",
      explorar: "探索",
      terminos: "条款与条件",
      rastreadorVuelos: "航班追踪",
      viajes: "行程",
      telLabel: "电话：",
      correoLabel: "邮箱：",
      footerDesc: "以最优价格探索世界的可靠旅行伙伴。轻松比价、省钱并自由出行。",
      colEmpresa: "公司",
      acercaDe: "关于",
      prensa: "媒体",
      afiliados: "联盟",
      socios: "合作伙伴",
      colContacto: "联系",
      ayudaFaq: "帮助 / FAQ",
      hoteles: "酒店",
      publicidad: "广告合作",
      colMas: "更多",
      tarifasAereas: "机票价格",
      ofertasBajas: "特价优惠",
      privacidad: "隐私政策",
      descargaApp: "下载应用",
      appTexto: "随时随地查看预订与优惠。",
      derechos: "© 2026 RuTa Tropical. 保留所有权利。",
      aerolineas: "航空公司",
      bannerAcerca: "你的旅程从 Ruta Tropical 开始。",
      introAcerca: "自 2015 年以来，Ruta Tropical 一直帮助旅行者探索加勒比海及更广阔的世界。",
      creemosAcerca: "我们的信念。",
      parrafosAcerca: [
        "Ruta Tropical 源于一个简单的理念：旅行应该从第一次点击起就轻松、清晰且充满惊喜。",
        "度假规划不应复杂。我们将机票、酒店、租车和套餐整合在一处，让你安心比较与选择。",
        "无隐藏费用，无意外惊喜，只为你提供更好用的旅行工具。",
        "作为地区增长最快的旅行平台之一，我们每天分析海量优惠并与可靠伙伴合作。"
      ],
      valoresAcerca: [
        ["每个人都值得透明的选择。", "清楚了解总价，安心预订，绝无隐藏费用。"],
        ["拥有全部选择时奇迹发生。", "全面呈现航司、酒店、租车与本地服务商信息。"],
        ["不偏袒任何一方。", "清晰公平地展示价格、时刻与余票。"],
        ["开放市场让所有人受益。", "丰富选择助力旅行者与合作伙伴共同成长。"],
        ["让旅行触手可及。", "通过直观工具与智能搜索找到合适方案。"]
      ],
      nuevoChat: "新聊天",
      saludoIaPrefix: "你的下一个目的地是哪里，",
      estasEnIaPrefix: "你当前在",
      sug1: "查找十二月从 MVD 出发的航班",
      sug2: "查找从 MVD 出发的经济型目的地",
      sug3: "给我推荐一个目的地",
      placeholderIa: "询问更多详情...",
      avisoIa: "由 RuTa Tropical AI 提供支持。AI 可能会出错。",
      pillSugerencia: "下周末飞往纽约 NY 的航班"
    },
    ru: {
      usaIa: "Использовать ИИ",
      menuVuelos: "Рейсы",
      menuHoteles: "Отели",
      menuAutobus: "Автобус",
      planificaIa: "Планировать с ИИ",
      planeaViajes: "Планируйте поездки",
      sobreNosotros: "О нас",
      contacto: "Контакты",
      preguntasFrecuentes: "Частые вопросы",
      explorar: "Обзор",
      terminos: "Условия использования",
      rastreadorVuelos: "Трекер рейсов",
      viajes: "Поездки",
      telLabel: "Телефон:",
      correoLabel: "Почта:",
      footerDesc: "Ваш надёжный партнёр для путешествий по лучшим ценам. Сравнивайте, экономьте и летайте свободно.",
      colEmpresa: "Компания",
      acercaDe: "О компании",
      prensa: "Пресса",
      afiliados: "Партнёрская сеть",
      socios: "Партнёры",
      colContacto: "Контакты",
      ayudaFaq: "Помощь / FAQ",
      hoteles: "Отели",
      publicidad: "Реклама",
      colMas: "Ещё",
      tarifasAereas: "Авиатарифы",
      ofertasBajas: "Выгодные цены",
      privacidad: "Конфиденциальность",
      descargaApp: "Скачать приложение",
      appTexto: "Бронирования и акции всегда под рукой.",
      derechos: "© 2026 RuTa Tropical. Все права защищены.",
      aerolineas: "Авиакомпании",
      bannerAcerca: "Ваше путешествие начинается с Ruta Tropical.",
      introAcerca: "С 2015 года Ruta Tropical помогает путешественникам открывать Карибы и весь мир.",
      creemosAcerca: "Во что мы верим.",
      parrafosAcerca: [
        "Ruta Tropical появилась с простой идеей: путешествия должны быть простыми, понятными и вдохновляющими с первого клика.",
        "Планировать отпуск не должно быть сложно: рейсы, отели, авто и пакеты собраны в одном месте.",
        "Никаких скрытых сборов и неприятных сюрпризов — только удобный поиск.",
        "Сегодня мы — одна из самых быстрорастущих платформ путешествий в регионе."
      ],
      valoresAcerca: [
        ["Каждый заслуживает прозрачного выбора.", "Сравнивайте варианты, видьте итоговую цену и бронируйте уверенно."],
        ["Выбор открывает возможности.", "Полная картина по авиакомпаниям, отелям и сервисам до бронирования."],
        ["Никаких фаворитов.", "Честные и понятные цены, расписание и наличие мест."],
        ["Открытый рынок выгоден всем.", "Разнообразие помогает и путешественникам, и партнёрам."],
        ["Путешествия доступны каждому.", "Удобные инструменты и умный поиск под ваши задачи."]
      ],
      nuevoChat: "Новый чат",
      saludoIaPrefix: "Какое твоё следующее направление,",
      estasEnIaPrefix: "Вы находитесь в",
      sug1: "Найти рейсы из MVD на декабрь",
      sug2: "Найти бюджетные направления из MVD",
      sug3: "Посоветуй направление",
      placeholderIa: "Задайте уточняющий вопрос...",
      avisoIa: "На базе ИИ RuTa Tropical. ИИ может допускать ошибки.",
      pillSugerencia: "Рейсы в Нью-Йорк, NY в следующие выходные"
    },
    ar: {
      usaIa: "استخدم الذكاء الاصطناعي",
      menuVuelos: "الرحلات",
      menuHoteles: "الفنادق",
      menuAutobus: "الحافلات",
      planificaIa: "خطط بالذكاء الاصطناعي",
      planeaViajes: "خطط لرحلاتك",
      sobreNosotros: "من نحن",
      contacto: "اتصل بنا",
      preguntasFrecuentes: "الأسئلة الشائعة",
      explorar: "استكشف",
      terminos: "الشروط والأحكام",
      rastreadorVuelos: "متتبع الرحلات",
      viajes: "الرحلات",
      telLabel: "الهاتف:",
      correoLabel: "البريد الإلكتروني:",
      footerDesc: "وكالتك الموثوقة لاكتشاف العالم بأفضل الأسعار. قارن ووفّر وسافر بلا حدود.",
      colEmpresa: "الشركة",
      acercaDe: "من نحن",
      prensa: "الصحافة",
      afiliados: "الشركاء التابعون",
      socios: "الشركاء",
      colContacto: "التواصل",
      ayudaFaq: "المساعدة / الأسئلة الشائعة",
      hoteles: "الفنادق",
      publicidad: "الإعلان",
      colMas: "المزيد",
      tarifasAereas: "أسعار الطيران",
      ofertasBajas: "عروض مخفضة",
      privacidad: "الخصوصية",
      descargaApp: "حمّل التطبيق",
      appTexto: "احتفظ بحجوزاتك وعروضك معك دائمًا.",
      derechos: "© 2026 RuTa Tropical. جميع الحقوق محفوظة.",
      aerolineas: "شركات الطيران",
      bannerAcerca: "رحلتك تبدأ في Ruta Tropical.",
      introAcerca: "منذ عام 2015 تساعد Ruta Tropical المسافرين على اكتشاف الكاريبي وما وراءه.",
      creemosAcerca: "ما نؤمن به.",
      parrafosAcerca: [
        "وُلدت Ruta Tropical من فكرة بسيطة: السفر يجب أن يكون سهلًا وواضحًا وممتعًا من النقرة الأولى.",
        "تخطيط الإجازة لا يجب أن يكون معقدًا؛ نجمع الرحلات والفنادق والسيارات والباقات في مكان واحد.",
        "بدون رسوم خفية أو مفاجآت غير متوقعة، فقط خياراتك الواضحة.",
        "نحن اليوم من أسرع منصات السفر نموًا في المنطقة مع شركاء موثوقين."
      ],
      valoresAcerca: [
        ["الجميع يستحق الاختيار بشفافية.", "قارن الخيارات واعرف التكلفة الإجمالية واحجز بثقة."],
        ["الجمال يظهر مع تعدد الخيارات.", "رؤية شاملة للرحلات والفنادق ومقدمي الخدمات قبل الحجز."],
        ["لا نحابي أي طرف.", "عرض واضح وعادل للأسعار والمواعيد والتوافر."],
        ["السوق المفتوح يفيد الجميع.", "التنوع يدعم المسافرين والشركاء معًا."],
        ["السفر متاح للجميع.", "أدوات سهلة وبحث ذكي يناسب احتياجاتك."]
      ],
      nuevoChat: "دردشة جديدة",
      saludoIaPrefix: "ما وجهتك القادمة،",
      estasEnIaPrefix: "أنت في",
      sug1: "ابحث عن رحلات من MVD لشهر ديسمبر",
      sug2: "اعثر على وجهات اقتصادية من MVD",
      sug3: "رشّح لي وجهة",
      placeholderIa: "اسأل عن مزيد من التفاصيل...",
      avisoIa: "مدعوم بذكاء RuTa Tropical الاصطناعي. قد يرتكب الذكاء الاصطناعي أخطاء.",
      pillSugerencia: "رحلات إلى نيويورك، NY عطلة نهاية الأسبوع القادمة"
    }
  };

  function normalizarCodigoApi(cod) {
    const mapa = {
      tl: "fil",
      he: "iw"
    };
    return mapa[cod] || cod;
  }

  function obtenerCacheIdioma(cod) {
    try {
      const raw = localStorage.getItem(CACHE_PREFIX + cod);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  function guardarCacheIdioma(cod, dictTraducido) {
    try {
      localStorage.setItem(CACHE_PREFIX + cod, JSON.stringify(dictTraducido));
    } catch (_) {}
  }

  async function traducirConGoogle(texto, langTarget) {
    const target = normalizarCodigoApi(langTarget);
    const url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=" +
      encodeURIComponent(target) +
      "&dt=t&q=" +
      encodeURIComponent(texto);

    try {
      const resp = await fetch(url);
      if (!resp.ok) return null;
      const data = await resp.json();
      if (!Array.isArray(data) || !Array.isArray(data[0])) return null;
      const unido = data[0]
        .map((segmento) => (Array.isArray(segmento) ? segmento[0] : ""))
        .join("")
        .trim();
      return unido || null;
    } catch (_) {
      return null;
    }
  }

  async function traducirConMyMemory(texto, langTarget) {
    const url =
      "https://api.mymemory.translated.net/get?q=" +
      encodeURIComponent(texto) +
      "&langpair=es|" +
      encodeURIComponent(langTarget);

    try {
      const resp = await fetch(url);
      if (!resp.ok) return null;
      const data = await resp.json();
      const traducido =
        data && data.responseData && data.responseData.translatedText;
      if (
        !traducido ||
        /MYMEMORY WARNING|QUERY LENGTH LIMIT|INVALID LANGUAGE/i.test(traducido)
      ) {
        return null;
      }
      return traducido.trim();
    } catch (_) {
      return null;
    }
  }

  async function traducirTextoConApi(texto, langTarget) {
    if (!texto || typeof texto !== "string") return texto;
    const googleRes = await traducirConGoogle(texto, langTarget);
    if (googleRes) return googleRes;
    const mmRes = await traducirConMyMemory(texto, langTarget);
    if (mmRes) return mmRes;
    return texto;
  }

  async function traducirDiccionarioDinamico(cod) {
    const cache = obtenerCacheIdioma(cod);
    if (cache) return cache;

    const fuente = JSON.parse(JSON.stringify(DICCIONARIO.es));
    const clavesSimples = Object.keys(fuente).filter(
      (k) => typeof fuente[k] === "string"
    );

    const tamLote = 6;
    for (let i = 0; i < clavesSimples.length; i += tamLote) {
      const lote = clavesSimples.slice(i, i + tamLote);
      await Promise.all(
        lote.map(async (clave) => {
          fuente[clave] = await traducirTextoConApi(fuente[clave], cod);
        })
      );
    }

    if (Array.isArray(fuente.parrafosAcerca)) {
      for (let i = 0; i < fuente.parrafosAcerca.length; i++) {
        fuente.parrafosAcerca[i] = await traducirTextoConApi(
          fuente.parrafosAcerca[i],
          cod
        );
      }
    }

    if (Array.isArray(fuente.valoresAcerca)) {
      for (let i = 0; i < fuente.valoresAcerca.length; i++) {
        const par = fuente.valoresAcerca[i];
        if (!Array.isArray(par)) continue;
        const [t0, t1] = await Promise.all([
          traducirTextoConApi(par[0], cod),
          traducirTextoConApi(par[1], cod)
        ]);
        par[0] = t0;
        par[1] = t1;
      }
    }

    const tieneTraduccionesReales =
      fuente.menuVuelos !== DICCIONARIO.es.menuVuelos ||
      fuente.footerDesc !== DICCIONARIO.es.footerDesc;

    if (tieneTraduccionesReales) {
      guardarCacheIdioma(cod, fuente);
    }
    return fuente;
  }

  function prepararListaIdioma() {
    const lista = document.getElementById("idioma-lista");
    if (!lista) return;

    if (!lista.dataset.panelPreparado) {
      lista.dataset.panelPreparado = "1";

      const encabezado = document.createElement("div");
      encabezado.className = "idioma__encabezado";
      encabezado.textContent = "SELECCIONA TU IDIOMA";

      const cajaBuscar = document.createElement("div");
      cajaBuscar.className = "idioma__buscar-wrap";
      cajaBuscar.innerHTML =
        `<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>` +
        `<input type="search" class="idioma__buscar" id="idiomaBuscarInput" placeholder="Buscar idioma..." autocomplete="off">`;

      const contenedorItems = document.createElement("div");
      contenedorItems.className = "idioma__items-scroll";
      contenedorItems.id = "idiomaItemsScroll";

      while (lista.firstChild) {
        contenedorItems.appendChild(lista.firstChild);
      }

      lista.appendChild(encabezado);
      lista.appendChild(cajaBuscar);
      lista.appendChild(contenedorItems);

      const inputBuscar = cajaBuscar.querySelector("#idiomaBuscarInput");
      inputBuscar.addEventListener("click", (e) => e.stopPropagation());
      inputBuscar.addEventListener("input", () => {
        const q = inputBuscar.value.trim().toLowerCase();
        contenedorItems.querySelectorAll("li[data-codigo]").forEach((li) => {
          const texto = li.textContent.toLowerCase();
          li.style.display = texto.includes(q) ? "" : "none";
        });
      });
    }

    const scrollCont = document.getElementById("idiomaItemsScroll") || lista;
    scrollCont.querySelectorAll("li[data-codigo]").forEach((li) => {
      if (li.dataset.formatoListo === "1") return;
      li.dataset.formatoListo = "1";

      const cod = (li.dataset.codigo || "").toLowerCase();
      const img = li.querySelector("img");
      const primerSpan = li.querySelector("span");
      const nombreIdioma = (
        primerSpan ? primerSpan.textContent : li.textContent || cod.toUpperCase()
      ).trim();
      const regionTexto = REGIONES[cod] || nombreIdioma;
      const imgSrc = img
        ? img.getAttribute("src")
        : `https://flagcdn.com/w40/${cod}.png`;

      li.innerHTML =
        `<img src="${imgSrc}" alt="" width="28" height="19" loading="lazy">` +
        `<div class="idioma__textos">` +
          `<span class="idioma__nombre">${nombreIdioma}</span>` +
          `<small class="idioma__region">${regionTexto}</small>` +
        `</div>` +
        `<span class="idioma__cod-item">${cod.toUpperCase()}</span>`;
    });
  }

  function establecerTextoUltimoNodo(elemento, texto) {
    if (!elemento) return;
    const nodosTexto = Array.from(elemento.childNodes).filter(
      (n) => n.nodeType === Node.TEXT_NODE
    );
    if (nodosTexto.length > 0) {
      nodosTexto[nodosTexto.length - 1].textContent = ` ${texto}`;
    } else {
      elemento.appendChild(document.createTextNode(` ${texto}`));
    }
  }

  function actualizarPastillaIa(textoTraducido) {
    if (!textoTraducido) return;
    const candidatos = document.querySelectorAll(
      ".texto-ia-sugerencia, [data-ia-sugerencia], .pill-ia-sugerencia, .ia-sugerencia-texto"
    );
    candidatos.forEach((pill) => {
      pill.removeAttribute("data-text");
      if (pill.hasAttribute("data-ia-sugerencia")) {
        pill.setAttribute("data-ia-sugerencia", textoTraducido);
      }
      const objetivoTexto = pill.querySelector("span, a, p") || pill;
      if (objetivoTexto.textContent !== textoTraducido) {
        objetivoTexto.textContent = textoTraducido;
      }
      pill.classList.add("terminado");
    });
  }

  function aplicarDiccionarioEnDom(d, cod) {
    const ui = UI_SELECTOR[cod] || UI_SELECTOR.es;
    const enc = document.querySelector(".idioma__encabezado");
    if (enc) enc.textContent = ui.titulo;
    const inpBus = document.getElementById("idiomaBuscarInput");
    if (inpBus) inpBus.placeholder = ui.buscar;

    const codBadge = document.getElementById("idioma-codigo");
    if (codBadge) codBadge.textContent = cod.toUpperCase();

    const listaIdioma = document.getElementById("idioma-lista");
    if (listaIdioma) {
      listaIdioma.querySelectorAll("[data-codigo]").forEach((el) => {
        const match = el.dataset.codigo.toLowerCase() === cod;
        el.classList.toggle("activa", match);
        el.setAttribute("aria-selected", String(match));
      });
    }

    document.querySelectorAll(".rt-btn-usa-ia").forEach((btn) => {
      const spanTexto =
        btn.querySelector(".rt-btn-usa-ia__texto, .texto-ia, [data-i18n='usaIa']") ||
        Array.from(btn.querySelectorAll("span")).find(
          (s) => !s.querySelector("svg, i, img") && s.textContent.trim().length > 0
        );

      if (spanTexto) {
        spanTexto.textContent = d.usaIa;
        return;
      }

      const nodosTexto = Array.from(btn.childNodes).filter(
        (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 0
      );
      if (nodosTexto.length > 0) {
        nodosTexto[nodosTexto.length - 1].textContent = ` ${d.usaIa}`;
      } else {
        btn.appendChild(document.createTextNode(` ${d.usaIa}`));
      }
    });

    const cajonPrin = document.querySelectorAll(".cajon__principal a");
    if (cajonPrin[0]) establecerTextoUltimoNodo(cajonPrin[0], d.menuVuelos);
    if (cajonPrin[1]) establecerTextoUltimoNodo(cajonPrin[1], d.menuHoteles);
    if (cajonPrin[2]) establecerTextoUltimoNodo(cajonPrin[2], d.menuAutobus);

    const cajonSec = document.querySelectorAll(".cajon__enlaces a");
    const ordenSec = [
      d.planificaIa, d.planeaViajes, d.sobreNosotros,
      d.contacto, d.preguntasFrecuentes, d.explorar, d.terminos,
      d.rastreadorVuelos, d.viajes
    ];
    cajonSec.forEach((a, i) => {
      if (ordenSec[i]) establecerTextoUltimoNodo(a, ordenSec[i]);
    });

    const fuertes = document.querySelectorAll(".cajon__contacto strong");
    if (fuertes[0]) fuertes[0].textContent = d.telLabel;
    if (fuertes[1]) fuertes[1].textContent = d.correoLabel;

    const bannerH1 = document.querySelector(".banner h1");
    if (bannerH1 && d.bannerAcerca) bannerH1.textContent = d.bannerAcerca;
    const introP = document.querySelector("main .intro");
    if (introP && d.introAcerca) introP.textContent = d.introAcerca;
    const h2Creemos = document.querySelector("main h2");
    if (h2Creemos && d.creemosAcerca) h2Creemos.textContent = d.creemosAcerca;

    if (Array.isArray(d.parrafosAcerca)) {
      const mainPs = Array.from(document.querySelectorAll("main > p:not(.intro)"));
      mainPs.forEach((p, idx) => {
        if (d.parrafosAcerca[idx]) p.textContent = d.parrafosAcerca[idx];
      });
    }

    if (Array.isArray(d.valoresAcerca)) {
      const valorCards = Array.from(document.querySelectorAll("main section .valor"));
      valorCards.forEach((card, idx) => {
        const par = d.valoresAcerca[idx];
        if (!par) return;
        const h3 = card.querySelector("h3");
        const p = card.querySelector("p");
        if (h3 && par[0]) h3.textContent = par[0];
        if (p && par[1]) p.textContent = par[1];
      });
    }

    const desc = document.querySelector(".rt-footer__desc");
    if (desc) desc.textContent = d.footerDesc;
    const appTxt = document.querySelector(".rt-footer__app-texto");
    if (appTxt) appTxt.textContent = d.appTexto;
    const derechos = document.querySelector(".rt-footer__legal > span");
    if (derechos) derechos.textContent = d.derechos;
    const aeroTit = document.querySelector(".rt-footer__aero-titulo");
    if (aeroTit) aeroTit.textContent = d.aerolineas;

    const cols = document.querySelectorAll(".rt-footer__col");
    if (cols[0]) {
      const h3 = cols[0].querySelector("h3");
      if (h3) h3.textContent = d.colEmpresa;
      const enlaces = cols[0].querySelectorAll("ul a");
      const textos = [d.acercaDe, d.prensa, d.afiliados, d.socios];
      enlaces.forEach((a, i) => {
        if (textos[i]) establecerTextoUltimoNodo(a, textos[i]);
      });
    }
    if (cols[1]) {
      const h3 = cols[1].querySelector("h3");
      if (h3) h3.textContent = d.colContacto;
      const enlaces = cols[1].querySelectorAll("ul a");
      const textos = [d.ayudaFaq, d.hoteles, d.publicidad];
      enlaces.forEach((a, i) => {
        if (textos[i]) establecerTextoUltimoNodo(a, textos[i]);
      });
    }
    if (cols[2]) {
      const h3 = cols[2].querySelector("h3");
      if (h3) h3.textContent = d.colMas;
      const enlaces = cols[2].querySelectorAll("ul a");
      const textos = [d.tarifasAereas, d.ofertasBajas, d.privacidad];
      enlaces.forEach((a, i) => {
        if (textos[i]) establecerTextoUltimoNodo(a, textos[i]);
      });
    }
    if (cols[3]) {
      const h3 = cols[3].querySelector("h3");
      if (h3) h3.textContent = d.descargaApp;
    }

    const legLinks = document.querySelectorAll(".rt-footer__legales-links a");
    if (legLinks[0]) legLinks[0].textContent = d.privacidad;
    if (legLinks[1]) legLinks[1].textContent = d.terminos;

    const tituloActual = document.getElementById("tituloChatActual");
    if (tituloActual) tituloActual.textContent = d.nuevoChat;

    const btnNuevoSidebar = document.getElementById("btnNuevoChatSidebar");
    if (btnNuevoSidebar) establecerTextoUltimoNodo(btnNuevoSidebar, d.nuevoChat);

    const saludoH2 = document.querySelector("#bloqueSaludo h2");
    if (saludoH2) {
      const raw = saludoH2.textContent.trim();
      const idx = raw.lastIndexOf(",");
      const usuario = idx !== -1 ? raw.slice(idx + 1).trim() : "jeimycr9?";
      saludoH2.textContent = `${d.saludoIaPrefix} ${usuario}`;
    }

    const saludoP = document.querySelector("#bloqueSaludo p");
    if (saludoP) {
      const strong = saludoP.querySelector("strong");
      const ciudad = strong ? strong.textContent : "Montreal";
      saludoP.innerHTML = `${d.estasEnIaPrefix} <strong>${ciudad}</strong>`;
    }

    const sugs = document.querySelectorAll("#bloqueSugerencias .sugerencia-item");
    const textosSug = [d.sug1, d.sug2, d.sug3];
    sugs.forEach((item, i) => {
      if (!textosSug[i]) return;
      establecerTextoUltimoNodo(item, textosSug[i]);
      item.setAttribute("data-pregunta", textosSug[i]);
    });

    const inputIa = document.getElementById("inputPreguntaIa");
    if (inputIa) inputIa.placeholder = d.placeholderIa;

    const avisoIa = document.querySelector(
      "#panelChatIzquierda .contenedor-centrado-ia > div:last-child"
    );
    if (avisoIa) avisoIa.textContent = d.avisoIa;

    actualizarPastillaIa(d.pillSugerencia);
  }

  function aplicarTraduccionGlobal(codigoIdioma) {
    const cod = (codigoIdioma || "es").toLowerCase();
    prepararListaIdioma();

    document.documentElement.lang = cod;
    try {
      localStorage.setItem(STORAGE_KEY, cod);
      localStorage.setItem("idioma", cod);
      localStorage.setItem("rt_idioma_seleccionado", cod.toUpperCase());
    } catch (_) {}

    if (DICCIONARIO[cod]) {
      aplicarDiccionarioEnDom(DICCIONARIO[cod], cod);
      return;
    }

    const cached = obtenerCacheIdioma(cod);
    if (cached) {
      aplicarDiccionarioEnDom(cached, cod);
      return;
    }

    aplicarDiccionarioEnDom(DICCIONARIO.es, cod);

    traducirDiccionarioDinamico(cod).then((traducido) => {
      const vigente = (
        localStorage.getItem(STORAGE_KEY) ||
        localStorage.getItem("idioma") ||
        ""
      ).toLowerCase();
      if (vigente === cod && traducido) {
        aplicarDiccionarioEnDom(traducido, cod);
      }
    });
  }

  document.addEventListener("click", (e) => {
    const item = e.target.closest("#idioma-lista li[data-codigo]");
    if (!item) return;
    aplicarTraduccionGlobal(item.dataset.codigo);
  });

  document.addEventListener("idioma:cambio", (e) => {
    if (e.detail && e.detail.idioma) {
      aplicarTraduccionGlobal(e.detail.idioma);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    prepararListaIdioma();

    let inicial = "es";
    try {
      inicial = (
        localStorage.getItem(STORAGE_KEY) ||
        localStorage.getItem("idioma") ||
        localStorage.getItem("rt_idioma_seleccionado") ||
        "es"
      ).toLowerCase();
    } catch (_) {}

    aplicarTraduccionGlobal(inicial);
    setTimeout(() => aplicarTraduccionGlobal(inicial), 150);
    setTimeout(() => aplicarTraduccionGlobal(inicial), 600);
  });

  (function observarPastillaIa() {
    const observer = new MutationObserver(() => {
      const actual = (
        localStorage.getItem(STORAGE_KEY) ||
        localStorage.getItem("idioma") ||
        "es"
      ).toLowerCase();
      const d = DICCIONARIO[actual] || obtenerCacheIdioma(actual) || DICCIONARIO.es;
      const pill = document.querySelector(".texto-ia-sugerencia");
      if (pill && d) {
        const objetivo = pill.querySelector("span, a, p") || pill;
        if (objetivo.textContent !== d.pillSugerencia) {
          actualizarPastillaIa(d.pillSugerencia);
        }
      }
    });

    const iniciar = () => {
      if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
      }
    };
    if (document.body) iniciar();
    else document.addEventListener("DOMContentLoaded", iniciar);
  })();

  window.RuTaTraductor = { aplicar: aplicarTraduccionGlobal };
})();