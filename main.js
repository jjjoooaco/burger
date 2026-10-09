const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

if (botonMenu && menu) {
  botonMenu.addEventListener("click", function () {
    menu.classList.toggle("abierto");
    botonMenu.textContent = menu.classList.contains("abierto") ? "✕" : "☰";
  });

  menu.querySelectorAll("a").forEach(function (enlace) {
    enlace.addEventListener("click", function () {
      menu.classList.remove("abierto");
      botonMenu.textContent = "☰";
    });
  });
}

const buscador = document.getElementById("buscador");
const tarjetas = document.querySelectorAll(".tarjeta");
const vacio = document.getElementById("vacio");

function limpiar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

if (buscador) {
  buscador.addEventListener("input", function () {
    const busqueda = limpiar(buscador.value);
    let visibles = 0;

    tarjetas.forEach(function (tarjeta) {
      const titulo = tarjeta.querySelector("h3");
      const nombre = limpiar(titulo ? titulo.textContent : tarjeta.textContent);

      if (nombre.includes(busqueda)) {
        tarjeta.style.display = "block";
        visibles++;
      } else {
        tarjeta.style.display = "none";
      }
    });

    if (vacio) vacio.hidden = visibles > 0;
  });
}

const formulario = document.getElementById("formulario");
const gracias = document.getElementById("gracias");

if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    if (gracias) gracias.hidden = false;
    formulario.reset();
  });
}