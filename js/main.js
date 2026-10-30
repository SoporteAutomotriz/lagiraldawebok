// La Giralda — JavaScript de la página principal
// Maneja el menú móvil y la accesibilidad básica del menú de navegación.

(function () {
  const btnMenu = document.getElementById('btn-menu');
  const navegacion = document.getElementById('navegacion');
  const listaNav = document.querySelector('.navegacion .lista-nav');

  if (!btnMenu || !navegacion || !listaNav) {
    return;
  }

  // Abrir / cerrar menú móvil
  btnMenu.addEventListener('click', function () {
    const estaAbierto = navegacion.classList.toggle('abierto');
    btnMenu.setAttribute('aria-expanded', estaAbierto ? 'true' : 'false');
  });

  // Cerrar menú móvil al hacer clic en un enlace (mejora UX en móvil)
  const enlaces = navegacion.querySelectorAll('a');
  enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
      navegacion.classList.remove('abierto');
      btnMenu.setAttribute('aria-expanded', 'false');
    });
  });

  // Cerrar menú móvil al pulsar Escape
  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && navegacion.classList.contains('abierto')) {
      navegacion.classList.remove('abierto');
      btnMenu.setAttribute('aria-expanded', 'false');
      btnMenu.focus();
    }
  });
})();