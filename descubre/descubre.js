/* ==========================================================
   1. ANIMACIÓN DEL PIE DE PÁGINA AL HACER SCROLL
   ========================================================== */
(function () {
  const footer = document.querySelector('.rt-footer');
  if (!footer) return;

  if (!('IntersectionObserver' in window)) {
    footer.classList.add('visible');
    return;
  }

  const obs = new IntersectionObserver(function (entradas, observer) {
    if (entradas[0].isIntersecting) {
      footer.classList.add('visible');
      observer.disconnect();
    }
  }, { threshold: 0.05 });

  obs.observe(footer);
})();

/* ==========================================================
   2. BARRA DE NAVEGACIÓN, MENÚ LATERAL, MONEDA Y AVATAR
   ========================================================== */
(function () {
  const nav = document.getElementById('nav-sitio');
  const cajon = document.getElementById('cajon');
  const fondo = document.getElementById('cajon-fondo');
  const abrir = document.getElementById('abrir-menu');
  const cerrar = document.getElementById('cerrar-menu');
  const hero = document.querySelector('.hero');

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
    if (hero && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entradas) {
        nav.classList.toggle('fija', !entradas[0].isIntersecting);
      }).observe(hero);
    } else {
      nav.classList.add('fija');
    }
  }

  /* Avatar personalizado del usuario */
  const STORAGE_AVATAR = 'rt_avatar_usuario';
  const avatarImg = document.getElementById('avatar-usuario') || document.querySelector('.nav-sitio__usuario img');

  function aplicarAvatar(src) {
    if (!avatarImg || !src) return;
    avatarImg.src = src;
    try { localStorage.setItem(STORAGE_AVATAR, src); } catch (_) {}
  }

  if (avatarImg) {
    try {
      const guardadoAvatar = localStorage.getItem(STORAGE_AVATAR);
      if (guardadoAvatar) avatarImg.src = guardadoAvatar;
    } catch (_) {}

    avatarImg.addEventListener('error', function () {
      if (avatarImg.dataset.fallback && avatarImg.src !== avatarImg.dataset.fallback) {
        avatarImg.src = avatarImg.dataset.fallback;
      }
    });
  }

  window.cambiarFotoUsuario = aplicarAvatar;

  /* Moneda personalizada + sincronizada con #currency */
  const STORAGE_MONEDA = 'rt_moneda_seleccionada';
  const banderas = { usd: 'us', eur: 'eu', dop: 'do', gbp: 'gb' };
  const simbolos = { usd: '$', eur: '€', dop: 'RD$', gbp: '£' };
  const monedaSelect = document.getElementById('currency');
  const bandera = document.getElementById('bandera');
  const monedaBtn = document.getElementById('moneda-boton');
  const monedaLista = document.getElementById('moneda-lista');
  const monedaTexto = document.getElementById('moneda-texto');
  const simboloEl = document.getElementById('moneda-simbolo');

  function setMonedaLista(abierta) {
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
    if (bandera && banderas[codigoValido]) {
      bandera.src = 'https://flagcdn.com/w40/' + banderas[codigoValido] + '.png';
    }
    if (monedaTexto) monedaTexto.textContent = codigoValido.toUpperCase();
    if (simboloEl) simboloEl.textContent = simbolos[codigoValido];

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
      setMonedaLista(monedaLista.hidden);
    });

    monedaLista.addEventListener('click', function (e) {
      const item = e.target.closest('li[data-moneda]');
      if (!item) return;
      aplicarMoneda(item.dataset.moneda);
      setMonedaLista(false);
      monedaBtn.focus();
    });

    document.addEventListener('click', function (e) {
      if (!monedaLista.hidden && !e.target.closest('#moneda-box')) {
        setMonedaLista(false);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !monedaLista.hidden) {
        setMonedaLista(false);
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
   3. BUSCADOR DE RUTA E INTERCAMBIO
   ========================================================== */
(function () {
  const origenInput = document.getElementById('campo-origen');
  const destinoInput = document.getElementById('campo-destino');
  const duracionSelect = document.getElementById('campo-duracion');
  const swapBtn = document.getElementById('btn-intercambiar');
  const form = document.getElementById('form-descubre');
  const resultado = document.getElementById('resultado-ruta');

  if (swapBtn && origenInput && destinoInput) {
    swapBtn.addEventListener('click', function () {
      const temp = origenInput.value;
      origenInput.value = destinoInput.value;
      destinoInput.value = temp;
    });
  }

  document.querySelectorAll('.ideas a[data-destino]').forEach(function (enlace) {
    enlace.addEventListener('click', function (e) {
      e.preventDefault();
      if (origenInput && !origenInput.value.trim()) {
        origenInput.value = 'Santo Domingo (SDQ)';
      }
      if (destinoInput) {
        destinoInput.value = enlace.dataset.destino || '';
        destinoInput.focus();
      }
    });
  });

  if (form && resultado) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const origen = (origenInput && origenInput.value.trim()) || 'Santo Domingo (SDQ)';
      const destino = (destinoInput && destinoInput.value.trim()) || 'tu próximo destino';
      const dias = (duracionSelect && duracionSelect.value) || '4';

      resultado.hidden = false;
      resultado.innerHTML =
        '<strong>Sugerencia de reserva:</strong> Para un viaje de <strong>' +
        dias +
        ' días</strong> desde <strong>' +
        origen +
        '</strong> hacia <strong>' +
        destino +
        '</strong>, conviene reservar entre <strong>3 y 6 semanas</strong> antes de la salida.';
    });
  }
})();

