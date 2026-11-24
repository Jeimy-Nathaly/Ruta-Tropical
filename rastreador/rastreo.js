/* ==========================================================
   1. PESTAÑAS DEL RASTREADOR
   ========================================================== */
(function () {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("active"); });
      panels.forEach(function (p) { p.classList.remove("active"); });

      tab.classList.add("active");
      const destino = document.getElementById(tab.dataset.target);
      if (destino) destino.classList.add("active");
    });
  });
})();


/* ==========================================================
   2. BARRA DE NAVEGACIÓN, MENÚ LATERAL, MONEDA Y PERFIL
   ========================================================== */
(function () {
  const nav = document.getElementById("nav-sitio");
  const cajon = document.getElementById("cajon");
  const fondo = document.getElementById("cajon-fondo");
  const abrir = document.getElementById("abrir-menu");
  const cerrar = document.getElementById("cerrar-menu");
  const portada = document.querySelector(".portada");

  /* ---------- Menú lateral ---------- */
  function alternarMenu(mostrar) {
    if (!cajon || !fondo || !abrir) return;
    cajon.classList.toggle("abierto", mostrar);
    fondo.classList.toggle("visible", mostrar);
    abrir.setAttribute("aria-expanded", String(mostrar));
    document.body.style.overflow = mostrar ? "hidden" : "";
    if (mostrar && cerrar) cerrar.focus();
    else if (!mostrar && abrir) abrir.focus();
  }

  if (abrir) abrir.addEventListener("click", function () { alternarMenu(true); });
  if (cerrar) cerrar.addEventListener("click", function () { alternarMenu(false); });
  if (fondo) fondo.addEventListener("click", function () { alternarMenu(false); });

  if (cajon) {
    cajon.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { alternarMenu(false); });
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && cajon && cajon.classList.contains("abierto")) {
      alternarMenu(false);
    }
  });

  /* ---------- Barra fija ---------- */
  if (nav) {
    if (portada && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entradas) {
        nav.classList.toggle("fija", !entradas[0].isIntersecting);
      }).observe(portada);
    } else {
      nav.classList.add("fija");
    }
  }

  /* ---------- Moneda funcional + persistencia ---------- */
  const banderas = { usd: "us", eur: "eu", dop: "do", gbp: "gb" };
  const simbolos = { usd: "$", eur: "€", dop: "RD$", gbp: "£" };
  const moneda = document.getElementById("currency");
  const bandera = document.getElementById("bandera");
  const simboloEl = document.getElementById("moneda-simbolo");

  function aplicarMoneda(valor) {
    if (!moneda) return;
    const cod = (valor || moneda.value || "usd").toLowerCase();
    if (simbolos[cod]) {
      moneda.value = cod;
    }
    const actual = moneda.value;
    if (bandera && banderas[actual]) {
      bandera.src = "https://flagcdn.com/w40/" + banderas[actual] + ".png";
    }
    if (simboloEl) {
      simboloEl.textContent = simbolos[actual] || "$";
    }
    try { localStorage.setItem("rt_moneda", actual); } catch (_) {}
    document.dispatchEvent(new CustomEvent("moneda:cambio", {
      detail: { moneda: actual, simbolo: simbolos[actual] || "$" }
    }));
  }

  if (moneda) {
    let guardada = "usd";
    try { guardada = localStorage.getItem("rt_moneda") || "usd"; } catch (_) {}
    aplicarMoneda(guardada);

    moneda.addEventListener("change", function () {
      aplicarMoneda(moneda.value);
    });
  }

  /* ---------- Acceso al perfil de usuario + foto/inicial ---------- */
  const linkUsuario = document.getElementById("nav-usuario-link");
  const imgUsuario = document.getElementById("nav-usuario-foto");
  const inicialUsuario = document.getElementById("nav-usuario-inicial");

  const clavesFoto = [
    "rt_foto_perfil",
    "rt_foto_perfil_actual",
    "fotoPerfil",
    "foto_perfil",
    "avatarUsuario",
    "avatar_url"
  ];

  let fotoActual = "";
  try {
    for (const k of clavesFoto) {
      const v = localStorage.getItem(k);
      if (v && v.trim()) {
        fotoActual = v.trim();
        break;
      }
    }
    if (!fotoActual) {
      for (let i = 0; i < localStorage.length; i++) {
        const raw = localStorage.getItem(localStorage.key(i));
        if (!raw) continue;
        try {
          const obj = JSON.parse(raw);
          if (obj && typeof obj === "object") {
            const posible = obj.foto || obj.avatar || obj.fotoPerfil || obj.imagen;
            if (typeof posible === "string" && posible.trim()) {
              fotoActual = posible.trim();
              break;
            }
          }
        } catch (_) {}
      }
    }

    const rawUser = localStorage.getItem("usuarioActual") || localStorage.getItem("rt_cuenta_actual_v1") || "";
    if (rawUser && inicialUsuario) {
      try {
        const u = JSON.parse(rawUser);
        if (u && u.nombre) inicialUsuario.textContent = u.nombre.trim().charAt(0).toUpperCase();
      } catch (_) {
        inicialUsuario.textContent = rawUser.trim().charAt(0).toUpperCase() || "J";
      }
    }
  } catch (_) {}

  if (imgUsuario && fotoActual) {
    imgUsuario.onload = function () { imgUsuario.classList.add("activa"); };
    imgUsuario.onerror = function () { imgUsuario.classList.remove("activa"); };
    imgUsuario.src = fotoActual;
    if (imgUsuario.complete && imgUsuario.naturalWidth > 0) {
      imgUsuario.classList.add("activa");
    }
  }

  if (linkUsuario) {
    linkUsuario.addEventListener("click", function (e) {
      const rutasRaw = linkUsuario.getAttribute("data-perfil-rutas") || linkUsuario.getAttribute("href") || "";
      const candidatos = rutasRaw.split(",").map(function (r) { return r.trim(); }).filter(Boolean);
      const destino = candidatos[0] || "perfil-usuario.html";

      // Si se abre por HTTP/HTTPS, verificamos si existe el archivo; si no, probamos los candidatos
      if (window.location.protocol === "http:" || window.location.protocol === "https:") {
        e.preventDefault();
        (async function () {
          for (const ruta of candidatos) {
            try {
              const resp = await fetch(encodeURI(ruta), { method: "HEAD" });
              if (resp.ok) {
                window.location.href = ruta;
                return;
              }
            } catch (_) {}
          }
          window.location.href = destino;
        })();
      }
    });
  }
})();


/* ==========================================================
   3. SELECTOR DE IDIOMA FUNCIONAL + TRADUCCIÓN DE INTERFAZ
   ========================================================== */
