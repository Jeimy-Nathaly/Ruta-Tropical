/* ==========================================================
   RUTA TROPICAL · script.js (COMPLETO Y DEFINITIVO)
   ========================================================== */

/* ==========================================================
   1. CARRUSEL "PARA VIAJEROS EXPERTOS"
   ========================================================== */
(function () {
  const pista = document.getElementById('pista');
  const anterior = document.getElementById('anterior');
  const siguiente = document.getElementById('siguiente');
  if (!pista || !anterior || !siguiente) return;
 
  function pasoDeScroll() {
    const tarjeta = pista.querySelector('.tarjeta');
    if (!tarjeta) return 0;
    const gap = parseFloat(getComputedStyle(pista).columnGap) || 0;
    return tarjeta.offsetWidth + gap;
  }
 
  function actualizarFlechas() {
    const max = pista.scrollWidth - pista.clientWidth;
    anterior.disabled = pista.scrollLeft <= 1;
    siguiente.disabled = pista.scrollLeft >= max - 1;
  }
 
  anterior.addEventListener('click', () => { pista.scrollBy({ left: -pasoDeScroll() * 2 }); });
  siguiente.addEventListener('click', () => { pista.scrollBy({ left: pasoDeScroll() * 2 }); });
 
  pista.addEventListener('scroll', actualizarFlechas, { passive: true });
  window.addEventListener('resize', actualizarFlechas);
  actualizarFlechas();
})();

/* ==========================================================
   2. VIAJEROS Y CLASE (BUSCADOR)
   ========================================================== */
(function () {
  const MAX_VIAJEROS = 9;
  const boton = document.getElementById('viajeros-boton');
  const panel = document.getElementById('viajeros-panel');
  const resumen = document.getElementById('viajeros-resumen');
  const claseSelect = document.getElementById('viajeros-clase');
  const hecho = document.getElementById('viajeros-hecho');
  if (!boton || !panel) return;

  const contenedor = boton.closest('.viajeros');
  const estado = { adultos: 1, ninos: 0, bebes: 0 };
  const inputs = {
    adultos: document.getElementById('in-adultos'),
    ninos: document.getElementById('in-ninos'),
    bebes: document.getElementById('in-bebes')
  };
 
  function total() { return estado.adultos + estado.ninos + estado.bebes; }
  function puedeSumar(tipo) {
    if (total() >= MAX_VIAJEROS) return false;
    if (tipo === 'bebes') return estado.bebes < estado.adultos;
    return true;
  }
  function puedeRestar(tipo) {
    if (tipo === 'adultos') return estado.adultos > 1 && estado.adultos > estado.bebes;
    return estado[tipo] > 0;
  }
 
  function actualizar() {
    const n = total();
    if (resumen) resumen.textContent = n + (n === 1 ? ' Viajero' : ' Viajeros') + ', ' + claseSelect.value;
    contenedor.querySelectorAll('.contador').forEach(function (c) {
      const tipo = c.dataset.tipo;
      c.querySelector('.contador__valor').textContent = estado[tipo];
      c.querySelector('[data-accion="restar"]').disabled = !puedeRestar(tipo);
      c.querySelector('[data-accion="sumar"]').disabled = !puedeSumar(tipo);
      if (inputs[tipo]) inputs[tipo].value = estado[tipo];
    });
  }
 
  function abrir() { panel.hidden = false; boton.setAttribute('aria-expanded', 'true'); }
  function cerrar() { panel.hidden = true; boton.setAttribute('aria-expanded', 'false'); }
 
  boton.addEventListener('click', function () { panel.hidden ? abrir() : cerrar(); });
 
  contenedor.querySelectorAll('.contador__btn').forEach(function (b) {
    b.addEventListener('click', function () {
      const tipo = b.closest('.contador').dataset.tipo;
      if (b.dataset.accion === 'sumar' && puedeSumar(tipo)) estado[tipo]++;
      if (b.dataset.accion === 'restar' && puedeRestar(tipo)) estado[tipo]--;
      actualizar();
    });
  });
 
  if(claseSelect) claseSelect.addEventListener('change', actualizar);
  if(hecho) hecho.addEventListener('click', function () { cerrar(); boton.focus(); });
  document.addEventListener('click', function (e) { if (!panel.hidden && !contenedor.contains(e.target)) cerrar(); });
  actualizar();
})();

