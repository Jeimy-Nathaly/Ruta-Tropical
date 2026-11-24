/* ==========================================================
   1. BARRA DE NAVEGACIÓN, MENÚ LATERAL, MONEDA Y MENÚ USUARIO
   ========================================================== */
(function () {
  const nav = document.getElementById('nav-sitio');
  const cajon = document.getElementById('cajon');
  const fondo = document.getElementById('cajon-fondo');
  const abrir = document.getElementById('abrir-menu');
  const cerrar = document.getElementById('cerrar-menu');
  const portada = document.querySelector('.portada') || document.querySelector('.hero');

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
    if (portada && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entradas) {
        const visible = entradas[0].isIntersecting;
        nav.classList.toggle('fija', !visible);
      }).observe(portada);
    } else {
      nav.classList.add('fija');
    }
  }

  /* ---------- Menú desplegable de usuario + inicial / avatar ---------- */
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

  function mostrarImagenAvatar(src) {
    if (!avatarImg || !src) {
      if (avatarImg) {
        avatarImg.hidden = true;
        avatarImg.removeAttribute('src');
      }
      if (usuarioInicial) usuarioInicial.hidden = false;
      return;
    }
    avatarImg.hidden = false;
    avatarImg.src = src;
  }

  function aplicarAvatar(src) {
    if (!src) {
      try { localStorage.removeItem(STORAGE_AVATAR); } catch (_) {}
      mostrarImagenAvatar('');
      return;
    }
    try { localStorage.setItem(STORAGE_AVATAR, src); } catch (_) {}
    mostrarImagenAvatar(src);
  }

  try {
    const inicialGuardada = localStorage.getItem(STORAGE_INICIAL);
    if (inicialGuardada) setInicialUsuario(inicialGuardada);
  } catch (_) {}

  if (avatarImg) {
    avatarImg.addEventListener('error', function () {
      avatarImg.hidden = true;
      avatarImg.removeAttribute('src');
      if (usuarioInicial) usuarioInicial.hidden = false;
    });

    avatarImg.addEventListener('load', function () {
      if (avatarImg.naturalWidth > 0) {
        avatarImg.hidden = false;
        if (usuarioInicial) usuarioInicial.hidden = true;
      }
    });

    try {
      const guardadoAvatar = localStorage.getItem(STORAGE_AVATAR);
      if (guardadoAvatar) {
        mostrarImagenAvatar(guardadoAvatar);
      } else {
        avatarImg.hidden = true;
        if (usuarioInicial) usuarioInicial.hidden = false;
      }
    } catch (_) {
      avatarImg.hidden = true;
    }
  }

  function abrirUsuarioDropdown() {
    if (!usuarioDropdown || !usuarioBoton) return;
    usuarioDropdown.hidden = false;
    usuarioBoton.setAttribute('aria-expanded', 'true');
  }

  function cerrarUsuarioDropdown() {
    if (!usuarioDropdown || !usuarioBoton) return;
    usuarioDropdown.hidden = true;
    usuarioBoton.setAttribute('aria-expanded', 'false');
  }

  if (usuarioBoton && usuarioDropdown) {
    usuarioBoton.addEventListener('click', function (e) {
      e.stopPropagation();
      usuarioDropdown.hidden ? abrirUsuarioDropdown() : cerrarUsuarioDropdown();
    });

    usuarioDropdown.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        cerrarUsuarioDropdown();
      });
    });

    document.addEventListener('click', function (e) {
      if (!usuarioDropdown.hidden && usuarioMenu && !usuarioMenu.contains(e.target)) {
        cerrarUsuarioDropdown();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !usuarioDropdown.hidden) {
        cerrarUsuarioDropdown();
        usuarioBoton.focus();
      }
    });
  }

  if (btnAnadirUsuario) {
    btnAnadirUsuario.addEventListener('click', function () {
      const nombre = window.prompt('Nombre del nuevo usuario:');
      if (nombre && nombre.trim()) {
        setInicialUsuario(nombre.trim());
      }
      cerrarUsuarioDropdown();
    });
  }

  if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener('click', function () {
      cerrarUsuarioDropdown();
      window.location.href = 'login.html';
    });
  }

  window.cambiarFotoUsuario = aplicarAvatar;
  window.cambiarInicialUsuario = setInicialUsuario;

  /* ---------- Moneda desplegable personalizada ---------- */
  const monedaControl = document.getElementById('moneda-control');
  const monedaBoton = document.getElementById('moneda-boton');
  const monedaLista = document.getElementById('moneda-lista');
  const monedaSimbolo = document.getElementById('moneda-simbolo');
  const monedaCodigo = document.getElementById('moneda-codigo');
  const currencySelect = document.getElementById('currency');

  const monedasDatos = {
    usd: { simbolo: '$', codigo: 'USD' },
    eur: { simbolo: '€', codigo: 'EUR' },
    dop: { simbolo: 'RD$', codigo: 'DOP' },
    gbp: { simbolo: '£', codigo: 'GBP' }
  };

  function opcionesMoneda() {
    return monedaLista ? Array.from(monedaLista.querySelectorAll('li[data-moneda]')) : [];
  }

  function seleccionarMoneda(cod) {
    const limpia = (cod || 'usd').toLowerCase();
    const info = monedasDatos[limpia] || monedasDatos.usd;

    if (monedaSimbolo) monedaSimbolo.textContent = info.simbolo;
    if (monedaCodigo) monedaCodigo.textContent = info.codigo;
    if (currencySelect) currencySelect.value = limpia;

    opcionesMoneda().forEach(function (li) {
      li.setAttribute('aria-selected', String(li.dataset.moneda === limpia));
    });

    try { localStorage.setItem('rt_moneda', limpia); } catch (_) {}
    document.dispatchEvent(new CustomEvent('moneda:cambio', { detail: { moneda: limpia } }));
  }

  function abrirMoneda() {
    if (!monedaLista || !monedaBoton) return;
    monedaLista.hidden = false;
    monedaBoton.setAttribute('aria-expanded', 'true');
  }

  function cerrarMoneda() {
    if (!monedaLista || !monedaBoton) return;
    monedaLista.hidden = true;
    monedaBoton.setAttribute('aria-expanded', 'false');
  }

  if (monedaBoton && monedaLista) {
    monedaBoton.addEventListener('click', function (e) {
      e.stopPropagation();
      monedaLista.hidden ? abrirMoneda() : cerrarMoneda();
    });

    monedaLista.addEventListener('click', function (e) {
      const li = e.target.closest('li[data-moneda]');
      if (!li) return;
      seleccionarMoneda(li.dataset.moneda);
      cerrarMoneda();
      monedaBoton.focus();
    });

    document.addEventListener('click', function (e) {
      if (!monedaLista.hidden && monedaControl && !monedaControl.contains(e.target)) {
        cerrarMoneda();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !monedaLista.hidden) {
        cerrarMoneda();
        monedaBoton.focus();
      }
    });

    let monedaInicial = 'usd';
    try {
      const guardada = (localStorage.getItem('rt_moneda') || '').toLowerCase();
      if (monedasDatos[guardada]) monedaInicial = guardada;
    } catch (_) {}
    seleccionarMoneda(monedaInicial);
  }
})();

