document.addEventListener("DOMContentLoaded", () => {
  // Customization variables
  const flapSpeed = "1.2s";
  const confettiAmount = 150;
  const youtubeVideoId = "1GWKhpN1KyA"; // e.g. https://www.youtube.com/embed/1GWKhpN1KyA?si=fz-mJ_66yGK2FqXJ

  // Create overlay envelope
  const overlay = document.createElement("div");
  overlay.id = "birthday-overlay";
  overlay.innerHTML = `
    <div class="envelope" style="--flap-speed:${flapSpeed}">
      <div class="envelope-flap">🎉 HAPPY BIRTHDAY 🎉</div>
      <div class="envelope-body">
        <p>Happy Birthday Laadle❤️. Wishing you joy, your pretty smile, and all your favorite things!🐬</p>
        <button id="openEnvelopeBtn" class="open-btn">Click here to open your birthday gesture!🌸</button>
      </div>
    </div>
    <div id="confetti"></div>
  `;
  document.body.appendChild(overlay);

  const btn = document.getElementById("openEnvelopeBtn");
  const confettiContainer = document.getElementById("confetti");

  btn.addEventListener("click", () => {
    overlay.classList.add("opening");

    // Create hidden YouTube audio player
    const ytPlayer = document.createElement("iframe");
    ytPlayer.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&autoplay=1&controls=0&loop=1&modestbranding=1`;
    ytPlayer.allow = "autoplay";
    ytPlayer.style.width = "0";
    ytPlayer.style.height = "0";
    ytPlayer.style.border = "none";
    ytPlayer.style.display = "none";
    document.body.appendChild(ytPlayer);

    setTimeout(() => {
      // Effects after opening
      launchConfetti(confettiAmount);
      overlay.classList.add("reveal");
      startFloatingHearts();
      startShootingStarsWithMessage();

      setTimeout(() => overlay.remove(), 900);
    }, parseFloat(flapSpeed) * 1000);
  });

  // Confetti
  function launchConfetti(count) {
    const colors = ["#ff4d6d", "#ffb84d", "#ffd84d", "#7be6a6", "#5cc0ff", "#c397ff"];
    for (let i = 0; i < count; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      const inner = document.createElement("div");
      inner.className = "confetti-inner";
      inner.style.background = colors[Math.floor(Math.random() * colors.length)];

      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.setProperty("--x", `${(Math.random() - 0.5) * 30}vw`);
      piece.style.setProperty("--fall", `${2.5 + Math.random()}s`);
      piece.style.setProperty("--spin", `${1.6 + Math.random()}s`);
      piece.style.setProperty("--delay", `${Math.random()}s`);

      piece.appendChild(inner);
      confettiContainer.appendChild(piece);
      setTimeout(() => piece.remove(), 3000);
    }
  }

  // Floating dolphins (🐬)
  function startFloatingHearts() {
    document.addEventListener("mousemove", (e) => {
      const heart = document.createElement("span");
      heart.className = "heart";
      heart.textContent = "🐬";

      heart.style.left = `${e.pageX}px`;
      heart.style.top = `${e.pageY}px`;
      heart.style.color = `hsl(${Math.random() * 360}, 80%, 70%)`;

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1500);
    });
  }
});
