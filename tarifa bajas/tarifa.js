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

  const textosTarifas = {
    ES: {
      panelTitulo: 'SELECCIONA TU IDIOMA',
      buscarPh: 'Buscar idioma...',
      pageTitle: 'Tips de tarifas bajas | Ruta Tropical',
      heroTitulo: 'Tips de tarifas bajas',
      intro: 'Siete tips para encontrar la tarifa más baja posible.',
      t1: '<strong>Planea con antelación.</strong> Mientras más cerca esté la fecha de tu viaje, más caro suele ser el pasaje. Las aerolíneas saben que quien viaja de último momento tiene poca flexibilidad y está dispuesto a pagar más. Si te organizas con tiempo, el precio juega a tu favor. Para encontrar las mejores tarifas, busca tu viaje en Ruta Tropical con 21 días o más de antelación. Como segunda opción, intenta con 14 días. ¿Sigues ahí? ¿Por qué sigues esperando?',
      t2: '<strong>¿Lunes, martes, miércoles, jueves, viernes, sábado o domingo?</strong> Tener flexibilidad para viajar otro día puede bajar el precio de forma notable. La próxima vez que busques en Ruta Tropical, activa la opción de fechas flexibles. Puede que te convenga más salir un sábado. También suele ser más barato volar a mitad de semana, martes o miércoles, que hacerlo el lunes, el jueves o el viernes, que son los días preferidos de quienes viajan por trabajo.',
      t3: '<strong>Todo en la vida es cuestión de tiempo.</strong> La clave para conseguir la tarifa más baja es volar cuando los demás no lo hacen. Los "tiempos muertos" cambian según la ruta: temprano en la mañana o tarde en la noche suelen ser los mejores horarios para viajes de placer, y el mediodía es el favorito de los viajes de trabajo. Selecciona "Cualquiera" en la opción de horario de nuestros filtros para ver más tarifas bajas.',
      t4: '<strong>Evita las temporadas altas.</strong> ¿Ves alguna tendencia? No viajes cuando todos los demás viajan. Visita tu destino de playa justo después de las vacaciones de Semana Santa o antes de las fiestas de fin de año. Los pasajes serán más baratos, las playas estarán menos llenas y las filas serán más cortas. Y si te animas a viajar en Nochebuena, cuando todos ya están en casa, también encontrarás mejores precios.',
      t5: '<strong>Gracias por elegir.</strong> Cuando las aerolíneas de bajo costo simplificaron sus precios para ofrecer tarifas más bajas, las demás no tardaron en imitarlas. Pero no todas las aerolíneas funcionan de la misma manera. Por eso, cuando buscas en Ruta Tropical, comparamos cientos de <a href="#">aerolíneas</a> para mostrarte la mejor tarifa.',
      t6: '<strong>Ubicación, ubicación, ubicación.</strong> Muchas aerolíneas de bajo costo vuelan a aeropuertos alternos, y lo que se ahorra en tasas de aeropuerto se refleja en el precio final. También puedes aprovechar precios más bajos en el alquiler de autos y menos tráfico. Cuando buscas en Ruta Tropical, te mostramos de forma automática las tarifas de los aeropuertos cercanos.',
      t7: '<strong>Y lo más importante…</strong> <a href="#">busca en Ruta Tropical</a> antes de reservar.',
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
      pageTitle: 'Low fare tips | Ruta Tropical',
      heroTitulo: 'Low fare tips',
      intro: 'Seven tips to find the lowest possible fare.',
      t1: '<strong>Plan ahead.</strong> The closer your travel date is, the more expensive the ticket usually is. Airlines know last-minute travelers have less flexibility and pay more. Planning ahead works in your favor. Search on Ruta Tropical 21 days or more in advance, or try 14 days as a second option. Still there? Why are you still waiting?',
      t2: '<strong>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday?</strong> Being flexible with your travel day can lower prices noticeably. Turn on flexible dates when searching on Ruta Tropical, and consider flying midweek on Tuesday or Wednesday instead of Monday, Thursday, or Friday.',
      t3: '<strong>Timing is everything.</strong> The key to getting the lowest fare is flying when others do not. Off-peak hours depend on the route: early morning or late night for leisure, and midday for business. Select "Any" in time filters for more low fares.',
      t4: '<strong>Avoid peak seasons.</strong> See a pattern? Do not travel when everyone else does. Visit beach destinations right after Easter or before year-end holidays for lower prices, fewer crowds, and shorter lines—or even on Christmas Eve.',
      t5: '<strong>Thanks for choosing.</strong> Low-cost carriers simplified fares, and others followed. Because not all airlines work the same way, Ruta Tropical compares hundreds of <a href="#">airlines</a> to show you the best fare.',
      t6: '<strong>Location, location, location.</strong> Many low-cost airlines fly to alternative airports with lower airport fees, car rental savings, and less traffic. Ruta Tropical automatically shows nearby airport rates.',
      t7: '<strong>And most importantly…</strong> <a href="#">search on Ruta Tropical</a> before booking.',
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
      pageTitle: 'Conseils petits prix | Ruta Tropical',
      heroTitulo: 'Conseils petits prix',
      intro: 'Sept conseils pour trouver le tarif le plus bas possible.',
      t1: '<strong>Anticipez.</strong> Plus la date du voyage approche, plus le billet est cher. Recherchez sur Ruta Tropical 21 jours ou plus à l’avance, ou essayez 14 jours.',
      t2: '<strong>Quel jour choisir ?</strong> Être flexible sur les dates peut réduire nettement le prix. Voyager en milieu de semaine (mardi ou mercredi) est souvent moins cher que le lundi, jeudi ou vendredi.',
      t3: '<strong>Tout est question d’horaire.</strong> Voyager aux heures creuses (tôt le matin ou tard le soir) aide à obtenir de meilleurs tarifs. Sélectionnez « N’importe laquelle » dans les filtres horaires.',
      t4: '<strong>Évitez la haute saison.</strong> Voyagez juste après Pâques ou avant les fêtes de fin d’année pour payer moins cher, éviter la foule et passer moins de temps en file.',
      t5: '<strong>Bon choix.</strong> Sur Ruta Tropical, nous comparons des centaines de <a href="#">compagnies aériennes</a> pour vous afficher le meilleur tarif.',
      t6: '<strong>L’emplacement compte.</strong> Les aéroports alternatifs offrent souvent des taxes plus faibles, des locations de voiture moins chères et moins de trafic.',
      t7: '<strong>Et surtout…</strong> <a href="#">cherchez sur Ruta Tropical</a> avant de réserver.',
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
      pageTitle: 'Dicas de tarifas baixas | Ruta Tropical',
      heroTitulo: 'Dicas de tarifas baixas',
      intro: 'Sete dicas para encontrar a menor tarifa possível.',
      t1: '<strong>Planeje com antecedência.</strong> Quanto mais perto da data da viagem, maior costuma ser o preço. Busque na Ruta Tropical com 21 dias ou mais de antecedência, ou tente com 14 dias.',
      t2: '<strong>Qual dia escolher?</strong> Ter flexibilidade nas datas reduz o preço. Voar no meio da semana (terça ou quarta) costuma ser mais barato que segunda, quinta ou sexta.',
      t3: '<strong>Tudo é questão de horário.</strong> Voar fora dos horários de pico (manhã cedo ou noite) ajuda a achar tarifas menores. Selecione "Qualquer" nos filtros de horário.',
      t4: '<strong>Evite a alta temporada.</strong> Viaje logo após a Páscoa ou antes das festas de fim de ano para pagar menos, pegar praias mais calmas e filas menores.',
      t5: '<strong>Boa escolha.</strong> Na Ruta Tropical, comparamos centenas de <a href="#">companhias aéreas</a> para mostrar a melhor tarifa.',
      t6: '<strong>Localização importa.</strong> Aeroportos alternativos costumam ter taxas menores, aluguel de carros mais barato e menos trânsito.',
      t7: '<strong>E o mais importante…</strong> <a href="#">busque na Ruta Tropical</a> antes de reservar.',
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
        colContacto: 'Contato', ajudaFaq: 'Ajuda / FAQ', hoteles: 'Hotéis', publicidad: 'Publicidade',
        colMas: 'Mais', tarifasAereas: 'Passagens aéreas', ofertasBajas: 'Ofertas', privacidad: 'Privacidade',
        descargaApp: 'Baixe o app', appTexto: 'Leve suas reservas e ofertas sempre com você.',
        playSmall: 'DISPONÍVEL NO', playStrong: 'Google Play',
        appleSmall: 'BAIXAR NA', appleStrong: 'App Store',
        derechos: '© 2026 RuTa Tropical. Todos os direitos reservados.',
        terminos: 'Termos e condições', cookies: 'Cookies'
      }
    },
    IT: {
      panelTitulo: 'SELEZIONA LA TUA LINGUA',
      buscarPh: 'Cerca lingua...',
      pageTitle: 'Consigli tariffe basse | Ruta Tropical',
      heroTitulo: 'Consigli tariffe basse',
      intro: 'Sette consigli per trovare la tariffa più bassa possibile.',
      t1: '<strong>Pianifica in anticipo.</strong> Più si avvicina la data del viaggio, più il biglietto tende a costare. Cerca su Ruta Tropical con almeno 21 giorni di anticipo o prova con 14 giorni.',
      t2: '<strong>Quale giorno scegliere?</strong> Essere flessibili sulle date può ridurre molto il prezzo. Volare a metà settimana (martedì o mercoledì) è spesso più economico.',
      t3: '<strong>È tutta questione di orario.</strong> Volare fuori dalle ore di punta (mattina presto o tarda sera) aiuta a trovare tariffe più basse.',
      t4: '<strong>Evita l’alta stagione.</strong> Viaggia subito dopo Pasqua o prima delle feste di fine anno per spendere meno e trovare meno fila.',
      t5: '<strong>Ottima scelta.</strong> Su Ruta Tropical confrontiamo centinaia di <a href="#">compagnie aeree</a> per mostrarti la tariffa migliore.',
      t6: '<strong>La posizione conta.</strong> Gli aeroporti alternativi hanno spesso tasse più basse, noleggio auto più conveniente e meno traffico.',
      t7: '<strong>E soprattutto…</strong> <a href="#">cerca su Ruta Tropical</a> prima di prenotare.',
      usuarioMenu: {
        anadir: '+ Aggiungi utente',
        trips: 'Trips',
        ayudaFaq: 'Aiuto/FAQ',
        cuenta: 'Il tuo account',
        cerrarSesion: 'Esci',
        promptNombre: 'Nome:',
        promptCorreo: 'Email:'
      },
      menu: {
        vuelos: 'Voli', hoteles: 'Hotel', autobus: 'Autobus',
        ia: 'Pianifica con IA', planea: 'Pianifica i viaggi', nosotros: 'Chi siamo',
        contacto: 'Contatti', faq: 'FAQ', explorar: 'Esplora',
        terminos: 'Termini e condizioni', rastreador: 'Tracker voli', viajes: 'Viaggi',
        telLbl: 'Telefono:', correoLbl: 'Email:'
      },
      footer: {
        desc: 'La tua agenzia di fiducia per scoprire il mondo al miglior prezzo. Confronta, risparmia e vola senza limiti.',
        colEmpresa: 'Azienda', acercaDe: 'Chi siamo', prensa: 'Stampa', afiliados: 'Affiliati', socios: 'Partner',
        colContacto: 'Contatti', ayudaFaq: 'Aiuto / FAQ', hoteles: 'Hotel', publicidad: 'Pubblicità',
        colMas: 'Altro', tarifasAereas: 'Tariffe aeree', ofertasBajas: 'Offerte basse', privacidad: 'Privacy',
        descargaApp: 'Scarica l’app', appTexto: 'Porta sempre con te prenotazioni e offerte.',
        playSmall: 'DISPONIBILE SU', playStrong: 'Google Play',
        appleSmall: 'SCARICA SU', appleStrong: 'App Store',
        derechos: '© 2026 RuTa Tropical. Tutti i diritti riservati.',
        terminos: 'Termini e condizioni', cookies: 'Cookie'
      }
    },
    DE: {
      panelTitulo: 'SPRACHE WÄHLEN',
      buscarPh: 'Sprache suchen...',
      pageTitle: 'Günstige Tarife Tipps | Ruta Tropical',
      heroTitulo: 'Günstige Tarife Tipps',
      intro: 'Sieben Tipps für den möglichst günstigsten Flugpreis.',
      t1: '<strong>Frühzeitig planen.</strong> Je näher das Reisedatum rückt, desto teurer sind Tickets meist. Suche auf Ruta Tropical mindestens 21 Tage im Voraus oder versuche es mit 14 Tagen.',
      t2: '<strong>Welcher Wochentag?</strong> Flexible Reisedaten können den Preis deutlich senken. Flüge unter der Woche (Dienstag oder Mittwoch) sind oft günstiger.',
      t3: '<strong>Timing ist alles.</strong> Flüge außerhalb der Stoßzeiten (früh morgens oder spät abends) bieten häufig bessere Preise.',
      t4: '<strong>Hauptsaison meiden.</strong> Reise direkt nach Ostern oder vor den Feiertagen zum Jahresende für niedrigere Preise und kürzere Warteschlangen.',
      t5: '<strong>Gute Wahl.</strong> Auf Ruta Tropical vergleichen wir Hunderte <a href="#">Fluggesellschaften</a>, um dir den besten Preis zu zeigen.',
      t6: '<strong>Lage zählt.</strong> Ausweichflughäfen bieten oft geringere Gebühren, günstigere Mietwagen und weniger Stau.',
      t7: '<strong>Und am wichtigsten…</strong> <a href="#">suche auf Ruta Tropical</a> vor dem Buchen.',
      usuarioMenu: {
        anadir: '+ Nutzer hinzufügen',
        trips: 'Trips',
        ayudaFaq: 'Hilfe/FAQ',
        cuenta: 'Dein Konto',
        cerrarSesion: 'Abmelden',
        promptNombre: 'Name:',
        promptCorreo: 'E-Mail:'
      },
      menu: {
        vuelos: 'Flüge', hoteles: 'Hotels', autobus: 'Bus',
        ia: 'Mit KI planen', planea: 'Reisen planen', nosotros: 'Über uns',
        contacto: 'Kontakt', faq: 'FAQ', explorar: 'Entdecken',
        terminos: 'AGB', rastreador: 'Flugtracker', viajes: 'Reisen',
        telLbl: 'Telefon:', correoLbl: 'E-Mail:'
      },
      footer: {
        desc: 'Deine zuverlässige Agentur, um die Welt zum besten Preis zu entdecken. Vergleichen, sparen und unbegrenzt fliegen.',
        colEmpresa: 'Unternehmen', acercaDe: 'Über uns', prensa: 'Presse', afiliados: 'Partnerprogramm', socios: 'Partner',
        colContacto: 'Kontakt', ayudaFaq: 'Hilfe / FAQ', hoteles: 'Hotels', publicidad: 'Werbung',
        colMas: 'Mehr', tarifasAereas: 'Flugtarife', ofertasBajas: 'Günstige Angebote', privacidad: 'Datenschutz',
        descargaApp: 'App herunterladen', appTexto: 'Buchungen und Angebote immer griffbereit.',
        playSmall: 'JETZT BEI', playStrong: 'Google Play',
        appleSmall: 'LADEN IM', appleStrong: 'App Store',
        derechos: '© 2026 RuTa Tropical. Alle Rechte vorbehalten.',
        terminos: 'AGB', cookies: 'Cookies'
      }
    },
    JA: {
      panelTitulo: '言語を選択',
      buscarPh: '言語を検索...',
      pageTitle: '格安運賃のヒント | Ruta Tropical',
      heroTitulo: '格安運賃のヒント',
      intro: 'できるだけ安い運賃を見つけるための7つのヒント。',
      t1: '<strong>早めに計画する。</strong>出発日が近いほど航空券は高くなりがちです。Ruta Tropicalで21日以上前、または14日前を目安に検索してみてください。',
      t2: '<strong>曜日を工夫する。</strong>日程に柔軟性があると運賃を大きく下げられます。火曜や水曜など週半ばのフライトがお得な傾向にあります。',
      t3: '<strong>時間がカギ。</strong>混雑時間を避けた早朝や深夜の便は安くなりやすいです。フィルターで「指定なし」を選ぶと選択肢が広がります。',
      t4: '<strong>繁忙期を避ける。</strong>イースター直後や年末年始の前などは、料金が下がり混雑や行列も少なくなります。',
      t5: '<strong>選んでくれてありがとう。</strong>Ruta Tropicalでは数百社の<a href="#">航空会社</a>を比較して最安運賃を表示します。',
      t6: '<strong>ロケーションも重要。</strong>代替空港は空港使用料が安く、レンタカー料金や渋滞の面でもメリットがあります。',
      t7: '<strong>そして一番大切なこと…</strong> 予約前に<a href="#">Ruta Tropicalで検索</a>しましょう。',
      usuarioMenu: {
        anadir: '+ ユーザーを追加',
        trips: 'Trips',
        ayudaFaq: 'ヘルプ/よくある質問',
        cuenta: 'アカウント',
        cerrarSesion: 'ログアウト',
        promptNombre: '名前:',
        promptCorreo: 'メール:'
      },
      menu: {
        vuelos: 'フライト', hoteles: 'ホテル', autobus: 'バス',
        ia: 'AIで計画', planea: '旅行を計画', nosotros: '会社概要',
        contacto: 'お問い合わせ', faq: 'よくある質問', explorar: '探索',
        terminos: '利用規約', rastreador: 'フライト追跡', viajes: '旅行',
        telLbl: '電話:', correoLbl: 'メール:'
      },
      footer: {
        desc: '世界をお得に旅するための信頼できるパートナー。比較・節約して自由に飛びましょう。',
        colEmpresa: '企業情報', acercaDe: '会社概要', prensa: 'プレス', afiliados: 'アフィリエイト', socios: 'パートナー',
        colContacto: 'お問い合わせ', ayudaFaq: 'ヘルプ / FAQ', hoteles: 'ホテル', publicidad: '広告掲載',
        colMas: 'その他', tarifasAereas: '航空運賃', ofertasBajas: '格安オファー', privacidad: 'プライバシー',
        descargaApp: 'アプリをダウンロード', appTexto: '予約やお得な情報をいつでも手元に。',
        playSmall: '手に入れよう', playStrong: 'Google Play',
        appleSmall: 'ダウンロード', appleStrong: 'App Store',
        derechos: '© 2026 RuTa Tropical. All rights reserved.',
        terminos: '利用規約', cookies: 'Cookie'
      }
    },
    KO: {
      panelTitulo: '언어 선택',
      buscarPh: '언어 검색...',
      pageTitle: '저가 항공권 팁 | Ruta Tropical',
      heroTitulo: '저가 항공권 팁',
      intro: '가능한 가장 낮은 요금을 찾기 위한 일곱 가지 팁.',
      t1: '<strong>미리 계획하세요.</strong> 출발일이 가까울수록 항공권이 비싸지는 경우가 많습니다. Ruta Tropical에서 21일 이상 전이나 14일 전에 검색해 보세요.',
      t2: '<strong>요일을 유연하게 선택하세요.</strong> 날짜를 유연하게 잡으면 요금을 크게 낮출 수 있습니다. 화요일이나 수요일 같은 주중 항공편이 더 저렴한 편입니다.',
      t3: '<strong>시간이 핵심입니다.</strong> 다른 사람들이 덜 이동하는 이른 아침이나 늦은 밤 시간대를 노려보세요.',
      t4: '<strong>성수기를 피하세요.</strong> 부활절 직후나 연말 연휴 직전에 여행하면 요금이 저렴하고 대기 줄도 짧습니다.',
      t5: '<strong>선택해 주셔서 감사합니다.</strong> Ruta Tropical은 수백 개의 <a href="#">항공사</a>를 비교해 최적 요금을 보여줍니다.',
      t6: '<strong>위치가 중요합니다.</strong> 대체 공항은 공항세가 낮고 렌터카 비용과 교통 혼잡을 줄이는 데 도움이 됩니다.',
      t7: '<strong>가장 중요한 점…</strong> 예약하기 전에 <a href="#">Ruta Tropical에서 검색</a>하세요.',
      usuarioMenu: {
        anadir: '+ 사용자 추가',
        trips: 'Trips',
        ayudaFaq: '도움말/FAQ',
        cuenta: '내 계정',
        cerrarSesion: '로그아웃',
        promptNombre: '이름:',
        promptCorreo: '이메일:'
      },
      menu: {
        vuelos: '항공권', hoteles: '호텔', autobus: '버스',
        ia: 'AI 일정 계획', planea: '여행 계획', nosotros: '회사 소개',
        contacto: '문의하기', faq: 'FAQ', explorar: '둘러보기',
        terminos: '이용약관', rastreador: '항공편 추적', viajes: '여행',
        telLbl: '전화:', correoLbl: '이메일:'
      },
      footer: {
        desc: '최고의 가격으로 세상을 만나는 믿을 수 있는 여행 파트너. 비교하고 아끼며 자유롭게 떠나세요.',
        colEmpresa: '회사', acercaDe: '회사 소개', prensa: '보도자료', afiliados: '제휴', socios: '파트너',
        colContacto: '문의', ayudaFaq: '도움말 / FAQ', hoteles: '호텔', publicidad: '광고',
        colMas: '더보기', tarifasAereas: '항공 요금', ofertasBajas: '특가', privacidad: '개인정보처리방침',
        descargaApp: '앱 다운로드', appTexto: '예약과 혜택을 언제 어디서나 확인하세요.',
        playSmall: '다운로드', playStrong: 'Google Play',
        appleSmall: '다운로드', appleStrong: 'App Store',
        derechos: '© 2026 RuTa Tropical. All rights reserved.',
        terminos: '이용약관', cookies: '쿠키'
      }
    },
    ZH: {
      panelTitulo: '选择你的语言',
      buscarPh: '搜索语言...',
      pageTitle: '低价机票贴士 | Ruta Tropical',
      heroTitulo: '低价机票贴士',
      intro: '找到尽可能低票价的七个贴士。',
      t1: '<strong>提前规划。</strong> 出发日期越近，机票通常越贵。建议提前 21 天或更早在 Ruta Tropical 搜索，也可以尝试提前 14 天。',
      t2: '<strong>选择更灵活的日期。</strong> 出行日期灵活可以明显降低票价。周二或周三等周中航班通常比周一、周四或周五更便宜。',
      t3: '<strong>时间就是关键。</strong> 在非高峰时段出行更容易找到低价，例如清晨或深夜。可在筛选器中选择“任意时间”。',
      t4: '<strong>避开旺季。</strong> 在复活节刚结束或年底节日前出行，机票更划算，海滩人更少，排队时间也更短。',
      t5: '<strong>感谢选择。</strong> 在 Ruta Tropical，我们会对比数百家<a href="#">航空公司</a>，为你展示更优价格。',
      t6: '<strong>位置很重要。</strong> 许多廉价航空飞往备选机场，机场税费更低，租车也更实惠，堵车更少。',
      t7: '<strong>最重要的是……</strong> 预订前先<a href="#">在 Ruta Tropical 搜索</a>。',
      usuarioMenu: {
        anadir: '+ 添加用户',
        trips: 'Trips',
        ayudaFaq: '帮助/常见问题',
        cuenta: '你的账户',
        cerrarSesion: '退出登录',
        promptNombre: '姓名:',
        promptCorreo: '邮箱:'
      },
      menu: {
        vuelos: '机票', hoteles: '酒店', autobus: '巴士',
        ia: 'AI 规划', planea: '规划行程', nosotros: '关于我们',
        contacto: '联系我们', faq: '常见问题', explorar: '探索',
        terminos: '条款与条件', rastreador: '航班追踪', viajes: '行程',
        telLbl: '电话:', correoLbl: '邮箱:'
      },
      footer: {
        desc: '值得信赖的旅行伙伴，以更优价格探索世界。比价、省钱，畅游无界。',
        colEmpresa: '公司', acercaDe: '关于我们', prensa: '媒体', afiliados: '联盟', socios: '合作伙伴',
        colContacto: '联系', ayudaFaq: '帮助 / FAQ', hoteles: '酒店', publicidad: '广告',
        colMas: '更多', tarifasAereas: '机票价格', ofertasBajas: '特价优惠', privacidad: '隐私政策',
        descargaApp: '下载应用', appTexto: '随时随地查看行程与优惠。',
        playSmall: '立即获取', playStrong: 'Google Play',
        appleSmall: '前往下载', appleStrong: 'App Store',
        derechos: '© 2026 RuTa Tropical. 保留所有权利。',
        terminos: '条款与条件', cookies: 'Cookie'
      }
    },
    AR: {
      panelTitulo: 'اختر لغتك',
      buscarPh: 'ابحث عن لغة...',
      pageTitle: 'نصائح الأسعار المنخفضة | Ruta Tropical',
      heroTitulo: 'نصائح الأسعار المنخفضة',
      intro: 'سبع نصائح للعثور على أقل سعر ممكن.',
      t1: '<strong>خطط مسبقًا.</strong> كلما اقترب موعد السفر زاد سعر التذكرة عادةً. ابحث في Ruta Tropical قبل 21 يومًا أو أكثر، أو جرّب قبل 14 يومًا.',
      t2: '<strong>أي يوم تختار؟</strong> المرونة في مواعيد السفر قد تخفّض السعر بشكل ملحوظ، وغالبًا ما تكون رحلات منتصف الأسبوع (الثلاثاء أو الأربعاء) أرخص.',
      t3: '<strong>التوقيت يصنع الفارق.</strong> السفر خارج أوقات الذروة مثل الصباح الباكر أو وقت متأخر من الليل يساعد في إيجاد أسعار أقل.',
      t4: '<strong>تجنّب مواسم الذروة.</strong> سافر بعد عيد الفصح مباشرة أو قبل عطلة نهاية السنة للحصول على أسعار أفضل وازدحام أقل.',
      t5: '<strong>شكرًا لاختيارك.</strong> تقارن Ruta Tropical مئات <a href="#">شركات الطيران</a> لتعرض لك أفضل سعر متاح.',
      t6: '<strong>الموقع مهم.</strong> كثير من شركات الطيران منخفضة التكلفة تتجه إلى مطارات بديلة برسوم أقل وتكلفة تأجير سيارات أوفر.',
      t7: '<strong>والأهم…</strong> <a href="#">ابحث في Ruta Tropical</a> قبل الحجز.',
      usuarioMenu: {
        anadir: '+ إضافة مستخدم',
        trips: 'Trips',
        ayudaFaq: 'المساعدة/الأسئلة الشائعة',
        cuenta: 'حسابك',
        cerrarSesion: 'تسجيل الخروج',
        promptNombre: 'الاسم:',
        promptCorreo: 'البريد الإلكتروني:'
      },
      menu: {
        vuelos: 'رحلات جوية', hoteles: 'فنادق', autobus: 'حافلة',
        ia: 'خطط بالذكاء الاصطناعي', planea: 'خطط لرحلاتك', nosotros: 'من نحن',
        contacto: 'اتصل بنا', faq: 'الأسئلة الشائعة', explorar: 'استكشف',
        terminos: 'الشروط والأحكام', rastreador: 'متتبع الرحلات', viajes: 'الرحلات',
        telLbl: 'الهاتف:', correoLbl: 'البريد:'
      },
      footer: {
        desc: 'وكالتك الموثوقة لاكتشاف العالم بأفضل سعر. قارن ووفّر وسافر بلا حدود.',
        colEmpresa: 'الشركة', acercaDe: 'من نحن', prensa: 'الصحافة', afiliados: 'الشركاء التابعون', socios: 'الشركاء',
        colContacto: 'التواصل', ayudaFaq: 'المساعدة / الأسئلة الشائعة', hoteles: 'الفنادق', publicidad: 'الإعلانات',
        colMas: 'المزيد', tarifasAereas: 'أسعار الرحلات', ofertasBajas: 'عروض منخفضة', privacidad: 'الخصوصية',
        descargaApp: 'حمّل التطبيق', appTexto: 'احتفظ بحجوزاتك وعروضك معك دائمًا.',
        playSmall: 'متوفر على', playStrong: 'Google Play',
        appleSmall: 'حمّله من', appleStrong: 'App Store',
        derechos: '© 2026 RuTa Tropical. جميع الحقوق محفوظة.',
        terminos: 'الشروط والأحكام', cookies: 'ملفات تعريف الارتباط'
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
        const estaAbierto = cajon ? cajon.classList.contains('abierto') : false;
        setCajon(!estaAbierto);
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
      const t = textosTarifas[idiomaActual] || textosTarifas.ES;
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
      const t = textosTarifas[codigo] || textosTarifas.ES;
      idiomaActual = codigo;
      document.documentElement.lang = codigo.toLowerCase();
      document.documentElement.dir = codigo === 'AR' ? 'rtl' : 'ltr';
      document.title = t.pageTitle;

      if (idiomaCodigo) idiomaCodigo.textContent = codigo;
      if (idiomaTitulo) idiomaTitulo.textContent = t.panelTitulo;
      if (idiomaBuscar) idiomaBuscar.placeholder = t.buscarPh;

      const setT = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
      const setH = (id, v) => { const el = document.getElementById(id); if (el) el.innerHTML = v; };

      setT('hero-titulo', t.heroTitulo);
      setT('tip-intro', t.intro);
      setH('tip-1', t.t1);
      setH('tip-2', t.t2);
      setH('tip-3', t.t3);
      setH('tip-4', t.t4);
      setH('tip-5', t.t5);
      setH('tip-6', t.t6);
      setH('tip-7', t.t7);

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
        const um = (textosTarifas[idiomaActual] || textosTarifas.ES).usuarioMenu;
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
})();