/* ==========================================================
   3. BARRA DE NAVEGACIÓN Y MENÚ LATERAL
   ========================================================== */
window.monedaActual = { simbolo: '$', tasa: 1, codigo: 'usd' };

(function () {
  const nav = document.getElementById('nav-sitio');
  const cajon = document.getElementById('cajon');
  const fondo = document.getElementById('cajon-fondo');
  const abrir = document.getElementById('abrir-menu');
  const cerrar = document.getElementById('cerrar-menu');
  const portada = document.querySelector('.portada');
 
  if (abrir && cajon && fondo && cerrar) {
    function alternarMenu(mostrar) {
      cajon.classList.toggle('abierto', mostrar);
      fondo.classList.toggle('visible', mostrar);
      abrir.setAttribute('aria-expanded', mostrar);
      document.body.style.overflow = mostrar ? 'hidden' : '';
    }
    abrir.addEventListener('click', () => alternarMenu(true));
    cerrar.addEventListener('click', () => alternarMenu(false));
    fondo.addEventListener('click', () => alternarMenu(false));
  }
 
  if (nav && portada) {
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entradas) => {
        nav.classList.toggle('fija', !entradas[0].isIntersecting);
      }).observe(portada);
    } else {
      nav.classList.add('fija');
    }
  }
})();

function googleTranslateElementInit() {
  if (window.google && window.google.translate) {
    new google.translate.TranslateElement({
      pageLanguage: 'es',
      includedLanguages: 'es,en,fr,de,it,pt,zh-CN,ja,ru,ar,ko,tr,nl,pl,hi,sv,el,cs,vi,id',
      autoDisplay: false
    }, 'google_translate_element');
  }
}

function abrirDropdown(event, id) {
    event.stopPropagation();
    const dropdown = document.getElementById(id);
    const estaAbierto = dropdown.classList.contains('mostrar');

    document.querySelectorAll('.dropdown-custom').forEach(d => d.classList.remove('mostrar'));

    if (!estaAbierto) {
        dropdown.classList.add('mostrar');
    }
}

window.addEventListener('click', (e) => {
    // Si haces clic fuera de cualquier menú desplegable, los cerramos
    if (!e.target.closest('.dropdown-custom')) {
        document.querySelectorAll('.dropdown-custom').forEach(d => d.classList.remove('mostrar'));
    }
});

function elegirMoneda(codigo, simbolo) {
    const txtMoneda = document.getElementById('txt-moneda');
    const simboloActual = document.getElementById('simbolo-actual');
    
    if (txtMoneda) txtMoneda.textContent = codigo;
    if (simboloActual) simboloActual.textContent = simbolo;

    const tasas = { USD: 1, EUR: 0.92, DOP: 60.5, GBP: 0.78, CAD: 1.35, COP: 4100 };
    window.monedaActual.simbolo = simbolo;
    window.monedaActual.tasa = tasas[codigo] || 1;
    window.monedaActual.codigo = codigo.toLowerCase();

    document.querySelectorAll('#drop-moneda .item-opcion').forEach(item => {
        item.classList.remove('activa');
        if (item.textContent.includes(codigo)) item.classList.add('activa');
    });

    document.dispatchEvent(new CustomEvent('moneda:cambio'));
}

function elegirIdioma(codigo, urlBandera, nombreIdioma, sigla) {
    const txtIdioma = document.getElementById('txt-idioma');
    const imgBanderaActual = document.getElementById('img-bandera-actual');

    if (txtIdioma) txtIdioma.textContent = sigla;
    if (imgBanderaActual) imgBanderaActual.src = urlBandera;

    // Buscar el combo secreto que genera Google Translate
    const selectGoogle = document.querySelector('.goog-te-combo');
    if (selectGoogle) {
        selectGoogle.value = codigo;
        selectGoogle.dispatchEvent(new Event('change'));
    } else {
        setTimeout(() => {
            const reSelect = document.querySelector('.goog-te-combo');
            if (reSelect) {
                reSelect.value = codigo;
                reSelect.dispatchEvent(new Event('change'));
            }
        }, 800);
    }

    document.querySelectorAll('#drop-idioma .item-opcion').forEach(item => {
        item.classList.remove('activa');
        if (item.textContent.includes(sigla)) item.classList.add('activa');
    });
}

