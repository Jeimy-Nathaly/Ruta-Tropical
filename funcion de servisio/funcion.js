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

  const textosFuncion = {
    ES: {
      panelTitulo: 'SELECCIONA TU IDIOMA',
      buscarPh: 'Buscar idioma...',
      pageTitle: 'Cómo funcionan nuestros servicios | Ruta Tropical',
      heroTitulo: 'Cómo funcionan nuestros servicios',
      tocTitle: 'Tabla de contenidos',
      h2Intro: 'Introducción',
      pIntro1: 'Cada vez que haces una búsqueda, Ruta Tropical revisa en segundos los precios de <span class="texto-acento">cientos de webs de viajes</span>. Ya busques un vuelo, un hotel o un auto de alquiler, te mostramos las ofertas de toda la web <span class="texto-acento">en un solo lugar</span>. Compara las opciones para el mismo vuelo, hotel o auto y elige dónde reservar: con la misma aerolínea u hotel, con una agencia o con otra web de viajes.',
      pIntro2: 'Te mostramos los precios tal como aparecen en cada web, <span class="texto-destacado">sin añadir tasas propias</span>. Cuando eliges una oferta, el proveedor de esa oferta puede pagarnos por enviarte a su web o por ayudarte a reservar con él. Así nuestros servicios son <span class="texto-acento">gratuitos para ti</span>.',
      pIntro3: 'También ganamos dinero mostrando <span class="texto-acento">anuncios relacionados con viajes</span>. Si haces clic en uno de ellos, es posible que la empresa nos pague por ese clic.',
      pIntro4: '<span class="texto-destacado">No somos una agencia de viajes:</span> no vendemos boletos de avión ni hacemos reservas, y tampoco intervenimos en el pago. Al seleccionar una opción para reservar, saldrás de nuestra web. Revisa los detalles y las condiciones del proveedor antes de completar tu reserva.',
      h2Recom: 'Cómo recomendamos el contenido y listamos los resultados',
      h3Sistemas: 'Nuestros sistemas de recomendación',
      pSist1: 'Usamos sistemas de recomendación para ayudarte a descubrir contenido que creemos que te gustará. Para ello ponderamos factores como el lugar desde el que creemos que buscas, lo que escribes en el formulario de búsqueda (<span class="texto-acento">origen, destino, fechas, número de viajeros</span>), el precio de las ofertas, la popularidad de los destinos y, a veces, nuestros ingresos previstos.',
      pSist2: 'Por ejemplo, en nuestra página de inicio encontrarás varios módulos de recomendación:',
      modulos: [
        '<strong>"Explora el mundo desde…":</strong> destinos que podrías querer visitar desde tu ubicación, según tu aeropuerto de origen, las fechas de búsqueda, los precios y la popularidad del destino.',
        '<strong>"Directo sin escalas":</strong> destinos a los que puedes volar <span class="texto-acento">sin escalas</span> desde tu aeropuerto de origen.',
        '<strong>"Explora":</strong> permite buscar destinos por <span class="texto-acento">presupuesto y duración</span>, según las ofertas baratas encontradas por otros usuarios.',
        '<strong>"Filtros recomendados":</strong> sugiere filtros según tu comportamiento anterior o el lugar buscado. También puede incluir filtros populares entre otros usuarios.'
      ],
      pSist3: 'Los resultados de búsqueda también son un sistema de recomendación. A continuación explicamos cómo los ordenamos en cada categoría.',
      h3Vuelos: 'Vuelos',
      h4MejorOpcion: 'Por la mejor opción o por recomendación',
      pVuelos1: 'Que un vuelo sea barato no significa que sea el mejor. Por eso, por defecto, ordenamos los vuelos para ofrecerte la <span class="texto-acento">mejor relación entre precio y comodidad</span>, según factores como la duración, el precio, la distancia entre origen y destino, el número de viajeros y la forma en que iniciaste la búsqueda. Si un vuelo es solo un poco más barato pero mucho más largo, es probable que no aparezca primero, porque el ahorro puede no compensar la molestia de una <span class="texto-destacado">escala larga</span>.',
      pVuelos2: 'A veces el mismo vuelo está en varias webs de proveedores. Destacamos al <span class="texto-acento">proveedor más barato</span> y ordenamos los demás según el porcentaje de clics y el costo por clic. Si un proveedor <span class="texto-destacado">no es transparente con sus tarifas</span>, solemos no recomendarlo.',
      pVuelos3: 'Mostramos ofertas de muchas fuentes, como aerolíneas, agregadores y agencias en línea. Aun así, nuestros resultados pueden no reflejar todas las ofertas disponibles.',
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

    IT: {
      panelTitulo: 'SELEZIONA LA TUA LINGUA',
      buscarPh: 'Cerca lingua...',
      pageTitle: 'Come funzionano i nostri servizi | Ruta Tropical',
      heroTitulo: 'Come funzionano i nostri servizi',
      tocTitle: 'Indice dei contenuti',
      h2Intro: 'Introduzione',
      pIntro1: 'Ogni volta che effettui una ricerca, Ruta Tropical controlla in pochi secondi i prezzi di <span class="texto-acento">centinaia di siti di viaggio</span>. Che tu cerchi un volo, un hotel o un’auto a noleggio, ti mostriamo le offerte <span class="texto-acento">in un solo posto</span> e ti permettiamo di scegliere dove prenotare.',
      pIntro2: 'Mostriamo i prezzi così come appaiono su ciascun sito, <span class="texto-destacado">senza aggiungere commissioni nostre</span>. Quando scegli un’offerta, il fornitore può pagarci per reindirizzarti al suo sito o aiutarti a prenotare, rendendo il servizio <span class="texto-acento">gratuito per te</span>.',
      pIntro3: 'Guadagniamo anche mostrando <span class="texto-acento">annunci legati ai viaggi</span>. Se clicchi su uno di essi, l’azienda inserzionista può corrisponderci un compenso.',
      pIntro4: '<span class="texto-destacado">Non siamo un’agenzia di viaggi:</span> non vendiamo biglietti, non gestiamo prenotazioni né pagamenti. Quando selezioni un’offerta esci dal nostro sito: verifica sempre le condizioni del fornitore prima di prenotare.',
      h2Recom: 'Come consigliamo i contenuti e ordiniamo i risultati',
      h3Sistemas: 'I nostri sistemi di raccomandazione',
      pSist1: 'Utilizziamo sistemi di raccomandazione per aiutarti a scoprire contenuti utili in base alla posizione stimata, ai dati inseriti (<span class="texto-acento">origine, destinazione, date, viaggiatori</span>), al prezzo delle offerte, alla popolarità delle destinazioni e talvolta ai ricavi previsti.',
      pSist2: 'Ad esempio, nella nostra home page troverai diversi moduli di raccomandazione:',
      modulos: [
        '<strong>"Esplora il mondo da…":</strong> destinazioni che potresti voler visitare dal tuo aeroporto di partenza, date, prezzi e popolarità.',
        '<strong>"Diretto senza scali":</strong> destinazioni raggiungibili <span class="texto-acento">senza scali</span> dal tuo aeroporto di origine.',
        '<strong>"Esplora":</strong> consente di cercare destinazioni in base a <span class="texto-acento">budget e durata</span> partendo dalle offerte trovate dagli utenti.',
        '<strong>"Filtri consigliati":</strong> suggerisce filtri in base alla cronologia, alla ricerca o alle scelte più popolari.'
      ],
      pSist3: 'Anche i risultati di ricerca sono un sistema di raccomandazione. Ecco come li ordiniamo.',
      h3Vuelos: 'Voli',
      h4MejorOpcion: 'Per opzione migliore o raccomandazione',
      pVuelos1: 'Un volo economico non è sempre il migliore. Di default ordiniamo i voli per offrirti il <span class="texto-acento">miglior equilibrio tra prezzo e comodità</span> considerando durata, prezzo, distanza, numero di viaggiatori e modalità di ricerca. Uno <span class="texto-destacado">scalo lungo</span> può far scendere un’opzione anche se costa leggermente meno.',
      pVuelos2: 'Quando lo stesso volo compare su più siti, mettiamo in evidenza il <span class="texto-acento">fornitore più economico</span> e ordiniamo gli altri in base a click-through e costo per clic. I fornitori <span class="texto-destacado">poco trasparenti sulle tariffe</span> vengono solitamente penalizzati.',
      pVuelos3: 'Mostriamo offerte provenienti da compagnie aeree, aggregatori e agenzie online, ma i risultati potrebbero non includere tutte le offerte disponibili.',
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
      pageTitle: 'So funktionieren unsere Dienste | Ruta Tropical',
      heroTitulo: 'So funktionieren unsere Dienste',
      tocTitle: 'Inhaltsverzeichnis',
      h2Intro: 'Einführung',
      pIntro1: 'Bei jeder Suche prüft Ruta Tropical in Sekunden die Preise von <span class="texto-acento">hunderten Reiseportalen</span>. Ob Flug, Hotel oder Mietwagen – wir zeigen Angebote <span class="texto-acento">an einem Ort</span> und lassen dich selbst entscheiden, wo du buchst.',
      pIntro2: 'Wir zeigen Preise so an, wie sie auf der jeweiligen Seite erscheinen, <span class="texto-destacado">ohne eigene Gebühren aufzuschlagen</span>. Bei Auswahl eines Angebots zahlt der Anbieter uns ggf. eine Vergütung, wodurch unser Service <span class="texto-acento">für dich kostenlos</span> bleibt.',
      pIntro3: 'Wir erzielen außerdem Einnahmen durch <span class="texto-acento">reisebezogene Werbeanzeigen</span>, wenn du auf eine Anzeige klickst.',
      pIntro4: '<span class="texto-destacado">Wir sind kein Reisebüro:</span> Wir verkaufen keine Tickets, verwalten keine Buchungen und wickeln keine Zahlungen ab. Bei der Buchung verlässt du unsere Website und prüfst direkt die Bedingungen des Anbieters.',
      h2Recom: 'Wie wir Inhalte empfehlen und Ergebnisse sortieren',
      h3Sistemas: 'Unsere Empfehlungssysteme',
      pSist1: 'Empfehlungssysteme helfen dir, passende Reiseinhalte anhand von geschätztem Standort, Suchangaben (<span class="texto-acento">Abflugort, Ziel, Daten, Reisende</span>), Preisen, Beliebtheit und teils erwarteten Einnahmen zu finden.',
      pSist2: 'Auf unserer Startseite findest du zum Beispiel mehrere Empfehlungsmodule:',
      modulos: [
        '<strong>"Die Welt entdecken ab…":</strong> Ziele ab deinem Abflughafen je nach Reisedatum, Preisen und Beliebtheit.',
        '<strong>"Direkt ohne Zwischenstopp":</strong> Ziele, die du <span class="texto-acento">ohne Zwischenstopp</span> ab deinem Abflugort erreichst.',
        '<strong>"Entdecken":</strong> Suche nach Zielen nach <span class="texto-acento">Budget und Reisedauer</span> anhand gefundener Angebote.',
        '<strong>"Empfohlene Filter":</strong> schlägt Filter basierend auf Aktivität, Suchziel oder Beliebtheit vor.'
      ],
      pSist3: 'Auch Suchergebnisse basieren auf Empfehlungen. Hier erklären wir die Sortierung.',
      h3Vuelos: 'Flüge',
      h4MejorOpcion: 'Nach bester Option oder Empfehlung',
      pVuelos1: 'Ein günstiger Flug ist nicht immer der beste. Standardmäßig sortieren wir nach dem <span class="texto-acento">besten Verhältnis aus Preis und Komfort</span> (Dauer, Preis, Strecke, Reisende, Sucheinstieg). Ein <span class="texto-destacado">langer Zwischenstopp</span> kann trotz kleinem Preisvorteil weiter hinten landen.',
      pVuelos2: 'Taucht derselbe Flug bei mehreren Anbietern auf, heben wir den <span class="texto-acento">günstigsten Anbieter</span> hervor und sortieren weitere nach Klickrate und Cost-per-Click. Anbieter <span class="texto-destacado">ohne transparente Gebühren</span> stufen wir meist zurück.',
      pVuelos3: 'Wir zeigen Angebote von Airlines, Aggregatoren und Online-Reisebüros, können aber nicht jedes Angebot im Netz abdecken.',
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
      pageTitle: 'サービスの仕組み | Ruta Tropical',
      heroTitulo: 'サービスの仕組み',
      tocTitle: '目次',
      h2Intro: 'はじめに',
      pIntro1: '検索するたびに、Ruta Tropicalは<span class="texto-acento">数百の旅行サイト</span>の価格を数秒で確認します。航空券、ホテル、レンタカーのお得な情報を<span class="texto-acento">一か所で比較</span>し、予約先を選べます。',
      pIntro2: '各サイトの表示価格をそのまま案内し、<span class="texto-destacado">独自の手数料は追加しません</span>。オファー選択時に提供元から送客や予約支援の対価を得ることがあるため、<span class="texto-acento">無料で利用</span>できます。',
      pIntro3: '旅行関連の<span class="texto-acento">広告表示</span>による収益も得ており、クリックに応じて広告主から支払いを受ける場合があります。',
      pIntro4: '<span class="texto-destacado">当社は旅行代理店ではありません：</span>航空券の販売、予約手続き、決済には関与しません。予約時は外部サイトへ移動するため、事前に提供元の条件をご確認ください。',
      h2Recom: 'コンテンツの推奨と検索結果の表示順',
      h3Sistemas: 'レコメンドシステムについて',
      pSist1: '推定位置情報、検索条件（<span class="texto-acento">出発地、目的地、日程、人数</span>）、価格、人気度、場合によっては想定収益などの要素を組み合わせてコンテンツを推奨します。',
      pSist2: 'トップページには以下のようなレコメンドモジュールがあります。',
      modulos: [
        '<strong>"…から世界を探索":</strong> 出発空港、日程、価格、人気度に応じた行き先を提案します。',
        '<strong>"直行便":</strong> 出発空港から<span class="texto-acento">乗り継ぎなし</span>で行ける都市を表示します。',
        '<strong>"探索":</strong> 他のユーザーが見つけたお得情報をもとに<span class="texto-acento">予算と期間</span>から探せます。',
        '<strong>"おすすめフィルター":</strong> 過去の操作や検索地、人気条件に応じたフィルターを提案します。'
      ],
      pSist3: '検索結果もレコメンドの仕組みで並び替えられます。各カテゴリーの基準は以下の通りです。',
      h3Vuelos: 'フライト',
      h4MejorOpcion: 'おすすめ・ベストバランス順',
      pVuelos1: '安いフライトが常に最適とは限りません。初期設定では所要時間、料金、距離、人数、検索条件をもとに<span class="texto-acento">価格と快適さのバランス</span>を重視して並べます。<span class="texto-destacado">長い乗り継ぎ</span>がある便は少し安くても上位に出ないことがあります。',
      pVuelos2: '同じフライトが複数サイトにある場合、<span class="texto-acento">最安の提供元</span>を目立たせ、他はクリック率やクリック単価で並べます。料金表示が<span class="texto-destacado">不透明な提供元</span>は推奨を下げることがあります。',
      pVuelos3: '航空会社やアグリゲーター、オンライン旅行会社の情報を表示しますが、すべてのオファーを網羅するわけではありません。',
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
      pageTitle: '서비스 이용 안내 | Ruta Tropical',
      heroTitulo: '서비스 이용 안내',
      tocTitle: '목차',
      h2Intro: '소개',
      pIntro1: '검색할 때마다 Ruta Tropical은 <span class="texto-acento">수백 개 여행 사이트</span>의 가격을 몇 초 만에 확인합니다. 항공권, 호텔, 렌터카 상품을 <span class="texto-acento">한곳에서 비교</span>하고 원하는 예약처를 선택하세요.',
      pIntro2: '각 사이트에 표시된 가격을 그대로 보여주며 <span class="texto-destacado">자체 수수료를 추가하지 않습니다</span>. 오퍼 선택 시 제공업체로부터 보상을 받을 수 있어 서비스를 <span class="texto-acento">무료로 제공</span>합니다.',
      pIntro3: '여행 관련 <span class="texto-acento">광고 노출</span>을 통해서도 수익을 얻으며, 광고 클릭 시 광고주로부터 비용을 받을 수 있습니다.',
      pIntro4: '<span class="texto-destacado">당사는 여행사가 아닙니다:</span> 항공권 판매, 예약 진행, 결제 처리에는 관여하지 않습니다. 선택 후 외부 사이트로 이동하므로 예약 전 제공업체의 약관을 확인하세요.',
      h2Recom: '콘텐츠 추천 및 검색 결과 정렬 방식',
      h3Sistemas: '추천 시스템 안내',
      pSist1: '추정 위치, 검색 입력값(<span class="texto-acento">출발지, 목적지, 날짜, 인원</span>), 가격, 인기도, 때로는 예상 수익 등의 요소를 반영해 맞춤형 콘텐츠를 추천합니다.',
      pSist2: '홈 화면에서는 다음과 같은 추천 모듈을 확인할 수 있습니다.',
      modulos: [
        '<strong>"…에서 떠나는 세계 여행":</strong> 출발 공항, 날짜, 가격, 인기도를 바탕으로 추천하는 여행지입니다.',
        '<strong>"직항 노선":</strong> 출발 공항에서 <span class="texto-acento">경유 없이</span> 갈 수 있는 목적지입니다.',
        '<strong>"둘러보기":</strong> 다른 사용자가 찾은 특가를 기준으로 <span class="texto-acento">예산과 기간</span>별 여행지를 찾습니다.',
        '<strong>"추천 필터":</strong> 이전 활동, 검색 지역, 인기 조건에 맞는 필터를 제안합니다.'
      ],
      pSist3: '검색 결과 역시 추천 시스템으로 정렬됩니다. 항목별 정렬 기준을 안내합니다.',
      h3Vuelos: '항공권',
      h4MejorOpcion: '최적 옵션 또는 추천순',
      pVuelos1: '저렴한 항공권이 항상 최선은 아닙니다. 기본적으로 소요 시간, 가격, 거리, 인원, 검색 조건을 고려해 <span class="texto-acento">가격과 편의성의 균형</span>이 좋은 순으로 정렬합니다. <span class="texto-destacado">긴 경유</span>가 있으면 소폭 저렴해도 앞순위에 오르지 않을 수 있습니다.',
      pVuelos2: '동일 항공권이 여러 제공업체에 있을 때 <span class="texto-acento">최저가 업체</span>를 강조하고 클릭률과 클릭당 비용 기준으로 정렬합니다. 요금 안내가 <span class="texto-destacado">불투명한 업체</span>는 추천 순위가 낮아질 수 있습니다.',
      pVuelos3: '항공사, 애그리게이터, 온라인 여행사 등의 상품을 모아서 보여주며 모든 특가가 포함되지 않을 수 있습니다.',
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
      pageTitle: '我们的服务如何运作 | Ruta Tropical',
      heroTitulo: '我们的服务如何运作',
      tocTitle: '目录',
      h2Intro: '简介',
      pIntro1: '每次搜索时，Ruta Tropical 都会在数秒内对比<span class="texto-acento">数百家旅游网站</span>的价格。无论是机票、酒店还是租车，都可<span class="texto-acento">一站式比较</span>并选择预订渠道。',
      pIntro2: '我们展示各网站显示的原始价格，<span class="texto-destacado">不加收额外手续费</span>。当你选择某项报价时，供应商可能会向我们支付引流或预订佣金，从而让服务<span class="texto-acento">对你免费</span>。',
      pIntro3: '我们也会通过展示<span class="texto-acento">旅游相关广告</span>获得收益，点击广告可能会为平台带来收入。',
      pIntro4: '<span class="texto-destacado">我们不是旅行社：</span>不销售机票、不处理预订也不参与付款。跳转至供应商页面后，请在预订前仔细核对条款与细则。',
      h2Recom: '我们如何推荐内容与排序结果',
      h3Sistemas: '推荐系统说明',
      pSist1: '我们会结合预估位置、搜索条件（<span class="texto-acento">出发地、目的地、日期、人数</span>）、价格、目的地热度以及部分预期收益等因素为你推荐内容。',
      pSist2: '例如，在首页你会看到多个推荐模块：',
      modulos: [
        '<strong>“从……探索世界”：</strong>根据出发机场、搜索日期、价格和热度推荐目的地。',
        '<strong>“直飞航线”：</strong>展示从出发机场<span class="texto-acento">无需中转</span>即可直达的目的地。',
        '<strong>“探索”：</strong>根据其他用户发现的低价灵感，按<span class="texto-acento">预算和行程时长</span>查找目的地。',
        '<strong>“推荐筛选”：</strong>结合历史行为、搜索地点或热门偏好提供筛选建议。'
      ],
      pSist3: '搜索结果同样依赖推荐排序，以下说明各类别的排序方式。',
      h3Vuelos: '机票',
      h4MejorOpcion: '按最佳选项或推荐排序',
      pVuelos1: '便宜的机票未必最合适。默认情况下，我们会综合时长、价格、距离、人数与搜索方式，为你提供<span class="texto-acento">价格与舒适度兼顾</span>的排序。<span class="texto-destacado">长时间中转</span>即便价格略低也可能排在后面。',
      pVuelos2: '同一航班出现在多个供应商网站时，我们会突出<span class="texto-acento">价格更低的供应商</span>，并结合点击率与每次点击成本排序。费用<span class="texto-destacado">不够透明的供应商</span>通常排名较低。',
      pVuelos3: '结果涵盖航空公司、比价平台与在线旅行社，但未必包含全网所有报价。',
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
      pageTitle: 'كيف تعمل خدماتنا | Ruta Tropical',
      heroTitulo: 'كيف تعمل خدماتنا',
      tocTitle: 'جدول المحتويات',
      h2Intro: 'مقدمة',
      pIntro1: 'في كل بحث، تراجع Ruta Tropical أسعار <span class="texto-acento">مئات مواقع السفر</span> خلال ثوانٍ لتقارن عروض الطيران والفنادق وتأجير السيارات <span class="texto-acento">في مكان واحد</span> وتختار جهة الحجز المناسبة.',
      pIntro2: 'نعرض الأسعار كما تظهر في كل موقع <span class="texto-destacado">دون إضافة رسوم خاصة بنا</span>. وعند اختيار عرض قد يدفع لنا المزوّد مقابل الإحالة أو المساعدة في الحجز، مما يجعل الخدمة <span class="texto-acento">مجانية بالنسبة لك</span>.',
      pIntro3: 'نحقق أيضًا إيرادات من عرض <span class="texto-acento">إعلانات متعلقة بالسفر</span> عند النقر عليها.',
      pIntro4: '<span class="texto-destacado">لسنا وكالة سفر:</span> لا نبيع التذاكر ولا ندير الحجوزات أو المدفوعات. عند الانتقال للحجز ستغادر موقعنا، لذا راجع شروط المزوّد قبل إتمام الحجز.',
      h2Recom: 'كيف نوصي بالمحتوى ونرتّب النتائج',
      h3Sistemas: 'أنظمة التوصية لدينا',
      pSist1: 'نستخدم أنظمة توصية لمساعدتك على اكتشاف خيارات مناسبة بناءً على الموقع التقديري، وبيانات البحث (<span class="texto-acento">المغادرة، الوجهة، التواريخ، المسافرون</span>)، والأسعار، وشعبية الوجهات، وأحيانًا الإيرادات المتوقعة.',
      pSist2: 'ستجد في الصفحة الرئيسية عدة وحدات توصية مثل:',
      modulos: [
        '<strong>"استكشف العالم من…":</strong> وجهات مقترحة انطلاقًا من مطار المغادرة والتواريخ والأسعار والشعبية.',
        '<strong>"مباشر دون توقف":</strong> وجهات يمكنك الوصول إليها <span class="texto-acento">دون توقف</span> من مطارك.',
        '<strong>"استكشف":</strong> تتيح البحث حسب <span class="texto-acento">الميزانية والمدة</span> بناءً على صفقات وجدها مسافرون آخرون.',
        '<strong>"فلاتر موصى بها":</strong> تقترح فلاتر تناسب نشاطك السابق أو الوجهة أو الخيارات الشائعة.'
      ],
      pSist3: 'تعتمد نتائج البحث أيضًا على أنظمة التوصية، وفيما يلي طريقة ترتيب كل فئة.',
      h3Vuelos: 'رحلات جوية',
      h4MejorOpcion: 'حسب الخيار الأفضل أو التوصية',
      pVuelos1: 'الرحلة الأرخص ليست دائمًا الأفضل؛ لذلك نرتّب افتراضيًا لتحقيق <span class="texto-acento">أفضل توازن بين السعر والراحة</span> حسب المدة والسعر والمسافة وعدد المسافرين. قد يتأخر خيار <span class="texto-destacado">التوقف الطويل</span> حتى لو كان أرخص قليلًا.',
      pVuelos2: 'عند توفر الرحلة نفسها لدى أكثر من مزوّد، نبرز <span class="texto-acento">المزوّد الأقل سعرًا</span> ونرتّب البقية حسب نسبة النقر وتكلفة النقرة، بينما قد يتراجع المزوّد <span class="texto-destacado">غير الشفاف في الرسوم</span>.',
      pVuelos3: 'نعرض عروضًا من شركات الطيران ومجمّعات الحجز ووكالات السفر عبر الإنترنت، وقد لا تشمل النتائج جميع العروض المتاحة.',
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
    },
    EN: {
      panelTitulo: 'SELECT YOUR LANGUAGE',
      buscarPh: 'Search language...',
      pageTitle: 'How our services work | Ruta Tropical',
      heroTitulo: 'How our services work',
      tocTitle: 'Table of contents',
      h2Intro: 'Introduction',
      pIntro1: 'Every time you search, Ruta Tropical checks prices across <span class="texto-acento">hundreds of travel sites</span> in seconds. Whether you search for a flight, hotel, or rental car, we show travel deals <span class="texto-acento">in one place</span>. Compare options for the same flight, hotel, or car and choose where to book.',
      pIntro2: 'We display prices as shown on each site, <span class="texto-destacado">without adding our own fees</span>. When you pick an offer, the provider may pay us for sending you to their site or helping you book. That keeps our service <span class="texto-acento">free for you</span>.',
      pIntro3: 'We also earn revenue by showing <span class="texto-acento">travel-related ads</span>. Clicking an ad may generate a payment from the advertiser.',
      pIntro4: '<span class="texto-destacado">We are not a travel agency:</span> we do not sell tickets, handle bookings, or process payments. When you select an offer, you leave our site—check the provider’s terms before booking.',
      h2Recom: 'How we recommend content and rank results',
      h3Sistemas: 'Our recommendation systems',
      pSist1: 'We use recommendation systems to help you discover relevant travel content based on estimated location, search inputs (<span class="texto-acento">origin, destination, dates, travelers</span>), offer prices, destination popularity, and sometimes expected revenue.',
      pSist2: 'For example, on our home page you will find several recommendation modules:',
      modulos: [
        '<strong>"Explore the world from…":</strong> destinations you may want to visit from your departure airport, search dates, prices, and popularity.',
        '<strong>"Direct non-stop":</strong> destinations you can reach <span class="texto-acento">non-stop</span> from your origin airport.',
        '<strong>"Explore":</strong> lets you search destinations by <span class="texto-acento">budget and trip length</span> based on deals found by travelers.',
        '<strong>"Recommended filters":</strong> suggests filters based on prior activity, searched places, or popular choices.'
      ],
      pSist3: 'Search results also rely on recommendations. Below is how we sort each category.',
      h3Vuelos: 'Flights',
      h4MejorOpcion: 'By best option or recommendation',
      pVuelos1: 'A cheap flight is not always the best one. By default, we sort flights for the <span class="texto-acento">best balance of price and convenience</span> considering duration, price, distance, travelers, and search flow. A <span class="texto-destacado">long layover</span> may rank lower even if slightly cheaper.',
      pVuelos2: 'When the same flight appears on multiple provider sites, we highlight the <span class="texto-acento">lowest-priced provider</span> and order others by click-through rate and cost per click. Providers that <span class="texto-destacado">lack fee transparency</span> are typically ranked lower.',
      pVuelos3: 'We pull offers from airlines, aggregators, and online agencies, though results may not include every single offer on the web.',
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
        colContacto: 'Contacto', ayudaFaq: 'Help / FAQ', hoteles: 'Hotels', publicidad: 'Advertising',
        colMas: 'More', tarifasAereas: 'Airfares', ofertasBajas: 'Low deals', privacidad: 'Privacy',
        descargaApp: 'Get the app', appTexto: 'Take your bookings and deals with you everywhere.',
        playSmall: 'GET IT ON', playStrong: 'Google Play',
        appleSmall: 'DOWNLOAD ON THE', appleStrong: 'App Store',
        derechos: '© 2026 RuTa Tropical. All rights reserved.',
        terminos: 'Terms and conditions', cookies: 'Cookies'
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
      const t = textosFuncion[idiomaActual] || textosFuncion.ES;
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

    // Tabla de contenidos dinámica y sincronizada con scroll
    const navToc = document.getElementById('toc-nav');
    let scrollObserver = null;

    function slug(text) {
      return text
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    }

    function construirTOC() {
      if (!navToc) return;
      if (scrollObserver) scrollObserver.disconnect();
      navToc.innerHTML = '';

      const headings = [...document.querySelectorAll('.toc-source h2, .toc-source h3, .toc-source h4')];
      const root = document.createElement('ul');
      const stack = [{ level: 1, list: root }];
      const used = new Set();

      headings.forEach((h) => {
        const level = Number(h.tagName[1]);
        let id = slug(h.textContent);
        while (used.has(id)) id += '-2';
        used.add(id);
        h.id = id;

        while (stack.length > 1 && stack[stack.length - 1].level >= level) stack.pop();
        const parent = stack[stack.length - 1];

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = h.textContent;
        li.appendChild(a);
        parent.list.appendChild(li);

        const sub = document.createElement('ul');
        li.appendChild(sub);
        stack.push({ level, list: sub });
      });

      root.querySelectorAll('ul:empty').forEach((u) => u.remove());
      navToc.appendChild(root);

      const links = new Map([...navToc.querySelectorAll('a')].map((a) => [a.getAttribute('href').slice(1), a]));
      scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) => a.classList.remove('active'));
          const targetLink = links.get(entry.target.id);
          if (targetLink) targetLink.classList.add('active');
        });
      }, { rootMargin: '-15% 0px -75% 0px' });

      headings.forEach((h) => scrollObserver.observe(h));
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
      const t = textosFuncion[codigo] || textosFuncion.ES;
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
      setT('toc-title', t.tocTitle);
      setT('h2-intro', t.h2Intro);
      setH('p-intro-1', t.pIntro1);
      setH('p-intro-2', t.pIntro2);
      setH('p-intro-3', t.pIntro3);
      setH('p-intro-4', t.pIntro4);
      setT('h2-recom', t.h2Recom);
      setT('h3-sistemas', t.h3Sistemas);
      setH('p-sist-1', t.pSist1);
      setT('p-sist-2', t.pSist2);
      setT('p-sist-3', t.pSist3);
      setT('h3-vuelos', t.h3Vuelos);
      setT('h4-mejor-opcion', t.h4MejorOpcion);
      setH('p-vuelos-1', t.pVuelos1);
      setH('p-vuelos-2', t.pVuelos2);
      setT('p-vuelos-3', t.pVuelos3);

      const listaMod = document.getElementById('lista-modulos');
      if (listaMod && Array.isArray(t.modulos)) {
        const items = listaMod.querySelectorAll('li');
        t.modulos.forEach((html, idx) => {
          if (items[idx]) items[idx].innerHTML = html;
        });
      }

   actualizarEncabezadosTOC(t);
      pintarUsuario();
      traducirMenuLateral(t);
      traducirFooter(t);
      construirTOC();
      
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
    construirTOC();
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
        const um = (textosFuncion[idiomaActual] || textosFuncion.ES).usuarioMenu;
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

  function actualizarEncabezadosTOC(t) {
      const source = document.querySelectorAll('.toc-source h2, .toc-source h3, .toc-source h4');
      const traducciones = [
        t.h2Intro,
        t.h2Recom,
        t.h3Sistemas,
        t.h3Vuelos,
        t.h4MejorOpcion
      ];

      source.forEach((el, idx) => {
        if (traducciones[idx]) {
          el.textContent = traducciones[idx];
        }
      });
    }

  
})();