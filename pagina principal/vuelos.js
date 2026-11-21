/* ==========================================================
   RUTA TROPICAL · Filtrado de vuelos (CORREGIDO Y FUNCIONAL)
   ========================================================== */

let listaVuelosGenerados = [];

// Obtener código IATA simplificado de 3 letras de la ciudad
function obtenerCodigoIATA(ciudad) {
    if (!ciudad) return "DEST";
    const limpia = ciudad.replace(/[^a-zA-Z]/g, "").toUpperCase();
    if (limpia.length >= 3) return limpia.substring(0, 3);
    return (limpia + "XXX").substring(0, 3);
}

// Generar itinerarios de vuelo reales basados en la búsqueda del usuario
function generarVuelosPorConsulta(origen, destino, fechaStr) {
    const codOrigen = obtenerCodigoIATA(origen);
    const codDestino = obtenerCodigoIATA(destino);
    const fechaText = fechaStr ? new Date(fechaStr).toDateString().slice(0, 10) : "Fri 05 Sep";

    // Generar 4 opciones con diferentes horarios, precios y escalas para comparar
    return [
        {
            id: 1,
            aerolinea: "ANA",
            origenCod: codOrigen,
            origenHora: "08:30",
            origenCiudad: origen || "Origen",
            destinoCod: codDestino,
            destinoHora: "11:45",
            destinoCiudad: destino || "Destino",
            duracion: "3h 15m",
            escala: "directo",
            precio: 280,
            fecha: fechaText,
            detalles: `${origen} a ${destino} • Vuelo Directo • Incluye equipaje de mano 10KG`
        },
        {
            id: 2,
            aerolinea: "Vietjet",
            origenCod: codOrigen,
            origenHora: "12:15",
            origenCiudad: origen || "Origen",
            destinoCod: codDestino,
            destinoHora: "17:30",
            destinoCiudad: destino || "Destino",
            duracion: "5h 15m",
            escala: "1escala",
            precio: 195,
            fecha: fechaText,
            detalles: `${origen} con 1 escala a ${destino} • Asiento estándar`
        },
        {
            id: 3,
            aerolinea: "AirAsia",
            origenCod: codOrigen,
            origenHora: "16:00",
            origenCiudad: origen || "Origen",
            destinoCod: codDestino,
            destinoHora: "19:15",
            destinoCiudad: destino || "Destino",
            duracion: "3h 15m",
            escala: "directo",
            precio: 310,
            fecha: fechaText,
            detalles: `${origen} a ${destino} • Vuelo directo nocturno`
        },
        {
            id: 4,
            aerolinea: "HKexpress",
            origenCod: codOrigen,
            origenHora: "21:30",
            origenCiudad: origen || "Origen",
            destinoCod: codDestino,
            destinoHora: "04:45",
            destinoCiudad: destino || "Destino",
            duracion: "7h 15m",
            escala: "1escala",
            precio: 150,
            fecha: fechaText,
            detalles: `${origen} a ${destino} • Con escala nocturna`
        }
    ];
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const origen = params.get('origen') || 'Bangkok';
    const destino = params.get('destino') || 'Ho Chi Minh';
    const fecha = params.get('fecha') || '';

    // Mostrar el resumen de búsqueda en la barra superior (quita el texto de "Cargando...")
    const resumenEl = document.getElementById('resumen-busqueda');
    if (resumenEl) {
        resumenEl.textContent = `${origen} → ${destino} ${fecha ? '| ' + fecha : ''}`;
    }

    // Generar la consulta dinámica basada en los datos reales del usuario
    listaVuelosGenerados = generarVuelosPorConsulta(origen, destino, fecha);
    renderizarVuelos(listaVuelosGenerados);

    // Conectar eventos de los filtros automáticamente
    const inputsFiltros = document.querySelectorAll('.panel-filtros input, .filtro-grupo input');
    inputsFiltros.forEach(input => {
        input.addEventListener('change', filtrarResultados);
        input.addEventListener('input', filtrarResultados);
    });

    // Conectar botón de Reset si existe
    const btnReset = document.querySelector('.panel-filtros button, [onclick*="resetearFiltros"]');
    if (btnReset) {
        btnReset.addEventListener('click', (e) => {
            e.preventDefault();
            resetearFiltros();
        });
    }
});

function renderizarVuelos(lista) {
    const contenedor = document.getElementById('contenedor-vuelos');
    if (!contenedor) return;

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div style="background:#ffffff; padding:50px; border-radius:24px; text-align:center; color:#64748b; font-size:16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                No se encontraron vuelos para los filtros seleccionados. Intenta ajustar el rango de precio o las escalas.
            </div>`;
        return;
    }

    const tasa = window.monedaActual ? window.monedaActual.tasa : 1;
    const simbolo = window.monedaActual ? window.monedaActual.simbolo : '$';

    contenedor.innerHTML = lista.map(v => {
        const precioCalc = Math.round(v.precio * tasa);
        return `
            <article class="tarjeta-vuelo">
                <div class="tramo-vuelo">
                    <div class="aerolinea-badge">${v.aerolinea}</div>
                    
                    <div class="hora-ciudad">
                        <h4>${v.origenCod} ${v.origenHora}</h4>
                        <p class="fecha-txt">${v.fecha}</p>
                        <p class="ciudad-txt">${v.origenCiudad}</p>
                    </div>

                    <div class="trayecto-linea">
                        <span class="duracion">${v.escala === 'directo' ? 'Non Stop' : '1 Stop'}</span>
                        <div class="linea-puntos"></div>
                        <span class="duracion">${v.duracion}</span>
                    </div>

                    <div class="hora-ciudad">
                        <h4>${v.destinoCod} ${v.destinoHora}</h4>
                        <p class="fecha-txt">${v.fecha}</p>
                        <p class="ciudad-txt">${v.destinoCiudad}</p>
                    </div>

                    <div class="precio-seccion">
                        <div class="precio-monto">${simbolo}${precioCalc}</div>
                        <div class="tarifa-sub">Por 1 Pasajero</div>
                    </div>
                </div>

                <div class="vuelo-pie">
                    <span class="detalles-tarifa">${v.detalles}</span>
                    <div style="display:flex; gap:16px; align-items:center;">
                        <span class="tag-reembolso">No reembolsable</span>
                        <button type="button" class="btn-reservar">Reservar Ticket</button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

function filtrarResultados() {
    const escalasSel = Array.from(document.querySelectorAll('input[value="directo"], input[value="1escala"]'))
        .filter(cb => cb.checked).map(cb => cb.value);

    const aerolineasSel = Array.from(document.querySelectorAll('input[value="Vietjet"], input[value="AirAsia"], input[value="HKexpress"], input[value="ANA"]'))
        .filter(cb => cb.checked).map(cb => cb.value);

    const min = parseFloat(document.getElementById('precio-min')?.value) || 0;
    const max = parseFloat(document.getElementById('precio-max')?.value) || Infinity;

    const filtrados = listaVuelosGenerados.filter(vuelo => {
        const pasaEscala = escalasSel.length === 0 || escalasSel.includes(vuelo.escala);
        const pasaAerolinea = aerolineasSel.length === 0 || aerolineasSel.includes(vuelo.aerolinea);
        const pasaPrecio = vuelo.precio >= min && vuelo.precio <= max;
        return pasaEscala && pasaAerolinea && pasaPrecio;
    });

    renderizarVuelos(filtrados);
}

function resetearFiltros() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    if (document.getElementById('precio-min')) document.getElementById('precio-min').value = '';
    if (document.getElementById('precio-max')) document.getElementById('precio-max').value = '';
    renderizarVuelos(listaVuelosGenerados);
}