(function () {
  const IDIOMAS = [
    { codigo: "ES", nombre: "Español", region: "España / Latinoamérica", pais: "es" },
    { codigo: "EN", nombre: "English", region: "United States", pais: "us" },
    { codigo: "FR", nombre: "Français", region: "France", pais: "fr" },
    { codigo: "DE", nombre: "Deutsch", region: "Deutschland", pais: "de" },
    { codigo: "IT", nombre: "Italiano", region: "Italia", pais: "it" },
    { codigo: "PT", nombre: "Português", region: "Portugal / Brasil", pais: "pt" },
    { codigo: "ZH", nombre: "中文", region: "中国", pais: "cn" },
    { codigo: "JA", nombre: "日本語", region: "日本", pais: "jp" },
    { codigo: "RU", nombre: "Русский", region: "Россия", pais: "ru" },
    { codigo: "AR", nombre: "العربية", region: "العالم العربي", pais: "sa" }
  ];

  const TRADUCCIONES = {
    ES: {
      tituloDoc: "Rastreador de vuelos",
      usaIa: "Usa la IA",
      menuVuelos: "Vuelos",
      menuHoteles: "Hoteles",
      menuAutobus: "Autobús",
      planificaIa: "Planifica con IA",
      rastreadorTitulo: "Rastreador",
      tabVuelo: "N.° de vuelo",
      tabAeropuerto: "Aeropuerto",
      phAerolinea: "Aerolínea",
      phNumVuelo: "Número de vuelo",
      phAeropuertoReq: "Aeropuerto (obligatorio)",
      phAerolineaOpc: "Aerolínea (opcional)",
      buscarBtn: "Rastrear vuelo",
      franjas: [
        "Mañana 6:00 a.m. a 12:00 p.m.",
        "Tarde 12:00 p.m. a 6:00 p.m.",
        "Noche 6:00 p.m. a 12:00 a.m.",
        "Madrugada 12:00 a.m. a 6:00 a.m."
      ]
    },
    EN: {
      tituloDoc: "Flight Tracker",
      usaIa: "Use AI",
      menuVuelos: "Flights",
      menuHoteles: "Hotels",
      menuAutobus: "Bus",
      planificaIa: "Plan with AI",
      rastreadorTitulo: "Flight Tracker",
      tabVuelo: "Flight No.",
      tabAeropuerto: "Airport",
      phAerolinea: "Airline",
      phNumVuelo: "Flight number",
      phAeropuertoReq: "Airport (required)",
      phAerolineaOpc: "Airline (optional)",
      buscarBtn: "Track flight",
      franjas: [
        "Morning 6:00 AM - 12:00 PM",
        "Afternoon 12:00 PM - 6:00 PM",
        "Evening 6:00 PM - 12:00 AM",
        "Late Night 12:00 AM - 6:00 AM"
      ]
    },
    FR: {
      tituloDoc: "Suivi des vols",
      usaIa: "Utiliser l'IA",
      menuVuelos: "Vols",
      menuHoteles: "Hôtels",
      menuAutobus: "Bus",
      planificaIa: "Planifier avec l'IA",
      rastreadorTitulo: "Suivi des vols",
      tabVuelo: "N° de vol",
      tabAeropuerto: "Aéroport",
      phAerolinea: "Compagnie aérienne",
      phNumVuelo: "Numéro de vol",
      phAeropuertoReq: "Aéroport (obligatoire)",
      phAerolineaOpc: "Compagnie aérienne (facultatif)",
      buscarBtn: "Suivre le vol",
      franjas: [
        "Matin 6h00 - 12h00",
        "Après-midi 12h00 - 18h00",
        "Soirée 18h00 - 00h00",
        "Nuit 00h00 - 6h00"
      ]
    },
    DE: {
      tituloDoc: "Flugtracker",
      usaIa: "KI nutzen",
      menuVuelos: "Flüge",
      menuHoteles: "Hotels",
      menuAutobus: "Bus",
      planificaIa: "Mit KI planen",
      rastreadorTitulo: "Flugtracker",
      tabVuelo: "Flugnr.",
      tabAeropuerto: "Flughafen",
      phAerolinea: "Fluggesellschaft",
      phNumVuelo: "Flugnummer",
      phAeropuertoReq: "Flughafen (erforderlich)",
      phAerolineaOpc: "Fluggesellschaft (optional)",
      buscarBtn: "Flug verfolgen",
      franjas: [
        "Vormittag 06:00 - 12:00",
        "Nachmittag 12:00 - 18:00",
        "Abend 18:00 - 00:00",
        "Nacht 00:00 - 06:00"
      ]
    },
    IT: {
      tituloDoc: "Tracciamento voli",
      usaIa: "Usa l'IA",
      menuVuelos: "Voli",
      menuHoteles: "Hotel",
      menuAutobus: "Autobus",
      planificaIa: "Pianifica con l'IA",
      rastreadorTitulo: "Tracciamento voli",
      tabVuelo: "N. volo",
      tabAeropuerto: "Aeroporto",
      phAerolinea: "Compagnia aerea",
      phNumVuelo: "Numero di volo",
      phAeropuertoReq: "Aeroporto (obbligatorio)",
      phAerolineaOpc: "Compagnia aerea (opzionale)",
      buscarBtn: "Traccia volo",
      franjas: [
        "Mattina 06:00 - 12:00",
        "Pomeriggio 12:00 - 18:00",
        "Sera 18:00 - 00:00",
        "Notte 00:00 - 06:00"
      ]
    },
    PT: {
      tituloDoc: "Rastreador de voos",
      usaIa: "Usar a IA",
      menuVuelos: "Voos",
      menuHoteles: "Hotéis",
      menuAutobus: "Ônibus",
      planificaIa: "Planejar com IA",
      rastreadorTitulo: "Rastreador",
      tabVuelo: "N.º do voo",
      tabAeropuerto: "Aeroporto",
      phAerolinea: "Companhia aérea",
      phNumVuelo: "Número do voo",
      phAeropuertoReq: "Aeroporto (obrigatório)",
      phAerolineaOpc: "Companhia aérea (opcional)",
      buscarBtn: "Rastrear voo",
      franjas: [
        "Manhã 06:00 - 12:00",
        "Tarde 12:00 - 18:00",
        "Noite 18:00 - 00:00",
        "Madrugada 00:00 - 06:00"
      ]
    },
    ZH: {
      tituloDoc: "航班追踪器",
      usaIa: "使用 AI",
      menuVuelos: "航班",
      menuHoteles: "酒店",
      menuAutobus: "巴士",
      planificaIa: "使用 AI 规划",
      rastreadorTitulo: "航班追踪",
      tabVuelo: "航班号",
      tabAeropuerto: "机场",
      phAerolinea: "航空公司",
      phNumVuelo: "航班编号",
      phAeropuertoReq: "机场（必填）",
      phAerolineaOpc: "航空公司（选填）",
      buscarBtn: "追踪航班",
      franjas: [
        "上午 06:00 - 12:00",
        "下午 12:00 - 18:00",
        "晚上 18:00 - 00:00",
        "凌晨 00:00 - 06:00"
      ]
    },
    JA: {
      tituloDoc: "フライトトラッカー",
      usaIa: "AIを使う",
      menuVuelos: "フライト",
      menuHoteles: "ホテル",
      menuAutobus: "バス",
      planificaIa: "AIで計画する",
      rastreadorTitulo: "フライト追跡",
      tabVuelo: "便名",
      tabAeropuerto: "空港",
      phAerolinea: "航空会社",
      phNumVuelo: "便番号",
      phAeropuertoReq: "空港（必須）",
      phAerolineaOpc: "航空会社（任意）",
      buscarBtn: "フライトを追跡",
      franjas: [
        "午前 6:00 - 12:00",
        "午後 12:00 - 18:00",
        "夜 18:00 - 24:00",
        "深夜 0:00 - 6:00"
      ]
    },
    RU: {
      tituloDoc: "Трекер рейсов",
      usaIa: "Использовать ИИ",
      menuVuelos: "Рейсы",
      menuHoteles: "Отели",
      menuAutobus: "Автобус",
      planificaIa: "Планировать с ИИ",
      rastreadorTitulo: "Трекер рейсов",
      tabVuelo: "№ рейса",
      tabAeropuerto: "Аэропорт",
      phAerolinea: "Авиакомпания",
      phNumVuelo: "Номер рейса",
      phAeropuertoReq: "Аэропорт (обязательно)",
      phAerolineaOpc: "Авиакомпания (необязательно)",
      buscarBtn: "Отследить рейс",
      franjas: [
        "Утро 06:00 - 12:00",
        "День 12:00 - 18:00",
        "Вечер 18:00 - 00:00",
        "Ночь 00:00 - 06:00"
      ]
    },
    AR: {
      tituloDoc: "متتبع الرحلات",
      usaIa: "استخدم الذكاء الاصطناعي",
      menuVuelos: "الرحلات",
      menuHoteles: "الفنادق",
      menuAutobus: "الحافلات",
      planificaIa: "خطط بالذكاء الاصطناعي",
      rastreadorTitulo: "متتبع الرحلات",
      tabVuelo: "رقم الرحلة",
      tabAeropuerto: "المطار",
      phAerolinea: "شركة الطيران",
      phNumVuelo: "رقم الرحلة",
      phAeropuertoReq: "المطار (إجباري)",
      phAerolineaOpc: "شركة الطيران (اختياري)",
      buscarBtn: "تتبع الرحلة",
      franjas: [
        "الصباح 6:00 - 12:00",
        "بعد الظهر 12:00 - 6:00",
        "المساء 6:00 - 12:00",
        "منتصف الليل 12:00 - 6:00"
      ]
    }
  };

  const STORAGE_IDIOMA = "rt_idioma_seleccionado";

  function traducirPagina(codigo) {
    const dict = TRADUCCIONES[codigo] || TRADUCCIONES.ES;
    document.title = dict.tituloDoc;
    document.documentElement.lang = codigo.toLowerCase();
    document.documentElement.dir = codigo === "AR" ? "rtl" : "ltr";

    const btnIaSpan = document.querySelector(".rt-btn-usa-ia span");
    if (btnIaSpan) btnIaSpan.textContent = dict.usaIa;

    const h1 = document.querySelector("main .card h1");
    if (h1) h1.textContent = dict.rastreadorTitulo;

    const tabs = document.querySelectorAll("main .tabs .tab");
    if (tabs[0]) tabs[0].textContent = dict.tabVuelo;
    if (tabs[1]) tabs[1].textContent = dict.tabAeropuerto;

    const formVueloInputs = document.querySelectorAll("#form-vuelo input[type='text']");
    if (formVueloInputs[0]) formVueloInputs[0].placeholder = dict.phAerolinea;
    if (formVueloInputs[1]) formVueloInputs[1].placeholder = dict.phNumVuelo;

    const formAeroInputs = document.querySelectorAll("#form-aeropuerto input[type='text']");
    if (formAeroInputs[0]) formAeroInputs[0].placeholder = dict.phAeropuertoReq;
    if (formAeroInputs[1]) formAeroInputs[1].placeholder = dict.phAerolineaOpc;

    const franjaSelect = document.querySelector("#form-aeropuerto select");
    if (franjaSelect && dict.franjas) {
      Array.from(franjaSelect.options).forEach((opt, idx) => {
        if (dict.franjas[idx]) opt.textContent = dict.franjas[idx];
      });
    }

    document.querySelectorAll("main form button.buscar").forEach((btn) => {
      btn.textContent = dict.buscarBtn;
    });

    const cajonLinks = document.querySelectorAll(".cajon__principal a");
    if (cajonLinks[0]) cajonLinks[0].lastChild.textContent = ` ${dict.menuVuelos}`;
    if (cajonLinks[1]) cajonLinks[1].lastChild.textContent = ` ${dict.menuHoteles}`;
    if (cajonLinks[2]) cajonLinks[2].lastChild.textContent = ` ${dict.menuAutobus}`;

    const planLink = document.querySelector(".cajon__enlaces li:first-child a");
    if (planLink) planLink.lastChild.textContent = ` ${dict.planificaIa}`;
  }

  function aplicarIdioma(codigo, guardar = true) {
    const item = IDIOMAS.find((i) => i.codigo === codigo) || IDIOMAS[0];
    const banderaBtn = document.getElementById("idioma-bandera");
    const codigoBtn = document.getElementById("idioma-codigo");
    const listaEl = document.getElementById("idioma-lista");

    if (banderaBtn) {
      banderaBtn.src = `https://flagcdn.com/w40/${item.pais}.png`;
      banderaBtn.alt = item.nombre;
    }
    if (codigoBtn) {
      codigoBtn.textContent = item.codigo;
    }

    if (listaEl) {
      listaEl.querySelectorAll(".idioma__opcion").forEach((op) => {
        const esActual = op.dataset.codigo === item.codigo;
        op.classList.toggle("activa", esActual);
        op.setAttribute("aria-selected", esActual ? "true" : "false");
      });
    }

    traducirPagina(item.codigo);

    if (guardar) {
      try {
        localStorage.setItem(STORAGE_IDIOMA, item.codigo);
      } catch (_) {}
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("idioma-boton");
    const lista = document.getElementById("idioma-lista");
    if (!boton || !lista) return;

    lista.innerHTML = IDIOMAS.map(
      (item) => `
      <li role="option" aria-selected="false">
        <button type="button" class="idioma__opcion" data-codigo="${item.codigo}">
          <span class="idioma__opcion-izq">
            <img src="https://flagcdn.com/w40/${item.pais}.png" alt="${item.nombre}" width="24" height="16">
            <span class="idioma__opcion-textos">
              <span class="idioma__opcion-nombre">${item.nombre}</span>
              <span class="idioma__opcion-region">${item.region}</span>
            </span>
          </span>
          <span class="idioma__opcion-codigo">${item.codigo}</span>
        </button>
      </li>
    `
    ).join("");

    boton.addEventListener("click", (e) => {
      e.stopPropagation();
      const estaAbierto = !lista.hidden;
      lista.hidden = estaAbierto;
      boton.setAttribute("aria-expanded", String(!estaAbierto));
    });

    lista.addEventListener("click", (e) => {
      const opcionBtn = e.target.closest(".idioma__opcion");
      if (!opcionBtn) return;
      aplicarIdioma(opcionBtn.dataset.codigo, true);
      lista.hidden = true;
      boton.setAttribute("aria-expanded", "false");
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest("#idioma")) {
        lista.hidden = true;
        boton.setAttribute("aria-expanded", "false");
      }
    });

    let inicial = "ES";
    try {
      const guardada = (localStorage.getItem(STORAGE_IDIOMA) || "").toUpperCase();
      if (IDIOMAS.some((i) => i.codigo === guardada)) {
        inicial = guardada;
      }
    } catch (_) {}

    aplicarIdioma(inicial, false);
  });
})();

