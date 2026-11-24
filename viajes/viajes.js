/* Resalta la opción del menú lateral según la sección visible */
(function () {
  const enlaces = document.querySelectorAll('.lateral a');
  const secciones = document.querySelectorAll('.funcion');
  if (!enlaces.length || !secciones.length || !('IntersectionObserver' in window)) return;

  const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (!e.isIntersecting) return;
      enlaces.forEach(function (a) {
        a.classList.toggle('activa', a.getAttribute('href') === '#' + e.target.id);
      });
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  secciones.forEach(function (s) { observador.observe(s); });
})();

/* Animación de entrada del pie de página al hacer scroll */
(function () {
  const footer = document.querySelector('.rt-footer');
  if (!footer) return;

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  if (!('IntersectionObserver' in window)) {
    footer.classList.add('visible');
    return;
  }

  const obs = new IntersectionObserver(function (entradas, observer) {
    if (entradas[0].isIntersecting) {
      footer.classList.add('visible');
      observer.disconnect();
    }
  }, { threshold: 0.1 });

  obs.observe(footer);
})();

/* ==========================================================
   BARRA DE NAVEGACIÓN, MENÚ LATERAL Y MONEDA
   ========================================================== */
(function () {
  const nav = document.getElementById('nav-sitio');
  const cajon = document.getElementById('cajon');
  const fondo = document.getElementById('cajon-fondo');
  const abrir = document.getElementById('abrir-menu');
  const cerrar = document.getElementById('cerrar-menu');
  const portada = document.querySelector('.portada');

  function alternarMenu(mostrar) {
    if (!cajon || !fondo || !abrir) return;
    cajon.classList.toggle('abierto', mostrar);
    fondo.classList.toggle('abierto', mostrar);
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

  if (nav && portada && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entradas) {
      nav.classList.toggle('fija', !entradas[0].isIntersecting);
    }).observe(portada);
  }

  const STORAGE_MONEDA = 'rt_moneda_seleccionada';
  const simbolos = { usd: '$', eur: '€', dop: 'RD$', gbp: '£' };
  const monedaBox = document.getElementById('moneda-control');
  const monedaSelect = document.getElementById('currency');
  const monedaBtn = document.getElementById('moneda-boton');
  const monedaLista = document.getElementById('moneda-lista');
  const monedaCodigo = document.getElementById('moneda-codigo');
  const simboloEl = document.getElementById('moneda-simbolo');

  function setMonedaListaAbierta(abierta) {
    if (!monedaBtn || !monedaLista) return;
    monedaLista.hidden = !abierta;
    monedaBtn.setAttribute('aria-expanded', String(abierta));
  }

  function aplicarMoneda(cod) {
    const limpio = (cod || 'usd').toLowerCase();
    const codigoValido = simbolos[limpio] ? limpio : 'usd';
    if (monedaSelect && monedaSelect.value !== codigoValido) {
      monedaSelect.value = codigoValido;
    }
    if (monedaCodigo) {
      monedaCodigo.textContent = codigoValido.toUpperCase();
    }
    if (simboloEl) {
      simboloEl.textContent = simbolos[codigoValido];
    }
    if (monedaLista) {
      monedaLista.querySelectorAll('li[data-moneda]').forEach(function (li) {
        li.setAttribute('aria-selected', String(li.dataset.moneda === codigoValido));
      });
    }
    try { localStorage.setItem(STORAGE_MONEDA, codigoValido); } catch (_) {}
    document.dispatchEvent(new CustomEvent('moneda:cambio', { detail: { moneda: codigoValido } }));
  }

  if (monedaBtn && monedaLista) {
    monedaBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      setMonedaListaAbierta(monedaLista.hidden);
    });

    monedaLista.addEventListener('click', function (e) {
      const item = e.target.closest('li[data-moneda]');
      if (!item) return;
      aplicarMoneda(item.dataset.moneda);
      setMonedaListaAbierta(false);
      monedaBtn.focus();
    });

    document.addEventListener('click', function (e) {
      if (!monedaLista.hidden && monedaBox && !monedaBox.contains(e.target)) {
        setMonedaListaAbierta(false);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !monedaLista.hidden) {
        setMonedaListaAbierta(false);
        monedaBtn.focus();
      }
    });
  }

  let inicialMoneda = 'usd';
  try {
    inicialMoneda = (localStorage.getItem(STORAGE_MONEDA) || 'usd').toLowerCase();
  } catch (_) {}
  aplicarMoneda(inicialMoneda);
})();

