(function () {
  const DB_KEY = "rt_usuarios_db";
  const SESSION_KEY = "rt_usuario_activo";
  const INICIO_URL = "../pagina principal/Inicio.html";

  const ICONO_OJO_ABIERTO = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `;

  const ICONO_OJO_CERRADO = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
  `;

  function obtenerUsuarios() {
    try {
      return JSON.parse(localStorage.getItem(DB_KEY)) || [];
    } catch {
      return [];
    }
  }

  function guardarUsuarios(lista) {
    localStorage.setItem(DB_KEY, JSON.stringify(lista));
  }

  function iniciarSesionUsuario(usuario) {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({
        nombre: usuario.nombre,
        correo: usuario.correo,
        proveedor: usuario.proveedor || "correo"
      })
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    const tabLogin = document.getElementById("tabLogin");
    const tabRegistro = document.getElementById("tabRegistro");
    const formLogin = document.getElementById("formLogin");
    const formRegistro = document.getElementById("formRegistro");
    const tituloAuth = document.getElementById("tituloAuth");
    const subtituloAuth = document.getElementById("subtituloAuth");
    const alerta = document.getElementById("rtAuthMensaje");
    const regNombre = document.getElementById("regNombre");
    const regCorreo = document.getElementById("regCorreo");

    let proveedorRegistro = "correo";

    function mostrarAlerta(texto, tipo) {
      alerta.textContent = texto;
      alerta.className = "rt-alerta-top " + tipo;
    }

    function limpiarAlerta() {
      alerta.className = "rt-alerta-top";
      alerta.textContent = "";
    }

    function irARegistro(proveedor = "correo") {
      proveedorRegistro = proveedor;
      limpiarAlerta();

      tabRegistro?.classList.add("activa");
      tabRegistro?.setAttribute("aria-selected", "true");
      tabLogin?.classList.remove("activa");
      tabLogin?.setAttribute("aria-selected", "false");

      if (tituloAuth) tituloAuth.innerHTML = 'Crear cuenta<span>.</span>';
      if (subtituloAuth) {
        subtituloAuth.textContent =
          proveedor === "correo"
            ? "Crea tu cuenta gratis y guarda tus destinos favoritos."
            : `Completa tus datos para registrarte con ${proveedor} en RuTa Tropical.`;
      }

      formLogin?.classList.add("oculto");
      formRegistro?.classList.remove("oculto");

      if (proveedor === "Instagram") {
        regNombre.placeholder = "Tu usuario de Instagram";
        regCorreo.placeholder = "correo@ejemplo.com";
      } else if (proveedor === "Google") {
        regNombre.placeholder = "Tu nombre de Google";
        regCorreo.placeholder = "tu-correo@gmail.com";
      } else {
        regNombre.placeholder = "Tu nombre o usuario";
        regCorreo.placeholder = "correo@ejemplo.com";
      }

      regNombre?.focus();
    }

    function irALogin() {
      proveedorRegistro = "correo";
      limpiarAlerta();

      tabLogin?.classList.add("activa");
      tabLogin?.setAttribute("aria-selected", "true");
      tabRegistro?.classList.remove("activa");
      tabRegistro?.setAttribute("aria-selected", "false");

      if (tituloAuth) tituloAuth.innerHTML = 'Iniciar sesión<span>.</span>';
      if (subtituloAuth) subtituloAuth.textContent = "Ingresa tus datos para acceder a tu cuenta y tus rutas.";

      formRegistro?.classList.add("oculto");
      formLogin?.classList.remove("oculto");
    }

    tabLogin?.addEventListener("click", irALogin);
    tabRegistro?.addEventListener("click", () => irARegistro("correo"));

    // Botones Instagram y Google: llevan directo al formulario de registro
    document.getElementById("btnSocialInstagram")?.addEventListener("click", () => {
      irARegistro("Instagram");
    });

    document.getElementById("btnSocialGoogle")?.addEventListener("click", () => {
      irARegistro("Google");
    });

    document.getElementById("btnModoExplorador")?.addEventListener("click", () => {
      iniciarSesionUsuario({ nombre: "Explorador", correo: "explorador@rutatropical.com", proveedor: "explorador" });
      mostrarAlerta("¡Modo Explorador activado! Entrando...", "exito");
      setTimeout(() => {
        window.location.href = INICIO_URL;
      }, 750);
    });

    document.querySelectorAll(".rt-ver-ojo").forEach((btn) => {
      btn.addEventListener("click", () => {
        const input = document.getElementById(btn.getAttribute("data-target"));
        if (!input) return;
        const esPassword = input.type === "password";
        input.type = esPassword ? "text" : "password";
        btn.innerHTML = esPassword ? ICONO_OJO_CERRADO : ICONO_OJO_ABIERTO;
      });
    });

    // Envío del formulario de registro
    formRegistro?.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = regNombre.value.trim().replace(/^@/, "");
      const correo = regCorreo.value.trim().toLowerCase();
      const password = document.getElementById("regPass").value;

      const usuarios = obtenerUsuarios();
      if (usuarios.some((u) => u.correo === correo)) {
        mostrarAlerta("Este correo ya está registrado. Cambia a iniciar sesión.", "error");
        return;
      }

      const nuevoUsuario = { nombre, correo, password, proveedor: proveedorRegistro };
      usuarios.push(nuevoUsuario);
      guardarUsuarios(usuarios);
      iniciarSesionUsuario(nuevoUsuario);

      mostrarAlerta("¡Cuenta creada con éxito! Entrando...", "exito");
      setTimeout(() => {
        window.location.href = INICIO_URL;
      }, 900);
    });

    // Envío del formulario de inicio de sesión
    formLogin?.addEventListener("submit", (e) => {
      e.preventDefault();
      const correo = document.getElementById("loginCorreo").value.trim().toLowerCase();
      const password = document.getElementById("loginPass").value;

      const usuarios = obtenerUsuarios();
      const encontrado = usuarios.find((u) => u.correo === correo && u.password === password);

      if (!encontrado) {
        mostrarAlerta("Correo o contraseña incorrectos. Si no tienes cuenta, créala.", "error");
        return;
      }

      iniciarSesionUsuario(encontrado);
      mostrarAlerta(`¡Hola de nuevo, ${encontrado.nombre}! Entrando...`, "exito");
      setTimeout(() => {
        window.location.href = INICIO_URL;
      }, 800);
    });
  });

  (function () {
  const SESSION_KEY = "rt_usuario_activo";
  const DB_KEY = "rt_usuarios_db";
  const LOGIN_URL = "login.html";

  function obtenerCuentaRegistrada() {
    try {
      const activaRaw = localStorage.getItem(SESSION_KEY);
      if (activaRaw) {
        const activa = JSON.parse(activaRaw);
        if (activa && (activa.nombre || activa.correo)) {
          return activa;
        }
      }

      const dbRaw = localStorage.getItem(DB_KEY);
      if (dbRaw) {
        const usuarios = JSON.parse(dbRaw);
        if (Array.isArray(usuarios) && usuarios.length > 0) {
          const ultima = usuarios[usuarios.length - 1];
          localStorage.setItem(SESSION_KEY, JSON.stringify(ultima));
          return ultima;
        }
      }
      return null;
    } catch {
      return null;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const btnTrigger = document.getElementById("rtBtnPerfilTrigger");
    const overlay = document.getElementById("rtPerfilOverlay");
    const btnCerrar = document.getElementById("rtBtnCerrarSesion");
    const btnAnadir = document.getElementById("rtBtnAnadirUsuario");

    const cuenta = obtenerCuentaRegistrada();

    if (cuenta) {
      const nombre = cuenta.nombre || cuenta.correo.split("@")[0];
      const correo = cuenta.correo || "";
      const inicial = nombre.trim().charAt(0).toUpperCase() || "J";

      const elNombre = document.getElementById("rtMenuNombre");
      const elCorreo = document.getElementById("rtMenuCorreo");
      const elAvatarMenu = document.getElementById("rtMenuAvatar");
      const elAvatarTrigger = document.getElementById("rtTriggerAvatar");
      const elLabelTrigger = document.getElementById("rtTriggerLabel");

      if (elNombre) elNombre.textContent = nombre;
      if (elCorreo) elCorreo.textContent = correo;
      if (elAvatarMenu) elAvatarMenu.textContent = inicial;
      if (elAvatarTrigger) elAvatarTrigger.textContent = inicial;
      if (elLabelTrigger) elLabelTrigger.textContent = nombre;
    }

    btnTrigger?.addEventListener("click", function () {
      const usuarioActual = obtenerCuentaRegistrada();
      if (!usuarioActual) {
        window.location.href = LOGIN_URL;
        return;
      }
      overlay?.classList.toggle("abierta");
    });

    overlay?.addEventListener("click", function (e) {
      if (e.target === overlay) {
        overlay.classList.remove("abierta");
      }
    });

    btnAnadir?.addEventListener("click", function () {
      window.location.href = LOGIN_URL;
    });

    btnCerrar?.addEventListener("click", function () {
      localStorage.removeItem(SESSION_KEY);
      overlay?.classList.remove("abierta");
      window.location.href = LOGIN_URL;
    });
  });
})();
(function () {
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
      sidebarLinks: [
        "planifica con IA",
        "planean tus viajes",
        "Sobre nosotros",
        "Contacto",
        "Preguntas frecuentes",
        "explorar",
        "Términos y condiciones",
        "rastraedor de vuelos",
        "viajes"
      ],
      telefonoLabel: "Teléfono:",
      correoLabel: "Correo:",
      // Panel Preferencias
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
      // Panel Cuenta
      cuentaTitulo: "Cuenta",
      redesTitulo: "Redes sociales",
      redesSub: "Vincula tus cuentas con RuTa Tropical",
      remitentesTitulo: "Remitentes autorizados",
      compartirTitulo: "Compartir viajes de forma automática",
      calendarioTitulo: "Calendario de Trips",
      usoTitulo: "Tu información de uso",
      revisarHistorial: "Revisar historial",
      eliminarCuenta: "Eliminar cuenta",
      // Panel Viajeros
      pasajerosTitulo: "Pasajeros",
      pasajeroPrincipal: "Pasajero principal",
      companerosTitulo: "Compañeros de viaje",
      // Panel Pagos
      pagosTitulo: "Métodos de pago guardados",
      anadirTarjeta: "Añadir una tarjeta de crédito",
      // Panel Notificaciones
      alertasTitulo: "Alertas",
      crearAlerta: "Crear alerta de precios",
      correoPrefTitulo: "Preferencias de correo",
      notifTripsTitulo: "Notificaciones de Trips",
      // Footer
      footerLema: "Tu agencia de confianza para descubrir el mundo al mejor precio. Compara, ahorra y vuela sin límites.",
      footerCols: ["Empresa", "Contacto", "Más"],
      footerAppTitulo: "Descarga la app",
      footerAppDesc: "Lleva tus reservas y ofertas siempre contigo.",
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
      sidebarLinks: [
        "Plan with AI",
        "Plan your trips",
        "About us",
        "Contact",
        "FAQ",
        "Explore",
        "Terms and conditions",
        "Flight tracker",
        "Trips"
      ],
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
      redesTitulo: "Social networks",
      redesSub: "Link your accounts with RuTa Tropical",
      remitentesTitulo: "Authorized senders",
      compartirTitulo: "Auto-share trips",
      calendarioTitulo: "Trips Calendar",
      usoTitulo: "Your usage data",
      revisarHistorial: "Review history",
      eliminarCuenta: "Delete account",
      pasajerosTitulo: "Travelers",
      pasajeroPrincipal: "Primary traveler",
      companerosTitulo: "Travel companions",
      pagosTitulo: "Saved payment methods",
      anadirTarjeta: "Add a credit card",
      alertasTitulo: "Alerts",
      crearAlerta: "Create price alert",
      correoPrefTitulo: "Email preferences",
      notifTripsTitulo: "Trips notifications",
      footerLema: "Your trusted agency to discover the world at the best price. Compare, save, and fly without limits.",
      footerCols: ["Company", "Contact", "More"],
      footerAppTitulo: "Download the app",
      footerAppDesc: "Take your bookings and deals with you everywhere.",
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
      sidebarLinks: [
        "Planifier avec l'IA",
        "Planifiez vos voyages",
        "À propos",
        "Contact",
        "FAQ",
        "Explorer",
        "Conditions générales",
        "Suivi des vols",
        "Voyages"
      ],
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
      redesTitulo: "Réseaux sociaux",
      redesSub: "Associez vos comptes à RuTa Tropical",
      remitentesTitulo: "Expéditeurs autorisés",
      compartirTitulo: "Partage automatique des voyages",
      calendarioTitulo: "Calendrier Trips",
      usoTitulo: "Vos données d'utilisation",
      revisarHistorial: "Consulter l'historique",
      eliminarCuenta: "Supprimer le compte",
      pasajerosTitulo: "Voyageurs",
      pasajeroPrincipal: "Voyageur principal",
      companerosTitulo: "Compagnons de voyage",
      pagosTitulo: "Moyens de paiement enregistrés",
      anadirTarjeta: "Ajouter une carte de crédit",
      alertasTitulo: "Alertes",
      crearAlerta: "Créer une alerte de prix",
      correoPrefTitulo: "Préférences d'e-mail",
      notifTripsTitulo: "Notifications Trips",
      footerLema: "Votre agence de confiance pour découvrir le monde au meilleur prix. Comparez, économisez et volez sans limites.",
      footerCols: ["Entreprise", "Contact", "Plus"],
      footerAppTitulo: "Téléchargez l'application",
      footerAppDesc: "Emportez vos réservations et offres partout avec vous.",
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
      sidebarLinks: [
        "Planejar com IA",
        "Planeje suas viagens",
        "Sobre nós",
        "Contato",
        "Perguntas frequentes",
        "Explorar",
        "Termos e condições",
        "Rastreador de voos",
        "Viagens"
      ],
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
      redesTitulo: "Redes sociais",
      redesSub: "Vincule suas contas à RuTa Tropical",
      remitentesTitulo: "Remetentes autorizados",
      compartirTitulo: "Compartilhar viagens automaticamente",
      calendarioTitulo: "Calendário Trips",
      usoTitulo: "Seus dados de uso",
      revisarHistorial: "Revisar histórico",
      eliminarCuenta: "Excluir conta",
      pasajerosTitulo: "Viajantes",
      pasajeroPrincipal: "Viajante principal",
      companerosTitulo: "Companheiros de viagem",
      pagosTitulo: "Métodos de pagamento salvos",
      anadirTarjeta: "Adicionar cartão de crédito",
      alertasTitulo: "Alertas",
      crearAlerta: "Criar alerta de preços",
      correoPrefTitulo: "Preferências de e-mail",
      notifTripsTitulo: "Notificações do Trips",
      footerLema: "Sua agência de confiança para descobrir o mundo pelo melhor preço. Compare, economize e voe sem limites.",
      footerCols: ["Empresa", "Contato", "Mais"],
      footerAppTitulo: "Baixe o aplicativo",
      footerAppDesc: "Leve suas reservas e ofertas sempre com você.",
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
      sidebarLinks: [
        "Pianifica con l'IA",
        "Pianifica i tuoi viaggi",
        "Chi siamo",
        "Contatti",
        "Domande frequenti",
        "Esplora",
        "Termini e condizioni",
        "Tracker voli",
        "Viaggi"
      ],
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
      redesTitulo: "Social network",
      redesSub: "Collega i tuoi account a RuTa Tropical",
      remitentesTitulo: "Mittenti autorizzati",
      compartirTitulo: "Condividi viaggi automaticamente",
      calendarioTitulo: "Calendario Trips",
      usoTitulo: "I tuoi dati di utilizzo",
      revisarHistorial: "Rivedi cronologia",
      eliminarCuenta: "Elimina account",
      pasajerosTitulo: "Viaggiatori",
      pasajeroPrincipal: "Viaggiatore principale",
      companerosTitulo: "Compagni di viaggio",
      pagosTitulo: "Metodi di pagamento salvati",
      anadirTarjeta: "Aggiungi carta di credito",
      alertasTitulo: "Avvisi",
      crearAlerta: "Crea avviso prezzo",
      correoPrefTitulo: "Preferenze email",
      notifTripsTitulo: "Notifiche Trips",
      footerLema: "La tua agenzia di fiducia per scoprire il mondo al miglior prezzo. Confronta, risparmia e vola senza limiti.",
      footerCols: ["Azienda", "Contatti", "Altro"],
      footerAppTitulo: "Scarica l'app",
      footerAppDesc: "Porta sempre con te prenotazioni e offerte.",
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
      sidebarLinks: [
        "Mit KI planen",
        "Reisen planen",
        "Über uns",
        "Kontakt",
        "Häufige Fragen",
        "Entdecken",
        "AGB",
        "Flugtracker",
        "Reisen"
      ],
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
      redesTitulo: "Soziale Netzwerke",
      redesSub: "Verknüpfe deine Konten mit RuTa Tropical",
      remitentesTitulo: "Autorisierte Absender",
      compartirTitulo: "Reisen automatisch teilen",
      calendarioTitulo: "Trips-Kalender",
      usoTitulo: "Deine Nutzungsdaten",
      revisarHistorial: "Verlauf prüfen",
      eliminarCuenta: "Konto löschen",
      pasajerosTitulo: "Reisende",
      pasajeroPrincipal: "Hauptreisender",
      companerosTitulo: "Mitreisende",
      pagosTitulo: "Gespeicherte Zahlungsmethoden",
      anadirTarjeta: "Kreditkarte hinzufügen",
      alertasTitulo: "Benachrichtigungen",
      crearAlerta: "Preisalarm erstellen",
      correoPrefTitulo: "E-Mail-Einstellungen",
      notifTripsTitulo: "Trips-Benachrichtigungen",
      footerLema: "Deine vertrauenswürdige Agentur, um die Welt zum besten Preis zu entdecken. Vergleichen, sparen und grenzenlos fliegen.",
      footerCols: ["Unternehmen", "Kontakt", "Mehr"],
      footerAppTitulo: "App herunterladen",
      footerAppDesc: "Nimm deine Buchungen und Angebote überallhin mit.",
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
      sidebarLinks: [
        "AIで計画",
        "旅行を計画する",
        "私たちについて",
        "お問い合わせ",
        "よくある質問",
        "探索する",
        "利用規約",
        "フライト追跡",
        "旅行"
      ],
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
      redesTitulo: "ソーシャルメディア",
      redesSub: "アカウントをRuTa Tropicalと連携する",
      remitentesTitulo: "許可された送信者",
      compartirTitulo: "旅行を自動共有",
      calendarioTitulo: "Tripsカレンダー",
      usoTitulo: "利用データ",
      revisarHistorial: "履歴を確認",
      eliminarCuenta: "アカウントを削除",
      pasajerosTitulo: "旅行者",
      pasajeroPrincipal: "代表旅行者",
      companerosTitulo: "同行者",
      pagosTitulo: "保存されたお支払い方法",
      anadirTarjeta: "クレジットカードを追加",
      alertasTitulo: "アラート",
      crearAlerta: "価格アラートを作成",
      correoPrefTitulo: "メール設定",
      notifTripsTitulo: "Trips通知",
      footerLema: "世界をお得に発見するための信頼できるトラベルパートナー。比較・節約して自由に旅しよう。",
      footerCols: ["会社情報", "お問い合わせ", "その他"],
      footerAppTitulo: "アプリをダウンロード",
      footerAppDesc: "予約やお得な情報をいつでも手元に。",
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

    document.documentElement.lang = lang;
    if (idiomaTexto) idiomaTexto.textContent = code;

    const svgBandera = opcionBtn.querySelector(".rt-bandera-img");
    if (banderaBtn && svgBandera) {
      banderaBtn.innerHTML = svgBandera.innerHTML;
    }

    // Menú lateral
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

    // Hero y pestañas
    setText(".rt-cuenta-titulo", t.bienvenida);
    const etiquetasHero = document.querySelectorAll(".rt-cuenta-etiqueta");
    if (etiquetasHero[1]) etiquetasHero[1].textContent = t.origen;
    document.querySelectorAll(".rt-cuenta-tab").forEach((tab, idx) => {
      if (t.tabs[idx]) tab.textContent = t.tabs[idx];
    });

    // Panel Resumen
    const resSub = document.querySelectorAll("#panel-resumen .rt-cuenta-subtitulo");
    if (resSub[0]) resSub[0].textContent = t.estadisticas;
    if (resSub[1]) resSub[1].textContent = t.busquedas;
    setText("#panel-resumen .rt-banner-contenido h3", t.sinEstadisticas);
    setText("#panel-resumen .rt-banner-contenido p", t.subEstadisticas);
    setText("#panel-resumen .rt-cuenta-btn-oscuro", t.verViajes);

    // Panel Preferencias (como en image_9e84ad.png)
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

    const ayudas = document.querySelectorAll("#panel-preferencias .rt-pref-ayuda");
    ayudas.forEach((ayuda, i) => {
      ayuda.textContent = i % 2 === 0 ? t.preferidasAyuda : t.omitirAyuda;
    });

    // Otros paneles
    setText("#panel-cuenta .rt-cuenta-titulo-seccion", t.cuentaTitulo);
    setText("#rtBtnRevisarHistorial", t.revisarHistorial);
    setText("#rtBtnEliminarCuenta", t.eliminarCuenta);
    setText("#panel-viajeros .rt-cuenta-titulo-seccion", t.pasajerosTitulo);
    setText("#panel-pagos .rt-cuenta-titulo-seccion", t.pagosTitulo);
    setText("#rtBtnAnadirTarjeta", t.anadirTarjeta);
    setText("#panel-notificaciones .rt-cuenta-titulo-seccion", t.alertasTitulo);
    setText("#rtBtnCrearAlerta span", t.crearAlerta);

    // Footer
    setText(".rt-footer-lema", t.footerLema);
    const colTitulos = document.querySelectorAll(".rt-footer-col-titulo");
    colTitulos.forEach((col, i) => {
      if (t.footerCols[i]) col.textContent = t.footerCols[i];
    });
    setText(".rt-footer-app-col .rt-footer-col-titulo", t.footerAppTitulo);
    setText(".rt-footer-app-desc", t.footerAppDesc);
    setText(".rt-footer-aero-titulo", t.footerAeroTitulo);

    document.querySelectorAll(".rt-idioma-opcion").forEach((op) => {
      op.classList.toggle("activa", op.dataset.pais === pais);
    });
    localStorage.setItem("rt_pais", pais);
  }

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
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
})();
(function () {
  const box = document.getElementById("rtIdiomaBox");
  const btn = document.getElementById("rtTopIdiomaBtn");
  const menu = document.getElementById("rtIdiomaMenu");
  const idiomaTexto = document.getElementById("rtTopIdiomaTexto");
  const banderaBtn = document.getElementById("rtTopBanderaImg");
  if (!box || !btn || !menu) return;

  const traducciones = {
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
      sidebarLinks: [
        "planifica con IA",
        "planean tus viajes",
        "Sobre nosotros",
        "Contacto",
        "Preguntas frecuentes",
        "explorar",
        "Términos y condiciones",
        "rastraedor de vuelos",
        "viajes"
      ],
      telefonoLabel: "Teléfono:",
      correoLabel: "Correo:"
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
      sidebarLinks: [
        "Plan with AI",
        "Plan your trips",
        "About us",
        "Contact",
        "FAQ",
        "Explore",
        "Terms and conditions",
        "Flight tracker",
        "Trips"
      ],
      telefonoLabel: "Phone:",
      correoLabel: "Email:"
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
      sidebarLinks: [
        "Planifier avec l'IA",
        "Planifiez vos voyages",
        "À propos",
        "Contact",
        "FAQ",
        "Explorer",
        "Conditions générales",
        "Suivi des vols",
        "Voyages"
      ],
      telefonoLabel: "Téléphone :",
      correoLabel: "E-mail :"
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
      sidebarLinks: [
        "Planejar com IA",
        "Planeje suas viagens",
        "Sobre nós",
        "Contato",
        "Perguntas frequentes",
        "Explorar",
        "Termos e condições",
        "Rastreador de voos",
        "Viagens"
      ],
      telefonoLabel: "Telefone:",
      correoLabel: "E-mail:"
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
      sidebarLinks: [
        "Pianifica con l'IA",
        "Pianifica i tuoi viaggi",
        "Chi siamo",
        "Contatti",
        "Domande frequenti",
        "Esplora",
        "Termini e condizioni",
        "Tracker voli",
        "Viaggi"
      ],
      telefonoLabel: "Telefono:",
      correoLabel: "Email:"
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
      sidebarLinks: [
        "Mit KI planen",
        "Reisen planen",
        "Über uns",
        "Kontakt",
        "Häufige Fragen",
        "Entdecken",
        "AGB",
        "Flugtracker",
        "Reisen"
      ],
      telefonoLabel: "Telefon:",
      correoLabel: "E-Mail:"
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
      sidebarLinks: [
        "AIで計画",
        "旅行を計画する",
        "私たちについて",
        "お問い合わせ",
        "よくある質問",
        "探索する",
        "利用規約",
        "フライト追跡",
        "旅行"
      ],
      telefonoLabel: "電話：",
      correoLabel: "メール："
    }
  };

  function aplicarPaisIdioma(opcionBtn) {
    if (!opcionBtn) return;
    const pais = opcionBtn.dataset.pais || "do";
    const lang = opcionBtn.dataset.lang || "es";
    const code = opcionBtn.dataset.code || "ES";
    const t = traducciones[lang] || traducciones.es;

    document.documentElement.lang = lang;
    if (idiomaTexto) idiomaTexto.textContent = code;

    const svgBandera = opcionBtn.querySelector(".rt-bandera-img");
    if (banderaBtn && svgBandera) {
      banderaBtn.innerHTML = svgBandera.innerHTML;
    }

    // Menú lateral principal (Vuelos, Hoteles, autobus)
    const navItemsSpan = document.querySelectorAll(".rt-cuenta-nav-item span");
    navItemsSpan.forEach((span, idx) => {
      if (t.sidebarMain[idx]) span.textContent = t.sidebarMain[idx];
    });

    // Enlaces secundarios del menú lateral
    const linkSimples = document.querySelectorAll(".rt-cuenta-link-simple");
    linkSimples.forEach((link, idx) => {
      if (!t.sidebarLinks[idx]) return;
      const icono = link.querySelector("i");
      link.textContent = " " + t.sidebarLinks[idx];
      if (icono) link.prepend(icono);
    });

    // Etiquetas de Teléfono y Correo en el menú lateral
    const contactoSmalls = document.querySelectorAll(".rt-sidebar-contacto-card .rt-contacto-texto small");
    if (contactoSmalls[0]) contactoSmalls[0].textContent = t.telefonoLabel;
    if (contactoSmalls[1]) contactoSmalls[1].textContent = t.correoLabel;

    // Encabezado y pestañas
    const titulo = document.querySelector(".rt-cuenta-titulo");
    if (titulo) titulo.textContent = t.bienvenida;

    const etiquetas = document.querySelectorAll(".rt-cuenta-etiqueta");
    if (etiquetas[1]) etiquetas[1].textContent = t.origen;

    const tabs = document.querySelectorAll(".rt-cuenta-tab");
    tabs.forEach((tab, idx) => {
      if (t.tabs[idx]) tab.textContent = t.tabs[idx];
    });

    // Panel resumen
    const subtitulos = document.querySelectorAll("#panel-resumen .rt-cuenta-subtitulo");
    if (subtitulos[0]) subtitulos[0].textContent = t.estadisticas;
    if (subtitulos[1]) subtitulos[1].textContent = t.busquedas;

    const bannerH3 = document.querySelector("#panel-resumen .rt-banner-contenido h3");
    if (bannerH3) bannerH3.textContent = t.sinEstadisticas;

    const bannerP = document.querySelector("#panel-resumen .rt-banner-contenido p");
    if (bannerP) bannerP.textContent = t.subEstadisticas;

    const btnViajes = document.querySelector("#panel-resumen .rt-cuenta-btn-oscuro");
    if (btnViajes) btnViajes.textContent = t.verViajes;

    document.querySelectorAll(".rt-idioma-opcion").forEach((op) => {
      op.classList.toggle("activa", op.dataset.pais === pais);
    });
    localStorage.setItem("rt_pais", pais);
  }

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
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
})();