/* ==========================================================
   MENÚ VISUAL DE MONEDA + TRADUCCIÓN COMPLETA TODOS LOS IDIOMAS
   ========================================================== */
(function () {
  const OPCIONES_MONEDA = [
    { codigo: "usd", etiqueta: "USD", simbolo: "$" },
    { codigo: "eur", etiqueta: "EUR", simbolo: "€" },
    { codigo: "dop", etiqueta: "DOP", simbolo: "RD$" },
    { codigo: "gbp", etiqueta: "GBP", simbolo: "£" }
  ];

  const DICT_COMPLETO = {
    ES: {
      menuHoteles: "Hoteles", menuAutobus: "Autobús",
      planificaViajes: "Planifica con IA", tarifasEquipaje: "Tarifas de equipaje",
      planeaViajes: "Planea tus viajes", sobreNosotros: "Sobre nosotros",
      contacto: "Contacto", preguntasFrecuentes: "Preguntas frecuentes",
      explorar: "Explorar", terminos: "Términos y condiciones",
      rastreadorVuelos: "Rastreador de vuelos", viajes: "Viajes",
      telLabel: "Teléfono:", correoLabel: "Correo:",
      footerDesc: "Tu agencia de confianza para descubrir el mundo al mejor precio. Compara, ahorra y vuela sin límites.",
      colEmpresa: "Empresa", acercaDe: "Acerca de", prensa: "Prensa", afiliados: "Afiliados", socios: "Socios",
      colContacto: "Contacto", ayudaFaq: "Ayuda / FAQ", hoteles: "Hoteles", publicidad: "Publicidad",
      colMas: "Más", tarifasAereas: "Tarifas aéreas", ofertasBajas: "Ofertas bajas", privacidad: "Privacidad",
      descargaApp: "Descarga la app", appTexto: "Lleva tus reservas y ofertas siempre contigo.",
      derechos: "© 2026 RuTa Tropical. Todos los derechos reservados.", aerolineas: "Aerolíneas"
    },
    EN: {
      menuHoteles: "Hotels", menuAutobus: "Bus",
      planificaViajes: "Plan with AI", tarifasEquipaje: "Baggage fees",
      planeaViajes: "Plan your trips", sobreNosotros: "About us",
      contacto: "Contact", preguntasFrecuentes: "FAQ",
      explorar: "Explore", terminos: "Terms and conditions",
      rastreadorVuelos: "Flight tracker", viajes: "Trips",
      telLabel: "Phone:", correoLabel: "Email:",
      footerDesc: "Your trusted agency to discover the world at the best price. Compare, save, and fly without limits.",
      colEmpresa: "Company", acercaDe: "About", prensa: "Press", afiliados: "Affiliates", socios: "Partners",
      colContacto: "Contact", ayudaFaq: "Help / FAQ", hoteles: "Hotels", publicidad: "Advertising",
      colMas: "More", tarifasAereas: "Airfares", ofertasBajas: "Low fare deals", privacidad: "Privacy",
      descargaApp: "Download the app", appTexto: "Take your bookings and deals with you everywhere.",
      derechos: "© 2026 RuTa Tropical. All rights reserved.", aerolineas: "Airlines"
    },
    FR: {
      menuHoteles: "Hôtels", menuAutobus: "Bus",
      planificaViajes: "Planifier avec l'IA", tarifasEquipaje: "Frais de bagages",
      planeaViajes: "Planifiez vos voyages", sobreNosotros: "À propos",
      contacto: "Contact", preguntasFrecuentes: "FAQ",
      explorar: "Explorer", terminos: "Conditions générales",
      rastreadorVuelos: "Suivi des vols", viajes: "Voyages",
      telLabel: "Téléphone :", correoLabel: "E-mail :",
      footerDesc: "Votre agence de confiance pour découvrir le monde au meilleur prix. Comparez, économisez et voyagez sans limites.",
      colEmpresa: "Entreprise", acercaDe: "À propos", prensa: "Presse", afiliados: "Affiliés", socios: "Partenaires",
      colContacto: "Contact", ayudaFaq: "Aide / FAQ", hoteles: "Hôtels", publicidad: "Publicité",
      colMas: "Plus", tarifasAereas: "Tarifs aériens", ofertasBajas: "Meilleurs tarifs", privacidad: "Confidentialité",
      descargaApp: "Téléchargez l'appli", appTexto: "Emportez vos réservations et offres partout avec vous.",
      derechos: "© 2026 RuTa Tropical. Tous droits réservés.", aerolineas: "Compagnies aériennes"
    },
    DE: {
      menuHoteles: "Hotels", menuAutobus: "Bus",
      planificaViajes: "Mit KI planen", tarifasEquipaje: "Gepäckgebühren",
      planeaViajes: "Reisen planen", sobreNosotros: "Über uns",
      contacto: "Kontakt", preguntasFrecuentes: "FAQ",
      explorar: "Entdecken", terminos: "AGB",
      rastreadorVuelos: "Flugtracker", viajes: "Reisen",
      telLabel: "Telefon:", correoLabel: "E-Mail:",
      footerDesc: "Deine zuverlässige Reiseagentur für die besten Preise weltweit. Vergleichen, sparen und unbeschwert fliegen.",
      colEmpresa: "Unternehmen", acercaDe: "Über uns", prensa: "Presse", afiliados: "Partnerprogramm", socios: "Partner",
      colContacto: "Kontakt", ayudaFaq: "Hilfe / FAQ", hoteles: "Hotels", publicidad: "Werbung",
      colMas: "Mehr", tarifasAereas: "Flugpreise", ofertasBajas: "Günstige Flüge", privacidad: "Datenschutz",
      descargaApp: "App herunterladen", appTexto: "Buchungen und Angebote immer dabei.",
      derechos: "© 2026 RuTa Tropical. Alle Rechte vorbehalten.", aerolineas: "Fluggesellschaften"
    },
    IT: {
      menuHoteles: "Hotel", menuAutobus: "Autobus",
      planificaViajes: "Pianifica con l'IA", tarifasEquipaje: "Tariffe bagagli",
      planeaViajes: "Pianifica i viaggi", sobreNosotros: "Chi siamo",
      contacto: "Contatti", preguntasFrecuentes: "FAQ",
      explorar: "Esplora", terminos: "Termini e condizioni",
      rastreadorVuelos: "Tracciamento voli", viajes: "Viaggi",
      telLabel: "Telefono:", correoLabel: "Email:",
      footerDesc: "La tua agenzia di fiducia per scoprire il mondo al miglior prezzo. Confronta, risparmia e vola senza limiti.",
      colEmpresa: "Azienda", acercaDe: "Chi siamo", prensa: "Stampa", afiliados: "Affiliati", socios: "Partner",
      colContacto: "Contatti", ayudaFaq: "Aiuto / FAQ", hoteles: "Hotel", publicidad: "Pubblicità",
      colMas: "Altro", tarifasAereas: "Tariffe aeree", ofertasBajas: "Offerte low cost", privacidad: "Privacy",
      descargaApp: "Scarica l'app", appTexto: "Porta prenotazioni e offerte sempre con te.",
      derechos: "© 2026 RuTa Tropical. Tutti i diritti riservati.", aerolineas: "Compagnie aeree"
    },
    PT: {
      menuHoteles: "Hotéis", menuAutobus: "Ônibus",
      planificaViajes: "Planejar com IA", tarifasEquipaje: "Taxas de bagagem",
      planeaViajes: "Planeje suas viagens", sobreNosotros: "Sobre nós",
      contacto: "Contato", preguntasFrecuentes: "Perguntas frequentes",
      explorar: "Explorar", terminos: "Termos e condições",
      rastreadorVuelos: "Rastreador de voos", viajes: "Viagens",
      telLabel: "Telefone:", correoLabel: "E-mail:",
      footerDesc: "Sua agência de confiança para descobrir o mundo pelo melhor preço. Compare, economize e voe sem limites.",
      colEmpresa: "Empresa", acercaDe: "Sobre", prensa: "Imprensa", afiliados: "Afiliados", socios: "Parceiros",
      colContacto: "Contato", ayudaFaq: "Ajuda / FAQ", hoteles: "Hotéis", publicidad: "Publicidade",
      colMas: "Mais", tarifasAereas: "Tarifas aéreas", ofertasBajas: "Ofertas baixas", privacidad: "Privacidade",
      descargaApp: "Baixe o app", appTexto: "Leve suas reservas e ofertas sempre com você.",
      derechos: "© 2026 RuTa Tropical. Todos os direitos reservados.", aerolineas: "Companhias aéreas"
    },
    ZH: {
      menuHoteles: "酒店", menuAutobus: "巴士",
      planificaViajes: "使用 AI 规划", tarifasEquipaje: "行李费用",
      planeaViajes: "规划行程", sobreNosotros: "关于我们",
      contacto: "联系我们", preguntasFrecuentes: "常见问题",
      explorar: "探索", terminos: "条款与条件",
      rastreadorVuelos: "航班追踪", viajes: "行程",
      telLabel: "电话：", correoLabel: "邮箱：",
      footerDesc: "您值得信赖的旅行机构，以最优价格畅游世界。比价、省钱、无忧飞行。",
      colEmpresa: "公司", acercaDe: "关于我们", prensa: "媒体", afiliados: "联盟", socios: "合作伙伴",
      colContacto: "联系", ayudaFaq: "帮助 / 常见问题", hoteles: "酒店", publicidad: "广告合作",
      colMas: "更多", tarifasAereas: "机票价格", ofertasBajas: "特价机票", privacidad: "隐私政策",
      descargaApp: "下载应用", appTexto: "随时随地管理预订和优惠。",
      derechos: "© 2026 RuTa Tropical. 保留所有权利。", aerolineas: "航空公司"
    },
    JA: {
      menuHoteles: "ホテル", menuAutobus: "バス",
      planificaViajes: "AIで計画する", tarifasEquipaje: "手荷物料金",
      planeaViajes: "旅行を計画", sobreNosotros: "会社概要",
      contacto: "お問い合わせ", preguntasFrecuentes: "よくある質問",
      explorar: "探索", terminos: "利用規約",
      rastreadorVuelos: "フライト追跡", viajes: "旅行",
      telLabel: "電話：", correoLabel: "メール：",
      footerDesc: "ベストプライスで世界を巡る信頼のトラベルパートナー。比較して、お得に、自由に空の旅へ。",
      colEmpresa: "会社情報", acercaDe: "概要", prensa: "プレス", afiliados: "アフィリエイト", socios: "パートナー",
      colContacto: "お問い合わせ", ayudaFaq: "ヘルプ / FAQ", hoteles: "ホテル", publicidad: "広告掲載",
      colMas: "その他", tarifasAereas: "航空運賃", ofertasBajas: "格安航空券", privacidad: "プライバシー",
      descargaApp: "アプリをダウンロード", appTexto: "予約とお得な情報をいつでも手元に。",
      derechos: "© 2026 RuTa Tropical. All rights reserved.", aerolineas: "航空会社"
    },
    RU: {
      menuHoteles: "Отели", menuAutobus: "Автобус",
      planificaViajes: "Планировать с ИИ", tarifasEquipaje: "Сборы за багаж",
      planeaViajes: "Планируйте поездки", sobreNosotros: "О нас",
      contacto: "Контакты", preguntasFrecuentes: "Частые вопросы",
      explorar: "Обзор", terminos: "Условия использования",
      rastreadorVuelos: "Трекер рейсов", viajes: "Поездки",
      telLabel: "Телефон:", correoLabel: "Почта:",
      footerDesc: "Надёжное агентство для путешествий по лучшим ценам. Сравнивайте, экономьте и летайте без границ.",
      colEmpresa: "Компания", acercaDe: "О нас", prensa: "Пресса", afiliados: "Партнёрам", socios: "Партнёры",
      colContacto: "Контакты", ayudaFaq: "Помощь / FAQ", hoteles: "Отели", publicidad: "Реклама",
      colMas: "Ещё", tarifasAereas: "Авиатарифы", ofertasBajas: "Выгодные цены", privacidad: "Конфиденциальность",
      descargaApp: "Скачать приложение", appTexto: "Бронирования и скидки всегда под рукой.",
      derechos: "© 2026 RuTa Tropical. Все права защищены.", aerolineas: "Авиакомпании"
    },
    AR: {
      menuHoteles: "الفنادق", menuAutobus: "الحافلات",
      planificaViajes: "خطط بالذكاء الاصطناعي", tarifasEquipaje: "رسوم الأمتعة",
      planeaViajes: "خطط لرحلاتك", sobreNosotros: "من نحن",
      contacto: "اتصل بنا", preguntasFrecuentes: "الأسئلة الشائعة",
      explorar: "استكشف", terminos: "الشروط والأحكام",
      rastreadorVuelos: "متتبع الرحلات", viajes: "الرحلات",
      telLabel: "الهاتف:", correoLabel: "البريد:",
      footerDesc: "وكالتك الموثوقة لاكتشاف العالم بأفضل الأسعار. قارن ووفّر وسافر بلا حدود.",
      colEmpresa: "الشركة", acercaDe: "من نحن", prensa: "الصحافة", afiliados: "الشركاء التابعون", socios: "الشركاء",
      colContacto: "تواصل", ayudaFaq: "المساعدة / الأسئلة", hoteles: "الفنادق", publicidad: "الإعلانات",
      colMas: "المزيد", tarifasAereas: "أسعار الطيران", ofertasBajas: "عروض منخفضة", privacidad: "الخصوصية",
      descargaApp: "حمّل التطبيق", appTexto: "احتفظ بحجوزاتك وعروضك معك دائمًا.",
      derechos: "© 2026 RuTa Tropical. جميع الحقوق محفوظة.", aerolineas: "شركات الطيران"
    }
  };

  function traducirTodo(codigo) {
    const d = DICT_COMPLETO[codigo] || DICT_COMPLETO.ES;
    const cajonLinks = document.querySelectorAll(".cajon__principal a");
    if (cajonLinks[1] && cajonLinks[1].lastChild) cajonLinks[1].lastChild.textContent = ` ${d.menuHoteles}`;
    if (cajonLinks[2] && cajonLinks[2].lastChild) cajonLinks[2].lastChild.textContent = ` ${d.menuAutobus}`;

    const secLinks = document.querySelectorAll(".cajon__enlaces a");
    const ordenSec = [
      d.planificaViajes, d.planeaViajes, d.sobreNosotros,
      d.contacto, d.preguntasFrecuentes, d.explorar, d.terminos, d.rastreadorVuelos, d.viajes
    ];
    secLinks.forEach((a, i) => {
      if (ordenSec[i] && a.lastChild) a.lastChild.textContent = ` ${ordenSec[i]}`;
    });

    const fuertes = document.querySelectorAll(".cajon__contacto strong");
    if (fuertes[0]) fuertes[0].textContent = d.telLabel;
    if (fuertes[1]) fuertes[1].textContent = d.correoLabel;

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
      const l = cols[0].querySelectorAll("ul a");
      const arr = [d.acercaDe, d.prensa, d.afiliados, d.socios];
      l.forEach((a, i) => { if (arr[i] && a.lastChild) a.lastChild.textContent = ` ${arr[i]}`; });
    }
    if (cols[1]) {
      const h3 = cols[1].querySelector("h3");
      if (h3) h3.textContent = d.colContacto;
      const l = cols[1].querySelectorAll("ul a");
      const arr = [d.ayudaFaq, d.hoteles, d.publicidad];
      l.forEach((a, i) => { if (arr[i] && a.lastChild) a.lastChild.textContent = ` ${arr[i]}`; });
    }
    if (cols[2]) {
      const h3 = cols[2].querySelector("h3");
      if (h3) h3.textContent = d.colMas;
      const l = cols[2].querySelectorAll("ul a");
      const arr = [d.tarifasAereas, d.ofertasBajas, d.privacidad];
      l.forEach((a, i) => { if (arr[i] && a.lastChild) a.lastChild.textContent = ` ${arr[i]}`; });
    }
    if (cols[3]) {
      const h3 = cols[3].querySelector("h3");
      if (h3) h3.textContent = d.descargaApp;
    }
    const legLinks = document.querySelectorAll(".rt-footer__legales-links a");
    if (legLinks[0]) legLinks[0].textContent = d.privacidad;
    if (legLinks[1]) legLinks[1].textContent = d.terminos;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const labelMoneda = document.querySelector("label.moneda");
    const selectMoneda = document.getElementById("currency");
    const simboloEl = document.getElementById("moneda-simbolo");
    const chevronEl = labelMoneda ? labelMoneda.querySelector("i") : null;

    if (labelMoneda && selectMoneda && !document.getElementById("rtMonedaLista")) {
      selectMoneda.classList.add("rt-select-oculto");

      const btnActual = document.createElement("button");
      btnActual.type = "button";
      btnActual.className = "rt-moneda-actual-btn";
      btnActual.id = "rtMonedaActualBtn";
      btnActual.textContent = (selectMoneda.value || "usd").toUpperCase();

      const lista = document.createElement("ul");
      lista.className = "rt-moneda-lista";
      lista.id = "rtMonedaLista";
      lista.hidden = true;

      lista.innerHTML = OPCIONES_MONEDA.map((op) => `
        <li>
          <button type="button" class="rt-moneda-opcion" data-moneda="${op.codigo}">
            <span>${op.etiqueta}</span>
            <span>${op.simbolo}</span>
          </button>
        </li>
      `).join("");

      if (chevronEl) {
        labelMoneda.insertBefore(btnActual, chevronEl);
      } else {
        labelMoneda.appendChild(btnActual);
      }
      labelMoneda.appendChild(lista);

      const sincronizarUI = (cod) => {
        const encontrada = OPCIONES_MONEDA.find((m) => m.codigo === cod) || OPCIONES_MONEDA[0];
        btnActual.textContent = encontrada.etiqueta;
        if (simboloEl) simboloEl.textContent = encontrada.simbolo;
        lista.querySelectorAll(".rt-moneda-opcion").forEach((b) => {
          b.classList.toggle("activa", b.dataset.moneda === encontrada.codigo);
        });
      };

      btnActual.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const listaIdioma = document.getElementById("idioma-lista");
        if (listaIdioma) listaIdioma.hidden = true;
        lista.hidden = !lista.hidden;
      });

      lista.addEventListener("click", (e) => {
        const opBtn = e.target.closest(".rt-moneda-opcion");
        if (!opBtn) return;
        const nuevoCod = opBtn.dataset.moneda;
        selectMoneda.value = nuevoCod;
        selectMoneda.dispatchEvent(new Event("change", { bubbles: true }));
        sincronizarUI(nuevoCod);
        lista.hidden = true;
      });

      document.addEventListener("click", (e) => {
        if (!e.target.closest("label.moneda")) {
          lista.hidden = true;
        }
      });

      sincronizarUI((selectMoneda.value || "usd").toLowerCase());
    }

    const listaIdioma = document.getElementById("idioma-lista");
    if (listaIdioma) {
      listaIdioma.addEventListener("click", (e) => {
        const op = e.target.closest(".idioma__opcion");
        if (op && op.dataset.codigo) {
          traducirTodo(op.dataset.codigo);
        }
      });
    }

    try {
      const guard = (localStorage.getItem("rt_idioma_seleccionado") || "ES").toUpperCase();
      traducirTodo(guard);
    } catch (_) {}
  });
})();

