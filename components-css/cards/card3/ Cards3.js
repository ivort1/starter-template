import { additionalFeatures } from "/database.js";

document.addEventListener('DOMContentLoaded', () => {
  // ADDITIONAL FEATURES
    const additionalFeaturesCards = document.getElementById("additional-features__table");
    if (!additionalFeaturesCards) return;

    const fragment = document.createDocumentFragment();

    additionalFeatures.forEach(({ feature, price, per, description }) => {
        const card = document.createElement("tr");
        card.classList.add("card-3");

        card.innerHTML = `
                <td>
                    <h3>${feature}</h3>
                    <p>${description}</p>
                </td>
                <td>
                    <span class="additional-features__price">$${price}</span><span class="additional-features__per"> (${per})</span>
                </td>
        `;
        
        fragment.appendChild(card);
    });

    additionalFeaturesCards.appendChild(fragment);

    requestAnimationFrame(() => {
        additionalFeaturesCards.style.opacity = "1";
        additionalFeaturesCards.style.transform = "translateY(0)";
    });
});