/* ==========================================================
   3. BARRA DE NAVEGACIÓN, MENÚ LATERAL Y MONEDA
   ========================================================== */
(function () {
  const nav = document.getElementById('nav-sitio');
  const cajon = document.getElementById('cajon');
  const fondo = document.getElementById('cajon-fondo');
  const abrir = document.getElementById('abrir-menu');
  const cerrar = document.getElementById('cerrar-menu');
  const portada = document.querySelector('.portada') || document.querySelector('.banner');

  /* ---------- Menú lateral ---------- */
  function alternarMenu(mostrar) {
    if (!cajon || !fondo || !abrir) return;
    cajon.classList.toggle('abierto', mostrar);
    fondo.classList.toggle('visible', mostrar);
    abrir.setAttribute('aria-expanded', mostrar);
    document.body.style.overflow = mostrar ? 'hidden' : '';
    const focoDestino = mostrar ? cerrar : abrir;
    if (focoDestino) focoDestino.focus();
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

  /* ---------- Barra fija ---------- */
  if (nav) {
    if (portada && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entradas) {
        const portadaVisible = entradas[0].isIntersecting;
        nav.classList.toggle('fija', !portadaVisible);
      }).observe(portada);
    } else {
      nav.classList.add('fija');
    }
  }

  /* ---------- Moneda y menú desplegable personalizado ---------- */
  const OPCIONES_MONEDA = [
    { codigo: 'usd', etiqueta: 'USD', simbolo: '$' },
    { codigo: 'eur', etiqueta: 'EUR', simbolo: '€' },
    { codigo: 'dop', etiqueta: 'DOP', simbolo: 'RD$' },
    { codigo: 'gbp', etiqueta: 'GBP', simbolo: '£' }
  ];
  const STORAGE_MONEDA = 'rt_moneda_seleccionada';
  const moneda = document.getElementById('currency');
  const bandera = document.getElementById('bandera');
  const simboloEl = document.getElementById('moneda-simbolo');
  const labelMoneda = moneda ? moneda.closest('label.moneda') : null;
  const banderas = { usd: 'us', eur: 'eu', dop: 'do', gbp: 'gb' };

  function aplicarMoneda(cod) {
    const item = OPCIONES_MONEDA.find(function (m) { return m.codigo === cod; }) || OPCIONES_MONEDA[0];
    if (moneda && moneda.value !== item.codigo) {
      moneda.value = item.codigo;
    }
    if (bandera && banderas[item.codigo]) {
      bandera.src = 'https://flagcdn.com/w40/' + banderas[item.codigo] + '.png';
    }
    if (simboloEl) {
      simboloEl.textContent = item.simbolo;
    }
    try { localStorage.setItem(STORAGE_MONEDA, item.codigo); } catch (e) {}

    const btnActual = document.getElementById('rtMonedaActualBtn');
    if (btnActual) btnActual.textContent = item.etiqueta;

    const listaMoneda = document.getElementById('rtMonedaLista');
    if (listaMoneda) {
      listaMoneda.querySelectorAll('.rt-moneda-opcion').forEach(function (btn) {
        btn.classList.toggle('activa', btn.dataset.moneda === item.codigo);
      });
    }
  }

  if (moneda) {
    moneda.addEventListener('change', function () {
      aplicarMoneda((moneda.value || 'usd').toLowerCase());
    });
  }

  if (labelMoneda && moneda && !document.getElementById('rtMonedaLista')) {
    moneda.classList.add('rt-select-oculto');

    const btnActual = document.createElement('button');
    btnActual.type = 'button';
    btnActual.className = 'rt-moneda-actual-btn';
    btnActual.id = 'rtMonedaActualBtn';

    const listaMoneda = document.createElement('ul');
    listaMoneda.className = 'rt-moneda-lista';
    listaMoneda.id = 'rtMonedaLista';
    listaMoneda.hidden = true;

    listaMoneda.innerHTML = OPCIONES_MONEDA.map(function (op) {
      return (
        '<li>' +
          '<button type="button" class="rt-moneda-opcion" data-moneda="' + op.codigo + '">' +
            '<span>' + op.etiqueta + '</span>' +
            '<span>' + op.simbolo + '</span>' +
          '</button>' +
        '</li>'
      );
    }).join('');

    const caret = labelMoneda.querySelector('.fa-caret-down');
    if (caret) {
      labelMoneda.insertBefore(btnActual, caret);
    } else {
      labelMoneda.appendChild(btnActual);
    }
    labelMoneda.appendChild(listaMoneda);

    btnActual.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const listaIdioma = document.getElementById('idioma-lista');
      if (listaIdioma) listaIdioma.hidden = true;
      listaMoneda.hidden = !listaMoneda.hidden;
    });

    listaMoneda.addEventListener('click', function (e) {
      const opBtn = e.target.closest('.rt-moneda-opcion');
      if (!opBtn) return;
      aplicarMoneda(opBtn.dataset.moneda);
      moneda.dispatchEvent(new Event('change', { bubbles: true }));
      listaMoneda.hidden = true;
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('label.moneda')) {
        listaMoneda.hidden = true;
      }
    });
  }

  let monedaInicial = 'usd';
  try {
    const guardada = (localStorage.getItem(STORAGE_MONEDA) || '').toLowerCase();
    if (OPCIONES_MONEDA.some(function (m) { return m.codigo === guardada; })) {
      monedaInicial = guardada;
    }
  } catch (e) {}
  aplicarMoneda(monedaInicial);
})();

