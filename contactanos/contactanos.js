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

  const textosContacto = {
    ES: {
      panelTitulo: 'SELECCIONA TU IDIOMA',
      buscarPh: 'Buscar idioma...',
      pageTitle: 'Contacta con nosotros | Ruta Tropical',
      heroTitulo: 'Contacta con nosotros',
      kicker: 'Habla con nuestro equipo',
      heading: '¿Cómo contactar con nosotros?',
      intro: 'Cuando planees viajar a tu destino deseado y busques el mejor y más asequible paquete vacacional, puedes contactar con los expertos de nuestro equipo de atención al cliente para recibir la asistencia adecuada. Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana, para ayudarte con tus consultas y garantizar que tu experiencia de viaje sea cómoda.',
      emailHeading: 'Dirección de correo electrónico',
      phoneHeading: 'Nuestro teléfono',
      badgeVentas: 'Ventas',
      badgeServicio: 'Servicio al cliente',
      lblNombre: 'Nombre',
      lblApellido: 'Apellido',
      lblTelefono: 'Teléfono',
      lblCorreo: 'Correo electrónico',
      lblComentario: 'Tu comentario',
      lblCaptcha: 'Escribe el resultado de la suma',
      captchaPh: 'Tu respuesta',
      btnEnviar: 'Enviar mensaje',
      enviadoOk: '¡Gracias! Recibimos tu mensaje y te responderemos pronto.',
      enviadoFail: 'No pudimos enviar tu mensaje. Inténtalo de nuevo.',
      reglas: {
        nombre: 'Escribe tu nombre.',
        apellido: 'Escribe tu apellido.',
        telefono: 'Escribe un teléfono válido.',
        correo: 'Escribe un correo válido.',
        comentario: 'Cuéntanos un poco más (mínimo 10 caracteres).',
        captcha: 'La suma no es correcta.'
      },
      usuarioMenu: {
        anadir: '+ Añadir usuario',
        trips: 'Trips',
        ayudaFaq: 'Ayuda/Preguntas frecuentes',
        cuenta: 'Tu cuenta',
        cerrarSesion: 'Cerrar sesión',
        promptNombre: 'Nombre:',
        promptCorreo: 'Correo electrónico:'
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
        derechos: '© 2026 RuTa Tropical. Todos los derechos reservados.',
        terminos: 'Términos y condiciones', cookies: 'Cookies'
      }
    },
    EN: {
      panelTitulo: 'SELECT YOUR LANGUAGE',
      buscarPh: 'Search language...',
      pageTitle: 'Contact us | Ruta Tropical',
      heroTitulo: 'Contact us',
      kicker: 'Talk to our team',
      heading: 'How to contact us?',
      intro: 'When planning your trip to your desired destination and looking for the best and most affordable vacation package, you can reach our customer care experts for proper assistance. Our team is available 24/7 to help with your inquiries and ensure a comfortable travel experience.',
      emailHeading: 'Email address',
      phoneHeading: 'Our phone',
      badgeVentas: 'Sales',
      badgeServicio: 'Customer care',
      lblNombre: 'First name',
      lblApellido: 'Last name',
      lblTelefono: 'Phone',
      lblCorreo: 'Email address',
      lblComentario: 'Your comment',
      lblCaptcha: 'Write the result of the sum',
      captchaPh: 'Your answer',
      btnEnviar: 'Send message',
      enviadoOk: 'Thank you! We received your message and will reply soon.',
      enviadoFail: 'We could not send your message. Please try again.',
      reglas: {
        nombre: 'Enter your first name.',
        apellido: 'Enter your last name.',
        telefono: 'Enter a valid phone number.',
        correo: 'Enter a valid email address.',
        comentario: 'Tell us a bit more (at least 10 characters).',
        captcha: 'The sum is incorrect.'
      },
      usuarioMenu: {
        anadir: '+ Add user',
        trips: 'Trips',
        ayudaFaq: 'Help/FAQ',
        cuenta: 'Your account',
        cerrarSesion: 'Log out',
        promptNombre: 'Name:',
        promptCorreo: 'Email:'
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
        derechos: '© 2026 RuTa Tropical. All rights reserved.',
        terminos: 'Terms and conditions', cookies: 'Cookies'
      }
    },
    FR: {
      panelTitulo: 'CHOISISSEZ VOTRE LANGUE',
      buscarPh: 'Rechercher une langue...',
      pageTitle: 'Contactez-nous | Ruta Tropical',
      heroTitulo: 'Contactez-nous',
      kicker: 'Parlez à notre équipe',
      heading: 'Comment nous contacter ?',
      intro: 'Lorsque vous préparez votre voyage et recherchez le meilleur forfait vacances au meilleur prix, contactez notre équipe de service client disponible 24h/24 et 7j/7 pour vous accompagner.',
      emailHeading: 'Adresse e-mail',
      phoneHeading: 'Notre téléphone',
      badgeVentas: 'Ventes',
      badgeServicio: 'Service client',
      lblNombre: 'Prénom',
      lblApellido: 'Nom',
      lblTelefono: 'Téléphone',
      lblCorreo: 'Adresse e-mail',
      lblComentario: 'Votre commentaire',
      lblCaptcha: 'Écrivez le résultat de l’addition',
      captchaPh: 'Votre réponse',
      btnEnviar: 'Envoyer le message',
      enviadoOk: 'Merci ! Nous avons bien reçu votre message et vous répondrons bientôt.',
      enviadoFail: 'Impossible d’envoyer votre message. Veuillez réessayer.',
      reglas: {
        nombre: 'Indiquez votre prénom.',
        apellido: 'Indiquez votre nom.',
        telefono: 'Indiquez un numéro de téléphone valide.',
        correo: 'Indiquez une adresse e-mail valide.',
        comentario: 'Donnez un peu plus de détails (au moins 10 caractères).',
        captcha: 'La somme est incorrecte.'
      },
      usuarioMenu: {
        anadir: '+ Ajouter un utilisateur',
        trips: 'Trips',
        ayudaFaq: 'Aide/FAQ',
        cuenta: 'Votre compte',
        cerrarSesion: 'Déconnexion',
        promptNombre: 'Nom :',
        promptCorreo: 'E-mail :'
      },
      menu: {
        vuelos: 'Vols', hoteles: 'Hôtels', autobus: 'Bus',
        ia: 'Planifier avec l’IA', planea: 'Planifiez vos voyages', nosotros: 'À propos',
        contacto: 'Contact', faq: 'FAQ', explorar: 'Explorer',
        terminos: 'Conditions générales', rastreador: 'Suivi des vols', viajes: 'Voyages',
        telLbl: 'Téléphone :', correoLbl: 'E-mail :'
      },
      footer: {
        desc: 'Votre agence de confiance pour découvrir le monde au meilleur prix. Comparez, économisez et voyagez sans limites.',
        colEmpresa: 'Entreprise', acercaDe: 'À propos', prensa: 'Presse', afiliados: 'Affiliés', socios: 'Partenaires',
        colContacto: 'Contact', ayudaFaq: 'Aide / FAQ', hoteles: 'Hôtels', publicidad: 'Publicité',
        colMas: 'Plus', tarifasAereas: 'Tarifs aériens', ofertasBajas: 'Petits prix', privacidad: 'Confidentialité',
        descargaApp: 'Télécharger l’appli', appTexto: 'Emportez vos réservations et offres partout.',
        playSmall: 'DISPONIBLE SUR', playStrong: 'Google Play',
        appleSmall: 'TÉLÉCHARGER DANS', appleStrong: 'App Store',
        derechos: '© 2026 RuTa Tropical. Tous droits réservés.',
        terminos: 'Conditions générales', cookies: 'Cookies'
      }
    },
    PT: {
      panelTitulo: 'SELECIONE SEU IDIOMA',
      buscarPh: 'Buscar idioma...',
      pageTitle: 'Fale conosco | Ruta Tropical',
      heroTitulo: 'Fale conosco',
      kicker: 'Fale com nossa equipe',
      heading: 'Como falar conosco?',
      intro: 'Ao planejar sua viagem e buscar o melhor pacote acessível, fale com nossa equipe de atendimento disponível 24 horas por dia, 7 dias por semana.',
      emailHeading: 'Endereço de e-mail',
      phoneHeading: 'Nosso telefone',
      badgeVentas: 'Vendas',
      badgeServicio: 'Atendimento',
      lblNombre: 'Nome',
      lblApellido: 'Sobrenome',
      lblTelefono: 'Telefone',
      lblCorreo: 'E-mail',
      lblComentario: 'Seu comentário',
      lblCaptcha: 'Escreva o resultado da soma',
      captchaPh: 'Sua resposta',
      btnEnviar: 'Enviar mensagem',
      enviadoOk: 'Obrigado! Recebemos sua mensagem e responderemos em breve.',
      enviadoFail: 'Não foi possível enviar sua mensagem. Tente novamente.',
      reglas: {
        nombre: 'Digite seu nome.',
        apellido: 'Digite seu sobrenome.',
        telefono: 'Digite um telefone válido.',
        correo: 'Digite um e-mail válido.',
        comentario: 'Conte um pouco mais (mínimo de 10 caracteres).',
        captcha: 'A soma está incorreta.'
      },
      usuarioMenu: {
        anadir: '+ Adicionar usuário',
        trips: 'Trips',
        ayudaFaq: 'Ajuda/FAQ',
        cuenta: 'Sua conta',
        cerrarSesion: 'Sair',
        promptNombre: 'Nome:',
        promptCorreo: 'E-mail:'
      },
      menu: {
        vuelos: 'Voos', hoteles: 'Hotéis', autobus: 'Ônibus',
        ia: 'Planejar com IA', planea: 'Planeje suas viagens', nosotros: 'Sobre nós',
        contacto: 'Contato', faq: 'Perguntas frequentes', explorar: 'Explorar',
        terminos: 'Termos e condições', rastreador: 'Rastreador de voos', viajes: 'Viagens',
        telLbl: 'Telefone:', correoLbl: 'E-mail:'
      },
      footer: {
        desc: 'Sua agência de confiança para descobrir o mundo pelo melhor preço. Compare, economize e voe sem limites.',
        colEmpresa: 'Empresa', acercaDe: 'Sobre nós', prensa: 'Imprensa', afiliados: 'Afiliados', socios: 'Parceiros',
        colContacto: 'Contato', ayudaFaq: 'Ajuda / FAQ', hoteles: 'Hotéis', publicidad: 'Publicidade',
        colMas: 'Mais', tarifasAereas: 'Passagens aéreas', ofertasBajas: 'Ofertas', privacidad: 'Privacidade',
        descargaApp: 'Baixe o app', appTexto: 'Leve suas reservas e ofertas sempre com você.',
        playSmall: 'DISPONÍVEL NO', playStrong: 'Google Play',
        appleSmall: 'BAIXAR NA', appleStrong: 'App Store',
        derechos: '© 2026 RuTa Tropical. Todos os direitos reservados.',
        terminos: 'Termos e condições', cookies: 'Cookies'
      }
    }
  };

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
      const t = textosContacto[idiomaActual] || textosContacto.ES;
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
        legal.querySelector('span').textContent = f.derechos;
        const links = legal.querySelectorAll('.rt-footer__legales-links a');
        if (links[0]) links[0].textContent = f.privacidad;
        if (links[1]) links[1].textContent = f.terminos;
        if (links[2]) links[2].textContent = f.cookies;
      }
    }

    function aplicarIdioma(codigo) {
      const t = textosContacto[codigo] || textosContacto.ES;
      idiomaActual = codigo;
      document.documentElement.lang = codigo.toLowerCase();
      document.documentElement.dir = codigo === 'AR' ? 'rtl' : 'ltr';
      document.title = t.pageTitle;

      if (idiomaCodigo) idiomaCodigo.textContent = codigo;
      if (idiomaTitulo) idiomaTitulo.textContent = t.panelTitulo;
      if (idiomaBuscar) idiomaBuscar.placeholder = t.buscarPh;

      const setT = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
      setT('hero-titulo', t.heroTitulo);
      setT('contact-kicker', t.kicker);
      setT('contact-heading', t.heading);
      setT('contact-intro', t.intro);
      setT('email-heading', t.emailHeading);
      setT('phone-heading', t.phoneHeading);
      setT('badge-ventas', t.badgeVentas);
      setT('badge-servicio', t.badgeServicio);
      setT('lbl-captcha', t.lblCaptcha);
      setT('btn-enviar', t.btnEnviar);

      const setLbl = (id, txt) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = `${txt}<sup>*</sup>`;
      };
      setLbl('lbl-nombre', t.lblNombre);
      setLbl('lbl-apellido', t.lblApellido);
      setLbl('lbl-telefono', t.lblTelefono);
      setLbl('lbl-correo', t.lblCorreo);
      setLbl('lbl-comentario', t.lblComentario);

      const capInput = document.getElementById('captcha');
      if (capInput) capInput.placeholder = t.captchaPh;

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
    pintarUsuario();
    cargarUsuarioBD();

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
        const um = (textosContacto[idiomaActual] || textosContacto.ES).usuarioMenu;
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

    // Formulario de contacto
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const question = document.getElementById('captcha-question');

    let answer = 0;
    function newCaptcha() {
      const a = Math.floor(Math.random() * 9) + 1;
      const b = Math.floor(Math.random() * 9) + 1;
      answer = a + b;
      if (question) question.textContent = `${a} + ${b} = ?`;
    }
    newCaptcha();

    const validators = {
      nombre: (v) => Boolean(v.trim()),
      apellido: (v) => Boolean(v.trim()),
      telefono: (v) => /^[\d\s()+-]{7,}$/.test(v.trim()),
      correo: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      comentario: (v) => v.trim().length >= 10,
      captcha: (v) => v.trim() !== '' && Number(v) === answer
    };

    function check(input) {
      const t = textosContacto[idiomaActual] || textosContacto.ES;
      const ok = validators[input.name] ? validators[input.name](input.value) : true;
      const message = ok ? '' : (t.reglas[input.name] || '');
      input.classList.toggle('invalid', !ok);
      input.setAttribute('aria-invalid', String(!ok));
      const errEl = input.parentElement ? input.parentElement.querySelector('.error') : null;
      if (errEl) errEl.textContent = message;
      return ok;
    }

    if (form) {
      form.querySelectorAll('input, textarea').forEach((el) => {
        el.addEventListener('blur', () => check(el));
        el.addEventListener('input', () => {
          if (el.classList.contains('invalid')) check(el);
        });
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const t = textosContacto[idiomaActual] || textosContacto.ES;
        if (status) {
          status.textContent = '';
          status.className = 'status';
        }

        const fields = [...form.querySelectorAll('input, textarea')];
        const valid = fields.map(check).every(Boolean);
        if (!valid) {
          const primero = fields.find((el) => el.classList.contains('invalid'));
          if (primero) primero.focus();
          return;
        }

        const button = form.querySelector('button[type="submit"]');
        if (button) button.disabled = true;

        try {
          const data = Object.fromEntries(new FormData(form));
          delete data.captcha;

          // Conecta aquí tu endpoint de contacto en el backend si lo deseas
          if (status) {
            status.textContent = t.enviadoOk;
            status.classList.add('ok');
          }
          form.reset();
          newCaptcha();
        } catch (_) {
          if (status) {
            status.textContent = t.enviadoFail;
            status.classList.add('fail');
          }
        } finally {
          if (button) button.disabled = false;
        }
      });
    }

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
})();

