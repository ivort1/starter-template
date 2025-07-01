import { whatWeOffer } from "/database.js";

document.addEventListener('DOMContentLoaded', () => {
  // WHAT WE OFFER
  const whatWeOfferCards = document.getElementById("what-we-offer__cards");
  if (!whatWeOfferCards) return;

  const fragment = document.createDocumentFragment();

  whatWeOffer.forEach(({ icon, service, description, href, link }) => {
    const card = document.createElement("div");
    card.classList.add("card-4");
    if (!icon) {
      card.classList.add("card--no-icon");
    }
    card.innerHTML = `
      ${icon ? `<div class="icon">${icon}</div>` : ""}
      <div>
        <p class="service spectral-semibold-italic">${service}</p>
        <p class="description manrope">${description}</p>
      </div>
      <a href="${href}" class="href manrope">${link}</a>
    `;
    fragment.appendChild(card);
  });

  whatWeOfferCards.appendChild(fragment);

  requestAnimationFrame(() => {
    whatWeOfferCards.style.opacity = "1";
    whatWeOfferCards.style.transform = "translateY(0)";
  });
});