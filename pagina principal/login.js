(function () {
  const DB_KEY = "rt_usuarios_db";
  const SESSION_KEY = "rt_usuario_activo";
  const INICIO_URL = "Inicio.html";

  const ICONO_OJO_ABIERTO = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `;

  const ICONO_OJO_CERRADO = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
  `;

  function obtenerUsuarios() {
    try {
      return JSON.parse(localStorage.getItem(DB_KEY)) || [];
    } catch {
      return [];
    }
  }

  function guardarUsuarios(lista) {
    localStorage.setItem(DB_KEY, JSON.stringify(lista));
  }

  function iniciarSesionUsuario(usuario) {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({
        nombre: usuario.nombre,
        correo: usuario.correo,
        foto: usuario.foto || "",
        proveedor: usuario.proveedor || "correo"
      })
    );
  }

  function decodificarJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

  window.handleGoogleLogin = function (response) {
    try {
      const payload = decodificarJwt(response.credential);
      const usuarioGoogle = {
        nombre: payload.name || "Usuario Google",
        correo: (payload.email || "").toLowerCase(),
        foto: payload.picture || "",
        proveedor: "Google"
      };

      const usuarios = obtenerUsuarios();
      if (usuarioGoogle.correo && !usuarios.some((u) => u.correo === usuarioGoogle.correo)) {
        usuarios.push({
          nombre: usuarioGoogle.nombre,
          correo: usuarioGoogle.correo,
          password: "",
          proveedor: "Google"
        });
        guardarUsuarios(usuarios);
      }

      iniciarSesionUsuario(usuarioGoogle);
      window.location.href = INICIO_URL;
    } catch (err) {
      console.error("Error al procesar cuenta de Google:", err);
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    const tabLogin = document.getElementById("tabLogin");
    const tabRegistro = document.getElementById("tabRegistro");
    const formLogin = document.getElementById("formLogin");
    const formRegistro = document.getElementById("formRegistro");
    const tituloAuth = document.getElementById("tituloAuth");
    const subtituloAuth = document.getElementById("subtituloAuth");
    const alerta = document.getElementById("rtAuthMensaje");

    function mostrarAlerta(texto, tipo) {
      alerta.textContent = texto;
      alerta.className = "rt-alerta-top " + tipo;
    }

    function limpiarAlerta() {
      alerta.className = "rt-alerta-top";
      alerta.textContent = "";
    }

    function activarLogin() {
      limpiarAlerta();
      tabLogin?.classList.add("activa");
      tabLogin?.setAttribute("aria-selected", "true");
      tabRegistro?.classList.remove("activa");
      tabRegistro?.setAttribute("aria-selected", "false");

      if (tituloAuth) tituloAuth.innerHTML = 'Iniciar sesión<span>.</span>';
      if (subtituloAuth) subtituloAuth.textContent = "Ingresa tus datos para acceder a tu cuenta y tus rutas.";

      formRegistro?.classList.add("oculto");
      formLogin?.classList.remove("oculto");
    }

    function activarRegistro() {
      limpiarAlerta();
      tabRegistro?.classList.add("activa");
      tabRegistro?.setAttribute("aria-selected", "true");
      tabLogin?.classList.remove("activa");
      tabLogin?.setAttribute("aria-selected", "false");

      if (tituloAuth) tituloAuth.innerHTML = 'Crear cuenta<span>.</span>';
      if (subtituloAuth) subtituloAuth.textContent = "Crea tu cuenta gratis y guarda tus destinos favoritos.";

      formLogin?.classList.add("oculto");
      formRegistro?.classList.remove("oculto");
    }

    tabLogin?.addEventListener("click", activarLogin);
    tabRegistro?.addEventListener("click", activarRegistro);

    document.getElementById("btnModoExplorador")?.addEventListener("click", () => {
      iniciarSesionUsuario({
        nombre: "Explorador",
        correo: "explorador@rutatropical.com",
        proveedor: "explorador"
      });
      mostrarAlerta("¡Modo Explorador activado! Entrando...", "exito");
      setTimeout(() => {
        window.location.href = INICIO_URL;
      }, 750);
    });

    document.querySelectorAll(".rt-ver-ojo").forEach((btn) => {
      btn.addEventListener("click", () => {
        const input = document.getElementById(btn.getAttribute("data-target"));
        if (!input) return;
        const esPassword = input.type === "password";
        input.type = esPassword ? "text" : "password";
        btn.innerHTML = esPassword ? ICONO_OJO_CERRADO : ICONO_OJO_ABIERTO;
      });
    });

    formRegistro?.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("regNombre").value.trim();
      const correo = document.getElementById("regCorreo").value.trim().toLowerCase();
      const password = document.getElementById("regPass").value;

      const usuarios = obtenerUsuarios();
      if (usuarios.some((u) => u.correo === correo)) {
        mostrarAlerta("Este correo ya está registrado. Cambia a iniciar sesión.", "error");
        return;
      }

      const nuevoUsuario = { nombre, correo, password, proveedor: "correo" };
      usuarios.push(nuevoUsuario);
      guardarUsuarios(usuarios);
      iniciarSesionUsuario(nuevoUsuario);

      mostrarAlerta("¡Cuenta creada con éxito! Entrando...", "exito");
      setTimeout(() => {
        window.location.href = INICIO_URL;
      }, 900);
    });

    formLogin?.addEventListener("submit", (e) => {
      e.preventDefault();
      const correo = document.getElementById("loginCorreo").value.trim().toLowerCase();
      const password = document.getElementById("loginPass").value;

      const usuarios = obtenerUsuarios();
      const encontrado = usuarios.find((u) => u.correo === correo && u.password === password);

      if (!encontrado) {
        mostrarAlerta("Correo o contraseña incorrectos. Si no tienes cuenta, créala.", "error");
        return;
      }

      iniciarSesionUsuario(encontrado);
      mostrarAlerta(`¡Hola de nuevo, ${encontrado.nombre}! Entrando...`, "exito");
      setTimeout(() => {
        window.location.href = INICIO_URL;
      }, 800);
    });
  });

  // Dentro del submit / validación exitosa de login.js:
localStorage.setItem("rt_sesion_iniciada_v1", "true");
localStorage.setItem("rt_cuenta_actual_v1", correoDelUsuario);
})();