(function () {
  // =========================================================
  // SECCIÓN 1: CONSTANTES Y UTILIDADES DE ALMACENAMIENTO
  // =========================================================
  const SESSION_KEY = "rt_usuario_activo";
  const SESSIONS_LIST_KEY = "rt_sesiones_activas";
  const DB_KEY = "rt_usuarios_db";
  const META_KEY = "rt_perfil_meta";
  const LOGIN_URL = "login.html";

  function leerJson(clave, fallback) {
    try {
      const raw = localStorage.getItem(clave);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function obtenerSesionValida() {
    const activa = leerJson(SESSION_KEY, null);
    if (activa && (activa.nombre || activa.correo)) return activa;

    const sesiones = leerJson(SESSIONS_LIST_KEY, []);
    if (Array.isArray(sesiones) && sesiones.length > 0) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(sesiones[0]));
      return sesiones[0];
    }

    const db = leerJson(DB_KEY, []);
    if (Array.isArray(db) && db.length > 0) {
      const ultima = db[db.length - 1];
      localStorage.setItem(SESSION_KEY, JSON.stringify(ultima));
      return ultima;
    }

    return null;
  }

  function guardarCuentaActiva(cuentaActualizada) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(cuentaActualizada));

    const sesiones = leerJson(SESSIONS_LIST_KEY, []);
    if (Array.isArray(sesiones)) {
      const idx = sesiones.findIndex((c) => c.correo && c.correo === cuentaActualizada.correo);
      if (idx !== -1) {
        sesiones[idx] = { ...sesiones[idx], ...cuentaActualizada };
        localStorage.setItem(SESSIONS_LIST_KEY, JSON.stringify(sesiones));
      }
    }

    const db = leerJson(DB_KEY, []);
    if (Array.isArray(db)) {
      const idxDb = db.findIndex((c) => c.correo && c.correo === cuentaActualizada.correo);
      if (idxDb !== -1) {
        db[idxDb] = { ...db[idxDb], ...cuentaActualizada };
        localStorage.setItem(DB_KEY, JSON.stringify(db));
      }
    }
  }

  // =========================================================
  // SECCIÓN 2: AVATARES (GRANDE, SUPERIOR Y MINIATURAS)
  // =========================================================
