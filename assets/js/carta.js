const envelope = document.querySelector(".envelope");
const music = document.getElementById("bg-music");
envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");

  if (music.paused) {
    music.play().catch(err => {
      console.log("El navegador bloqueó el autoplay hasta interacción:", err);
    });
  }
});
