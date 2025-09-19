// Reusable function to toggle card flip
function toggleCardFlip(cardId) {
  const card = document.getElementById(cardId);
  if (!card) return;

  const cardInner = card.querySelector('.card-inner');
  cardInner.classList.toggle('card-flipped');

  // Bonus: show fun fact modal
  showFunFact(cardId);
}

// Show fun fact in modal
function showFunFact(cardId) {
  const facts = {
    "card-book": "Fun fact: Dune is the best-selling science fiction novel of all time!",
    "card-movie": "Fun fact: The Matrix introduced the famous 'bullet time' effect.",
    "card-food": "Fun fact: Pizza is over 500 years old, originating from Naples, Italy."
  };

  const factText = document.getElementById("factText");
  factText.textContent = facts[cardId] || "Here's something cool!";
  
  document.getElementById("factModal").classList.remove("hidden");
}

// Close modal
function closeModal() {
  document.getElementById("factModal").classList.add("hidden");
}

// Attach listeners after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(card => {
    card.addEventListener('click', () => toggleCardFlip(card.id));
  });

  const closeBtn = document.getElementById("closeModal");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
});