// Cargar script oficial de Google Translate si no está presente
if (!document.getElementById('traductorscript')) {
    const script = document.createElement('script');
    script.id = 'traductorscript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
}

/* ==========================================================
   5. OFERTAS DE VIAJE POR PAÍS
   ========================================================== */
(function () {
  const CARPETA_FOTOS = 'imagenes.para.paises/';
  const FOTOS = {
    'argentina': 'argentina.jpg', 'brasil': 'brazil.jpg', 'canada': 'canada.jpg',
    'colombia': 'colombia.jpg', 'cuba': 'cuba.jpg', 'estados-unidos': 'america.jpg',
    'mexico': 'mexico.jpg', 'republica-dominicana': 'republica dominicana.jpg',
    'venezuela': 'venezuela.jpg', 'alemania': 'alemania.jpg', 'espana': 'españa.jpg',
    'francia': 'francia.jpg', 'italia': 'italia.jpg', 'reino-unido': 'reino unido.jpg',
    'rusia': 'rusia.jpg', 'arabia-saudita': 'arabia saudita.jpg', 'china': 'china.jpg',
    'india': 'india.jpg', 'japon': 'japones.jpeg', 'corea-del-sur': 'korea.jpg',
    'libano': 'libano.jpg', 'argelia': 'argelia.jpg', 'angola': 'angola.jpg',
    'egipto': 'egipto.jpg', 'marruecos': 'marruecos.jpg', 'nigeria': 'nigeria.jpg',
    'australia': 'australia.jpg', 'nueva-zelanda': 'nueva zelanda.jpg', 'fiyi': 'fiyi.jpg'
  };

  const PAISES = [
    ['argentina', 'Argentina', 'ar', 'América', 489, '#2b8ad6'],
    ['brasil', 'Brasil', 'br', 'América', 412, '#15a34a'],
    ['canada', 'Canadá', 'ca', 'América', 455, '#d62828'],
    ['colombia', 'Colombia', 'co', 'América', 238, '#c28a00'],
    ['cuba', 'Cuba', 'cu', 'América', 189, '#0f3d91'],
    ['estados-unidos', 'Estados Unidos', 'us', 'América', 264, '#71d4dd'],
    ['mexico', 'México', 'mx', 'América', 301, '#0e8f6e'],
    ['republicadominicana', 'República Dominicana', 'do', 'América', 129, '#960a0a'],
    ['venezuela', 'Venezuela', 've', 'América', 276, '#ffc400'],
    ['alemania', 'Alemania', 'de', 'Europa', 598, '#44505e'],
    ['espana', 'España', 'es', 'Europa', 472, '#ff0000'],
    ['francia', 'Francia', 'fr', 'Europa', 531, '#3f5bd8'],
    ['italia', 'Italia', 'it', 'Europa', 549, '#3a9d23'],
    ['reinounido', 'Reino Unido', 'gb', 'Europa', 567, '#7a1f5c'],
    ['rusia', 'Rusia', 'ru', 'Europa', 742, '#5f7a8c'],
    ['arabiasaudita', 'Arabia Saudita', 'sa', 'Asia', 812, '#2d6a4f'],
    ['china', 'China', 'cn', 'Asia', 905, '#cf3a24'],
    ['india', 'India', 'in', 'Asia', 868, '#d9730d'],
    ['japon', 'Japón', 'jp', 'Asia', 983, '#8c0707'],
    ['corea-del-sur', 'Corea del Sur', 'kr', 'Asia', 952, '#003478'],
    ['libano', 'Líbano', 'lb', 'Asia', 721, '#1b9aaa'],
    ['argelia', 'Argelia', 'dz', 'África', 690, '#0b7285'],
    ['angola', 'Angola', 'ao', 'África', 774, '#9c36b5'],
    ['egipto', 'Egipto', 'eg', 'África', 640, '#a47148'],
    ['marruecos', 'Marruecos', 'ma', 'África', 565, '#b5382f'],
    ['nigeria', 'Nigeria', 'ng', 'África', 818, '#2f9e44'],
    ['australia', 'Australia', 'au', 'Oceanía', 1204, '#1864ab'],
    ['nuevazelanda', 'Nueva Zelanda', 'nz', 'Oceanía', 1288, '#0b5d5e'],
    ['fiyi', 'Fiyi', 'fj', 'Oceanía', 1176, '#17a2b8']
  ];

  const ICONOS = {
    'América': 'fa-earth-americas', 'Europa': 'fa-earth-europe',
    'Asia': 'fa-earth-asia', 'África': 'fa-earth-africa', 'Oceanía': 'fa-earth-oceania'
  };

  const pista = document.getElementById('ofertas-pista');
  const filtros = document.querySelectorAll('#ofertas-filtros .filtro');
  if (!pista) return;

  const formato = new Intl.NumberFormat('es');

  function dibujar(continente) {
    const lista = PAISES.filter(p => continente === 'Todos' || p[3] === continente);
    pista.innerHTML = lista.map(p => {
      const precioConv = Math.round(p[4] * window.monedaActual.tasa);
      const txtPrecio = window.monedaActual.simbolo + formato.format(precioConv);
      const archivoImg = FOTOS[p[0]] || 'default.jpg';
      return `
        <li class="oferta" style="--c:${p[5]}">
          <a href="vuelos.html?destino=${p[0]}">
            <div class="oferta__foto">
              <img src="${CARPETA_FOTOS}${archivoImg}" alt="" loading="lazy">
              <span class="oferta__boton" aria-hidden="true">Ver ofertas <i class="fa-solid fa-chevron-right"></i></span>
            </div>
            <div class="oferta__cuerpo">
              <h3 class="oferta__nombre">
                <img src="https://flagcdn.com/w40/${p[2]}.png" alt="" width="26" height="18" loading="lazy">
                ${p[1]}
              </h3>
              <p class="oferta__continente">
                <i class="fa-solid ${ICONOS[p[3]]}" aria-hidden="true"></i>${p[3]}
              </p>
              <div class="oferta__pie">
                <span class="oferta__precio">desde ${txtPrecio}</span>
                <i class="fa-solid fa-arrow-right oferta__flecha" aria-hidden="true"></i>
              </div>
            </div>
          </a>
        </li>`;
    }).join('');
  }

  filtros.forEach(btn => {
    btn.addEventListener('click', () => {
      filtros.forEach(b => b.setAttribute('aria-pressed', b === btn));
      dibujar(btn.dataset.continente);
    });
  });

  document.addEventListener('moneda:cambio', () => {
    const activo = document.querySelector('#ofertas-filtros .filtro[aria-pressed="true"]');
    dibujar(activo ? activo.dataset.continente : 'Todos');
  });

  dibujar('Todos');
})();

