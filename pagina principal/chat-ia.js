/* ==========================================================
   ASISTENTE IA DEFINITIVO - RUTA TROPICAL (chat-ia.js)
   ========================================================== */

(function () {
    document.addEventListener("DOMContentLoaded", () => {
        if (document.getElementById("modulo-ia-ruta-tropical")) return;

        // Cargar FontAwesome para iconos secundarios si no está presente
        if (!document.getElementById("fa-cdn-inject")) {
            const fa = document.createElement("link");
            fa.id = "fa-cdn-inject";
            fa.rel = "stylesheet";
            fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
            document.head.appendChild(fa);
        }

        const contenedorIa = document.createElement("div");
        contenedorIa.id = "modulo-ia-ruta-tropical";
        contenedorIa.innerHTML = `
            <div class="pill-ia-sugerencia" id="btn-abrir-ia-panel">
                <div class="icono-ia-sparkle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z"/>
                    </svg>
                </div>
                <span class="texto-ia-sugerencia" data-text="Vuelos a Nueva York, NY el próximo fin de semana"></span>
            </div>

            <div class="panel-chat-ia" id="panelChatIzquierda">
                <div class="topbar-expandida">
                    <div class="marca-ruta-ia" id="logoIrInicioExpandido" title="Volver a la página principal">
             
                        <span class="texto-logo-principal">Ruta Tropical</span>
                    </div>
                    <div class="acciones-header-chat">
                        <button class="btn-header-icono" id="btnContraerChat" title="Volver a vista lateral">
                            <i class="fa-solid fa-compress"></i>
                        </button>
                        <button class="btn-header-icono" id="btnCerrarChatExpandido" title="Cerrar asistente">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>

                <div class="header-chat-ia">
                    <div class="contenedor-menu-chats">
                        <button class="dropdown-nuevo-chat" id="btnMenuChats">
                            <span id="tituloChatActual">Nuevo chat</span>
                            <i class="fa-solid fa-chevron-down" style="font-size: 11px;"></i>
                        </button>

                        <div class="menu-desplegable-chats" id="menuDesplegableChats" style="display:none; position:absolute; background:#fff; border:1px solid #cbd5e1; border-radius:12px; padding:10px; box-shadow:0 10px 25px rgba(0,0,0,0.1); z-index:9999;">
                            <button class="btn-accion-nuevo-chat" id="btnCrearNuevoChat" style="background:none; border:none; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px; padding:8px;">
                                <i class="fa-solid fa-pen-to-square"></i> Nuevo chat
                            </button>
                            <div class="titulo-seccion-recientes" style="font-size:11px; color:#94a3b8; margin:8px 0 4px;">7 días anteriores</div>
                            <div class="lista-chats-recientes" id="listaChatsRecientesCompacta"></div>
                        </div>
                    </div>

                    <div class="acciones-header-chat">
                        <button class="btn-header-icono" id="btnExpandirChat" title="Expandir a pantalla completa">
                            <i class="fa-solid fa-expand"></i>
                        </button>
                        <button class="btn-header-icono" id="btnCerrarChat" title="Cerrar panel">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>

                <div class="cuerpo-principal-ia">
                    <aside class="sidebar-historial-expandido">
                        <button class="dropdown-nuevo-chat" id="btnNuevoChatSidebar" style="width:100%; justify-content:center;">
                            <i class="fa-solid fa-pen-to-square"></i> Nuevo chat
                        </button>
                        <div class="titulo-seccion-recientes" style="font-size:11.5px; color:#94a3b8; font-weight:700; margin-top:10px;">7 días anteriores</div>
                        <div class="lista-chats-recientes" id="listaChatsRecientesSidebar"></div>
                    </aside>

                    <div class="contenido-chat-ia" id="contenidoChatScroll">
                        <div class="contenedor-centrado-ia">
                            <div class="saludo-chat-ia" id="bloqueSaludo">
                                <div style="color: #DD4350; font-size: 24px; margin-bottom: 4px;">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z"/>
                                    </svg>
                                </div>
                                <h2>¿Cuál es tu próximo destino, jeimycr9?</h2>
                                <p style="font-size: 15px; color: #475569; margin: 0;">
                                    Estás en <strong>Montreal</strong>
                                </p>
                            </div>

                            <div class="sugerencias-chat-ia" id="bloqueSugerencias">
                                <div class="sugerencia-item" data-pregunta="Busca vuelos desde MVD para diciembre">
                                    <i class="fa-solid fa-plane" style="color: #DD4350;"></i> Busca vuelos desde MVD para diciembre
                                </div>
                                <div class="sugerencia-item" data-pregunta="Encuentra destinos económicos desde MVD">
                                    <i class="fa-solid fa-compass" style="color: #17A1CF;"></i> Encuentra destinos económicos desde MVD
                                </div>
                                <div class="sugerencia-item" data-pregunta="Recomiéndame un destino">
                                    <i class="fa-solid fa-map-location-dot" style="color: #DD4350;"></i> Recomiéndame un destino
                                </div>
                            </div>

                            <div class="historial-mensajes-ia" id="historialMensajes"></div>

                            <div class="caja-input-chat">
                                <textarea id="inputPreguntaIa" rows="1" placeholder="Pregunta más detalles..."></textarea>
                                
                                <div class="caja-input-acciones">
                                    <div style="display: flex; gap: 8px; align-items: center; position: relative;">
                                        <div class="contenedor-adjunto-ia">
                                            <button class="btn-input-secundario" id="btnToggleAdjunto" title="Adjuntar foto o archivo">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>

                                            <div class="menu-adjuntos-flotante" id="menuAdjuntosFlotante">
                                                <div class="badge-consejo-ia">
                                                    <i class="fa-solid fa-lightbulb"></i> Consejo de viaje
                                                </div>
                                                <div style="font-size: 14px; font-weight: 700; color: #0f172a;">¿Qué deseas hacer?</div>
                                                
                                                <div class="caja-consejo-visual">
                                                    <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=150" alt="Destino">
                                                    <div>
                                                        <h4>Paisaje o punto de interés</h4>
                                                        <p>Sube una foto de un destino para cotizar rutas.</p>
                                                    </div>
                                                </div>

                                                <div class="opciones-extras-grid">
                                                    <button class="btn-opcion-grid" id="menuOptVuelos">
                                                        <i class="fa-solid fa-plane" style="color: #DD4350;"></i> Cotizar vuelos
                                                    </button>
                                                    <button class="btn-opcion-grid" id="menuOptHotel">
                                                        <i class="fa-solid fa-hotel" style="color: #17A1CF;"></i> Buscar hotel
                                                    </button>
                                                </div>

                                                <div class="divisor-menu-ia"></div>

                                                <button class="btn-cargar-archivo-opcion" id="btnDisparadorArchivo">
                                                    <i class="fa-solid fa-paperclip" style="color: #0284c7;"></i> Cargar fotos o archivos
                                                </button>
                                                <input type="file" id="inputArchivoOculto" accept="image/*,.pdf,.doc,.docx" style="display: none;">
                                            </div>
                                        </div>

                                        <button class="btn-input-secundario" id="btnMicrófono" title="Dictar por voz">
                                            <i class="fa-solid fa-microphone"></i>
                                        </button>
                                    </div>

                                    <button class="btn-enviar-ia" id="btnEnviarMensaje" title="Enviar pregunta">
                                        <i class="fa-solid fa-arrow-up" style="font-size: 14px;"></i>
                                    </button>
                                </div>
                            </div>

                            <div style="font-size: 11.5px; color: #94a3b8; text-align: center; padding-bottom: 6px;">
                                Con tecnología de la IA de RuTa Tropical. La IA puede cometer errores.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- MODAL DE DICTADO LIBRE POR VOZ -->
            <div id="modalDictadoVoz" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(15,23,42,0.6); z-index:999999999; justify-content:center; align-items:center;">
                <div style="background:#ffffff; width:90%; max-width:400px; border-radius:24px; padding:28px; box-shadow:0 25px 50px rgba(0,0,0,0.25); text-align:center; display:flex; flex-direction:column; gap:16px;">
                    <div style="width:60px; height:60px; margin:0 auto; border-radius:50%; background:linear-gradient(135deg, #DD4350, #17A1CF); color:#fff; display:grid; place-items:center; font-size:24px;">
                        <i class="fa-solid fa-microphone"></i>
                    </div>
                    <h3 style="margin:0; font-size:20px; color:#0f172a; font-weight:800;">Escuchando tu voz...</h3>
                    <p id="textoTranscripcionEnVivo" style="margin:0; font-size:14.5px; color:#475569; min-height:40px; font-style:italic;">Di lo que quieras buscar o preguntar...</p>
                    
                    <button id="cerrarModalDictado" style="background:#DD4350; color:#fff; border:none; padding:12px; border-radius:14px; font-weight:700; cursor:pointer;">
                        Detener y escribir
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(contenedorIa);

        const volverAInicio = () => {
            panelChat.classList.remove("activo", "expandido");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const logoIrInicioExpandido = document.getElementById("logoIrInicioExpandido");
        if (logoIrInicioExpandido) {
            logoIrInicioExpandido.addEventListener("click", volverAInicio);
        }

        document.querySelectorAll(".ruta-tropical-logo, header h1, .navbar-brand").forEach(logo => {
            logo.style.cursor = "pointer";
            logo.addEventListener("click", () => {
                panelChat.classList.remove("activo", "expandido");
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        const textoElemento = document.querySelector(".texto-ia-sugerencia");
        if (textoElemento) {
            const textoCompleto = textoElemento.getAttribute("data-text") || "Vuelos a Nueva York, NY el próximo fin de semana";
            textoElemento.textContent = "";
            
            setTimeout(() => {
                let i = 0;
                const velocidad = 35;
                
                function escribirLetra() {
                    if (i < textoCompleto.length) {
                        textoElemento.textContent += textoCompleto.charAt(i);
                        i++;
                        setTimeout(escribirLetra, velocidad);
                    } else {
                        textoElemento.classList.add("terminado");
                    }
                }
                escribirLetra();
            }, 1000);
        }

        const panelChat = document.getElementById("panelChatIzquierda");
        const btnCerrarChat = document.getElementById("btnCerrarChat");
        const btnCerrarChatExpandido = document.getElementById("btnCerrarChatExpandido");
        const btnExpandirChat = document.getElementById("btnExpandirChat");
        const btnContraerChat = document.getElementById("btnContraerChat");
        const btnMenuChats = document.getElementById("btnMenuChats");
        const menuDesplegableChats = document.getElementById("menuDesplegableChats");
        const btnCrearNuevoChat = document.getElementById("btnCrearNuevoChat");
        const btnNuevoChatSidebar = document.getElementById("btnNuevoChatSidebar");
        const listaCompacta = document.getElementById("listaChatsRecientesCompacta");
        const listaSidebar = document.getElementById("listaChatsRecientesSidebar");
        const tituloChatActual = document.getElementById("tituloChatActual");
        const inputPregunta = document.getElementById("inputPreguntaIa");
        const btnEnviar = document.getElementById("btnEnviarMensaje");
        const historialMensajes = document.getElementById("historialMensajes");
        const bloqueSugerencias = document.getElementById("bloqueSugerencias");
        const bloqueSaludo = document.getElementById("bloqueSaludo");
        const contenedorScroll = document.getElementById("contenidoChatScroll");

        const btnToggleAdjunto = document.getElementById("btnToggleAdjunto");
        const menuAdjuntosFlotante = document.getElementById("menuAdjuntosFlotante");
        const btnDisparadorArchivo = document.getElementById("btnDisparadorArchivo");
        const inputArchivoOculto = document.getElementById("inputArchivoOculto");
        const btnMicrófono = document.getElementById("btnMicrófono");
        const modalDictadoVoz = document.getElementById("modalDictadoVoz");
        const cerrarModalDictado = document.getElementById("cerrarModalDictado");
        const textoTranscripcionEnVivo = document.getElementById("textoTranscripcionEnVivo");
        const menuOptVuelos = document.getElementById("menuOptVuelos");
        const menuOptHotel = document.getElementById("menuOptHotel");

        panelChat.classList.remove("activo", "expandido");

        let reconocimientoVoz = null;
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (SpeechRecognition) {
            reconocimientoVoz = new SpeechRecognition();
            reconocimientoVoz.lang = 'es-ES';
            reconocimientoVoz.interimResults = true;
            reconocimientoVoz.maxAlternatives = 1;

            reconocimientoVoz.onresult = (evento) => {
                let transcripcion = "";
                for (let i = evento.resultIndex; i < evento.results.length; i++) {
                    transcripcion += evento.results[i][0].transcript;
                }
                if (textoTranscripcionEnVivo) {
                    textoTranscripcionEnVivo.textContent = `"${transcripcion}"`;
                }
                if (inputPregunta) {
                    inputPregunta.value = transcripcion;
                }
            };

            reconocimientoVoz.onerror = () => {
                if (textoTranscripcionEnVivo) {
                    textoTranscripcionEnVivo.textContent = "No se detectó voz. Intenta de nuevo o escribe tu pregunta.";
                }
            };

            reconocimientoVoz.onend = () => {
                if (modalDictadoVoz) modalDictadoVoz.style.display = "none";
            };
        }

        if (btnMicrófono) {
            btnMicrófono.addEventListener("click", () => {
                if (reconocimientoVoz) {
                    try {
                        if (modalDictadoVoz) modalDictadoVoz.style.display = "flex";
                        if (textoTranscripcionEnVivo) textoTranscripcionEnVivo.textContent = "Habla ahora... escuchando por el micrófono...";
                        reconocimientoVoz.start();
                    } catch (e) {
                        reconocimientoVoz.stop();
                    }
                } else {
                    alert("Tu navegador actual no soporta reconocimiento de voz directo. Puedes escribir tu consulta libremente en la caja de texto.");
                }
            });
        }

        if (cerrarModalDictado) {
            cerrarModalDictado.addEventListener("click", () => {
                if (reconocimientoVoz) reconocimientoVoz.stop();
                if (modalDictadoVoz) modalDictadoVoz.style.display = "none";
                if (inputPregunta) inputPregunta.focus();
            });
        }

        btnToggleAdjunto.addEventListener("click", (e) => {
            e.stopPropagation();
            menuAdjuntosFlotante.classList.toggle("visible");
            if (menuDesplegableChats) menuDesplegableChats.style.display = "none";
        });

        document.addEventListener("click", (e) => {
            if (!e.target.closest(".contenedor-adjunto-ia")) {
                menuAdjuntosFlotante.classList.remove("visible");
            }
            if (!e.target.closest(".contenedor-menu-chats")) {
                menuDesplegableChats.style.display = "none";
            }
        });

        btnDisparadorArchivo.addEventListener("click", () => inputArchivoOculto.click());
        inputArchivoOculto.addEventListener("change", (e) => {
            const archivo = e.target.files[0];
            if (archivo) {
                menuAdjuntosFlotante.classList.remove("visible");
                enviarMensaje(`Archivo adjunto: ${archivo.name}. Analiza esta información para mi viaje.`);
            }
        });

        menuOptVuelos.addEventListener("click", () => {
            menuAdjuntosFlotante.classList.remove("visible");
            inputPregunta.value = "Busca vuelos económicos disponibles para diciembre";
            inputPregunta.focus();
        });

        menuOptHotel.addEventListener("click", () => {
            menuAdjuntosFlotante.classList.remove("visible");
            inputPregunta.value = "Recomiéndame hoteles con cancelación gratuita";
            inputPregunta.focus();
        });

        const STORAGE_KEY = "ruta_tropical_chats_v31";
        let sesiones = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        let sesionActivaId = null;

        function guardarSesiones() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(sesiones));
            renderizarListas();
        }

        function renderizarListas() {
            [listaCompacta, listaSidebar].forEach(cont => {
                if (!cont) return;
                cont.innerHTML = "";
                if (sesiones.length === 0) {
                    cont.innerHTML = `<div style="font-size: 13px; color: #94a3b8; padding: 6px;">Sin chats recientes.</div>`;
                    return;
                }
                sesiones.forEach(s => {
                    const item = document.createElement("div");
                    item.className = `item-chat-reciente ${s.id === sesionActivaId ? "activo" : ""}`;
                    item.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:8px 12px; border-radius:10px; cursor:pointer; font-size:13.5px; font-weight:600; color:#334155; margin-bottom:4px;";
                    item.innerHTML = `<span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:180px;">${s.titulo}</span><button class="btn-borrar-chat-item" style="background:none; border:none; color:#94a3b8; cursor:pointer;"><i class="fa-solid fa-trash-can"></i></button>`;
                    item.addEventListener("click", (ev) => {
                        if (ev.target.closest(".btn-borrar-chat-item")) return;
                        cargarSesion(s.id);
                        menuDesplegableChats.style.display = "none";
                    });
                    item.querySelector(".btn-borrar-chat-item").addEventListener("click", (ev) => {
                        ev.stopPropagation();
                        sesiones = sesiones.filter(x => x.id !== s.id);
                        guardarSesiones();
                        if (sesionActivaId === s.id) iniciarChatEnBlanco();
                    });
                    cont.appendChild(item);
                });
            });
        }

        function iniciarChatEnBlanco() {
            sesionActivaId = null;
            if (tituloChatActual) tituloChatActual.textContent = "Nuevo chat";
            historialMensajes.innerHTML = "";
            bloqueSaludo.style.display = "block";
            bloqueSugerencias.style.display = "flex";
            renderizarListas();
            if (inputPregunta) { inputPregunta.value = ""; inputPregunta.focus(); }
        }

        function cargarSesion(id) {
            const sesion = sesiones.find(s => s.id === id);
            if (!sesion) return;
            sesionActivaId = sesion.id;
            if (tituloChatActual) tituloChatActual.textContent = sesion.titulo.slice(0, 18);
            bloqueSaludo.style.display = "none";
            bloqueSugerencias.style.display = "none";
            historialMensajes.innerHTML = "";
            sesion.mensajes.forEach(m => {
                if (m.rol === "usuario") {
                    renderizarBurbujaUsuarioDirecto(m.texto);
                } else {
                    renderizarBloqueRespuestaIaDirecto(m.texto, m.seguimientos || []);
                }
            });
            renderizarListas();
            contenedorScroll.scrollTop = contenedorScroll.scrollHeight;
        }

        function registrarMensajeEnSesion(rol, texto, seguimientos = []) {
            if (!sesionActivaId) {
                const nueva = { id: "chat_" + Date.now(), titulo: texto.slice(0, 28), mensajes: [] };
                sesiones.unshift(nueva);
                sesionActivaId = nueva.id;
                if (tituloChatActual) tituloChatActual.textContent = nueva.titulo.slice(0, 18);
            }
            const sesion = sesiones.find(s => s.id === sesionActivaId);
            if (sesion) {
                sesion.mensajes.push({ rol, texto, seguimientos });
                guardarSesiones();
            }
        }

        renderizarListas();

        document.getElementById("btn-abrir-ia-panel").addEventListener("click", (e) => {
            e.preventDefault();
            panelChat.classList.add("activo");
            if (inputPregunta) inputPregunta.focus();
        });

        [btnCerrarChat, btnCerrarChatExpandido].forEach(btn => {
            if (btn) btn.addEventListener("click", () => {
                panelChat.classList.remove("activo", "expandido");
                menuDesplegableChats.style.display = "none";
            });
        });

        btnExpandirChat.addEventListener("click", () => { panelChat.classList.add("expandido"); menuDesplegableChats.style.display = "none"; });
        btnContraerChat.addEventListener("click", () => panelChat.classList.remove("expandido"));

        if (btnMenuChats && menuDesplegableChats) {
            btnMenuChats.addEventListener("click", (e) => {
                e.stopPropagation();
                menuDesplegableChats.style.display = menuDesplegableChats.style.display === "block" ? "none" : "block";
            });
        }

        [btnCrearNuevoChat, btnNuevoChatSidebar].forEach(btn => {
            if (btn) btn.addEventListener("click", () => {
                iniciarChatEnBlanco();
                menuDesplegableChats.style.display = "none";
            });
        });

        function generarRespuestaInteligente(preguntaRaw) {
            const t = (preguntaRaw || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

            let contextoPrevio = "";
            if (sesionActivaId) {
                const sesion = sesiones.find(s => s.id === sesionActivaId);
                if (sesion && sesion.mensajes.length > 0) {
                    contextoPrevio = sesion.mensajes.slice(-4).map(m => m.texto.toLowerCase()).join(" ");
                }
            }

            const esAfirmativo = t === "si" || t === "sí" || t === "ok" || t === "claro" || t === "dale" || t === "por favor" || t === "me interesa";

            if (esAfirmativo) {
                if (contextoPrevio.includes("vuel") || contextoPrevio.includes("pasaj") || contextoPrevio.includes("diciembre")) {
                    return {
                        texto: "✈️ ¡Excelente! Para avanzar con los vuelos desde Montevideo (MVD), te confirmo que las aerolíneas con mejores tarifas para diciembre son LATAM y Aerolíneas Argentinas.\n\n¿Para qué fechas exactas deseas que verifique los asientos?",
                        seguimientos: ["Ver fechas del 10 al 20 de diciembre", "Ver tarifas para fin de año"]
                    };
                }
            }

            if (t.includes("estadi") || t.includes("hotel") || t.includes("hosped") || t.includes("aloj")) {
                return {
                    texto: "🏨 Opciones de estadía recomendadas:\n\n• Hoteles céntricos 4 estrellas: desde $75 USD por noche.\n• Resorts all inclusive: desde $180 USD por noche con todo incluido.\n\n¿En qué ciudad te gustaría cotizar la estadía?",
                    seguimientos: ["Ver hoteles en Buenos Aires", "Ver resorts en Punta Cana"]
                };
            }

            if (t.includes("vuel") || t.includes("pasaj") || t.includes("avion") || t.includes("diciembr")) {
                return {
                    texto: "✈️ Opciones de vuelos recomendados desde Montevideo (MVD):\n\n• Buenos Aires: desde $165 USD (vuelos directos).\n• Río de Janeiro: desde $340 USD (playas y vuelos sin escalas).\n\n¿Te gustaría que verifiquemos fechas específicas?",
                    seguimientos: ["Ver paquetes a Río de Janeiro", "Buscar hoteles económicos"]
                };
            }

            return {
                texto: `Entendido sobre "${preguntaRaw}". Como asistente de RuTa Tropical, he analizado tu consulta y te sugiero planificar los traslados y excursiones con anticipación para asegurar disponibilidad.\n\n¿Deseas que busquemos opciones detalladas o prefieres cotizar otro destino?`,
                seguimientos: ["Encuentra destinos económicos desde MVD", "Busca vuelos desde MVD para diciembre", "Recomiéndame un destino"]
            };
        }

        function renderizarBurbujaUsuarioDirecto(texto) {
            const msg = document.createElement("div");
            msg.className = "mensaje-chat usuario";
            msg.textContent = texto;
            historialMensajes.appendChild(msg);
        }

        function renderizarBloqueRespuestaIaDirecto(textoCompleto, seguimientos = []) {
            const bloque = document.createElement("div");
            bloque.className = "bloque-respuesta-ia";

            const estado = document.createElement("div");
            estado.className = "estado-listo-ia";
            estado.innerHTML = `<i class="fa-regular fa-circle-check"></i> Listo. Es tu turno.`;
            bloque.appendChild(estado);

            const cuerpoTexto = document.createElement("div");
            cuerpoTexto.className = "mensaje-chat ia";
            cuerpoTexto.textContent = textoCompleto;
            bloque.appendChild(cuerpoTexto);

            if (seguimientos && seguimientos.length > 0) {
                const seg = document.createElement("div");
                seg.className = "seguimiento-sugerencias";
                seg.innerHTML = seguimientos.map(s => `
                    <button class="btn-seguimiento-item" data-texto="${s.replace(/"/g, "&quot;")}">
                        <i class="fa-solid fa-arrow-turn-down" style="transform: rotate(90deg); font-size: 11px;"></i>
                        <span>${s}</span>
                    </button>
                `).join("");
                seg.querySelectorAll(".btn-seguimiento-item").forEach(b => {
                    b.addEventListener("click", () => enviarMensaje(b.getAttribute("data-texto")));
                });
                bloque.appendChild(seg);
            }

            historialMensajes.appendChild(bloque);
        }

        const enviarMensaje = (texto) => {
            if (!texto || !texto.trim()) return;
            const limpio = texto.trim();
            if (bloqueSugerencias) bloqueSugerencias.style.display = "none";
            if (bloqueSaludo) bloqueSaludo.style.display = "none";

            renderizarBurbujaUsuarioDirecto(limpio);
            registrarMensajeEnSesion("usuario", limpio);
            if (inputPregunta) inputPregunta.value = "";
            contenedorScroll.scrollTop = contenedorScroll.scrollHeight;

            const ind = document.createElement("div");
            ind.className = "estado-listo-ia";
            ind.textContent = "Analizando consulta...";
            historialMensajes.appendChild(ind);
            contenedorScroll.scrollTop = contenedorScroll.scrollHeight;

            setTimeout(() => {
                ind.remove();
                const res = generarRespuestaInteligente(limpio);
                renderizarBloqueRespuestaIaDirecto(res.texto, res.seguimientos);
                registrarMensajeEnSesion("ia", res.texto, res.seguimientos);
                contenedorScroll.scrollTop = contenedorScroll.scrollHeight;
            }, 250);
        };

        btnEnviar.addEventListener("click", () => enviarMensaje(inputPregunta.value));
        inputPregunta.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); enviarMensaje(inputPregunta.value); }
        });
        document.querySelectorAll(".sugerencia-item").forEach(item => {
            item.addEventListener("click", () => enviarMensaje(item.getAttribute("data-pregunta")));
        });
    });

    // ==========================================================
        // CONECTAR BOTONES "USA LA IA" Y "DESCRIBIR" CON SÍMBOLO DE 4 PUNTAS
        // ==========================================================
        const SVG_SPARKLE_4_PUNTAS = `
            <svg class="rt-sparkle-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 1.5C12.7 8.4 15.6 11.3 22.5 12C15.6 12.7 12.7 15.6 12 22.5C11.3 15.6 8.4 12.7 1.5 12C8.4 11.3 11.3 8.4 12 1.5Z"/>
            </svg>
        `;

     function abrirPanelDesdeMapa(modo) {
  const panelActual = document.getElementById("panelChatIzquierda");
  const inputActual = document.getElementById("inputPreguntaIa");
  if (!panelActual) return;

  panelActual.classList.add("activo");
  if (inputActual) {
    if (modo === "describir" && !inputActual.value.trim()) {
      inputActual.placeholder = "Describe el destino o tipo de viaje que buscas...";
    } else {
      inputActual.placeholder = "Pregunta más detalles...";
    }
    setTimeout(() => inputActual.focus(), 150);
  }
}

        function vincularBotonesMapaIa() {
            const elementos = document.querySelectorAll("button, a, [role='button'], div, span");

            elementos.forEach((el) => {
                if (el.closest("#modulo-ia-ruta-tropical")) return;
                if (el.dataset.rtIaVinculado === "true") return;

                // Solo tomar elementos finales o botones cortos para no agarrar contenedores grandes
                if (el.children.length > 3) return;

                const texto = (el.textContent || "").trim().toLowerCase();
                const esUsaLaIa = texto === "usa la ia" || texto.startsWith("usa la ia");
                const esDescribir = texto === "describir" || texto.startsWith("describir");

                if (!esUsaLaIa && !esDescribir) return;

                const objetivoClick = el.closest("button, a, [role='button']") || el;
                if (objetivoClick.dataset.rtIaVinculado === "true") return;

                objetivoClick.dataset.rtIaVinculado = "true";
                objetivoClick.classList.add("rt-btn-ia-conectado");

                const iconoExistente = objetivoClick.querySelector("i, svg");
                if (iconoExistente) {
                    iconoExistente.outerHTML = SVG_SPARKLE_4_PUNTAS;
                } else {
                    objetivoClick.insertAdjacentHTML("afterbegin", SVG_SPARKLE_4_PUNTAS);
                }

                objetivoClick.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    abrirPanelDesdeMapa(esDescribir ? "describir" : "chat");
                });
            });
        }

        vincularBotonesMapaIa();

        const observadorMapa = new MutationObserver(() => {
            vincularBotonesMapaIa();
        });
        observadorMapa.observe(document.body, { childList: true, subtree: true });
})();



// Conectar enlace "planifica con IA" del footer
document.addEventListener("click", (e) => {
  const enlace = e.target.closest("a, button, li, span");
  if (!enlace) return;

  const texto = (enlace.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
  if (texto === "planifica con ia" || texto.endsWith("planifica con ia")) {
    e.preventDefault();
    const panel = document.getElementById("panelChatIzquierda");
    const input = document.getElementById("inputPreguntaIa");
    if (panel) {
      panel.classList.add("activo");
      // Si estás en la página de Explora, ábrelo en pantalla completa
      if (window.location.pathname.toLowerCase().includes("explorar")) {
        panel.classList.add("expandido");
      }
    }
    if (input) {
      setTimeout(() => input.focus(), 160);
    }
  }
});