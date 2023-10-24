// Asegúrate de que el archivo 'hhh.js' se ha cargado antes de ejecutar este código.

// Función para agregar una fila a la tabla
import { series } from "./data.js";
import { Serie } from "./Serie.js";

const miBoton = document.getElementById("miBoton");
if (miBoton) {
    miBoton.addEventListener("click", miFuncion);
}
function miFuncion() {
    // Coloca aquí el código que deseas ejecutar cuando se hace clic en el botón
    let promedio = 0;
    let numPeliculas = 0;
    for (const serie of series) {
        numPeliculas++;
        promedio += serie.seasons;
    }
    promedio = promedio / numPeliculas;
    document.getElementsByTagName("p")[0].innerHTML = "El promedio de temporadas es " + promedio;
}
function showCard(serie: Serie,) {
    // Coloca aquí el código que deseas ejecutar cuando se hace clic en el botón
    const card = document.querySelector(".card");

    if (card) {
        // Modifica el contenido de la tarjeta
        const cardTitle = card.querySelector(".card-title");
        const cardText = card.querySelector(".card-text");

        if (cardTitle && cardText) {
            cardTitle.textContent = serie.name;
            cardText.textContent = serie.description;
        }

        // También puedes modificar la imagen de la tarjeta si es necesario
        const cardImage = card.querySelector(".card-img-top") as HTMLImageElement;

        if (cardImage) {
            // Ahora puedes acceder a la propiedad 'src' de la imagen
            cardImage.src = "images/" + serie.name + ".jpeg";
            cardImage.alt = serie.name;
        }

        // Puedes cambiar el enlace y su texto
        const cardLink = card.querySelector(".stretched-link") as HTMLAnchorElement;

        if (cardLink) {
            // Ahora puedes acceder a la propiedad 'href' del enlace
            cardLink.href = serie.website;
            cardLink.textContent = "Ir al sitio web";
        }
    }
}
// Función para agregar una fila a la tabla
function agregarFila(serie: Serie) {
    const tbody = document.querySelector("tbody");

    if (tbody) {
        const fila = document.createElement("tr");

        const idColumna = document.createElement("td");
        idColumna.textContent = serie.id.toString();

        const nombreColumna = document.createElement("td");
        nombreColumna.innerHTML = `<a class "text-info"  id="${serie.name}" target="_blank">${serie.name}</a>`
        nombreColumna.addEventListener("click", () => { showCard(serie); })

        const canalColumna = document.createElement("td");
        canalColumna.textContent = serie.channel;

        const temporadasColumna = document.createElement("td");
        temporadasColumna.textContent = serie.seasons.toString();

        fila.appendChild(idColumna);
        fila.appendChild(nombreColumna);
        fila.appendChild(canalColumna);
        fila.appendChild(temporadasColumna);

        tbody.appendChild(fila);
    } else {
        console.error("Elemento 'tbody' no encontrado en el documento.");
    }
}

// Itera sobre la lista de series y agrega filas a la tabla
for (const serie of series) {
    agregarFila(serie);
}