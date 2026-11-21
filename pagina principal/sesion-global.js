/* =========================================================
   SESIÓN GLOBAL: ACCESO PÚBLICO LIBRE + CIERRE SINCRONIZADO
   ========================================================= */
(function () {
    const KEY_ESTADO = "rt_sesion_estado_v2"; // "activa" | "cerrada"
    const KEY_CUENTA_ACTIVA = "rt_cuenta_actual_v1";
    const CLAVES_SESION_A_LIMPIAR = [
        "rt_cuenta_actual_v1",
        "rt_usuario_activo_v1",
        "usuarioActual",
        "usuarioActivo",
        "cuentaActual",
        "rt_foto_perfil",
        "rt_foto_perfil_actual",
        "fotoPerfil",
        "foto_perfil",
        "avatarUsuario",
        "avatar_url",
        "userAvatar"
    ];

    const RUTA_LOGIN_DEFAULT = "login.html";

    function obtenerEstadoSesion() {
        try {
            const estado = localStorage.getItem(KEY_ESTADO);
            if (estado === "cerrada" || estado === "activa") return estado;
            const leg = localStorage.getItem("rt_sesion_iniciada_v1");
            if (leg === "false") return "cerrada";
            if (leg === "true" || localStorage.getItem(KEY_CUENTA_ACTIVA)) return "activa";
        } catch (_) {}
        // Por defecto, si no hay sesión iniciada, tratamos como "cerrada" (visitante libre)
        return "cerrada";
    }

    function estaCerrada() {
        return obtenerEstadoSesion() === "cerrada";
    }

    function limpiarDOMDeSesion() {
        const imgBtn = document.getElementById("rtPerfilFotoBtn");
        const spanBtn = document.getElementById("rtPerfilInicialBtn");
        const listaCuentas = document.getElementById("rtPerfilCuentasLista");
        const menu = document.getElementById("rtPerfilMenu");
        const btn = document.getElementById("rtPerfilBtn");

        if (imgBtn) {
            imgBtn.removeAttribute("src");
            imgBtn.classList.remove("activa");
        }
        if (spanBtn) {
            spanBtn.textContent = "J";
        }
        if (listaCuentas) {
            listaCuentas.innerHTML = `
                <div class="rt-perfil-cuenta-item" style="cursor:default;">
                    <span class="rt-perfil-cuenta-avatar">?</span>
                    <span class="rt-perfil-cuenta-info">
                        <strong>Visitante</strong>
                        <span>No has iniciado sesión</span>
                    </span>
                </div>
                <a href="${RUTA_LOGIN_DEFAULT}" class="rt-perfil-enlace" style="font-weight:700; color:#17a1cf;">
                    Iniciar sesión / Registrarse
                </a>
            `;
        }
        if (menu) {
            menu.classList.remove("abierto");
            menu.setAttribute("aria-hidden", "true");
        }
        if (btn) {
            btn.setAttribute("aria-expanded", "false");
            btn.setAttribute("title", "Iniciar sesión o ver perfil");
        }
    }

    function aplicarEstadoEnPagina() {
        if (!estaCerrada()) return;

        limpiarDOMDeSesion();

        // Solo redirige si la página está marcada explícitamente como privada (data-requiere-sesion="true")
        const requiereSesion = document.body && document.body.dataset.requiereSesion === "true";
        const destinoGuardia = (document.body && document.body.dataset.rutaLogin) || RUTA_LOGIN_DEFAULT;

        if (requiereSesion && destinoGuardia) {
            const rutaActual = window.location.pathname.split("/").pop() || "";
            const destinoLimpio = destinoGuardia.split("/").pop();
            if (rutaActual !== destinoLimpio) {
                window.location.replace(destinoGuardia);
            }
        }
    }

    function marcarSesionActiva(correoOData) {
        try {
            localStorage.setItem(KEY_ESTADO, "activa");
            localStorage.setItem("rt_sesion_iniciada_v1", "true");
            if (typeof correoOData === "string" && correoOData.trim()) {
                localStorage.setItem(KEY_CUENTA_ACTIVA, correoOData.trim());
                localStorage.setItem("rt_usuario_activo_v1", correoOData.trim());
            } else if (correoOData && typeof correoOData === "object") {
                const correo = correoOData.correo || correoOData.email || "";
                if (correo) {
                    localStorage.setItem(KEY_CUENTA_ACTIVA, correo);
                    localStorage.setItem("rt_usuario_activo_v1", correo);
                }
                localStorage.setItem("usuarioActual", JSON.stringify(correoOData));
            }
        } catch (_) {}
    }

    function cerrarSesionGlobal(redirigirA) {
        try {
            localStorage.setItem(KEY_ESTADO, "cerrada");
            localStorage.setItem("rt_sesion_iniciada_v1", "false");
            for (const clave of CLAVES_SESION_A_LIMPIAR) {
                localStorage.removeItem(clave);
            }
        } catch (_) {}

        limpiarDOMDeSesion();

        // Redirige solo si se indica explícitamente; si no, permanece en la página actual en modo visitante
        if (redirigirA) {
            window.location.replace(redirigirA);
        }
    }

    window.RTSesion = {
        estaCerrada,
        obtenerEstadoSesion,
        marcarSesionActiva,
        cerrarSesionGlobal,
        aplicarEstadoEnPagina
    };

    document.addEventListener("click", function (e) {
        const btnSalir = e.target.closest("#rtPerfilSalirBtn, [data-cerrar-sesion]");
        if (!btnSalir) return;

        e.preventDefault();
        e.stopPropagation();

        // Por defecto cierra sesión y te deja en la página actual (o ve a data-redirigir si lo pones)
        const destino = btnSalir.getAttribute("data-redirigir") || "";
        cerrarSesionGlobal(destino);
    });

    window.addEventListener("storage", function (e) {
        if (!e || e.key === KEY_ESTADO || e.key === "rt_sesion_iniciada_v1" || e.key === KEY_CUENTA_ACTIVA || e.key === null) {
            aplicarEstadoEnPagina();
        }
    });

    window.addEventListener("pageshow", function () {
        aplicarEstadoEnPagina();
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", aplicarEstadoEnPagina);
    } else {
        aplicarEstadoEnPagina();
    }
})();