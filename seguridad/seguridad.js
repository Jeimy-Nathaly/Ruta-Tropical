(() => {
  const idiomasCatalogo = [
    { nombre: 'Español', region: 'España / Latinoamérica', codigo: 'ES', bandera: 'https://flagcdn.com/w40/es.png' },
    { nombre: 'English', region: 'United States', codigo: 'EN', bandera: 'https://flagcdn.com/w40/us.png' },
    { nombre: 'Français', region: 'France', codigo: 'FR', bandera: 'https://flagcdn.com/w40/fr.png' },
    { nombre: 'Português', region: 'Brasil / Portugal', codigo: 'PT', bandera: 'https://flagcdn.com/w40/pt.png' },
    { nombre: 'Italiano', region: 'Italia', codigo: 'IT', bandera: 'https://flagcdn.com/w40/it.png' },
    { nombre: 'Deutsch', region: 'Deutschland', codigo: 'DE', bandera: 'https://flagcdn.com/w40/de.png' },
    { nombre: '日本語', region: '日本', codigo: 'JA', bandera: 'https://flagcdn.com/w40/jp.png' },
    { nombre: '한국어', region: '대한민국', codigo: 'KO', bandera: 'https://flagcdn.com/w40/kr.png' },
    { nombre: '中文', region: '简体 / 繁體', codigo: 'ZH', bandera: 'https://flagcdn.com/w40/cn.png' },
    { nombre: 'العربية', region: 'الشرق الأوسط', codigo: 'AR', bandera: 'https://flagcdn.com/w40/ae.png' }
  ];

  const SECTIONS_ES = [
    { id: "infraestructura", title: "Seguridad de infraestructura", nav: "Infraestructura", items: [
      ["Monitoreo de disponibilidad e integridad", "Vigila el rendimiento del sistema de forma continua para que el servicio no se interrumpa."],
      ["Firewalls y segmentación de red", "Controla y protege el tráfico de datos con firewalls y redes separadas."],
      ["Herramientas de detección", "Detecta y responde a amenazas en tiempo real."],
      ["Gestión de vulnerabilidades", "Escanea y corrige vulnerabilidades de forma periódica."],
      ["Gestión de eventos de seguridad (SIEM)", "Reúne y analiza registros para gestionar amenazas con eficacia."]
    ]},
    { id: "organizacion", title: "Seguridad organizacional", nav: "Organización", items: [
      ["Equipo de respuesta a incidentes", "Un equipo dedicado a atender, investigar y resolver incidentes."],
      ["Auditorías anuales independientes", "Pruebas de penetración internas y externas cada año."],
      ["Capacitación obligatoria anual", "Formación para todo el personal y capacitación específica por rol."],
      ["Evaluaciones internas de riesgo", "Revisiones periódicas para identificar y reducir riesgos internos."]
    ]},
    { id: "datos", title: "Seguridad de datos", nav: "Datos", items: [
      ["Entornos separados para PII y PCI", "Espacios dedicados para procesar y guardar datos personales y de pago."],
      ["Cifrado en reposo y en tránsito", "Protege tus datos mientras se guardan y mientras se transmiten."],
      ["Copias de seguridad activas", "Respaldos regulares para recuperar la información ante cualquier pérdida."],
      ["Monitoreo de acceso", "Supervisa el acceso a los datos para evitar usos no autorizados."],
      ["Retención estándar de datos", "Políticas de retención estándar con opciones personalizables."]
    ]},
    { id: "privacidad", title: "Privacidad de datos", nav: "Privacidad", items: [
      ["Políticas de ciclo de vida de datos", "Reglas sobre manejo, almacenamiento, retención y acceso a los datos."],
      ["Oficial de privacidad", "Una persona dedicada a supervisar las prácticas de privacidad."],
      ["Capacitación en privacidad", "El personal conoce y aplica los requisitos de privacidad."],
      ["Ejercicio de derechos de privacidad", "Atendemos solicitudes de acceso, corrección y eliminación. Consulta la <a href=\"#\">Política de privacidad</a>."],
      ["Registro de actividades de tratamiento", "Registros detallados de cómo se procesan los datos."],
      ["Programa global de cumplimiento", "Cumplimiento de las normas de privacidad que nos apliquen, como GDPR y CCPA."]
    ]},
    { id: "aplicaciones", title: "Seguridad de aplicaciones", nav: "Aplicaciones", items: [
      ["Programa de recompensas por errores", "Invitamos a investigadores externos a reportar vulnerabilidades."],
      ["Pruebas SAST y DAST", "Análisis estático y dinámico para encontrar fallos de seguridad."],
      ["Gestión de vulnerabilidades de código abierto", "Controlamos y corregimos fallos en componentes de código abierto."],
      ["Capacitación para desarrolladores", "Formación en prácticas de programación segura."]
    ]},
    { id: "dispositivos", title: "Seguridad de dispositivos", nav: "Dispositivos", items: [
      ["Cifrado de disco", "Cifra los datos del disco para evitar accesos no autorizados."],
      ["Detección y respuesta en endpoints (EDR)", "Vigila los equipos y responde a amenazas."],
      ["Gestión de dispositivos móviles", "Administra y protege los móviles que acceden a nuestros sistemas."],
      ["Evaluación del estado del dispositivo", "Revisa la seguridad del equipo antes de permitir el acceso."]
    ]},
    { id: "acceso", title: "Control de acceso", nav: "Acceso", items: [
      ["MFA y SSO", "Exige autenticación multifactor e inicio de sesión único en aplicaciones sensibles."],
      ["Autenticación sin contraseña", "Ofrece opciones sin contraseña para reforzar la seguridad."],
      ["Mínimo privilegio", "Cada persona recibe solo el acceso que necesita."],
      ["Acceso de red de confianza cero", "Modelo zero trust para el acceso seguro a la red."],
      ["Registro y monitoreo", "Mantiene registros y supervisa los accesos."],
      ["Revisiones trimestrales de acceso", "Cada trimestre se comprueba que los controles sigan siendo efectivos."]
    ]}
  ];

  const SECTIONS_EN = [
    { id: "infraestructura", title: "Infrastructure security", nav: "Infrastructure", items: [
      ["Availability and integrity monitoring", "Continuously monitors system performance so service stays uninterrupted."],
      ["Firewalls and network segmentation", "Controls and protects data traffic with firewalls and isolated networks."],
      ["Detection tools", "Detects and responds to threats in real time."],
      ["Vulnerability management", "Scans and remediates vulnerabilities on a regular schedule."],
      ["Security event management (SIEM)", "Collects and analyzes logs to manage threats effectively."]
    ]},
    { id: "organizacion", title: "Organizational security", nav: "Organization", items: [
      ["Incident response team", "A dedicated team to handle, investigate, and resolve incidents."],
      ["Independent annual audits", "Internal and external penetration testing every year."],
      ["Mandatory annual training", "Training for all staff plus role-specific security training."],
      ["Internal risk assessments", "Periodic reviews to identify and reduce internal risks."]
    ]},
    { id: "datos", title: "Data security", nav: "Data", items: [
      ["Separate PII and PCI environments", "Dedicated environments to process and store personal and payment data."],
      ["Encryption at rest and in transit", "Protects your data while stored and while transmitted."],
      ["Active backups", "Regular backups to recover information against any loss."],
      ["Access monitoring", "Supervises data access to prevent unauthorized use."],
      ["Standard data retention", "Standard retention policies with customizable options."]
    ]},
    { id: "privacidad", title: "Data privacy", nav: "Privacy", items: [
      ["Data lifecycle policies", "Rules governing data handling, storage, retention, and access."],
      ["Privacy officer", "A dedicated lead overseeing privacy practices."],
      ["Privacy training", "Staff know and apply privacy requirements."],
      ["Exercising privacy rights", "We handle access, correction, and deletion requests. See our <a href=\"#\">Privacy Policy</a>."],
      ["Processing activity records", "Detailed logs of how data is processed."],
      ["Global compliance program", "Compliance with applicable privacy laws such as GDPR and CCPA."]
    ]},
    { id: "aplicaciones", title: "Application security", nav: "Applications", items: [
      ["Bug bounty program", "We invite external researchers to report vulnerabilities."],
      ["SAST and DAST testing", "Static and dynamic testing to find security flaws."],
      ["Open-source vulnerability management", "We track and fix flaws in open-source components."],
      ["Developer training", "Training in secure coding practices."]
    ]},
    { id: "dispositivos", title: "Device security", nav: "Devices", items: [
      ["Disk encryption", "Encrypts disk data to prevent unauthorized access."],
      ["Endpoint detection and response (EDR)", "Monitors endpoints and responds to threats."],
      ["Mobile device management", "Manages and protects mobile devices accessing our systems."],
      ["Device posture assessment", "Checks device security before granting access."]
    ]},
    { id: "acceso", title: "Access control", nav: "Access", items: [
      ["MFA and SSO", "Requires multi-factor authentication and single sign-on for sensitive apps."],
      ["Passwordless authentication", "Offers passwordless options to strengthen security."],
      ["Least privilege", "Each person receives only the access they need."],
      ["Zero-trust network access", "Zero-trust model for secure network access."],
      ["Logging and monitoring", "Maintains logs and monitors access."],
      ["Quarterly access reviews", "Every quarter controls are verified to remain effective."]
    ]}
  ];

  const textosSeguridad = {
    ES: {
      panelTitulo: 'SELECCIONA TU IDIOMA',
      buscarPh: 'Buscar idioma...',
      pageTitle: 'Seguridad en Ruta Tropical',
      heroTitulo: 'Seguridad en Ruta Tropical.<br>Tu viaje, protegido.',
      heroDesc: 'Cuidamos tus datos y tus pagos con controles técnicos y equipos dedicados, desde la reserva hasta el regreso a casa.',
      heroReport: 'Reporta una vulnerabilidad a <a href="mailto:seguridad@rutatropical.com">seguridad@rutatropical.com</a>',
      sections: SECTIONS_ES,
      usuarioMenu: {
        anadir: '+ Añadir usuario', trips: 'Trips', ayudaFaq: 'Ayuda/Preguntas frecuentes',
        cuenta: 'Tu cuenta', cerrarSesion: 'Cerrar sesión', promptNombre: 'Nombre:', promptCorreo: 'Correo electrónico:'
      },
      menu: {
        vuelos: 'Vuelos', hoteles: 'Hoteles', autobus: 'Autobús',
        ia: 'Planifica con IA', planea: 'Planea tus viajes', nosotros: 'Sobre nosotros',
        contacto: 'Contacto', faq: 'Preguntas frecuentes', explorar: 'Explorar',
        terminos: 'Términos y condiciones', rastreador: 'Rastreador de vuelos', viajes: 'Viajes',
        telLbl: 'Teléfono:', correoLbl: 'Correo:'
      },
      footer: {
        desc: 'Tu agencia de confianza para descubrir el mundo al mejor precio. Compara, ahorra y vuela sin límites.',
        colEmpresa: 'Empresa', acercaDe: 'Acerca de', prensa: 'Prensa', afiliados: 'Afiliados', socios: 'Socios',
        colContacto: 'Contacto', ayudaFaq: 'Ayuda / FAQ', hoteles: 'Hoteles', publicidad: 'Publicidad',
        colMas: 'Más', tarifasAereas: 'Tarifas aéreas', ofertasBajas: 'Ofertas bajas', privacidad: 'Privacidad',
        descargaApp: 'Descarga la app', appTexto: 'Lleva tus reservas y ofertas siempre contigo.',
        playSmall: 'DISPONIBLE EN', playStrong: 'Google Play',
        appleSmall: 'CONSÍGUELO EN', appleStrong: 'App Store',
        derechos: 'RuTa Tropical. Todos los derechos reservados.',
        terminos: 'Términos y condiciones', cookies: 'Cookies'
      }
    },
    EN: {
      panelTitulo: 'SELECT YOUR LANGUAGE',
      buscarPh: 'Search language...',
      pageTitle: 'Security at Ruta Tropical',
      heroTitulo: 'Security at Ruta Tropical.<br>Your trip, protected.',
      heroDesc: 'We protect your data and payments with technical controls and dedicated teams, from booking to returning home.',
      heroReport: 'Report a vulnerability to <a href="mailto:seguridad@rutatropical.com">seguridad@rutatropical.com</a>',
      sections: SECTIONS_EN,
      usuarioMenu: {
        anadir: '+ Add user', trips: 'Trips', ayudaFaq: 'Help/FAQ',
        cuenta: 'Your account', cerrarSesion: 'Log out', promptNombre: 'Name:', promptCorreo: 'Email:'
      },
      menu: {
        vuelos: 'Flights', hoteles: 'Hotels', autobus: 'Bus',
        ia: 'Plan with AI', planea: 'Plan your trips', nosotros: 'About us',
        contacto: 'Contact', faq: 'FAQ', explorar: 'Explore',
        terminos: 'Terms and conditions', rastreador: 'Flight tracker', viajes: 'Trips',
        telLbl: 'Phone:', correoLbl: 'Email:'
      },
      footer: {
        desc: 'Your trusted agency to discover the world at the best price. Compare, save, and fly without limits.',
        colEmpresa: 'Company', acercaDe: 'About us', prensa: 'Press', afiliados: 'Affiliates', socios: 'Partners',
        colContacto: 'Contact', ayudaFaq: 'Help / FAQ', hoteles: 'Hotels', publicidad: 'Advertising',
        colMas: 'More', tarifasAereas: 'Airfares', ofertasBajas: 'Low deals', privacidad: 'Privacy',
        descargaApp: 'Get the app', appTexto: 'Take your bookings and deals with you everywhere.',
        playSmall: 'GET IT ON', playStrong: 'Google Play',
        appleSmall: 'DOWNLOAD ON THE', appleStrong: 'App Store',
        derechos: 'RuTa Tropical. All rights reserved.',
        terminos: 'Terms and conditions', cookies: 'Cookies'
      }
    }
  };

  ['FR', 'PT', 'IT', 'DE', 'JA', 'KO', 'ZH', 'AR'].forEach((cod) => {
    textosSeguridad[cod] = { ...textosSeguridad.EN, sections: SECTIONS_EN };
  });

  const CHECK_ICON =
    '<span class="check" aria-hidden="true"><svg viewBox="0 0 12 12"><path d="M2 6.4 4.8 9 10 3.2" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';

  document.addEventListener('DOMContentLoaded', () => {
    const abrirMenu = document.getElementById('abrir-menu');
    const cerrarMenu = document.getElementById('cerrar-menu');
    const cajon = document.getElementById('cajon');
    const cajonFondo = document.getElementById('cajon-fondo');

    function setCajon(abierto) {
      if (!cajon || !cajonFondo || !abrirMenu) return;
      cajon.classList.toggle('abierto', abierto);
      cajonFondo.classList.toggle('abierto', abierto);
      abrirMenu.setAttribute('aria-expanded', String(abierto));
    }

    if (abrirMenu) {
      abrirMenu.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCajon(cajon ? !cajon.classList.contains('abierto') : false);
      });
    }
    if (cerrarMenu) cerrarMenu.addEventListener('click', () => setCajon(false));
    if (cajonFondo) cajonFondo.addEventListener('click', () => setCajon(false));

    const monedaBtn = document.getElementById('moneda-boton');
    const monedaLista = document.getElementById('moneda-lista');
    const monedaCodigo = document.getElementById('moneda-codigo');
    const monedaSimbolo = document.getElementById('moneda-simbolo');
    const monedaSelect = document.getElementById('currency');

    const idiomaBtn = document.getElementById('idioma-boton');
    const idiomaLista = document.getElementById('idioma-lista');
    const idiomaTitulo = document.getElementById('idioma-titulo');
    const idiomaOpciones = document.getElementById('idioma-opciones');
    const idiomaBuscar = document.getElementById('idioma-buscar');
    const idiomaCodigo = document.getElementById('idioma-codigo');
    const idiomaBandera = document.getElementById('idioma-bandera');

    const usuarioBtn = document.getElementById('usuario-boton');
    const usuarioDropdown = document.getElementById('usuario-dropdown');
    const usuarioInicial = document.getElementById('usuario-inicial');
    const usuarioCab = document.getElementById('usuario-cab');
    const usuarioNombreActivo = document.getElementById('usuario-nombre-activo');
    const usuarioCorreoActivo = document.getElementById('usuario-correo-activo');
    const btnAnadirUsuario = document.getElementById('btn-anadir-usuario');
    const btnCerrarSesion = document.getElementById('btn-cerrar-sesion');

    let idiomaActual = 'ES';
    let usuario = { conectado: false, nombre: '', correo: '' };
    let sectionObserver = null;

    function cerrarPaneles(excepto) {
      [
        { panel: monedaLista, btn: monedaBtn },
        { panel: idiomaLista, btn: idiomaBtn },
        { panel: usuarioDropdown, btn: usuarioBtn }
      ].forEach(({ panel, btn }) => {
        if (panel && panel !== excepto) panel.hidden = true;
        if (btn && panel !== excepto) btn.setAttribute('aria-expanded', 'false');
      });
    }

    function pintarUsuario() {
      const t = textosSeguridad[idiomaActual] || textosSeguridad.ES;
      const um = t.usuarioMenu;
      const tieneDatos = Boolean(usuario.conectado && (usuario.nombre || usuario.correo));
      const letra = tieneDatos ? ((usuario.nombre || usuario.correo).trim().charAt(0).toUpperCase()) : '';

      if (usuarioInicial) {
        usuarioInicial.innerHTML = tieneDatos ? letra : '<i class="fa-solid fa-user" aria-hidden="true"></i>';
      }
      if (usuarioCab) {
        usuarioCab.setAttribute('data-inicial', letra);
        usuarioCab.hidden = !tieneDatos;
      }
      if (usuarioNombreActivo) usuarioNombreActivo.textContent = tieneDatos ? usuario.nombre : '';
      if (usuarioCorreoActivo) usuarioCorreoActivo.textContent = tieneDatos ? usuario.correo : '';

      if (btnAnadirUsuario) {
        const sp = btnAnadirUsuario.querySelector('span');
        if (sp) sp.textContent = um.anadir;
      }
      if (usuarioDropdown) {
        const links = usuarioDropdown.querySelectorAll('a.usuario-dropdown__link');
        const labels = [um.trips, um.ayudaFaq, um.cuenta];
        links.forEach((a, i) => {
          if (labels[i]) a.textContent = labels[i];
        });
      }
      if (btnCerrarSesion) {
        btnCerrarSesion.hidden = !tieneDatos;
        btnCerrarSesion.textContent = um.cerrarSesion;
      }
    }

    async function cargarUsuarioBD() {
      try {
        const resp = await fetch('/api/usuario/actual', { credentials: 'include' });
        if (!resp.ok) return;
        const data = await resp.json();
        usuario = {
          conectado: Boolean(data && data.conectado),
          nombre: (data && data.nombre ? data.nombre : '').trim(),
          correo: (data && data.correo ? data.correo : '').trim()
        };
        pintarUsuario();
      } catch (_) {}
    }

    async function registrarUsuarioBD(nombre, correo) {
      const resp = await fetch('/api/usuario/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ nombre, correo })
      });
      if (!resp.ok) throw new Error('Error al guardar en base de datos');
      return resp.json();
    }

    function renderSecciones(sectionsData) {
      const tabsList = document.getElementById('tabs-list');
      const container = document.getElementById('sections');
      if (!tabsList || !container) return;

      if (sectionObserver) sectionObserver.disconnect();
      tabsList.innerHTML = '';
      container.innerHTML = '';

      sectionsData.forEach(({ id, title, nav, items }) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${id}" data-id="${id}">${nav}</a>`;
        tabsList.appendChild(li);

        const section = document.createElement('section');
        section.className = 'block';
        section.id = id;
        section.innerHTML = `
          <div class="block-inner">
            <h2>${title}<span class="dot">.</span></h2>
            <ul class="card">
              ${items.map(([name, desc]) => `
                <li>
                  <div class="text"><h3>${name}</h3><p>${desc}</p></div>
                  ${CHECK_ICON}
                </li>`).join('')}
            </ul>
          </div>`;
        container.appendChild(section);
      });

      const links = [...document.querySelectorAll('.tabs a')];
      sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) => {
            const active = a.dataset.id === entry.target.id;
            a.classList.toggle('active', active);
            if (active) {
              const nav = a.closest('.tabs');
              if (nav) {
                nav.scrollTo({ left: a.offsetLeft - nav.clientWidth / 2 + a.offsetWidth / 2, behavior: 'smooth' });
              }
            }
          });
        });
      }, { rootMargin: '-30% 0px -60% 0px' });

      document.querySelectorAll('.block').forEach((s) => sectionObserver.observe(s));
    }

    function traducirMenuLateral(t) {
      const m = t.menu;
      if (!cajon || !m) return;
      const principalLinks = cajon.querySelectorAll('.cajon__principal a');
      if (principalLinks[0]) principalLinks[0].innerHTML = `<i class="fa-solid fa-plane" aria-hidden="true"></i> ${m.vuelos}`;
      if (principalLinks[1]) principalLinks[1].innerHTML = `<i class="fa-solid fa-hotel" aria-hidden="true"></i> ${m.hoteles}`;
      if (principalLinks[2]) principalLinks[2].innerHTML = `<i class="fa-solid fa-bus" aria-hidden="true"></i> ${m.autobus}`;

      const enlaces = cajon.querySelectorAll('.cajon__enlaces a');
      const labels = [m.ia, m.planea, m.nosotros, m.contacto, m.faq, m.explorar, m.terminos, m.rastreador, m.viajes];
      enlaces.forEach((a, i) => {
        if (labels[i]) a.innerHTML = `<i class="fa-solid fa-chevron-right" aria-hidden="true"></i> ${labels[i]}`;
      });

      const filas = cajon.querySelectorAll('.cajon__contacto .contacto-fila');
      if (filas[0] && filas[0].querySelector('strong')) filas[0].querySelector('strong').textContent = m.telLbl;
      if (filas[1] && filas[1].querySelector('strong')) filas[1].querySelector('strong').textContent = m.correoLbl;
    }

    function traducirFooter(t) {
      const f = t.footer;
      const footer = document.getElementById('rt-footer');
      if (!footer || !f) return;

      const desc = footer.querySelector('.rt-footer__desc');
      if (desc) desc.textContent = f.desc;

      const navCols = footer.querySelectorAll('nav.rt-footer__col');
      if (navCols[0]) {
        navCols[0].querySelector('h3').textContent = f.colEmpresa;
        const labels = [f.acercaDe, f.prensa, f.afiliados, f.socios];
        navCols[0].querySelectorAll('ul li a').forEach((a, i) => {
          if (labels[i]) a.innerHTML = `<span class="rt-chev">&rsaquo;</span> ${labels[i]}`;
        });
      }
      if (navCols[1]) {
        navCols[1].querySelector('h3').textContent = f.colContacto;
        const labels = [f.ayudaFaq, f.hoteles, f.publicidad];
        navCols[1].querySelectorAll('ul li a').forEach((a, i) => {
          if (labels[i]) a.innerHTML = `<span class="rt-chev">&rsaquo;</span> ${labels[i]}`;
        });
      }
      if (navCols[2]) {
        navCols[2].querySelector('h3').textContent = f.colMas;
        const labels = [f.tarifasAereas, f.ofertasBajas, f.privacidad];
        navCols[2].querySelectorAll('ul li a').forEach((a, i) => {
          if (labels[i]) a.innerHTML = `<span class="rt-chev">&rsaquo;</span> ${labels[i]}`;
        });
      }

      const appBox = footer.querySelector('.rt-footer__app');
      if (appBox) {
        appBox.querySelector('h3').textContent = f.descargaApp;
        appBox.querySelector('.rt-footer__app-texto').textContent = f.appTexto;
        appBox.querySelector('.rt-store-btn--play span').innerHTML = `<small>${f.playSmall}</small><strong>${f.playStrong}</strong>`;
        appBox.querySelector('.rt-store-btn--apple span').innerHTML = `<small>${f.appleSmall}</small><strong>${f.appleStrong}</strong>`;
      }

      const legal = footer.querySelector('.rt-footer__legal');
      if (legal) {
        const yearSpan = legal.querySelector('#year');
        const yearVal = yearSpan ? yearSpan.textContent : String(new Date().getFullYear());
        legal.firstElementChild.innerHTML = `© <span id="year">${yearVal}</span> ${f.derechos}`;
        const links = legal.querySelectorAll('.rt-footer__legales-links a');
        if (links[0]) links[0].textContent = f.privacidad;
        if (links[1]) links[1].textContent = f.terminos;
        if (links[2]) links[2].textContent = f.cookies;
      }
    }

    function aplicarIdioma(codigo) {
      const t = textosSeguridad[codigo] || textosSeguridad.ES;
      idiomaActual = codigo;
      document.documentElement.lang = codigo.toLowerCase();
      document.documentElement.dir = codigo === 'AR' ? 'rtl' : 'ltr';
      document.title = t.pageTitle;

      if (idiomaCodigo) idiomaCodigo.textContent = codigo;
      if (idiomaTitulo) idiomaTitulo.textContent = t.panelTitulo;
      if (idiomaBuscar) idiomaBuscar.placeholder = t.buscarPh;

      const h1 = document.getElementById('hero-titulo');
      if (h1) h1.innerHTML = t.heroTitulo;
      const hDesc = document.getElementById('hero-desc');
      if (hDesc) hDesc.textContent = t.heroDesc;
      const hRep = document.getElementById('hero-report');
      if (hRep) hRep.innerHTML = t.heroReport;

      renderSecciones(t.sections);
      pintarUsuario();
      traducirMenuLateral(t);
      traducirFooter(t);
    }

    function renderIdiomas(filtro = '') {
      if (!idiomaOpciones) return;
      const q = filtro.trim().toLowerCase();
      idiomaOpciones.innerHTML = '';

      idiomasCatalogo
        .filter((it) =>
          it.nombre.toLowerCase().includes(q) ||
          it.region.toLowerCase().includes(q) ||
          it.codigo.toLowerCase().includes(q)
        )
        .forEach((it) => {
          const li = document.createElement('li');
          li.className = 'idioma__op-item' + (it.codigo === idiomaActual ? ' idioma__op-item--activa' : '');
          li.setAttribute('role', 'option');
          li.setAttribute('aria-selected', String(it.codigo === idiomaActual));
          li.innerHTML = `
            <span class="idioma__op-izq">
              <img src="${it.bandera}" alt="" width="24" height="16">
              <span>
                <span class="idioma__op-nombre">${it.nombre}</span>
                <span class="idioma__op-region">${it.region}</span>
              </span>
            </span>
            <span class="idioma__op-codigo">${it.codigo}</span>
          `;
          li.addEventListener('click', () => {
            if (idiomaBandera) idiomaBandera.src = it.bandera;
            aplicarIdioma(it.codigo);
            renderIdiomas(idiomaBuscar ? idiomaBuscar.value : '');
            if (idiomaLista) idiomaLista.hidden = true;
            if (idiomaBtn) idiomaBtn.setAttribute('aria-expanded', 'false');
          });
          idiomaOpciones.appendChild(li);
        });
    }

    renderIdiomas();
    renderSecciones(SECTIONS_ES);
    pintarUsuario();
    cargarUsuarioBD();

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    if (idiomaBuscar) {
      idiomaBuscar.addEventListener('input', () => renderIdiomas(idiomaBuscar.value));
    }

    if (monedaBtn && monedaLista) {
      monedaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const abrir = monedaLista.hidden;
        cerrarPaneles(monedaLista);
        monedaLista.hidden = !abrir;
        monedaBtn.setAttribute('aria-expanded', String(abrir));
      });

      monedaLista.querySelectorAll('li').forEach((li) => {
        li.addEventListener('click', () => {
          const cod = (li.dataset.moneda || 'usd').toUpperCase();
          const sim = li.dataset.simbolo || '$';
          if (monedaCodigo) monedaCodigo.textContent = cod;
          if (monedaSimbolo) monedaSimbolo.textContent = sim;
          if (monedaSelect) monedaSelect.value = li.dataset.moneda || 'usd';
          monedaLista.querySelectorAll('li').forEach((op) => {
            op.setAttribute('aria-selected', String(op === li));
          });
          monedaLista.hidden = true;
          monedaBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    if (idiomaBtn && idiomaLista) {
      idiomaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const abrir = idiomaLista.hidden;
        cerrarPaneles(idiomaLista);
        idiomaLista.hidden = !abrir;
        idiomaBtn.setAttribute('aria-expanded', String(abrir));
        if (abrir && idiomaBuscar) setTimeout(() => idiomaBuscar.focus(), 10);
      });
    }

    if (usuarioBtn && usuarioDropdown) {
      usuarioBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await cargarUsuarioBD();
        const abrir = usuarioDropdown.hidden;
        cerrarPaneles(usuarioDropdown);
        usuarioDropdown.hidden = !abrir;
        usuarioBtn.setAttribute('aria-expanded', String(abrir));
      });
    }

    if (btnAnadirUsuario) {
      btnAnadirUsuario.addEventListener('click', async () => {
        const um = (textosSeguridad[idiomaActual] || textosSeguridad.ES).usuarioMenu;
        const nuevoNombre = window.prompt(um.promptNombre);
        if (!nuevoNombre || !nuevoNombre.trim()) return;
        const nuevoCorreo = window.prompt(um.promptCorreo);
        if (!nuevoCorreo || !nuevoCorreo.trim()) return;

        try {
          const guardado = await registrarUsuarioBD(nuevoNombre.trim(), nuevoCorreo.trim());
          usuario = {
            conectado: true,
            nombre: (guardado && guardado.nombre ? guardado.nombre : nuevoNombre).trim(),
            correo: (guardado && guardado.correo ? guardado.correo : nuevoCorreo).trim()
          };
          pintarUsuario();
          if (usuarioDropdown) usuarioDropdown.hidden = true;
        } catch (_) {
          await cargarUsuarioBD();
        }
      });
    }

    if (btnCerrarSesion) {
      btnCerrarSesion.addEventListener('click', async () => {
        try {
          await fetch('/api/usuario/logout', { method: 'POST', credentials: 'include' });
        } catch (_) {}
        usuario = { conectado: false, nombre: '', correo: '' };
        pintarUsuario();
        if (usuarioDropdown) usuarioDropdown.hidden = true;
      });
    }

    document.addEventListener('click', (e) => {
      const enMoneda = monedaLista && monedaBtn && (monedaLista.contains(e.target) || monedaBtn.contains(e.target));
      const enIdioma = idiomaLista && idiomaBtn && (idiomaLista.contains(e.target) || idiomaBtn.contains(e.target));
      const enUsuario = usuarioDropdown && usuarioBtn && (usuarioDropdown.contains(e.target) || usuarioBtn.contains(e.target));
      if (!enMoneda && !enIdioma && !enUsuario) cerrarPaneles(null);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        cerrarPaneles(null);
        setCajon(false);
      }
    });

    const footer = document.getElementById('rt-footer');
    if (footer) {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) footer.classList.add('rt-footer--animado');
          });
        }, { threshold: 0.15 });
        observer.observe(footer);
      } else {
        footer.classList.add('rt-footer--animado');
      }
    }
  });

  const SECTIONS_FR = [
    { id: "infraestructura", title: "Sécurité de l'infrastructure", nav: "Infrastructure", items: [
      ["Surveillance de la disponibilité et de l'intégrité", "Surveille en continu les performances du système afin d'éviter toute interruption."],
      ["Pare-feu et segmentation réseau", "Contrôle et protège le trafic de données avec des pare-feu et des réseaux isolés."],
      ["Outils de détection", "Détecte les menaces et y répond en temps réel."],
      ["Gestion des vulnérabilités", "Analyse et corrige les vulnérabilités de manière régulière."],
      ["Gestion des événements de sécurité (SIEM)", "Centralise et analyse les journaux pour gérer efficacement les menaces."]
    ]},
    { id: "organizacion", title: "Sécurité organisationnelle", nav: "Organisation", items: [
      ["Équipe de réponse aux incidents", "Une équipe dédiée pour traiter, analyser et résoudre les incidents."],
      ["Audits annuels indépendants", "Tests d'intrusion internes et externes chaque année."],
      ["Formation annuelle obligatoire", "Sensibilisation pour tout le personnel et formation adaptée à chaque rôle."],
      ["Évaluations internes des risques", "Examens périodiques pour identifier et réduire les risques internes."]
    ]},
    { id: "datos", title: "Sécurité des données", nav: "Données", items: [
      ["Environnements séparés pour PII et PCI", "Espaces dédiés au traitement et au stockage des données personnelles et de paiement."],
      ["Chiffrement au repos et en transit", "Protège vos données lorsqu'elles sont stockées et lorsqu'elles circulent."],
      ["Sauvegardes actives", "Sauvegardes régulières pour restaurer les informations en cas de perte."],
      ["Surveillance des accès", "Contrôle l'accès aux données afin d'éviter tout usage non autorisé."],
      ["Rétention standard des données", "Politiques de conservation standard avec options personnalisables."]
    ]},
    { id: "privacidad", title: "Confidentialité des données", nav: "Confidentialité", items: [
      ["Politiques de cycle de vie des données", "Règles régissant le traitement, le stockage, la conservation et l'accès."],
      ["Délégué à la protection des données", "Un responsable dédié au suivi des pratiques de confidentialité."],
      ["Formation à la confidentialité", "Le personnel connaît et applique les exigences de confidentialité."],
      ["Exercice des droits de confidentialité", "Traitement des demandes d'accès, de rectification et de suppression. Consultez notre <a href=\"#\">Politique de confidentialité</a>."],
      ["Registre des activités de traitement", "Journaux détaillés de la manière dont les données sont traitées."],
      ["Programme mondial de conformité", "Respect des réglementations applicables telles que le RGPD et le CCPA."]
    ]},
    { id: "aplicaciones", title: "Sécurité des applications", nav: "Applications", items: [
      ["Programme de primes aux bogues", "Nous invitons des chercheurs externes à signaler les vulnérabilités."],
      ["Tests SAST et DAST", "Analyses statiques et dynamiques pour détecter les failles de sécurité."],
      ["Gestion des vulnérabilités open source", "Suivi et correction des failles dans les composants open source."],
      ["Formation des développeurs", "Formation aux pratiques de développement sécurisé."]
    ]},
    { id: "dispositivos", title: "Sécurité des appareils", nav: "Appareils", items: [
      ["Chiffrement du disque", "Chiffre les données sur le disque pour empêcher tout accès non autorisé."],
      ["Détection et réponse sur les postes (EDR)", "Surveille les équipements et réagit aux menaces."],
      ["Gestion des appareils mobiles", "Administre et protège les mobiles accédant à nos systèmes."],
      ["Évaluation de l'état de l'appareil", "Vérifie la sécurité de l'appareil avant d'autoriser l'accès."]
    ]},
    { id: "acceso", title: "Contrôle d'accès", nav: "Accès", items: [
      ["MFA et SSO", "Exige l'authentification multifacteur et l'authentification unique sur les apps sensibles."],
      ["Authentification sans mot de passe", "Propose des options sans mot de passe pour renforcer la sécurité."],
      ["Moindre privilège", "Chaque personne obtient uniquement les accès nécessaires."],
      ["Accès réseau zero trust", "Modèle zero trust pour un accès réseau sécurisé."],
      ["Journalisation et surveillance", "Conserve les journaux et supervise les accès."],
      ["Revues trimestrielles des accès", "Vérification trimestrielle de l'efficacité des contrôles."]
    ]}
  ];

  const SECTIONS_PT = [
    { id: "infraestructura", title: "Segurança de infraestrutura", nav: "Infraestrutura", items: [
      ["Monitoramento de disponibilidade e integridade", "Acompanha o desempenho do sistema continuamente para evitar interrupções."],
      ["Firewalls e segmentação de rede", "Controla e protege o tráfego de dados com firewalls e redes isoladas."],
      ["Ferramentas de detecção", "Detecta ameaças e responde em tempo real."],
      ["Gestão de vulnerabilidades", "Verifica e corrige vulnerabilidades periodicamente."],
      ["Gestão de eventos de segurança (SIEM)", "Reúne e analisa registros para gerenciar ameaças com eficiência."]
    ]},
    { id: "organizacion", title: "Segurança organizacional", nav: "Organização", items: [
      ["Equipe de resposta a incidentes", "Equipe dedicada para atender, investigar e resolver incidentes."],
      ["Auditorias anuais independentes", "Testes de intrusão internos e externos todos os anos."],
      ["Treinamento anual obrigatório", "Capacitação para toda a equipe e treinamento por função."],
      ["Avaliações internas de risco", "Revisões periódicas para identificar e reduzir riscos internos."]
    ]},
    { id: "datos", title: "Segurança de dados", nav: "Dados", items: [
      ["Ambientes separados para PII e PCI", "Espaços dedicados para processar e armazenar dados pessoais e de pagamento."],
      ["Criptografia em repouso e em trânsito", "Protege seus dados armazenados e durante a transmissão."],
      ["Backups ativos", "Cópias de segurança regulares para recuperar informações em caso de perda."],
      ["Monitoramento de acesso", "Supervisiona o acesso aos dados para evitar usos não autorizados."],
      ["Retenção padrão de dados", "Políticas de retenção padrão com opções configuráveis."]
    ]},
    { id: "privacidad", title: "Privacidade de dados", nav: "Privacidade", items: [
      ["Políticas de ciclo de vida de dados", "Regras sobre manuseio, armazenamento, retenção e acesso."],
      ["Encarregado de privacidade", "Responsável dedicado a supervisionar as práticas de privacidade."],
      ["Treinamento em privacidade", "A equipe conhece e aplica os requisitos de privacidade."],
      ["Exercício de direitos de privacidade", "Atendemos solicitações de acesso, correção e exclusão. Veja nossa <a href=\"#\">Política de privacidade</a>."],
      ["Registro de atividades de tratamento", "Registros detalhados de como os dados são tratados."],
      ["Programa global de conformidade", "Conformidade com normas aplicáveis, como GDPR e CCPA."]
    ]},
    { id: "aplicaciones", title: "Segurança de aplicações", nav: "Aplicações", items: [
      ["Programa de recompensas por falhas", "Convidamos pesquisadores externos a relatar vulnerabilidades."],
      ["Testes SAST e DAST", "Análises estáticas e dinâmicas para identificar falhas de segurança."],
      ["Gestão de vulnerabilidades open source", "Monitoramos e corrigimos falhas em componentes de código aberto."],
      ["Treinamento para desenvolvedores", "Capacitação em práticas de programação segura."]
    ]},
    { id: "dispositivos", title: "Segurança de dispositivos", nav: "Dispositivos", items: [
      ["Criptografia de disco", "Criptografa os dados do disco para impedir acessos não autorizados."],
      ["Detecção e resposta em endpoints (EDR)", "Monitora os dispositivos e responde a ameaças."],
      ["Gestão de dispositivos móveis", "Gerencia e protege dispositivos móveis com acesso aos sistemas."],
      ["Avaliação do estado do dispositivo", "Verifica a segurança do equipamento antes de liberar o acesso."]
    ]},
    { id: "acceso", title: "Controle de acesso", nav: "Acesso", items: [
      ["MFA e SSO", "Exige autenticação multifator e login único em aplicações sensíveis."],
      ["Autenticação sem senha", "Oferece opções sem senha para reforçar a segurança."],
      ["Privilégio mínimo", "Cada pessoa recebe apenas o acesso necessário."],
      ["Acesso de rede zero trust", "Modelo zero trust para acesso seguro à rede."],
      ["Registro e monitoramento", "Mantém registros e monitora acessos."],
      ["Revisões trimestrais de acesso", "A cada trimestre os controles são revisados para manter a eficácia."]
    ]}
  ];

  const SECTIONS_IT = [
    { id: "infraestructura", title: "Sicurezza delle infrastrutture", nav: "Infrastruttura", items: [
      ["Monitoraggio di disponibilità e integrità", "Controlla continuamente le prestazioni del sistema senza interruzioni."],
      ["Firewall e segmentazione di rete", "Controlla e protegge il traffico dati con firewall e reti separate."],
      ["Strumenti di rilevamento", "Rileva le minacce e risponde in tempo reale."],
      ["Gestione delle vulnerabilità", "Scansiona e risolve le vulnerabilità con regolarità."],
      ["Gestione eventi di sicurezza (SIEM)", "Raccoglie e analizza i log per gestire efficacemente le minacce."]
    ]},
    { id: "organizacion", title: "Sicurezza organizzativa", nav: "Organizzazione", items: [
      ["Team di risposta agli incidenti", "Un team dedicato a gestire, indagare e risolvere gli incidenti."],
      ["Audit annuali indipendenti", "Test di penetrazione interni ed esterni ogni anno."],
      ["Formazione annuale obbligatoria", "Formazione per tutto il personale e mirata per ruolo."],
      ["Valutazioni interne del rischio", "Verifiche periodiche per individuare e ridurre i rischi interni."]
    ]},
    { id: "datos", title: "Sicurezza dei dati", nav: "Dati", items: [
      ["Ambienti separati per PII e PCI", "Spazi dedicati per elaborare e archiviare dati personali e di pagamento."],
      ["Crittografia a riposo e in transito", "Protegge i tuoi dati sia archiviati sia durante il trasferimento."],
      ["Backup attivi", "Copie di sicurezza regolari per recuperare i dati in caso di perdita."],
      ["Monitoraggio degli accessi", "Supervisiona l'accesso ai dati per prevenire usi non autorizzati."],
      ["Conservazione standard dei dati", "Criteri di conservazione standard con opzioni personalizzabili."]
    ]},
    { id: "privacidad", title: "Privacy dei dati", nav: "Privacy", items: [
      ["Politiche del ciclo di vita dei dati", "Regole su gestione, conservazione, eliminazione e accesso."],
      ["Responsabile della privacy", "Figura dedicata al controllo delle pratiche di privacy."],
      ["Formazione sulla privacy", "Il personale conosce e applica i requisiti di privacy."],
      ["Esercizio dei diritti sulla privacy", "Gestiamo richieste di accesso, rettifica e cancellazione. Leggi l'<a href=\"#\">Informativa sulla privacy</a>."],
      ["Registro delle attività di trattamento", "Registrazioni dettagliate su come vengono trattati i dati."],
      ["Programma globale di conformità", "Rispetto delle normative applicabili, come GDPR e CCPA."]
    ]},
    { id: "aplicaciones", title: "Sicurezza delle applicazioni", nav: "Applicazioni", items: [
      ["Programma di bug bounty", "Invitiamo ricercatori esterni a segnalare vulnerabilità."],
      ["Test SAST e DAST", "Analisi statiche e dinamiche per individuare falle di sicurezza."],
      ["Gestione vulnerabilità open source", "Controlliamo e risolviamo difetti nei componenti open source."],
      ["Formazione per sviluppatori", "Formazione sulle pratiche di codifica sicura."]
    ]},
    { id: "dispositivos", title: "Sicurezza dei dispositivi", nav: "Dispositivi", items: [
      ["Crittografia del disco", "Crittografa i dati su disco per impedire accessi non autorizzati."],
      ["Endpoint detection and response (EDR)", "Monitora i dispositivi e risponde alle minacce."],
      ["Gestione dispositivi mobili", "Gestisce e protegge i dispositivi mobili che accedono ai sistemi."],
      ["Valutazione sicurezza dispositivo", "Controlla lo stato del dispositivo prima di consentire l'accesso."]
    ]},
    { id: "acceso", title: "Controllo degli accessi", nav: "Accesso", items: [
      ["MFA e SSO", "Richiede autenticazione a più fattori e single sign-on sulle app sensibili."],
      ["Autenticazione senza password", "Offre opzioni passwordless per rafforzare la sicurezza."],
      ["Privilegio minimo", "Ogni persona ottiene solo l'accesso necessario."],
      ["Accesso di rete zero trust", "Modello zero trust per l'accesso sicuro alla rete."],
      ["Registrazione e monitoraggio", "Mantiene i registri e monitora gli accessi."],
      ["Revisioni trimestrali degli accessi", "Ogni trimestre si verifica l'efficacia dei controlli."]
    ]}
  ];

  const SECTIONS_DE = [
    { id: "infraestructura", title: "Infrastruktursicherheit", nav: "Infrastruktur", items: [
      ["Überwachung von Verfügbarkeit und Integrität", "Überwacht die Systemleistung kontinuierlich für einen unterbrechungsfreien Betrieb."],
      ["Firewalls und Netzwerksegmentierung", "Steuert und schützt Datenverkehr durch Firewalls und getrennte Netze."],
      ["Erkennungswerkzeuge", "Erkennt Bedrohungen und reagiert in Echtzeit."],
      ["Schwachstellenmanagement", "Prüft und behebt Sicherheitslücken regelmäßig."],
      ["Sicherheitsereignisverwaltung (SIEM)", "Sammelt und analysiert Protokolle zur wirksamen Bedrohungsabwehr."]
    ]},
    { id: "organizacion", title: "Organisatorische Sicherheit", nav: "Organisation", items: [
      ["Incident-Response-Team", "Ein eigenes Team zur Bearbeitung, Untersuchung und Behebung von Vorfällen."],
      ["Unabhängige jährliche Audits", "Interne und externe Penetrationstests jedes Jahr."],
      ["Verpflichtende jährliche Schulung", "Schulung für alle Mitarbeitenden sowie rollenspezifische Trainings."],
      ["Interne Risikobewertungen", "Regelmäßige Prüfungen zur Reduzierung interner Risiken."]
    ]},
    { id: "datos", title: "Datensicherheit", nav: "Daten", items: [
      ["Getrennte Umgebungen für PII und PCI", "Eigene Bereiche für die Verarbeitung und Speicherung personenbezogener und Zahlungsdaten."],
      ["Verschlüsselung im Ruhezustand und bei Übertragung", "Schützt Daten sowohl beim Speichern als auch während der Übertragung."],
      ["Aktive Backups", "Regelmäßige Sicherungen zur Wiederherstellung bei Datenverlust."],
      ["Zugriffsüberwachung", "Überwacht Datenzugriffe zur Vermeidung unbefugter Nutzung."],
      ["Standard-Datenaufbewahrung", "Standardrichtlinien zur Aufbewahrung mit anpassbaren Optionen."]
    ]},
    { id: "privacidad", title: "Datenschutz", nav: "Datenschutz", items: [
      ["Datenlebenszyklus-Richtlinien", "Regeln für Verarbeitung, Speicherung, Aufbewahrung und Zugriff."],
      ["Datenschutzbeauftragte Person", "Verantwortliche Person zur Überwachung der Datenschutzpraktiken."],
      ["Datenschutzschulungen", "Mitarbeitende kennen und beachten Datenschutzvorgaben."],
      ["Wahrnehmung von Datenschutzrechten", "Wir bearbeiten Auskunfts-, Berichtigungs- und Löschanfragen. Siehe <a href=\"#\">Datenschutzerklärung</a>."],
      ["Verzeichnis von Verarbeitungstätigkeiten", "Detaillierte Nachweise über die Datenverarbeitung."],
      ["Globales Compliance-Programm", "Einhaltung geltender Datenschutzgesetze wie DSGVO und CCPA."]
    ]},
    { id: "aplicaciones", title: "Anwendungssicherheit", nav: "Anwendungen", items: [
      ["Bug-Bounty-Programm", "Externe Sicherheitsforschende können Schwachstellen melden."],
      ["SAST- und DAST-Tests", "Statische und dynamische Analysen zum Auffinden von Sicherheitslücken."],
      ["Open-Source-Schwachstellenmanagement", "Überwachung und Behebung von Lücken in Open-Source-Komponenten."],
      ["Entwicklerschulungen", "Schulung zu sicheren Programmierpraktiken."]
    ]},
    { id: "dispositivos", title: "Gerätesicherheit", nav: "Geräte", items: [
      ["Festplattenverschlüsselung", "Verschlüsselt Datenträger gegen unbefugten Zugriff."],
      ["Endpoint Detection and Response (EDR)", "Überwacht Endgeräte und reagiert auf Bedrohungen."],
      ["Mobile-Device-Management", "Verwaltet und schützt mobile Geräte mit Systemzugriff."],
      ["Gerätestatusprüfung", "Prüft den Sicherheitszustand des Geräts vor dem Zugriff."]
    ]},
    { id: "acceso", title: "Zugriffskontrolle", nav: "Zugriff", items: [
      ["MFA und SSO", "Erfordert Multi-Faktor-Authentifizierung und Single Sign-On für sensible Dienste."],
      ["Passwortlose Authentifizierung", "Bietet passwortlose Optionen für mehr Sicherheit."],
      ["Prinzip der geringsten Rechte", "Jede Person erhält nur die erforderlichen Berechtigungen."],
      ["Zero-Trust-Netzwerkzugriff", "Zero-Trust-Modell für sicheren Netzwerkzugriff."],
      ["Protokollierung und Überwachung", "Führt Zugriffsprotokolle und überwacht Aktivitäten."],
      ["Vierteljährliche Zugriffsreviews", "Jedes Quartal wird die Wirksamkeit der Kontrollen geprüft."]
    ]}
  ];

  const SECTIONS_JA = [
    { id: "infraestructura", title: "インフラセキュリティ", nav: "インフラ", items: [
      ["可用性と整合性の監視", "サービスが中断しないようシステム稼働状況を継続的に監視します。"],
      ["ファイアウォールとネットワーク分割", "ファイアウォールと分離されたネットワークで通信を制御・保護します。"],
      ["検知ツール", "脅威をリアルタイムで検知し対応します。"],
      ["脆弱性管理", "定期的にスキャンを実施し脆弱性を修正します。"],
      ["セキュリティイベント管理（SIEM）", "ログを収集・分析して脅威を効果的に管理します。"]
    ]},
    { id: "organizacion", title: "組織的セキュリティ", nav: "組織", items: [
      ["インシデント対応チーム", "セキュリティインシデントの対応・調査・解決を行う専任チームです。"],
      ["年次の独立監査", "毎年、内部および外部のペネトレーションテストを実施します。"],
      ["年次必須トレーニング", "全社員向け教育および役割別のセキュリティ研修を行います。"],
      ["内部リスク評価", "内部リスクを特定・低減するための定期レビューを実施します。"]
    ]},
    { id: "datos", title: "データセキュリティ", nav: "データ", items: [
      ["PIIとPCIの分離環境", "個人情報や決済情報を処理・保管するための専用環境を用意しています。"],
      ["保管時および転送時の暗号化", "保存中および通信中のデータを暗号化して保護します。"],
      ["アクティブなバックアップ", "万が一のデータ損失に備え定期的にバックアップを行います。"],
      ["アクセス監視", "不正利用を防ぐためデータへのアクセスを監視します。"],
      ["標準データ保持", "カスタマイズ可能な標準のデータ保持ポリシーを採用しています。"]
    ]},
    { id: "privacidad", title: "データプライバシー", nav: "プライバシー", items: [
      ["データライフサイクルポリシー", "データの取り扱い・保管・保持・アクセスに関するルールを定めています。"],
      ["プライバシー責任者", "プライバシー保護の実践を監督する担当者を配置しています。"],
      ["プライバシー研修", "担当者がプライバシー要件を理解し適切に運用します。"],
      ["プライバシー権の行使", "アクセス・訂正・削除の請求に対応します。<a href=\"#\">プライバシーポリシー</a>をご確認ください。"],
      ["処理活動の記録", "データの処理方法を記録した詳細なログを保持します。"],
      ["グローバルコンプライアンス体制", "GDPRやCCPAなど適用されるプライバシー法規に準拠します。"]
    ]},
    { id: "aplicaciones", title: "アプリケーションセキュリティ", nav: "アプリ", items: [
      ["バグ報奨金プログラム", "外部の研究者からの脆弱性報告を受け付けています。"],
      ["SASTおよびDASTテスト", "静的・動的解析によりセキュリティ上の欠陥を検出します。"],
      ["オープンソース脆弱性管理", "オープンソース要素の脆弱性を把握し修正します。"],
      ["開発者向けトレーニング", "安全な実装手法に関する教育を実施します。"]
    ]},
    { id: "dispositivos", title: "デバイスセキュリティ", nav: "デバイス", items: [
      ["ディスク暗号化", "不正アクセスを防ぐためストレージ上のデータを暗号化します。"],
      ["エンドポイント検知と対応（EDR）", "端末を監視し脅威に迅速に対応します。"],
      ["モバイルデバイス管理", "システムにアクセスするモバイル端末を管理・保護します。"],
      ["端末状態の評価", "アクセスを許可する前に端末の安全性を確認します。"]
    ]},
    { id: "acceso", title: "アクセス制御", nav: "アクセス", items: [
      ["MFAとSSO", "重要なアプリで多要素認証とシングルサインオンを求めます。"],
      ["パスワードレス認証", "セキュリティを高めるパスワードレスの選択肢を提供します。"],
      ["最小権限の原則", "業務に必要な最小限のアクセス権のみを付与します。"],
      ["ゼロトラストネットワークアクセス", "ゼロトラストモデルに基づく安全なネットワーク接続を行います。"],
      ["ログ記録と監視", "アクセスログを記録し利用状況を監視します。"],
      ["四半期ごとのアクセス見直し", "四半期ごとにアクセス制御の有効性を確認します。"]
    ]}
  ];

  const SECTIONS_KO = [
    { id: "infraestructura", title: "인프라 보안", nav: "인프라", items: [
      ["가용성 및 무결성 모니터링", "서비스가 중단되지 않도록 시스템 성능을 지속적으로 감시합니다."],
      ["방화벽 및 네트워크 세분화", "방화벽과 분리된 네트워크로 데이터 트래픽을 제어하고 보호합니다."],
      ["탐지 도구", "위협을 실시간으로 탐지하고 대응합니다."],
      ["취약점 관리", "정기적으로 취약점을 스캔하고 조치합니다."],
      ["보안 이벤트 관리(SIEM)", "로그를 수집·분석해 위협을 효과적으로 관리합니다."]
    ]},
    { id: "organizacion", title: "조직 보안", nav: "조직", items: [
      ["사고 대응 팀", "보안 사고를 처리·조사·해결하는 전담 팀을 운영합니다."],
      ["연례 독립 감사", "매년 내부 및 외부 모의 침투 테스트를 진행합니다."],
      ["연간 필수 교육", "전 직원 교육과 역할별 맞춤 보안 교육을 제공합니다."],
      ["내부 위험 평가", "내부 위험을 파악하고 줄이기 위해 정기 점검을 수행합니다."]
    ]},
    { id: "datos", title: "데이터 보안", nav: "데이터", items: [
      ["PII 및 PCI 분리 환경", "개인정보와 결제 데이터를 처리·저장하는 전용 환경을 운영합니다."],
      ["저장 및 전송 구간 암호화", "저장 중과 전송 중 데이터를 암호화로 보호합니다."],
      ["활성 백업", "데이터 유실에 대비해 정기 백업을 수행합니다."],
      ["접근 모니터링", "무단 접근을 막기 위해 데이터 접근을 감시합니다."],
      ["표준 데이터 보존", "맞춤 설정 옵션이 포함된 표준 보존 정책을 적용합니다."]
    ]},
    { id: "privacidad", title: "데이터 개인정보 보호", nav: "개인정보", items: [
      ["데이터 수명주기 정책", "데이터 취급·저장·보관·접근에 관한 기준을 운영합니다."],
      ["개인정보 보호 책임자", "개인정보 보호 관행을 총괄하는 담당자를 둡니다."],
      ["개인정보 보호 교육", "임직원이 개인정보 요구사항을 숙지하고 준수합니다."],
      ["개인정보 권리 행사", "열람·정정·삭제 요청을 처리합니다. <a href=\"#\">개인정보처리방침</a>을 확인하세요."],
      ["처리 활동 기록", "데이터 처리 내역을 상세히 기록합니다."],
      ["글로벌 컴플라이언스 프로그램", "GDPR, CCPA 등 적용되는 개인정보 규정을 준수합니다."]
    ]},
    { id: "aplicaciones", title: "애플리케이션 보안", nav: "애플리케이션", items: [
      ["버그 바운티 프로그램", "외부 보안 연구자의 취약점 제보를 환영합니다."],
      ["SAST 및 DAST 테스트", "정적·동적 분석으로 보안 결함을 찾아냅니다."],
      ["오픈소스 취약점 관리", "오픈소스 구성요소의 결함을 추적하고 수정합니다."],
      ["개발자 보안 교육", "안전한 코딩 기준에 대한 교육을 제공합니다."]
    ]},
    { id: "dispositivos", title: "디바이스 보안", nav: "디바이스", items: [
      ["디스크 암호화", "무단 접근을 방지하기 위해 디스크 데이터를 암호화합니다."],
      ["엔드포인트 탐지 및 대응(EDR)", "단말기를 감시하고 위협에 대응합니다."],
      ["모바일 기기 관리", "시스템에 접속하는 모바일 기기를 관리하고 보호합니다."],
      ["기기 상태 평가", "접속 허용 전 기기의 보안 상태를 점검합니다."]
    ]},
    { id: "acceso", title: "접근 제어", nav: "접근 제어", items: [
      ["MFA 및 SSO", "민감한 앱에 다중 인증과 싱글 사인온을 적용합니다."],
      ["패스워드리스 인증", "보안을 강화하는 비밀번호 없는 인증 방식을 지원합니다."],
      ["최소 권한", "업무에 꼭 필요한 권한만 부여합니다."],
      ["제로 트러스트 네트워크 접근", "제로 트러스트 모델로 안전한 네트워크 접근을 제공합니다."],
      ["기록 및 모니터링", "접근 기록을 남기고 이상 징후를 감시합니다."],
      ["분기별 접근 검토", "분기마다 접근 통제의 실효성을 점검합니다."]
    ]}
  ];

  const SECTIONS_ZH = [
    { id: "infraestructura", title: "基础设施安全", nav: "基础设施", items: [
      ["可用性与完整性监控", "持续监控系统性能，保障服务稳定不中断。"],
      ["防火墙与网络分段", "通过防火墙与隔离网络控制并保护数据流量。"],
      ["检测工具", "实时发现威胁并快速响应。"],
      ["漏洞管理", "定期扫描并修复潜在安全漏洞。"],
      ["安全事件管理（SIEM）", "汇总并分析日志，高效管理安全威胁。"]
    ]},
    { id: "organizacion", title: "组织安全", nav: "组织", items: [
      ["事件响应团队", "由专职团队负责处理、调查与解决安全事件。"],
      ["年度独立审计", "每年开展内部与外部渗透测试。"],
      ["年度必修培训", "面向全体员工开展培训，并提供按岗位划分的安全培训。"],
      ["内部风险评估", "定期开展审查，识别并降低内部风险。"]
    ]},
    { id: "datos", title: "数据安全", nav: "数据", items: [
      ["PII 与 PCI 隔离环境", "为处理与存储个人数据和支付数据设立独立环境。"],
      ["静态与传输加密", "在数据存储与网络传输过程中全程加密保护。"],
      ["有效备份", "定期执行备份，确保数据丢失时可及时恢复。"],
      ["访问监控", "监控数据访问行为，防止未经授权的使用。"],
      ["标准数据保留", "采用标准保留策略，并提供可配置选项。"]
    ]},
    { id: "privacidad", title: "数据隐私", nav: "隐私", items: [
      ["数据生命周期策略", "规范数据的处理、存储、保留与访问规则。"],
      ["隐私保护官", "由专人监督隐私合规与实践落实。"],
      ["隐私培训", "确保团队了解并执行隐私保护要求。"],
      ["行使隐私权利", "支持查询、更正与删除请求，详见<a href=\"#\">隐私政策</a>。"],
      ["处理活动记录", "详细记录数据处理流程与活动。"],
      ["全球合规计划", "遵循 GDPR、CCPA 等适用的隐私法规。"]
    ]},
    { id: "aplicaciones", title: "应用安全", nav: "应用", items: [
      ["漏洞赏金计划", "欢迎外部安全研究人员提交漏洞报告。"],
      ["SAST 与 DAST 测试", "结合静态与动态分析查找安全缺陷。"],
      ["开源漏洞管理", "跟踪并修复开源组件中的安全问题。"],
      ["开发者培训", "开展安全编码规范培训。"]
    ]},
    { id: "dispositivos", title: "设备安全", nav: "设备", items: [
      ["磁盘加密", "对磁盘数据进行加密，防止未授权访问。"],
      ["终端检测与响应（EDR）", "持续监控终端设备并对威胁作出响应。"],
      ["移动设备管理", "管理和保护访问系统的移动终端。"],
      ["设备状态评估", "在允许访问前检查设备安全状态。"]
    ]},
    { id: "acceso", title: "访问控制", nav: "访问", items: [
      ["MFA 与 SSO", "在敏感应用中强制启用多因素认证与单点登录。"],
      ["无密码认证", "提供无密码登录选项以增强安全性。"],
      ["最小权限原则", "仅授予完成任务所需的最低权限。"],
      ["零信任网络访问", "采用零信任模型实现安全网络接入。"],
      ["日志记录与监控", "保留访问日志并持续监控连接行为。"],
      ["季度访问审查", "每季度核查访问控制措施的有效性。"]
    ]}
  ];

  const SECTIONS_AR = [
    { id: "infraestructura", title: "أمن البنية التحتية", nav: "البنية التحتية", items: [
      ["مراقبة التوافر والسلامة", "يراقب أداء النظام باستمرار لضمان استمرارية الخدمة دون انقطاع."],
      ["جدران الحماية وتقسيم الشبكة", "يتحكم في حركة البيانات ويحميها عبر جدران حماية وشبكات معزولة."],
      ["أدوات الكشف", "يكتشف التهديدات ويستجيب لها في الوقت الفعلي."],
      ["إدارة الثغرات الأمنية", "يفحص الثغرات ويعالجها بشكل دوري."],
      ["إدارة أحداث الأمان (SIEM)", "يجمع السجلات ويحللها لإدارة التهديدات بكفاءة."]
    ]},
    { id: "organizacion", title: "الأمن التنظيمي", nav: "التنظيم", items: [
      ["فريق الاستجابة للحوادث", "فريق مخصص لمعالجة الحوادث والتحقيق فيها وحلها."],
      ["تدقيق سنوي مستقل", "اختبارات اختراق داخلية وخارجية كل عام."],
      ["تدريب سنوي إلزامي", "توعية لجميع الموظفين وتدريب متخصص حسب الدور الوظيفي."],
      ["تقييمات المخاطر الداخلية", "مراجعات دورية لتحديد المخاطر الداخلية وتقليلها."]
    ]},
    { id: "datos", title: "أمن البيانات", nav: "البيانات", items: [
      ["بيئات منفصلة لبيانات PII و PCI", "بيئات مخصصة لمعالجة وتخزين البيانات الشخصية وبيانات الدفع."],
      ["التشفير أثناء التخزين والنقل", "يحمي بياناتك أثناء حفظها وأثناء انتقالها."],
      ["نسخ احتياطية نشطة", "نسخ احتياطية منتظمة لاستعادة المعلومات عند أي فقدان."],
      ["مراقبة الوصول", "يراقب الوصول إلى البيانات لمنع الاستخدام غير المصرح به."],
      ["الاحتفاظ القياسي بالبيانات", "سياسات احتفاظ قياسية مع خيارات قابلة للتخصيص."]
    ]},
    { id: "privacidad", title: "خصوصية البيانات", nav: "الخصوصية", items: [
      ["سياسات دورة حياة البيانات", "قواعد تنظّم التعامل مع البيانات وتخزينها والاحتفاظ بها والوصول إليها."],
      ["مسؤول الخصوصية", "جهة مسؤولة عن متابعة ممارسات الخصوصية."],
      ["التدريب على الخصوصية", "يعرف الموظفون متطلبات الخصوصية ويطبقونها."],
      ["ممارسة حقوق الخصوصية", "نستجيب لطلبات الوصول والتصحيح والحذف. راجع <a href=\"#\">سياسة الخصوصية</a>."],
      ["سجل أنشطة المعالجة", "سجلات تفصيلية لكيفية معالجة البيانات."],
      ["برنامج امتثال عالمي", "الالتزام بقوانين الخصوصية المعمول بها مثل GDPR و CCPA."]
    ]},
    { id: "aplicaciones", title: "أمن التطبيقات", nav: "التطبيقات", items: [
      ["برنامج مكافآت الثغرات", "ندعو الباحثين الخارجيين للإبلاغ عن الثغرات الأمنية."],
      ["اختبارات SAST و DAST", "تحليل ثابت وديناميكي لاكتشاف الثغرات الأمنية."],
      ["إدارة ثغرات المصادر المفتوحة", "نتابع الثغرات في المكونات مفتوحة المصدر ونعالجها."],
      ["تدريب المطورين", "تدريب على ممارسات البرمجة الآمنة."]
    ]},
    { id: "dispositivos", title: "أمن الأجهزة", nav: "الأجهزة", items: [
      ["تشفير الأقراص", "يشفر بيانات القرص لمنع الوصول غير المصرح به."],
      ["الكشف والاستجابة على نقاط النهاية (EDR)", "يراقب الأجهزة ويستجيب للتهديدات."],
      ["إدارة الأجهزة المحمولة", "يدير ويحمي الأجهزة المحمولة التي تصل إلى أنظمتنا."],
      ["تقييم حالة الجهاز", "يتحقق من أمان الجهاز قبل السماح بالوصول."]
    ]},
    { id: "acceso", title: "التحكم في الوصول", nav: "الوصول", items: [
      ["MFA و SSO", "يتطلب المصادقة متعددة العوامل وتسجيل الدخول الموحد للتطبيقات الحساسة."],
      ["المصادقة بدون كلمة مرور", "يوفر خيارات بدون كلمة مرور لتعزيز الأمان."],
      ["أقل امتياز", "يحصل كل شخص على الصلاحيات اللازمة فقط."],
      ["الوصول الشبكي صفر ثقة", "نموذج صفر ثقة للوصول الآمن إلى الشبكة."],
      ["التسجيل والمراقبة", "يحتفظ بالسجلات ويراقب عمليات الوصول."],
      ["مراجعات الوصول ربع السنوية", "يتم التحقق كل ربع سنة من فعالية الضوابط."]
    ]}
  ];

  Object.assign(textosSeguridad, {
    FR: {
      panelTitulo: 'CHOISISSEZ VOTRE LANGUE', buscarPh: 'Rechercher une langue...',
      pageTitle: 'Sécurité chez Ruta Tropical',
      heroTitulo: 'Sécurité chez Ruta Tropical.<br>Votre voyage, protégé.',
      heroDesc: 'Nous protégeons vos données et vos paiements grâce à des contrôles techniques et des équipes dédiées, de la réservation au retour.',
      heroReport: 'Signalez une vulnérabilité à <a href="mailto:seguridad@rutatropical.com">seguridad@rutatropical.com</a>',
      sections: SECTIONS_FR,
      usuarioMenu: { anadir: '+ Ajouter un utilisateur', trips: 'Trips', ayudaFaq: 'Aide/FAQ', cuenta: 'Votre compte', cerrarSesion: 'Déconnexion', promptNombre: 'Nom :', promptCorreo: 'E-mail :' },
      menu: { vuelos: 'Vols', hoteles: 'Hôtels', autobus: 'Bus', ia: 'Planifier avec l’IA', planea: 'Planifiez vos voyages', nosotros: 'À propos', contacto: 'Contact', faq: 'FAQ', explorar: 'Explorer', terminos: 'Conditions générales', rastreador: 'Suivi des vols', viajes: 'Voyages', telLbl: 'Téléphone :', correoLbl: 'E-mail :' },
      footer: { desc: 'Votre agence de confiance pour découvrir le monde au meilleur prix. Comparez, économisez et voyagez sans limites.', colEmpresa: 'Entreprise', acercaDe: 'À propos', prensa: 'Presse', afiliados: 'Affiliés', socios: 'Partenaires', colContacto: 'Contact', ayudaFaq: 'Aide / FAQ', hoteles: 'Hôtels', publicidad: 'Publicité', colMas: 'Plus', tarifasAereas: 'Tarifs aériens', ofertasBajas: 'Petits prix', privacidad: 'Confidentialité', descargaApp: 'Télécharger l’appli', appTexto: 'Emportez vos réservations et offres partout.', playSmall: 'DISPONIBLE SUR', playStrong: 'Google Play', appleSmall: 'TÉLÉCHARGER DANS', appleStrong: 'App Store', derechos: 'RuTa Tropical. Tous droits réservés.', terminos: 'Conditions générales', cookies: 'Cookies' }
    },
    PT: {
      panelTitulo: 'SELECIONE SEU IDIOMA', buscarPh: 'Buscar idioma...',
      pageTitle: 'Segurança na Ruta Tropical',
      heroTitulo: 'Segurança na Ruta Tropical.<br>Sua viagem, protegida.',
      heroDesc: 'Protegemos seus dados e pagamentos com controles técnicos e equipes dedicadas, da reserva ao retorno para casa.',
      heroReport: 'Reporte uma vulnerabilidade para <a href="mailto:seguridad@rutatropical.com">seguridad@rutatropical.com</a>',
      sections: SECTIONS_PT,
      usuarioMenu: { anadir: '+ Adicionar usuário', trips: 'Trips', ayudaFaq: 'Ajuda/FAQ', cuenta: 'Sua conta', cerrarSesion: 'Sair', promptNombre: 'Nome:', promptCorreo: 'E-mail:' },
      menu: { vuelos: 'Voos', hoteles: 'Hotéis', autobus: 'Ônibus', ia: 'Planejar com IA', planea: 'Planeje suas viagens', nosotros: 'Sobre nós', contacto: 'Contato', faq: 'Perguntas frequentes', explorar: 'Explorar', terminos: 'Termos e condições', rastreador: 'Rastreador de voos', viajes: 'Viagens', telLbl: 'Telefone:', correoLbl: 'E-mail:' },
      footer: { desc: 'Sua agência de confiança para descobrir o mundo pelo melhor preço. Compare, economize e voe sem limites.', colEmpresa: 'Empresa', acercaDe: 'Sobre nós', prensa: 'Imprensa', afiliados: 'Afiliados', socios: 'Parceiros', colContacto: 'Contato', ayudaFaq: 'Ajuda / FAQ', hoteles: 'Hotéis', publicidad: 'Publicidade', colMas: 'Mais', tarifasAereas: 'Passagens aéreas', ofertasBajas: 'Ofertas', privacidad: 'Privacidade', descargaApp: 'Baixe o app', appTexto: 'Leve suas reservas e ofertas sempre com você.', playSmall: 'DISPONÍVEL NO', playStrong: 'Google Play', appleSmall: 'BAIXAR NA', appleStrong: 'App Store', derechos: 'RuTa Tropical. Todos os direitos reservados.', terminos: 'Termos e condições', cookies: 'Cookies' }
    },
    IT: {
      panelTitulo: 'SELEZIONA LA TUA LINGUA', buscarPh: 'Cerca lingua...',
      pageTitle: 'Sicurezza su Ruta Tropical',
      heroTitulo: 'Sicurezza su Ruta Tropical.<br>Il tuo viaggio, protetto.',
      heroDesc: 'Proteggiamo dati e pagamenti con controlli tecnici e team dedicati, dalla prenotazione al rientro a casa.',
      heroReport: 'Segnala una vulnerabilità a <a href="mailto:seguridad@rutatropical.com">seguridad@rutatropical.com</a>',
      sections: SECTIONS_IT,
      usuarioMenu: { anadir: '+ Aggiungi utente', trips: 'Trips', ayudaFaq: 'Aiuto/FAQ', cuenta: 'Il tuo account', cerrarSesion: 'Esci', promptNombre: 'Nome:', promptCorreo: 'Email:' },
      menu: { vuelos: 'Voli', hoteles: 'Hotel', autobus: 'Autobus', ia: 'Pianifica con IA', planea: 'Pianifica i viaggi', nosotros: 'Chi siamo', contacto: 'Contatti', faq: 'FAQ', explorar: 'Esplora', terminos: 'Termini e condizioni', rastreador: 'Tracker voli', viajes: 'Viaggi', telLbl: 'Telefono:', correoLbl: 'Email:' },
      footer: { desc: 'La tua agenzia di fiducia per scoprire il mondo al miglior prezzo. Confronta, risparmia e vola senza limiti.', colEmpresa: 'Azienda', acercaDe: 'Chi siamo', prensa: 'Stampa', afiliados: 'Affiliati', socios: 'Partner', colContacto: 'Contatti', ayudaFaq: 'Aiuto / FAQ', hoteles: 'Hotel', publicidad: 'Pubblicità', colMas: 'Altro', tarifasAereas: 'Tariffe aeree', ofertasBajas: 'Offerte basse', privacidad: 'Privacy', descargaApp: 'Scarica l’app', appTexto: 'Porta sempre con te prenotazioni e offerte.', playSmall: 'DISPONIBILE SU', playStrong: 'Google Play', appleSmall: 'SCARICA SU', appleStrong: 'App Store', derechos: 'RuTa Tropical. Tutti i diritti riservati.', terminos: 'Termini e condizioni', cookies: 'Cookie' }
    },
    DE: {
      panelTitulo: 'SPRACHE WÄHLEN', buscarPh: 'Sprache suchen...',
      pageTitle: 'Sicherheit bei Ruta Tropical',
      heroTitulo: 'Sicherheit bei Ruta Tropical.<br>Deine Reise, geschützt.',
      heroDesc: 'Wir schützen deine Daten und Zahlungen mit technischen Kontrollen und engagierten Teams – von der Buchung bis zur Rückkehr.',
      heroReport: 'Melde eine Schwachstelle an <a href="mailto:seguridad@rutatropical.com">seguridad@rutatropical.com</a>',
      sections: SECTIONS_DE,
      usuarioMenu: { anadir: '+ Nutzer hinzufügen', trips: 'Trips', ayudaFaq: 'Hilfe/FAQ', cuenta: 'Dein Konto', cerrarSesion: 'Abmelden', promptNombre: 'Name:', promptCorreo: 'E-Mail:' },
      menu: { vuelos: 'Flüge', hoteles: 'Hotels', autobus: 'Bus', ia: 'Mit KI planen', planea: 'Reisen planen', nosotros: 'Über uns', contacto: 'Kontakt', faq: 'FAQ', explorar: 'Entdecken', terminos: 'AGB', rastreador: 'Flugtracker', viajes: 'Reisen', telLbl: 'Telefon:', correoLbl: 'E-Mail:' },
      footer: { desc: 'Deine zuverlässige Agentur, um die Welt zum besten Preis zu entdecken. Vergleichen, sparen und unbegrenzt fliegen.', colEmpresa: 'Unternehmen', acercaDe: 'Über uns', prensa: 'Presse', afiliados: 'Partnerprogramm', socios: 'Partner', colContacto: 'Kontakt', ayudaFaq: 'Hilfe / FAQ', hoteles: 'Hotels', publicidad: 'Werbung', colMas: 'Mehr', tarifasAereas: 'Flugtarife', ofertasBajas: 'Günstige Angebote', privacidad: 'Datenschutz', descargaApp: 'App herunterladen', appTexto: 'Buchungen und Angebote immer griffbereit.', playSmall: 'JETZT BEI', playStrong: 'Google Play', appleSmall: 'LADEN IM', appleStrong: 'App Store', derechos: 'RuTa Tropical. Alle Rechte vorbehalten.', terminos: 'AGB', cookies: 'Cookies' }
    },
    JA: {
      panelTitulo: '言語を選択', buscarPh: '言語を検索...',
      pageTitle: 'Ruta Tropicalのセキュリティ',
      heroTitulo: 'Ruta Tropicalのセキュリティ。<br>あなたの旅を、しっかり保護。',
      heroDesc: '予約からご帰宅まで、技術的な管理体制と専任チームでお客様のデータと決済を守ります。',
      heroReport: '脆弱性の報告先：<a href="mailto:seguridad@rutatropical.com">seguridad@rutatropical.com</a>',
      sections: SECTIONS_JA,
      usuarioMenu: { anadir: '+ ユーザーを追加', trips: 'Trips', ayudaFaq: 'ヘルプ/よくある質問', cuenta: 'アカウント', cerrarSesion: 'ログアウト', promptNombre: '名前:', promptCorreo: 'メール:' },
      menu: { vuelos: 'フライト', hoteles: 'ホテル', autobus: 'バス', ia: 'AIで計画', planea: '旅行を計画', nosotros: '会社概要', contacto: 'お問い合わせ', faq: 'よくある質問', explorar: '探索', terminos: '利用規約', rastreador: 'フライト追跡', viajes: '旅行', telLbl: '電話:', correoLbl: 'メール:' },
      footer: { desc: '世界をお得に旅するための信頼できるパートナー。比較・節約して自由に飛びましょう。', colEmpresa: '企業情報', acercaDe: '会社概要', prensa: 'プレス', afiliados: 'アフィリエイト', socios: 'パートナー', colContacto: 'お問い合わせ', ayudaFaq: 'ヘルプ / FAQ', hoteles: 'ホテル', publicidad: '広告掲載', colMas: 'その他', tarifasAereas: '航空運賃', ofertasBajas: '格安オファー', privacidad: 'プライバシー', descargaApp: 'アプリをダウンロード', appTexto: '予約やお得な情報をいつでも手元に。', playSmall: '手に入れよう', playStrong: 'Google Play', appleSmall: 'ダウンロード', appleStrong: 'App Store', derechos: 'RuTa Tropical. All rights reserved.', terminos: '利用規約', cookies: 'Cookie' }
    },
    KO: {
      panelTitulo: '언어 선택', buscarPh: '언어 검색...',
      pageTitle: 'Ruta Tropical 보안 안내',
      heroTitulo: 'Ruta Tropical 보안.<br>당신의 여행, 안전하게.',
      heroDesc: '예약부터 귀가까지 기술적 통제와 전담 팀으로 데이터와 결제를 보호합니다.',
      heroReport: '취약점 제보: <a href="mailto:seguridad@rutatropical.com">seguridad@rutatropical.com</a>',
      sections: SECTIONS_KO,
      usuarioMenu: { anadir: '+ 사용자 추가', trips: 'Trips', ayudaFaq: '도움말/FAQ', cuenta: '내 계정', cerrarSesion: '로그아웃', promptNombre: '이름:', promptCorreo: '이메일:' },
      menu: { vuelos: '항공권', hoteles: '호텔', autobus: '버스', ia: 'AI 일정 계획', planea: '여행 계획', nosotros: '회사 소개', contacto: '문의하기', faq: 'FAQ', explorar: '둘러보기', terminos: '이용약관', rastreador: '항공편 추적', viajes: '여행', telLbl: '전화:', correoLbl: '이메일:' },
      footer: { desc: '최고의 가격으로 세상을 만나는 믿을 수 있는 여행 파트너. 비교하고 아끼며 자유롭게 떠나세요.', colEmpresa: '회사', acercaDe: '회사 소개', prensa: '보도자료', afiliados: '제휴', socios: '파트너', colContacto: '문의', ayudaFaq: '도움말 / FAQ', hoteles: '호텔', publicidad: '광고', colMas: '더보기', tarifasAereas: '항공 요금', ofertasBajas: '특가', privacidad: '개인정보처리방침', descargaApp: '앱 다운로드', appTexto: '예약과 혜택을 언제 어디서나 확인하세요.', playSmall: '다운로드', playStrong: 'Google Play', appleSmall: '다운로드', appleStrong: 'App Store', derechos: 'RuTa Tropical. All rights reserved.', terminos: '이용약관', cookies: '쿠키' }
    },
    ZH: {
      panelTitulo: '选择你的语言', buscarPh: '搜索语言...',
      pageTitle: 'Ruta Tropical 安全保障',
      heroTitulo: 'Ruta Tropical 安全保障。<br>让你的旅程更安心。',
      heroDesc: '从预订到返程，我们通过技术防护与专业团队守护你的数据与支付安全。',
      heroReport: '提交安全漏洞请发送至 <a href="mailto:seguridad@rutatropical.com">seguridad@rutatropical.com</a>',
      sections: SECTIONS_ZH,
      usuarioMenu: { anadir: '+ 添加用户', trips: 'Trips', ayudaFaq: '帮助/常见问题', cuenta: '你的账户', cerrarSesion: '退出登录', promptNombre: '姓名:', promptCorreo: '邮箱:' },
      menu: { vuelos: '机票', hoteles: '酒店', autobus: '巴士', ia: 'AI 规划', planea: '规划行程', nosotros: '关于我们', contacto: '联系我们', faq: '常见问题', explorar: '探索', terminos: '条款与条件', rastreador: '航班追踪', viajes: '行程', telLbl: '电话:', correoLbl: '邮箱:' },
      footer: { desc: '值得信赖的旅行伙伴，以更优价格探索世界。比价、省钱，畅游无界。', colEmpresa: '公司', acercaDe: '关于我们', prensa: '媒体', afiliados: '联盟', socios: '合作伙伴', colContacto: '联系', ayudaFaq: '帮助 / FAQ', hoteles: '酒店', publicidad: '广告', colMas: '更多', tarifasAereas: '机票价格', ofertasBajas: '特价优惠', privacidad: '隐私政策', descargaApp: '下载应用', appTexto: '随时随地查看行程与优惠。', playSmall: '立即获取', playStrong: 'Google Play', appleSmall: '前往下载', appleStrong: 'App Store', derechos: 'RuTa Tropical. 保留所有权利。', terminos: '条款与条件', cookies: 'Cookie' }
    },
    AR: {
      panelTitulo: 'اختر لغتك', buscarPh: 'ابحث عن لغة...',
      pageTitle: 'الأمان في Ruta Tropical',
      heroTitulo: 'الأمان في Ruta Tropical.<br>رحلتك محمية.',
      heroDesc: 'نحمي بياناتك ومدفوعاتك بضوابط تقنية وفرق متخصصة، من لحظة الحجز وحتى العودة إلى المنزل.',
      heroReport: 'أبلغ عن ثغرة أمنية عبر <a href="mailto:seguridad@rutatropical.com">seguridad@rutatropical.com</a>',
      sections: SECTIONS_AR,
      usuarioMenu: { anadir: '+ إضافة مستخدم', trips: 'Trips', ayudaFaq: 'المساعدة/الأسئلة الشائعة', cuenta: 'حسابك', cerrarSesion: 'تسجيل الخروج', promptNombre: 'الاسم:', promptCorreo: 'البريد الإلكتروني:' },
      menu: { vuelos: 'رحلات جوية', hoteles: 'فنادق', autobus: 'حافلة', ia: 'خطط بالذكاء الاصطناعي', planea: 'خطط لرحلاتك', nosotros: 'من نحن', contacto: 'اتصل بنا', faq: 'الأسئلة الشائعة', explorar: 'استكشف', terminos: 'الشروط والأحكام', rastreador: 'متتبع الرحلات', viajes: 'الرحلات', telLbl: 'الهاتف:', correoLbl: 'البريد:' },
      footer: { desc: 'وكالتك الموثوقة لاكتشاف العالم بأفضل سعر. قارن ووفّر وسافر بلا حدود.', colEmpresa: 'الشركة', acercaDe: 'من نحن', prensa: 'الصحافة', afiliados: 'الشركاء التابعون', socios: 'الشركاء', colContacto: 'التواصل', ayudaFaq: 'المساعدة / الأسئلة الشائعة', hoteles: 'الفنادق', publicidad: 'الإعلانات', colMas: 'المزيد', tarifasAereas: 'أسعار الرحلات', ofertasBajas: 'عروض منخفضة', privacidad: 'الخصوصية', descargaApp: 'حمّل التطبيق', appTexto: 'احتفظ بحجوزاتك وعروضك معك دائمًا.', playSmall: 'متوفر على', playStrong: 'Google Play', appleSmall: 'حمّله من', appleStrong: 'App Store', derechos: 'RuTa Tropical. جميع الحقوق محفوظة.', terminos: 'الشروط والأحكام', cookies: 'ملفات تعريف الارتباط' }
    }
  });
})();