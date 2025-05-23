// Login - validar usuario y contraseña
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("usuario").value.trim();
  const pass = document.getElementById("clave").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("usuario", user);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("mensaje-error").textContent = "Usuario o contraseña incorrectos.";
  }
});

// Dashboard - validar sesión y manejar logout
if (window.location.pathname.endsWith("dashboard.html")) {
  window.addEventListener("DOMContentLoaded", () => {
    const usuarioActivo = localStorage.getItem("usuario");

    if (!usuarioActivo) {
      window.location.href = "login.html";
      return;
    }

    // Mostrar usuario activo en dashboard
    const userSpan = document.getElementById("usuario-activo");
    if (userSpan) {
      userSpan.textContent = usuarioActivo;
    }

    // Evento para cerrar sesión
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("usuario");
        window.location.href = "login.html";
      });
    }
  });
}