/* ==========================================================
   TRADUCCIÓN DEL PANEL IA Y PASTILLA SUGERIDA - RASTREO.JS
   ========================================================== */
(function () {
  const TRAD_IA = {
    ES: {
      nuevoChat: "Nuevo chat",
      saludoPrefix: "¿Cuál es tu próximo destino,",
      estasEnPrefix: "Estás en",
      sug1: "Busca vuelos desde MVD para diciembre",
      sug2: "Encuentra destinos económicos desde MVD",
      sug3: "Recomiéndame un destino",
      placeholder: "Pregunta más detalles...",
      avisoIa: "Con tecnología de la IA de RuTa Tropical. La IA puede cometer errores.",
      pillSugerencia: "Vuelos a Nueva York, NY el próximo fin de semana"
    },
    EN: {
      nuevoChat: "New chat",
      saludoPrefix: "What is your next destination,",
      estasEnPrefix: "You are in",
      sug1: "Find flights from MVD for December",
      sug2: "Find budget destinations from MVD",
      sug3: "Recommend a destination",
      placeholder: "Ask for more details...",
      avisoIa: "Powered by RuTa Tropical AI. AI can make mistakes.",
      pillSugerencia: "Flights to New York, NY next weekend"
    },
    FR: {
      nuevoChat: "Nouveau chat",
      saludoPrefix: "Quelle est votre prochaine destination,",
      estasEnPrefix: "Vous êtes à",
      sug1: "Trouver des vols depuis MVD pour décembre",
      sug2: "Trouver des destinations économiques depuis MVD",
      sug3: "Recommandez-moi une destination",
      placeholder: "Posez plus de détails...",
      avisoIa: "Propulsé par l'IA de RuTa Tropical. L'IA peut faire des erreurs.",
      pillSugerencia: "Vols vers New York, NY le week-end prochain"
    },
    DE: {
      nuevoChat: "Neuer Chat",
      saludoPrefix: "Was ist dein nächstes Ziel,",
      estasEnPrefix: "Du bist in",
      sug1: "Flüge ab MVD für Dezember suchen",
      sug2: "Günstige Ziele ab MVD finden",
      sug3: "Empfiehl mir ein Reiseziel",
      placeholder: "Stelle weitere Fragen...",
      avisoIa: "Unterstützt von RuTa Tropical KI. KI kann Fehler machen.",
      pillSugerencia: "Flüge nach New York, NY nächstes Wochenende"
    },
    IT: {
      nuevoChat: "Nuova chat",
      saludoPrefix: "Qual è la tua prossima destinazione,",
      estasEnPrefix: "Ti trovi a",
      sug1: "Cerca voli da MVD per dicembre",
      sug2: "Trova destinazioni economiche da MVD",
      sug3: "Consigliami una destinazione",
      placeholder: "Chiedi maggiori dettagli...",
      avisoIa: "Basato sull'IA di RuTa Tropical. L'IA può commettere errori.",
      pillSugerencia: "Voli per New York, NY il prossimo fine settimana"
    },
    PT: {
      nuevoChat: "Novo chat",
      saludoPrefix: "Qual é o seu próximo destino,",
      estasEnPrefix: "Você está em",
      sug1: "Buscar voos de MVD para dezembro",
      sug2: "Encontrar destinos econômicos de MVD",
      sug3: "Recomende um destino",
      placeholder: "Pergunte mais detalhes...",
      avisoIa: "Com tecnologia da IA da RuTa Tropical. A IA pode cometer erros.",
      pillSugerencia: "Voos para Nova York, NY no próximo fim de semana"
    },
    ZH: {
      nuevoChat: "新聊天",
      saludoPrefix: "你的下一个目的地是哪里，",
      estasEnPrefix: "你当前在",
      sug1: "查找十二月从 MVD 出发的航班",
      sug2: "查找从 MVD 出发的经济型目的地",
      sug3: "给我推荐一个目的地",
      placeholder: "询问更多详情...",
      avisoIa: "由 RuTa Tropical AI 提供支持。AI 可能会出错。",
      pillSugerencia: "下周末飞往纽约 NY 的航班"
    },
    JA: {
      nuevoChat: "新しいチャット",
      saludoPrefix: "次の目的地はどこですか、",
      estasEnPrefix: "現在地：",
      sug1: "12月発 MVD からのフライトを検索",
      sug2: "MVD からの格安目的地を探す",
      sug3: "おすすめの目的地を教えて",
      placeholder: "さらに詳しく質問する...",
      avisoIa: "RuTa Tropical AI 搭載。AI は誤りを犯す可能性があります。",
      pillSugerencia: "来週末のニューヨーク（NY）行きフライト"
    },
    RU: {
      nuevoChat: "Новый чат",
      saludoPrefix: "Какое твоё следующее направление,",
      estasEnPrefix: "Вы находитесь в",
      sug1: "Найти рейсы из MVD на декабрь",
      sug2: "Найти бюджетные направления из MVD",
      sug3: "Посоветуй направление",
      placeholder: "Задайте уточняющий вопрос...",
      avisoIa: "На базе ИИ RuTa Tropical. ИИ может допускать ошибки.",
      pillSugerencia: "Рейсы в Нью-Йорк, NY в следующие выходные"
    },
    AR: {
      nuevoChat: "دردشة جديدة",
      saludoPrefix: "ما وجهتك القادمة،",
      estasEnPrefix: "أنت في",
      sug1: "ابحث عن رحلات من MVD لشهر ديسمبر",
      sug2: "اعثر على وجهات اقتصادية من MVD",
      sug3: "رشّح لي وجهة",
      placeholder: "اسأل عن مزيد من التفاصيل...",
      avisoIa: "مدعوم بذكاء RuTa Tropical الاصطناعي. قد يرتكب الذكاء الاصطناعي أخطاء.",
      pillSugerencia: "رحلات إلى نيويورك، NY عطلة نهاية الأسبوع القادمة"
    }
  };

  function aplicarTraduccionIa(codigo) {
    const cod = (codigo || "ES").toUpperCase();
    const t = TRAD_IA[cod] || TRAD_IA.ES;

    const tituloActual = document.getElementById("tituloChatActual");
    if (tituloActual && (!tituloActual.dataset.editado || tituloActual.textContent === "Nuevo chat" || Object.values(TRAD_IA).some(x => x.nuevoChat === tituloActual.textContent))) {
      tituloActual.textContent = t.nuevoChat;
    }

    const btnNuevoSidebar = document.getElementById("btnNuevoChatSidebar");
    if (btnNuevoSidebar) {
      const icono = btnNuevoSidebar.querySelector("i");
      btnNuevoSidebar.innerHTML = "";
      if (icono) btnNuevoSidebar.appendChild(icono);
      btnNuevoSidebar.append(` ${t.nuevoChat}`);
    }

    const saludoH2 = document.querySelector("#bloqueSaludo h2");
    if (saludoH2) {
      const textoActual = saludoH2.textContent.trim();
      const comaIdx = textoActual.lastIndexOf(",");
      const usuario = comaIdx !== -1 ? textoActual.slice(comaIdx + 1).trim() : "jeimycr9?";
      saludoH2.textContent = `${t.saludoPrefix} ${usuario}`;
    }

    const saludoP = document.querySelector("#bloqueSaludo p");
    if (saludoP) {
      const strongEl = saludoP.querySelector("strong");
      const ciudad = strongEl ? strongEl.textContent : "Montreal";
      saludoP.innerHTML = `${t.estasEnPrefix} <strong>${ciudad}</strong>`;
    }

    const sugs = document.querySelectorAll("#bloqueSugerencias .sugerencia-item");
    const textosSug = [t.sug1, t.sug2, t.sug3];
    sugs.forEach((item, idx) => {
      if (!textosSug[idx]) return;
      const icon = item.querySelector("i");
      item.innerHTML = "";
      if (icon) item.appendChild(icon);
      item.append(` ${textosSug[idx]}`);
      item.setAttribute("data-pregunta", textosSug[idx]);
    });

    const inputIa = document.getElementById("inputPreguntaIa");
    if (inputIa) {
      inputIa.placeholder = t.placeholder;
    }

    const aviso = document.querySelector("#panelChatIzquierda .contenedor-centrado-ia > div:last-child");
    if (aviso) {
      aviso.textContent = t.avisoIa;
    }

    const pillTexto = document.querySelector(".texto-ia-sugerencia");
    if (pillTexto) {
      pillTexto.setAttribute("data-text", t.pillSugerencia);
      if (pillTexto.classList.contains("terminado") || pillTexto.textContent.trim().length > 0) {
        pillTexto.textContent = t.pillSugerencia;
        pillTexto.classList.add("terminado");
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      try {
        const guard = (localStorage.getItem("rt_idioma_seleccionado") || "ES").toUpperCase();
        aplicarTraduccionIa(guard);
      } catch (_) {}
    }, 120);

    const listaIdioma = document.getElementById("idioma-lista");
    if (listaIdioma) {
      listaIdioma.addEventListener("click", (e) => {
        const op = e.target.closest(".idioma__opcion");
        if (op && op.dataset.codigo) {
          aplicarTraduccionIa(op.dataset.codigo);
        }
      });
    }
  });
})();



