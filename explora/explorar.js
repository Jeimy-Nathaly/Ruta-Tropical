/* ==========================================================
   FOTOS
   ========================================================== */

// Carpeta de las fotos (debe estar junto al archivo HTML)
const CARPETA_FOTOS = 'imagenes/';

// Nombre exacto del archivo de cada país.
// Si agregas un país nuevo y no lo pones aquí, busca <id>.jpg
const FOTOS = {
  // América
  'argentina': 'argentina.jpg',
  'brasil': 'brazil.jpg',
  'canada': 'canada.jpg',
  'colombia': 'colombia.jpg',
  'cuba': 'cuba.jpg',
  'estados-unidos': 'america.jpg',
  'mexico': 'mexico.jpg',
  'republica-dominicana': 'republica dominicana.jpg',
  'venezuela': 'venezuela.jpg',
  // Europa
  'alemania': 'alemania.jpg',
  'espana': 'españa.jpg',
  'francia': 'francia.jpg',
  'italia': 'italia.jpg',
  'reino-unido': 'reino unido.jpg',
  'rusia': 'rusia.jpg',
  // Asia
  'arabia-saudita': 'arabia saudita.jpg',
  'china': 'china.jpg',
  'india': 'india.jpg',
  'japon': 'japones.jpeg',
  'corea-del-sur': 'korea.jpg',
  'libano': 'libano.jpg',
  // África
  'argelia': 'argelia.jpg',
  'angola': 'angola.jpg',
  'egipto': 'egipto.jpg',
  'marruecos': 'marruecos.jpg',
  'nigeria': 'nigeria.jpg',
  // Oceanía
  'australia': 'australia.jpg',
  'nueva-zelanda': 'nueva zelanda.jpg',
  'fiyi': 'fiyi.jpg'
};

/* ==========================================================
   LISTA DE PAÍSES
   [id, nombre, bandera, continente, precio de ejemplo, color]
   ========================================================== */
const PAISES = [
  // América
  ['argentina', 'Argentina', 'ar', 'América', 489, '#2b8ad6'],
  ['brasil', 'Brasil', 'br', 'América', 412, '#15a34a'],
  ['canada', 'Canadá', 'ca', 'América', 455, '#d62828'],
  ['colombia', 'Colombia', 'co', 'América', 238, '#c28a00'],
  ['cuba', 'Cuba', 'cu', 'América', 189, '#0f3d91'],
  ['estados-unidos', 'Estados Unidos', 'us', 'América', 264, '#71d4dd'],
  ['mexico', 'México', 'mx', 'América', 301, '#0e8f6e'],
  ['republicadominicana', 'República Dominicana', 'do', 'América', 129, '#960a0a'],
  ['venezuela', 'Venezuela', 've', 'América', 276, '#ffc400'],
  // Europa
  ['alemania', 'Alemania', 'de', 'Europa', 598, '#44505e'],
  ['espana', 'España', 'es', 'Europa', 472, '#ff0000'],
  ['francia', 'Francia', 'fr', 'Europa', 531, '#3f5bd8'],
  ['italia', 'Italia', 'it', 'Europa', 549, '#3a9d23'],
  ['reinounido', 'Reino Unido', 'gb', 'Europa', 567, '#7a1f5c'],
  ['rusia', 'Rusia', 'ru', 'Europa', 742, '#5f7a8c'],
  // Asia
  ['arabiasaudita', 'Arabia Saudita', 'sa', 'Asia', 812, '#2d6a4f'],
  ['china', 'China', 'cn', 'Asia', 905, '#cf3a24'],
  ['india', 'India', 'in', 'Asia', 868, '#d9730d'],
  ['japon', 'Japón', 'jp', 'Asia', 983, '#8c0707'],
  ['corea-del-sur', 'Corea del Sur', 'kr', 'Asia', 952, '#003478'],
  ['libano', 'Líbano', 'lb', 'Asia', 721, '#1b9aaa'],
  // África
  ['argelia', 'Argelia', 'dz', 'África', 690, '#0b7285'],
  ['angola', 'Angola', 'ao', 'África', 774, '#9c36b5'],
  ['egipto', 'Egipto', 'eg', 'África', 640, '#a47148'],
  ['marruecos', 'Marruecos', 'ma', 'África', 565, '#b5382f'],
  ['nigeria', 'Nigeria', 'ng', 'África', 818, '#2f9e44'],
  // Oceanía
  ['australia', 'Australia', 'au', 'Oceanía', 1204, '#1864ab'],
  ['nuevazelanda', 'Nueva Zelanda', 'nz', 'Oceanía', 1288, '#0b5d5e'],
  ['fiyi', 'Fiyi', 'fj', 'Oceanía', 1176, '#17a2b8']
];