/* ==========================================================
   4. SELECTOR DE IDIOMA + TRADUCCIÓN COMPLETA DE DESCUBRE
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

  const CACHE_DESCUBRE = 'rt_descubre_i18n_v4_';

  try {
    Object.keys(localStorage).forEach(function (clave) {
      if (
        clave.indexOf('rt_descubre_i18n_v1_') === 0 ||
        clave.indexOf('rt_descubre_i18n_v2_') === 0 ||
        clave.indexOf('rt_descubre_i18n_v3_') === 0
      ) {
        localStorage.removeItem(clave);
      }
    });
  } catch (_) {}

  const TEXTOS_DESCUBRE = {
    es: {
      h1: 'Descubre cuándo reservar tu próximo viaje.',
      textPre: 'Encuentra la mejor fecha para volar según tu ruta y días de viaje.',
      textStrong: 'Elige tu salida, destino y duración para ver cuándo comprar más barato.',
      destinoPlaceholder: 'Destino',
      duraciones: ['Viaje de 4 días', 'Viaje de 7 días', 'Viaje de 10 días', 'Viaje de 14 días'],
      ideasPrefijo: 'Parece que te vendrían bien algunas ideas. Prueba esto:',
      ideasLinks: ['De Santo Domingo a Nueva York,', 'De Santo Domingo a Newark', 'De Santo Domingo a Miami'],
      ideasO: 'o',
      methodH2: 'Metodología',
      acordeon: [
        ['Cálculo: nuestra recomendación', 'Combinamos precios, clima y demanda para sugerir el mejor momento.'],
        ['Datos: precios de vuelos', 'Analizamos el historial de precios de vuelos para tu ruta.'],
        ['Datos: precios de hoteles', 'Revisamos las tarifas de hoteles en el destino a lo largo del año.'],
        ['Datos: popularidad del destino', 'Medimos cuántos viajeros buscan el destino en cada fecha.'],
        ['Datos: clima', 'Usamos temperaturas y lluvias históricas del destino.'],
        ['Datos: el mejor momento para reservar', 'Estimamos con cuánta anticipación conviene comprar.']
      ],
      menu: {
        principal: ['Vuelos', 'Hoteles', 'Autobús'],
        enlaces: [
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
        telefono: 'Teléfono:',
        correo: 'Correo:'
      },
      footer: {
        desc: 'Tu plataforma de confianza para descubrir el mejor momento y el mejor precio. Compara, ahorra y vuela sin complicaciones.',
        cols: ['Empresa', 'Contacto', 'Más'],
        links: [
          ['Acerca de'],
          ['Ayuda / FAQ', 'Prensa', 'Afiliados', 'Dueños de hoteles', 'Socios', 'Anúnciate con nosotros'],
          ['Tarifas aéreas', 'Aerolíneas', 'Consejos de tarifas bajas', 'Insignias y certificados', 'Seguridad']
        ],
        appTitulo: 'Descarga la app',
        appTexto: 'Lleva tus reservas y ofertas siempre contigo.',
        derechos: 'Todos los derechos reservados.',
        legales: ['Privacidad', 'Términos y condiciones', 'Cookies']
      }
    },
    en: {
      h1: 'Discover when to book your next trip.',
      textPre: 'Find the best date to fly based on your route and trip length.',
      textStrong: 'Choose your departure, destination, and duration to see when to buy cheaper.',
      destinoPlaceholder: 'Destination',
      duraciones: ['4-day trip', '7-day trip', '10-day trip', '14-day trip'],
      ideasPrefijo: 'Looks like you could use some ideas. Try this:',
      ideasLinks: ['From Santo Domingo to New York,', 'From Santo Domingo to Newark', 'From Santo Domingo to Miami'],
      ideasO: 'or',
      methodH2: 'Methodology',
      acordeon: [
        ['Calculation: our recommendation', 'We combine prices, weather, and demand to suggest the best time.'],
        ['Data: flight prices', 'We analyze historical flight prices for your route.'],
        ['Data: hotel prices', 'We review hotel rates at the destination throughout the year.'],
        ['Data: destination popularity', 'We measure how many travelers search for the destination on each date.'],
        ['Data: weather', 'We use historical temperatures and rainfall at the destination.'],
        ['Data: best time to book', 'We estimate how far in advance it is best to buy.']
      ],
      menu: {
        principal: ['Flights', 'Hotels', 'Bus'],
        enlaces: [
          'Plan with AI',
          'Plan your trips',
          'About us',
          'Contact',
          'FAQ',
          'Explore',
          'Terms and conditions',
          'Flight tracker',
          'Trips'
        ],
        telefono: 'Phone:',
        correo: 'Email:'
      },
      footer: {
        desc: 'Your trusted platform to discover the best time and best price. Compare, save, and fly hassle-free.',
        cols: ['Company', 'Contact', 'More'],
        links: [
          ['About us'],
          ['Help / FAQ', 'Press', 'Affiliates', 'Hotel owners', 'Partners', 'Advertise with us'],
          ['Airfares', 'Airlines', 'Low-fare tips', 'Badges and certificates', 'Security']
        ],
        appTitulo: 'Download the app',
        appTexto: 'Take your bookings and deals with you everywhere.',
        derechos: 'All rights reserved.',
        legales: ['Privacy', 'Terms and conditions', 'Cookies']
      }
    },
    fr: {
      h1: 'Découvrez quand réserver votre prochain voyage.',
      textPre: 'Trouvez la meilleure date pour voyager selon votre itinéraire et la durée du séjour.',
      textStrong: 'Choisissez votre départ, votre destination et la durée pour acheter moins cher.',
      destinoPlaceholder: 'Destination',
      duraciones: ['Voyage de 4 jours', 'Voyage de 7 jours', 'Voyage de 10 jours', 'Voyage de 14 jours'],
      ideasPrefijo: 'Vous manquez d’idées ? Essayez ceci :',
      ideasLinks: ['De Saint-Domingue à New York,', 'De Saint-Domingue à Newark', 'De Saint-Domingue à Miami'],
      ideasO: 'ou',
      methodH2: 'Méthodologie',
      acordeon: [
        ['Calcul : notre recommandation', 'Nous combinons prix, météo et demande pour suggérer le meilleur moment.'],
        ['Données : prix des vols', 'Nous analysons l’historique des tarifs aériens pour votre itinéraire.'],
        ['Données : prix des hôtels', 'Nous examinons les tarifs hôteliers sur place tout au long de l’année.'],
        ['Données : popularité de la destination', 'Nous mesurons l’intérêt des voyageurs selon les dates.'],
        ['Données : météo', 'Nous utilisons les températures et précipitations historiques de la destination.'],
        ['Données : meilleur moment pour réserver', 'Nous estimons avec combien d’avance il vaut mieux acheter.']
      ],
      menu: {
        principal: ['Vols', 'Hôtels', 'Bus'],
        enlaces: [
          'Planifier avec l’IA',
          'Planifiez vos voyages',
          'À propos',
          'Contact',
          'FAQ',
          'Explorer',
          'Conditions générales',
          'Suivi des vols',
          'Voyages'
        ],
        telefono: 'Téléphone :',
        correo: 'E-mail :'
      },
      footer: {
        desc: 'Votre plateforme de confiance pour trouver le meilleur moment et le meilleur prix. Comparez, économisez et voyagez sereinement.',
        cols: ['Entreprise', 'Contact', 'Plus'],
        links: [
          ['À propos'],
          ['Aide / FAQ', 'Presse', 'Affiliés', 'Propriétaires d’hôtels', 'Partenaires', 'Annoncer avec nous'],
          ['Tarifs aériens', 'Compagnies aériennes', 'Conseils petits prix', 'Badges et certificats', 'Sécurité']
        ],
        appTitulo: 'Téléchargez l’application',
        appTexto: 'Emportez vos réservations et offres partout avec vous.',
        derechos: 'Tous droits réservés.',
        legales: ['Confidentialité', 'Conditions générales', 'Cookies']
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

  function pintarDescubre(t) {
    if (!t) return;
    const h1 = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero-text');
    const destinoInput = document.getElementById('campo-destino');
    const durOptions = document.querySelectorAll('#campo-duracion option');
    const durTexto = document.getElementById('duracion-texto');
    const durItems = document.querySelectorAll('#duracion-lista li[data-valor]');
    const durSelect = document.getElementById('campo-duracion');
    const ideasPrefijo = document.querySelector('.ideas__prefijo');
    const ideasLinks = document.querySelectorAll('.ideas a');
    const ideasO = document.querySelector('.ideas__o');
    const methodH2 = document.querySelector('.method h2');
    const items = document.querySelectorAll('.accordion details');

    if (h1 && t.h1) h1.textContent = t.h1;
    if (heroText && t.textPre && t.textStrong) {
      heroText.innerHTML = t.textPre + ' <strong>' + t.textStrong + '</strong>';
    }
    if (destinoInput && t.destinoPlaceholder) destinoInput.placeholder = t.destinoPlaceholder;

    durOptions.forEach(function (opt, i) {
      if (t.duraciones && t.duraciones[i]) opt.textContent = t.duraciones[i];
    });

    durItems.forEach(function (li, i) {
      if (t.duraciones && t.duraciones[i]) {
        li.textContent = t.duraciones[i];
        if (durSelect && li.dataset.valor === durSelect.value && durTexto) {
          durTexto.textContent = t.duraciones[i];
        }
      }
    });

    if (ideasPrefijo && t.ideasPrefijo) ideasPrefijo.textContent = t.ideasPrefijo;
    ideasLinks.forEach(function (a, i) {
      if (t.ideasLinks && t.ideasLinks[i]) a.textContent = t.ideasLinks[i];
    });
    if (ideasO && t.ideasO) ideasO.textContent = t.ideasO;
    if (methodH2 && t.methodH2) methodH2.textContent = t.methodH2;

    items.forEach(function (det, i) {
      const par = t.acordeon && t.acordeon[i];
      if (!par) return;
      const sum = det.querySelector('summary');
      const p = det.querySelector('p');
      if (sum && par[0]) sum.textContent = par[0];
      if (p && par[1]) p.textContent = par[1];
    });

    if (t.menu) {
      const enlacesPrincipales = document.querySelectorAll('.cajon__principal a');
      enlacesPrincipales.forEach(function (a, i) {
        if (t.menu.principal && t.menu.principal[i]) {
          establecerTextoConservandoIcono(a, t.menu.principal[i]);
        }
      });

      const enlacesSecundarios = document.querySelectorAll('.cajon__enlaces a');
      enlacesSecundarios.forEach(function (a, i) {
        if (t.menu.enlaces && t.menu.enlaces[i]) {
          establecerTextoConservandoIcono(a, t.menu.enlaces[i]);
        }
      });

      const etiquetasContacto = document.querySelectorAll('.cajon__contacto .contacto-fila strong');
      if (etiquetasContacto[0] && t.menu.telefono) {
        etiquetasContacto[0].textContent = t.menu.telefono;
      }
      if (etiquetasContacto[1] && t.menu.correo) {
        etiquetasContacto[1].textContent = t.menu.correo;
      }
    }

    if (t.footer) {
      const descEl = document.querySelector('.rt-footer__desc');
      const colTitulos = document.querySelectorAll('.rt-footer__col h3');
      const colListas = document.querySelectorAll('.rt-footer__col ul');
      const appTitulo = document.querySelector('.rt-footer__app h3');
      const appTexto = document.querySelector('.rt-footer__app-texto');
      const legalesLinks = document.querySelectorAll('.rt-footer__legales-links a');
      const legalCopy = document.querySelector('.rt-footer__legal span');

      if (descEl && t.footer.desc) descEl.textContent = t.footer.desc;

      colTitulos.forEach(function (h3, i) {
        if (t.footer.cols && t.footer.cols[i]) {
          h3.textContent = t.footer.cols[i];
        }
      });

      colListas.forEach(function (ul, i) {
        const grupo = t.footer.links && t.footer.links[i];
        if (!grupo) return;
        ul.querySelectorAll('li a').forEach(function (a, j) {
          if (!grupo[j]) return;
          const chev = a.querySelector('.rt-chev');
          a.textContent = '';
          if (chev) a.appendChild(chev);
          a.appendChild(document.createTextNode(' ' + grupo[j]));
        });
      });

      if (appTitulo && t.footer.appTitulo) appTitulo.textContent = t.footer.appTitulo;
      if (appTexto && t.footer.appTexto) appTexto.textContent = t.footer.appTexto;

      legalesLinks.forEach(function (a, i) {
        if (t.footer.legales && t.footer.legales[i]) {
          a.textContent = t.footer.legales[i];
        }
      });

      if (legalCopy && t.footer.derechos) {
        const partes = legalCopy.textContent.split('.');
        legalCopy.textContent = (partes.length > 1 ? partes[0] + '. ' : '') + t.footer.derechos;
      }
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

  async function traducirObjetoDescubre(cod) {
    try {
      const guardado = localStorage.getItem(CACHE_DESCUBRE + cod);
      if (guardado) return JSON.parse(guardado);
    } catch (_) {}

    const base = JSON.parse(JSON.stringify(TEXTOS_DESCUBRE.es));
    const claves = ['h1', 'textPre', 'textStrong', 'destinoPlaceholder', 'ideasPrefijo', 'ideasO', 'methodH2'];

    for (let i = 0; i < claves.length; i++) {
      const k = claves[i];
      base[k] = await traducirFrase(base[k], cod);
    }

    for (let i = 0; i < base.duraciones.length; i++) {
      base.duraciones[i] = await traducirFrase(base.duraciones[i], cod);
    }

    for (let i = 0; i < base.ideasLinks.length; i++) {
      base.ideasLinks[i] = await traducirFrase(base.ideasLinks[i], cod);
    }

    for (let i = 0; i < base.acordeon.length; i++) {
      base.acordeon[i][0] = await traducirFrase(base.acordeon[i][0], cod);
      base.acordeon[i][1] = await traducirFrase(base.acordeon[i][1], cod);
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
      base.footer.derechos = await traducirFrase(base.footer.derechos, cod);

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
      localStorage.setItem(CACHE_DESCUBRE + cod, JSON.stringify(base));
    } catch (_) {}

    return base;
  }

  function aplicarTextosDescubre(cod) {
    const limpio = (cod || 'es').toLowerCase();
    if (TEXTOS_DESCUBRE[limpio]) {
      pintarDescubre(TEXTOS_DESCUBRE[limpio]);
      return;
    }

    pintarDescubre(TEXTOS_DESCUBRE.es);
    traducirObjetoDescubre(limpio).then(function (traducido) {
      const vigente = (
        localStorage.getItem('rt_idioma_seleccionado') ||
        localStorage.getItem('idioma') ||
        'es'
      ).toLowerCase();
      if (vigente === limpio && traducido) {
        pintarDescubre(traducido);
      }
    });
  }

  const contenedor = document.getElementById('idioma');
  const boton = document.getElementById('idioma-boton');
  const lista = document.getElementById('idioma-lista');
  const bandera = document.getElementById('idioma-bandera');
  const codigo = document.getElementById('idioma-codigo');
  if (!contenedor || !boton || !lista || !bandera || !codigo) return;

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

  function items() {
    return Array.from(lista.querySelectorAll('li[data-codigo]'));
  }

  function elegir(cod) {
    const datos = IDIOMAS.find(function (i) { return i[0] === cod; });
    if (!datos) return;
    actual = cod;
    bandera.src = url(datos[2]);
    codigo.textContent = cod.toUpperCase();
    document.documentElement.lang = cod;
    try {
      localStorage.setItem('idioma', cod);
      localStorage.setItem('rt_idioma_seleccionado', cod);
    } catch (_) {}

    items().forEach(function (li) {
      li.setAttribute('aria-selected', String(li.dataset.codigo === cod));
    });

    aplicarTextosDescubre(cod);
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
    lista.hidden ? abrir() : cerrar();
  });

  lista.addEventListener('click', function (e) {
    const li = e.target.closest('li[data-codigo]');
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
   5. SELECTOR PERSONALIZADO DE DURACIÓN
   ========================================================== */