/* ==========================================================
   2. ANIMACIONES DE SECCIONES Y PIE DE PÁGINA
   ========================================================== */
(function () {
  const objetivos = Array.from(
    document.querySelectorAll('.faq-seccion, .contacto article, .rt-footer__top > div, .rt-footer__legal, .rt-footer__partners')
  );

  if (!objetivos.length) return;

  const sinAnimacion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (sinAnimacion || !('IntersectionObserver' in window)) {
    objetivos.forEach(function (el) { el.classList.add('animar-entrada'); });
    return;
  }

  const obs = new IntersectionObserver(function (entradas, observer) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('animar-entrada');
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

  objetivos.forEach(function (el, idx) {
    el.style.animationDelay = Math.min(idx * 45, 220) + 'ms';
    obs.observe(el);
  });
})();

/* ==========================================================
   3. PREGUNTAS FRECUENTES + BUSCADOR
   ========================================================== */
const RESPUESTA_DEFECTO = 'Escribe aquí la respuesta.';

const FAQ_BASE = [
  {
    titulo: 'Vuelos',
    preguntas: [
      '¡Ayuda! Necesito modificar o cancelar mi reserva.',
      'Cuando hago clic en una oferta en la web, me dice que el precio ha aumentado. ¿Qué ocurre?',
      '¿Cuál es la política de reembolsos de Ruta Tropical?',
      '¿Qué es Ruta Tropical Mix?',
      '¿Los precios incluyen tasas e impuestos?',
      '¿El precio del vuelo incluye las tasas de equipaje?',
      '¿Cómo creo una alerta de precios?',
      '¿Para qué sirve la gráfica que aparece al lado de los resultados de vuelos?',
      '¿Por qué no aparece una predicción de precio en los resultados de mi búsqueda?',
      '¿Puedo incluir niños en mi búsqueda de vuelos?',
      '¿Puedo reservar un vuelo para otra persona?',
      '¿Puedo reservar un viaje con varios destinos?',
      '¿Qué es la búsqueda de fechas flexibles?',
      'Quiero organizar un viaje con varias personas, ¿puedo realizar reservas de vuelos para grupos?',
      '¿Por qué aparece “aerolínea destacada” en lugar de mostrar el nombre de la aerolínea?'
    ]
  },
  {
    titulo: 'Hoteles',
    preguntas: [
      '¡Ayuda! Necesito modificar o cancelar mi reserva.',
      'Cuando hago clic en una oferta en la web, me dice que el precio ha aumentado. ¿Qué ocurre?',
      '¿Cuál es la política de reembolsos de Ruta Tropical?',
      '¿Cómo creo una alerta de precios?',
      '¿En qué se basa la categoría dada a cada hotel?',
      '¿Cómo sé que las opiniones de un hotel son legítimas?',
      '¿Qué tengo que hacer para que mi hotel aparezca en Ruta Tropical?',
      '¿Cómo puedo compartir la ubicación en mi dispositivo móvil para poder buscar hoteles cerca de mí?',
      '¿Dónde puedo encontrar la información de contacto del hotel?'
    ]
  },
  {
    titulo: 'Autos',
    preguntas: [
      '¡Ayuda! Necesito modificar o cancelar mi reserva.',
      '¿Dónde está mi reserva de auto?',
      '¿Cuál es la política de reembolsos de Ruta Tropical?',
      'Cuando hago clic en una oferta en la web, me dice que el precio ha aumentado. ¿Qué ocurre?',
      '¿Cuáles son los requisitos de edad para rentar un auto?'
    ]
  },
  {
    titulo: 'Trips',
    preguntas: [
      '¿Qué es Trips?',
      '¿Cómo puedo combinar dos viajes?',
      '¿Cómo puedo reservar un resultado guardado en Trips?',
      '¿Qué pasa cuando conecto mi bandeja de entrada?'
    ]
  },
  {
    titulo: 'Cuenta',
    preguntas: [
      '¿Dónde puedo encontrar el comprobante de mi reserva?',
      '¿Cómo puedo cambiar el email de mi cuenta de Ruta Tropical?',
      '¿Cómo puedo realizar modificaciones en mi cuenta de Ruta Tropical?',
      '¿Cómo puedo restablecer mi contraseña?',
      '¿Qué hago para dejar de recibir emails?'
    ]
  }
];

const ICONOS_SECCION_FAQ = {
  vuelos: 'fa-plane',
  hoteles: 'fa-hotel',
  autos: 'fa-car',
  trips: 'fa-suitcase-rolling',
  cuenta: 'fa-user-check'
};

function obtenerIconoSeccion(titulo) {
  const clave = (titulo || '').trim().toLowerCase();
  return ICONOS_SECCION_FAQ[clave] || 'fa-circle-question';
}

function asegurarBadgePregunta(summaryEl) {
  if (!summaryEl) return;
  const textoSpanExistente = summaryEl.querySelector('.faq-pregunta-texto');
  const textoPlano = textoSpanExistente
    ? textoSpanExistente.textContent
    : Array.from(summaryEl.childNodes)
        .filter(function (n) { return n.nodeType === Node.TEXT_NODE; })
        .map(function (n) { return n.textContent; })
        .join('')
        .trim();

  summaryEl.textContent = '';

  const badge = document.createElement('span');
  badge.className = 'faq-pregunta-ico';
  badge.setAttribute('aria-hidden', 'true');
  badge.textContent = '?';

  const textoSpan = document.createElement('span');
  textoSpan.className = 'faq-pregunta-texto';
  textoSpan.textContent = textoPlano;

  summaryEl.appendChild(badge);
  summaryEl.appendChild(textoSpan);
}

function decorarSummariesExistentes() {
  document.querySelectorAll('.aviso details summary').forEach(asegurarBadgePregunta);
}

function dibujarSeccionesFAQ(secciones, respuestaTexto) {
  const contenedorFaq = document.getElementById('faq-secciones');
  if (!contenedorFaq) return;

  const listaSecciones = Array.isArray(secciones) ? secciones : FAQ_BASE;
  const textoResp = respuestaTexto || RESPUESTA_DEFECTO;

  contenedorFaq.innerHTML = '';

  listaSecciones.forEach(function (seccion) {
    const bloque = document.createElement('section');
    bloque.className = 'faq-seccion';

    const iconoClase = obtenerIconoSeccion(seccion.titulo);
    const tituloH3 = document.createElement('h3');
    const iconoSpan = document.createElement('span');
    iconoSpan.className = 'faq-seccion__icono';
    iconoSpan.setAttribute('aria-hidden', 'true');
    iconoSpan.innerHTML = '<i class="fa-solid ' + iconoClase + '"></i>';
    tituloH3.appendChild(iconoSpan);
    tituloH3.appendChild(document.createTextNode(seccion.titulo));

    const caja = document.createElement('div');
    caja.className = 'faq-caja';

    (seccion.preguntas || []).forEach(function (p) {
      const pregunta = typeof p === 'string' ? p : p.pregunta;
      const respuesta = (typeof p === 'object' && p.respuesta) ? p.respuesta : textoResp;

      const det = document.createElement('details');
      const sum = document.createElement('summary');
      sum.textContent = pregunta;
      asegurarBadgePregunta(sum);

      const respDiv = document.createElement('div');
      respDiv.className = 'respuesta';
      respDiv.textContent = respuesta;

      det.appendChild(sum);
      det.appendChild(respDiv);
      caja.appendChild(det);
    });

    bloque.appendChild(tituloH3);
    bloque.appendChild(caja);
    contenedorFaq.appendChild(bloque);
  });

  decorarSummariesExistentes();
  filtrarFAQ();
}

function filtrarFAQ() {
  const buscador = document.getElementById('buscar-faq');
  const sinResultados = document.getElementById('sin-resultados');
  if (!buscador) return;

  const texto = buscador.value.trim().toLowerCase();
  let totalVisibles = 0;

  document.querySelectorAll('.faq-seccion').forEach(function (seccion) {
    let visiblesSeccion = 0;

    seccion.querySelectorAll('details').forEach(function (item) {
      const coincide = !texto || item.textContent.toLowerCase().includes(texto);
      item.hidden = !coincide;
      if (coincide) visiblesSeccion++;
    });

    seccion.hidden = visiblesSeccion === 0;
    totalVisibles += visiblesSeccion;
  });

  if (sinResultados) {
    sinResultados.hidden = totalVisibles !== 0;
  }
}

dibujarSeccionesFAQ(FAQ_BASE, RESPUESTA_DEFECTO);

const buscadorInput = document.getElementById('buscar-faq');
if (buscadorInput) {
  buscadorInput.addEventListener('input', filtrarFAQ);
}

/* ==========================================================
   4. SELECTOR DE IDIOMA (ESTILO TARJETA) + TRADUCCIÓN DE AYUDA
   ========================================================== */
(function () {
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
    ['bn', 'বাংলা', 'বাংলাদেশ', 'bd'],
    ['ur', 'اردو', 'پاکستان', 'pk'],
    ['fa', 'فارسی', 'ایران', 'ir'],
    ['tr', 'Türkçe', 'Türkiye', 'tr'],
    ['he', 'עברית', 'ישראל', 'il'],
    ['pl', 'Polski', 'Polska', 'pl'],
    ['uk', 'Українська', 'Україна', 'ua'],
    ['cs', 'Čeština', 'Česko', 'cz'],
    ['sk', 'Slovenčina', 'Slovensko', 'sk'],
    ['hu', 'Magyar', 'Magyarország', 'hu'],
    ['ro', 'Română', 'România', 'ro'],
    ['bg', 'Български', 'България', 'bg'],
    ['el', 'Ελληνικά', 'Ελλάδα', 'gr'],
    ['sr', 'Српски', 'Србија', 'rs'],
    ['hr', 'Hrvatski', 'Hrvatska', 'hr'],
    ['sl', 'Slovenščina', 'Slovenija', 'si'],
    ['sv', 'Svenska', 'Sverige', 'se'],
    ['no', 'Norsk', 'Norge', 'no'],
    ['da', 'Dansk', 'Danmark', 'dk'],
    ['fi', 'Suomi', 'Suomi', 'fi'],
    ['is', 'Íslenska', 'Ísland', 'is'],
    ['et', 'Eesti', 'Eesti', 'ee'],
    ['lv', 'Latviešu', 'Latvija', 'lv'],
    ['lt', 'Lietuvių', 'Lietuva', 'lt'],
    ['th', 'ไทย', 'ประเทศไทย', 'th'],
    ['vi', 'Tiếng Việt', 'Việt Nam', 'vn'],
    ['id', 'Bahasa Indonesia', 'Indonesia', 'id'],
    ['ms', 'Bahasa Melayu', 'Malaysia', 'my'],
    ['tl', 'Filipino', 'Pilipinas', 'ph'],
    ['sw', 'Kiswahili', 'Afrika Mashariki', 'ke'],
    ['ga', 'Gaeilge', 'Éire', 'ie']
  ];

  const CACHE_AYUDA = 'rt_ayuda_i18n_v1_';

  const TEXTOS_AYUDA = {
    es: {
      heroH1: '¿Cómo podemos ayudarte?',
      faqH2: 'Preguntas frecuentes',
      buscadorPlaceholder: 'p. ej.: reserva, cancelar, precio',
      avisoTitulo: 'Estafas de trabajo de Ruta Tropical',
      avisoParrafos: [
        'Existe un aumento de estafadores que se hacen pasar por empresas como Ruta Tropical y ofrecen falsas oportunidades de trabajo a quienes buscan empleo. Suelen iniciar contacto a través de llamadas, WhatsApp, Instagram, LinkedIn o email.',
        'Estos estafadores usan el nombre de nuestra marca y logotipo, y piden completar tareas o divulgar información personal con el pretexto de pagos o comisiones. Ruta Tropical no recluta de esa manera.'
      ],
      avisoDetalles: [
        ['Estafas: qué tener en cuenta', 'Escribe aquí la información.'],
        ['Avisos importantes', 'Escribe aquí la información.']
      ],
      respuestaDefecto: RESPUESTA_DEFECTO,
      faqSecciones: FAQ_BASE,
      sinResultados: 'No encontramos preguntas con esa búsqueda.',
      contacto: [
        ['Chatea con Ruta Tropical', 'Escribe aquí tu pregunta.', 'Chat'],
        ['¿Tienes preguntas o comentarios?', 'Envíanos un mensaje', 'Enviar comentarios'],
        ['¿Problemas con la exactitud de precios?', '¿Encontraste un precio distinto? Cuéntanos.', 'Informar sobre un problema']
      ],
      menu: {
        principal: ['Vuelos', 'Hoteles', 'Autobús'],
        enlaces: [
          'planifica con IA',
          'planean tus viajes',
          'Sobre nosotros',
          'Contacto',
          'Preguntas frecuentes',
          'explorar',
          'Términos y condiciones',
          'rastraedor de vuelos',
          'viajes'
        ],
        telefono: 'Teléfono:',
        correo: 'Correo:'
      },
      footer: {
        desc: 'Tu agencia de confianza para descubrir el mundo al mejor precio. Compara, ahorra y vuela sin límites.',
        cols: ['Empresa', 'Contacto', 'Más'],
        links: [
          ['Acerca de', 'Prensa', 'Afiliados', 'Socios'],
          ['Ayuda / FAQ', 'Hoteles', 'Publicidad'],
          ['Tarifas aéreas', 'Ofertas bajas', 'Privacidad']
        ],
        appTitulo: 'Descarga la app',
        appTexto: 'Lleva tus reservas y ofertas siempre contigo.',
        copyright: '© 2026 Ɽ𝕦Ƭ𝕒 ƬⱤ𝕠℘ɩ𝕔𝕒𝕝. Todos los derechos reservados.',
        legales: ['Privacidad', 'Términos y condiciones', 'Cookies']
      }
    }
  };

  function establecerTextoConservandoIcono(enlace, textoNuevo) {
    if (!enlace || !textoNuevo) return;
    const icono = enlace.querySelector('i, svg');
    enlace.textContent = '';
    if (icono) {
      enlace.appendChild(icono);
      enlace.appendChild(document.createTextNode(' ' + textoNuevo));
    } else {
      enlace.textContent = textoNuevo;
    }
  }

  function establecerTextoEnlaceMenu(enlace, textoNuevo) {
    if (!enlace || !textoNuevo) return;
    const icono = enlace.querySelector('i');
    enlace.textContent = '';
    if (icono) enlace.appendChild(icono);
    enlace.appendChild(document.createTextNode(' ' + textoNuevo));
  }

  function establecerTextoEnlaceFooter(enlace, textoNuevo) {
    if (!enlace || !textoNuevo) return;
    const chev = enlace.querySelector('.rt-chev');
    enlace.textContent = '';
    if (chev) {
      enlace.appendChild(chev);
      enlace.appendChild(document.createTextNode(' ' + textoNuevo));
    } else {
      enlace.textContent = textoNuevo;
    }
  }

  function pintarAyuda(t) {
    if (!t) return;

    const heroH1 = document.querySelector('.hero h1');
    const faqH2 = document.querySelector('.faq h2');
    const buscador = document.getElementById('buscar-faq');
    const avisoTitulo = document.querySelector('.aviso h3');
    const avisoParrafos = document.querySelectorAll('.aviso > p');
    const avisoDetalles = document.querySelectorAll('.aviso details');
    const sinRes = document.getElementById('sin-resultados');
    const tarjetas = document.querySelectorAll('.contacto__tarjetas article');

    if (heroH1 && t.heroH1) heroH1.textContent = t.heroH1;
    if (faqH2 && t.faqH2) faqH2.textContent = t.faqH2;
    if (buscador && t.buscadorPlaceholder) buscador.placeholder = t.buscadorPlaceholder;

    if (avisoTitulo && t.avisoTitulo) {
      establecerTextoConservandoIcono(avisoTitulo, t.avisoTitulo);
    }

    avisoParrafos.forEach(function (p, i) {
      if (t.avisoParrafos && t.avisoParrafos[i]) {
        p.textContent = t.avisoParrafos[i];
      }
    });

    avisoDetalles.forEach(function (det, i) {
      const par = t.avisoDetalles && t.avisoDetalles[i];
      if (!par) return;
      const sum = det.querySelector('summary');
      const resp = det.querySelector('.respuesta');
      if (sum && par[0]) {
        sum.textContent = par[0];
        asegurarBadgePregunta(sum);
      }
      if (resp && par[1]) resp.textContent = par[1];
    });

    if (t.faqSecciones) {
      dibujarSeccionesFAQ(t.faqSecciones, t.respuestaDefecto || RESPUESTA_DEFECTO);
    }

    if (sinRes && t.sinResultados) {
      sinRes.textContent = t.sinResultados;
    }

    tarjetas.forEach(function (art, i) {
      const datos = t.contacto && t.contacto[i];
      if (!datos) return;
      const h3 = art.querySelector('h3');
      const p = art.querySelector('p');
      const a = art.querySelector('a');
      if (h3 && datos[0]) h3.textContent = datos[0];
      if (p && datos[1]) p.textContent = datos[1];
      if (a && datos[2]) a.textContent = datos[2];
    });

    if (t.menu) {
      document.querySelectorAll('.cajon__principal a').forEach(function (a, i) {
        if (t.menu.principal && t.menu.principal[i]) {
          establecerTextoEnlaceMenu(a, t.menu.principal[i]);
        }
      });

      document.querySelectorAll('.cajon__enlaces a').forEach(function (a, i) {
        if (t.menu.enlaces && t.menu.enlaces[i]) {
          establecerTextoEnlaceMenu(a, t.menu.enlaces[i]);
        }
      });

      const etiquetasContacto = document.querySelectorAll('.cajon__contacto .contacto-fila strong');
      if (etiquetasContacto[0] && t.menu.telefono) etiquetasContacto[0].textContent = t.menu.telefono;
      if (etiquetasContacto[1] && t.menu.correo) etiquetasContacto[1].textContent = t.menu.correo;
    }

    if (t.footer) {
      const descEl = document.querySelector('.rt-footer__desc');
      const colNavs = document.querySelectorAll('.rt-footer__col');
      const appTitulo = document.querySelector('.rt-footer__app h3');
      const appTexto = document.querySelector('.rt-footer__app-texto');
      const copyEl = document.querySelector('.rt-footer__legal > span');
      const legalesLinks = document.querySelectorAll('.rt-footer__legales-links a');

      if (descEl && t.footer.desc) descEl.textContent = t.footer.desc;

      colNavs.forEach(function (navCol, i) {
        const h3 = navCol.querySelector('h3');
        if (h3 && t.footer.cols && t.footer.cols[i]) h3.textContent = t.footer.cols[i];

        const grupo = t.footer.links && t.footer.links[i];
        if (!grupo) return;
        navCol.querySelectorAll('ul li a').forEach(function (a, j) {
          if (grupo[j]) establecerTextoEnlaceFooter(a, grupo[j]);
        });
      });

      if (appTitulo && t.footer.appTitulo) appTitulo.textContent = t.footer.appTitulo;
      if (appTexto && t.footer.appTexto) appTexto.textContent = t.footer.appTexto;
      if (copyEl && t.footer.copyright) copyEl.textContent = t.footer.copyright;

      legalesLinks.forEach(function (a, i) {
        if (t.footer.legales && t.footer.legales[i]) a.textContent = t.footer.legales[i];
      });
    }
  }

  async function traducirFrase(texto, langTarget) {
    const mapa = { tl: 'fil', he: 'iw' };
    const target = mapa[langTarget] || langTarget;
    const url =
      'https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=' +
      encodeURIComponent(target) +
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

  async function traducirObjetoAyuda(cod) {
    try {
      const guardado = localStorage.getItem(CACHE_AYUDA + cod);
      if (guardado) return JSON.parse(guardado);
    } catch (_) {}

    const base = JSON.parse(JSON.stringify(TEXTOS_AYUDA.es));

    base.heroH1 = await traducirFrase(base.heroH1, cod);
    base.faqH2 = await traducirFrase(base.faqH2, cod);
    base.buscadorPlaceholder = await traducirFrase(base.buscadorPlaceholder, cod);
    base.avisoTitulo = await traducirFrase(base.avisoTitulo, cod);
    base.sinResultados = await traducirFrase(base.sinResultados, cod);
    base.respuestaDefecto = await traducirFrase(base.respuestaDefecto, cod);

    for (let i = 0; i < base.avisoParrafos.length; i++) {
      base.avisoParrafos[i] = await traducirFrase(base.avisoParrafos[i], cod);
    }

    for (let i = 0; i < base.avisoDetalles.length; i++) {
      base.avisoDetalles[i][0] = await traducirFrase(base.avisoDetalles[i][0], cod);
      base.avisoDetalles[i][1] = await traducirFrase(base.avisoDetalles[i][1], cod);
    }

    for (let i = 0; i < base.faqSecciones.length; i++) {
      base.faqSecciones[i].titulo = await traducirFrase(base.faqSecciones[i].titulo, cod);
      for (let j = 0; j < base.faqSecciones[i].preguntas.length; j++) {
        base.faqSecciones[i].preguntas[j] = await traducirFrase(base.faqSecciones[i].preguntas[j], cod);
      }
    }

    for (let i = 0; i < base.contacto.length; i++) {
      base.contacto[i][0] = await traducirFrase(base.contacto[i][0], cod);
      base.contacto[i][1] = await traducirFrase(base.contacto[i][1], cod);
      base.contacto[i][2] = await traducirFrase(base.contacto[i][2], cod);
    }

    if (base.menu) {
      base.menu.telefono = await traducirFrase(base.menu.telefono, cod);
      base.menu.correo = await traducirFrase(base.menu.correo, cod);
      for (let i = 0; i < base.menu.principal.length; i++) {
        base.menu.principal[i] = await traducirFrase(base.menu.principal[i], cod);
      }
      for (let i = 0; i < base.menu.enlaces.length; i++) {
        base.menu.enlaces[i] = await traducirFrase(base.menu.enlaces[i], cod);
      }
    }

    if (base.footer) {
      base.footer.desc = await traducirFrase(base.footer.desc, cod);
      base.footer.appTitulo = await traducirFrase(base.footer.appTitulo, cod);
      base.footer.appTexto = await traducirFrase(base.footer.appTexto, cod);
      base.footer.copyright = await traducirFrase(base.footer.copyright, cod);
      for (let i = 0; i < base.footer.cols.length; i++) {
        base.footer.cols[i] = await traducirFrase(base.footer.cols[i], cod);
      }
      for (let i = 0; i < base.footer.links.length; i++) {
        for (let j = 0; j < base.footer.links[i].length; j++) {
          base.footer.links[i][j] = await traducirFrase(base.footer.links[i][j], cod);
        }
      }
      for (let i = 0; i < base.footer.legales.length; i++) {
        base.footer.legales[i] = await traducirFrase(base.footer.legales[i], cod);
      }
    }

    try {
      localStorage.setItem(CACHE_AYUDA + cod, JSON.stringify(base));
    } catch (_) {}

    return base;
  }

  function aplicarTextosAyuda(cod) {
    const limpio = (cod || 'es').toLowerCase();
    if (TEXTOS_AYUDA[limpio]) {
      pintarAyuda(TEXTOS_AYUDA[limpio]);
      return;
    }

    pintarAyuda(TEXTOS_AYUDA.es);
    traducirObjetoAyuda(limpio).then(function (traducido) {
      const vigente = (
        localStorage.getItem('rt_idioma_seleccionado') ||
        localStorage.getItem('idioma') ||
        'es'
      ).toLowerCase();
      if (vigente === limpio && traducido) {
        pintarAyuda(traducido);
      }
    });
  }

  const contenedor = document.getElementById('idioma');
  const boton = document.getElementById('idioma-boton');
  const panel = document.getElementById('idioma-lista');
  const buscarIdioma = document.getElementById('idioma-buscar');
  const opcionesUl = document.getElementById('idioma-opciones');
  const bandera = document.getElementById('idioma-bandera');
  const codigo = document.getElementById('idioma-codigo');
  if (!contenedor || !boton || !panel || !opcionesUl || !bandera || !codigo) return;

  const url = function (pais) { return 'https://flagcdn.com/w40/' + pais + '.png'; };

  let actual = 'es';
  try {
    actual = (
      localStorage.getItem('rt_idioma_seleccionado') ||
      localStorage.getItem('idioma') ||
      'es'
    ).toLowerCase();
  } catch (_) {}
  if (!IDIOMAS.some(function (i) { return i[0] === actual; })) actual = 'es';

  function renderizarOpcionesIdioma(filtro) {
    const q = (filtro || '').trim().toLowerCase();
    opcionesUl.innerHTML = '';

    IDIOMAS.filter(function (i) {
      if (!q) return true;
      return (
        i[0].toLowerCase().includes(q) ||
        i[1].toLowerCase().includes(q) ||
        i[2].toLowerCase().includes(q)
      );
    }).forEach(function (i) {
      const li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.dataset.codigo = i[0];
      li.tabIndex = -1;
      li.setAttribute('aria-selected', String(i[0] === actual));
      li.innerHTML =
        '<img src="' + url(i[3]) + '" alt="" width="28" height="19" loading="lazy">' +
        '<span class="idioma__texto-grupo">' +
          '<span class="idioma__nombre">' + i[1] + '</span>' +
          '<span class="idioma__region">' + i[2] + '</span>' +
        '</span>' +
        '<small>' + i[0].toUpperCase() + '</small>';
      opcionesUl.appendChild(li);
    });
  }

  function items() {
    return Array.from(opcionesUl.querySelectorAll('li[data-codigo]'));
  }

  function elegir(cod) {
    const datos = IDIOMAS.find(function (i) { return i[0] === cod; });
    if (!datos) return;
    actual = cod;
    bandera.src = url(datos[3]);
    codigo.textContent = cod.toUpperCase();
    document.documentElement.lang = cod;
    try {
      localStorage.setItem('idioma', cod);
      localStorage.setItem('rt_idioma_seleccionado', cod);
    } catch (_) {}

    items().forEach(function (li) {
      li.setAttribute('aria-selected', String(li.dataset.codigo === cod));
    });

    aplicarTextosAyuda(cod);
    document.dispatchEvent(new CustomEvent('idioma:cambio', { detail: { idioma: cod } }));
  }

  function abrir() {
    panel.hidden = false;
    boton.setAttribute('aria-expanded', 'true');
    if (buscarIdioma) {
      buscarIdioma.value = '';
      renderizarOpcionesIdioma('');
      buscarIdioma.focus();
    } else {
      renderizarOpcionesIdioma('');
    }
    const sel = items().find(function (li) { return li.dataset.codigo === actual; });
    if (sel) sel.scrollIntoView({ block: 'center' });
  }

  function cerrar() {
    panel.hidden = true;
    boton.setAttribute('aria-expanded', 'false');
    items().forEach(function (li) { li.classList.remove('enfocado'); });
  }

  renderizarOpcionesIdioma('');

  if (buscarIdioma) {
    buscarIdioma.addEventListener('input', function () {
      renderizarOpcionesIdioma(buscarIdioma.value);
    });
  }

  boton.addEventListener('click', function (e) {
    e.stopPropagation();
    panel.hidden ? abrir() : cerrar();
  });

  opcionesUl.addEventListener('click', function (e) {
    const li = e.target.closest('li[data-codigo]');
    if (!li) return;
    elegir(li.dataset.codigo);
    cerrar();
    boton.focus();
  });

  document.addEventListener('click', function (e) {
    if (!panel.hidden && !contenedor.contains(e.target)) cerrar();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) {
      cerrar();
      boton.focus();
    }
  });

  elegir(actual);
})();