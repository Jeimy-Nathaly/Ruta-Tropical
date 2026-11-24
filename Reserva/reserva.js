(function () {
  /* ==========================================================
     1. MENÚ LATERAL, MONEDA, USUARIO E IDIOMA
     ========================================================== */
  const nav = document.getElementById('nav-sitio');
  const cajon = document.getElementById('cajon');
  const fondo = document.getElementById('cajon-fondo');
  const abrir = document.getElementById('abrir-menu');
  const cerrar = document.getElementById('cerrar-menu');

  function alternarMenu(mostrar) {
    if (!cajon || !fondo || !abrir) return;
    cajon.classList.toggle('abierto', mostrar);
    fondo.classList.toggle('visible', mostrar);
    abrir.setAttribute('aria-expanded', String(mostrar));
    document.body.style.overflow = mostrar ? 'hidden' : '';
    const foco = mostrar ? cerrar : abrir;
    if (foco) foco.focus();
  }

  if (abrir) abrir.addEventListener('click', function () { alternarMenu(true); });
  if (cerrar) cerrar.addEventListener('click', function () { alternarMenu(false); });
  if (fondo) fondo.addEventListener('click', function () { alternarMenu(false); });

  if (cajon) {
    cajon.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { alternarMenu(false); });
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && cajon && cajon.classList.contains('abierto')) {
      alternarMenu(false);
    }
  });

  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('fija', window.scrollY > 12);
    }, { passive: true });
  }

  const STORAGE_AVATAR = 'rt_avatar_usuario';
  const STORAGE_INICIAL = 'rt_usuario_inicial';
  const usuarioMenu = document.getElementById('usuario-menu');
  const usuarioBoton = document.getElementById('usuario-boton');
  const usuarioDropdown = document.getElementById('usuario-dropdown');
  const usuarioInicial = document.getElementById('usuario-inicial');
  const avatarImg = document.getElementById('avatar-usuario');
  const btnAnadirUsuario = document.getElementById('btn-anadir-usuario');
  const btnCerrarSesion = document.getElementById('btn-cerrar-sesion');

  function setInicialUsuario(letra) {
    if (!usuarioInicial) return;
    const limpia = (letra || 'J').trim().charAt(0).toUpperCase() || 'J';
    usuarioInicial.textContent = limpia;
    try { localStorage.setItem(STORAGE_INICIAL, limpia); } catch (_) {}
  }

  try {
    const inicialGuardada = localStorage.getItem(STORAGE_INICIAL);
    if (inicialGuardada) setInicialUsuario(inicialGuardada);
    const avatarGuardado = localStorage.getItem(STORAGE_AVATAR);
    if (avatarGuardado && avatarImg) {
      avatarImg.src = avatarGuardado;
      avatarImg.hidden = false;
      if (usuarioInicial) usuarioInicial.hidden = true;
    }
  } catch (_) {}

  if (usuarioBoton && usuarioDropdown) {
    usuarioBoton.addEventListener('click', function (e) {
      e.stopPropagation();
      const abrirMenu = usuarioDropdown.hidden;
      usuarioDropdown.hidden = !abrirMenu;
      usuarioBoton.setAttribute('aria-expanded', String(abrirMenu));
    });

    document.addEventListener('click', function (e) {
      if (!usuarioDropdown.hidden && usuarioMenu && !usuarioMenu.contains(e.target)) {
        usuarioDropdown.hidden = true;
        usuarioBoton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (btnAnadirUsuario) {
    btnAnadirUsuario.addEventListener('click', function () {
      const nombre = window.prompt('Nombre del nuevo usuario:');
      if (nombre && nombre.trim()) setInicialUsuario(nombre.trim());
      if (usuarioDropdown) usuarioDropdown.hidden = true;
    });
  }

  if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener('click', function () {
      window.location.href = 'login.html';
    });
  }

  /* ==========================================================
     2. MONEDA, TARIFAS, PROVEEDORES Y FORMULARIO DEL CLIENTE
     ========================================================== */
  const TASAS = {
    usd: { simbolo: '$', codigo: 'USD', tasa: 1 },
    eur: { simbolo: '€', codigo: 'EUR', tasa: 0.92 },
    dop: { simbolo: 'RD$', codigo: 'DOP', tasa: 60.5 },
    gbp: { simbolo: '£', codigo: 'GBP', tasa: 0.79 }
  };

  let monedaActual = 'usd';
  try {
    const guardada = (localStorage.getItem('rt_moneda') || 'usd').toLowerCase();
    if (TASAS[guardada]) monedaActual = guardada;
  } catch (_) {}

  function formatoPrecio(usd) {
    const info = TASAS[monedaActual] || TASAS.usd;
    return info.simbolo + Math.round(usd * info.tasa).toLocaleString('en-US');
  }

  let tarifaSeleccionada = {
    nombre: 'Basic + Economy Basic',
    extraUsd: 0
  };

  let proveedorSeleccionado = {
    nombre: 'Booking.com',
    baseUsd: 332
  };

  const formResumenTarifa = document.getElementById('form-resumen-tarifa');
  const formResumenProveedor = document.getElementById('form-resumen-proveedor');
  const formResumenTotal = document.getElementById('form-resumen-total');
  const selPasajeros = document.getElementById('cliente-pasajeros');
  const itinerarioViajeros = document.getElementById('itinerario-viajeros');

  function actualizarPreciosYResumen() {
    document.querySelectorAll('.tarifa-card__precio[data-base-usd]').forEach(function (el) {
      el.textContent = formatoPrecio(Number(el.dataset.baseUsd) || 0);
    });

    document.querySelectorAll('.proveedor-precio[data-base-usd]').forEach(function (el) {
      const base = Number(el.dataset.baseUsd) || 0;
      el.textContent = formatoPrecio(base + tarifaSeleccionada.extraUsd);
    });

    const numViajeros = Math.max(1, Number(selPasajeros && selPasajeros.value) || 2);
    const totalUsd = (proveedorSeleccionado.baseUsd + tarifaSeleccionada.extraUsd) * numViajeros;

    if (formResumenTarifa) formResumenTarifa.textContent = tarifaSeleccionada.nombre;
    if (formResumenProveedor) formResumenProveedor.textContent = proveedorSeleccionado.nombre;
    if (formResumenTotal) formResumenTotal.textContent = formatoPrecio(totalUsd);
    if (itinerarioViajeros) {
      itinerarioViajeros.textContent = numViajeros + (numViajeros === 1 ? ' viajero' : ' viajeros');
    }
  }

  const monedaControl = document.getElementById('moneda-control');
  const monedaBoton = document.getElementById('moneda-boton');
  const monedaLista = document.getElementById('moneda-lista');
  const monedaSimbolo = document.getElementById('moneda-simbolo');
  const monedaCodigo = document.getElementById('moneda-codigo');

  function seleccionarMoneda(cod) {
    const limpia = (cod || 'usd').toLowerCase();
    const info = TASAS[limpia] || TASAS.usd;
    monedaActual = limpia;
    if (monedaSimbolo) monedaSimbolo.textContent = info.simbolo;
    if (monedaCodigo) monedaCodigo.textContent = info.codigo;
    if (monedaLista) {
      monedaLista.querySelectorAll('li[data-moneda]').forEach(function (li) {
        li.setAttribute('aria-selected', String(li.dataset.moneda === limpia));
      });
    }
    try { localStorage.setItem('rt_moneda', limpia); } catch (_) {}
    actualizarPreciosYResumen();
  }

  if (monedaBoton && monedaLista) {
    monedaBoton.addEventListener('click', function (e) {
      e.stopPropagation();
      const abrirLista = monedaLista.hidden;
      monedaLista.hidden = !abrirLista;
      monedaBoton.setAttribute('aria-expanded', String(abrirLista));
    });

    monedaLista.addEventListener('click', function (e) {
      const li = e.target.closest('li[data-moneda]');
      if (!li) return;
      seleccionarMoneda(li.dataset.moneda);
      monedaLista.hidden = true;
      monedaBoton.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('click', function (e) {
      if (!monedaLista.hidden && monedaControl && !monedaControl.contains(e.target)) {
        monedaLista.hidden = true;
        monedaBoton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const tarjetasTarifa = Array.from(document.querySelectorAll('.tarifa-card'));
  tarjetasTarifa.forEach(function (card) {
    function activarTarifa() {
      tarjetasTarifa.forEach(function (c) { c.classList.remove('activa'); });
      card.classList.add('activa');
      const tituloEl = card.querySelector('.tarifa-card__nombre');
      tarifaSeleccionada = {
        nombre: tituloEl ? tituloEl.textContent.trim() : 'Basic + Economy Basic',
        extraUsd: Number(card.dataset.extraUsd) || 0
      };
      actualizarPreciosYResumen();
    }

    card.addEventListener('click', activarTarifa);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activarTarifa();
      }
    });
  });

  const btnDetallesTarifa = document.getElementById('btn-detalles-tarifa');
  const panelDetallesTarifa = document.getElementById('detalles-tarifa');
  if (btnDetallesTarifa && panelDetallesTarifa) {
    btnDetallesTarifa.addEventListener('click', function () {
      const abrirPanel = panelDetallesTarifa.hidden;
      panelDetallesTarifa.hidden = !abrirPanel;
      btnDetallesTarifa.setAttribute('aria-expanded', String(abrirPanel));
    });
  }

  const filasProveedor = Array.from(document.querySelectorAll('.proveedor-fila'));
  const formCliente = document.getElementById('form-reserva-cliente');
  const inpNombre = document.getElementById('cliente-nombre');

  filasProveedor.forEach(function (fila) {
    const btn = fila.querySelector('.btn-reservar-marca');
    if (!btn) return;
    btn.addEventListener('click', function () {
      filasProveedor.forEach(function (f) { f.classList.remove('seleccionada'); });
      fila.classList.add('seleccionada');
      proveedorSeleccionado = {
        nombre: fila.dataset.proveedor || 'Booking.com',
        baseUsd: Number(fila.dataset.baseUsd) || 322
      };
      actualizarPreciosYResumen();
      if (formCliente) {
        formCliente.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (inpNombre) inpNombre.focus();
    });
  });

  if (selPasajeros) {
    selPasajeros.addEventListener('change', actualizarPreciosYResumen);
  }

  const vistaReserva = document.getElementById('vista-reserva');
  const vistaComprobante = document.getElementById('vista-comprobante');
  const comprobanteCodigo = document.getElementById('comprobante-codigo');
  const comprobanteDatos = document.getElementById('comprobante-datos');
  const btnVolverReserva = document.getElementById('btn-volver-reserva');

  if (formCliente) {
    formCliente.addEventListener('submit', function (e) {
      e.preventDefault();
      const nombre = (inpNombre && inpNombre.value.trim()) || '';
      const email = ((document.getElementById('cliente-email') || {}).value || '').trim();
      const telefono = ((document.getElementById('cliente-telefono') || {}).value || '').trim();
      const documento = ((document.getElementById('cliente-documento') || {}).value || '').trim();
      const viajeros = Math.max(1, Number(selPasajeros && selPasajeros.value) || 2);
      const notas = ((document.getElementById('cliente-notas') || {}).value || '').trim();
      const total = formatoPrecio((proveedorSeleccionado.baseUsd + tarifaSeleccionada.extraUsd) * viajeros);
      const codigo = 'RT-' + Math.floor(10000 + Math.random() * 90000);

      if (comprobanteCodigo) comprobanteCodigo.textContent = codigo;
      if (comprobanteDatos) {
        comprobanteDatos.innerHTML =
          '<div><span>Ruta</span><strong>MVD ↔ SCL (Ida y vuelta)</strong></div>' +
          '<div><span>Tarifa</span><strong>' + tarifaSeleccionada.nombre + '</strong></div>' +
          '<div><span>Proveedor</span><strong>' + proveedorSeleccionado.nombre + '</strong></div>' +
          '<div><span>Pasajero</span><strong>' + nombre + '</strong></div>' +
          '<div><span>Correo</span><strong>' + email + '</strong></div>' +
          '<div><span>Teléfono</span><strong>' + telefono + '</strong></div>' +
          '<div><span>Documento</span><strong>' + documento + '</strong></div>' +
          '<div><span>Viajeros</span><strong>' + viajeros + '</strong></div>' +
          (notas ? '<div><span>Notas</span><strong>' + notas + '</strong></div>' : '') +
          '<div><span>Total estimado</span><strong>' + total + '</strong></div>';
      }

      if (vistaReserva) vistaReserva.hidden = true;
      if (vistaComprobante) vistaComprobante.hidden = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (btnVolverReserva) {
    btnVolverReserva.addEventListener('click', function () {
      if (formCliente) formCliente.reset();
      if (vistaComprobante) vistaComprobante.hidden = true;
      if (vistaReserva) vistaReserva.hidden = false;
      actualizarPreciosYResumen();
    });
  }

  const btnGuardar = document.getElementById('btn-guardar-vuelo');
  if (btnGuardar) {
    btnGuardar.addEventListener('click', function () {
      const ico = btnGuardar.querySelector('i');
      const guardado = btnGuardar.classList.toggle('guardado');
      if (ico) ico.className = guardado ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
      btnGuardar.style.color = guardado ? '#dd4350' : '#334155';
    });
  }

  const btnCompartir = document.getElementById('btn-compartir-vuelo');
  if (btnCompartir && navigator.clipboard) {
    btnCompartir.addEventListener('click', function () {
      navigator.clipboard.writeText(window.location.href).catch(function () {});
    });
  }

  seleccionarMoneda(monedaActual);

  /* ==========================================================
     3. SELECTOR DE IDIOMA + TRADUCCIÓN AUTOMÁTICA
     ========================================================== */
  const IDIOMAS = [
    ['es', 'Español', 'España / Latinoamérica', 'es'],
    ['en', 'English', 'United States', 'us'],
    ['fr', 'Français', 'France', 'fr'],
    ['de', 'Deutsch', 'Deutschland', 'de'],
    ['it', 'Italiano', 'Italia', 'it'],
    ['pt', 'Português', 'Portugal / Brasil', 'pt'],
    ['nl', 'Nederlands', 'Nederland', 'nl'],
    ['ru', 'Русский', 'Россия', 'ru'],
    ['zh', '中文', '简体中文', 'cn'],
    ['ja', '日本語', '日本', 'jp'],
    ['ko', '한국어', '대한민국', 'kr'],
    ['ar', 'العربية', 'العالم العربي', 'sa'],
    ['hi', 'हिन्दी', 'भारत', 'in'],
    ['tr', 'Türkçe', 'Türkiye', 'tr'],
    ['pl', 'Polski', 'Polska', 'pl'],
    ['sv', 'Svenska', 'Sverige', 'se']
  ];

  const CACHE_RESERVA = 'rt_reserva_marca_i18n_v1_';

  const TEXTOS_BASE = {
    paso1Titulo: 'Paso 1: elige una tarifa',
    paso2Titulo: 'Paso 2: elige dónde quieres realizar la reserva',
    paso2Sub: 'Ruta Tropical compara opciones y tarifas disponibles para tu vuelo seleccionado.',
    pieDesc: 'Your trusted agency to discover the world at the best price. Compare, save and fly without limits.',
    pieAppDesc: 'Always carry your reservations and offers with you.',
    menu: {
      principal: ['Vuelos', 'Hoteles', 'Autobús'],
      enlaces: [
        'Planifica con IA',
        'Tarifas de equipaje',
        'Planea tus viajes',
        'Sobre nosotros',
        'Contacto',
        'Preguntas frecuentes',
        'Explorar',
        'Términos y condiciones',
        'Rastreador de vuelos',
        'Viajes'
      ],
      telefono: 'Teléfono:',
      correo: 'Correo:'
    }
  };

  function establecerTextoMenu(enlace, texto) {
    if (!enlace || !texto) return;
    const ico = enlace.querySelector('i');
    enlace.textContent = '';
    if (ico) enlace.appendChild(ico);
    enlace.appendChild(document.createTextNode(' ' + texto));
  }

  function pintarIdioma(t) {
    if (!t) return;
    const p1 = document.getElementById('paso1-titulo');
    const p2 = document.getElementById('paso2-titulo');
    const p2s = document.getElementById('paso2-sub');
    const pd = document.getElementById('pie-descripcion');
    const pa = document.getElementById('pie-app-desc');

    if (p1) p1.textContent = t.paso1Titulo;
    if (p2) p2.textContent = t.paso2Titulo;
    if (p2s) p2s.textContent = t.paso2Sub;
    if (pd) pd.textContent = t.pieDesc;
    if (pa) pa.textContent = t.pieAppDesc;

    if (t.menu) {
      document.querySelectorAll('.cajon__principal a').forEach(function (a, i) {
        if (t.menu.principal && t.menu.principal[i]) establecerTextoMenu(a, t.menu.principal[i]);
      });
      document.querySelectorAll('.cajon__enlaces a').forEach(function (a, i) {
        if (t.menu.enlaces && t.menu.enlaces[i]) establecerTextoMenu(a, t.menu.enlaces[i]);
      });
      const et = document.querySelectorAll('.cajon__contacto .contacto-fila strong');
      if (et[0] && t.menu.telefono) et[0].textContent = t.menu.telefono;
      if (et[1] && t.menu.correo) et[1].textContent = t.menu.correo;
    }
  }

  async function traducirFrase(texto, langTarget) {
    if (!texto) return '';
    const url =
      'https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=' +
      encodeURIComponent(langTarget) +
      '&dt=t&q=' +
      encodeURIComponent(texto);
    try {
      const resp = await fetch(url);
      if (!resp.ok) return texto;
      const data = await resp.json();
      if (!Array.isArray(data) || !Array.isArray(data[0])) return texto;
      return data[0].map(function (seg) { return seg[0] || ''; }).join('').trim() || texto;
    } catch (_) {
      return texto;
    }
  }

  async function traducirObjeto(cod) {
    try {
      const guardado = localStorage.getItem(CACHE_RESERVA + cod);
      if (guardado) return JSON.parse(guardado);
    } catch (_) {}

    const d = JSON.parse(JSON.stringify(TEXTOS_BASE));
    d.paso1Titulo = await traducirFrase(d.paso1Titulo, cod);
    d.paso2Titulo = await traducirFrase(d.paso2Titulo, cod);
    d.paso2Sub = await traducirFrase(d.paso2Sub, cod);
    d.pieDesc = await traducirFrase(d.pieDesc, cod);
    d.pieAppDesc = await traducirFrase(d.pieAppDesc, cod);
    d.menu.telefono = await traducirFrase(d.menu.telefono, cod);
    d.menu.correo = await traducirFrase(d.menu.correo, cod);
    for (let i = 0; i < d.menu.principal.length; i++) {
      d.menu.principal[i] = await traducirFrase(d.menu.principal[i], cod);
    }
    for (let i = 0; i < d.menu.enlaces.length; i++) {
      d.menu.enlaces[i] = await traducirFrase(d.menu.enlaces[i], cod);
    }

    try { localStorage.setItem(CACHE_RESERVA + cod, JSON.stringify(d)); } catch (_) {}
    return d;
  }

  const contenedorIdioma = document.getElementById('idioma');
  const botonIdioma = document.getElementById('idioma-boton');
  const panelIdioma = document.getElementById('idioma-lista');
  const buscarIdioma = document.getElementById('idioma-buscar');
  const opcionesIdiomaUl = document.getElementById('idioma-opciones');
  const banderaIdioma = document.getElementById('idioma-bandera');
  const codigoIdioma = document.getElementById('idioma-codigo');

  if (contenedorIdioma && botonIdioma && panelIdioma && opcionesIdiomaUl && banderaIdioma && codigoIdioma) {
    let idiomaActual = 'es';
    try {
      idiomaActual = (
        localStorage.getItem('rt_idioma_seleccionado') ||
        localStorage.getItem('idioma') ||
        'es'
      ).toLowerCase();
    } catch (_) {}
    if (!IDIOMAS.some(function (i) { return i[0] === idiomaActual; })) idiomaActual = 'es';

    const flagUrl = function (pais) { return 'https://flagcdn.com/w40/' + pais + '.png'; };

    function renderIdiomas(filtro) {
      const q = (filtro || '').trim().toLowerCase();
      opcionesIdiomaUl.innerHTML = '';
      IDIOMAS.filter(function (i) {
        if (!q) return true;
        return i[0].toLowerCase().includes(q) || i[1].toLowerCase().includes(q) || i[2].toLowerCase().includes(q);
      }).forEach(function (i) {
        const li = document.createElement('li');
        li.setAttribute('role', 'option');
        li.dataset.codigo = i[0];
        li.setAttribute('aria-selected', String(i[0] === idiomaActual));
        li.innerHTML =
          '<img src="' + flagUrl(i[3]) + '" alt="" width="28" height="19" loading="lazy">' +
          '<span class="idioma__texto-grupo">' +
            '<span class="idioma__nombre">' + i[1] + '</span>' +
            '<span class="idioma__region">' + i[2] + '</span>' +
          '</span>' +
          '<small>' + i[0].toUpperCase() + '</small>';
        opcionesIdiomaUl.appendChild(li);
      });
    }

    function elegirIdioma(cod) {
      const datos = IDIOMAS.find(function (i) { return i[0] === cod; });
      if (!datos) return;
      idiomaActual = cod;
      banderaIdioma.src = flagUrl(datos[3]);
      codigoIdioma.textContent = cod.toUpperCase();
      document.documentElement.lang = cod;
      try {
        localStorage.setItem('idioma', cod);
        localStorage.setItem('rt_idioma_seleccionado', cod);
      } catch (_) {}

      opcionesIdiomaUl.querySelectorAll('li[data-codigo]').forEach(function (li) {
        li.setAttribute('aria-selected', String(li.dataset.codigo === cod));
      });

      if (cod === 'es') {
        pintarIdioma(TEXTOS_BASE);
      } else {
        pintarIdioma(TEXTOS_BASE);
        traducirObjeto(cod).then(function (trad) {
          if (idiomaActual === cod && trad) pintarIdioma(trad);
        });
      }
    }

    renderIdiomas('');

    if (buscarIdioma) {
      buscarIdioma.addEventListener('input', function () {
        renderIdiomas(buscarIdioma.value);
      });
    }

    botonIdioma.addEventListener('click', function (e) {
      e.stopPropagation();
      const abrirPanel = panelIdioma.hidden;
      panelIdioma.hidden = !abrirPanel;
      botonIdioma.setAttribute('aria-expanded', String(abrirPanel));
      if (abrirPanel && buscarIdioma) {
        buscarIdioma.value = '';
        renderIdiomas('');
        buscarIdioma.focus();
      }
    });

    opcionesIdiomaUl.addEventListener('click', function (e) {
      const li = e.target.closest('li[data-codigo]');
      if (!li) return;
      elegirIdioma(li.dataset.codigo);
      panelIdioma.hidden = true;
      botonIdioma.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('click', function (e) {
      if (!panelIdioma.hidden && !contenedorIdioma.contains(e.target)) {
        panelIdioma.hidden = true;
        botonIdioma.setAttribute('aria-expanded', 'false');
      }
    });

    elegirIdioma(idiomaActual);
  }
})();