/* ==========================================================
   6. REDIRECCIÓN, AUTOCOMPLETADO Y CALENDARIO INTERACTIVO
   ========================================================== */
window.irAResultados = function() {
    const origenEl = document.getElementById('input-origen') || document.querySelector('.selecciones input:nth-of-type(1)');
    const destinoEl = document.getElementById('input-destino') || document.querySelector('.selecciones input:nth-of-type(2)');
    const fechaIdaEl = document.getElementById('fecha-ida') || document.querySelector('.selecciones input[type="date"], .selecciones input[placeholder*="dd"]');

    const origen = encodeURIComponent(origenEl?.value.trim() || 'Bangkok');
    const destino = encodeURIComponent(destinoEl?.value.trim() || 'Ho Chi Minh');
    const fechaIda = encodeURIComponent(fechaIdaEl?.value || '2026-11-12');

    window.location.href = `vuelos.html?origen=${origen}&destino=${destino}&fecha=${fechaIda}`;
};

const AEROPUERTOS_DB = [
    { ciudad: "Bangkok", pais: "Tailandia", codigo: "BKK" },
    { ciudad: "Ho Chi Minh City", pais: "Vietnam", codigo: "SGN" },
    { ciudad: "Tokyo", pais: "Japón", codigo: "HND" },
    { ciudad: "Miami", pais: "Estados Unidos", codigo: "MIA" },
    { ciudad: "Madrid", pais: "España", codigo: "MAD" },
    { ciudad: "Santo Domingo", pais: "República Dominicana", codigo: "SDQ" },
    { ciudad: "Paris", pais: "Francia", codigo: "CDG" },
    { ciudad: "New York", pais: "Estados Unidos", codigo: "JFK" }
];

