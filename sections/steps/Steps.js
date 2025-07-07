import { nextSteps } from "../../database.js";

document.addEventListener("DOMContentLoaded", () => {
  const stepsSection = document.querySelector(".steps-section");
  if (!stepsSection) return;

  const fragment = document.createDocumentFragment();

  nextSteps.forEach(({ icon, title, description }, index) => {
    const li = document.createElement("li");
    li.classList.add("step");
    li.classList.add("manrope");

    // Only add the connector line if this is not the last step.
    // const lineHtml = index < nextSteps.length - 1 ? `<span class="step__line" aria-hidden="true"></span>` : "";

    li.innerHTML = `
      <div class="step__number spectral-medium-italic">${index + 1}</div>
      <div class="step__icon">${icon || ""}</div>
      <h2 class="step__title">${title || ""}</h2>
      <p class="step__description">${description}</p>
    `;

    fragment.appendChild(li);
  });

  stepsSection.appendChild(fragment);

  requestAnimationFrame(() => {
    stepsSection.style.opacity = "1";
    stepsSection.style.transform = "translateY(0)";
  });
});