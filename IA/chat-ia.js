/* ==========================================================
   MÓDULO INDEPENDIENTE DE IA - RUTA TROPICAL (IA/chat-ia.js)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inyectar la estructura HTML en el body para mantener Inicio.html limpio
    const contenedorIa = document.createElement("div");
    contenedorIa.id = "modulo-ia-ruta-tropical";
    contenedorIa.innerHTML = `
        <!-- Pastilla Flotante -->
        <div class="pill-ia-sugerencia" id="btn-abrir-ia-panel">
            <div class="icono-ia-sparkle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
                </svg>
            </div>
            <span class="texto-ia-sugerencia" data-text="Vuelos a Nueva York, NY el próximo fin de semana">Vuelos a Nueva York, NY el próximo fin de semana</span>
        </div>

        <!-- Panel Lateral Izquierdo -->
        <div class="panel-chat-ia" id="panelChatIzquierda">
            <div class="header-chat-ia">
                <button class="dropdown-nuevo-chat" id="btnNuevoChat" title="Reiniciar conversación">
                    <i class="fa-solid fa-plus" style="font-size: 12px;"></i> Nuevo chat
                </button>
                <div class="acciones-header-chat">
                    <button class="btn-header-icono" id="btnExpandirChat" title="Agrandar o reducir panel">
                        <i class="fa-solid fa-expand" id="iconoExpandir"></i>
                    </button>
                    <button class="btn-header-icono" id="btnCerrarChat" title="Cerrar panel">
                        <i class="fa-solid fa-xmark" style="font-size: 18px;"></i>
                    </button>
                </div>
            </div>

            <div class="contenido-chat-ia" id="contenidoChatScroll">
                <div class="saludo-chat-ia" id="bloqueSaludo">
                    <div style="color: var(--grapefruit, #DD4350); font-size: 20px;">✦</div>
                    <h2>¿Cuál es tu próximo destino, jeimycr9?</h2>
                    <p style="font-size: 13px; color: #475569; margin: 0;">
                        Estás en <strong>Montreal</strong>
                    </p>
                </div>

                <div class="sugerencias-chat-ia" id="bloqueSugerencias">
                    <div class="sugerencia-item" data-pregunta="¿Qué viaje me aconsejas tomar este mes?">
                        <i class="fa-solid fa-arrow-turn-down" style="font-size: 11px; transform: rotate(90deg); color: var(--grapefruit, #DD4350);"></i> ¿Qué viaje me aconsejas tomar este mes?
                    </div>
                    <div class="sugerencia-item" data-pregunta="Encuentra destinos económicos desde MVD">
                        <i class="fa-solid fa-arrow-turn-down" style="font-size: 11px; transform: rotate(90deg); color: var(--grapefruit, #DD4350);"></i> Encuentra destinos económicos desde MVD
                    </div>
                    <div class="sugerencia-item" data-pregunta="Arma un itinerario de 4 días en Brasil">
                        <i class="fa-solid fa-arrow-turn-down" style="font-size: 11px; transform: rotate(90deg); color: var(--grapefruit, #DD4350);"></i> Arma un itinerario de 4 días en Brasil
                    </div>
                </div>

                <div class="historial-mensajes-ia" id="historialMensajes"></div>

                <div class="caja-input-chat">
                    <textarea id="inputPreguntaIa" rows="1" placeholder="Pregunta sin problema..."></textarea>
                    <div class="caja-input-acciones">
                        <div style="display: flex; gap: 10px; align-items: center; color: #475569;">
                            <i class="fa-solid fa-plus" style="font-size: 13px; cursor: pointer; background: #f1f5f9; padding: 7px; border-radius: 50%;"></i>
                            <i class="fa-solid fa-microphone" style="font-size: 13px; cursor: pointer;"></i>
                        </div>
                        <button class="btn-enviar-ia" id="btnEnviarMensaje" title="Enviar pregunta">
                            <i class="fa-solid fa-arrow-up" style="font-size: 13px;"></i>
                        </button>
                    </div>
                </div>

                <div style="font-size: 10.5px; color: #94a3b8; text-align: center;">
                    Con tecnología de la IA de RuTa Tropical. Puede cometer errores.
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(contenedorIa);

    // 2. Efecto máquina de escribir en la pastilla flotante
    const textoElemento = document.querySelector(".texto-ia-sugerencia");
    if (textoElemento) {
        const textoCompleto = textoElemento.getAttribute("data-text") || textoElemento.textContent;
        textoElemento.textContent = "";
        setTimeout(() => {
            let i = 0;
            function escribirLetra() {
                if (i < textoCompleto.length) {
                    textoElemento.textContent += textoCompleto.charAt(i);
                    i++;
                    setTimeout(escribirLetra, 38);
                }
            }
            escribirLetra();
        }, 1000);
    }

    // 3. Referencias a los controles
    const pastillaIa = document.getElementById("btn-abrir-ia-panel");
    const panelChat = document.getElementById("panelChatIzquierda");
    const btnCerrarChat = document.getElementById("btnCerrarChat");
    const btnNuevoChat = document.getElementById("btnNuevoChat");
    const btnExpandirChat = document.getElementById("btnExpandirChat");
    const iconoExpandir = document.getElementById("iconoExpandir");
    const inputPregunta = document.getElementById("inputPreguntaIa");
    const btnEnviar = document.getElementById("btnEnviarMensaje");
    const historialMensajes = document.getElementById("historialMensajes");
    const bloqueSugerencias = document.getElementById("bloqueSugerencias");
    const bloqueSaludo = document.getElementById("bloqueSaludo");
    const contenedorScroll = document.getElementById("contenidoChatScroll");

    // Abrir panel
    pastillaIa.addEventListener("click", (e) => {
        e.preventDefault();
        panelChat.classList.add("activo", "abierto");
        inputPregunta.focus();
    });

    // Cerrar panel
    btnCerrarChat.addEventListener("click", (e) => {
        e.preventDefault();
        panelChat.classList.remove("activo", "abierto");
    });

    // Botón Agrandar / Reducir panel
    btnExpandirChat.addEventListener("click", (e) => {
        e.preventDefault();
        panelChat.classList.toggle("expandido");
        if (panelChat.classList.contains("expandido")) {
            iconoExpandir.classList.replace("fa-expand", "fa-compress");
        } else {
            iconoExpandir.classList.replace("fa-compress", "fa-expand");
        }
    });

    // Botón Nuevo Chat (Reinicia el historial y vuelve a mostrar sugerencias)
    btnNuevoChat.addEventListener("click", (e) => {
        e.preventDefault();
        historialMensajes.innerHTML = "";
        bloqueSaludo.style.display = "block";
        bloqueSugerencias.style.display = "flex";
        inputPregunta.value = "";
        inputPregunta.focus();
    });

    // 4. Motor de respuestas inteligente para cualquier consulta
    function generarRespuestaInteligente(preguntaUsuario) {
        const t = preguntaUsuario.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // Saludos
        if (/^(hola|buenas|hey|saludos|que tal|como estas)/.test(t)) {
            return "¡Hola! Qué gusto saludarte. Estoy listo para ayudarte a planificar tu próxima escapada: dime qué presupuesto tienes, qué fechas prefieres o si buscas playa, ciudad o aventura.";
        }

        // Consejos o recomendaciones de viaje
        if (t.includes("aconseja") || t.includes("recomienda") || t.includes("sugiere") || t.includes("donde ir") || t.includes("viaje me")) {
            return "Para esta temporada te recomiendo tres opciones estrella en RuTa Tropical:\n\n• **Río de Janeiro, Brasil** (desde $412): ideal si buscas playas icónicas, miradores y vida vibrante.\n• **Toronto o Vancouver, Canadá** (desde $455): perfecto para naturaleza, gastronomía y ciudad moderna.\n• **Punta Cana o Caribe**: excelente si prefieres descanso todo incluido.\n\n¿Qué estilo de viaje te llama más la atención?";
        }

        // Destinos específicos
        if (t.includes("brasil") || t.includes("rio")) {
            return "🇧🇷 **Brasil** es una gran elección (tarifas desde **$412**). Para 4 días te sugiero: Día 1 en Copacabana e Ipanema; Día 2 subida al Cristo Redentor y Pan de Azúcar; Día 3 barrio Santa Teresa y Escalera Selarón; Día 4 paseo por la Laguna Rodrigo de Freitas. ¿Quieres que busque fechas disponibles?";
        }
        if (t.includes("canada") || t.includes("montreal") || t.includes("vancouver") || t.includes("toronto")) {
            return "🇨🇦 Para **Canadá** tenemos rutas desde **$455**. Si buscas paisajes naturales y mar, Vancouver es ideal; si prefieres arquitectura europea y cafés con encanto, Montreal te va a encantar. ¿Desde qué ciudad saldrías?";
        }
        if (t.includes("nueva york") || t.includes("new york") || t.includes("eeuu") || t.includes("estados unidos")) {
            return "🗽 **Nueva York** tiene excelente conectividad de fin de semana. Te recomiendo reservar vuelos con salida viernes temprano y regreso domingo por la noche, alojándote cerca de Midtown para moverte caminando a Central Park, Times Square y SoHo.";
        }
        if (t.includes("europa") || t.includes("espana") || t.includes("madrid") || t.includes("paris") || t.includes("italia")) {
            return "🇪🇺 Para **Europa**, los meses con mejores tarifas suelen ser noviembre, febrero y marzo. Madrid y Lisboa suelen ser las puertas de entrada más económicas desde América, con conexiones rápidas al resto del continente.";
        }

        // Precios, ofertas y vuelos económicos
        if (t.includes("economico") || t.includes("barato") || t.includes("precio") || t.includes("oferta") || t.includes("presupuesto")) {
            return "💸 **Consejo para ahorrar en tus vuelos:**\n1. Viaja martes o miércoles (ahorras hasta un 22% frente a viernes o domingo).\n2. Activa alertas con 3 a 5 semanas de anticipación.\n3. Ahora mismo nuestras rutas más económicas parten desde **$412** en América.";
        }

        // Itinerarios o planes
        if (t.includes("itinerario") || t.includes("dias") || t.includes("plan") || t.includes("organiza")) {
            return "🗓️ Con gusto te armo un itinerario día por día. Solo dime:\n1. **Destino** que tienes en mente.\n2. **Cantidad de días**.\n3. Si viajas solo, en pareja o en familia.";
        }

        // Hoteles / Alojamiento
        if (t.includes("hotel") || t.includes("hospedaje") || t.includes("alojamiento") || t.includes("donde dormir")) {
            return "🏨 En RuTa Tropical recomendamos elegir alojamientos con cancelación gratuita y cercanos a estaciones principales de transporte. Si me dices la ciudad y tu presupuesto por noche, te sugiero las mejores zonas para hospedarte.";
        }

        // Documentos / Visa / Equipaje
        if (t.includes("visa") || t.includes("pasaporte") || t.includes("equipaje") || t.includes("maleta") || t.includes("requisito")) {
            return "🛂 **Checklist rápido antes de volar:**\n• Pasaporte con al menos **6 meses** de vigencia.\n• Confirmación de alojamiento y boleto de regreso.\n• Para tarifas básicas, recuerda que suele incluir solo artículo personal (mochila de 40x30x20 cm).";
        }

        // Respuesta dinámica contextual para cualquier otra pregunta libre
        return `Sobre **"${preguntaUsuario}"**: en RuTa Tropical podemos ayudarte a cotizar rutas, comparar fechas flexibles y armar recomendaciones a medida para ese plan. Cuéntame desde qué ciudad sales o en qué mes te gustaría viajar para darte opciones exactas.`;
    }

    // 5. Envío de mensajes
    const enviarMensaje = (texto) => {
        if (!texto || texto.trim() === "") return;

        bloqueSugerencias.style.display = "none";

        const msgUsuario = document.createElement("div");
        msgUsuario.className = "mensaje-chat usuario";
        msgUsuario.textContent = texto.trim();
        historialMensajes.appendChild(msgUsuario);

        inputPregunta.value = "";
        contenedorScroll.scrollTop = contenedorScroll.scrollHeight;

        // Indicador temporal de respuesta
        const msgEscribiendo = document.createElement("div");
        msgEscribiendo.className = "mensaje-chat ia";
        msgEscribiendo.style.opacity = "0.7";
        msgEscribiendo.textContent = "Pensando tu mejor ruta...";
        historialMensajes.appendChild(msgEscribiendo);
        contenedorScroll.scrollTop = contenedorScroll.scrollHeight;

        setTimeout(() => {
            const respuesta = generarRespuestaInteligente(texto);
            msgEscribiendo.style.opacity = "1";
            // Formato limpio para saltos de línea y negritas
            msgEscribiendo.innerHTML = respuesta
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\n/g, "<br>");
            contenedorScroll.scrollTop = contenedorScroll.scrollHeight;
        }, 450);
    };

    btnEnviar.addEventListener("click", () => enviarMensaje(inputPregunta.value));

    inputPregunta.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            enviarMensaje(inputPregunta.value);
        }
    });

    document.querySelectorAll(".sugerencia-item").forEach(item => {
        item.addEventListener("click", () => {
            enviarMensaje(item.getAttribute("data-pregunta"));
        });
    });
});