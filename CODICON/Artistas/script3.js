document.addEventListener("DOMContentLoaded", function () {
  const container1 = document.querySelector(".column-1");
  const container2 = document.querySelector(".column-2");
  const container3 = document.querySelector(".column-3");

  // Función para cargar los datos desde el archivo JSON
  function cargarDatos() {
    fetch("artistas.json")
      .then((response) => response.json())
      .then((data) => {
        let contador = 0;
        data.forEach((artista) => {
          const tarjeta = crearTarjeta(artista);
          if (contador < 13) {
            container1.appendChild(tarjeta);
          } else if (contador < 27) {
            container2.appendChild(tarjeta);
          } else {
            container3.appendChild(tarjeta);
          }
          contador++;
        });
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  }

  // Función para crear una tarjeta para cada artista
  function crearTarjeta(artista) {
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const front = document.createElement("div");
    front.classList.add("front");
    front.style.backgroundImage = `url(${artista.imagen})`;
    front.innerHTML = `
      <h2>${artista.nombre}</h2>
      <p>${artista.album}</p>
    `;

    const back = document.createElement("div");
    back.classList.add("back");
    back.innerHTML = `
      <img src="img/waving-hand.png" alt="" />
      <h1>${artista.nombre}</h1>
      <p>${artista.descripcion}</p>
      <div class="row">
        <div class="col">
          <h2>1M</h2>
          <p>Seguidos</p>
        </div>
        <div class="col">
          <h2>16k</h2>
          <p>Seguidores</p>
        </div>
        <div class="col">
          <h2>6M</h2>
          <p>Likes</p>
        </div>
      </div>
    `;

    cardContent.appendChild(front);
    cardContent.appendChild(back);
    return cardContent;
  }

  // Cargar los datos al cargar la página
  cargarDatos();
});
