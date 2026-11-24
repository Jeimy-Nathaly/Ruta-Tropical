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

  const textosTerminos = {
    ES: {
      panelTitulo: 'SELECCIONA TU IDIOMA', buscarPh: 'Buscar idioma...',
      pageTitle: 'Términos y condiciones | Ruta Tropical',
      heroTitulo: 'Términos y condiciones',
      pIntro1: 'Lee estos Términos y condiciones con detenimiento antes de usar cualquier material, información, producto o servicio de esta página. Al entrar a la página web de <span class="resalte-azul">Ruta Tropical</span> o a cualquiera de sus plataformas ("Nuestra web"), aceptas estos Términos y condiciones ("Términos") y nuestra <a href="#privacidad">Política de privacidad</a>. Si no estás de acuerdo con ellos, te pedimos que no uses Nuestra web.',
      pNotice: 'Estos Términos incluyen limitaciones de responsabilidad. Léelos con atención.',
      pIntro2: 'Podemos modificar estos Términos y publicar una nueva versión en Nuestra web en cualquier momento. Si sigues usando Nuestra web después de que publiquemos una modificación, entendemos que <span class="resalte-azul">aceptas los Términos vigentes</span>.',
      h2_1: '1. Qué es Ruta Tropical',
      p_1_1: 'Ruta Tropical es una web para buscar y comparar opciones de viaje, como <span class="resalte-azul">vuelos, alojamiento, alquiler de autos</span>, excursiones y paquetes vacacionales (los "Productos de viaje"). Los <span class="resalte-rojo">Proveedores</span> son responsables de sus Productos de viaje.',
      p_1_2: 'Tú eres responsable de leer y entender los términos y las políticas de cada Proveedor, que son los que rigen tu reserva. Mostrar un Proveedor no significa que Ruta Tropical esté afiliada a él ni lo respalde.',
      h2_2: '2. Reservas hechas a través de Ruta Tropical',
      p_2_1: 'Las reservas se completan con el Proveedor indicado en la página de reserva. Nuestra web funciona solo como una <span class="resalte-azul">herramienta de búsqueda</span> y no define precios, tasas ni condiciones.',
      h2_3: '3. Precios, tasas y tipo de cambio',
      p_3_1: 'Mostramos contenido y precios entregados por los Proveedores, que pueden cambiar en cualquier momento y sumar <span class="resalte-rojo">cargos adicionales</span> o impuestos locales. Comprueba siempre el precio antes de confirmar.',
      p_3_2: 'Algunos Proveedores cobran en otra moneda. El <span class="resalte-azul">tipo de cambio</span> mostrado es solo de referencia y puede variar.',
      h2_4: '4. Propiedad intelectual',
      p_4_1: 'Ruta Tropical, sus socios y licenciantes son propietarios de los textos, imágenes, diseños, software y marcas de Nuestra web. No puedes copiar ni divulgar ese contenido salvo para <span class="resalte-azul">uso personal y no comercial</span>.',
      p_4_2: 'Los demás productos, servicios o nombres pertenecen a sus respectivos dueños y se mencionan solo para identificarlos.',
      h2_5: '5. Uso de Nuestra web',
      p_5_1: 'Para registrarte o usar Nuestra web debes tener la <span class="resalte-azul">edad legal</span> para celebrar contratos en tu país.',
      p_5_2: 'Nuestra web solo puede usarse para buscar ofertas de viaje legítimas. Está <span class="resalte-rojo">prohibido</span> hacer reservas falsas, fraudulentas o especulativas. Sin autorización previa por escrito, no puedes:',
      ul5Plain: [
        '(i) acceder a Nuestra web con procesos automáticos o sistemas para extraer datos, ni con fines distintos del uso personal;',
        '(ii) saltarte las restricciones técnicas o las medidas de seguridad de Nuestra web;',
        '(iii) usar enlaces profundos hacia cualquier parte de Nuestra web;',
        '(iv) realizar acciones que sobrecarguen o interfieran con nuestros sistemas;',
        '(v) reproducir, copiar, vender, revender o lucrar con Nuestra web;',
        '(vi) usarla con fines ilegales, dañinos o inapropiados;',
        '(vii) publicar material que vulnere derechos de terceros o la ley;',
        '(viii) obtener o almacenar información personal de otras personas;',
        '(ix) usarla con fines comerciales;',
        '(x) publicar anuncios o material promocional.'
      ],
      p_5_3: 'Si ocurre alguno de estos casos, podemos <span class="resalte-rojo">suspender o restringir el acceso</span> en cualquier momento. Además, te comprometes a no:',
      ul5Prohibido: [
        'evitar, desactivar o interferir con las funciones de seguridad;',
        'hacerte pasar por otra persona o entidad;',
        'proporcionar información falsa o engañosa;',
        'pedir datos personales a otras personas;',
        'eliminar, añadir o cambiar el contenido de otros usuarios;',
        'quitar o alterar avisos de derechos de autor;',
        'desprestigiar públicamente a una persona o al contenido de otro usuario;',
        'publicar amenazas de violencia o promover actividades ilegales.'
      ],
      p_5_4: 'Si ves contenido abusivo, puedes denunciarlo en <a href="mailto:contacto@rutatropical.com">contacto@rutatropical.com</a>.',
      h2_6: '6. Tu cuenta',
      p_6_1: 'Si creas una cuenta, eres responsable de mantener la <span class="resalte-azul">confidencialidad de tu contraseña</span> y de todo lo que ocurra en ella.',
      p_6_2: 'Mantén tu número actualizado si recibes mensajes en tu teléfono y borra la información guardada si transfieres o cambias de dispositivo.',
      h2_7: '7. Tus comentarios y contenido',
      p_7_1: 'Eres responsable de lo que envíes, incluyendo su veracidad, originalidad y respeto a los derechos de terceros.',
      p_7_2: 'Al enviarnos contenido, otorgas una licencia no exclusiva, gratuita y mundial para usarlo, publicarlo y distribuirlo con fines operativos y promocionales.',
      h2_8: '8. Derechos de propiedad intelectual de otras personas',
      p_8_1: 'Prohibimos subir o publicar contenido que infrinja derechos de terceros. Escríbenos a <a href="mailto:contacto@rutatropical.com">contacto@rutatropical.com</a> para reportarlo.',
      h2_9: '9. Exención de garantías',
      p_9_1: 'Nuestra web y sus servicios se ofrecen <span class="resalte-azul">"tal cual" y "según disponibilidad"</span>, sin garantía de que los resultados sean exhaustivos o muestren siempre el precio más bajo.',
      h2_10: '10. Limitación de responsabilidad',
      p_10_1: 'En la medida que permita la ley, Ruta Tropical no será responsable de daños indirectos o pérdidas derivadas del uso de la web o de un Proveedor, y nuestra <span class="resalte-rojo">responsabilidad total se limita a 50 USD</span> cuando la ley lo permita.',
      h2_11: '11. Te comprometes a protegernos',
      p_11_1: 'Aceptas indemnizar y mantener libre de responsabilidad a Ruta Tropical frente a reclamaciones o gastos derivados del incumplimiento de estos Términos o de la ley.',
      h2_12: '12. Enlaces a otras webs',
      p_12_1: 'Los enlaces a <span class="resalte-azul">otras webs</span> se ofrecen solo como referencia; no avalamos su contenido ni respondemos por su uso.',
      h2_13: '13. Normas de las aerolíneas',
      p_13_1: 'Incumplir las normas de una aerolínea (como trayectos no volados o reservas duplicadas) puede provocar <span class="resalte-rojo">cancelaciones o cargos adicionales</span> bajo tu responsabilidad.',
      h2_14: '14. Inteligencia artificial',
      p_14_1: 'Las funciones con <span class="resalte-azul">inteligencia artificial</span> se ofrecen "tal cual" y pueden contener errores; verifica siempre los datos clave con el Proveedor.',
      h2_15: '15. Privacidad y seguridad',
      p_15_1: 'El tratamiento de datos personales se rige por nuestra Política de privacidad. Revisa también <a href="seguridad.html">Seguridad en Ruta Tropical</a>.',
      h2_16: '16. Requisitos generales',
      p_16_1: 'Podemos modificar estos Términos en cualquier momento y dar por terminado el acceso si corresponde.',
      p_16_2: 'Estos Términos se rigen por las leyes de la <span class="resalte-azul">República Dominicana</span> y sus tribunales competentes.',
      h2Avisos: 'Otros avisos legales',
      pAvisos: 'Google Play y su logo son marcas de Google LLC. Apple, iPhone, iPad y App Store son marcas de Apple Inc.',
      h2Operador: 'Nuestra web es operada por:',
      addressOperador: 'Ruta Tropical<br>Santo Domingo, República Dominicana<br><a href="mailto:contacto@rutatropical.com">contacto@rutatropical.com</a>',
      pUpdated: 'Última actualización: 20 de noviembre de 2026',
      usuarioMenu: { anadir: '+ Añadir usuario', trips: 'Trips', ayudaFaq: 'Ayuda/Preguntas frecuentes', cuenta: 'Tu cuenta', cerrarSesion: 'Cerrar sesión', promptNombre: 'Nombre:', promptCorreo: 'Correo electrónico:' },
      menu: { vuelos: 'Vuelos', hoteles: 'Hoteles', autobus: 'Autobús', ia: 'Planifica con IA', planea: 'Planea tus viajes', nosotros: 'Sobre nosotros', contacto: 'Contacto', faq: 'Preguntas frecuentes', explorar: 'Explorar', terminos: 'Términos y condiciones', rastreador: 'Rastreador de vuelos', viajes: 'Viajes', telLbl: 'Teléfono:', correoLbl: 'Correo:' },
      footer: { desc: 'Tu agencia de confianza para descubrir el mundo al mejor precio. Compara, ahorra y vuela sin límites.', colEmpresa: 'Empresa', acercaDe: 'Acerca de', prensa: 'Prensa', afiliados: 'Afiliados', socios: 'Socios', colContacto: 'Contacto', ayudaFaq: 'Ayuda / FAQ', hoteles: 'Hoteles', publicidad: 'Publicidad', colMas: 'Más', tarifasAereas: 'Tarifas aéreas', ofertasBajas: 'Ofertas bajas', privacidad: 'Privacidad', descargaApp: 'Descarga la app', appTexto: 'Lleva tus reservas y ofertas siempre contigo.', playSmall: 'DISPONIBLE EN', playStrong: 'Google Play', appleSmall: 'CONSÍGUELO EN', appleStrong: 'App Store', derechos: 'RuTa Tropical. Todos los derechos reservados.', terminos: 'Términos y condiciones', cookies: 'Cookies' }
    },
    EN: {
      panelTitulo: 'SELECT YOUR LANGUAGE', buscarPh: 'Search language...',
      pageTitle: 'Terms and Conditions | Ruta Tropical',
      heroTitulo: 'Terms and conditions',
      pIntro1: 'Please read these Terms and conditions carefully before using any material or service on this site. By accessing <span class="resalte-azul">Ruta Tropical</span> ("Our site"), you agree to these Terms and our <a href="#privacidad">Privacy Policy</a>.',
      pNotice: 'These Terms include limitations of liability. Please read them carefully.',
      pIntro2: 'We may update these Terms at any time. Continued use of Our site means you <span class="resalte-azul">accept the current Terms</span>.',
      h2_1: '1. What Ruta Tropical is',
      p_1_1: 'Ruta Tropical helps you search and compare <span class="resalte-azul">flights, hotels, car rentals</span>, tours, and travel packages. Third-party <span class="resalte-rojo">Providers</span> are responsible for their Travel Products.',
      p_1_2: 'You are responsible for reading each Provider’s terms and policies. Showing a Provider is not an endorsement by Ruta Tropical.',
      h2_2: '2. Bookings made through Ruta Tropical',
      p_2_1: 'Bookings are completed directly with the Provider. Our site acts as a <span class="resalte-azul">search tool</span> and does not set prices or booking terms.',
      h2_3: '3. Prices, fees, and exchange rates',
      p_3_1: 'Provider prices can change at any time and may include <span class="resalte-rojo">extra fees</span> or local taxes. Check the final price before booking.',
      p_3_2: 'Some Providers charge in another currency. Displayed <span class="resalte-azul">exchange rates</span> are for reference only.',
      h2_4: '4. Intellectual property',
      p_4_1: 'Ruta Tropical, its partners, and licensors own the site’s content. Do not copy or distribute it except for <span class="resalte-azul">personal, non-commercial use</span>.',
      p_4_2: 'Other product or brand names belong to their respective owners.',
      h2_5: '5. Use of Our site',
      p_5_1: 'You must be of <span class="resalte-azul">legal age</span> to enter into contracts in your country to use Our site.',
      p_5_2: 'Use Our site only for legitimate travel searches. False or fraudulent bookings are <span class="resalte-rojo">prohibited</span>. Without written permission, you may not:',
      ul5Plain: [
        "(i) access Our site via automated scraping or non-personal extraction;",
        "(ii) bypass technical restrictions or security controls;",
        "(iii) deep-link to any part of Our site;",
        "(iv) overload or interfere with our systems;",
        "(v) reproduce, copy, sell, or monetize Our site;",
        "(vi) use it for unlawful or harmful purposes;",
        "(vii) post material that infringes third-party rights or law;",
        "(viii) collect or store others' personal data;",
        "(ix) use it for commercial purposes;",
        "(x) post ads or promotional material."
      ],
      p_5_3: 'We may <span class="resalte-rojo">suspend or restrict access</span> if violations occur. You also agree not to:',
      ul5Prohibido: [
        "circumvent or disable security features;",
        "impersonate another person or entity;",
        "provide false or misleading information;",
        "solicit personal data from others;",
        "delete, add, or alter other users' content;",
        "remove copyright or proprietary notices;",
        "publicly disparage a person or user content;",
        "post threats of violence or promote illegal acts."
      ],
      p_5_4: 'Report abusive content to <a href="mailto:contacto@rutatropical.com">contacto@rutatropical.com</a>.',
      h2_6: '6. Your account',
      p_6_1: 'Keep your <span class="resalte-azul">password confidential</span> and report any unauthorized account activity immediately.',
      p_6_2: 'Keep your phone number current for alerts and wipe stored site data before transferring a device.',
      h2_7: '7. Your feedback and content',
      p_7_1: 'You are responsible for the accuracy and legality of any content you submit.',
      p_7_2: 'Submitted content grants Ruta Tropical a worldwide, royalty-free license to use and distribute it for operational and promotional purposes.',
      h2_8: '8. Third-party intellectual property rights',
      p_8_1: 'Infringing content is prohibited. Contact <a href="mailto:contacto@rutatropical.com">contacto@rutatropical.com</a> to report infringement.',
      h2_9: '9. Disclaimer of warranties',
      p_9_1: 'Our site and services are provided <span class="resalte-azul">"as is" and "as available"</span> without guarantees of completeness or lowest price.',
      h2_10: '10. Limitation of liability',
      p_10_1: 'To the fullest extent permitted by law, Ruta Tropical is not liable for indirect losses or Provider actions, and <span class="resalte-rojo">total liability is capped at USD 50</span> where permitted.',
      h2_11: '11. Indemnification',
      p_11_1: 'You agree to indemnify Ruta Tropical against claims or legal costs arising from Terms breaches or unlawful use.',
      h2_12: '12. Links to other websites',
      p_12_1: 'Links to <span class="resalte-azul">other sites</span> are provided for convenience; we are not responsible for their content or policies.',
      h2_13: '13. Airline rules',
      p_13_1: 'Violating airline rules (such as unused segments or duplicate bookings) may result in <span class="resalte-rojo">cancellations or extra fees</span>.',
      h2_14: '14. Artificial intelligence',
      p_14_1: '<span class="resalte-azul">AI features</span> are provided "as is" and may contain errors; always verify key details with the Provider.',
      h2_15: '15. Privacy and security',
      p_15_1: 'Personal data is governed by our Privacy Policy. See also <a href="seguridad.html">Security at Ruta Tropical</a>.',
      h2_16: '16. General requirements',
      p_16_1: 'We may modify these Terms or terminate access at any time.',
      p_16_2: 'Governed by the laws and competent courts of the <span class="resalte-azul">Dominican Republic</span>.',
      h2Avisos: 'Other legal notices',
      pAvisos: 'Google Play is a trademark of Google LLC. Apple, iPhone, iPad, and App Store are trademarks of Apple Inc.',
      h2Operador: 'Our site is operated by:',
      addressOperador: 'Ruta Tropical<br>Santo Domingo, Dominican Republic<br><a href="mailto:contacto@rutatropical.com">contacto@rutatropical.com</a>',
      pUpdated: 'Last updated: November 20, 2026',
      usuarioMenu: { anadir: '+ Add user', trips: 'Trips', ayudaFaq: 'Help/FAQ', cuenta: 'Your account', cerrarSesion: 'Log out', promptNombre: 'Name:', promptCorreo: 'Email:' },
      menu: { vuelos: 'Flights', hoteles: 'Hotels', autobus: 'Bus', ia: 'Plan with AI', planea: 'Plan your trips', nosotros: 'About us', contacto: 'Contact', faq: 'FAQ', explorar: 'Explore', terminos: 'Terms and conditions', rastreador: 'Flight tracker', viajes: 'Trips', telLbl: 'Phone:', correoLbl: 'Email:' },
      footer: { desc: 'Your trusted agency to discover the world at the best price. Compare, save, and fly without limits.', colEmpresa: 'Company', acercaDe: 'About us', prensa: 'Press', afiliados: 'Affiliates', socios: 'Partners', colContacto: 'Contact', ayudaFaq: 'Help / FAQ', hoteles: 'Hotels', publicidad: 'Advertising', colMas: 'More', tarifasAereas: 'Airfares', ofertasBajas: 'Low deals', privacidad: 'Privacy', descargaApp: 'Get the app', appTexto: 'Take your bookings and deals with you everywhere.', playSmall: 'GET IT ON', playStrong: 'Google Play', appleSmall: 'DOWNLOAD ON THE', appleStrong: 'App Store', derechos: 'RuTa Tropical. All rights reserved.', terminos: 'Terms and conditions', cookies: 'Cookies' }
    },
    JA: {
      panelTitulo: '言語を選択', buscarPh: '言語を検索...',
      pageTitle: '利用規約 | Ruta Tropical',
      heroTitulo: '利用規約',
      pIntro1: '<span class="resalte-azul">Ruta Tropical</span>（以下「当サイト」）をご利用になる前に、本規約をよくお読みください。当サイトを利用することで、本規約および<a href="#privacidad">プライバシーポリシー</a>に同意したものとみなされます。',
      pNotice: '本規約には責任の制限に関する条項が含まれます。よくお読みください。',
      pIntro2: '当サイトは本規約をいつでも改定できます。改定後に利用を続けた場合、<span class="resalte-azul">最新の規約に同意</span>したものとします。',
      h2_1: '1. Ruta Tropicalとは',
      p_1_1: '当サイトは<span class="resalte-azul">航空券、ホテル、レンタカー</span>や旅行商品を比較・検索するサービスです。各旅行商品の責任は<span class="resalte-rojo">提供元</span>にあります。',
      p_1_2: '予約には各提供元の規約が適用されます。当サイトでの掲載は特定の提供元を保証するものではありません。',
      h2_2: '2. 当サイトを通じた予約',
      p_2_1: '予約は提供元サイト上で完了します。当サイトは<span class="resalte-azul">検索ツール</span>であり、料金や予約条件を設定しません。',
      h2_3: '3. 料金、手数料、為替レート',
      p_3_1: '提供元の料金は変動することがあり、<span class="resalte-rojo">追加手数料</span>や税金がかかる場合があります。予約前に必ずご確認ください。',
      p_3_2: '表示される<span class="resalte-azul">為替レート</span>は参考値であり、実際の請求レートと異なる場合があります。',
      h2_4: '4. 知的財産権',
      p_4_1: '当サイトの文章、画像、デザイン、ソフトウェア等の権利はRuta Tropicalおよび権利者に帰属します。<span class="resalte-azul">個人・非商用利用</span>以外の無断複製や配布は禁止されています。',
      p_4_2: 'その他の名称やロゴは各権利者に帰属します。',
      h2_5: '5. 当サイトの利用',
      p_5_1: '当サイトの利用にはお住まいの国の<span class="resalte-azul">法定契約年齢</span>に達している必要があります。',
      p_5_2: '正当な旅行検索のみに利用でき、不正または虚偽の予約は<span class="resalte-rojo">禁止</span>されています。事前の書面許可なく以下の行為を行わないでください：',
      ul5Plain: [
        '(i) 自動ツールやスクレイピングによるアクセスおよびデータ抽出；',
        '(ii) 技術的制限やセキュリティ対策の回避；',
        '(iii) 当サイト各ページへの無許可のディープリンク；',
        '(iv) システムに過負荷や支障を与える行為；',
        '(v) 当サイトの複製、再販売、営利転用；',
        '(vi) 違法・有害または不適切な目的での利用；',
        '(vii) 第三者の権利や法令を侵害する投稿；',
        '(viii) 他人の個人情報の収集や保存；',
        '(ix) 商用目的での利用；',
        '(x) 広告や宣伝物の掲載。'
      ],
      p_5_3: '違反がある場合、予告なく<span class="resalte-rojo">利用停止や制限</span>を行うことがあります。また、以下の行為を禁止します：',
      ul5Prohibido: [
        'セキュリティ機能の無効化や妨害；',
        '他人や他団体へのなりすまし；',
        '虚偽または誤解を招く情報の提供；',
        '他者への個人情報の要求；',
        '他ユーザーのコンテンツの改変や削除；',
        '著作権表示の削除や改変；',
        '個人や他ユーザー投稿への誹謗中傷；',
        '暴力の脅迫や違法行為の助長。'
      ],
      p_5_4: '不適切なコンテンツは <a href="mailto:contacto@rutatropical.com">contacto@rutatropical.com</a> までご報告ください。',
      h2_6: '6. アカウント',
      p_6_1: '<span class="resalte-azul">パスワードと認証情報</span>を厳重に管理し、不正利用の疑いがある場合はすぐにご連絡ください。',
      p_6_2: '通知用電話番号を最新に保ち、端末を手放す際は保存データを消去してください。',
      h2_7: '7. コメントとコンテンツ',
      p_7_1: '送信する内容の正確性、独自性、権利侵害のないことについては投稿者が責任を負います。',
      p_7_2: '送信されたコンテンツに対し、運営およびプロモーション目的での非独占的・無償・世界的な利用権が付与されます。',
      h2_8: '8. 第三者の知的財産権',
      p_8_1: '知的財産権を侵害する行為は禁止されています。権利侵害については <a href="mailto:contacto@rutatropical.com">contacto@rutatropical.com</a> にご連絡ください。',
      h2_9: '9. 免責事項',
      p_9_1: '当サイトおよびサービスは<span class="resalte-azul">「現状有姿」かつ「提供可能な範囲」</span>で提供され、完全性や最安値を保証しません。',
      h2_10: '10. 責任の制限',
      p_10_1: '法令で認められる範囲で、当サイトや提供元に起因する間接的損害について責任を負わず、<span class="resalte-rojo">賠償責任の上限は50 USD</span>とします。',
      h2_11: '11. 補償',
      p_11_1: '本規約違反や法令違反、不正利用により生じた請求や費用についてRuta Tropicalを補償するものとします。',
      h2_12: '12. 外部リンク',
      p_12_1: '<span class="resalte-azul">外部サイト</span>へのリンクは利便性のために提供されており、その内容や安全性を保証しません。',
      h2_13: '13. 航空会社の規則',
      p_13_1: '航空会社の規則違反（乗り継ぎ区間の放棄や重複予約など）により<span class="resalte-rojo">予約キャンセルや追加料金</span>が発生する場合があります。',
      h2_14: '14. 人工知能（AI）',
      p_14_1: '<span class="resalte-azul">AI機能</span>は「現状有姿」で提供され誤りを含むことがあります。重要な情報は提供元でご確認ください。',
      h2_15: '15. プライバシーとセキュリティ',
      p_15_1: '個人情報の取り扱いはプライバシーポリシーに従います。<a href="seguridad.html">Ruta Tropicalのセキュリティ</a>もご覧ください。',
      h2_16: '16. 一般条項',
      p_16_1: '当サイトは本規約の変更や利用終了をいつでも行うことができます。',
      p_16_2: '本規約は<span class="resalte-azul">ドミニカ共和国</span>の法令に準拠し、管轄裁判所を専属的合意管轄とします。',
      h2Avisos: 'その他の法的通知',
      pAvisos: 'Google PlayはGoogle LLCの商標です。Apple、iPhone、iPad、App StoreはApple Inc.の商標です。',
      h2Operador: '運営者情報：',
      addressOperador: 'Ruta Tropical<br>サントドミンゴ、ドミニカ共和国<br><a href="mailto:contacto@rutatropical.com">contacto@rutatropical.com</a>',
      pUpdated: '最終更新日：2026年11月20日',
      usuarioMenu: { anadir: '+ ユーザーを追加', trips: 'Trips', ayudaFaq: 'ヘルプ/よくある質問', cuenta: 'アカウント', cerrarSesion: 'ログアウト', promptNombre: '名前:', promptCorreo: 'メール:' },
      menu: { vuelos: 'フライト', hoteles: 'ホテル', autobus: 'バス', ia: 'AIで計画', planea: '旅行を計画', nosotros: '会社概要', contacto: 'お問い合わせ', faq: 'よくある質問', explorar: '探索', terminos: '利用規約', rastreador: 'フライト追跡', viajes: '旅行', telLbl: '電話:', correoLbl: 'メール:' },
      footer: { desc: '世界をお得に旅するための信頼できるパートナー。比較・節約して自由に飛びましょう。', colEmpresa: '企業情報', acercaDe: '会社概要', prensa: 'プレス', afiliados: 'アフィリエイト', socios: 'パートナー', colContacto: 'お問い合わせ', ayudaFaq: 'ヘルプ / FAQ', hoteles: 'ホテル', publicidad: '広告掲載', colMas: 'その他', tarifasAereas: '航空運賃', ofertasBajas: '格安オファー', privacidad: 'プライバシー', descargaApp: 'アプリをダウンロード', appTexto: '予約やお得な情報をいつでも手元に。', playSmall: '手に入れよう', playStrong: 'Google Play', appleSmall: 'ダウンロード', appleStrong: 'App Store', derechos: 'RuTa Tropical. All rights reserved.', terminos: '利用規約', cookies: 'Cookie' }
    }
  };

  ['FR', 'PT', 'IT', 'DE', 'KO', 'ZH', 'AR'].forEach((cod) => {
    textosTerminos[cod] = { ...textosTerminos.ES, panelTitulo: `${cod} — ${textosTerminos.ES.panelTitulo}` };
  });

  // Traducciones dedicadas de portada y secciones para FR, PT, IT, DE, KO, ZH y AR
  const extrasIdioma = {
    FR: {
      pageTitle: 'Conditions générales | Ruta Tropical', heroTitulo: 'Conditions générales',
      pIntro1: 'En accédant à <span class="resalte-azul">Ruta Tropical</span> ("Notre site"), vous acceptez ces Conditions et notre <a href="#privacidad">Politique de confidentialité</a>.',
      pNotice: 'Ces Conditions incluent des limitations de responsabilité. Lisez-les attentivement.',
      h2_1: '1. Qu’est-ce que Ruta Tropical', h2_2: '2. Réservations via Ruta Tropical', h2_3: '3. Prix, frais et taux de change',
      h2_4: '4. Propriété intellectuelle', h2_5: '5. Utilisation de Notre site', h2_6: '6. Votre compte',
      h2_7: '7. Vos commentaires et contenus', h2_8: '8. Droits de propriété intellectuelle des tiers',
      h2_9: '9. Exclusion de garanties', h2_10: '10. Limitation de responsabilité', h2_11: '11. Indemnisation',
      h2_12: '12. Liens vers d’autres sites', h2_13: '13. Règles des compagnies aériennes', h2_14: '14. Intelligence artificielle',
      h2_15: '15. Confidentialité et sécurité', h2_16: '16. Dispositions générales',
      h2Avisos: 'Autres mentions légales', h2Operador: 'Site exploité par :', pUpdated: 'Dernière mise à jour : 20 novembre 2026',
      menu: { vuelos: 'Vols', hoteles: 'Hôtels', autobus: 'Bus', ia: 'Planifier avec l’IA', planea: 'Planifiez vos voyages', nosotros: 'À propos', contacto: 'Contact', faq: 'FAQ', explorar: 'Explorer', terminos: 'Conditions générales', rastreador: 'Suivi des vols', viajes: 'Voyages', telLbl: 'Téléphone :', correoLbl: 'E-mail :' },
      footer: { desc: 'Votre agence de confiance pour découvrir le monde au meilleur prix. Comparez, économisez et voyagez sans limites.', colEmpresa: 'Entreprise', acercaDe: 'À propos', prensa: 'Presse', afiliados: 'Affiliés', socios: 'Partenaires', colContacto: 'Contact', ayudaFaq: 'Aide / FAQ', hoteles: 'Hôtels', publicidad: 'Publicité', colMas: 'Plus', tarifasAereas: 'Tarifs aériens', ofertasBajas: 'Petits prix', privacidad: 'Confidentialité', descargaApp: 'Télécharger l’appli', appTexto: 'Emportez vos réservations et offres partout.', playSmall: 'DISPONIBLE SUR', playStrong: 'Google Play', appleSmall: 'TÉLÉCHARGER DANS', appleStrong: 'App Store', derechos: 'RuTa Tropical. Tous droits réservés.', terminos: 'Conditions générales', cookies: 'Cookies' }
    },
    PT: {
      pageTitle: 'Termos e condições | Ruta Tropical', heroTitulo: 'Termos e condições',
      pIntro1: 'Ao acessar a <span class="resalte-azul">Ruta Tropical</span> ("Nosso site"), você concorda com estes Termos e com nossa <a href="#privacidad">Política de privacidade</a>.',
      pNotice: 'Estes Termos incluem limitações de responsabilidade. Leia com atenção.',
      h2_1: '1. O que é a Ruta Tropical', h2_2: '2. Reservas feitas pela Ruta Tropical', h2_3: '3. Preços, taxas e câmbio',
      h2_4: '4. Propriedade intelectual', h2_5: '5. Uso do Nosso site', h2_6: '6. Sua conta',
      h2_7: '7. Seus comentários e conteúdo', h2_8: '8. Direitos de propriedade intelectual de terceiros',
      h2_9: '9. Isenção de garantias', h2_10: '10. Limitação de responsabilidade', h2_11: '11. Indenização',
      h2_12: '12. Links para outros sites', h2_13: '13. Regras das companhias aéreas', h2_14: '14. Inteligência artificial',
      h2_15: '15. Privacidade e segurança', h2_16: '16. Requisitos gerais',
      h2Avisos: 'Outros avisos legais', h2Operador: 'Nosso site é operado por:', pUpdated: 'Última atualização: 20 de novembro de 2026',
      menu: { vuelos: 'Voos', hoteles: 'Hotéis', autobus: 'Ônibus', ia: 'Planejar com IA', planea: 'Planeje suas viagens', nosotros: 'Sobre nós', contacto: 'Contato', faq: 'Perguntas frequentes', explorar: 'Explorar', terminos: 'Termos e condições', rastreador: 'Rastreador de voos', viajes: 'Viagens', telLbl: 'Telefone:', correoLbl: 'E-mail:' },
      footer: { desc: 'Sua agência de confiança para descobrir o mundo pelo melhor preço. Compare, economize e voe sem limites.', colEmpresa: 'Empresa', acercaDe: 'Sobre nós', prensa: 'Imprensa', afiliados: 'Afiliados', socios: 'Parceiros', colContacto: 'Contato', ayudaFaq: 'Ajuda / FAQ', hoteles: 'Hotéis', publicidad: 'Publicidade', colMas: 'Mais', tarifasAereas: 'Passagens aéreas', ofertasBajas: 'Ofertas', privacidad: 'Privacidade', descargaApp: 'Baixe o app', appTexto: 'Leve suas reservas e ofertas sempre com você.', playSmall: 'DISPONÍVEL NO', playStrong: 'Google Play', appleSmall: 'BAIXAR NA', appleStrong: 'App Store', derechos: 'RuTa Tropical. Todos os direitos reservados.', terminos: 'Termos e condições', cookies: 'Cookies' }
    },
    IT: {
      pageTitle: 'Termini e condizioni | Ruta Tropical', heroTitulo: 'Termini e condizioni',
      pIntro1: 'Accedendo a <span class="resalte-azul">Ruta Tropical</span> ("Il nostro sito"), accetti questi Termini e la nostra <a href="#privacidad">Informativa sulla privacy</a>.',
      pNotice: 'Questi Termini includono limitazioni di responsabilità. Leggili con attenzione.',
      h2_1: '1. Cos’è Ruta Tropical', h2_2: '2. Prenotazioni tramite Ruta Tropical', h2_3: '3. Prezzi, commissioni e cambio',
      h2_4: '4. Proprietà intellettuale', h2_5: '5. Uso del nostro sito', h2_6: '6. Il tuo account',
      h2_7: '7. Commenti e contenuti', h2_8: '8. Diritti di proprietà intellettuale di terzi',
      h2_9: '9. Esclusione di garanzie', h2_10: '10. Limitazione di responsabilità', h2_11: '11. Manleva',
      h2_12: '12. Link ad altri siti', h2_13: '13. Regole delle compagnie aeree', h2_14: '14. Intelligenza artificiale',
      h2_15: '15. Privacy e sicurezza', h2_16: '16. Requisiti generali',
      h2Avisos: 'Altre note legali', h2Operador: 'Sito gestito da:', pUpdated: 'Ultimo aggiornamento: 20 novembre 2026',
      menu: { vuelos: 'Voli', hoteles: 'Hotel', autobus: 'Autobus', ia: 'Pianifica con IA', planea: 'Pianifica i viaggi', nosotros: 'Chi siamo', contacto: 'Contatti', faq: 'FAQ', explorar: 'Esplora', terminos: 'Termini e condizioni', rastreador: 'Tracker voli', viajes: 'Viaggi', telLbl: 'Telefono:', correoLbl: 'Email:' },
      footer: { desc: 'La tua agenzia di fiducia per scoprire il mondo al miglior prezzo. Confronta, risparmia e vola senza limiti.', colEmpresa: 'Azienda', acercaDe: 'Chi siamo', prensa: 'Stampa', afiliados: 'Affiliati', socios: 'Partner', colContacto: 'Contatti', ayudaFaq: 'Aiuto / FAQ', hoteles: 'Hotel', publicidad: 'Pubblicità', colMas: 'Altro', tarifasAereas: 'Tariffe aeree', ofertasBajas: 'Offerte basse', privacidad: 'Privacy', descargaApp: 'Scarica l’app', appTexto: 'Porta sempre con te prenotazioni e offerte.', playSmall: 'DISPONIBILE SU', playStrong: 'Google Play', appleSmall: 'SCARICA SU', appleStrong: 'App Store', derechos: 'RuTa Tropical. Tutti i diritti riservati.', terminos: 'Termini e condizioni', cookies: 'Cookie' }
    },
    DE: {
      pageTitle: 'Allgemeine Geschäftsbedingungen | Ruta Tropical', heroTitulo: 'Nutzungsbedingungen',
      pIntro1: 'Durch den Zugriff auf <span class="resalte-azul">Ruta Tropical</span> („Unsere Website“) stimmst du diesen Bedingungen und unserer <a href="#privacidad">Datenschutzerklärung</a> zu.',
      pNotice: 'Diese Bedingungen enthalten Haftungsbeschränkungen. Bitte sorgfältig lesen.',
      h2_1: '1. Was Ruta Tropical ist', h2_2: '2. Buchungen über Ruta Tropical', h2_3: '3. Preise, Gebühren und Wechselkurse',
      h2_4: '4. Geistiges Eigentum', h2_5: '5. Nutzung unserer Website', h2_6: '6. Dein Konto',
      h2_7: '7. Feedback und Inhalte', h2_8: '8. Rechte Dritter am geistigen Eigentum',
      h2_9: '9. Gewährleistungsausschluss', h2_10: '10. Haftungsbeschränkung', h2_11: '11. Freistellung',
      h2_12: '12. Links zu anderen Websites', h2_13: '13. Fluggesellschaftsregeln', h2_14: '14. Künstliche Intelligenz',
      h2_15: '15. Datenschutz und Sicherheit', h2_16: '16. Allgemeine Bestimmungen',
      h2Avisos: 'Weitere rechtliche Hinweise', h2Operador: 'Betrieben durch:', pUpdated: 'Zuletzt aktualisiert: 20. November 2026',
      menu: { vuelos: 'Flüge', hoteles: 'Hotels', autobus: 'Bus', ia: 'Mit KI planen', planea: 'Reisen planen', nosotros: 'Über uns', contacto: 'Kontakt', faq: 'FAQ', explorar: 'Entdecken', terminos: 'AGB', rastreador: 'Flugtracker', viajes: 'Reisen', telLbl: 'Telefon:', correoLbl: 'E-Mail:' },
      footer: { desc: 'Deine zuverlässige Agentur, um die Welt zum besten Preis zu entdecken. Vergleichen, sparen und unbegrenzt fliegen.', colEmpresa: 'Unternehmen', acercaDe: 'Über uns', prensa: 'Presse', afiliados: 'Partnerprogramm', socios: 'Partner', colContacto: 'Kontakt', ayudaFaq: 'Hilfe / FAQ', hoteles: 'Hotels', publicidad: 'Werbung', colMas: 'Mehr', tarifasAereas: 'Flugtarife', ofertasBajas: 'Günstige Angebote', privacidad: 'Datenschutz', descargaApp: 'App herunterladen', appTexto: 'Buchungen und Angebote immer griffbereit.', playSmall: 'JETZT BEI', playStrong: 'Google Play', appleSmall: 'LADEN IM', appleStrong: 'App Store', derechos: 'RuTa Tropical. Alle Rechte vorbehalten.', terminos: 'AGB', cookies: 'Cookies' }
    },
    KO: {
      pageTitle: '이용약관 | Ruta Tropical', heroTitulo: '이용약관',
      pIntro1: '<span class="resalte-azul">Ruta Tropical</span>("당사 사이트")을 이용하면 본 약관 및 <a href="#privacidad">개인정보처리방침</a>에 동의하게 됩니다.',
      pNotice: '본 약관에는 책임 제한 조항이 포함되어 있습니다. 주의 깊게 읽어주세요.',
      h2_1: '1. Ruta Tropical 소개', h2_2: '2. 당사를 통한 예약', h2_3: '3. 가격, 수수료 및 환율',
      h2_4: '4. 지적재산권', h2_5: '5. 당사 사이트 이용', h2_6: '6. 계정',
      h2_7: '7. 의견 및 콘텐츠', h2_8: '8. 제3자 지적재산권',
      h2_9: '9. 보증의 부인', h2_10: '10. 책임 제한', h2_11: '11. 면책 및 배상',
      h2_12: '12. 외부 사이트 링크', h2_13: '13. 항공사 규정', h2_14: '14. 인공지능',
      h2_15: '15. 개인정보 및 보안', h2_16: '16. 일반 조항',
      h2Avisos: '기타 법적 고지', h2Operador: '운영 주체:', pUpdated: '최종 업데이트: 2026년 11월 20일',
      menu: { vuelos: '항공권', hoteles: '호텔', autobus: '버스', ia: 'AI 일정 계획', planea: '여행 계획', nosotros: '회사 소개', contacto: '문의하기', faq: 'FAQ', explorar: '둘러보기', terminos: '이용약관', rastreador: '항공편 추적', viajes: '여행', telLbl: '전화:', correoLbl: '이메일:' },
      footer: { desc: '최고의 가격으로 세상을 만나는 믿을 수 있는 여행 파트너. 비교하고 아끼며 자유롭게 떠나세요.', colEmpresa: '회사', acercaDe: '회사 소개', prensa: '보도자료', afiliados: '제휴', socios: '파트너', colContacto: '문의', ayudaFaq: '도움말 / FAQ', hoteles: '호텔', publicidad: '광고', colMas: '더보기', tarifasAereas: '항공 요금', ofertasBajas: '특가', privacidad: '개인정보처리방침', descargaApp: '앱 다운로드', appTexto: '예약과 혜택을 언제 어디서나 확인하세요.', playSmall: '다운로드', playStrong: 'Google Play', appleSmall: '다운로드', appleStrong: 'App Store', derechos: 'RuTa Tropical. All rights reserved.', terminos: '이용약관', cookies: '쿠키' }
    },
    ZH: {
      pageTitle: '条款与条件 | Ruta Tropical', heroTitulo: '条款与条件',
      pIntro1: '访问 <span class="resalte-azul">Ruta Tropical</span>（“本网站”）即表示你同意本条款及我们的<a href="#privacidad">隐私政策</a>。',
      pNotice: '本条款包含责任限制内容，请仔细阅读。',
      h2_1: '1. 什么是 Ruta Tropical', h2_2: '2. 通过 Ruta Tropical 预订', h2_3: '3. 价格、费用与汇率',
      h2_4: '4. 知识产权', h2_5: '5. 使用本网站', h2_6: '6. 你的账户',
      h2_7: '7. 你的反馈与内容', h2_8: '8. 第三方知识产权',
      h2_9: '9. 免责声明', h2_10: '10. 责任限制', h2_11: '11. 赔偿责任',
      h2_12: '12. 外部网站链接', h2_13: '13. 航空公司规则', h2_14: '14. 人工智能',
      h2_15: '15. 隐私与安全', h2_16: '16. 一般条款',
      h2Avisos: '其他法律声明', h2Operador: '网站运营方：', pUpdated: '最后更新：2026年11月20日',
      menu: { vuelos: '机票', hoteles: '酒店', autobus: '巴士', ia: 'AI 规划', planea: '规划行程', nosotros: '关于我们', contacto: '联系我们', faq: '常见问题', explorar: '探索', terminos: '条款与条件', rastreador: '航班追踪', viajes: '行程', telLbl: '电话:', correoLbl: '邮箱:' },
      footer: { desc: '值得信赖的旅行伙伴，以更优价格探索世界。比价、省钱，畅游无界。', colEmpresa: '公司', acercaDe: '关于我们', prensa: '媒体', afiliados: '联盟', socios: '合作伙伴', colContacto: '联系', ayudaFaq: '帮助 / FAQ', hoteles: '酒店', publicidad: '广告', colMas: '更多', tarifasAereas: '机票价格', ofertasBajas: '特价优惠', privacidad: '隐私政策', descargaApp: '下载应用', appTexto: '随时随地查看行程与优惠。', playSmall: '立即获取', playStrong: 'Google Play', appleSmall: '前往下载', appleStrong: 'App Store', derechos: 'RuTa Tropical. 保留所有权利。', terminos: '条款与条件', cookies: 'Cookie' }
    },
    AR: {
      pageTitle: 'الشروط والأحكام | Ruta Tropical', heroTitulo: 'الشروط والأحكام',
      pIntro1: 'بدخولك إلى <span class="resalte-azul">Ruta Tropical</span> ("موقعنا") فإنك توافق على هذه الشروط وعلى <a href="#privacidad">سياسة الخصوصية</a> الخاصة بنا.',
      pNotice: 'تتضمن هذه الشروط حدودًا للمسؤولية. يُرجى قراءتها بعناية.',
      h2_1: '1. ما هي Ruta Tropical', h2_2: '2. الحجوزات عبر Ruta Tropical', h2_3: '3. الأسعار والرسوم وسعر الصرف',
      h2_4: '4. الملكية الفكرية', h2_5: '5. استخدام موقعنا', h2_6: '6. حسابك',
      h2_7: '7. تعليقاتك ومحتواك', h2_8: '8. حقوق الملكية الفكرية للغير',
      h2_9: '9. إخلاء المسؤولية عن الضمانات', h2_10: '10. تحديد المسؤولية', h2_11: '11. التعويض',
      h2_12: '12. روابط المواقع الأخرى', h2_13: '13. قواعد شركات الطيران', h2_14: '14. الذكاء الاصطناعي',
      h2_15: '15. الخصوصية والأمان', h2_16: '16. أحكام عامة',
      h2Avisos: 'إشعارات قانونية أخرى', h2Operador: 'الموقع مُدار بواسطة:', pUpdated: 'آخر تحديث: 20 نوفمبر 2026',
      menu: { vuelos: 'رحلات جوية', hoteles: 'فنادق', autobus: 'حافلة', ia: 'خطط بالذكاء الاصطناعي', planea: 'خطط لرحلاتك', nosotros: 'من نحن', contacto: 'اتصل بنا', faq: 'الأسئلة الشائعة', explorar: 'استكشف', terminos: 'الشروط والأحكام', rastreador: 'متتبع الرحلات', viajes: 'الرحلات', telLbl: 'الهاتف:', correoLbl: 'البريد:' },
      footer: { desc: 'وكالتك الموثوقة لاكتشاف العالم بأفضل سعر. قارن ووفّر وسافر بلا حدود.', colEmpresa: 'الشركة', acercaDe: 'من نحن', prensa: 'الصحافة', afiliados: 'الشركاء التابعون', socios: 'الشركاء', colContacto: 'التواصل', ayudaFaq: 'المساعدة / الأسئلة الشائعة', hoteles: 'الفنادق', publicidad: 'الإعلانات', colMas: 'المزيد', tarifasAereas: 'أسعار الرحلات', ofertasBajas: 'عروض منخفضة', privacidad: 'الخصوصية', descargaApp: 'حمّل التطبيق', appTexto: 'احتفظ بحجوزاتك وعروضك معك دائمًا.', playSmall: 'متوفر على', playStrong: 'Google Play', appleSmall: 'حمّله من', appleStrong: 'App Store', derechos: 'RuTa Tropical. جميع الحقوق محفوظة.', terminos: 'الشروط والأحكام', cookies: 'ملفات تعريف الارتباط' }
    }
  };

  Object.keys(extrasIdioma).forEach((cod) => {
    textosTerminos[cod] = { ...textosTerminos.ES, ...extrasIdioma[cod] };
  });

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
      const t = textosTerminos[idiomaActual] || textosTerminos.ES;
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
        const yearSpan = legal.querySelector('#year');
        const yearVal = yearSpan ? yearSpan.textContent : String(new Date().getFullYear());
        legal.firstElementChild.innerHTML = `© <span id="year">${yearVal}</span> ${f.derechos}`;
        const links = legal.querySelectorAll('.rt-footer__legales-links a');
        if (links[0]) links[0].textContent = f.privacidad;
        if (links[1]) links[1].textContent = f.terminos;
        if (links[2]) links[2].textContent = f.cookies;
      }
    }

    function setHtml(id, val) {
      const el = document.getElementById(id);
      if (el && val !== undefined) el.innerHTML = val;
    }

    function setText(id, val) {
      const el = document.getElementById(id);
      if (el && val !== undefined) el.textContent = val;
    }

    function aplicarIdioma(codigo) {
      const t = textosTerminos[codigo] || textosTerminos.ES;
      idiomaActual = codigo;
      document.documentElement.lang = codigo.toLowerCase();
      document.documentElement.dir = codigo === 'AR' ? 'rtl' : 'ltr';
      document.title = t.pageTitle;

      if (idiomaCodigo) idiomaCodigo.textContent = codigo;
      if (idiomaTitulo) idiomaTitulo.textContent = t.panelTitulo;
      if (idiomaBuscar) idiomaBuscar.placeholder = t.buscarPh;

      setText('hero-titulo', t.heroTitulo);
      setHtml('p-intro-1', t.pIntro1);
      setText('p-notice', t.pNotice);
      setHtml('p-intro-2', t.pIntro2);

      setText('h2-1', t.h2_1);
      setHtml('p-1-1', t.p_1_1);
      setHtml('p-1-2', t.p_1_2);

      setText('h2-2', t.h2_2);
      setHtml('p-2-1', t.p_2_1);

      setText('h2-3', t.h2_3);
      setHtml('p-3-1', t.p_3_1);
      setHtml('p-3-2', t.p_3_2);

      setText('h2-4', t.h2_4);
      setHtml('p-4-1', t.p_4_1);
      setHtml('p-4-2', t.p_4_2);

      setText('h2-5', t.h2_5);
      setHtml('p-5-1', t.p_5_1);
      setHtml('p-5-2', t.p_5_2);

      const ulPlain = document.getElementById('ul-5-plain');
      if (ulPlain && Array.isArray(t.ul5Plain)) {
        ulPlain.innerHTML = t.ul5Plain.map((item) => `<li>${item}</li>`).join('');
      }

      setHtml('p-5-3', t.p_5_3);

      const ulProhibido = document.getElementById('ul-5-prohibido');
      if (ulProhibido && Array.isArray(t.ul5Prohibido)) {
        ulProhibido.innerHTML = t.ul5Prohibido.map((item) => `<li>${item}</li>`).join('');
      }

      setHtml('p-5-4', t.p_5_4);

      setText('h2-6', t.h2_6);
      setHtml('p-6-1', t.p_6_1);
      setHtml('p-6-2', t.p_6_2);

      setText('h2-7', t.h2_7);
      setHtml('p-7-1', t.p_7_1);
      setHtml('p-7-2', t.p_7_2);

      setText('h2-8', t.h2_8);
      setHtml('p-8-1', t.p_8_1);

      setText('h2-9', t.h2_9);
      setHtml('p-9-1', t.p_9_1);

      setText('h2-10', t.h2_10);
      setHtml('p-10-1', t.p_10_1);

      setText('h2-11', t.h2_11);
      setHtml('p-11-1', t.p_11_1);

      setText('h2-12', t.h2_12);
      setHtml('p-12-1', t.p_12_1);

      setText('h2-13', t.h2_13);
      setHtml('p-13-1', t.p_13_1);

      setText('h2-14', t.h2_14);
      setHtml('p-14-1', t.p_14_1);

      setText('privacidad', t.h2_15);
      setHtml('p-15-1', t.p_15_1);

      setText('h2-16', t.h2_16);
      setHtml('p-16-1', t.p_16_1);
      setHtml('p-16-2', t.p_16_2);

      setText('h2-avisos', t.h2Avisos);
      setText('p-avisos', t.pAvisos);
      setText('h2-operador', t.h2Operador);
      setHtml('address-operador', t.addressOperador);
      setText('p-updated', t.pUpdated);

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
    aplicarIdioma('ES');
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
        const um = (textosTerminos[idiomaActual] || textosTerminos.ES).usuarioMenu;
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

    const toTop = document.getElementById('to-top');
    if (toTop) {
      window.addEventListener('scroll', () => {
        toTop.hidden = window.scrollY < 500;
      }, { passive: true });

      toTop.addEventListener('click', () => {
        window.scrollTo({ top: 0 });
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