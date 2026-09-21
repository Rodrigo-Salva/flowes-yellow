onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    function createShootingStar() {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.top = Math.random() * 60 + '%';
      star.style.animationDelay = '0s';
      star.style.animationDuration = (Math.random() * 1.5 + 2) + 's';

      document.querySelector('.shooting-stars').appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 4000);
    }

    setInterval(() => {
      if (Math.random() > 0.3) {
        createShootingStar();
      }
    }, Math.random() * 5000 + 3000);
    clearTimeout(c);
  }, 1000);
};

const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");
const unlockEvents = ["pointerdown", "keydown", "touchstart", "wheel"];

function startMusic() {
  return music.play().then(() => {
    toggleBtn.textContent = "🎵";
    unlockEvents.forEach((ev) => document.removeEventListener(ev, unlock));
  });
}

function unlock() {
  startMusic().catch(() => {});
}

music.muted = false;
startMusic().catch(() => {
  unlockEvents.forEach((ev) => document.addEventListener(ev, unlock));
});

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🎵";
  } else {
    music.pause();
    toggleBtn.textContent = "🔇";
  }
});