/* ==========================================================
   SELECTOR DE MONEDA FUNCIONAL - RASTREO.JS
   ========================================================== */
(function () {
  const TASAS_MONEDA = {
    usd: { simbolo: "$", tasa: 1, etiqueta: "USD" },
    eur: { simbolo: "€", tasa: 0.92, etiqueta: "EUR" },
    dop: { simbolo: "RD$", tasa: 60.5, etiqueta: "DOP" },
    gbp: { simbolo: "£", tasa: 0.79, etiqueta: "GBP" }
  };

  const STORAGE_MONEDA = "rt_moneda_seleccionada";

  function formatearMonto(montoUsd, codigo) {
    const config = TASAS_MONEDA[codigo] || TASAS_MONEDA.usd;
    const convertido = montoUsd * config.tasa;
    const valorFormateado = convertido.toLocaleString("en-US", {
      minimumFractionDigits: codigo === "dop" ? 0 : 2,
      maximumFractionDigits: codigo === "dop" ? 0 : 2
    });
    return `${config.simbolo}${valorFormateado}`;
  }

  function actualizarPreciosEnPagina(codigo) {
    document.querySelectorAll("[data-precio-usd]").forEach((el) => {
      const base = parseFloat(el.getAttribute("data-precio-usd"));
      if (!Number.isNaN(base)) {
        el.textContent = formatearMonto(base, codigo);
      }
    });
  }

  function aplicarMoneda(codigoNormalizado, guardar = true) {
    const codigo = TASAS_MONEDA[codigoNormalizado] ? codigoNormalizado : "usd";
    const info = TASAS_MONEDA[codigo];

    const selectMoneda = document.getElementById("currency");
    const simboloEl = document.getElementById("moneda-simbolo");

    if (selectMoneda && selectMoneda.value !== codigo) {
      selectMoneda.value = codigo;
    }
    if (simboloEl) {
      simboloEl.textContent = info.simbolo;
    }

    if (guardar) {
      try {
        localStorage.setItem(STORAGE_MONEDA, codigo);
      } catch (_) {}
    }

    actualizarPreciosEnPagina(codigo);
    document.dispatchEvent(
      new CustomEvent("rt:monedaCambiada", {
        detail: { moneda: codigo, simbolo: info.simbolo, tasa: info.tasa }
      })
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    const selectMoneda = document.getElementById("currency");
    let monedaInicial = "usd";

    try {
      const guardada = (localStorage.getItem(STORAGE_MONEDA) || "").toLowerCase();
      if (TASAS_MONEDA[guardada]) {
        monedaInicial = guardada;
      } else if (selectMoneda && TASAS_MONEDA[selectMoneda.value.toLowerCase()]) {
        monedaInicial = selectMoneda.value.toLowerCase();
      }
    } catch (_) {}

    aplicarMoneda(monedaInicial, false);

    if (selectMoneda) {
      selectMoneda.addEventListener("change", (e) => {
        aplicarMoneda((e.target.value || "usd").toLowerCase(), true);
      });
    }
  });
})();