/* ==========================================================
   4. SELECTOR DE IDIOMA Y TRADUCCIÓN
   ========================================================== */
(function () {
  const IDIOMAS = [
    ['es', 'Español', 'es'],
    ['en', 'English', 'us'],
    ['fr', 'Français', 'fr'],
    ['de', 'Deutsch', 'de'],
    ['it', 'Italiano', 'it'],
    ['pt', 'Português', 'pt'],
    ['nl', 'Nederlands', 'nl'],
    ['ru', 'Русский', 'ru'],
    ['zh', '中文', 'cn'],
    ['ja', '日本語', 'jp'],
    ['ko', '한국어', 'kr'],
    ['ar', 'العربية', 'sa'],
    ['hi', 'हिन्दी', 'in'],
    ['bn', 'বাংলা', 'bd'],
    ['ur', 'اردو', 'pk'],
    ['fa', 'فارسی', 'ir'],
    ['tr', 'Türkçe', 'tr'],
    ['he', 'עברית', 'il'],
    ['pl', 'Polski', 'pl'],
    ['uk', 'Українська', 'ua'],
    ['cs', 'Čeština', 'cz'],
    ['sk', 'Slovenčina', 'sk'],
    ['hu', 'Magyar', 'hu'],
    ['ro', 'Română', 'ro'],
    ['bg', 'Български', 'bg'],
    ['el', 'Ελληνικά', 'gr'],
    ['sr', 'Српски', 'rs'],
    ['hr', 'Hrvatski', 'hr'],
    ['sl', 'Slovenščina', 'si'],
    ['sv', 'Svenska', 'se'],
    ['no', 'Norsk', 'no'],
    ['da', 'Dansk', 'dk'],
    ['fi', 'Suomi', 'fi'],
    ['is', 'Íslenska', 'is'],
    ['et', 'Eesti', 'ee'],
    ['lv', 'Latviešu', 'lv'],
    ['lt', 'Lietuvių', 'lt'],
    ['th', 'ไทย', 'th'],
    ['vi', 'Tiếng Việt', 'vn'],
    ['id', 'Bahasa Indonesia', 'id'],
    ['ms', 'Bahasa Melayu', 'my'],
    ['tl', 'Filipino', 'ph'],
    ['sw', 'Kiswahili', 'ke'],
    ['ga', 'Gaeilge', 'ie']
  ];

  const TRADUCCIONES = {
    es: {
      tituloDoc: 'Acerca de Ruta Tropical',
      bannerH1: 'Tu viaje empieza en Ruta Tropical.',
      intro: 'Desde 2015, Ruta Tropical ayuda a los viajeros a descubrir el Caribe y más allá. ¿Un buscador de viajes con sabor tropical? Nadie lo había hecho, hasta que llegamos nosotros.',
      creemosH2: 'En qué creemos.',
      menuVuelos: 'Vuelos',
      menuHoteles: 'Hoteles',
      menuAutobus: 'Autobús',
      planificaViajes: 'planifica con IA',
      planeaViajes: 'planean tus viajes',
      sobreNosotros: 'Sobre nosotros',
      contacto: 'Contacto',
      preguntasFrecuentes: 'Preguntas frecuentes',
      explorar: 'explorar',
      terminos: 'Términos y condiciones',
      rastreadorVuelos: 'rastraedor de vuelos',
      viajes: 'viajes',
      telLabel: 'Teléfono:',
      correoLabel: 'Correo:',
      footerDesc: 'Tu agencia de confianza para descubrir el mundo al mejor precio. Compara, ahorra y vuela sin límites.',
      colEmpresa: 'Empresa',
      acercaDe: 'Acerca de',
      prensa: 'Prensa',
      afiliados: 'Afiliados',
      socios: 'Socios',
      colContacto: 'Contacto',
      ayudaFaq: 'Ayuda / FAQ',
      hoteles: 'Hoteles',
      publicidad: 'Publicidad',
      colMas: 'Más',
      tarifasAereas: 'Tarifas aéreas',
      ofertasBajas: 'Ofertas bajas',
      privacidad: 'Privacidad',
      descargaApp: 'Descarga la app',
      appTexto: 'Lleva tus reservas y ofertas siempre contigo.',
      derechos: '© 2026 RuTa Tropical. Todos los derechos reservados.',
      aerolineas: 'Aerolíneas'
    },
    en: {
      tituloDoc: 'About Ruta Tropical',
      bannerH1: 'Your journey starts at Ruta Tropical.',
      intro: 'Since 2015, Ruta Tropical has helped travelers discover the Caribbean and beyond. A travel search engine with a tropical touch? Nobody had done it until we arrived.',
      creemosH2: 'What we believe in.',
      menuVuelos: 'Flights',
      menuHoteles: 'Hotels',
      menuAutobus: 'Bus',
      planificaViajes: 'Plan with AI',
      planeaViajes: 'Plan your trips',
      sobreNosotros: 'About us',
      contacto: 'Contact',
      preguntasFrecuentes: 'FAQ',
      explorar: 'Explore',
      terminos: 'Terms and conditions',
      rastreadorVuelos: 'Flight tracker',
      viajes: 'Trips',
      telLabel: 'Phone:',
      correoLabel: 'Email:',
      footerDesc: 'Your trusted agency to discover the world at the best price. Compare, save, and fly without limits.',
      colEmpresa: 'Company',
      acercaDe: 'About',
      prensa: 'Press',
      afiliados: 'Affiliates',
      socios: 'Partners',
      colContacto: 'Contact',
      ayudaFaq: 'Help / FAQ',
      hoteles: 'Hotels',
      publicidad: 'Advertising',
      colMas: 'More',
      tarifasAereas: 'Airfares',
      ofertasBajas: 'Low fare deals',
      privacidad: 'Privacy',
      descargaApp: 'Download the app',
      appTexto: 'Take your bookings and deals with you everywhere.',
      derechos: '© 2026 RuTa Tropical. All rights reserved.',
      aerolineas: 'Airlines'
    },
    fr: {
      tituloDoc: 'À propos de Ruta Tropical',
      bannerH1: 'Votre voyage commence chez Ruta Tropical.',
      intro: 'Depuis 2015, Ruta Tropical aide les voyageurs à découvrir les Caraïbes et au-delà. Un moteur de recherche de voyages au parfum tropical ? Personne ne l’avait fait avant nous.',
      creemosH2: 'Ce en quoi nous croyons.',
      menuVuelos: 'Vols',
      menuHoteles: 'Hôtels',
      menuAutobus: 'Bus',
      planificaViajes: "Planifier avec l'IA",
      planeaViajes: 'Planifiez vos voyages',
      sobreNosotros: 'À propos',
      contacto: 'Contact',
      preguntasFrecuentes: 'FAQ',
      explorar: 'Explorer',
      terminos: 'Conditions générales',
      rastreadorVuelos: 'Suivi des vols',
      viajes: 'Voyages',
      telLabel: 'Téléphone :',
      correoLabel: 'E-mail :',
      footerDesc: 'Votre agence de confiance pour découvrir le monde au meilleur prix. Comparez, économisez et voyagez sans limites.',
      colEmpresa: 'Entreprise',
      acercaDe: 'À propos',
      prensa: 'Presse',
      afiliados: 'Affiliés',
      socios: 'Partenaires',
      colContacto: 'Contact',
      ayudaFaq: 'Aide / FAQ',
      hoteles: 'Hôtels',
      publicidad: 'Publicité',
      colMas: 'Plus',
      tarifasAereas: 'Tarifs aériens',
      ofertasBajas: 'Meilleurs tarifs',
      privacidad: 'Confidentialité',
      descargaApp: "Téléchargez l'appli",
      appTexto: 'Emportez vos réservations et offres partout avec vous.',
      derechos: '© 2026 RuTa Tropical. Tous droits réservés.',
      aerolineas: 'Compagnies aériennes'
    }
  };

  function traducirAcercaDe(cod) {
    const t = TRADUCCIONES[cod];
    if (!t) return;

    document.title = t.tituloDoc;

    const bannerH1 = document.querySelector('.banner h1');
    if (bannerH1) bannerH1.textContent = t.bannerH1;

    const introP = document.querySelector('main .intro');
    if (introP) introP.textContent = t.intro;

    const h2Creemos = document.querySelector('main h2');
    if (h2Creemos) h2Creemos.textContent = t.creemosH2;

    const cajonLinks = document.querySelectorAll('.cajon__principal a');
    if (cajonLinks[0] && cajonLinks[0].lastChild) cajonLinks[0].lastChild.textContent = ' ' + t.menuVuelos;
    if (cajonLinks[1] && cajonLinks[1].lastChild) cajonLinks[1].lastChild.textContent = ' ' + t.menuHoteles;
    if (cajonLinks[2] && cajonLinks[2].lastChild) cajonLinks[2].lastChild.textContent = ' ' + t.menuAutobus;

    const secLinks = document.querySelectorAll('.cajon__enlaces a');
    const ordenSec = [
      t.planificaViajes,
      t.planeaViajes,
      t.sobreNosotros,
      t.contacto,
      t.preguntasFrecuentes,
      t.explorar,
      t.terminos,
      t.rastreadorVuelos,
      t.viajes
    ];
    secLinks.forEach(function (a, i) {
      if (ordenSec[i] && a.lastChild) a.lastChild.textContent = ordenSec[i];
    });

    const fuertes = document.querySelectorAll('.cajon__contacto strong');
    if (fuertes[0]) fuertes[0].textContent = t.telLabel;
    if (fuertes[1]) fuertes[1].textContent = t.correoLabel;

    const desc = document.querySelector('.rt-footer__desc');
    if (desc) desc.textContent = t.footerDesc;
    const appTxt = document.querySelector('.rt-footer__app-texto');
    if (appTxt) appTxt.textContent = t.appTexto;
    const derechos = document.querySelector('.rt-footer__legal > span');
    if (derechos) derechos.textContent = t.derechos;
    const aeroTit = document.querySelector('.rt-footer__aero-titulo');
    if (aeroTit) aeroTit.textContent = t.aerolineas;

    const cols = document.querySelectorAll('.rt-footer__col');
    if (cols[0]) {
      const h3 = cols[0].querySelector('h3');
      if (h3) h3.textContent = t.colEmpresa;
      const l = cols[0].querySelectorAll('ul a');
      const arr = [t.acercaDe, t.prensa, t.afiliados, t.socios];
      l.forEach(function (a, i) { if (arr[i] && a.lastChild) a.lastChild.textContent = ' ' + arr[i]; });
    }
    if (cols[1]) {
      const h3 = cols[1].querySelector('h3');
      if (h3) h3.textContent = t.colContacto;
      const l = cols[1].querySelectorAll('ul a');
      const arr = [t.ayudaFaq, t.hoteles, t.publicidad];
      l.forEach(function (a, i) { if (arr[i] && a.lastChild) a.lastChild.textContent = ' ' + arr[i]; });
    }
    if (cols[2]) {
      const h3 = cols[2].querySelector('h3');
      if (h3) h3.textContent = t.colMas;
      const l = cols[2].querySelectorAll('ul a');
      const arr = [t.tarifasAereas, t.ofertasBajas, t.privacidad];
      l.forEach(function (a, i) { if (arr[i] && a.lastChild) a.lastChild.textContent = ' ' + arr[i]; });
    }
    if (cols[3]) {
      const h3 = cols[3].querySelector('h3');
      if (h3) h3.textContent = t.descargaApp;
    }
    const legLinks = document.querySelectorAll('.rt-footer__legales-links a');
    if (legLinks[0]) legLinks[0].textContent = t.privacidad;
    if (legLinks[1]) legLinks[1].textContent = t.terminos;
  }

  const contenedor = document.getElementById('idioma');
  const boton = document.getElementById('idioma-boton');
  const lista = document.getElementById('idioma-lista');
  const bandera = document.getElementById('idioma-bandera');
  const codigo = document.getElementById('idioma-codigo');
  if (!contenedor || !boton || !lista || !bandera || !codigo) return;

  const url = function (pais) { return 'https://flagcdn.com/w40/' + pais + '.png'; };

  let actual = (localStorage.getItem('idioma') || 'es').toLowerCase();
  if (!IDIOMAS.some(function (i) { return i[0] === actual; })) actual = 'es';

  lista.innerHTML = '';
  IDIOMAS.forEach(function (i) {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    li.dataset.codigo = i[0];
    li.tabIndex = -1;
    li.innerHTML =
      '<img src="' + url(i[2]) + '" alt="" width="28" height="19" loading="lazy">' +
      '<span>' + i[1] + '</span><small>' + i[0].toUpperCase() + '</small>';
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
    try { localStorage.setItem('idioma', cod); } catch (e) {}

    items().forEach(function (li) {
      li.setAttribute('aria-selected', li.dataset.codigo === cod);
    });

    traducirAcercaDe(cod);
    document.dispatchEvent(new CustomEvent('idioma:cambio', { detail: { idioma: cod } }));
  }

  function abrir() {
    lista.hidden = false;
    boton.setAttribute('aria-expanded', 'true');
    const sel = items().find(function (li) { return li.dataset.codigo === actual; });
    if (sel) { enfocar(sel); sel.scrollIntoView({ block: 'center' }); }
  }

  function cerrar() {
    lista.hidden = true;
    boton.setAttribute('aria-expanded', 'false');
    items().forEach(function (li) { li.classList.remove('enfocado'); });
  }

  function enfocar(li) {
    items().forEach(function (x) { x.classList.remove('enfocado'); });
    li.classList.add('enfocado');
    li.scrollIntoView({ block: 'nearest' });
  }

  boton.addEventListener('click', function (e) {
    e.stopPropagation();
    const listaMoneda = document.getElementById('rtMonedaLista');
    if (listaMoneda) listaMoneda.hidden = true;
    lista.hidden ? abrir() : cerrar();
  });

  lista.addEventListener('click', function (e) {
    const li = e.target.closest('li');
    if (!li) return;
    elegir(li.dataset.codigo);
    cerrar();
    boton.focus();
  });

  contenedor.addEventListener('keydown', function (e) {
    const todos = items();
    let idx = todos.findIndex(function (li) { return li.classList.contains('enfocado'); });

    if (e.key === 'Escape' && !lista.hidden) { cerrar(); boton.focus(); return; }

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (lista.hidden) { abrir(); return; }
      idx = e.key === 'ArrowDown' ? Math.min(idx + 1, todos.length - 1) : Math.max(idx - 1, 0);
      enfocar(todos[idx]);
    }

    if (e.key === 'Enter' && !lista.hidden && idx >= 0) {
      e.preventDefault();
      elegir(todos[idx].dataset.codigo);
      cerrar();
      boton.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (!lista.hidden && !contenedor.contains(e.target)) cerrar();
  });

  elegir(actual);
})();

/* ==========================================================
   5. CONTADOR, ESTRELLAS, TRADUCCIÓN PRINCIPAL Y PERFIL
   ========================================================== */
(function () {
  const seccion = document.querySelector('.datos');
  if (seccion) {
    const numero = seccion.querySelector('.contador-num');
    const estrellasCont = seccion.querySelector('.estrellas');
    const estrellas = estrellasCont ? Array.from(estrellasCont.querySelectorAll('i')) : [];

    const sinAnimacion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const formato = new Intl.NumberFormat(document.documentElement.lang || 'es');

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
          estrella.classList.add('encendida');
          setTimeout(function () { estrella.classList.add('asentada'); }, 300);
        }, i * 150);
      });
    }

    if (!sinAnimacion) {
      if (numero) numero.textContent = formato.format(0);
      if (estrellasCont) estrellasCont.classList.add('preparado');
    }

    function lanzar() {
      if (sinAnimacion) return;
      if (numero) contar(numero, Number(numero.dataset.meta), 1800);
      if (estrellasCont) encender();
    }

    if ('IntersectionObserver' in window && !sinAnimacion) {
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
  }

  const TRADUCCIONES_MAIN = {
    es: {
      parrafos: [
        "Ruta Tropical nació de una idea sencilla: viajar debe ser fácil, claro y emocionante desde el primer clic.",
        "Creemos que planificar unas vacaciones no debería ser complicado. Por eso construimos una plataforma que reúne en un solo lugar vuelos, hoteles, alquiler de autos y paquetes, para que compares con calma y elijas lo que mejor se adapte a ti. Somos pioneros en la búsqueda de viajes enfocada en destinos tropicales, siempre pensando en quien viaja. No importa tu presupuesto, tus preferencias ni tu destino soñado: mereces ver todas las opciones y decidir con libertad.",
        "Queremos que la web sea una herramienta a tu favor. Sin trucos, sin cargos ocultos y sin sorpresas desagradables. Solo tú, tus opciones y las ganas de partir.",
        "Hoy somos una de las plataformas de viajes de más rápido crecimiento de la región. Analizamos miles de ofertas cada día y colaboramos con aerolíneas, hoteles y agencias de confianza para que cada persona planifique su aventura de forma ágil, transparente y segura. Aunque hemos crecido, nuestros valores siguen siendo los mismos desde el primer día."
      ],
      valores: [
        ["Todas las personas merecen elegir con transparencia.", "Nuestra plataforma te permite comparar opciones, entender los costos totales y reservar con confianza. Sin tarifas ocultas. Sin sorpresas."],
        ["La magia surge cuando tienes todas las opciones.", "Ruta Tropical está diseñada para mostrarte un panorama completo de aerolíneas, hoteles, agencias de alquiler de autos y proveedores locales, para que veas todo antes de reservar."],
        ["No tenemos favoritos.", "Trabajamos con proveedores de viajes para mostrarte precios, horarios y disponibilidad de forma clara y justa. Nuestros resultados se basan en lo que mejor se ajusta a ti, no en lo que más nos conviene a nosotros."],
        ["Un mercado abierto nos beneficia a todos.", "Cuando hay variedad, ganan tanto los viajeros como los proveedores. Mantenemos un acceso equitativo a las tarifas para que cada persona encuentre su mejor opción y para fomentar un ecosistema de viajes sano y competitivo."],
        ["Viajar debe ser accesible para todo el mundo.", "Viajar debe ser fácil, sin importar de dónde ni cómo lo planifiques. Por eso trabajamos con una amplia red de proveedores y nunca dejamos de innovar. Con herramientas intuitivas y búsqueda inteligente, te ayudamos a encontrar vuelos, alojamientos, autos y paquetes que se adapten a tus necesidades."]
      ]
    },
    en: {
      parrafos: [
        "Ruta Tropical was born from a simple idea: travel should be easy, clear, and exciting from the very first click.",
        "We believe planning a vacation shouldn't be complicated. That's why we built a platform that brings together flights, hotels, car rentals, and packages in one place so you can compare calmly and choose what fits you best. We are pioneers in travel search focused on tropical destinations, always putting travelers first. No matter your budget, preferences, or dream destination: you deserve to see all options and decide freely.",
        "We want the web to be a tool in your favor. No tricks, no hidden fees, and no unpleasant surprises. Just you, your options, and the desire to set off.",
        "Today we are one of the fastest-growing travel platforms in the region. We analyze thousands of deals every day and partner with trusted airlines, hotels, and agencies so everyone can plan their adventure quickly, transparently, and safely. Even as we have grown, our values remain the same from day one."
      ],
      valores: [
        ["Everyone deserves to choose with transparency.", "Our platform lets you compare options, understand total costs, and book with confidence. No hidden fees. No surprises."],
        ["Magic happens when you have all the options.", "Ruta Tropical is designed to give you a complete view of airlines, hotels, car rental agencies, and local providers so you see everything before booking."],
        ["We play no favorites.", "We work with travel providers to show prices, schedules, and availability clearly and fairly. Our results are based on what suits you best, not what suits us most."],
        ["An open market benefits us all.", "When there is variety, both travelers and providers win. We maintain fair access to fares so everyone finds their best option and to foster a healthy, competitive travel ecosystem."],
        ["Travel should be accessible to everyone.", "Travel should be easy, no matter where or how you plan it. That's why we work with a broad network of providers and never stop innovating. With intuitive tools and smart search, we help you find flights, stays, cars, and packages tailored to your needs."]
      ]
    }
  };

  function aplicarTraduccionPrincipal(cod) {
    const data = TRADUCCIONES_MAIN[cod] || TRADUCCIONES_MAIN.en || TRADUCCIONES_MAIN.es;
    if (!data) return;

    const mainPs = Array.from(document.querySelectorAll("main > p:not(.intro)"));
    mainPs.forEach(function (p, idx) {
      if (data.parrafos[idx]) p.textContent = data.parrafos[idx];
    });

    const valorCards = Array.from(document.querySelectorAll("main section .valor"));
    valorCards.forEach(function (card, idx) {
      const pair = data.valores[idx];
      if (!pair) return;
      const h3 = card.querySelector("h3");
      const p = card.querySelector("p");
      if (h3) h3.textContent = pair[0];
      if (p) p.textContent = pair[1];
    });
  }

  document.addEventListener("idioma:cambio", function (e) {
    const cod = (e && e.detail && e.detail.idioma) || document.documentElement.lang || "es";
    aplicarTraduccionPrincipal(cod);
  });

  aplicarTraduccionPrincipal((localStorage.getItem("idioma") || "es").toLowerCase());

  function sincronizarMargenConFooter() {
    const footerInner = document.querySelector(".rt-footer__inner");
    const mainEl = document.querySelector("main");
    if (!footerInner || !mainEl) return;

    const estilosFooter = window.getComputedStyle(footerInner);
    const rectFooter = footerInner.getBoundingClientRect();

    if (rectFooter.width > 0) {
      mainEl.style.maxWidth = estilosFooter.maxWidth !== "none" ? estilosFooter.maxWidth : rectFooter.width + "px";
      mainEl.style.paddingLeft = estilosFooter.paddingLeft;
      mainEl.style.paddingRight = estilosFooter.paddingRight;
      mainEl.style.marginLeft = "auto";
      mainEl.style.marginRight = "auto";
    }
  }

  window.addEventListener("load", sincronizarMargenConFooter);
  window.addEventListener("resize", sincronizarMargenConFooter);
  document.addEventListener("DOMContentLoaded", sincronizarMargenConFooter);

  document.addEventListener("DOMContentLoaded", function () {
    const btnPerfil = document.getElementById("rtPerfilBtn");
    const menuPerfil = document.getElementById("rtPerfilMenu");
    if (btnPerfil && menuPerfil) {
      btnPerfil.addEventListener("click", function (e) {
        e.stopPropagation();
        const abierto = menuPerfil.classList.toggle("abierto");
        menuPerfil.setAttribute("aria-hidden", String(!abierto));
        btnPerfil.setAttribute("aria-expanded", String(abierto));
        menuPerfil.style.display = abierto ? "block" : "";
      });

      document.addEventListener("click", function (e) {
        if (!e.target.closest("#rtPerfilBox")) {
          menuPerfil.classList.remove("abierto");
          menuPerfil.setAttribute("aria-hidden", "true");
          btnPerfil.setAttribute("aria-expanded", "false");
          menuPerfil.style.display = "";
        }
      });
    }

    const btnAnadir = document.getElementById("rtPerfilAnadirBtn");
    if (btnAnadir) {
      btnAnadir.addEventListener("click", function () {
        window.location.href = "../pagina principal/login.html";
      });
    }

    const btnSalir = document.getElementById("rtPerfilSalirBtn");
    if (btnSalir) {
      btnSalir.addEventListener("click", function () {
        try {
          localStorage.removeItem("rt_usuario_actual");
          localStorage.removeItem("usuarioActual");
        } catch (_) {}
        window.location.href = "../pagina principal/login.html";
      });
    }
  });
})();