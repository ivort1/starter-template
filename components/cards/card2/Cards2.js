import { features } from "/database.js";

document.addEventListener('DOMContentLoaded', () => {
  // FEATURES
    const featuresCards = document.getElementById("features--cards");
    if (!featuresCards) return;

    const fragment = document.createDocumentFragment();

    features.forEach(({ includedInSubscription, price, per, icon, feature, description }) => {
        const card = document.createElement("div");
        card.classList.add("card-2");

        const priceText = includedInSubscription ? `<span class="card-2__included">Included ✓</span>` : `<span class="card-2__price">$${price}</span><span class="card-2__per">${per}</span>`;
        
        card.innerHTML = `
            <div class="icon">${icon}</div>

            <div>
                <h3>${feature} ${priceText}</h3>
                <p>${description}</p>
            </div>
        `;

        fragment.appendChild(card);
    })

    featuresCards.appendChild(fragment);

    requestAnimationFrame(() => {
        featuresCards.style.opacity = "1";
        featuresCards.style.transform = "translateY(0)";
    });
});