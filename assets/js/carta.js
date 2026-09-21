const envelope = document.querySelector(".envelope");
const music = document.getElementById("bg-music");

document.addEventListener("click", (event) => {
  const isOpen = envelope.classList.contains("open");
  const clickedLetter = event.target.closest(".letter");
  const clickedButton = event.target.closest("#goToFlowers");
  const clickedEnvelope = event.target.closest(".envelope");

  if (clickedLetter || clickedButton) {
    return;
  }

  if (!isOpen && !clickedEnvelope) {
    return;
  }

  envelope.classList.toggle("open");

  if (!envelope.classList.contains("open")) {
    envelope.classList.remove("closing");
    void envelope.offsetWidth;
    envelope.classList.add("closing");
  }

  if (music.paused) {
    music.play().catch(err => {
      console.log("El navegador bloqueó el autoplay hasta interacción:", err);
    });
  }
});

envelope.addEventListener("animationend", (event) => {
  if (event.animationName === "envelope-hop") {
    envelope.classList.remove("closing");
  }
});
