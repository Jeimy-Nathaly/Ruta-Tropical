/* ==========================================================
   3. BARRA DE NAVEGACIÓN, MENÚ LATERAL Y MONEDA
   ========================================================== */
(function () {
  const nav = document.getElementById('nav-sitio');
  const cajon = document.getElementById('cajon');
  const fondo = document.getElementById('cajon-fondo');
  const abrir = document.getElementById('abrir-menu');
  const cerrar = document.getElementById('cerrar-menu');
  const portada = document.querySelector('.portada');
 
  /* ---------- Menú lateral ---------- */
  function alternarMenu(mostrar) {
    cajon.classList.toggle('abierto', mostrar);
    fondo.classList.toggle('visible', mostrar);
    abrir.setAttribute('aria-expanded', mostrar);
    document.body.style.overflow = mostrar ? 'hidden' : '';
    (mostrar ? cerrar : abrir).focus();
  }
 
  abrir.addEventListener('click', function () { alternarMenu(true); });
  cerrar.addEventListener('click', function () { alternarMenu(false); });
  fondo.addEventListener('click', function () { alternarMenu(false); });
 
  cajon.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { alternarMenu(false); });
  });
 
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && cajon.classList.contains('abierto')) alternarMenu(false);
  });
 
  /* ---------- Barra fija al pasar la portada ---------- */
  if (portada && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entradas) {
      const portadaVisible = entradas[0].isIntersecting;
      nav.classList.toggle('fija', !portadaVisible);
    }).observe(portada);
  } else {
    nav.classList.add('fija'); // respaldo: siempre fija
  }
 
  /* ---------- Bandera según la moneda ---------- */
  const banderas = { usd: 'us', eur: 'eu', dop: 'do', gbp: 'gb' };
  const moneda = document.getElementById('currency');
  const bandera = document.getElementById('bandera');
 
  moneda.addEventListener('change', function () {
    bandera.src = 'https://flagcdn.com/w40/' + banderas[moneda.value] + '.png';
  });
})();
/* ==========================================================
   4. SELECTOR DE IDIOMA
   ========================================================== */
(function () {
  /* ---------- Datos: [código, nombre en su propio idioma, país de la bandera] ---------- */
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
 
  /* ---------- Elementos ---------- */
  const contenedor = document.getElementById('idioma');
  const boton = document.getElementById('idioma-boton');
  const lista = document.getElementById('idioma-lista');
  const bandera = document.getElementById('idioma-bandera');
  const codigo = document.getElementById('idioma-codigo');
 
  const url = function (pais) { return 'https://flagcdn.com/w40/' + pais + '.png'; };
 
  let actual = localStorage.getItem('idioma') || 'es';
  if (!IDIOMAS.some(function (i) { return i[0] === actual; })) actual = 'es';
 
  /* ---------- Construir la lista ---------- */
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
 
  /* ---------- Elegir un idioma ---------- */
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
 
    // Aviso para que el resto de tu página pueda reaccionar al cambio
    document.dispatchEvent(new CustomEvent('idioma:cambio', { detail: { idioma: cod } }));
  }
 
  /* ---------- Abrir y cerrar ---------- */
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
 
  boton.addEventListener('click', function () { lista.hidden ? abrir() : cerrar(); });
 
  lista.addEventListener('click', function (e) {
    const li = e.target.closest('li');
    if (!li) return;
    elegir(li.dataset.codigo);
    cerrar();
    boton.focus();
  });

  
  /* ---------- Teclado ---------- */
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
 
  /* ---------- Cerrar al hacer clic fuera ---------- */
  document.addEventListener('click', function (e) {
    if (!lista.hidden && !contenedor.contains(e.target)) cerrar();
  });
 
  elegir(actual);
})();