const ICONOS = {
  'América': 'fa-earth-americas',
  'Europa': 'fa-earth-europe',
  'Asia': 'fa-earth-asia',
  'África': 'fa-earth-africa',
  'Oceanía': 'fa-earth-oceania'
};

/* ==========================================================
   Convertir PAISES + FOTOS en las diapositivas del carrusel
   ========================================================== */

// Los ids no siempre coinciden ('republicadominicana' vs 'republica-dominicana'),
// así que se comparan sin guiones.
const sinGuiones = s => s.replace(/-/g, '');
const FOTOS_NORM = {};
Object.keys(FOTOS).forEach(k => { FOTOS_NORM[sinGuiones(k)] = FOTOS[k]; });

const items = PAISES.map(([id, nombre, bandera, continente, precio, color]) => {
  const archivo = FOTOS_NORM[sinGuiones(id)] || id + '.jpg';
  const ruta = encodeURI(CARPETA_FOTOS + archivo);   // maneja espacios y ñ
  return {
    id,
    precio,
    place: continente,
    icon: ICONOS[continente],
    flag: `https://flagcdn.com/w40/${bandera}.png`,
    name: nombre,
    title: nombre,
    desc: `Descubre ${nombre}, en ${continente}. Vuelos desde $${precio}.`,
    // Si la foto no carga, se ve un degradado con el color del país
    img: `url('${ruta}'), linear-gradient(160deg, ${color}, #000)`
  };
});

/* ---------- Elementos ---------- */
const stage   = document.getElementById('cards');
const content = document.getElementById('content');
const elTitle = document.getElementById('title');
const elPlace = document.getElementById('place');
const elDesc  = document.getElementById('desc');
const elNum   = document.getElementById('num');
const elBar   = document.getElementById('bar');
const layers  = [document.getElementById('bgA'), document.getElementById('bgB')];

let current = 0;                                    // slide de fondo
let queue   = items.map((_, i) => i).slice(1);      // tarjetas que vienen
let activeLayer = 0;
let busy = false;

/* ---------- Crear tarjetas ---------- */
const cardEls = items.map(it => {
  const el = document.createElement('div');
  el.className = 'card';
  el.style.setProperty('--img', it.img);
  el.innerHTML = `
    <div class="card-img"></div>
    <div class="card-text">
      <small><img class="flag" src="${it.flag}" alt="">${it.place}</small>
      <h3>${it.name}</h3>
    </div>`;
  stage.appendChild(el);
  return el;
});

/* ---------- Funciones ---------- */
function setBg(idx, instant) {
  const img = items[idx].img;
  if (instant) {
    layers[activeLayer].style.setProperty('--img', img);
    return;
  }
  const next = 1 - activeLayer;
  layers[next].style.setProperty('--img', img);
  layers[next].classList.add('show');
  layers[activeLayer].classList.remove('show');
  activeLayer = next;
}

function setText(idx) {
  const it = items[idx];
  elPlace.innerHTML = `<i class="fa-solid ${it.icon}"></i> ${it.place}`;
  elTitle.textContent = it.title;
  elDesc.textContent  = it.desc;
  elNum.textContent   = idx + 1;
  elBar.style.width   = ((idx + 1) / items.length * 100) + '%';

  content.classList.remove('leaving', 'enter');
  void content.offsetWidth;            // reinicia la animación
  content.classList.add('enter');
  renderSections();          // las secciones de abajo cambian con el país
}

function layout() {
  cardEls.forEach((el, i) => {
    const q = queue.indexOf(i);
    if (q === -1) {
      el.classList.add('hidden');
      el.style.setProperty('--i', queue.length);
    } else {
      el.classList.remove('hidden');
      el.style.setProperty('--i', q);
    }
  });
}

