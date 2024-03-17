// Obtener referencia a todos los botones de reproducción/pausa
const playPauseButtons = document.querySelectorAll(".playPauseButton");

// Agregar un controlador de eventos de clic a cada botón de reproducción/pausa
playPauseButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card"); // Obtener la tarjeta asociada al botón
    const audio = card.querySelector(".audioTrack"); // Obtener el audio asociado a la tarjeta
    togglePlayPause(audio);
  });
});

// Función para alternar entre reproducir y pausar la canción
function togglePlayPause(audio) {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
