(() => {
  const idiomasCatalogo = [
    { nombre: 'Español', region: 'España / Latinoamérica', codigo: 'ES', bandera: 'https://flagcdn.com/w40/es.png' },
    { nombre: 'English', region: 'United States', codigo: 'EN', bandera: 'https://flagcdn.com/w40/us.png' },
    { nombre: 'Français', region: 'France', codigo: 'FR', bandera: 'https://flagcdn.com/w40/fr.png' },
    { nombre: 'Português', region: 'Brasil / Portugal', codigo: 'PT', bandera: 'https://flagcdn.com/w40/pt.png' },
    { nombre: 'Italiano', region: 'Italia', codigo: 'IT', bandera: 'https://flagcdn.com/w40/it.png' },
    { nombre: 'Deutsch', region: 'Deutschland', codigo: 'DE', bandera: 'https://flagcdn.com/w40/de.png' },
    { nombre: '日本語', region: '日本 (Japón)', codigo: 'JA', bandera: 'https://flagcdn.com/w40/jp.png' },
    { nombre: '한국어', region: '대한민국 (Corea)', codigo: 'KO', bandera: 'https://flagcdn.com/w40/kr.png' },
    { nombre: '中文', region: '中国 (Chino)', codigo: 'ZH', bandera: 'https://flagcdn.com/w40/cn.png' },
    { nombre: 'Русский', region: 'Россия', codigo: 'RU', bandera: 'https://flagcdn.com/w40/ru.png' },
    { nombre: 'العربية', region: 'الوطن العربي', codigo: 'AR', bandera: 'https://flagcdn.com/w40/sa.png' },
    { nombre: 'Nederlands', region: 'Nederland', codigo: 'NL', bandera: 'https://flagcdn.com/w40/nl.png' }
  ];

  const textosErrores = {
    ES: {
      panelTitulo: 'SELECCIONA TU IDIOMA',
      buscarPh: 'Buscar idioma...',
      pageTitle: 'Informar sobre errores – Ruta Tropical',
      titulo: 'Informar sobre errores',
      avisoSuperior: 'Aunque nos esforzamos por encontrar precios exactos, a veces no es posible. Llena el siguiente formulario, el cual notificará a nuestros programadores para que investiguen el problema. Con tu ayuda, los resultados de búsqueda mejorarán para todos.',
      email: 'Email',
      emailPh: 'nombre@ejemplo.com',
      nombre: 'Nombre (opcional)',
      nombrePh: 'Introduce tu nombre',
      asunto: 'Asunto',
      asuntos: {
        precio: 'Encontramos un error en el precio',
        cambio: 'El precio cambió al reservar',
        disponibilidad: 'Disponibilidad incorrecta',
        otro: 'Otro error'
      },
      mensaje: 'Cuéntanos qué buscaste, el precio que viste y qué sucedió.',
      mensajePh: 'Indica ruta o destino, fecha, precio mostrado y lo que ocurrió...',
      avisoPrecios: 'Hacemos todo lo posible por darte información precisa, pero <a href="#">no garantizamos los precios ni la disponibilidad</a>.',
      captura: 'Captura de pantalla',
      elegir: 'Elegir archivos',
      sinArchivo: 'Ningún archivo seleccionado',
      ayudaArchivo: 'Se permiten archivos que no superen los 5 MB cada uno. Total permitido: 20 MB. Formatos aceptados: jpeg, jpg, png, gif, bmp.',
      privacidad: 'Ten en cuenta que Ruta Tropical podrá compartir partes de la información proporcionada, incluyendo datos personales, con los proveedores de viaje mencionados en los comentarios.',
      enviar: 'Enviar comentario',
      enviado: '¡Gracias! Tu reporte de error ha sido enviado a Ruta Tropical.',
      ayudaLat: 'Consulta nuestra sección de <a href="ayuda.html">Ayuda</a> en línea antes de enviarnos tus comentarios.',
      idiomasLat: 'Ruta Tropical busca las mejores ofertas de viajes en más de <a href="#">30 idiomas</a>, y nuestros especialistas estarán encantados de recibir tus comentarios. Pruébalo.',
      asistente: 'Asistente Virtual',
      chat: 'Chat',
      usuarioMenu: {
        conectado: 'Conectado',
        anadir: 'Añadir usuario',
        trips: 'Trips',
        ayudaFaq: 'Ayuda/Preguntas frecuentes',
        cuenta: 'Tu cuenta',
        cerrarSesion: 'Cerrar sesión',
        iniciarSesion: 'Iniciar sesión',
        invitado: 'Invitado',
        sesionCerrada: 'Sesión cerrada',
        promptNombre: 'Nombre del nuevo usuario:',
        promptCorreo: 'Correo electrónico:',
        usuarioActivado: 'Usuario "{nombre}" activado.',
        sesionIniciada: 'Sesión iniciada como {nombre}.',
        sesionFinalizada: 'Has cerrado sesión.'
      },
      menu: {
        vuelos: 'Vuelos',
        hoteles: 'Hoteles',
        autobus: 'Autobús',
        ia: 'planifica con IA',
        planea: 'planean tus viajes',
        nosotros: 'Sobre nosotros',
        contacto: 'Contacto',
        faq: 'Preguntas frecuentes',
        explorar: 'explorar',
        terminos: 'Términos y condiciones',
        rastreador: 'rastraedor de vuelos',
        viajes: 'viajes',
        telLbl: 'Teléfono:',
        correoLbl: 'Correo:'
      },
      footer: {
        desc: 'Tu agencia de confianza para descubrir el mundo al mejor precio. Compara, ahorra y vuela sin límites.',
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
        playSmall: 'DISPONIBLE EN',
        playStrong: 'Google Play',
        appleSmall: 'CONSÍGUELO EN',
        appleStrong: 'App Store',
        derechos: '© 2026 Ɽ𝕦Ƭ𝕒 ƬⱤ𝕠℘ɩ𝕔𝕒𝕝. Todos los derechos reservados.',
        terminos: 'Términos y condiciones',
        cookies: 'Cookies'
      }
    },
    EN: {
      panelTitulo: 'SELECT YOUR LANGUAGE',
      buscarPh: 'Search language...',
      pageTitle: 'Report an error – Ruta Tropical',
      titulo: 'Report an error',
      avisoSuperior: 'While we strive to find accurate prices, sometimes it is not possible. Fill out the form below to notify our developers so they can investigate the issue. With your help, search results will improve for everyone.',
      email: 'Email',
      emailPh: 'name@example.com',
      nombre: 'Name (optional)',
      nombrePh: 'Enter your name',
      asunto: 'Subject',
      asuntos: {
        precio: 'We found a price error',
        cambio: 'The price changed when booking',
        disponibilidad: 'Incorrect availability',
        otro: 'Other error'
      },
      mensaje: 'Tell us what you searched for, the price you saw, and what happened.',
      mensajePh: 'Include route or destination, date, shown price, and what happened...',
      avisoPrecios: 'We do our best to provide accurate information, but <a href="#">we do not guarantee prices or availability</a>.',
      captura: 'Screenshot',
      elegir: 'Choose files',
      sinArchivo: 'No file selected',
      ayudaArchivo: 'Files up to 5 MB each are allowed. Total allowed: 20 MB. Accepted formats: jpeg, jpg, png, gif, bmp.',
      privacidad: 'Please note that Ruta Tropical may share parts of the information provided, including personal data, with travel providers mentioned in your feedback.',
      enviar: 'Send feedback',
      enviado: 'Thank you! Your error report has been sent to Ruta Tropical.',
      ayudaLat: 'Check our online <a href="ayuda.html">Help</a> section before sending us your feedback.',
      idiomasLat: 'Ruta Tropical searches for the best travel deals in over <a href="#">30 languages</a>, and our specialists will be happy to receive your feedback. Try it.',
      asistente: 'Virtual Assistant',
      chat: 'Chat',
      usuarioMenu: {
        conectado: 'Connected',
        anadir: 'Add user',
        trips: 'Trips',
        ayudaFaq: 'Help/FAQ',
        cuenta: 'Your account',
        cerrarSesion: 'Log out',
        iniciarSesion: 'Log in',
        invitado: 'Guest',
        sesionCerrada: 'Logged out',
        promptNombre: 'New user name:',
        promptCorreo: 'Email address:',
        usuarioActivado: 'User "{nombre}" activated.',
        sesionIniciada: 'Logged in as {nombre}.',
        sesionFinalizada: 'You have logged out.'
      },
      menu: {
        vuelos: 'Flights',
        hoteles: 'Hotels',
        autobus: 'Bus',
        ia: 'plan with AI',
        planea: 'plan your trips',
        nosotros: 'About us',
        contacto: 'Contact',
        faq: 'FAQ',
        explorar: 'explore',
        terminos: 'Terms and conditions',
        rastreador: 'flight tracker',
        viajes: 'trips',
        telLbl: 'Phone:',
        correoLbl: 'Email:'
      },
      footer: {
        desc: 'Your trusted agency to discover the world at the best price. Compare, save, and fly without limits.',
        colEmpresa: 'Company',
        acercaDe: 'About us',
        prensa: 'Press',
        afiliados: 'Affiliates',
        socios: 'Partners',
        colContacto: 'Contact',
        ayudaFaq: 'Help / FAQ',
        hoteles: 'Hotels',
        publicidad: 'Advertising',
        colMas: 'More',
        tarifasAereas: 'Airfares',
        ofertasBajas: 'Low deals',
        privacidad: 'Privacy',
        descargaApp: 'Get the app',
        appTexto: 'Take your bookings and deals with you everywhere.',
        playSmall: 'GET IT ON',
        playStrong: 'Google Play',
        appleSmall: 'DOWNLOAD ON THE',
        appleStrong: 'App Store',
        derechos: '© 2026 Ɽ𝕦Ƭ𝕒 ƬⱤ𝕠℘ɩ𝕔𝕒𝕝. All rights reserved.',
        terminos: 'Terms and conditions',
        cookies: 'Cookies'
      }
    },
    FR: {
      panelTitulo: 'CHOISISSEZ VOTRE LANGUE',
      buscarPh: 'Rechercher une langue...',
      pageTitle: 'Signaler une erreur – Ruta Tropical',
      titulo: 'Signaler une erreur',
      avisoSuperior: 'Bien que nous nous efforcions de trouver des prix exacts, ce n’est pas toujours possible. Remplissez le formulaire ci-dessous afin que nos développeurs enquêtent sur le problème.',
      email: 'E-mail',
      emailPh: 'nom@exemple.com',
      nombre: 'Nom (facultatif)',
      nombrePh: 'Entrez votre nom',
      asunto: 'Sujet',
      asuntos: {
        precio: 'Erreur de prix détectée',
        cambio: 'Le prix a changé lors de la réservation',
        disponibilidad: 'Disponibilité incorrecte',
        otro: 'Autre erreur'
      },
      mensaje: 'Indiquez ce que vous avez recherché, le prix affiché et ce qu’il s’est passé.',
      mensajePh: 'Indiquez l’itinéraire ou la destination, la date, le prix affiché et le problème...',
      avisoPrecios: 'Nous faisons de notre mieux pour fournir des informations précises, mais <a href="#">nous ne garantissons pas les prix ni la disponibilité</a>.',
      captura: "Capture d'écran",
      elegir: 'Choisir des fichiers',
      sinArchivo: 'Aucun fichier sélectionné',
      ayudaArchivo: 'Les fichiers de 5 Mo maximum chacun sont autorisés. Total autorisé : 20 Mo. Formats acceptés : jpeg, jpg, png, gif, bmp.',
      privacidad: 'Veuillez noter que Ruta Tropical peut partager certaines informations fournies avec les fournisseurs de voyage mentionnés.',
      enviar: 'Envoyer le commentaire',
      enviado: 'Merci ! Votre signalement d’erreur a bien été envoyé à Ruta Tropical.',
      ayudaLat: 'Consultez notre section <a href="ayuda.html">Aide</a> en ligne avant de nous envoyer vos commentaires.',
      idiomasLat: 'Ruta Tropical recherche les meilleures offres de voyage dans plus de <a href="#">30 langues</a> et nos spécialistes seront ravis de lire vos retours.',
      asistente: 'Assistant Virtuel',
      chat: 'Chat',
      usuarioMenu: {
        conectado: 'Connecté',
        anadir: 'Ajouter un utilisateur',
        trips: 'Voyages',
        ayudaFaq: 'Aide/FAQ',
        cuenta: 'Votre compte',
        cerrarSesion: 'Déconnexion',
        iniciarSesion: 'Connexion',
        invitado: 'Invité',
        sesionCerrada: 'Déconnecté',
        promptNombre: 'Nom du nouvel utilisateur :',
        promptCorreo: 'Adresse e-mail :',
        usuarioActivado: 'Utilisateur « {nombre} » activé.',
        sesionIniciada: 'Connecté en tant que {nombre}.',
        sesionFinalizada: 'Vous êtes déconnecté.'
      },
      menu: {
        vuelos: 'Vols',
        hoteles: 'Hôtels',
        autobus: 'Bus',
        ia: 'planifier avec l’IA',
        planea: 'planifiez vos voyages',
        nosotros: 'À propos',
        contacto: 'Contact',
        faq: 'FAQ',
        explorar: 'explorer',
        terminos: 'Conditions générales',
        rastreador: 'suivi des vols',
        viajes: 'voyages',
        telLbl: 'Téléphone :',
        correoLbl: 'E-mail :'
      },
      footer: {
        desc: 'Votre agence de confiance pour découvrir le monde au meilleur prix. Comparez, économisez et voyagez sans limites.',
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
        ofertasBajas: 'Petits prix',
        privacidad: 'Confidentialité',
        descargaApp: 'Télécharger l’appli',
        appTexto: 'Emportez vos réservations et offres partout.',
        playSmall: 'DISPONIBLE SUR',
        playStrong: 'Google Play',
        appleSmall: 'TÉLÉCHARGER DANS',
        appleStrong: 'App Store',
        derechos: '© 2026 Ɽ𝕦Ƭ𝕒 ƬⱤ𝕠℘ɩ𝕔𝕒𝕝. Tous droits réservés.',
        terminos: 'Conditions générales',
        cookies: 'Cookies'
      }
    },
    PT: {
      panelTitulo: 'SELECIONE SEU IDIOMA',
      buscarPh: 'Buscar idioma...',
      pageTitle: 'Informar erros – Ruta Tropical',
      titulo: 'Informar erros',
      avisoSuperior: 'Embora nos esforcemos para encontrar preços exatos, nem sempre é possível. Preencha o formulário abaixo para que nossa equipe investigue o problema.',
      email: 'E-mail',
      emailPh: 'nome@exemplo.com',
      nombre: 'Nome (opcional)',
      nombrePh: 'Digite seu nome',
      asunto: 'Assunto',
      asuntos: {
        precio: 'Encontramos um erro de preço',
        cambio: 'O preço mudou ao reservar',
        disponibilidad: 'Disponibilidade incorreta',
        otro: 'Outro erro'
      },
      mensaje: 'Conte o que você buscou, o preço que viu e o que aconteceu.',
      mensajePh: 'Informe rota ou destino, data, preço exibido e o que ocorreu...',
      avisoPrecios: 'Fazemos o possível para oferecer informações precisas, mas <a href="#">não garantimos preços nem disponibilidade</a>.',
      captura: 'Captura de tela',
      elegir: 'Escolher arquivos',
      sinArchivo: 'Nenhum arquivo selecionado',
      ayudaArchivo: 'São permitidos arquivos de até 5 MB cada. Total permitido: 20 MB. Formatos aceitos: jpeg, jpg, png, gif, bmp.',
      privacidad: 'A Ruta Tropical poderá compartilhar partes das informações enviadas, incluindo dados pessoais, com os fornecedores de viagem mencionados.',
      enviar: 'Enviar comentário',
      enviado: 'Obrigado! Seu relato de erro foi enviado para a Ruta Tropical.',
      ayudaLat: 'Consulte nossa seção de <a href="ayuda.html">Ajuda</a> online antes de enviar seus comentários.',
      idiomasLat: 'A Ruta Tropical busca as melhores ofertas de viagem em mais de <a href="#">30 idiomas</a> e nossos especialistas terão prazer em receber seu feedback.',
      asistente: 'Assistente Virtual',
      chat: 'Chat',
      usuarioMenu: {
        conectado: 'Conectado',
        anadir: 'Adicionar usuário',
        trips: 'Viagens',
        ayudaFaq: 'Ajuda/FAQ',
        cuenta: 'Sua conta',
        cerrarSesion: 'Sair',
        iniciarSesion: 'Entrar',
        invitado: 'Convidado',
        sesionCerrada: 'Sessão encerrada',
        promptNombre: 'Nome do novo usuário:',
        promptCorreo: 'E-mail:',
        usuarioActivado: 'Usuário "{nombre}" ativado.',
        sesionIniciada: 'Sessão iniciada como {nombre}.',
        sesionFinalizada: 'Você saiu da conta.'
      },
      menu: {
        vuelos: 'Voos',
        hoteles: 'Hotéis',
        autobus: 'Ônibus',
        ia: 'planejar com IA',
        planea: 'planeje suas viagens',
        nosotros: 'Sobre nós',
        contacto: 'Contato',
        faq: 'Perguntas frequentes',
        explorar: 'explorar',
        terminos: 'Termos e condições',
        rastreador: 'rastreador de voos',
        viajes: 'viagens',
        telLbl: 'Telefone:',
        correoLbl: 'E-mail:'
      },
      footer: {
        desc: 'Sua agência de confiança para descobrir o mundo pelo melhor preço. Compare, economize e voe sem limites.',
        colEmpresa: 'Empresa',
        acercaDe: 'Sobre nós',
        prensa: 'Imprensa',
        afiliados: 'Afiliados',
        socios: 'Parceiros',
        colContacto: 'Contato',
        ayudaFaq: 'Ajuda / FAQ',
        hoteles: 'Hotéis',
        publicidad: 'Publicidade',
        colMas: 'Mais',
        tarifasAereas: 'Passagens aéreas',
        ofertasBajas: 'Ofertas',
        privacidad: 'Privacidade',
        descargaApp: 'Baixe o app',
        appTexto: 'Leve suas reservas e ofertas sempre com você.',
        playSmall: 'DISPONÍVEL NO',
        playStrong: 'Google Play',
        appleSmall: 'BAIXAR NA',
        appleStrong: 'App Store',
        derechos: '© 2026 Ɽ𝕦Ƭ𝕒 ƬⱤ𝕠℘ɩ𝕔𝕒𝕝. Todos os direitos reservados.',
        terminos: 'Termos e condições',
        cookies: 'Cookies'
      }
    }
  };

  const textosComentarios = {
    ES: {
      panelTitulo: 'SELECCIONA TU IDIOMA',
      buscarPh: 'Buscar idioma...',
      pageTitle: 'Queremos tus comentarios – Ruta Tropical',
      titulo: 'Queremos tus comentarios',
      email: 'Email',
      emailPh: 'nombre@ejemplo.com',
      nombre: 'Nombre (opcional)',
      nombrePh: 'Introduce tu nombre',
      asunto: 'Asunto',
      asuntos: ['Otros', 'Sugerencia', 'Problema con la app', 'Problema con el sitio web'],
      mensaje: 'Mensaje',
      mensajePh: 'Escribe tu mensaje aquí...',
      captura: 'Captura de pantalla',
      elegir: 'Elegir archivos',
      sinArchivo: 'Sin archivos seleccionados',
      ayudaArchivo: 'Se permiten archivos que no superen los 5 MB cada uno. Total permitido: 20 MB. Formatos aceptados: jpeg, jpg, png, gif, bmp.',
      privacidad: 'Ten en cuenta que Ruta Tropical podrá compartir partes de la información proporcionada, incluyendo datos personales, con los proveedores de viaje mencionados en los comentarios.',
      enviar: 'Enviar comentario',
      enviado: '¡Gracias! Tu comentario ha sido enviado a Ruta Tropical.',
      ayudaLat: 'Consulta nuestra sección de <a href="ayuda.html">Ayuda</a> en línea antes de enviarnos tus comentarios.',
      idiomasLat: 'Ruta Tropical busca las mejores ofertas de viajes en más de <a href="#">30 idiomas</a>, y nuestros especialistas estarán encantados de recibir tus comentarios. Pruébalo.',
      asistente: 'Asistente Virtual',
      chat: 'Chat',
      chatHola: '¡Hola! ¿En qué podemos ayudarte con tus comentarios o viajes?',
      chatPh: 'Escribe tu consulta...',
      chatEnviar: 'Enviar',
      usuarioMenu: textosErrores.ES.usuarioMenu,
      menu: textosErrores.ES.menu,
      footer: textosErrores.ES.footer
    },
    EN: {
      panelTitulo: 'SELECT YOUR LANGUAGE',
      buscarPh: 'Search language...',
      pageTitle: 'We want your feedback – Ruta Tropical',
      titulo: 'We want your feedback',
      email: 'Email',
      emailPh: 'name@example.com',
      nombre: 'Name (optional)',
      nombrePh: 'Enter your name',
      asunto: 'Subject',
      asuntos: ['Other', 'Suggestion', 'App issue', 'Website issue'],
      mensaje: 'Message',
      mensajePh: 'Write your message here...',
      captura: 'Screenshot',
      elegir: 'Choose files',
      sinArchivo: 'No file selected',
      ayudaArchivo: 'Files up to 5 MB each are allowed. Total allowed: 20 MB. Accepted formats: jpeg, jpg, png, gif, bmp.',
      privacidad: 'Please note that Ruta Tropical may share parts of the information provided, including personal data, with travel providers mentioned in your feedback.',
      enviar: 'Send feedback',
      enviado: 'Thank you! Your feedback has been sent to Ruta Tropical.',
      ayudaLat: 'Check our online <a href="ayuda.html">Help</a> section before sending us your feedback.',
      idiomasLat: 'Ruta Tropical searches for the best travel deals in over <a href="#">30 languages</a>, and our specialists will be happy to receive your feedback. Try it.',
      asistente: 'Virtual Assistant',
      chat: 'Chat',
      chatHola: 'Hi! How can we help you with your feedback or trips?',
      chatPh: 'Type your question...',
      chatEnviar: 'Send',
      usuarioMenu: textosErrores.EN.usuarioMenu,
      menu: textosErrores.EN.menu,
      footer: textosErrores.EN.footer
    },
    FR: {
      panelTitulo: 'CHOISISSEZ VOTRE LANGUE',
      buscarPh: 'Rechercher une langue...',
      pageTitle: 'Nous voulons vos commentaires – Ruta Tropical',
      titulo: 'Nous voulons vos commentaires',
      email: 'E-mail',
      emailPh: 'nom@exemple.com',
      nombre: 'Nom (facultatif)',
      nombrePh: 'Entrez votre nom',
      asunto: 'Sujet',
      asuntos: ['Autres', 'Suggestion', 'Problème avec l’application', 'Problème avec le site web'],
      mensaje: 'Message',
      mensajePh: 'Écrivez votre message ici...',
      captura: "Capture d'écran",
      elegir: 'Choisir des fichiers',
      sinArchivo: 'Aucun fichier sélectionné',
      ayudaArchivo: 'Les fichiers de 5 Mo maximum chacun sont autorisés. Total autorisé : 20 Mo. Formats acceptés : jpeg, jpg, png, gif, bmp.',
      privacidad: 'Veuillez noter que Ruta Tropical peut partager certaines informations fournies, y compris des données personnelles, avec les fournisseurs mentionnés.',
      enviar: 'Envoyer le commentaire',
      enviado: 'Merci ! Votre commentaire a bien été envoyé à Ruta Tropical.',
      ayudaLat: 'Consultez notre section <a href="ayuda.html">Aide</a> en ligne avant de nous envoyer vos commentaires.',
      idiomasLat: 'Ruta Tropical recherche les meilleures offres de voyage dans plus de <a href="#">30 langues</a> et nos spécialistes seront ravis de lire vos retours.',
      asistente: 'Assistant Virtuel',
      chat: 'Chat',
      chatHola: 'Bonjour ! Comment pouvons-nous vous aider avec vos commentaires ou voyages ?',
      chatPh: 'Écrivez votre question...',
      chatEnviar: 'Envoyer',
      usuarioMenu: textosErrores.FR.usuarioMenu,
      menu: textosErrores.FR.menu,
      footer: textosErrores.FR.footer
    },
    PT: {
      panelTitulo: 'SELECIONE SEU IDIOMA',
      buscarPh: 'Buscar idioma...',
      pageTitle: 'Queremos seus comentários – Ruta Tropical',
      titulo: 'Queremos seus comentários',
      email: 'E-mail',
      emailPh: 'nome@exemplo.com',
      nombre: 'Nome (opcional)',
      nombrePh: 'Digite seu nome',
      asunto: 'Assunto',
      asuntos: ['Outros', 'Sugestão', 'Problema com o app', 'Problema com o site'],
      mensaje: 'Mensagem',
      mensajePh: 'Escreva sua mensagem aqui...',
      captura: 'Captura de tela',
      elegir: 'Escolher arquivos',
      sinArchivo: 'Nenhum arquivo selecionado',
      ayudaArchivo: 'São permitidos arquivos de até 5 MB cada. Total permitido: 20 MB. Formatos aceitos: jpeg, jpg, png, gif, bmp.',
      privacidad: 'A Ruta Tropical poderá compartilhar partes das informações enviadas, incluindo dados pessoais, com os fornecedores mencionados.',
      enviar: 'Enviar comentário',
      enviado: 'Obrigado! Seu comentário foi enviado para a Ruta Tropical.',
      ayudaLat: 'Consulte nossa seção de <a href="ayuda.html">Ajuda</a> online antes de enviar seus comentários.',
      idiomasLat: 'A Ruta Tropical busca as melhores ofertas de viagem em mais de <a href="#">30 idiomas</a> e nossos especialistas terão prazer em receber seu feedback.',
      asistente: 'Assistente Virtual',
      chat: 'Chat',
      chatHola: 'Olá! Como podemos ajudar com seus comentários ou viagens?',
      chatPh: 'Digite sua dúvida...',
      chatEnviar: 'Enviar',
      usuarioMenu: textosErrores.PT.usuarioMenu,
      menu: textosErrores.PT.menu,
      footer: textosErrores.PT.footer
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const esComentarios = Boolean(document.getElementById('form-comentarios'));
    const diccionarioActivo = esComentarios ? textosComentarios : textosErrores;

    function getTextos(cod) {
      return diccionarioActivo[cod] || diccionarioActivo.ES || textosErrores.ES;
    }

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
        const estaAbierto = cajon ? cajon.classList.contains('abierto') : false;
        setCajon(!estaAbierto);
      }, true);
    }
    if (cerrarMenu) {
      cerrarMenu.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCajon(false);
      });
    }
    if (cajonFondo) {
      cajonFondo.addEventListener('click', () => setCajon(false));
    }

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
    const usuarioCardInicial = document.getElementById('usuario-card-inicial');
    const usuarioNombreActivo = document.getElementById('usuario-nombre-activo');
    const usuarioCorreoActivo = document.getElementById('usuario-correo-activo');
    const usuarioEstadoActivo = document.getElementById('usuario-estado-activo');
    const btnAnadirUsuario = document.getElementById('btn-anadir-usuario');
    const btnCerrarSesion = document.getElementById('btn-cerrar-sesion');

    const selectorBox = document.getElementById('asunto-selector');
    const btnAsunto = document.getElementById('btn-asunto');
    const listaAsunto = document.getElementById('lista-asunto');
    const valorAsunto = document.getElementById('valor-asunto');
    const selectOculto = document.getElementById('asunto');

    const form = document.getElementById('form-errores') || document.getElementById('form-comentarios');
    const alerta = document.getElementById('form-alerta');

    let idiomaActual = 'ES';
    let asuntoClaveActual = 'precio';
    let asuntoIndexActual = 0;
    let usuario = {
      conectado: true,
      nombre: 'Mari',
      correo: 'rimurutd44@gmail.com'
    };

    function mostrarAlerta(msg) {
      if (!alerta) return;
      alerta.hidden = false;
      alerta.textContent = msg;
    }

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
      const t = getTextos(idiomaActual);
      const um = t.usuarioMenu || textosErrores.ES.usuarioMenu;
      const letra = usuario.conectado ? (usuario.nombre.trim().charAt(0).toUpperCase() || 'M') : '?';

      if (usuarioInicial) usuarioInicial.textContent = letra;
      if (usuarioCardInicial) usuarioCardInicial.textContent = letra;
      if (usuarioNombreActivo) usuarioNombreActivo.textContent = usuario.conectado ? usuario.nombre : um.invitado;
      if (usuarioCorreoActivo) usuarioCorreoActivo.textContent = usuario.conectado ? usuario.correo : um.sesionCerrada;
      if (usuarioEstadoActivo) usuarioEstadoActivo.textContent = usuario.conectado ? um.conectado : um.sesionCerrada;

      if (btnAnadirUsuario) {
        const spans = btnAnadirUsuario.querySelectorAll('span:not(.usuario-dropdown__agregar-ico)');
        const targetSpan = spans[spans.length - 1];
        if (targetSpan) targetSpan.textContent = um.anadir;
        else btnAnadirUsuario.textContent = um.anadir;
      }

      if (usuarioDropdown) {
        const links = usuarioDropdown.querySelectorAll('a.usuario-dropdown__link');
        const labels = [um.trips, um.ayudaFaq, um.cuenta];
        links.forEach((a, idx) => {
          if (!labels[idx]) return;
          const sp = a.querySelector('span');
          if (sp) sp.textContent = labels[idx];
          else a.textContent = labels[idx];
        });
      }

      if (btnCerrarSesion) {
        const cerrarSpan = btnCerrarSesion.querySelector('span');
        const textoCerrar = usuario.conectado ? um.cerrarSesion : um.iniciarSesion;
        if (cerrarSpan) cerrarSpan.textContent = textoCerrar;
        else btnCerrarSesion.textContent = textoCerrar;
      }

      const usuarioCab = document.querySelector('.usuario-dropdown__cab');