function pintarAvatarGrande(el, cuenta) {
    if (!el) return;
    const base = (cuenta.nombre || cuenta.correo || "J").trim();
    const inicial = base.charAt(0).toUpperCase() || "J";
    if (cuenta.foto) {
      el.innerHTML = `<img src="${cuenta.foto}" alt="${base}" referrerpolicy="no-referrer" />`;
      el.querySelector("img")?.addEventListener("error", () => {
        el.textContent = inicial;
      });
    } else {
      el.textContent = inicial;
    }
  }

  function pintarAvatarSuperior(cuenta) {
    const btnPerfil = document.getElementById("rtPerfilBtn");
    const spanInicial = document.getElementById("rtPerfilInicialBtn");
    if (!btnPerfil) return;

    const base = (cuenta.nombre || cuenta.correo || "J").trim();
    const inicial = base.charAt(0).toUpperCase() || "J";

    if (cuenta.foto) {
      btnPerfil.innerHTML = `<img src="${cuenta.foto}" alt="${base}" referrerpolicy="no-referrer" style="width:42px;height:42px;max-width:42px;max-height:42px;object-fit:cover;border-radius:50%;display:block;" />`;
      btnPerfil.querySelector("img")?.addEventListener("error", () => {
        btnPerfil.innerHTML = `<span class="rt-perfil-inicial" id="rtPerfilInicialBtn">${inicial}</span>`;
      });
    } else if (spanInicial) {
      spanInicial.textContent = inicial;
    } else {
      btnPerfil.innerHTML = `<span class="rt-perfil-inicial" id="rtPerfilInicialBtn">${inicial}</span>`;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const sesion = obtenerSesionValida();
    if (!sesion) {
      window.location.href = LOGIN_URL;
      return;
    }

    const defaultMeta = {
      origen: "Montreal, QC, Canadá - Todos los aeropuertos",
      origenChip: "Montreal (YMQ)",
      aeropuertosSec: [],
      aerolineasPref: [],
      aerolineasOmitir: [],
      hotelesPref: [],
      hotelesOmitir: [],
      lugaresGuardados: [],
      moneda: "USD",
      clase: "económica",
      alertas: true,
      alias: "",
      region: "Uruguay",
      redes: { apple: false, google: true },
      remitentes: [],
      compartir: [],
      feedUrl: "https://rutatropical.com/trips/ical/uf/0CDLeoy_xxA/TYUGNXC1/calendar.ics",
      privacidad: { grupo: true, sociosViaje: true, sociosComerciales: true },
      pasajeroPrincipal: {
        nombre: "",
        segundoNombre: "",
        apellidos: "",
        fechaNacimiento: "",
        sexo: "",
        movil: "",
        dhs: "",
        ktn: ""
      },
      companeros: [],
      tarjetas: [],
      alertasPrecios: [],
      notifToggles: {
        consejos: false,
        ofertas: false,
        escapadas: false,
        reembolsos: true,
        opinion: true,
        recomendaciones: false,
        preciosTiempoReal: false,
        tripsGeneral: true,
        tripsEmail: true
      },
      notifChecks: { recPersonalizadas: [], preciosReal: [] }
    };

    const meta = { ...defaultMeta, ...leerJson(META_KEY, {}) };
    meta.redes = { ...defaultMeta.redes, ...(meta.redes || {}) };
    meta.privacidad = { ...defaultMeta.privacidad, ...(meta.privacidad || {}) };
    meta.pasajeroPrincipal = { ...defaultMeta.pasajeroPrincipal, ...(meta.pasajeroPrincipal || {}) };
    meta.notifToggles = { ...defaultMeta.notifToggles, ...(meta.notifToggles || {}) };
    meta.notifChecks = { ...defaultMeta.notifChecks, ...(meta.notifChecks || {}) };

    function guardarMeta() {
      localStorage.setItem(META_KEY, JSON.stringify(meta));
    }

    const nombre = sesion.nombre || (sesion.correo ? sesion.correo.split("@")[0] : "Usuario");
    const correo = sesion.correo || "correo@ejemplo.com";
    const fotoActual = sesion.foto || localStorage.getItem("rt_avatar_foto") || "";
    let cuentaActiva = { ...sesion, nombre, correo, foto: fotoActual };

    if (!meta.pasajeroPrincipal.nombre) {
      meta.pasajeroPrincipal.nombre = nombre;
      guardarMeta();
    }

    const emailHero = document.getElementById("rtCuentaEmailHero");
    const origenHero = document.getElementById("rtCuentaOrigenHero");
    const avatarGrande = document.getElementById("rtAvatarGrandeCuenta");
    const viajeroMini = document.getElementById("rtViajeroAvatarMini");
    const viajeroCorreo = document.getElementById("rtViajeroCorreoPrincipal");
    const notifCorreoDestino = document.getElementById("rtNotifCorreoDestino");
    const notifTripsCorreo = document.getElementById("rtNotifTripsCorreo");

    function sincronizarCorreoEnVistas(nuevoCorreo) {
      if (emailHero) emailHero.textContent = nuevoCorreo;
      if (viajeroCorreo) viajeroCorreo.textContent = nuevoCorreo;
      if (notifCorreoDestino) notifCorreoDestino.textContent = nuevoCorreo;
      if (notifTripsCorreo) notifTripsCorreo.textContent = nuevoCorreo;
      const remitentePrincipal = document.getElementById("rtRemitentePrincipal");
      if (remitentePrincipal) remitentePrincipal.textContent = `${nuevoCorreo} (tú)`;
    }

    sincronizarCorreoEnVistas(correo);
    if (origenHero) origenHero.textContent = meta.origen;
    pintarAvatarGrande(avatarGrande, cuentaActiva);
    pintarAvatarSuperior(cuentaActiva);
    if (viajeroMini) pintarAvatarGrande(viajeroMini, cuentaActiva);

    // =========================================================
    // SECCIÓN 3: MENÚ DESPLEGABLE DE PERFIL SUPERIOR
    // =========================================================
    const perfilBox = document.getElementById("rtPerfilBox");
    const perfilBtn = document.getElementById("rtPerfilBtn");
    const perfilMenu = document.getElementById("rtPerfilMenu");

    if (perfilBox && perfilBtn && perfilMenu) {
      perfilBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        document.getElementById("rtIdiomaBox")?.classList.remove("abierto");
        document.getElementById("rtIdiomaMenu")?.classList.remove("abierto");

        const abierto = perfilBox.classList.toggle("abierto");
        perfilMenu.classList.toggle("abierto", abierto);
        perfilBtn.setAttribute("aria-expanded", String(abierto));
        perfilMenu.setAttribute("aria-hidden", String(!abierto));
      });

      document.addEventListener("click", function (e) {
        if (!perfilBox.contains(e.target) && !perfilMenu.contains(e.target)) {
          perfilBox.classList.remove("abierto");
          perfilMenu.classList.remove("abierto");
          perfilBtn.setAttribute("aria-expanded", "false");
          perfilMenu.setAttribute("aria-hidden", "true");
        }
      });
    }

    function renderizarCuentasDesplegable() {
      const listaContenedor = document.getElementById("rtPerfilCuentasLista");
      if (!listaContenedor) return;

      const actual = obtenerSesionValida();
      let sesiones = leerJson(SESSIONS_LIST_KEY, []);
      if (!Array.isArray(sesiones)) sesiones = [];

      if (actual && actual.correo) {
        const existe = sesiones.some((s) => s.correo === actual.correo);
        sesiones = existe
          ? sesiones.map((s) => (s.correo === actual.correo ? { ...s, ...actual } : s))
          : [actual, ...sesiones];
        localStorage.setItem(SESSIONS_LIST_KEY, JSON.stringify(sesiones));
      }

      listaContenedor.innerHTML = "";

      sesiones.forEach((cuenta) => {
        const nombreCuenta = cuenta.nombre || (cuenta.correo ? cuenta.correo.split("@")[0] : "Usuario");
        const correoCuenta = cuenta.correo || "";
        const inicialCuenta = nombreCuenta.trim().charAt(0).toUpperCase() || "J";
        const fotoCuenta = cuenta.foto || (actual?.correo === correoCuenta ? localStorage.getItem("rt_avatar_foto") || "" : "");
        const esActiva = actual?.correo === correoCuenta;

        const item = document.createElement("button");
        item.type = "button";
        item.className = `rt-perfil-cuenta-item${esActiva ? " activa" : ""}`;
        item.setAttribute("role", "menuitem");
        item.style.cssText =
          "width:100%;display:flex;align-items:center;gap:12px;padding:10px 12px;border:none;border-radius:12px;background:" +
          (esActiva ? "rgba(23,161,207,0.1)" : "transparent") +
          ";cursor:pointer;text-align:left;margin-bottom:6px;";

        const avatarHtml = fotoCuenta
          ? `<img src="${fotoCuenta}" alt="${nombreCuenta}" referrerpolicy="no-referrer" style="width:40px;height:40px;border-radius:50%;object-fit:cover;flex-shrink:0;border:2px solid #81BAC2;" />`
          : `<span style="width:40px;height:40px;border-radius:50%;background:#17A1CF;color:#FFFFFF;font-weight:700;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;">${inicialCuenta}</span>`;

        item.innerHTML = `
          ${avatarHtml}
          <span style="display:flex;flex-direction:column;min-width:0;flex:1;">
            <strong style="font-size:0.92rem;color:#0F172A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${nombreCuenta}</strong>
            <small style="font-size:0.78rem;color:#64748B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${correoCuenta}</small>
          </span>
          ${esActiva ? '<i class="fa-solid fa-check" style="color:#17A1CF;font-size:0.85rem;"></i>' : ""}
        `;

        item.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          localStorage.setItem(SESSION_KEY, JSON.stringify({ ...cuenta, nombre: nombreCuenta, foto: fotoCuenta }));
          location.reload();
        });

        listaContenedor.appendChild(item);
      });
    }

    renderizarCuentasDesplegable();

    document.getElementById("rtPerfilAnadirBtn")?.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = LOGIN_URL;
    });

    document.getElementById("rtPerfilSalirBtn")?.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem(SESSION_KEY);
      window.location.href = LOGIN_URL;
    });

    

    // =========================================================
    // SECCIÓN 4: CABECERA DEL PERFIL Y PESTAÑAS
    // =========================================================
    const btnEditarOrigen = document.getElementById("rtBtnEditarOrigen");
    const editorOrigen = document.getElementById("rtEditorOrigen");
    const inputOrigen = document.getElementById("rtInputOrigen");
    const btnGuardarOrigen = document.getElementById("rtBtnGuardarOrigen");

    btnEditarOrigen?.addEventListener("click", () => {
      if (!editorOrigen || !inputOrigen) return;
      editorOrigen.classList.toggle("oculto");
      inputOrigen.value = origenHero ? origenHero.textContent : meta.origen;
      inputOrigen.focus();
    });

    btnGuardarOrigen?.addEventListener("click", () => {
      const nuevoOrigen = (inputOrigen?.value || "").trim();
      if (!nuevoOrigen) return;
      meta.origen = nuevoOrigen;
      meta.origenChip = nuevoOrigen;
      guardarMeta();
      if (origenHero) origenHero.textContent = nuevoOrigen;
      renderizarOrigenChip();
      editorOrigen?.classList.add("oculto");
    });

    const btnFoto = document.getElementById("rtBtnFotoCuenta");
    const inputFoto = document.getElementById("rtInputFotoCuenta");

    btnFoto?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      inputFoto?.click();
    });

    inputFoto?.addEventListener("change", () => {
      const archivo = inputFoto.files?.[0];
      if (!archivo) return;
      const lector = new FileReader();
      lector.onload = () => {
        const nuevaFoto = String(lector.result || "");
        try { localStorage.setItem("rt_avatar_foto", nuevaFoto); } catch {}
        cuentaActiva = { ...cuentaActiva, foto: nuevaFoto };
        guardarCuentaActiva(cuentaActiva);
        pintarAvatarGrande(avatarGrande, cuentaActiva);
        pintarAvatarSuperior(cuentaActiva);
        if (viajeroMini) pintarAvatarGrande(viajeroMini, cuentaActiva);
        renderizarCuentasDesplegable();
      };
      lector.readAsDataURL(archivo);
    });

    const tabs = document.querySelectorAll(".rt-cuenta-tab");
    const paneles = document.querySelectorAll(".rt-cuenta-panel");

    function activarPestana(objetivo) {
      if (!objetivo) return;
      tabs.forEach((t) => {
        const activa = t.getAttribute("data-pestana") === objetivo;
        t.classList.toggle("activa", activa);
        t.setAttribute("aria-selected", String(activa));
      });
      paneles.forEach((p) => p.classList.toggle("activa", p.id === `panel-${objetivo}`));
      localStorage.setItem("rt_pestana_activa", objetivo);
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();
        activarPestana(tab.getAttribute("data-pestana"));
      });
    });

    const pestanaGuardada = localStorage.getItem("rt_pestana_activa");
    if (pestanaGuardada && document.getElementById(`panel-${pestanaGuardada}`)) {
      activarPestana(pestanaGuardada);
    }
    

    // =========================================================
    // SECCIÓN 5: PANEL CUENTA
    // =========================================================
    const inputNombreCuenta = document.getElementById("rtDatoNombre");
    const inputAliasCuenta = document.getElementById("rtDatoAlias");
    const inputCorreoCuenta = document.getElementById("rtDatoCorreo");
    const inputRegionCuenta = document.getElementById("rtDatoRegion");

    if (inputNombreCuenta) inputNombreCuenta.value = cuentaActiva.nombre;
    if (inputAliasCuenta) inputAliasCuenta.value = meta.alias || "";
    if (inputCorreoCuenta) inputCorreoCuenta.value = cuentaActiva.correo;
    if (inputRegionCuenta) inputRegionCuenta.value = meta.region || "Uruguay";

    document.querySelectorAll(".rt-btn-accion-azul[data-campo]").forEach((btn) => {
      const inpInit = document.getElementById(btn.getAttribute("data-campo") || "");
      if (inpInit) btn.textContent = inpInit.value.trim() ? "Editar" : "Añadir";

      btn.addEventListener("click", function () {
        const input = document.getElementById(btn.getAttribute("data-campo") || "");
        if (!input) return;
        const filaControl = input.closest(".rt-fila-control");
        const estaEditando = !input.hasAttribute("readonly");

        if (!estaEditando) {
          input.removeAttribute("readonly");
          filaControl?.classList.add("editando");
          input.focus();
          btn.textContent = "Guardar";
        } else {
          input.setAttribute("readonly", "true");
          filaControl?.classList.remove("editando");
          btn.textContent = input.value.trim() ? "Editar" : "Añadir";

          const actualizadoNombre = (inputNombreCuenta?.value || cuentaActiva.nombre).trim();
          const actualizadoCorreo = (inputCorreoCuenta?.value || cuentaActiva.correo).trim().toLowerCase();
          meta.alias = (inputAliasCuenta?.value || "").trim();
          meta.region = (inputRegionCuenta?.value || "Uruguay").trim();
          guardarMeta();

          cuentaActiva = { ...cuentaActiva, nombre: actualizadoNombre, correo: actualizadoCorreo };
          guardarCuentaActiva(cuentaActiva);
          sincronizarCorreoEnVistas(actualizadoCorreo);
          pintarAvatarGrande(avatarGrande, cuentaActiva);
          pintarAvatarSuperior(cuentaActiva);
          if (viajeroMini) pintarAvatarGrande(viajeroMini, cuentaActiva);
          renderizarCuentasDesplegable();
        }
      });
    });

    const btnApple = document.getElementById("rtBtnVincularApple");
    const btnGoogle = document.getElementById("rtBtnVincularGoogle");

    function actualizarBotonesRedes() {
      if (btnApple) {
        btnApple.className = meta.redes.apple ? "rt-btn-vincular-activo" : "rt-btn-vincular-outline";
        btnApple.innerHTML = meta.redes.apple
          ? '<i class="fa-brands fa-apple"></i><span>Vinculada</span><i class="fa-solid fa-xmark"></i>'
          : '<i class="fa-brands fa-apple"></i><span>Apple</span>';
      }
      if (btnGoogle) {
        btnGoogle.className = meta.redes.google ? "rt-btn-vincular-activo" : "rt-btn-vincular-outline";
        btnGoogle.innerHTML = meta.redes.google
          ? '<i class="fa-brands fa-google"></i><span>Vinculada</span><i class="fa-solid fa-xmark"></i>'
          : '<i class="fa-brands fa-google"></i><span>Google</span>';
      }
    }
    actualizarBotonesRedes();

    btnApple?.addEventListener("click", () => { meta.redes.apple = !meta.redes.apple; guardarMeta(); actualizarBotonesRedes(); });
    btnGoogle?.addEventListener("click", () => { meta.redes.google = !meta.redes.google; guardarMeta(); actualizarBotonesRedes(); });

    function renderChipsEmail(contenedorId, lista, tipo) {
      const cont = document.getElementById(contenedorId);
      if (!cont) return;
      cont.innerHTML = "";
      lista.forEach((item, idx) => {
        const chip = document.createElement("span");
        chip.className = "rt-chip-email";
        chip.innerHTML = `${item} <button type="button" aria-label="Quitar ${item}">×</button>`;
        chip.querySelector("button")?.addEventListener("click", () => {
          meta[tipo].splice(idx, 1);
          guardarMeta();
          renderChipsEmail(contenedorId, meta[tipo], tipo);
        });
        cont.appendChild(chip);
      });
    }

    function crearFormularioEmail(botonId, listaId, claveMeta, placeholderTexto) {
      const btn = document.getElementById(botonId);
      const listaCont = document.getElementById(listaId);
      if (!btn || !listaCont) return;

      const formWrap = document.createElement("div");
      formWrap.className = "rt-pref-lugar-form oculto";
      formWrap.style.marginTop = "10px";
      formWrap.innerHTML = `<input type="email" class="rt-pref-input" placeholder="${placeholderTexto}" /><button type="button" class="rt-btn-oscuro">Guardar</button>`;
      btn.insertAdjacentElement("afterend", formWrap);

      const input = formWrap.querySelector("input");
      const btnGuardar = formWrap.querySelector("button");

      btn.addEventListener("click", () => {
        formWrap.classList.toggle("oculto");
        if (!formWrap.classList.contains("oculto")) input?.focus();
      });

      function guardarCorreo() {
        const val = (input?.value || "").trim();
        if (!val) return;
        meta[claveMeta] = Array.isArray(meta[claveMeta]) ? meta[claveMeta] : [];
        if (!meta[claveMeta].includes(val)) {
          meta[claveMeta].push(val);
          guardarMeta();
        }
        if (input) input.value = "";
        formWrap.classList.add("oculto");
        renderChipsEmail(listaId, meta[claveMeta], claveMeta);
      }

      btnGuardar?.addEventListener("click", guardarCorreo);
      input?.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); guardarCorreo(); } });
      renderChipsEmail(listaId, meta[claveMeta], claveMeta);
    }

    crearFormularioEmail("rtBtnAnadirRemitente", "rtListaRemitentes", "remitentes", "Ej. reserva@aerolinea.com");
    crearFormularioEmail("rtBtnCompartirEmail", "rtListaCompartir", "compartir", "Ej. acompanante@correo.com");

    const feedCaja = document.getElementById("rtFeedUrl");
    const mensajeFeed = document.getElementById("rtMensajeFeed");
    const notifFeedCaja = document.getElementById("rtNotifFeedUrl");
    const notifMensajeFeed = document.getElementById("rtNotifMensajeFeed");

    function sincronizarFeedUrl() {
      if (feedCaja) feedCaja.textContent = meta.feedUrl;
      if (notifFeedCaja) notifFeedCaja.textContent = meta.feedUrl;
    }
    sincronizarFeedUrl();

    function restablecerFeed(cajaMsg) {
      const token = Math.random().toString(36).substring(2, 10).toUpperCase();
      meta.feedUrl = `https://rutatropical.com/trips/ical/uf/0CDLeoy_xxA/${token}/calendar.ics`;
      guardarMeta();
      sincronizarFeedUrl();
      if (cajaMsg) {
        cajaMsg.textContent = "Enlace de calendario restablecido.";
        cajaMsg.classList.remove("oculto");
      }
    }

    function mostrarInstruccionesFeed(cajaMsg) {
      if (cajaMsg) {
        cajaMsg.textContent = "Copia el enlace .ics y pégalo en Google Calendar o Apple Calendar mediante 'Añadir por URL'.";
        cajaMsg.classList.remove("oculto");
      }
    }

    document.getElementById("rtBtnRestablecerFeed")?.addEventListener("click", () => restablecerFeed(mensajeFeed));
    document.getElementById("rtBtnInstruccionesFeed")?.addEventListener("click", () => mostrarInstruccionesFeed(mensajeFeed));
    document.getElementById("rtNotifRestablecerFeed")?.addEventListener("click", () => restablecerFeed(notifMensajeFeed));
    document.getElementById("rtNotifInstruccionesFeed")?.addEventListener("click", () => mostrarInstruccionesFeed(notifMensajeFeed));

    document.getElementById("rtBtnRevisarHistorial")?.addEventListener("click", () => {
      alert(
        `Historial de actividad de ${cuentaActiva.correo}:\n` +
        `• Búsquedas guardadas: MVD → SCL, MIA → CLT\n` +
        `• Aeropuerto principal: ${meta.origen}\n` +
        `• Aeropuertos secundarios: ${meta.aeropuertosSec.join(", ") || "Ninguno"}`
      );
    });

    document.querySelectorAll(".rt-toggle-input[data-priv]").forEach((toggle) => {
      const clavePriv = toggle.getAttribute("data-priv");
      const estadoLabel = toggle.closest(".rt-toggle-wrap")?.querySelector(".rt-toggle-estado");
      if (clavePriv && typeof meta.privacidad[clavePriv] === "boolean") toggle.checked = meta.privacidad[clavePriv];
      if (estadoLabel) estadoLabel.textContent = toggle.checked ? "Activo" : "Inactivo";

      toggle.addEventListener("change", () => {
        if (estadoLabel) estadoLabel.textContent = toggle.checked ? "Activo" : "Inactivo";
        if (clavePriv) { meta.privacidad[clavePriv] = toggle.checked; guardarMeta(); }
      });
    });

    document.getElementById("rtBtnEliminarCuenta")?.addEventListener("click", () => {
      if (!confirm("¿Seguro que deseas eliminar tu cuenta de RuTa Tropical? Esta acción borrará tus datos locales.")) return;
      localStorage.setItem(SESSIONS_LIST_KEY, JSON.stringify(leerJson(SESSIONS_LIST_KEY, []).filter((c) => c.correo !== cuentaActiva.correo)));
      localStorage.setItem(DB_KEY, JSON.stringify(leerJson(DB_KEY, []).filter((c) => c.correo !== cuentaActiva.correo)));
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(META_KEY);
      localStorage.removeItem("rt_avatar_foto");
      window.location.href = LOGIN_URL;
    });

    // =========================================================
    // SECCIÓN 6: PANEL PREFERENCIAS
    // =========================================================
    const origenChipsCont = document.getElementById("rtOrigenChips");

    function renderizarOrigenChip() {
      if (!origenChipsCont) return;
      origenChipsCont.innerHTML = "";
      if (!meta.origenChip) return;
      const span = document.createElement("span");
      span.className = "rt-pref-chip-activo";
      span.innerHTML = `<span>${meta.origenChip}</span><button type="button" class="rt-chip-quitar" aria-label="Quitar ${meta.origenChip}"><i class="fa-solid fa-xmark"></i></button>`;
      span.querySelector("button")?.addEventListener("click", () => {
        meta.origenChip = "";
        guardarMeta();
        renderizarOrigenChip();
      });
      origenChipsCont.appendChild(span);
    }
    renderizarOrigenChip();

    function renderizarListaChips(contenedor, lista, onEliminar) {
      if (!contenedor) return;
      contenedor.innerHTML = "";
      lista.forEach((texto, idx) => {
        const chip = document.createElement("span");
        chip.className = "rt-pref-chip-activo";
        chip.style.marginRight = "6px";
        chip.style.marginTop = "6px";
        chip.innerHTML = `<span>${texto}</span><button type="button" class="rt-chip-quitar" aria-label="Quitar ${texto}"><i class="fa-solid fa-xmark"></i></button>`;
        chip.querySelector("button")?.addEventListener("click", () => onEliminar(idx));
        contenedor.appendChild(chip);
      });
    }

    const listaAeropuertosSecCont = document.getElementById("rtAeropuertosSecLista");
    const inputBuscarAeroSec = document.getElementById("rtBuscarAeropuertoSec");
    const btnBuscarAeroSec = document.getElementById("rtBtnBuscarAeropuerto");

    function agregarAeropuertoSecundario(nombreAero) {
      const limpio = (nombreAero || "").trim();
      if (!limpio) return;
      if (!meta.aeropuertosSec.includes(limpio)) { meta.aeropuertosSec.push(limpio); guardarMeta(); }
      renderAeropuertosSecundarios();
    }

    function renderAeropuertosSecundarios() {
      renderizarListaChips(listaAeropuertosSecCont, meta.aeropuertosSec, (idx) => {
        meta.aeropuertosSec.splice(idx, 1);
        guardarMeta();
        renderAeropuertosSecundarios();
      });
    }
    renderAeropuertosSecundarios();

    btnBuscarAeroSec?.addEventListener("click", () => {
      if (!inputBuscarAeroSec) return;
      agregarAeropuertoSecundario(inputBuscarAeroSec.value);
      inputBuscarAeroSec.value = "";
    });

    inputBuscarAeroSec?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        agregarAeropuertoSecundario(inputBuscarAeroSec.value);
        inputBuscarAeroSec.value = "";
      }
    });

    document.querySelectorAll("#rtSugerenciasAeropuertos .rt-pref-sugerencia-btn").forEach((btnSug) => {
      btnSug.addEventListener("click", () => agregarAeropuertoSecundario(btnSug.getAttribute("data-aeropuerto") || btnSug.textContent));
    });

    function enlazarInputConChipsGuardados(inputId, claveArray) {
      const input = document.getElementById(inputId);
      if (!input) return;

      const contChips = document.createElement("div");
      contChips.className = "rt-pref-chips-fila rt-pref-mt-sm";
      input.insertAdjacentElement("afterend", contChips);

      function refrescar() {
        renderizarListaChips(contChips, meta[claveArray], (idx) => {
          meta[claveArray].splice(idx, 1);
          guardarMeta();
          refrescar();
        });
      }
      refrescar();

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const val = input.value.trim();
          if (!val) return;
          if (!meta[claveArray].includes(val)) { meta[claveArray].push(val); guardarMeta(); }
          input.value = "";
          refrescar();
        }
      });
    }

    enlazarInputConChipsGuardados("rtAerolineasPreferidas", "aerolineasPref");
    enlazarInputConChipsGuardados("rtAerolineasOmitir", "aerolineasOmitir");
    enlazarInputConChipsGuardados("rtHotelesPreferidos", "hotelesPref");
    enlazarInputConChipsGuardados("rtHotelesOmitir", "hotelesOmitir");

    const btnAnadirLugar = document.getElementById("rtBtnAnadirLugar");
    const formLugar = document.getElementById("rtFormLugar");
    const inputLugar = document.getElementById("rtInputLugar");
    const btnGuardarLugar = document.getElementById("rtBtnGuardarLugar");
    const listaLugaresCont = document.getElementById("rtListaLugaresGuardados");

    function renderLugaresGuardados() {
      renderizarListaChips(listaLugaresCont, meta.lugaresGuardados, (idx) => {
        meta.lugaresGuardados.splice(idx, 1);
        guardarMeta();
        renderLugaresGuardados();
      });
    }
    renderLugaresGuardados();

    btnAnadirLugar?.addEventListener("click", () => { formLugar?.classList.toggle("oculto"); inputLugar?.focus(); });

    function guardarNuevoLugar() {
      const val = (inputLugar?.value || "").trim();
      if (!val) return;
      if (!meta.lugaresGuardados.includes(val)) { meta.lugaresGuardados.push(val); guardarMeta(); }
      if (inputLugar) inputLugar.value = "";
      formLugar?.classList.add("oculto");
      renderLugaresGuardados();
    }

    btnGuardarLugar?.addEventListener("click", guardarNuevoLugar);
    inputLugar?.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); guardarNuevoLugar(); } });

    // =========================================================
    // SECCIÓN 7: PANEL VIAJEROS
    // =========================================================
    const btnEditarViajero = document.getElementById("rtBtnEditarViajero");
    const formEditarViajero = document.getElementById("rtFormEditarViajero");
    const btnGuardarViajero = document.getElementById("rtBtnGuardarViajero");
    const btnCancelarViajero = document.getElementById("rtBtnCancelarViajero");

    function pintarDatosPasajeroPrincipal() {
      const p = meta.pasajeroPrincipal;
      document.querySelectorAll("[data-campo-viajero]").forEach((el) => {
        const clave = el.getAttribute("data-campo-viajero");
        el.textContent = (clave && p[clave]) ? p[clave] : "-";
      });
    }
    pintarDatosPasajeroPrincipal();

    btnEditarViajero?.addEventListener("click", () => {
      if (!formEditarViajero) return;
      const p = meta.pasajeroPrincipal;
      document.getElementById("rtViajeroInputNombre").value = p.nombre || "";
      document.getElementById("rtViajeroInputSegundoNombre").value = p.segundoNombre || "";
      document.getElementById("rtViajeroInputApellidos").value = p.apellidos || "";
      document.getElementById("rtViajeroInputFechaNacimiento").value = p.fechaNacimiento || "";
      document.getElementById("rtViajeroInputSexo").value = p.sexo || "";
      document.getElementById("rtViajeroInputMovil").value = p.movil || "";
      document.getElementById("rtViajeroInputDhs").value = p.dhs || "";
      document.getElementById("rtViajeroInputKtn").value = p.ktn || "";
      formEditarViajero.classList.remove("oculto");
    });

    btnCancelarViajero?.addEventListener("click", () => formEditarViajero?.classList.add("oculto"));

    btnGuardarViajero?.addEventListener("click", () => {
      meta.pasajeroPrincipal = {
        nombre: document.getElementById("rtViajeroInputNombre")?.value.trim() || "",
        segundoNombre: document.getElementById("rtViajeroInputSegundoNombre")?.value.trim() || "",
        apellidos: document.getElementById("rtViajeroInputApellidos")?.value.trim() || "",
        fechaNacimiento: document.getElementById("rtViajeroInputFechaNacimiento")?.value || "",
        sexo: document.getElementById("rtViajeroInputSexo")?.value || "",
        movil: document.getElementById("rtViajeroInputMovil")?.value.trim() || "",
        dhs: document.getElementById("rtViajeroInputDhs")?.value.trim() || "",
        ktn: document.getElementById("rtViajeroInputKtn")?.value.trim() || ""
      };
      guardarMeta();
      pintarDatosPasajeroPrincipal();
      formEditarViajero?.classList.add("oculto");
    });

    const btnAnadirCompanero = document.getElementById("rtBtnAnadirCompanero");
    const formAnadirCompanero = document.getElementById("rtFormAnadirCompanero");
    const btnGuardarCompanero = document.getElementById("rtBtnGuardarCompanero");
    const btnCancelarCompanero = document.getElementById("rtBtnCancelarCompanero");
    const listaCompanerosCont = document.getElementById("rtListaCompaneros");

    function renderizarCompaneros() {
      if (!listaCompanerosCont) return;
      listaCompanerosCont.innerHTML = "";
      meta.companeros.forEach((comp, idx) => {
        const fila = document.createElement("div");
        fila.style.cssText = "display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border:1px solid #E2E8F0;border-radius:10px;margin-top:10px;background:#F8FAFC;";
        fila.innerHTML = `
          <div>
            <strong style="color:#0F172A;display:block;font-size:0.92rem;">${comp.nombre}</strong>
            <small style="color:#64748B;font-size:0.8rem;">${comp.correo || "Sin correo registrado"}</small>
          </div>
          <button type="button" class="rt-btn-borde-oscuro" style="padding:5px 10px;font-size:0.78rem;">Eliminar</button>
        `;
        fila.querySelector("button")?.addEventListener("click", () => {
          meta.companeros.splice(idx, 1);
          guardarMeta();
          renderizarCompaneros();
        });
        listaCompanerosCont.appendChild(fila);
      });
    }
    renderizarCompaneros();

    btnAnadirCompanero?.addEventListener("click", () => formAnadirCompanero?.classList.remove("oculto"));
    btnCancelarCompanero?.addEventListener("click", () => formAnadirCompanero?.classList.add("oculto"));

    btnGuardarCompanero?.addEventListener("click", () => {
      const inpNombre = document.getElementById("rtCompaneroNombre");
      const inpCorreo = document.getElementById("rtCompaneroCorreo");
      const nom = (inpNombre?.value || "").trim();
      if (!nom) return;
      meta.companeros.push({ nombre: nom, correo: (inpCorreo?.value || "").trim() });
      guardarMeta();
      if (inpNombre) inpNombre.value = "";
      if (inpCorreo) inpCorreo.value = "";
      formAnadirCompanero?.classList.add("oculto");
      renderizarCompaneros();
    });

    // =========================================================
    // SECCIÓN 8: PANEL MÉTODOS DE PAGO
    // =========================================================
    const btnAnadirTarjeta = document.getElementById("rtBtnAnadirTarjeta");
    const formAnadirTarjeta = document.getElementById("rtFormAnadirTarjeta");
    const btnGuardarTarjeta = document.getElementById("rtBtnGuardarTarjeta");
    const btnCancelarTarjeta = document.getElementById("rtBtnCancelarTarjeta");
    const listaTarjetasCont = document.getElementById("rtListaTarjetasGuardadas");

    const inpTarjNum = document.getElementById("rtInputTarjetaNumero");
    const inpTarjTit = document.getElementById("rtInputTarjetaTitular");
    const inpTarjVen = document.getElementById("rtInputTarjetaVence");
    const inpTarjCvv = document.getElementById("rtInputTarjetaCvv");

    const vistaTarjNum = document.getElementById("rtVistaTarjetaNumero");
    const vistaTarjTit = document.getElementById("rtVistaTarjetaTitular");
    const vistaTarjVen = document.getElementById("rtVistaTarjetaVence");

    if (vistaTarjTit) vistaTarjTit.textContent = cuentaActiva.nombre;

    inpTarjNum?.addEventListener("input", () => {
      const soloDigitos = inpTarjNum.value.replace(/\D/g, "").slice(0, 16);
      const formateado = soloDigitos.replace(/(.{4})/g, "$1 ").trim();
      inpTarjNum.value = formateado;
      if (vistaTarjNum) vistaTarjNum.textContent = formateado || "•••• •••• •••• 4829";
    });

    inpTarjTit?.addEventListener("input", () => {
      if (vistaTarjTit) vistaTarjTit.textContent = inpTarjTit.value.trim() || cuentaActiva.nombre;
    });

    inpTarjVen?.addEventListener("input", () => {
      let digitos = inpTarjVen.value.replace(/\D/g, "").slice(0, 4);
      if (digitos.length >= 3) digitos = digitos.slice(0, 2) + "/" + digitos.slice(2);
      inpTarjVen.value = digitos;
      if (vistaTarjVen) vistaTarjVen.textContent = digitos || "12/29";
    });

    function renderizarTarjetasGuardadas() {
      if (!listaTarjetasCont) return;
      listaTarjetasCont.innerHTML = "";
      meta.tarjetas.forEach((tarj, idx) => {
        const fila = document.createElement("div");
        fila.style.cssText = "display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border:1px solid #E2E8F0;border-radius:10px;margin-top:12px;background:#F8FAFC;";
        fila.innerHTML = `
          <div style="display:flex;align-items:center;gap:10px;">
            <i class="fa-regular fa-credit-card" style="color:#17A1CF;font-size:1.1rem;"></i>
            <div>
              <strong style="color:#0F172A;display:block;font-size:0.9rem;">•••• •••• •••• ${tarj.ultimos4}</strong>
              <small style="color:#64748B;font-size:0.78rem;">${tarj.titular} · Vence ${tarj.vence}</small>
            </div>
          </div>
          <button type="button" class="rt-btn-borde-oscuro" style="padding:5px 10px;font-size:0.78rem;">Eliminar</button>
        `;
        fila.querySelector("button")?.addEventListener("click", () => {
          meta.tarjetas.splice(idx, 1);
          guardarMeta();
          renderizarTarjetasGuardadas();
        });
        listaTarjetasCont.appendChild(fila);
      });

      if (meta.tarjetas.length > 0) {
        const ultima = meta.tarjetas[meta.tarjetas.length - 1];
        if (vistaTarjNum) vistaTarjNum.textContent = `•••• •••• •••• ${ultima.ultimos4}`;
        if (vistaTarjTit) vistaTarjTit.textContent = ultima.titular;
        if (vistaTarjVen) vistaTarjVen.textContent = ultima.vence;
      }
    }
    renderizarTarjetasGuardadas();

    btnAnadirTarjeta?.addEventListener("click", () => formAnadirTarjeta?.classList.remove("oculto"));
    btnCancelarTarjeta?.addEventListener("click", () => formAnadirTarjeta?.classList.add("oculto"));

    btnGuardarTarjeta?.addEventListener("click", () => {
      const digitos = (inpTarjNum?.value || "").replace(/\D/g, "");
      const titular = (inpTarjTit?.value || "").trim();
      const vence = (inpTarjVen?.value || "").trim();
      if (digitos.length < 4 || !titular || vence.length < 4) return;
      meta.tarjetas.push({ ultimos4: digitos.slice(-4), titular, vence });
      guardarMeta();
      if (inpTarjNum) inpTarjNum.value = "";
      if (inpTarjTit) inpTarjTit.value = "";
      if (inpTarjVen) inpTarjVen.value = "";
      if (inpTarjCvv) inpTarjCvv.value = "";
      formAnadirTarjeta?.classList.add("oculto");
      renderizarTarjetasGuardadas();
    });

    // =========================================================
    // SECCIÓN 9: PANEL NOTIFICACIONES
    // =========================================================
    const btnCrearAlerta = document.getElementById("rtBtnCrearAlerta");
    const formCrearAlerta = document.getElementById("rtFormCrearAlerta");
    const inputAlertaRuta = document.getElementById("rtInputAlertaRuta");
    const btnGuardarAlerta = document.getElementById("rtBtnGuardarAlerta");
    const listaAlertasCont = document.getElementById("rtListaAlertasCreadas");

    function renderizarAlertas() {
      if (!listaAlertasCont) return;
      listaAlertasCont.innerHTML = "";
      meta.alertasPrecios.forEach((ruta, idx) => {
        const item = document.createElement("div");
        item.style.cssText = "display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border:1px solid #E2E8F0;border-radius:10px;margin-top:8px;background:#FFFFFF;";
        item.innerHTML = `
          <span style="font-size:0.88rem;font-weight:600;color:#0F172A;">
            <i class="fa-solid fa-bell" style="color:#DD4350;margin-right:6px;"></i>${ruta}
          </span>
          <button type="button" class="rt-chip-quitar" aria-label="Eliminar alerta">
            <i class="fa-solid fa-xmark"></i>
          </button>
        `;
        item.querySelector("button")?.addEventListener("click", () => {
          meta.alertasPrecios.splice(idx, 1);
          guardarMeta();
          renderizarAlertas();
        });
        listaAlertasCont.appendChild(item);
      });
    }
    renderizarAlertas();

    btnCrearAlerta?.addEventListener("click", () => { formCrearAlerta?.classList.toggle("oculto"); inputAlertaRuta?.focus(); });

    function guardarAlertaPrecio() {
      const val = (inputAlertaRuta?.value || "").trim();
      if (!val) return;
      if (!meta.alertasPrecios.includes(val)) { meta.alertasPrecios.push(val); guardarMeta(); }
      if (inputAlertaRuta) inputAlertaRuta.value = "";
      formCrearAlerta?.classList.add("oculto");
      renderizarAlertas();
    }

    btnGuardarAlerta?.addEventListener("click", guardarAlertaPrecio);
    inputAlertaRuta?.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); guardarAlertaPrecio(); } });

    document.querySelectorAll(".rt-notif-toggle[data-notif]").forEach((toggle) => {
      const claveNotif = toggle.getAttribute("data-notif");
      const estadoLabel = toggle.closest(".rt-toggle-wrap")?.querySelector(".rt-toggle-estado");
      if (claveNotif && typeof meta.notifToggles[claveNotif] === "boolean") toggle.checked = meta.notifToggles[claveNotif];
      if (estadoLabel) estadoLabel.textContent = toggle.checked ? "Sí" : "No";

      toggle.addEventListener("change", () => {
        if (estadoLabel) estadoLabel.textContent = toggle.checked ? "Sí" : "No";
        if (claveNotif) { meta.notifToggles[claveNotif] = toggle.checked; guardarMeta(); }
      });
    });

    document.querySelectorAll(".rt-notif-check-item input[type='checkbox']").forEach((chk) => {
      const grupo = chk.name;
      const valor = chk.value;
      if (grupo && Array.isArray(meta.notifChecks[grupo])) chk.checked = meta.notifChecks[grupo].includes(valor);

      chk.addEventListener("change", () => {
        if (!grupo) return;
        meta.notifChecks[grupo] = Array.isArray(meta.notifChecks[grupo]) ? meta.notifChecks[grupo] : [];
        if (chk.checked && !meta.notifChecks[grupo].includes(valor)) {
          meta.notifChecks[grupo].push(valor);
        } else if (!chk.checked) {
          meta.notifChecks[grupo] = meta.notifChecks[grupo].filter((v) => v !== valor);
        }
        guardarMeta();
      });
    });

    document.getElementById("rtBtnDesactivarTodasNotif")?.addEventListener("click", () => {
      document.querySelectorAll(".rt-notif-toggle[data-notif]").forEach((toggle) => {
        const claveNotif = toggle.getAttribute("data-notif");
        toggle.checked = false;
        const estadoLabel = toggle.closest(".rt-toggle-wrap")?.querySelector(".rt-toggle-estado");
        if (estadoLabel) estadoLabel.textContent = "No";
        if (claveNotif) meta.notifToggles[claveNotif] = false;
      });
      guardarMeta();
    });

    // =========================================================
    // SECCIÓN 10: SIDEBAR MÓVIL Y EVENTOS DE SESIÓN
    // =========================================================
    const sidebar = document.getElementById("rtCuentaSidebar");
    document.getElementById("rtBtnAbrirSidebar")?.addEventListener("click", () => sidebar?.classList.add("abierto"));
    document.getElementById("rtBtnCerrarSidebar")?.addEventListener("click", () => sidebar?.classList.remove("abierto"));

    window.addEventListener("rt:sesion-cambiada", () => {
      const reciente = obtenerSesionValida();
      if (reciente) {
        const conFoto = { ...reciente, foto: reciente.foto || localStorage.getItem("rt_avatar_foto") || "" };
        pintarAvatarGrande(avatarGrande, conFoto);
        pintarAvatarSuperior(conFoto);
        if (viajeroMini) pintarAvatarGrande(viajeroMini, conFoto);
        renderizarCuentasDesplegable();
      }
    });

    // =========================================================
    // SECCIÓN 11: SELECTOR DE PAÍS E IDIOMA
    // =========================================================
    const box = document.getElementById("rtIdiomaBox");
    const btn = document.getElementById("rtTopIdiomaBtn");
    const menu = document.getElementById("rtIdiomaMenu");
    const idiomaTexto = document.getElementById("rtTopIdiomaTexto");
    const banderaBtn = document.getElementById("rtTopBanderaImg");
    if (!box || !btn || !menu) return;

    const textos = {
      es: {
        bienvenida: "Te damos la bienvenida",
        origen: "Aeropuerto de origen",
        tabs: ["Resumen", "Cuenta", "Preferencias", "Viajeros", "Métodos de pago", "Notificaciones"],
        estadisticas: "Estadísticas de viajes",
        sinEstadisticas: "Todavía no tienes estadísticas",
        subEstadisticas: "¡Ya es hora de ponerse en marcha y descubrir el mundo!",
        verViajes: "Ver viajes",
        busquedas: "Búsquedas recientes",
        sidebarMain: ["Vuelos", "Hoteles", "autobus"],
        sidebarLinks: ["planifica con IA", "planean tus viajes", "Sobre nosotros", "Contacto", "Preguntas frecuentes", "explorar", "Términos y condiciones", "rastraedor de vuelos", "viajes"],
        telefonoLabel: "Teléfono:",
        correoLabel: "Correo:",
        prefTitulo: "Preferencias",
        aeropuertosTitulo: "Aeropuertos",
        aeropuertosDesc: "Simplifica la búsqueda de vuelos guardando tu aeropuerto de origen y otros aeropuertos desde los que vueles con frecuencia.",
        origenSub: "Aeropuerto de origen",
        secSub: "Aeropuertos secundarios",
        secPlaceholder: "Buscar aeropuertos alternativos",
        sugerenciasLabel: "Sugerencias",
        aerolineasTitulo: "Aerolíneas",
        aerolineasDesc: "Obtén mejores resultados de búsqueda añadiendo tus preferencias de aerolíneas.",
        preferidasLabel: "Preferidas",
        preferidasAyuda: "Estas opciones aparecerán más arriba en resultados.",
        omitirLabel: "Omitir",
        omitirAyuda: "Estas opciones aparecerán más abajo en resultados.",
        buscarAeroPlaceholder: "Busca aerolíneas",
        hotelesTitulo: "Cadenas de hoteles",
        hotelesDesc: "Obtén mejores resultados de búsqueda añadiendo tus preferencias de cadenas de hoteles.",
        buscarHotelPlaceholder: "Busca cadenas de hoteles",
        lugaresTitulo: "Lugares guardados",
        lugaresDesc: "Elige entre tus lugares guardados para limitar la búsqueda a los hoteles y alquileres cercanos.",
        anadirLugar: "Añade un lugar",
        cuentaTitulo: "Cuenta",
        revisarHistorial: "Revisar historial",
        eliminarCuenta: "Eliminar cuenta",
        pasajerosTitulo: "Pasajeros",
        pagosTitulo: "Métodos de pago guardados",
        anadirTarjeta: "Añadir una tarjeta de crédito",
        alertasTitulo: "Alertas",
        crearAlerta: "Crear alerta de precios",
        footerLema: "Tu agencia de confianza para descubrir el mundo al mejor precio. Compara, ahorra y vuela sin límites.",
        footerCols: ["Empresa", "Contacto", "Más"],
        footerEnlacesCol: [["Acerca de", "Prensa", "Afiliados", "Socios"], ["Ayuda / FAQ", "Hoteles", "Publicidad"], ["Tarifas aéreas", "Ofertas bajas", "Privacidad"]],
        footerAppTitulo: "Descarga la app",
        footerAppDesc: "Lleva tus reservas y ofertas siempre contigo.",
        footerDerechos: "© 2026 RuTa Tropical. Todos los derechos reservados.",
        footerLegales: ["Privacidad", "Términos y condiciones", "Cookies"],
        footerAeroTitulo: "Aerolíneas"
      },
      en: {
        bienvenida: "Welcome back",
        origen: "Home airport",
        tabs: ["Summary", "Account", "Preferences", "Travelers", "Payment methods", "Notifications"],
        estadisticas: "Travel statistics",
        sinEstadisticas: "You don't have any statistics yet",
        subEstadisticas: "It's time to get moving and discover the world!",
        verViajes: "Ver viajes",
        busquedas: "Recent searches",
        sidebarMain: ["Flights", "Hotels", "Bus"],
        sidebarLinks: ["Plan with AI", "Plan your trips", "About us", "Contact", "FAQ", "Explore", "Terms and conditions", "Flight tracker", "Trips"],
        telefonoLabel: "Phone:",
        correoLabel: "Email:",
        prefTitulo: "Preferences",
        aeropuertosTitulo: "Airports",
        aeropuertosDesc: "Simplify flight searches by saving your home airport and other airports you fly from often.",
        origenSub: "Home airport",
        secSub: "Secondary airports",
        secPlaceholder: "Search alternative airports",
        sugerenciasLabel: "Suggestions",
        aerolineasTitulo: "Airlines",
        aerolineasDesc: "Get better search results by adding your airline preferences.",
        preferidasLabel: "Preferred",
        preferidasAyuda: "These options will appear higher in results.",
        omitirLabel: "Omit",
        omitirAyuda: "These options will appear lower in results.",
        buscarAeroPlaceholder: "Search airlines",
        hotelesTitulo: "Hotel chains",
        hotelesDesc: "Get better search results by adding your hotel chain preferences.",
        buscarHotelPlaceholder: "Search hotel chains",
        lugaresTitulo: "Saved places",
        lugaresDesc: "Choose from your saved places to limit searches to nearby hotels and rentals.",
        anadirLugar: "Add a place",
        cuentaTitulo: "Account",
        revisarHistorial: "Review history",
        eliminarCuenta: "Delete account",
        pasajerosTitulo: "Travelers",
        pagosTitulo: "Saved payment methods",
        anadirTarjeta: "Add a credit card",
        alertasTitulo: "Alerts",
        crearAlerta: "Create price alert",
        footerLema: "Your trusted agency to discover the world at the best price. Compare, save, and fly without limits.",
        footerCols: ["Company", "Contact", "More"],
        footerEnlacesCol: [["About", "Press", "Affiliates", "Partners"], ["Help / FAQ", "Hotels", "Advertising"], ["Airfares", "Low offers", "Privacy"]],
        footerAppTitulo: "Download the app",
        footerAppDesc: "Take your bookings and deals with you everywhere.",
        footerDerechos: "© 2026 RuTa Tropical. All rights reserved.",
        footerLegales: ["Privacy", "Terms and conditions", "Cookies"],
        footerAeroTitulo: "Airlines"
      },
      fr: {
        bienvenida: "Bienvenue",
        origen: "Aéroport de départ",
        tabs: ["Résumé", "Compte", "Préférences", "Voyageurs", "Moyens de paiement", "Notifications"],
        estadisticas: "Statistiques de voyage",
        sinEstadisticas: "Vous n'avez pas encore de statistiques",
        subEstadisticas: "Il est temps de partir et de découvrir le monde !",
        verViajes: "Ver viajes",
        busquedas: "Recherches récentes",
        sidebarMain: ["Vols", "Hôtels", "Bus"],
        sidebarLinks: ["Planifier avec l'IA", "Planifiez vos voyages", "À propos", "Contact", "FAQ", "Explorer", "Conditions générales", "Suivi des vols", "Voyages"],
        telefonoLabel: "Téléphone :",
        correoLabel: "E-mail :",
        prefTitulo: "Préférences",
        aeropuertosTitulo: "Aéroports",
        aeropuertosDesc: "Simplifiez vos recherches de vols en enregistrant votre aéroport principal et vos autres aéroports fréquents.",
        origenSub: "Aéroport de départ",
        secSub: "Aéroports secondaires",
        secPlaceholder: "Rechercher des aéroports alternatifs",
        sugerenciasLabel: "Suggestions",
        aerolineasTitulo: "Compagnies aériennes",
        aerolineasDesc: "Obtenez de meilleurs résultats en ajoutant vos préférences de compagnies aériennes.",
        preferidasLabel: "Préférées",
        preferidasAyuda: "Ces options apparaîtront plus haut dans les résultats.",
        omitirLabel: "Exclure",
        omitirAyuda: "Ces options apparaîtront plus bas dans les résultats.",
        buscarAeroPlaceholder: "Rechercher des compagnies aériennes",
        hotelesTitulo: "Chaînes hôtelières",
        hotelesDesc: "Obtenez de meilleurs résultats en ajoutant vos préférences d'hôtels.",
        buscarHotelPlaceholder: "Rechercher des chaînes hôtelières",
        lugaresTitulo: "Lieux enregistrés",
        lugaresDesc: "Choisissez parmi vos lieux enregistrés pour limiter la recherche aux hôtels et locations à proximité.",
        anadirLugar: "Ajouter un lieu",
        cuentaTitulo: "Compte",
        revisarHistorial: "Consulter l'historique",
        eliminarCuenta: "Supprimer le compte",
        pasajerosTitulo: "Voyageurs",
        pagosTitulo: "Moyens de paiement enregistrés",
        anadirTarjeta: "Ajouter une carte de crédit",
        alertasTitulo: "Alertes",
        crearAlerta: "Créer une alerte de prix",
        footerLema: "Votre agence de confiance pour découvrir le monde au meilleur prix. Comparez, économisez et volez sans limites.",
        footerCols: ["Entreprise", "Contact", "Plus"],
        footerEnlacesCol: [["À propos", "Presse", "Affiliés", "Partenaires"], ["Aide / FAQ", "Hôtels", "Publicité"], ["Tarifs aériens", "Bons plans", "Confidentialité"]],
        footerAppTitulo: "Téléchargez l'application",
        footerAppDesc: "Emportez vos réservations et offres partout avec vous.",
        footerDerechos: "© 2026 RuTa Tropical. Tous droits réservés.",
        footerLegales: ["Confidentialité", "Conditions générales", "Cookies"],
        footerAeroTitulo: "Compagnies aériennes"
      },
      pt: {
        bienvenida: "Boas-vindas",
        origen: "Aeroporto de origem",
        tabs: ["Resumo", "Conta", "Preferências", "Viajantes", "Métodos de pagamento", "Notificações"],
        estadisticas: "Estatísticas de viagem",
        sinEstadisticas: "Você ainda não tem estatísticas",
        subEstadisticas: "É hora de pegar a estrada e descobrir o mundo!",
        verViajes: "Ver viajes",
        busquedas: "Pesquisas recentes",
        sidebarMain: ["Voos", "Hotéis", "Ônibus"],
        sidebarLinks: ["Planejar com IA", "Planeje suas viagens", "Sobre nós", "Contato", "Perguntas frequentes", "Explorar", "Termos e condições", "Rastreador de voos", "Viagens"],
        telefonoLabel: "Telefone:",
        correoLabel: "E-mail:",
        prefTitulo: "Preferências",
        aeropuertosTitulo: "Aeroportos",
        aeropuertosDesc: "Simplifique a busca de voos salvando seu aeroporto de origem e outros aeroportos frequentes.",
        origenSub: "Aeroporto de origem",
        secSub: "Aeroportos secundários",
        secPlaceholder: "Buscar aeroportos alternativos",
        sugerenciasLabel: "Sugestões",
        aerolineasTitulo: "Companhias aéreas",
        aerolineasDesc: "Obtenha melhores resultados adicionando suas preferências de companhias aéreas.",
        preferidasLabel: "Preferidas",
        preferidasAyuda: "Essas opções aparecerão mais acima nos resultados.",
        omitirLabel: "Omitir",
        omitirAyuda: "Essas opções aparecerão mais abaixo nos resultados.",
        buscarAeroPlaceholder: "Buscar companhias aéreas",
        hotelesTitulo: "Redes de hotéis",
        hotelesDesc: "Obtenha melhores resultados adicionando suas preferências de redes de hotéis.",
        buscarHotelPlaceholder: "Buscar redes de hotéis",
        lugaresTitulo: "Locais salvos",
        lugaresDesc: "Escolha entre seus locais salvos para limitar a busca a hotéis e acomodações próximos.",
        anadirLugar: "Adicionar um local",
        cuentaTitulo: "Conta",
        revisarHistorial: "Revisar histórico",
        eliminarCuenta: "Excluir conta",
        pasajerosTitulo: "Viajantes",
        pagosTitulo: "Métodos de pagamento salvos",
        anadirTarjeta: "Adicionar cartão de crédito",
        alertasTitulo: "Alertas",
        crearAlerta: "Criar alerta de preços",
        footerLema: "Sua agência de confiança para descobrir o mundo pelo melhor preço. Compare, economize e voe sem limites.",
        footerCols: ["Empresa", "Contato", "Mais"],
        footerEnlacesCol: [["Sobre", "Imprensa", "Afiliados", "Parceiros"], ["Ajuda / FAQ", "Hotéis", "Publicidade"], ["Passagens aéreas", "Ofertas baixas", "Privacidade"]],
        footerAppTitulo: "Baixe o aplicativo",
        footerAppDesc: "Leve suas reservas e ofertas sempre com você.",
        footerDerechos: "© 2026 RuTa Tropical. Todos os direitos reservados.",
        footerLegales: ["Privacidade", "Termos e condições", "Cookies"],
        footerAeroTitulo: "Companhias aéreas"
      },
      it: {
        bienvenida: "Ti diamo il benvenuto",
        origen: "Aeroporto di partenza",
        tabs: ["Riepilogo", "Account", "Preferenze", "Viaggiatori", "Metodi di pagamento", "Notifiche"],
        estadisticas: "Statistiche di viaggio",
        sinEstadisticas: "Non hai ancora statistiche",
        subEstadisticas: "È ora di mettersi in viaggio e scoprire il mondo!",
        verViajes: "Ver viajes",
        busquedas: "Ricerche recenti",
        sidebarMain: ["Voli", "Hotel", "Autobus"],
        sidebarLinks: ["Pianifica con l'IA", "Pianifica i tuoi viaggi", "Chi siamo", "Contatti", "Domande frequenti", "Esplora", "Termini e condizioni", "Tracker voli", "Viaggi"],
        telefonoLabel: "Telefono:",
        correoLabel: "Email:",
        prefTitulo: "Preferenze",
        aeropuertosTitulo: "Aeroporti",
        aeropuertosDesc: "Semplifica la ricerca dei voli salvando il tuo aeroporto di partenza e gli altri aeroporti frequenti.",
        origenSub: "Aeroporto di partenza",
        secSub: "Aeroporti secondari",
        secPlaceholder: "Cerca aeroporti alternativi",
        sugerenciasLabel: "Suggerimenti",
        aerolineasTitulo: "Compagnie aeree",
        aerolineasDesc: "Ottieni risultati migliori aggiungendo le tue preferenze sulle compagnie aeree.",
        preferidasLabel: "Preferite",
        preferidasAyuda: "Queste opzioni appariranno più in alto nei risultati.",
        omitirLabel: "Escludi",
        omitirAyuda: "Queste opzioni appariranno più in basso nei risultati.",
        buscarAeroPlaceholder: "Cerca compagnie aeree",
        hotelesTitulo: "Catene alberghiere",
        hotelesDesc: "Ottieni risultati migliori aggiungendo le tue preferenze sulle catene alberghiere.",
        buscarHotelPlaceholder: "Cerca catene alberghiere",
        lugaresTitulo: "Luoghi salvati",
        lugaresDesc: "Scegli tra i tuoi luoghi salvati per limitare la ricerca a hotel e alloggi vicini.",
        anadirLugar: "Aggiungi un luogo",
        cuentaTitulo: "Account",
        revisarHistorial: "Rivedi cronologia",
        eliminarCuenta: "Elimina account",
        pasajerosTitulo: "Viaggiatori",
        pagosTitulo: "Metodi di pagamento salvati",
        anadirTarjeta: "Aggiungi carta di credito",
        alertasTitulo: "Avvisi",
        crearAlerta: "Crea avviso prezzo",
        footerLema: "La tua agenzia di fiducia per scoprire il mondo al miglior prezzo. Confronta, risparmia e vola senza limiti.",
        footerCols: ["Azienda", "Contatti", "Altro"],
        footerEnlacesCol: [["Chi siamo", "Stampa", "Affiliati", "Partner"], ["Aiuto / FAQ", "Hotel", "Pubblicità"], ["Tariffe aeree", "Offerte basse", "Privacy"]],
        footerAppTitulo: "Scarica l'app",
        footerAppDesc: "Porta sempre con te prenotazioni e offerte.",
        footerDerechos: "© 2026 RuTa Tropical. Tutti i diritti riservati.",
        footerLegales: ["Privacy", "Termini e condizioni", "Cookie"],
        footerAeroTitulo: "Compagnie aeree"
      },
      de: {
        bienvenida: "Willkommen zurück",
        origen: "Heimatflughafen",
        tabs: ["Übersicht", "Konto", "Einstellungen", "Reisende", "Zahlungsmethoden", "Benachrichtigungen"],
        estadisticas: "Reisestatistiken",
        sinEstadisticas: "Du hast noch keine Statistiken",
        subEstadisticas: "Es ist Zeit loszulegen und die Welt zu entdecken!",
        verViajes: "Ver viajes",
        busquedas: "Letzte Suchanfragen",
        sidebarMain: ["Flüge", "Hotels", "Bus"],
        sidebarLinks: ["Mit KI planen", "Reisen planen", "Über uns", "Kontakt", "Häufige Fragen", "Entdecken", "AGB", "Flugtracker", "Reisen"],
        telefonoLabel: "Telefon:",
        correoLabel: "E-Mail:",
        prefTitulo: "Einstellungen",
        aeropuertosTitulo: "Flughäfen",
        aeropuertosDesc: "Vereinfache die Flugsuche, indem du deinen Heimatflughafen und weitere Flughäfen speicherst.",
        origenSub: "Heimatflughafen",
        secSub: "Alternative Flughäfen",
        secPlaceholder: "Alternative Flughäfen suchen",
        sugerenciasLabel: "Vorschläge",
        aerolineasTitulo: "Fluggesellschaften",
        aerolineasDesc: "Erhalte bessere Suchergebnisse, indem du deine Fluggesellschaften festlegst.",
        preferidasLabel: "Bevorzugt",
        preferidasAyuda: "Diese Optionen erscheinen weiter oben in den Ergebnissen.",
        omitirLabel: "Ausschließen",
        omitirAyuda: "Diese Optionen erscheinen weiter unten in den Ergebnissen.",
        buscarAeroPlaceholder: "Fluggesellschaften suchen",
        hotelesTitulo: "Hotelketten",
        hotelesDesc: "Erhalte bessere Suchergebnisse, indem du deine bevorzugten Hotelketten angibst.",
        buscarHotelPlaceholder: "Hotelketten suchen",
        lugaresTitulo: "Gespeicherte Orte",
        lugaresDesc: "Wähle aus deinen gespeicherten Orten, um Hotels und Unterkünfte in der Nähe zu finden.",
        anadirLugar: "Ort hinzufügen",
        cuentaTitulo: "Konto",
        revisarHistorial: "Verlauf prüfen",
        eliminarCuenta: "Konto löschen",
        pasajerosTitulo: "Reisende",
        pagosTitulo: "Gespeicherte Zahlungsmethoden",
        anadirTarjeta: "Kreditkarte hinzufügen",
        alertasTitulo: "Benachrichtigungen",
        crearAlerta: "Preisalarm erstellen",
        footerLema: "Deine vertrauenswürdige Agentur, um die Welt zum besten Preis zu entdecken. Vergleichen, sparen und grenzenlos fliegen.",
        footerCols: ["Unternehmen", "Kontakt", "Mehr"],
        footerEnlacesCol: [["Über uns", "Presse", "Partnerprogramm", "Partner"], ["Hilfe / FAQ", "Hotels", "Werbung"], ["Flugpreise", "Günstige Angebote", "Datenschutz"]],
        footerAppTitulo: "App herunterladen",
        footerAppDesc: "Nimm deine Buchungen und Angebote überallhin mit.",
        footerDerechos: "© 2026 RuTa Tropical. Alle Rechte vorbehalten.",
        footerLegales: ["Datenschutz", "AGB", "Cookies"],
        footerAeroTitulo: "Fluggesellschaften"
      },
      ja: {
        bienvenida: "おかえりなさい",
        origen: "出発空港",
        tabs: ["概要", "アカウント", "設定", "旅行者", "お支払い方法", "通知"],
        estadisticas: "旅行の統計",
        sinEstadisticas: "まだ統計データがありません",
        subEstadisticas: "さあ出発して世界を発見しましょう！",
        verViajes: "Ver viajes",
        busquedas: "最近の検索",
        sidebarMain: ["航空券", "ホテル", "バス"],
        sidebarLinks: ["AIで計画", "旅行を計画する", "私たちについて", "お問い合わせ", "よくある質問", "探索する", "利用規約", "フライト追跡", "旅行"],
        telefonoLabel: "電話：",
        correoLabel: "メール：",
        prefTitulo: "設定",
        aeropuertosTitulo: "空港",
        aeropuertosDesc: "出発空港やよく利用する空港を保存して、フライト検索を簡単にしましょう。",
        origenSub: "出発空港",
        secSub: "代替空港",
        secPlaceholder: "代替空港を検索",
        sugerenciasLabel: "おすすめ",
        aerolineasTitulo: "航空会社",
        aerolineasDesc: "好みの航空会社を追加して、検索結果をより見やすくしましょう。",
        preferidasLabel: "優先",
        preferidasAyuda: "これらの選択肢は検索結果の上部に表示されます。",
        omitirLabel: "除外",
        omitirAyuda: "これらの選択肢は検索結果の下部に表示されます。",
        buscarAeroPlaceholder: "航空会社を検索",
        hotelesTitulo: "ホテルチェーン",
        hotelesDesc: "好みのホテルチェーンを追加して、検索結果をより見やすくしましょう。",
        buscarHotelPlaceholder: "ホテルチェーンを検索",
        lugaresTitulo: "保存した場所",
        lugaresDesc: "保存した場所から選んで、近くのホテルや宿泊施設を検索できます。",
        anadirLugar: "場所を追加",
        cuentaTitulo: "アカウント",
        revisarHistorial: "履歴を確認",
        eliminarCuenta: "アカウントを削除",
        pasajerosTitulo: "旅行者",
        pagosTitulo: "保存されたお支払い方法",
        anadirTarjeta: "クレジットカードを追加",
        alertasTitulo: "アラート",
        crearAlerta: "価格アラートを作成",
        footerLema: "世界をお得に発見するための信頼できるトラベルパートナー。比較・節約して自由に旅しよう。",
        footerCols: ["会社情報", "お問い合わせ", "その他"],
        footerEnlacesCol: [["会社概要", "プレス", "アフィリエイト", "パートナー"], ["ヘルプ / FAQ", "ホテル", "広告掲載"], ["航空運賃", "お得なオファー", "プライバシー"]],
        footerAppTitulo: "アプリをダウンロード",
        footerAppDesc: "予約やお得な情報をいつでも手元に。",
        footerDerechos: "© 2026 RuTa Tropical. All rights reserved.",
        footerLegales: ["プライバシー", "利用規約", "Cookie"],
        footerAeroTitulo: "航空会社"
      }
    };

    function setText(selector, value) {
      const el = document.querySelector(selector);
      if (el && typeof value === "string") el.textContent = value;
    }

    function setPlaceholder(selector, value) {
      const el = document.querySelector(selector);
      if (el && typeof value === "string") el.placeholder = value;
    }

    function aplicarPaisIdioma(opcionBtn) {
      if (!opcionBtn) return;
      const pais = opcionBtn.dataset.pais || "do";
      const lang = opcionBtn.dataset.lang || "es";
      const code = opcionBtn.dataset.code || "ES";
      const t = textos[lang] || textos.es;

      if (idiomaTexto) idiomaTexto.textContent = code;
      const svgBandera = opcionBtn.querySelector(".rt-bandera-img");
      if (banderaBtn && svgBandera) banderaBtn.innerHTML = svgBandera.innerHTML;

      document.querySelectorAll(".rt-cuenta-nav-item span").forEach((span, idx) => {
        if (t.sidebarMain[idx]) span.textContent = t.sidebarMain[idx];
      });
      document.querySelectorAll(".rt-cuenta-link-simple").forEach((link, idx) => {
        if (!t.sidebarLinks[idx]) return;
        const icono = link.querySelector("i");
        link.textContent = " " + t.sidebarLinks[idx];
        if (icono) link.prepend(icono);
      });
      const contactoSmalls = document.querySelectorAll(".rt-sidebar-contacto-card .rt-contacto-texto small");
      if (contactoSmalls[0]) contactoSmalls[0].textContent = t.telefonoLabel;
      if (contactoSmalls[1]) contactoSmalls[1].textContent = t.correoLabel;

      setText(".rt-cuenta-titulo", t.bienvenida);
      const etiquetasHero = document.querySelectorAll(".rt-cuenta-etiqueta");
      if (etiquetasHero[1]) etiquetasHero[1].textContent = t.origen;
      document.querySelectorAll(".rt-cuenta-tab").forEach((tab, idx) => {
        if (t.tabs[idx]) tab.textContent = t.tabs[idx];
      });

      const resSub = document.querySelectorAll("#panel-resumen .rt-cuenta-subtitulo");
      if (resSub[0]) resSub[0].textContent = t.estadisticas;
      if (resSub[1]) resSub[1].textContent = t.busquedas;
      setText("#panel-resumen .rt-banner-contenido h3", t.sinEstadisticas);
      setText("#panel-resumen .rt-banner-contenido p", t.subEstadisticas);
      setText("#panel-resumen .rt-cuenta-btn-oscuro", t.verViajes);

      setText("#panel-preferencias .rt-cuenta-titulo-seccion", t.prefTitulo);
      const prefTarjetas = document.querySelectorAll("#panel-preferencias .rt-cuenta-tarjeta");
      if (prefTarjetas[0]) {
        const h3 = prefTarjetas[0].querySelector("h3");
        const desc = prefTarjetas[0].querySelector(".rt-cuenta-subtexto");
        if (h3) h3.textContent = t.aeropuertosTitulo;
        if (desc) desc.textContent = t.aeropuertosDesc;
      }
      const prefSubtitulos = document.querySelectorAll("#panel-preferencias .rt-pref-subtitulo");
      if (prefSubtitulos[0]) prefSubtitulos[0].textContent = t.origenSub;
      if (prefSubtitulos[1]) prefSubtitulos[1].textContent = t.secSub;
      if (prefSubtitulos[2]) prefSubtitulos[2].textContent = t.preferidasLabel;
      if (prefSubtitulos[3]) prefSubtitulos[3].textContent = t.omitirLabel;
      if (prefSubtitulos[4]) prefSubtitulos[4].textContent = t.preferidasLabel;
      if (prefSubtitulos[5]) prefSubtitulos[5].textContent = t.omitirLabel;

      setPlaceholder("#rtBuscarAeropuertoSec", t.secPlaceholder);
      setText(".rt-pref-sugerencias-etiqueta", t.sugerenciasLabel);

      if (prefTarjetas[1]) {
        const h3 = prefTarjetas[1].querySelector("h3");
        const desc = prefTarjetas[1].querySelector(".rt-cuenta-subtexto");
        if (h3) h3.textContent = t.aerolineasTitulo;
        if (desc) desc.textContent = t.aerolineasDesc;
      }
      setPlaceholder("#rtAerolineasPreferidas", t.buscarAeroPlaceholder);
      setPlaceholder("#rtAerolineasOmitir", t.buscarAeroPlaceholder);

      if (prefTarjetas[2]) {
        const h3 = prefTarjetas[2].querySelector("h3");
        const desc = prefTarjetas[2].querySelector(".rt-cuenta-subtexto");
        if (h3) h3.textContent = t.hotelesTitulo;
        if (desc) desc.textContent = t.hotelesDesc;
      }
      setPlaceholder("#rtHotelesPreferidos", t.buscarHotelPlaceholder);
      setPlaceholder("#rtHotelesOmitir", t.buscarHotelPlaceholder);

      if (prefTarjetas[3]) {
        const h3 = prefTarjetas[3].querySelector("h3");
        const desc = prefTarjetas[3].querySelector(".rt-cuenta-subtexto");
        if (h3) h3.textContent = t.lugaresTitulo;
        if (desc) desc.textContent = t.lugaresDesc;
      }
      setText("#rtBtnAnadirLugar", t.anadirLugar);

      document.querySelectorAll("#panel-preferencias .rt-pref-ayuda").forEach((ayuda, i) => {
        ayuda.textContent = i % 2 === 0 ? t.preferidasAyuda : t.omitirAyuda;
      });

      setText("#panel-cuenta .rt-cuenta-titulo-seccion", t.cuentaTitulo);
      setText("#rtBtnRevisarHistorial", t.revisarHistorial);
      setText("#rtBtnEliminarCuenta", t.eliminarCuenta);
      setText("#panel-viajeros .rt-cuenta-titulo-seccion", t.pasajerosTitulo);
      setText("#panel-pagos .rt-cuenta-titulo-seccion", t.pagosTitulo);
      setText("#rtBtnAnadirTarjeta", t.anadirTarjeta);
      setText("#panel-notificaciones .rt-cuenta-titulo-seccion", t.alertasTitulo);
      setText("#rtBtnCrearAlerta span", t.crearAlerta);

      setText(".rt-footer-lema", t.footerLema);
      document.querySelectorAll(".rt-footer-col-titulo").forEach((col, i) => {
        if (t.footerCols[i]) col.textContent = t.footerCols[i];
      });
      document.querySelectorAll(".rt-footer-enlaces").forEach((ul, colIdx) => {
        const listaTextos = t.footerEnlacesCol?.[colIdx];
        if (!listaTextos) return;
        ul.querySelectorAll("a").forEach((a, linkIdx) => {
          if (!listaTextos[linkIdx]) return;
          const flecha = a.querySelector("span");
          a.textContent = " " + listaTextos[linkIdx];
          if (flecha) a.prepend(flecha);
        });
      });

      setText(".rt-footer-app-col .rt-footer-col-titulo", t.footerAppTitulo);
      setText(".rt-footer-app-desc", t.footerAppDesc);
      setText(".rt-footer-copyright", t.footerDerechos);
      document.querySelectorAll(".rt-footer-legal-links a").forEach((a, idx) => {
        if (t.footerLegales?.[idx]) a.textContent = t.footerLegales[idx];
      });
      setText(".rt-footer-aero-titulo", t.footerAeroTitulo);

      document.querySelectorAll(".rt-idioma-opcion").forEach((op) => {
        op.classList.toggle("activa", op.dataset.pais === pais);
      });
      localStorage.setItem("rt_pais", pais);
    }

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      document.getElementById("rtPerfilBox")?.classList.remove("abierto");
      document.getElementById("rtPerfilMenu")?.classList.remove("abierto");
      const abierto = box.classList.toggle("abierto");
      btn.setAttribute("aria-expanded", String(abierto));
      menu.setAttribute("aria-hidden", String(!abierto));
    });

    document.querySelectorAll(".rt-idioma-opcion").forEach((op) => {
      op.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        aplicarPaisIdioma(op);
        box.classList.remove("abierto");
        btn.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
      });
    });

    document.addEventListener("click", (e) => {
      if (!box.contains(e.target)) {
        box.classList.remove("abierto");
        btn.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
      }
    });

    const paisGuardado = localStorage.getItem("rt_pais") || "do";
    const opcionInicial =
      document.querySelector(`.rt-idioma-opcion[data-pais="${paisGuardado}"]`) ||
      document.querySelector(".rt-idioma-opcion");
    aplicarPaisIdioma(opcionInicial);
  });
  
})();