(function () {
  const box = document.getElementById('duracion-box');
  const boton = document.getElementById('duracion-boton');
  const lista = document.getElementById('duracion-lista');
  const texto = document.getElementById('duracion-texto');
  const select = document.getElementById('campo-duracion');
  if (!box || !boton || !lista || !texto || !select) return;

  function setAbierto(abierto) {
    lista.hidden = !abierto;
    boton.setAttribute('aria-expanded', String(abierto));
  }

  function seleccionarDuracion(valor, etiqueta) {
    select.value = valor;
    texto.textContent = etiqueta;
    lista.querySelectorAll('li[data-valor]').forEach(function (li) {
      li.setAttribute('aria-selected', String(li.dataset.valor === valor));
    });
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }

  boton.addEventListener('click', function (e) {
    e.stopPropagation();
    setAbierto(lista.hidden);
  });

  lista.addEventListener('click', function (e) {
    const item = e.target.closest('li[data-valor]');
    if (!item) return;
    seleccionarDuracion(item.dataset.valor, item.textContent.trim());
    setAbierto(false);
    boton.focus();
  });

  document.addEventListener('click', function (e) {
    if (!lista.hidden && !box.contains(e.target)) {
      setAbierto(false);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lista.hidden) {
      setAbierto(false);
      boton.focus();
    }
  });
})();