function configurarAutocompletado(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'aeropuerto-dropdown-custom';
    input.parentNode.style.position = 'relative';
    input.parentNode.appendChild(wrapper);

    input.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        wrapper.innerHTML = '';
        if (query.length === 0) { wrapper.style.display = 'none'; return; }

        const filtrados = AEROPUERTOS_DB.filter(a => 
            a.ciudad.toLowerCase().includes(query) || 
            a.codigo.toLowerCase().includes(query) ||
            a.pais.toLowerCase().includes(query)
        );

        if (filtrados.length > 0) {
            wrapper.style.display = 'block';
            wrapper.innerHTML = filtrados.map(a => `
                <div class="aeropuerto-item-sugerencia" data-codigo="${a.codigo}" data-ciudad="${a.ciudad}">
                    <i class="fa-solid fa-plane" style="color: #dd4350;"></i>
                    <div style="flex: 1;">
                        <strong style="font-size: 14px; color: #1e293b; display: block;">${a.ciudad} (${a.codigo})</strong>
                        <small style="font-size: 12px; color: #64748b;">${a.pais}</small>
                    </div>
                </div>
            `).join('');

            wrapper.querySelectorAll('.aeropuerto-item-sugerencia').forEach(item => {
                item.addEventListener('click', function() {
                    input.value = `${this.dataset.ciudad} (${this.dataset.codigo})`;
                    wrapper.style.display = 'none';
                });
            });
        } else {
            wrapper.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !wrapper.contains(e.target)) wrapper.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const inputsTexto = document.querySelectorAll('.selecciones input[type="text"]');
    if(inputsTexto.length >= 2) {
        inputsTexto[0].id = inputsTexto[0].id || 'input-origen';
        inputsTexto[1].id = inputsTexto[1].id || 'input-destino';
        configurarAutocompletado(inputsTexto[0].id);
        configurarAutocompletado(inputsTexto[1].id);
    }

    const inputsFecha = document.querySelectorAll('.selecciones input[type="date"], .selecciones input[placeholder*="dd"], .selecciones input[placeholder*="aaaa"]');
    inputsFecha.forEach(input => {
        input.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            abrirCalendarioDoble(this);
        });
        input.addEventListener('focus', function(e) {
            e.preventDefault();
            this.blur();
            abrirCalendarioDoble(this);
        });
    });

    const botonBuscar = document.querySelector('.botondebusqueda button');
    if (botonBuscar) {
        botonBuscar.addEventListener('click', (e) => {
            e.preventDefault();
            window.irAResultados();
        });
    }

    const cupones = document.querySelectorAll('.cupon-card');
    cupones.forEach(card => {
        card.addEventListener('click', () => {
            cupones.forEach(c => c.classList.remove('seleccionado'));
            card.classList.add('seleccionado');
        });
    });

    const aerolineasDeals = document.querySelectorAll('.aerolinea-deal-card');
    aerolineasDeals.forEach(card => {
        card.addEventListener('click', () => {
            aerolineasDeals.forEach(a => a.classList.remove('seleccionado'));
            card.classList.add('seleccionado');
        });
    });
});

let mesActualOffset = 0;

function abrirCalendarioDoble(inputTarget) {
    const existente = document.getElementById('calendario-custom-modal');
    if (existente) existente.remove();

    const modal = document.createElement('div');
    modal.id = 'calendario-custom-modal';
    modal.className = 'cal-modal-overlay';

    renderizarContenidoCalendario(modal, inputTarget);
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => { if(e.target === modal) modal.remove(); });
}