/* ==========================================================
   4. CONTADOR Y ESTRELLAS (SI EXISTE .datos EN LA PÁGINA)
   ========================================================== */
(function () {
  const seccion = document.querySelector(".datos");
  if (!seccion) return;

  const numero = seccion.querySelector(".contador-num");
  const estrellasCont = seccion.querySelector(".estrellas");
  const estrellas = estrellasCont ? Array.from(estrellasCont.querySelectorAll("i")) : [];

  const sinAnimacion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const formato = new Intl.NumberFormat(document.documentElement.lang || "es");

  function contar(el, meta, duracion) {
    const inicio = performance.now();

    function paso(ahora) {
      const t = Math.min((ahora - inicio) / duracion, 1);
      const suave = 1 - Math.pow(1 - t, 3);
      el.textContent = formato.format(Math.round(meta * suave));
      if (t < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  }

  function encender() {
    estrellas.forEach(function (estrella, i) {
      setTimeout(function () {
        estrella.classList.add("encendida");
        setTimeout(function () { estrella.classList.add("asentada"); }, 300);
      }, i * 150);
    });
  }

  if (!sinAnimacion) {
    if (numero) numero.textContent = formato.format(0);
    if (estrellasCont) estrellasCont.classList.add("preparado");
  }

  function lanzar() {
    if (sinAnimacion) return;
    if (numero) contar(numero, Number(numero.dataset.meta), 1800);
    if (estrellasCont) encender();
  }

  if ("IntersectionObserver" in window && !sinAnimacion) {
    const observador = new IntersectionObserver(function (entradas, obs) {
      if (entradas[0].isIntersecting) {
        lanzar();
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    observador.observe(seccion);
  } else if (!sinAnimacion) {
    lanzar();
  }
})();

/* ==========================================================
   SINCRONIZACIÓN DE CUENTAS, "AÑADIR USUARIO" Y MONEDA
   ========================================================== */
(function () {
  // Ajusta esta ruta si tu página de registro/login está en otra carpeta
  const RUTA_REGISTRO = "login.html";

  /* 1. Rellenar usuarios en #rtPerfilCuentasLista si está vacío */
  function esFoto(v) {
    if (!v || typeof v !== "string") return false;
    const s = v.trim();
    return s.startsWith("data:image/") || s.startsWith("http://") || s.startsWith("https://") || s.startsWith("/") || s.startsWith(".") || /\.(png|jpe?g|webp|gif)(\?.*)?$/i.test(s);
  }

  function leerCuentasDeStorage() {
    const lista = [];
    const vistas = new Set();
    let fotoGlobal = "";

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const raw = localStorage.getItem(localStorage.key(i));
        if (!raw) continue;
        if (esFoto(raw) && !fotoGlobal) fotoGlobal = raw.trim();
        try {
          const data = JSON.parse(raw);
          const arr = Array.isArray(data) ? data : (data && typeof data === "object" ? [data] : []);
          for (const item of arr) {
            if (!item || typeof item !== "object") continue;
            const nombre = (item.nombre || item.name || item.usuario || "").toString().trim();
            const correo = (item.correo || item.email || item.mail || "").toString().trim();
            const foto = [item.foto, item.avatar, item.fotoPerfil, item.imagen].find(esFoto) || "";
            if (foto && !fotoGlobal) fotoGlobal = foto.trim();
            if (nombre || correo) {
              const key = (correo || nombre).toLowerCase();
              if (!vistas.has(key)) {
                vistas.add(key);
                lista.push({
                  nombre: nombre || correo.split("@")[0],
                  correo: correo || "cuenta@rutatropical.com",
                  foto: foto ? foto.trim() : ""
                });
              }
            }
          }
        } catch (_) {}
      }
    } catch (_) {}

    if (!lista.length) {
      return [
        { nombre: "Mari", correo: "rimurutd44@gmail.com", foto: fotoGlobal },
        { nombre: "Jeimy", correo: "rutatropical@cuenta.com", foto: "" }
      ];
    }
    if (fotoGlobal && !lista.some(c => c.foto)) lista[0].foto = fotoGlobal;
    return lista;
  }

  function poblarListaCuentas() {
    const cont = document.getElementById("rtPerfilCuentasLista");
    if (!cont) return;
    const cuentas = leerCuentasDeStorage();
    let actual = "";
    try {
      const rawAct = localStorage.getItem("rt_cuenta_actual_v1") || localStorage.getItem("usuarioActual") || "";
      try {
        const obj = JSON.parse(rawAct);
        actual = (obj && (obj.correo || obj.email || obj.nombre)) || rawAct;
      } catch (_) {
        actual = rawAct;
      }
    } catch (_) {}

    if (!actual && cuentas[0]) actual = cuentas[0].correo;

    cont.innerHTML = cuentas.map(function (c) {
      const inicial = (c.nombre || "U").trim().charAt(0).toUpperCase();
      const avatar = c.foto
        ? `<img src="${c.foto.replace(/"/g, "&quot;")}" alt="${c.nombre.replace(/"/g, "&quot;")}" style="width:34px;height:34px;border-radius:50%;object-fit:cover;">`
        : `<span style="width:34px;height:34px;border-radius:50%;background:#17a1cf;color:#fff;font-weight:700;display:inline-flex;align-items:center;justify-content:center;">${inicial}</span>`;
      const activa = actual && (c.correo.toLowerCase() === actual.toLowerCase() || c.nombre.toLowerCase() === actual.toLowerCase());
      return `
        <button type="button" class="rt-perfil-cuenta-item" data-correo="${c.correo.replace(/"/g, "&quot;")}" style="width:100%;border:0;background:${activa ? "#e6f4f9" : "#f8fafc"};border-radius:12px;padding:8px 10px;display:flex;align-items:center;gap:10px;cursor:pointer;text-align:left;margin-bottom:6px;">
          ${avatar}
          <span style="display:flex;flex-direction:column;min-width:0;line-height:1.25;">
            <strong style="font-size:0.9rem;color:#0f172a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.nombre}</strong>
            <span style="font-size:0.76rem;color:#64748b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.correo}</span>
          </span>
          ${activa ? '<i class="fa-solid fa-check" style="margin-left:auto;color:#17a1cf;"></i>' : ""}
        </button>
      `;
    }).join("");

    // Actualizar botón principal J o foto
    const elegida = cuentas.find(c => c.correo.toLowerCase() === (actual || "").toLowerCase()) || cuentas[0];
    const btn = document.getElementById("rtPerfilBtn");
    const spanIni = document.getElementById("rtPerfilInicialBtn");
    if (btn && elegida) {
      if (spanIni) spanIni.textContent = (elegida.nombre || "J").trim().charAt(0).toUpperCase();
      let fotoImg = document.getElementById("rtPerfilFotoBtn");
      if (elegida.foto) {
        if (!fotoImg) {
          fotoImg = document.createElement("img");
          fotoImg.id = "rtPerfilFotoBtn";
          fotoImg.alt = "Foto de perfil";
          fotoImg.style.cssText = "width:100%;height:100%;object-fit:cover;border-radius:50%;";
          btn.prepend(fotoImg);
        }
        fotoImg.src = elegida.foto;
        fotoImg.style.display = "block";
        if (spanIni) spanIni.style.display = "none";
      }
    }
  }

  document.addEventListener("click", function (e) {
    // Al abrir el menú de perfil, llenar cuentas si está vacío
    if (e.target.closest("#rtPerfilBtn")) {
      setTimeout(poblarListaCuentas, 0);
    }

    // Seleccionar cuenta de la lista
    const item = e.target.closest(".rt-perfil-cuenta-item[data-correo]");
    if (item) {
      const correo = item.getAttribute("data-correo");
      try {
        localStorage.setItem("rt_cuenta_actual_v1", correo);
        localStorage.setItem("rt_sesion_estado_v2", "activa");
        localStorage.setItem("rt_sesion_iniciada_v1", "true");
      } catch (_) {}
      poblarListaCuentas();
      return;
    }

    // 2. "Añadir usuario" -> ir directo a registrarse
    if (e.target.closest("#rtPerfilAnadirBtn")) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = RUTA_REGISTRO;
      return;
    }

    // 3. Hacer que el clic en cualquier parte de la píldora .moneda abra el <select id="currency">
    const labelMoneda = e.target.closest(".moneda");
    const selectMoneda = document.getElementById("currency");
    if (labelMoneda && selectMoneda && e.target !== selectMoneda) {
      e.preventDefault();
      selectMoneda.focus();
      if (typeof selectMoneda.showPicker === "function") {
        try { selectMoneda.showPicker(); } catch (_) { selectMoneda.click(); }
      } else {
        selectMoneda.click();
      }
    }
  });

  poblarListaCuentas();

  // =========================================================
// APERTURA SEGURA DEL MENÚ DE PERFIL EN RASTREO
// =========================================================
(function menuPerfilRastreo() {
  const SESSION_KEY = "rt_usuario_activo";
  const SESSIONS_LIST_KEY = "rt_sesiones_activas";
  const LOGIN_URL = "../pagina principal/login.html";

  function leerJson(clave, fallback) {
    try {
      const raw = localStorage.getItem(clave);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function obtenerMenu() {
    let menu = document.getElementById("rtPerfilMenuFlotanteRastreo");
    if (!menu) {
      menu = document.createElement("div");
      menu.id = "rtPerfilMenuFlotanteRastreo";
      menu.setAttribute("role", "menu");
      document.body.appendChild(menu);
    }

    const sesionActiva = leerJson(SESSION_KEY, null);
    let sesiones = leerJson(SESSIONS_LIST_KEY, []);
    if (!Array.isArray(sesiones)) sesiones = [];
    if (sesionActiva?.correo && !sesiones.some((s) => s.correo === sesionActiva.correo)) {
      sesiones = [sesionActiva, ...sesiones];
    }

    const cuentasHtml = sesiones
      .map((c) => {
        const nom = c.nombre || (c.correo ? c.correo.split("@")[0] : "Usuario");
        const cor = c.correo || "";
        const ini = nom.trim().charAt(0).toUpperCase() || "J";
        const activa = sesionActiva?.correo === cor;
        return `
          <button type="button" class="rt-mfl-r-cuenta" data-correo="${cor}" style="width:100%;display:flex;align-items:center;gap:10px;padding:9px 10px;border:none;border-radius:12px;background:${activa ? "rgba(23,161,207,0.12)" : "transparent"};cursor:pointer;text-align:left;">
            <span style="width:36px;height:36px;border-radius:50%;background:#17A1CF;color:#fff;font-weight:700;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;">${ini}</span>
            <span style="display:flex;flex-direction:column;min-width:0;flex:1;">
              <strong style="font-size:0.88rem;color:#0F172A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${nom}</strong>
              <small style="font-size:0.76rem;color:#64748B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${cor}</small>
            </span>
          </button>
        `;
      })
      .join("");

    menu.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:4px;max-height:200px;overflow-y:auto;">${cuentasHtml}</div>
      <button type="button" id="rtMflRAnadir" style="width:100%;margin-top:8px;padding:9px 12px;border-radius:11px;border:1.5px dashed #81BAC2;background:#fff;color:#0F172A;font-weight:700;font-size:0.86rem;cursor:pointer;text-align:left;">+ Añadir usuario</button>
      <div style="height:1px;background:#E2E8F0;margin:8px 0;"></div>
      <a href="../viajes/viajes.html" style="display:block;padding:8px 10px;border-radius:9px;color:#0F172A;text-decoration:none;font-size:0.88rem;font-weight:600;">Trips</a>
      <a href="../ayuda/ayuda.html" style="display:block;padding:8px 10px;border-radius:9px;color:#0F172A;text-decoration:none;font-size:0.88rem;font-weight:600;">Ayuda/Preguntas frecuentes</a>
      <a href="../pagina principal/perfil-usuario.html" style="display:block;padding:8px 10px;border-radius:9px;color:#0F172A;text-decoration:none;font-size:0.88rem;font-weight:600;">Tu cuenta</a>
      <button type="button" id="rtMflRSalir" style="width:100%;margin-top:8px;height:38px;border-radius:11px;border:1.5px solid #E2837D;background:#fff;color:#DD4350;font-weight:800;font-size:0.86rem;cursor:pointer;">Cerrar sesión</button>
    `;

    menu.querySelectorAll(".rt-mfl-r-cuenta").forEach((btnC) => {
      btnC.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const cor = btnC.getAttribute("data-correo");
        const elegida = sesiones.find((s) => s.correo === cor);
        if (elegida) {
          localStorage.setItem(SESSION_KEY, JSON.stringify(elegida));
          location.reload();
        }
      });
    });

    menu.querySelector("#rtMflRAnadir")?.addEventListener("click", (ev) => {
      ev.stopPropagation();
      window.location.href = LOGIN_URL;
    });

    menu.querySelector("#rtMflRSalir")?.addEventListener("click", (ev) => {
      ev.stopPropagation();
      localStorage.removeItem(SESSION_KEY);
      window.location.href = LOGIN_URL;
    });

    return menu;
  }

  function abrirMenu(menu, ancla) {
    const rect = ancla.getBoundingClientRect();
    menu.style.cssText = `
      position: fixed !important;
      top: ${Math.round(rect.bottom + 8)}px !important;
      right: ${Math.max(8, Math.round(window.innerWidth - rect.right))}px !important;
      left: auto !important;
      width: 300px !important;
      background: #F9FAFB !important;
      border: 2px solid #81BAC2 !important;
      border-radius: 18px !important;
      padding: 12px !important;
      box-shadow: 0 20px 44px rgba(15, 23, 42, 0.22) !important;
      display: block !important;
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
      z-index: 2147483647 !important;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
    `;
    menu.dataset.abierto = "1";
  }

  function cerrarMenu(menu) {
    if (!menu) return;
    menu.style.setProperty("display", "none", "important");
    menu.dataset.abierto = "0";
  }

  document.addEventListener(
    "click",
    function (e) {
      const box = e.target.closest("#rtPerfilBox, .rt-perfil-box");
      const menu = document.getElementById("rtPerfilMenuFlotanteRastreo");

      if (box) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        const inst = obtenerMenu();
        if (inst.dataset.abierto === "1") {
          cerrarMenu(inst);
        } else {
          abrirMenu(inst, box);
        }
        return;
      }

      if (menu && !menu.contains(e.target)) {
        cerrarMenu(menu);
      }
    },
    true
  );
})();

document.addEventListener("click", function (e) {
  const trigger = e.target.closest("#btnUsaIaRastreo, .rt-btn-usa-ia, .btn-ia-top");
  if (!trigger) return;

  e.preventDefault();
  e.stopPropagation();

  const abrir = () => {
    const panel = document.getElementById("panelChatIzquierda");
    const input = document.getElementById("inputPreguntaIa");
    if (!panel) return false;

    panel.classList.add("activo");
    panel.classList.remove("expandido");
    if (input) {
      setTimeout(() => input.focus(), 120);
    }
    return true;
  };

  if (!abrir()) {
    setTimeout(abrir, 120);
  }
}, true);

})();