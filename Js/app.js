// Navegacion con scroll suave
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').slice(1);
    const destino = document.getElementById(id);
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Menu para celular
const botonMenu = document.getElementById('boton-menu');
const menu = document.getElementById('menu');
if (botonMenu && menu) {
  botonMenu.addEventListener('click', () => {
    menu.classList.toggle('abierto');
  });
}

const form = document.getElementById('form-contacto');
const msg = document.getElementById('mensaje-form');
if (form && msg) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      msg.textContent = 'Por favor, completá todos los campos.';
      msg.style.color = '#fca5a5';
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      msg.textContent = 'Ingresá un email válido.';
      msg.style.color = '#fca5a5';
      return;
    }

    msg.textContent = '¡Gracias! Mensaje validado (demo).';
    msg.style.color = '#6ee7b7';
    form.reset();
  });
}