function next() {
  if (busy) return;
  busy = true;

  const idx = queue[0];
  const el  = cardEls[idx];

  content.classList.add('leaving');
  queue.slice(1).forEach((q, k) => cardEls[q].style.setProperty('--i', k)); // las demás avanzan
  el.classList.add('opening');                                              // la primera se abre

  setTimeout(() => {
    const old = current;
    current = idx;
    queue = queue.slice(1).concat(old);

    setBg(current, true);              // el fondo ya es la tarjeta abierta
    setText(current);

    el.classList.add('no-anim');       // devolver la tarjeta a su sitio sin animar
    el.classList.remove('opening');
    el.classList.add('hidden');
    el.style.setProperty('--i', queue.length);
    void el.offsetWidth;
    el.classList.remove('no-anim');

    layout();                          // la tarjeta anterior entra al final de la fila
    busy = false;
  }, 850);
}

function prev() {
  if (busy) return;
  busy = true;

  const idx = queue[queue.length - 1];
  const old = current;
  current = idx;
  queue = [old].concat(queue.slice(0, -1));

  setBg(current, false);
  setText(current);
  layout();

  setTimeout(() => { busy = false; }, 700);
}

/* ---------- Eventos ---------- */
document.getElementById('next').addEventListener('click', next);
document.getElementById('prev').addEventListener('click', prev);

cardEls.forEach((el, i) => el.addEventListener('click', () => {
  if (queue[0] === i) next();
}));

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft')  prev();
});


/* ==========================================================
   Secciones de abajo: se reconstruyen con el país elegido
   ========================================================== */
const main = document.getElementById('secciones');
const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const maps = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);

// Foto propia: imagenes.para.paises/<id>/<tipo><n>.jpg  (ej: mexico/lugar1.jpg)
// Si no existe, se ve la foto de portada del país y, si tampoco, el degradado.
const foto = (it, tipo, n) => `url('${encodeURI(CARPETA_FOTOS + it.id + '/' + tipo + n + '.jpg')}'), ${it.img}`;

function datos(it) {
  const p = (INFO[it.id] || '').split('|');
  const l = i => (p[i] || '').split(';').filter(Boolean);
  return { capital: p[0] || '—', idiomas: p[1] || '—', moneda: p[2] || '—', lugares: l(3), platos: l(4), cultura: p[5] || '—', zonas: l(6) };
}

// Reseñas: se guardan en el navegador de cada persona
const leerResenas = id => { try { return JSON.parse(localStorage.getItem('resenas:' + id)) || []; } catch { return []; } };
const guardarResena = (id, r) => { try { localStorage.setItem('resenas:' + id, JSON.stringify([r, ...leerResenas(id)])); } catch {} };

let fi = 0;   // tarjeta central del carrusel de gastronomía

