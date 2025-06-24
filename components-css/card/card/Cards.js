import { whatWeOffer } from "/database.js";

document.addEventListener('DOMContentLoaded', () => {
  // WHAT WE OFFER
  const whatWeOfferCards = document.getElementById("what-we-offer--cards");
  if (!whatWeOfferCards) return;

  const fragment = document.createDocumentFragment();

  whatWeOffer.forEach(({ icon, service, description, href, link }) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (!icon) {
      card.classList.add("card--no-icon");
    }
    card.innerHTML = `
      ${icon ? `<div class="icon">${icon}</div>` : ""}
      <div>
        <p class="service">${service}</p>
        <p class="description">${description}</p>
      </div>
      <a href="${href}" class="href">${link}</a>
    `;
    fragment.appendChild(card);
  });

  whatWeOfferCards.appendChild(fragment);

  requestAnimationFrame(() => {
    whatWeOfferCards.style.transition = "opacity 0.5s ease-in-out";
    whatWeOfferCards.style.opacity = "1";

    annualFeaturesUl.style.transform = "translateY(0)";
    annualFeaturesUl.style.opacity = "1";
  });
});