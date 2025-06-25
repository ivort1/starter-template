import { annualFeatures, monthlyFeatures } from "/database.js";
import checkmark from "/assets/icons/checkmark.js";
import dashedArrow from "/assets/icons/dashedArrow.js";

document.addEventListener('DOMContentLoaded', function () {
    const annualFeaturesUl = document.querySelector(".pricing__annual-features");
    const monthlyFeaturesUl = document.querySelector(".pricing__monthly-features");

    if (!annualFeaturesUl || !monthlyFeaturesUl) return;

    const annualFragment = document.createDocumentFragment();
    const monthlyFragment = document.createDocumentFragment();

    annualFeatures.forEach(feature => {
        const li = document.createElement("li");
        li.innerHTML = `${checkmark} ${feature}`;
        annualFragment.appendChild(li);
    });

    monthlyFeatures.forEach(feature => {
        const li = document.createElement("li");
        li.innerHTML = `${checkmark} ${feature}`;
        monthlyFragment.appendChild(li);
    });

    annualFeaturesUl.appendChild(annualFragment);
    monthlyFeaturesUl.appendChild(monthlyFragment);

    requestAnimationFrame(() => {
        annualFeaturesUl.style.transform = "translateY(0)";
        annualFeaturesUl.style.opacity = "1";
        
        monthlyFeaturesUl.style.transform = "translateY(0)";
        monthlyFeaturesUl.style.opacity = "1";
    });

    const dashedArrowIcon = document.getElementById("dashed-arrow-icon");
    dashedArrowIcon.innerHTML = dashedArrow;
});