// Captcha antibots visual en canvas + anti-spam
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const canvas = document.getElementById('captcha-canvas');
    const refreshBtn = document.getElementById('captcha-refresh');
    const honeypot = document.getElementById('empresa_web');
    const formStartTime = Date.now();

    let answer = 0;

    function drawBotCaptcha() {
      const a = Math.floor(Math.random() * 9) + 1;
      const b = Math.floor(Math.random() * 9) + 1;
      answer = a + b;

      if (!canvas || !canvas.getContext) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Fondo sutil con cuadrícula
      ctx.fillStyle = '#f8fcfe';
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(23, 161, 207, 0.14)';
      ctx.lineWidth = 1;
      for (let x = 0; x <= w; x += 18) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += 13) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Líneas de ruido antibots
      for (let i = 0; i < 6; i++) {
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(14, 127, 166, 0.35)' : 'rgba(62, 95, 110, 0.28)';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(Math.random() * w, Math.random() * h);
        ctx.bezierCurveTo(
          Math.random() * w, Math.random() * h,
          Math.random() * w, Math.random() * h,
          Math.random() * w, Math.random() * h
        );
        ctx.stroke();
      }

      // Texto de la suma con ligera rotación por carácter
      const expr = `${a} + ${b} = ?`;
      const startX = 24;
      const stepX = 22;

      for (let i = 0; i < expr.length; i++) {
        const ch = expr[i];
        const angle = (Math.random() - 0.5) * 0.28;
        const offsetY = (Math.random() - 0.5) * 5;

        ctx.save();
        ctx.translate(startX + i * stepX, h / 2 + offsetY);
        ctx.rotate(angle);
        ctx.font = '800 22px Poppins, Arial, sans-serif';
        ctx.fillStyle = ch === '?' ? '#0e7fa6' : '#0f172a';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(ch, 0, 0);
        ctx.restore();
      }

      // Puntos de ruido
      for (let i = 0; i < 28; i++) {
        ctx.fillStyle = 'rgba(14, 127, 166, 0.45)';
        ctx.beginPath();
        ctx.arc(Math.random() * w, Math.random() * h, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    drawBotCaptcha();

    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        drawBotCaptcha();
        const capEl = document.getElementById('captcha');
        if (capEl) {
          capEl.value = '';
          capEl.classList.remove('invalid');
          const err = capEl.parentElement ? capEl.parentElement.querySelector('.error') : null;
          if (err) err.textContent = '';
          capEl.focus();
        }
      });
    }

    const validators = {
      nombre: (v) => Boolean(v.trim()),
      apellido: (v) => Boolean(v.trim()),
      telefono: (v) => /^[\d\s()+-]{7,}$/.test(v.trim()),
      correo: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      comentario: (v) => v.trim().length >= 10,
      captcha: (v) => v.trim() !== '' && Number(v) === answer
    };

    function check(input) {
      const t = textosContacto[idiomaActual] || textosContacto.ES;
      const ok = validators[input.name] ? validators[input.name](input.value) : true;
      const message = ok ? '' : (t.reglas[input.name] || '');
      input.classList.toggle('invalid', !ok);
      input.setAttribute('aria-invalid', String(!ok));
      const errEl = input.parentElement ? input.parentElement.querySelector('.error') : null;
      if (errEl) errEl.textContent = message;
      return ok;
    }

    if (form) {
      form.querySelectorAll('input, textarea').forEach((el) => {
        if (el.id === 'empresa_web') return;
        el.addEventListener('blur', () => check(el));
        el.addEventListener('input', () => {
          if (el.classList.contains('invalid')) check(el);
        });
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const t = textosContacto[idiomaActual] || textosContacto.ES;
        if (status) {
          status.textContent = '';
          status.className = 'status';
        }

        // Bloqueo de bots por campo trampa o envío demasiado rápido (< 2.5s)
        const elapsedMs = Date.now() - formStartTime;
        if ((honeypot && honeypot.value.trim() !== '') || elapsedMs < 2500) {
          if (status) {
            status.textContent = t.enviadoFail;
            status.classList.add('fail');
          }
          drawBotCaptcha();
          return;
        }

        const fields = [...form.querySelectorAll('input, textarea')].filter((el) => el.id !== 'empresa_web');
        const valid = fields.map(check).every(Boolean);
        if (!valid) {
          const primero = fields.find((el) => el.classList.contains('invalid'));
          if (primero) primero.focus();
          return;
        }

        const button = form.querySelector('button[type="submit"]');
        if (button) button.disabled = true;

        try {
          const data = Object.fromEntries(new FormData(form));
          delete data.captcha;
          delete data.empresa_web;

          if (status) {
            status.textContent = t.enviadoOk;
            status.classList.add('ok');
          }
          form.reset();
          drawBotCaptcha();
        } catch (_) {
          if (status) {
            status.textContent = t.enviadoFail;
            status.classList.add('fail');
          }
        } finally {
          if (button) button.disabled = false;
        }
      });
    }