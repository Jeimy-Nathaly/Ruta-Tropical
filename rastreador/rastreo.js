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
    ["es", "Español", "es"],
    ["en", "English", "us"],
    ["fr", "Français", "fr"],
    ["de", "Deutsch", "de"],
    ["it", "Italiano", "it"],
    ["pt", "Português", "pt"],
    ["nl", "Nederlands", "nl"],
    ["ru", "Русский", "ru"],
    ["zh", "中文", "cn"],
    ["ja", "日本語", "jp"],
    ["ko", "한국어", "kr"],
    ["ar", "العربية", "sa"],
    ["hi", "हिन्दी", "in"],
    ["bn", "বাংলা", "bd"],
    ["ur", "اردو", "pk"],
    ["fa", "فارسی", "ir"],
    ["tr", "Türkçe", "tr"],
    ["he", "עברית", "il"],
    ["pl", "Polski", "pl"],
    ["uk", "Українська", "ua"],
    ["cs", "Čeština", "cz"],
    ["sk", "Slovenčina", "sk"],
    ["hu", "Magyar", "hu"],
    ["ro", "Română", "ro"],
    ["bg", "Български", "bg"],
    ["el", "Ελληνικά", "gr"],
    ["sr", "Српски", "rs"],
    ["hr", "Hrvatski", "hr"],
    ["sl", "Slovenščina", "si"],
    ["sv", "Svenska", "se"],
    ["no", "Norsk", "no"],
    ["da", "Dansk", "dk"],
    ["fi", "Suomi", "fi"],
    ["is", "Íslenska", "is"],
    ["et", "Eesti", "ee"],
    ["lv", "Latviešu", "lv"],
    ["lt", "Lietuvių", "lt"],
    ["th", "ไทย", "th"],
    ["vi", "Tiếng Việt", "vn"],
    ["id", "Bahasa Indonesia", "id"],
    ["ms", "Bahasa Melayu", "my"],
    ["tl", "Filipino", "ph"],
    ["sw", "Kiswahili", "ke"],
    ["ga", "Gaeilge", "ie"]
  ];

  const TRADUCCIONES = {
    es: {
      titulo: "Rastreador",
      tabVuelo: "N.° de vuelo",
      tabAeropuerto: "Aeropuerto",
      aerolinea: "Aerolínea",
      numVuelo: "Número de vuelo",
      aeropuertoReq: "Aeropuerto (obligatorio)",
      aerolineaOpc: "Aerolínea (opcional)",
      buscar: "Rastrear vuelo",
      horarios: [
        "Mañana 6:00 a.m. a 12:00 p.m.",
        "Tarde 12:00 p.m. a 6:00 p.m.",
        "Noche 6:00 p.m. a 12:00 a.m.",
        "Madrugada 12:00 a.m. a 6:00 a.m."
      ]
    },
    en: {
      titulo: "Flight Tracker",
      tabVuelo: "Flight No.",
      tabAeropuerto: "Airport",
      aerolinea: "Airline",
      numVuelo: "Flight number",
      aeropuertoReq: "Airport (required)",
      aerolineaOpc: "Airline (optional)",
      buscar: "Track flight",
      horarios: [
        "Morning 6:00 a.m. to 12:00 p.m.",
        "Afternoon 12:00 p.m. to 6:00 p.m.",
        "Evening 6:00 p.m. to 12:00 a.m.",
        "Night 12:00 a.m. to 6:00 a.m."
      ]
    },
    fr: {
      titulo: "Suivi des vols",
      tabVuelo: "N° de vol",
      tabAeropuerto: "Aéroport",
      aerolinea: "Compagnie aérienne",
      numVuelo: "Numéro de vol",
      aeropuertoReq: "Aéroport (obligatoire)",
      aerolineaOpc: "Compagnie aérienne (facultatif)",
      buscar: "Suivre le vol",
      horarios: [
        "Matin 6h00 à 12h00",
        "Après-midi 12h00 à 18h00",
        "Soirée 18h00 à 00h00",
        "Nuit 00h00 à 6h00"
      ]
    },
    pt: {
      titulo: "Rastreador de voos",
      tabVuelo: "N.º do voo",
      tabAeropuerto: "Aeroporto",
      aerolinea: "Companhia aérea",
      numVuelo: "Número do voo",
      aeropuertoReq: "Aeroporto (obrigatório)",
      aerolineaOpc: "Companhia aérea (opcional)",
      buscar: "Rastrear voo",
      horarios: [
        "Manhã 6h00 às 12h00",
        "Tarde 12h00 às 18h00",
        "Noite 18h00 às 00h00",
        "Madrugada 00h00 às 6h00"
      ]
    }
  };

  function traducirPagina(cod) {
    const t = TRADUCCIONES[cod] || TRADUCCIONES.es;
    const h1 = document.querySelector("main h1");
    if (h1) h1.textContent = t.titulo;

    const tabs = document.querySelectorAll(".tabs .tab");
    if (tabs[0]) tabs[0].textContent = t.tabVuelo;
    if (tabs[1]) tabs[1].textContent = t.tabAeropuerto;

    const formVuelo = document.getElementById("form-vuelo");
    if (formVuelo) {
      const inputs = formVuelo.querySelectorAll('input[type="text"]');
      if (inputs[0]) inputs[0].placeholder = t.aerolinea;
      if (inputs[1]) inputs[1].placeholder = t.numVuelo;
      const btn = formVuelo.querySelector("button.buscar");
      if (btn) btn.textContent = t.buscar;
    }

    const formAero = document.getElementById("form-aeropuerto");
    if (formAero) {
      const inputs = formAero.querySelectorAll('input[type="text"]');
      if (inputs[0]) inputs[0].placeholder = t.aeropuertoReq;
      if (inputs[1]) inputs[1].placeholder = t.aerolineaOpc;
      const btn = formAero.querySelector("button.buscar");
      if (btn) btn.textContent = t.buscar;

      const selectHora = formAero.querySelector("select");
      if (selectHora && t.horarios) {
        Array.from(selectHora.options).forEach(function (opt, idx) {
          if (t.horarios[idx]) opt.textContent = t.horarios[idx];
        });
      }
    }
  }

  const contenedor = document.getElementById("idioma");
  const boton = document.getElementById("idioma-boton");
  const lista = document.getElementById("idioma-lista");
  const bandera = document.getElementById("idioma-bandera");
  const codigo = document.getElementById("idioma-codigo");
  if (!contenedor || !boton || !lista || !bandera || !codigo) return;

  const url = function (pais) { return "https://flagcdn.com/w40/" + pais + ".png"; };

  let actual = "es";
  try { actual = localStorage.getItem("idioma") || "es"; } catch (_) {}
  if (!IDIOMAS.some(function (i) { return i[0] === actual; })) actual = "es";

  lista.innerHTML = "";
  IDIOMAS.forEach(function (i) {
    const li = document.createElement("li");
    li.setAttribute("role", "option");
    li.dataset.codigo = i[0];
    li.tabIndex = -1;
    li.innerHTML =
      '<img src="' + url(i[2]) + '" alt="" width="28" height="19" loading="lazy">' +
      "<span>" + i[1] + "</span><small>" + i[0].toUpperCase() + "</small>";
    lista.appendChild(li);
  });

  function items() { return Array.from(lista.children); }

  function elegir(cod) {
    const datos = IDIOMAS.find(function (i) { return i[0] === cod; });
    if (!datos) return;
    actual = cod;
    bandera.src = url(datos[2]);
    codigo.textContent = cod.toUpperCase();
    document.documentElement.lang = cod;
    try { localStorage.setItem("idioma", cod); } catch (_) {}

    items().forEach(function (li) {
      li.setAttribute("aria-selected", String(li.dataset.codigo === cod));
    });

    traducirPagina(cod);
    document.dispatchEvent(new CustomEvent("idioma:cambio", { detail: { idioma: cod } }));
  }

  function abrir() {
    lista.hidden = false;
    boton.setAttribute("aria-expanded", "true");
    const sel = items().find(function (li) { return li.dataset.codigo === actual; });
    if (sel) { enfocar(sel); sel.scrollIntoView({ block: "center" }); }
  }

  function cerrar() {
    lista.hidden = true;
    boton.setAttribute("aria-expanded", "false");
    items().forEach(function (li) { li.classList.remove("enfocado"); });
  }

  function enfocar(li) {
    items().forEach(function (x) { x.classList.remove("enfocado"); });
    li.classList.add("enfocado");
    li.scrollIntoView({ block: "nearest" });
  }

  boton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (lista.hidden) abrir();
    else cerrar();
  });

  lista.addEventListener("click", function (e) {
    const li = e.target.closest("li");
    if (!li) return;
    e.preventDefault();
    e.stopPropagation();
    elegir(li.dataset.codigo);
    cerrar();
    boton.focus();
  });

  contenedor.addEventListener("keydown", function (e) {
    const todos = items();
    let idx = todos.findIndex(function (li) { return li.classList.contains("enfocado"); });

    if (e.key === "Escape" && !lista.hidden) { cerrar(); boton.focus(); return; }

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (lista.hidden) { abrir(); return; }
      idx = e.key === "ArrowDown" ? Math.min(idx + 1, todos.length - 1) : Math.max(idx - 1, 0);
      enfocar(todos[idx]);
    }

    if (e.key === "Enter" && !lista.hidden && idx >= 0) {
      e.preventDefault();
      elegir(todos[idx].dataset.codigo);
      cerrar();
      boton.focus();
    }
  });

  document.addEventListener("click", function (e) {
    if (!lista.hidden && !contenedor.contains(e.target)) cerrar();
  });

  elegir(actual);
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
})();