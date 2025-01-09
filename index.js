document.addEventListener("DOMContentLoaded", () => {
  const videoCards = document.querySelectorAll(".video-card");

  videoCards.forEach((card) => {
    card.addEventListener("click", () => {
      alert(`You clicked on ${card.textContent}`);
    });
  });
});