// =========================================================
// MENÚ DESPLEGABLE PROPIO ANCLADO A #rtPerfilBox (A PRUEBA DE perfil-menu.js)
// =========================================================
(function menuPerfilFlotanteSeguro() {
  const SESSION_KEY = "rt_usuario_activo";
  const SESSIONS_LIST_KEY = "rt_sesiones_activas";
  const LOGIN_URL = "login.html";

  function leerJson(clave, fallback) {
    try {
      const raw = localStorage.getItem(clave);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function obtenerOcrearMenu() {
    let menu = document.getElementById("rtPerfilMenuFlotante");
    if (!menu) {
      menu = document.createElement("div");
      menu.id = "rtPerfilMenuFlotante";
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
          <button type="button" class="rt-mfl-cuenta${activa ? " activa" : ""}" data-correo="${cor}" style="width:100%;display:flex;align-items:center;gap:10px;padding:9px 10px;border:none;border-radius:12px;background:${activa ? "rgba(23,161,207,0.12)" : "transparent"};cursor:pointer;text-align:left;">
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
      <button type="button" id="rtMflAnadir" style="width:100%;margin-top:8px;padding:9px 12px;border-radius:11px;border:1.5px dashed #81BAC2;background:#fff;color:#0F172A;font-weight:700;font-size:0.86rem;cursor:pointer;text-align:left;">+ Añadir usuario</button>
      <div style="height:1px;background:#E2E8F0;margin:8px 0;"></div>
      <a href="../descubre/descubre tu reserva tu proximo viaje.html" style="display:block;padding:8px 10px;border-radius:9px;color:#0F172A;text-decoration:none;font-size:0.88rem;font-weight:600;">Trips</a>
      <a href="../ayuda/ayuda.html" style="display:block;padding:8px 10px;border-radius:9px;color:#0F172A;text-decoration:none;font-size:0.88rem;font-weight:600;">Ayuda/Preguntas frecuentes</a>
      <a href="perfil-usuario.html" style="display:block;padding:8px 10px;border-radius:9px;color:#0F172A;text-decoration:none;font-size:0.88rem;font-weight:600;">Tu cuenta</a>
      <button type="button" id="rtMflSalir" style="width:100%;margin-top:8px;height:38px;border-radius:11px;border:1.5px solid #E2837D;background:#fff;color:#DD4350;font-weight:800;font-size:0.86rem;cursor:pointer;">Cerrar sesión</button>
    `;

    menu.querySelectorAll(".rt-mfl-cuenta").forEach((btnC) => {
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

    menu.querySelector("#rtMflAnadir")?.addEventListener("click", (ev) => {
      ev.stopPropagation();
      window.location.href = LOGIN_URL;
    });

    menu.querySelector("#rtMflSalir")?.addEventListener("click", (ev) => {
      ev.stopPropagation();
      localStorage.removeItem(SESSION_KEY);
      window.location.href = LOGIN_URL;
    });

    return menu;
  }

  function posicionarYMostrar(menu, ancla) {
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

  function ocultarMenu(menu) {
    if (!menu) return;
    menu.style.setProperty("display", "none", "important");
    menu.dataset.abierto = "0";
  }

  document.addEventListener(
    "click",
    function (e) {
      const box = e.target.closest("#rtPerfilBox, .rt-perfil-box");
      const menu = document.getElementById("rtPerfilMenuFlotante");

      if (box) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        document.getElementById("rtIdiomaBox")?.classList.remove("abierto");
        document.getElementById("rtIdiomaMenu")?.classList.remove("abierto");

        const inst = obtenerOcrearMenu();
        if (inst.dataset.abierto === "1") {
          ocultarMenu(inst);
        } else {
          posicionarYMostrar(inst, box);
        }
        return;
      }

      if (menu && !menu.contains(e.target)) {
        ocultarMenu(menu);
      }
    },
    true
  );

})();