function renderizarContenidoCalendario(modal, inputTarget) {
    const fechaBase = new Date(2026, 10 + mesActualOffset, 1);
    const fechaMes2 = new Date(2026, 11 + mesActualOffset, 1);

    const nombresMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    
    const nombre1 = nombresMeses[fechaBase.getMonth()];
    const anio1 = fechaBase.getFullYear();
    const nombre2 = nombresMeses[fechaMes2.getMonth()];
    const anio2 = fechaMes2.getFullYear();

    modal.innerHTML = `
        <div class="cal-card">
            <div class="cal-header">
                <button type="button" class="cal-nav-btn" id="cal-prev"><i class="fa-solid fa-chevron-left"></i> Prev</button>
                <button type="button" class="cal-cerrar">&times;</button>
                <button type="button" class="cal-nav-btn" id="cal-next">Next <i class="fa-solid fa-chevron-right"></i></button>
            </div>
            <div class="cal-meses-doble">
                <div class="cal-mes">
                    <h4>${nombre1} <span>${anio1}</span></h4>
                    <div class="cal-dias-grid" id="grid-mes-1">
                        <span>lun</span><span>mar</span><span>mié</span><span>jue</span><span>vie</span><span>sáb</span><span>dom</span>
                    </div>
                </div>
                <div class="cal-mes">
                    <h4>${nombre2} <span>${anio2}</span></h4>
                    <div class="cal-dias-grid" id="grid-mes-2">
                        <span>lun</span><span>mar</span><span>mié</span><span>jue</span><span>vie</span><span>sáb</span><span>dom</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    poblarDiasMes(fechaBase.getFullYear(), fechaBase.getMonth(), 'grid-mes-1', inputTarget, modal);
    poblarDiasMes(fechaMes2.getFullYear(), fechaMes2.getMonth(), 'grid-mes-2', inputTarget, modal);

    modal.querySelector('.cal-cerrar').addEventListener('click', () => modal.remove());
    modal.querySelector('#cal-prev').addEventListener('click', () => {
        mesActualOffset--;
        renderizarContenidoCalendario(modal, inputTarget);
    });
    modal.querySelector('#cal-next').addEventListener('click', () => {
        mesActualOffset++;
        renderizarContenidoCalendario(modal, inputTarget);
    });
}

function poblarDiasMes(anio, mes, gridId, inputTarget, modal) {
    const grid = modal.querySelector('#' + gridId);
    const primerDia = new Date(anio, mes, 1);
    let diaSemana = primerDia.getDay();
    diaSemana = (diaSemana === 0) ? 6 : diaSemana - 1;

    const ultimoDia = new Date(anio, mes + 1, 0).getDate();
    const ultimoDiaMesAnterior = new Date(anio, mes, 0).getDate();

    for (let i = 0; i < diaSemana; i++) {
        const d = document.createElement('div');
        d.className = 'cal-dia vacio';
        d.textContent = ultimoDiaMesAnterior - diaSemana + i + 1;
        grid.appendChild(d);
    }

    for (let dia = 1; dia <= ultimoDia; dia++) {
        const d = document.createElement('div');
        d.className = 'cal-dia';
        d.textContent = dia;
        
        const mesStr = String(mes + 1).padStart(2, '0');
        const diaStr = String(dia).padStart(2, '0');
        const fechaFormato = `${anio}-${mesStr}-${diaStr}`;
        d.dataset.f = fechaFormato;

        d.addEventListener('click', function() {
            inputTarget.value = this.dataset.f;
            modal.remove();
        });

        grid.appendChild(d);
    }
}

/* ==========================================================
   BÚSQUEDA Y FILTRADO EN TIEMPO REAL DE IDIOMAS
   ========================================================== */
function filtrarIdiomas() {
    const input = document.getElementById('input-buscar-idioma');
    if (!input) return;
    
    const filtro = input.value.toLowerCase().trim();
    const contenedor = document.getElementById('lista-idiomas-contenedor');
    if (!contenedor) return;

    const items = contenedor.querySelectorAll('.item-opcion');

    items.forEach(item => {
        // Busca en todo el texto interno del idioma (nombre, país y siglas)
        const textoCompleto = item.textContent.toLowerCase();
        
        if (textoCompleto.includes(filtro)) {
            item.style.display = 'flex'; // Muestra la opción si coincide
        } else {
            item.style.display = 'none'; // Oculta la opción si no coincide
        }
    });
}

function googleTranslateElementInit() {
  if (window.google && window.google.translate) {
    new google.translate.TranslateElement({
      pageLanguage: 'es',
      includedLanguages: 'es,en,fr,de,it,pt,zh-CN,ja,ru,ar,ko,tr,nl,pl,hi,sv,el,cs,vi,id',
      autoDisplay: false
    }, 'google_translate_element');
  }
}

// =========================================================
// SECCIÓN COMPLETA JS: DESPLEGABLE MODERNO DE CLASE
// =========================================================
(function mejorarSelectorClase() {
  const selectClase =
    document.querySelector(".rt-clase-select") ||
    document.querySelector('select[id*="Clase"]') ||
    document.querySelector('select[id*="clase"]');

  if (!selectClase || selectClase.dataset.rtClaseLista === "1") return;
  selectClase.dataset.rtClaseLista = "1";

  const opciones = Array.from(selectClase.options).map((opt) => ({
    value: opt.value,
    label: opt.textContent.trim()
  }));

  if (opciones.length === 0) return;

  const wrap = document.createElement("div");
  wrap.className = "rt-clase-custom-wrap";

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "rt-clase-custom-btn";

  const textoBtn = document.createElement("span");
  const iconoBtn = document.createElement("i");
  iconoBtn.className = "fa-solid fa-chevron-down";

  btn.appendChild(textoBtn);
  btn.appendChild(iconoBtn);

  const lista = document.createElement("div");
  lista.className = "rt-clase-custom-lista";
  lista.setAttribute("role", "listbox");

  function actualizarVisual() {
    const actual = opciones.find((o) => o.value === selectClase.value) || opciones[0];
    textoBtn.textContent = actual.label;
    lista.querySelectorAll(".rt-clase-custom-opcion").forEach((el) => {
      el.classList.toggle("activa", el.dataset.value === actual.value);
    });
  }

  opciones.forEach((op) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "rt-clase-custom-opcion";
    item.dataset.value = op.value;
    item.textContent = op.label;

    item.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      selectClase.value = op.value;
      selectClase.dispatchEvent(new Event("change", { bubbles: true }));
      actualizarVisual();
      wrap.classList.remove("abierto");
    });

    lista.appendChild(item);
  });

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    wrap.classList.toggle("abierto");
  });

  document.addEventListener("click", (e) => {
    if (!wrap.contains(e.target)) {
      wrap.classList.remove("abierto");
    }
  });

  selectClase.style.display = "none";
  selectClase.parentNode.insertBefore(wrap, selectClase.nextSibling);
  wrap.appendChild(btn);
  wrap.appendChild(lista);
  actualizarVisual();
})();
(function () {
    const KEY_SESION_CERRADA = "rt_sesion_cerrada_v1";

    function aplicarEstadoSesion() {
        const cerrada = localStorage.getItem(KEY_SESION_CERRADA) === "true";
        if (!cerrada) return;

        const img = document.getElementById("rtPerfilFotoBtn");
        const span = document.getElementById("rtPerfilInicialBtn");
        if (img) {
            img.removeAttribute("src");
            img.classList.remove("activa");
        }
        if (span && !span.textContent.trim()) {
            span.textContent = "J";
        }
    }

    document.addEventListener("click", function (e) {
        if (e.target.closest("#rtPerfilSalirBtn")) {
            try {
                localStorage.setItem(KEY_SESION_CERRADA, "true");
                localStorage.removeItem("rt_cuenta_actual_v1");
                localStorage.removeItem("rt_usuario_activo_v1");
                localStorage.removeItem("usuarioActual");
                localStorage.removeItem("rt_foto_perfil");
                localStorage.removeItem("fotoPerfil");
            } catch (_) {}
            aplicarEstadoSesion();
        }
    });

    window.addEventListener("storage", aplicarEstadoSesion);
    window.addEventListener("pageshow", aplicarEstadoSesion);
    aplicarEstadoSesion();

    // Dentro del submit / validación exitosa de login.js:
localStorage.setItem("rt_sesion_iniciada_v1", "true");
localStorage.setItem("rt_cuenta_actual_v1", correoDelUsuario);
})();