(function () {
  // Busca el avatar grande, el input de archivo y el avatar pequeño de la barra superior
  const avatarGrande =
    document.querySelector(".rt-cuenta-avatar-img, .rt-perfil-foto-img, .rt-avatar-grande img, #rtAvatarImg") ||
    document.querySelector("img[alt*='avatar' i], img[alt*='perfil' i]");

  const inputFoto =
    document.querySelector("input[type='file'][accept*='image']") ||
    document.getElementById("rtInputAvatar");

  const avatarTopContenedor =
    document.querySelector(".rt-cuenta-topbar-avatar, .rt-topbar-avatar, .rt-avatar-mini, .rt-cuenta-avatar-mini") ||
    document.querySelector(".rt-cuenta-topbar-acciones > :last-child");

  function aplicarFotoEnAmbos(src) {
    if (!src) return;

    if (avatarGrande) {
      avatarGrande.src = src;
      avatarGrande.style.display = "block";
    }

    if (avatarTopContenedor) {
      let imgTop = avatarTopContenedor.querySelector("img");
      if (!imgTop) {
        avatarTopContenedor.innerHTML = "";
        imgTop = document.createElement("img");
        imgTop.alt = "Foto de perfil";
        imgTop.style.width = "100%";
        imgTop.style.height = "100%";
        imgTop.style.objectFit = "cover";
        imgTop.style.borderRadius = "50%";
        imgTop.style.display = "block";
        avatarTopContenedor.appendChild(imgTop);
      }
      imgTop.src = src;
      imgTop.style.background = "transparent";
      imgTop.style.color = "transparent";
    }

    try {
      localStorage.setItem("rt_avatar_foto", src);
    } catch (e) {}
  }

  // Si ya hay una foto guardada en localStorage, la restaura en ambos avatares
  const fotoGuardada = localStorage.getItem("rt_avatar_foto");
  if (fotoGuardada) {
    aplicarFotoEnAmbos(fotoGuardada);
  } else if (avatarGrande && avatarGrande.getAttribute("src")) {
    aplicarFotoEnAmbos(avatarGrande.getAttribute("src"));
  }

  // Cuando el usuario selecciona una foto nueva desde el input de archivo
  if (inputFoto) {
    inputFoto.addEventListener("change", function () {
      const archivo = this.files && this.files[0];
      if (!archivo) return;

      const lector = new FileReader();
      lector.onload = function (evento) {
        if (evento.target && evento.target.result) {
          aplicarFotoEnAmbos(evento.target.result);
        }
      };
      lector.readAsDataURL(archivo);
    });
  }

  // Observa cambios en el src del avatar grande por si otro script de tu página lo actualiza
  if (avatarGrande) {
    const observador = new MutationObserver(() => {
      if (avatarGrande.src && !avatarGrande.src.endsWith("undefined")) {
        aplicarFotoEnAmbos(avatarGrande.src);
      }
    });
    observador.observe(avatarGrande, { attributes: true, attributeFilter: ["src"] });
  }
})();
})();