function renderSections() {
  const it = items[current], d = datos(it), N = esc(it.name);
  fi = 0;

  const platos = d.platos.map((p, i) => `
    <article class="fcard" style="background-image:${foto(it, 'comida', i + 1)}"><div>
      <h3>${esc(p)}</h3>
      <a href="${maps('restaurantes ' + p + ' ' + it.name)}" target="_blank" rel="noopener">Buscar restaurantes ↗</a>
    </div></article>`).join('');

  const lugares = d.lugares.map((l, i) => `
    <figure class="lug"><div class="ph" style="background-image:${foto(it, 'lugar', i + 1)}"></div>
    <figcaption>${esc(l)}</figcaption></figure>`).join('');

  const lado = d.lugares.slice(0, 2).map((l, i) => `
    <a class="b-card" href="${maps(l + ' ' + it.name)}" target="_blank" rel="noopener" style="background-image:${foto(it, 'lugar', i + 1)}">
      <span>${esc(l)}</span><span>↗</span></a>`).join('');

  const cultura = [[d.cultura, 'Tradición'], [d.idiomas, 'Idiomas'], [d.moneda, 'Moneda'], [d.capital, 'Capital']]
    .map(([t, s], i) => `<a href="${maps(t + ' ' + it.name)}" target="_blank" rel="noopener" style="background-image:${foto(it, 'cultura', i + 1)}"><b>${esc(t)}</b><small>${s} · ${N}</small></a>`).join('');

  const hoteles = d.zonas.map((z, i) => `
    <article class="hcard"><div class="ph" style="background-image:${foto(it, 'hotel', i + 1)}"></div>
    <div class="hinfo"><h3>${esc(z)}</h3><p>${N}</p>
    <div><span>${[4, 5, 3][i % 3]} noches</span><span><b>$${it.precio + i * 35}</b><br><small>por persona (ejemplo)</small></span></div></div></article>`).join('');

  const resenas = leerResenas(it.id).map(r => `
    <article class="rcard"><div class="st">${'★'.repeat(r.estrellas)}</div><p>“${esc(r.texto)}”</p>
    <span class="av">${esc(r.nombre[0] || '?').toUpperCase()}</span><strong>${esc(r.nombre)}</strong></article>`).join('');

  const flecha = id => `<button class="rbtn l" data-row="${id}" data-dir="-1" aria-label="Anterior">‹</button><button class="rbtn" data-row="${id}" data-dir="1" aria-label="Siguiente">›</button>`;

  main.innerHTML = `
  <section id="gastronomia" class="sec verde"><div class="wrap">
    <h2>Gastronomía y restaurantes</h2><p class="sub">Sabores típicos de ${N}</p>
    <div class="flow">${platos}</div>
    <div class="ctl"><button data-f="-1" aria-label="Anterior">‹</button><button data-f="1" aria-label="Siguiente">›</button></div>
  </div></section>

  <section id="lugares" class="sec negro"><div class="wrap">
    <div class="lugares">${lugares}</div>
    <div class="banner" style="background-image:${it.img}">
      <div><h2>Viaja y disfruta la belleza de ${N}</h2>
      <p>${esc(it.desc)} Su capital es ${esc(d.capital)}, y entre sus imágenes más conocidas están ${esc(d.lugares.join(', '))}.</p></div>
      <div class="b-side">${lado}</div>
    </div>
  </div></section>

  <section id="cultura" class="sec claro"><div class="wrap">
    <h2>Cultura</h2><p class="sub">Lo esencial para entender ${N}</p>
    <div class="bento">${cultura}</div>
  </div></section>

  <section id="hospedaje" class="sec blanco"><div class="wrap">
    <h2>Informaciones de hospedajes</h2><p class="sub">Zonas recomendadas para alojarte en ${N}</p>
    <div class="rowwrap"><div class="row" id="rowH">${hoteles}</div>${flecha('rowH')}</div>
    <p class="nota">Precios de ejemplo; compara hoteles, hostales y apartamentos antes de reservar.</p>
  </div></section>

  <section id="resenas" class="sec claro"><div class="wrap">
    <h2>Lo que dicen los viajeros</h2><p class="sub">Reseñas sobre ${N}</p>
    <div class="rowwrap"><div class="row" id="rowR">
      <article class="rcard"><form id="formResena">
        <strong>Cuéntanos tu viaje</strong>
        <input name="nombre" placeholder="Tu nombre" required maxlength="40">
        <select name="estrellas"><option value="5">★★★★★</option><option value="4">★★★★</option><option value="3">★★★</option><option value="2">★★</option><option value="1">★</option></select>
        <textarea name="texto" rows="3" placeholder="Tu experiencia" required maxlength="400"></textarea>
        <button>Publicar reseña</button></form></article>
      ${resenas}</div>${flecha('rowR')}</div>
    <p class="nota">Las reseñas se guardan en este navegador.</p>
  </div></section>`;

  flowRender();
}

function flowRender() {
  const cs = [...main.querySelectorAll('.fcard')], n = cs.length;
  cs.forEach((c, i) => {
    let p = i - fi;
    if (p > n / 2) p -= n;
    if (p < -n / 2) p += n;
    c.dataset.pos = p;
  });
}

main.addEventListener('click', e => {
  const f = e.target.closest('[data-f]');
  if (f) { const n = main.querySelectorAll('.fcard').length; fi = (fi + +f.dataset.f + n) % n; flowRender(); }
  const r = e.target.closest('[data-row]');
  if (r) document.getElementById(r.dataset.row).scrollBy({ left: 320 * +r.dataset.dir, behavior: 'smooth' });
});

main.addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  guardarResena(items[current].id, { nombre: f.get('nombre'), estrellas: +f.get('estrellas'), texto: f.get('texto') });
  renderSections();
});

/* Menú: resalta la sección visible y se vuelve sólido al bajar */
const nav = document.querySelector('.nav');
const links = [...document.querySelectorAll('.nav [data-tab]')];
const ids = ['top', 'gastronomia', 'lugares', 'cultura', 'hospedaje', 'resenas'];
function onScroll() {
  nav.classList.toggle('solid', scrollY > 60);
  let act = 'top';
  ids.forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= 140) act = id; });
  links.forEach(a => a.classList.toggle('active', a.dataset.tab === act));
}
addEventListener('scroll', onScroll, { passive: true });

/* ---------- Inicio ---------- */
setBg(current, true);
setText(current);
layout();
onScroll();