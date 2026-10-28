$("ctaBtn").addEventListener("click", () => {
  $("msg").textContent = "🎉 Bedankt voor je steun! Samen maken we Nederland eerlijker!";

  const kleuren = ["#ff4757", "#2ed573", "#1e90ff", "#ffa502", "#e056fd", "#ffffff"];

  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.width = "8px";
    confetti.style.height = "12px";
    confetti.style.backgroundColor =
      kleuren[Math.floor(Math.random() * kleuren.length)];
    confetti.style.zIndex = "99999";
    confetti.style.pointerEvents = "none";
    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";

    document.body.appendChild(confetti);

    const duur = 2000 + Math.random() * 2000;

    const animatie = confetti.animate(
      [
        {
          transform: "translate3d(0, 0, 0) rotate(0deg)",
          opacity: 1
        },
        {
          transform: `translate3d(${Math.random() * 200 - 100}px, ${
            window.innerHeight + 100
          }px, 0) rotate(${Math.random() * 1440}deg)`,
          opacity: 0
        }
      ],
      {
        duration: duur,
        easing: "ease-out"
      }
    );

    animatie.onfinish = () => confetti.remove();
  }
});