if (usuarioCab) usuarioCab.setAttribute('data-inicial', letra);
if (usuarioCorreoActivo) {
  usuarioCorreoActivo.textContent = usuario.conectado ? usuario.correo : um.sesionCerrada;
}
    }

    function traducirMenuLateral(t) {
      const m = t.menu;
      if (!cajon || !m) return;

      const principalLinks = cajon.querySelectorAll('.cajon__principal a');
      if (principalLinks[0]) principalLinks[0].innerHTML = `<i class="fa-solid fa-plane" aria-hidden="true"></i> ${m.vuelos}`;
      if (principalLinks[1]) principalLinks[1].innerHTML = `<i class="fa-solid fa-hotel" aria-hidden="true"></i> ${m.hoteles}`;
      if (principalLinks[2]) principalLinks[2].innerHTML = `<i class="fa-solid fa-bus" aria-hidden="true"></i> ${m.autobus}`;

      const enlaces = cajon.querySelectorAll('.cajon__enlaces a');
      const labels = [
        m.ia, m.planea, m.nosotros, m.contacto, m.faq,
        m.explorar, m.terminos, m.rastreador, m.viajes
      ];
      enlaces.forEach((a, i) => {
        if (labels[i]) {
          a.innerHTML = `<i class="fa-solid fa-chevron-right" aria-hidden="true"></i> ${labels[i]}`;
        }
      });

      const filasContacto = cajon.querySelectorAll('.cajon__contacto .contacto-fila');
      if (filasContacto[0]) {
        const st = filasContacto[0].querySelector('strong');
        if (st) st.textContent = m.telLbl;
      }
      if (filasContacto[1]) {
        const st = filasContacto[1].querySelector('strong');
        if (st) st.textContent = m.correoLbl;
      }
    }

    function traducirFooter(t) {
      const f = t.footer;
      const footer = document.getElementById('rt-footer');
      if (!footer || !f) return;

      const desc = footer.querySelector('.rt-footer__desc');
      if (desc) desc.textContent = f.desc;

      const navCols = footer.querySelectorAll('nav.rt-footer__col');
      if (navCols[0]) {
        const h3 = navCols[0].querySelector('h3');
        if (h3) h3.textContent = f.colEmpresa;
        const items = navCols[0].querySelectorAll('ul li a');
        const labels = [f.acercaDe, f.prensa, f.afiliados, f.socios];
        items.forEach((a, i) => {
          if (labels[i]) a.innerHTML = `<span class="rt-chev">&rsaquo;</span> ${labels[i]}`;
        });
      }

      if (navCols[1]) {
        const h3 = navCols[1].querySelector('h3');
        if (h3) h3.textContent = f.colContacto;
        const items = navCols[1].querySelectorAll('ul li a');
        const labels = [f.ayudaFaq, f.hoteles, f.publicidad];
        items.forEach((a, i) => {
          if (labels[i]) a.innerHTML = `<span class="rt-chev">&rsaquo;</span> ${labels[i]}`;
        });
      }

      if (navCols[2]) {
        const h3 = navCols[2].querySelector('h3');
        if (h3) h3.textContent = f.colMas;
        const items = navCols[2].querySelectorAll('ul li a');
        const labels = [f.tarifasAereas, f.ofertasBajas, f.privacidad];
        items.forEach((a, i) => {
          if (labels[i]) a.innerHTML = `<span class="rt-chev">&rsaquo;</span> ${labels[i]}`;
        });
      }

      const appBox = footer.querySelector('.rt-footer__app');
      if (appBox) {
        const h3 = appBox.querySelector('h3');
        if (h3) h3.textContent = f.descargaApp;
        const p = appBox.querySelector('.rt-footer__app-texto');
        if (p) p.textContent = f.appTexto;

        const playBtn = appBox.querySelector('.rt-store-btn--play span');
        if (playBtn) playBtn.innerHTML = `<small>${f.playSmall}</small><strong>${f.playStrong}</strong>`;

        const appleBtn = appBox.querySelector('.rt-store-btn--apple span');
        if (appleBtn) appleBtn.innerHTML = `<small>${f.appleSmall}</small><strong>${f.appleStrong}</strong>`;
      }

      const legal = footer.querySelector('.rt-footer__legal');
      if (legal) {
        const copySpan = legal.querySelector('span');
        if (copySpan) copySpan.textContent = f.derechos;

        const legalLinks = legal.querySelectorAll('.rt-footer__legales-links a');
        if (legalLinks[0]) legalLinks[0].textContent = f.privacidad;
        if (legalLinks[1]) legalLinks[1].textContent = f.terminos;
        if (legalLinks[2]) legalLinks[2].textContent = f.cookies;
      }
    }

    function aplicarIdioma(codigo) {
      const t = getTextos(codigo);
      idiomaActual = codigo;
      document.documentElement.lang = codigo.toLowerCase();
      document.title = t.pageTitle;

      if (idiomaCodigo) idiomaCodigo.textContent = codigo;
      if (idiomaTitulo) idiomaTitulo.textContent = t.panelTitulo;
      if (idiomaBuscar) idiomaBuscar.placeholder = t.buscarPh;

      const setT = (id, v) => { const el = document.getElementById(id); if (el && v !== undefined) el.textContent = v; };
      const setH = (id, v) => { const el = document.getElementById(id); if (el && v !== undefined) el.innerHTML = v; };
      const setP = (id, v) => { const el = document.getElementById(id); if (el && v !== undefined) el.placeholder = v; };

      setT('titulo-errores', t.titulo);
      setT('titulo-pagina', t.titulo);
      setT('aviso-superior', t.avisoSuperior);
      setT('lbl-email', t.email);
      setP('email', t.emailPh);
      setT('lbl-nombre', t.nombre);
      setP('nombre', t.nombrePh);
      setT('asunto-label', t.asunto);
      setT('lbl-asunto', t.asunto);
      setT('lbl-mensaje', t.mensaje);
      setP('mensaje', t.mensajePh);
      setH('aviso-precios', t.avisoPrecios);
      setT('lbl-captura', t.captura);
      setT('btn-elegir-texto', t.elegir);
      setT('ayuda-archivo', t.ayudaArchivo);
      setT('texto-privacidad', t.privacidad);
      setT('btn-enviar-error', t.enviar);
      setT('btn-enviar', t.enviar);
      setH('lateral-ayuda', t.ayudaLat);
      setH('lateral-idiomas', t.idiomasLat);
      setT('asistente-titulo', t.asistente);
      setT('btn-chat-asistente', t.chat);

      if (t.chatHola) {
        const chatBotMsg = document.querySelector('.chat-panel__mensajes .chat-msg--bot');
        if (chatBotMsg) chatBotMsg.textContent = t.chatHola;
      }
      if (t.chatPh) {
        const chatInput = document.getElementById('chat-input');
        if (chatInput) chatInput.placeholder = t.chatPh;
      }
      if (t.chatEnviar) {
        const chatSubmit = document.querySelector('.chat-panel__form button[type="submit"]');
        if (chatSubmit) chatSubmit.textContent = t.chatEnviar;
      }

      if (listaAsunto && t.asuntos) {
        const opciones = Array.from(listaAsunto.querySelectorAll('.asunto-selector__opcion'));
        if (Array.isArray(t.asuntos)) {
          opciones.forEach((op, idx) => {
            if (t.asuntos[idx]) {
              op.textContent = t.asuntos[idx];
              op.dataset.value = t.asuntos[idx];
            }
          });
          if (selectOculto) {
            Array.from(selectOculto.options).forEach((opt, idx) => {
              if (t.asuntos[idx]) {
                opt.textContent = t.asuntos[idx];
                opt.value = t.asuntos[idx];
              }
            });
            if (t.asuntos[asuntoIndexActual]) selectOculto.value = t.asuntos[asuntoIndexActual];
          }
          if (valorAsunto && t.asuntos[asuntoIndexActual]) {
            valorAsunto.textContent = t.asuntos[asuntoIndexActual];
          }
        } else {
          opciones.forEach((op) => {
            const clave = op.dataset.key;
            if (clave && t.asuntos[clave]) {
              op.textContent = t.asuntos[clave];
              op.dataset.value = t.asuntos[clave];
              if (clave === asuntoClaveActual && valorAsunto) {
                valorAsunto.textContent = t.asuntos[clave];
              }
            }
          });
          if (selectOculto && t.asuntos[asuntoClaveActual]) {
            selectOculto.value = t.asuntos[asuntoClaveActual];
          }
        }
      }

      const inputArchivo = document.getElementById('captura');
      const estadoArchivo = document.getElementById('archivo-estado-texto');
      if (estadoArchivo && (!inputArchivo || !inputArchivo.files || inputArchivo.files.length === 0)) {
        estadoArchivo.textContent = t.sinArchivo;
      }

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
    traducirFooter(getTextos('ES'));

    if (idiomaBuscar) {
      idiomaBuscar.addEventListener('input', () => renderIdiomas(idiomaBuscar.value));
    }

    if (monedaBtn && monedaLista) {
      monedaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        const abrir = monedaLista.hidden;
        cerrarPaneles(monedaLista);
        monedaLista.hidden = !abrir;
        monedaBtn.setAttribute('aria-expanded', String(abrir));
      }, true);

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
        e.stopImmediatePropagation();
        const abrir = idiomaLista.hidden;
        cerrarPaneles(idiomaLista);
        idiomaLista.hidden = !abrir;
        idiomaBtn.setAttribute('aria-expanded', String(abrir));
        if (abrir && idiomaBuscar) setTimeout(() => idiomaBuscar.focus(), 10);
      }, true);
    }

    if (usuarioBtn && usuarioDropdown) {
      usuarioBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        const abrir = usuarioDropdown.hidden;
        cerrarPaneles(usuarioDropdown);
        usuarioDropdown.hidden = !abrir;
        usuarioBtn.setAttribute('aria-expanded', String(abrir));
      }, true);
    }

    if (btnAnadirUsuario) {
      btnAnadirUsuario.addEventListener('click', () => {
        const t = getTextos(idiomaActual);
        const um = t.usuarioMenu || textosErrores.ES.usuarioMenu;
        const nuevoNombre = window.prompt(um.promptNombre, usuario.nombre);
        if (nuevoNombre && nuevoNombre.trim()) {
          const nuevoCorreo = um.promptCorreo ? window.prompt(um.promptCorreo, usuario.correo) : usuario.correo;
          usuario = {
            conectado: true,
            nombre: nuevoNombre.trim(),
            correo: (nuevoCorreo && nuevoCorreo.trim()) || `${nuevoNombre.trim().toLowerCase().replace(/\s+/g, '')}@gmail.com`
          };
          pintarUsuario();
          mostrarAlerta(um.usuarioActivado.replace('{nombre}', usuario.nombre));
        }
        if (usuarioDropdown) usuarioDropdown.hidden = true;
      });
    }

    if (btnCerrarSesion) {
      btnCerrarSesion.addEventListener('click', () => {
        const t = getTextos(idiomaActual);
        const um = t.usuarioMenu || textosErrores.ES.usuarioMenu;
        usuario.conectado = !usuario.conectado;
        pintarUsuario();
        mostrarAlerta(usuario.conectado ? um.sesionIniciada.replace('{nombre}', usuario.nombre) : um.sesionFinalizada);
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

    if (selectorBox && btnAsunto && listaAsunto && valorAsunto && selectOculto) {
      const opciones = Array.from(listaAsunto.querySelectorAll('.asunto-selector__opcion'));
      btnAsunto.addEventListener('click', (e) => {
        e.stopPropagation();
        const abrir = listaAsunto.hidden;
        listaAsunto.hidden = !abrir;
        btnAsunto.setAttribute('aria-expanded', String(abrir));
      });
      opciones.forEach((op, idx) => {
        op.addEventListener('click', () => {
          const t = getTextos(idiomaActual);
          if (Array.isArray(t.asuntos)) {
            asuntoIndexActual = idx;
            const textoVisible = t.asuntos[idx] || op.textContent;
            valorAsunto.textContent = textoVisible;
            selectOculto.value = textoVisible;
          } else {
            const clave = op.dataset.key || 'precio';
            const textoVisible = (t.asuntos && t.asuntos[clave]) || op.textContent;
            asuntoClaveActual = clave;
            valorAsunto.textContent = textoVisible;
            selectOculto.value = textoVisible;
          }
          opciones.forEach((item) => item.setAttribute('aria-selected', String(item === op)));
          listaAsunto.hidden = true;
          btnAsunto.setAttribute('aria-expanded', 'false');
        });
      });
      document.addEventListener('click', (e) => {
        if (!listaAsunto.hidden && !selectorBox.contains(e.target)) {
          listaAsunto.hidden = true;
          btnAsunto.setAttribute('aria-expanded', 'false');
        }
      });
    }

    const inputArchivo = document.getElementById('captura');
    const estadoArchivo = document.getElementById('archivo-estado-texto');
    if (inputArchivo && estadoArchivo) {
      inputArchivo.addEventListener('change', () => {
        const t = getTextos(idiomaActual);
        if (!inputArchivo.files || inputArchivo.files.length === 0) {
          estadoArchivo.textContent = t.sinArchivo;
        } else if (inputArchivo.files.length === 1) {
          estadoArchivo.textContent = inputArchivo.files[0].name;
        } else {
          estadoArchivo.textContent = `${inputArchivo.files.length} archivos seleccionados`;
        }
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const t = getTextos(idiomaActual);
        mostrarAlerta(t.enviado);
        form.reset();
        asuntoClaveActual = 'precio';
        asuntoIndexActual = 0;
        if (valorAsunto && t.asuntos) {
          valorAsunto.textContent = Array.isArray(t.asuntos) ? t.asuntos[0] : t.asuntos.precio;
        }
        if (estadoArchivo) estadoArchivo.textContent = t.sinArchivo;
      });
    }

    const btnChat = document.getElementById('btn-chat-asistente');
    const chatPanel = document.getElementById('chat-panel');
    const cerrarChat = document.getElementById('cerrar-chat');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMensajes = document.getElementById('chat-mensajes');

    if (btnChat && chatPanel) {
      btnChat.addEventListener('click', () => {
        chatPanel.hidden = !chatPanel.hidden;
        if (!chatPanel.hidden && chatInput) chatInput.focus();
      });
    }
    if (cerrarChat && chatPanel) {
      cerrarChat.addEventListener('click', () => { chatPanel.hidden = true; });
    }
    if (chatForm && chatInput && chatMensajes) {
      chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const texto = chatInput.value.trim();
        if (!texto) return;

        const mUser = document.createElement('div');
        mUser.className = 'chat-msg chat-msg--user';
        mUser.textContent = texto;
        chatMensajes.appendChild(mUser);

        const mBot = document.createElement('div');
        mBot.className = 'chat-msg chat-msg--bot';
        mBot.textContent = 'Gracias por escribirnos. Si deseas reportar algo específico, también puedes enviarlo en el formulario.';
        chatMensajes.appendChild(mBot);

        chatInput.value = '';
        chatMensajes.scrollTop = chatMensajes.scrollHeight;
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