const baseES = {
    panelTitulo: 'SELECCIONA TU IDIOMA',
    buscarPh: 'Buscar idioma...',
    pageTitle: 'Tips de tarifas bajas | Ruta Tropical',
    heroTitulo: 'Tips de tarifas bajas',
    intro: 'Siete tips clave para cazar la tarifa más baja posible y volar pagando menos.',
    t1: '<strong>Planea con antelación.</strong> Mientras más cerca esté la fecha de tu viaje, más caro suele ser el pasaje. Quien viaja de último momento tiene <span class="tip-alerta">poca flexibilidad</span> y termina pagando más. Si te organizas con tiempo, el precio juega a tu favor: busca en Ruta Tropical con <span class="tip-acento">21 días o más de antelación</span>, o intenta con <span class="tip-acento">14 días</span> como segunda opción. ¿Sigues ahí? ¿Por qué sigues esperando?',
    t2: '<strong>¿Lunes, martes, miércoles, jueves, viernes, sábado o domingo?</strong> Tener flexibilidad para viajar otro día puede bajar el precio de forma notable. Activa la opción de <span class="tip-acento">fechas flexibles</span> al buscar en Ruta Tropical; a veces conviene salir un sábado. Volar a mitad de semana (<span class="tip-acento">martes o miércoles</span>) suele ser más barato que lunes, jueves o viernes.',
    t3: '<strong>Todo en la vida es cuestión de tiempo.</strong> La clave para conseguir la tarifa más baja es volar cuando los demás no lo hacen. <span class="tip-acento">Temprano en la mañana o tarde en la noche</span> suelen ser los mejores horarios para viajes de placer, y el mediodía para viajes de trabajo. Selecciona <span class="tip-alerta">"Cualquiera"</span> en el filtro de horario para ver más tarifas bajas.',
    t4: '<strong>Evita las temporadas altas.</strong> No viajes cuando todos los demás viajan. Visita tu destino de playa justo después de Semana Santa o antes de las fiestas de fin de año para encontrar <span class="tip-acento">pasajes más baratos</span>, playas menos llenas y filas más cortas—incluso viajando en <span class="tip-alerta">Nochebuena</span>.',
    t5: '<strong>Gracias por elegir.</strong> Cuando las aerolíneas de bajo costo simplificaron sus precios, las demás las imitaron, pero no todas funcionan igual. Al buscar en Ruta Tropical, comparamos <span class="tip-acento">cientos de aerolíneas</span> en <a href="#">nuestro buscador</a> para mostrarte la mejor tarifa.',
    t6: '<strong>Ubicación, ubicación, ubicación.</strong> Muchas aerolíneas de bajo costo vuelan a <span class="tip-acento">aeropuertos alternos</span>, y el ahorro en tasas se refleja en el precio final, además de ofrecer <span class="tip-alerta">menos tráfico</span> y mejores tarifas en alquiler de autos. Ruta Tropical te muestra automáticamente los aeropuertos cercanos.',
    t7: '<strong>Y lo más importante…</strong> <a href="#">busca en Ruta Tropical</a> antes de reservar y asegura <span class="tip-acento">la mejor oferta disponible</span>.',
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
  };