/* ==========================================================
   SELECTOR DE IDIOMA CON BUSCADOR + TRADUCCIÓN DE TRIPS
   ========================================================== */
(function () {
  const IDIOMAS = [
    ['es', 'Español', 'es', 'España / Latinoamérica'],
    ['en', 'English', 'us', 'United States'],
    ['fr', 'Français', 'fr', 'France'],
    ['pt', 'Português', 'pt', 'Brasil / Portugal'],
    ['it', 'Italiano', 'it', 'Italia'],
    ['de', 'Deutsch', 'de', 'Deutschland'],
    ['ja', '日本語', 'jp', '日本'],
    ['ko', '한국어', 'kr', '대한민국'],
    ['zh', '中文', 'cn', '简体 / 繁體'],
    ['ar', 'العربية', 'sa', 'الشرق الأوسط'],
    ['nl', 'Nederlands', 'nl', 'Nederland / België'],
    ['ru', 'Русский', 'ru', 'Россия']
  ];

  const CACHE_TRIPS = 'rt_trips_i18n_v4_';

  const TEXTOS_TRIPS = {
    es: {
      idiomaTitulo: 'SELECCIONA TU IDIOMA',
      idiomaBuscar: 'Buscar idioma...',
      anadirUsuario: '+ Añadir usuario',
      linkTrips: 'Trips',
      linkAyuda: 'Ayuda/Preguntas frecuentes',
      linkCuenta: 'Tu cuenta',
      cerrarSesion: 'Cerrar sesión',
      cajonPrincipal: ['Vuelos', 'Hoteles', 'Autobús'],
      cajonEnlaces: [
        'Planifica con IA',
        'Planea tus viajes',
        'Sobre nosotros',
        'Contacto',
        'Preguntas frecuentes',
        'Explorar',
        'Términos y condiciones',
        'Rastreador de vuelos',
        'Viajes'
      ],
      telefonoLabel: 'Teléfono:',
      correoLabel: 'Correo:',
      portadaH1: 'Una forma más fácil de gestionar tu viaje',
      portadaP: 'Hacemos que sea súper fácil planificar, organizar y viajar con los amigos o la familia. <span class="resalte-rojo">Trips es gratis</span> y está disponible para su uso independientemente del lugar en el que reserves.',
      loginBtn: 'Inicia sesión para planificar tu viaje a Medellín',
      buscarBtn: 'Buscar mis reservas',
      tituloMain: 'Trips mantiene todos tus planes en <span class="resalte-azul">un solo lugar</span> para un viaje sin estrés.',
      navItems: ['Planifica tu viaje', 'Mantente informado', 'Colaboren juntos'],
      funciones: [
        {
          h3: 'Planifica tu viaje',
          p: 'Te permite planificar, crear y gestionar tu <span class="resalte-azul">itinerario perfecto</span> para viajes de cualquier duración, en cualquier lugar.',
          cta: 'Empieza a planificar'
        },
        {
          h3: 'Mantente al tanto de los cambios inesperados',
          p: 'Trips mantiene todas tus reservas en un solo lugar con <span class="resalte-rojo">actualizaciones en tiempo real</span> sobre cualquier cancelación, retraso o cambio de puerta de embarque que pueda surgir.',
          cta: 'Añade tus reservas automáticamente'
        },
        {
          h3: 'Colaboren juntos',
          p: 'Mantén a todos los participantes de tu viaje al día con <span class="resalte-azul">itinerarios compartidos</span> y permisos de edición.',
          cta: 'Empieza a colaborar'
        }
      ],
      finalH2: 'Prepárate para tu próxima aventura',
      footerDesc: 'Tu agencia de confianza para descubrir el mundo al mejor precio. Compara, ahorra y vuela sin límites.',
      footerCols: [
        {
          title: 'Empresa',
          items: ['Acerca de', 'Blog']
        },
        {
          title: 'Contacto',
          items: ['Ayuda / FAQ', 'Prensa', 'Afiliados', 'Dueños de hoteles', 'Socios', 'Anúnciate con nosotros']
        },
        {
          title: 'Más',
          items: ['Tarifas de aerolíneas', 'Aerolíneas', 'Consejos de tarifas bajas', 'Insignias y certificados', 'Seguridad']
        }
      ],
      appTitle: 'Descarga la app',
      appTexto: 'Lleva tus reservas y ofertas siempre contigo.',
      derechos: 'Todos los derechos reservados.',
      privacidad: 'Privacidad',
      terminos: 'Términos y condiciones'
    },
    en: {
      idiomaTitulo: 'SELECT YOUR LANGUAGE',
      idiomaBuscar: 'Search language...',
      anadirUsuario: '+ Add user',
      linkTrips: 'Trips',
      linkAyuda: 'Help / FAQ',
      linkCuenta: 'Your account',
      cerrarSesion: 'Sign out',
      cajonPrincipal: ['Flights', 'Hotels', 'Bus'],
      cajonEnlaces: [
        'Plan with AI',
        'Baggage fees',
        'Plan your trips',
        'About us',
        'Contact',
        'FAQ',
        'Explore',
        'Terms and conditions',
        'Flight tracker',
        'Trips'
      ],
      telefonoLabel: 'Phone:',
      correoLabel: 'Email:',
      portadaH1: 'An easier way to manage your trip',
      portadaP: 'We make it super easy to plan, organize, and travel with friends or family. <span class="resalte-rojo">Trips is free</span> and available to use no matter where you book.',
      loginBtn: 'Sign in to plan your trip to Medellín',
      buscarBtn: 'Find my bookings',
      tituloMain: 'Trips keeps all your plans in <span class="resalte-azul">one place</span> for a stress-free journey.',
      navItems: ['Plan your trip', 'Stay informed', 'Collaborate together'],
      funciones: [
        {
          h3: 'Plan your trip',
          p: 'Lets you plan, create, and manage your <span class="resalte-azul">ideal itinerary</span> for trips of any length, anywhere.',
          cta: 'Start planning'
        },
        {
          h3: 'Stay on top of unexpected changes',
          p: 'Trips keeps all your bookings in one place with <span class="resalte-rojo">real-time updates</span> on any cancellation, delay, or gate change that may come up.',
          cta: 'Add your bookings automatically'
        },
        {
          h3: 'Collaborate together',
          p: 'Keep everyone on your trip up to date with <span class="resalte-azul">shared itineraries</span> and editing permissions.',
          cta: 'Start collaborating'
        }
      ],
      finalH2: 'Get ready for your next adventure',
      footerDesc: 'Your trusted agency to discover the world at the best price. Compare, save, and fly without limits.',
      footerCols: [
        {
          title: 'Company',
          items: ['About', 'Blog']
        },
        {
          title: 'Contact',
          items: ['Help / FAQ', 'Press', 'Affiliates', 'Hotel owners', 'Partners', 'Advertise with us']
        },
        {
          title: 'More',
          items: ['Airline fees', 'Airlines', 'Low fare tips', 'Badges and certificates', 'Safety']
        }
      ],
      appTitle: 'Get the app',
      appTexto: 'Take your bookings and deals with you everywhere.',
      derechos: 'All rights reserved.',
      privacidad: 'Privacy',
      terminos: 'Terms and conditions'
    },
    ja: {
      idiomaTitulo: '言語を選択してください',
      idiomaBuscar: '言語を検索...',
      anadirUsuario: '+ ユーザーを追加',
      linkTrips: 'Trips',
      linkAyuda: 'ヘルプ / よくある質問',
      linkCuenta: 'アカウント',
      cerrarSesion: 'ログアウト',
      cajonPrincipal: ['フライト', 'ホテル', 'バス'],
      cajonEnlaces: [
        'AIで計画する',
        '手荷物料金',
        '旅行を計画する',
        '私たちについて',
        'お問い合わせ',
        'よくある質問',
        '探索する',
        '利用規約',
        'フライトトラッカー',
        '旅行'
      ],
      telefonoLabel: '電話:',
      correoLabel: 'メール:',
      portadaH1: '旅をもっと簡単に管理する方法',
      portadaP: '友人や家族との計画・整理・旅行がとても簡単になります。<span class="resalte-rojo">Trips は無料</span>で、どこで予約しても利用できます。',
      loginBtn: 'メデジン旅行を計画するためにログイン',
      buscarBtn: '予約を検索',
      tituloMain: 'Trips はすべての予定を<span class="resalte-azul">1か所</span>にまとめ、ストレスのない旅を実現します。',
      navItems: ['旅を計画する', '最新情報を受け取る', 'みんなで共同編集'],
      funciones: [
        {
          h3: '旅を計画する',
          p: 'あらゆる期間や場所の旅行に合わせて、<span class="resalte-azul">理想の旅程</span>を計画・作成・管理できます。',
          cta: '計画を始める'
        },
        {
          h3: '予期せぬ変更もすぐに把握',
          p: '欠航や遅延、搭乗口の変更などの<span class="resalte-rojo">最新情報をリアルタイム</span>で1か所にまとめます。',
          cta: '予約を自動追加する'
        },
        {
          h3: 'みんなで共同編集',
          p: '<span class="resalte-azul">共有旅程</span>と編集権限により、旅行メンバー全員を常に最新の状態に保てます。',
          cta: '共同編集を始める'
        }
      ],
      finalH2: '次の冒険の準備をしよう',
      footerDesc: '世界をお得に旅するための信頼できるトラベルパートナー。比較して節約し、自由に飛び立ちましょう。',
      footerCols: [
        {
          title: '企業情報',
          items: ['会社概要', 'ブログ']
        },
        {
          title: 'お問い合わせ',
          items: ['ヘルプ / FAQ', 'プレス', 'アフィリエイト', 'ホテルオーナー', 'パートナー', '広告掲載のご案内']
        },
        {
          title: 'その他',
          items: ['航空会社の手数料', '航空会社一覧', '格安運賃のヒント', '認定とバッジ', '安全性']
        }
      ],
      appTitle: 'アプリをダウンロード',
      appTexto: '予約情報とお得なプランをいつでも手元に。',
      derechos: 'All rights reserved.',
      privacidad: 'プライバシー',
      terminos: '利用規約'
    }
  };

  function pintarTrips(t) {
    if (!t) return;

    const idiomaTitulo = document.getElementById('idioma-titulo');
    const idiomaBuscar = document.getElementById('idioma-buscar');
    if (idiomaTitulo && t.idiomaTitulo) idiomaTitulo.textContent = t.idiomaTitulo;
    if (idiomaBuscar && t.idiomaBuscar) idiomaBuscar.placeholder = t.idiomaBuscar;

    const btnAnadir = document.querySelector('#btn-anadir-usuario span');
    const linkTrips = document.getElementById('link-trips');
    const linkAyuda = document.getElementById('link-ayuda');
    const linkCuenta = document.getElementById('link-cuenta');
    const btnCerrar = document.getElementById('btn-cerrar-sesion');
    if (btnAnadir && t.anadirUsuario) btnAnadir.textContent = t.anadirUsuario;
    if (linkTrips && t.linkTrips) linkTrips.textContent = t.linkTrips;
    if (linkAyuda && t.linkAyuda) linkAyuda.textContent = t.linkAyuda;
    if (linkCuenta && t.linkCuenta) linkCuenta.textContent = t.linkCuenta;
    if (btnCerrar && t.cerrarSesion) btnCerrar.textContent = t.cerrarSesion;

    document.querySelectorAll('.cajon__principal a span').forEach(function (sp, i) {
      if (t.cajonPrincipal && t.cajonPrincipal[i]) sp.textContent = t.cajonPrincipal[i];
    });
    document.querySelectorAll('.cajon__enlaces a span').forEach(function (sp, i) {
      if (t.cajonEnlaces && t.cajonEnlaces[i]) sp.textContent = t.cajonEnlaces[i];
    });

    const contactoEtiquetas = document.querySelectorAll('.contacto-fila__etiqueta');
    if (contactoEtiquetas[0] && t.telefonoLabel) contactoEtiquetas[0].textContent = t.telefonoLabel;
    if (contactoEtiquetas[1] && t.correoLabel) contactoEtiquetas[1].textContent = t.correoLabel;

    const h1 = document.querySelector('.portada h1');
    const p = document.querySelector('.portada p');
    const btnsNaranja = document.querySelectorAll('.btn--naranja');
    const btnBorde = document.querySelector('.btn--borde');
    const tituloMain = document.querySelector('.contenido .titulo');
    const latLinks = document.querySelectorAll('.lateral a');
    const secs = document.querySelectorAll('.funcion');
    const finalH2 = document.querySelector('.final h2');

    if (h1 && t.portadaH1) h1.textContent = t.portadaH1;
    if (p && t.portadaP) p.innerHTML = t.portadaP;
    btnsNaranja.forEach(function (b) {
      if (t.loginBtn) b.textContent = t.loginBtn;
    });
    if (btnBorde && t.buscarBtn) btnBorde.textContent = t.buscarBtn;
    if (tituloMain && t.tituloMain) tituloMain.innerHTML = t.tituloMain;

    latLinks.forEach(function (a, i) {
      if (t.navItems && t.navItems[i]) a.textContent = t.navItems[i];
    });

    secs.forEach(function (sec, i) {
      const item = t.funciones && t.funciones[i];
      if (!item) return;
      const sh3 = sec.querySelector('.funcion__texto h3');
      const sp = sec.querySelector('.funcion__texto p');
      const sa = sec.querySelector('.funcion__texto a');
      if (sh3 && item.h3) sh3.textContent = item.h3;
      if (sp && item.p) sp.innerHTML = item.p;
      if (sa && item.cta) sa.textContent = item.cta;
    });

    if (finalH2 && t.finalH2) finalH2.textContent = t.finalH2;

    const footerDesc = document.querySelector('.rt-footer__desc');
    if (footerDesc && t.footerDesc) footerDesc.textContent = t.footerDesc;

    const footerCols = document.querySelectorAll('.rt-footer__col');
    footerCols.forEach(function (col, idx) {
      const colData = t.footerCols && t.footerCols[idx];
      if (!colData) return;
      const h3 = col.querySelector('h3');
      if (h3 && colData.title) h3.textContent = colData.title;
      col.querySelectorAll('ul li a span:last-child').forEach(function (labelSpan, j) {
        if (colData.items && colData.items[j]) labelSpan.textContent = colData.items[j];
      });
    });

    const appTitle = document.querySelector('.rt-footer__app h3');
    const appTexto = document.querySelector('.rt-footer__app-texto');
    const derechos = document.getElementById('footer-derechos');
    const legales = document.querySelectorAll('.rt-footer__legales-links a');
    if (appTitle && t.appTitle) appTitle.textContent = t.appTitle;
    if (appTexto && t.appTexto) appTexto.textContent = t.appTexto;
    if (derechos && t.derechos) derechos.textContent = t.derechos;
    if (legales[0] && t.privacidad) legales[0].textContent = t.privacidad;
    if (legales[1] && t.terminos) legales[1].textContent = t.terminos;
  }

  async function traducirFraseApi(texto, langTarget) {
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

  async function traducirObjetoTrips(cod) {
    try {
      const guardado = localStorage.getItem(CACHE_TRIPS + cod);
      if (guardado) return JSON.parse(guardado);
    } catch (_) {}

    const base = JSON.parse(JSON.stringify(TEXTOS_TRIPS.es));
    const claves = [
      'idiomaTitulo', 'idiomaBuscar', 'anadirUsuario', 'linkTrips', 'linkAyuda',
      'linkCuenta', 'cerrarSesion', 'telefonoLabel', 'correoLabel',
      'portadaH1', 'portadaP', 'loginBtn', 'buscarBtn', 'tituloMain', 'finalH2',
      'footerDesc', 'appTitle', 'appTexto', 'derechos', 'privacidad', 'terminos'
    ];

    for (let i = 0; i < claves.length; i++) {
      const k = claves[i];
      base[k] = await traducirFraseApi(base[k], cod);
    }

    for (let i = 0; i < base.cajonPrincipal.length; i++) {
      base.cajonPrincipal[i] = await traducirFraseApi(base.cajonPrincipal[i], cod);
    }

    for (let i = 0; i < base.cajonEnlaces.length; i++) {
      base.cajonEnlaces[i] = await traducirFraseApi(base.cajonEnlaces[i], cod);
    }

    for (let i = 0; i < base.navItems.length; i++) {
      base.navItems[i] = await traducirFraseApi(base.navItems[i], cod);
    }

    for (let i = 0; i < base.funciones.length; i++) {
      base.funciones[i].h3 = await traducirFraseApi(base.funciones[i].h3, cod);
      base.funciones[i].p = await traducirFraseApi(base.funciones[i].p, cod);
      base.funciones[i].cta = await traducirFraseApi(base.funciones[i].cta, cod);
    }

    for (let i = 0; i < base.footerCols.length; i++) {
      base.footerCols[i].title = await traducirFraseApi(base.footerCols[i].title, cod);
      for (let j = 0; j < base.footerCols[i].items.length; j++) {
        base.footerCols[i].items[j] = await traducirFraseApi(base.footerCols[i].items[j], cod);
      }
    }

    try {
      localStorage.setItem(CACHE_TRIPS + cod, JSON.stringify(base));
    } catch (_) {}

    return base;
  }

  function aplicarTextosTrips(cod) {
    const limpio = (cod || 'es').toLowerCase();
    if (TEXTOS_TRIPS[limpio]) {
      pintarTrips(TEXTOS_TRIPS[limpio]);
      return;
    }

    pintarTrips(TEXTOS_TRIPS.es);
    traducirObjetoTrips(limpio).then(function (traducido) {
      const vigente = (
        localStorage.getItem('rt_idioma_seleccionado') ||
        localStorage.getItem('idioma') ||
        'es'
      ).toLowerCase();
      if (vigente === limpio && traducido) {
        pintarTrips(traducido);
      }
    });
  }

  const contenedor = document.getElementById('idioma');
  const boton = document.getElementById('idioma-boton');
  const panel = document.getElementById('idioma-lista');
  const listaOpciones = document.getElementById('idioma-opciones');
  const buscador = document.getElementById('idioma-buscar');
  const bandera = document.getElementById('idioma-bandera');
  const codigo = document.getElementById('idioma-codigo');
  if (!contenedor || !boton || !panel || !listaOpciones || !bandera || !codigo) return;

  const urlBandera = function (pais) { return 'https://flagcdn.com/w40/' + pais + '.png'; };

  let actual = 'es';
  try {
    actual = (
      localStorage.getItem('rt_idioma_seleccionado') ||
      localStorage.getItem('idioma') ||
      'es'
    ).toLowerCase();
  } catch (_) {}
  if (!IDIOMAS.some(function (i) { return i[0] === actual; })) actual = 'es';

  function renderLista(filtro) {
    const q = (filtro || '').trim().toLowerCase();
    listaOpciones.innerHTML = '';

    IDIOMAS.filter(function (i) {
      return (
        i[1].toLowerCase().includes(q) ||
        i[0].toLowerCase().includes(q) ||
        i[3].toLowerCase().includes(q)
      );
    }).forEach(function (i) {
      const li = document.createElement('li');
      li.className = 'idioma__op-item' + (i[0] === actual ? ' idioma__op-item--activa' : '');
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', String(i[0] === actual));
      li.dataset.codigo = i[0];
      li.tabIndex = -1;
      li.innerHTML =
        '<span class="idioma__op-izq">' +
          '<img src="' + urlBandera(i[2]) + '" alt="" width="24" height="16" loading="lazy">' +
          '<span>' +
            '<span class="idioma__op-nombre">' + i[1] + '</span>' +
            '<span class="idioma__op-region">' + i[3] + '</span>' +
          '</span>' +
        '</span>' +
        '<span class="idioma__op-codigo">' + i[0].toUpperCase() + '</span>';
      listaOpciones.appendChild(li);
    });
  }

  function elegir(cod) {
    const datos = IDIOMAS.find(function (i) { return i[0] === cod; });
    if (!datos) return;
    actual = cod;
    bandera.src = urlBandera(datos[2]);
    codigo.textContent = cod.toUpperCase();
    document.documentElement.lang = cod;
    try {
      localStorage.setItem('idioma', cod);
      localStorage.setItem('rt_idioma_seleccionado', cod);
    } catch (_) {}

    renderLista(buscador ? buscador.value : '');
    aplicarTextosTrips(cod);
    document.dispatchEvent(new CustomEvent('idioma:cambio', { detail: { idioma: cod } }));
  }

  function abrir() {
    panel.hidden = false;
    boton.setAttribute('aria-expanded', 'true');
    if (buscador) {
      setTimeout(function () { buscador.focus(); }, 10);
    }
  }

  function cerrar() {
    panel.hidden = true;
    boton.setAttribute('aria-expanded', 'false');
  }

  if (buscador) {
    buscador.addEventListener('input', function () {
      renderLista(buscador.value);
    });
  }

  boton.addEventListener('click', function (e) {
    e.stopPropagation();
    panel.hidden ? abrir() : cerrar();
  });

  listaOpciones.addEventListener('click', function (e) {
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

  renderLista('');
  elegir(actual);
})();

/* ==========================================================
   MENÚ DE USUARIO
   ========================================================== */
document.addEventListener('DOMContentLoaded', function () {
  const usuarioBtn = document.getElementById('usuario-boton');
  const usuarioDropdown = document.getElementById('usuario-dropdown');
  const btnAnadir = document.getElementById('btn-anadir-usuario');
  if (!usuarioBtn || !usuarioDropdown) return;

  usuarioBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    const abrir = usuarioDropdown.hidden;
    usuarioDropdown.hidden = !abrir;
    usuarioBtn.setAttribute('aria-expanded', String(abrir));
  });

  if (btnAnadir) {
    btnAnadir.addEventListener('click', function () {
      window.location.href = 'login.html';
    });
  }

  document.addEventListener('click', function (e) {
    if (!usuarioDropdown.hidden && !e.target.closest('#usuario-menu')) {
      usuarioDropdown.hidden = true;
      usuarioBtn.setAttribute('aria-expanded', 'false');
    }
  });
});