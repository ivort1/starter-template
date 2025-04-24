// Components
import "./components/CustomButton.js";
import "./components/atoms/buttons/MenuButton.js";
import "./components/molecules/mobileNav/MobileNav.js";

// Sections
import { renderSocialButtons } from "./sections/SocialButtons.js";
import { renderServices } from "./sections/Services.js";

document.addEventListener("DOMContentLoaded", () => {
  // const socialButtonsContainer = document.getElementById("social-buttons");
  // renderSocialButtons(socialButtonsContainer);

  const mobileNavContainer = document.getElementById('mobile-nav');
  const mobileNav = document.createElement('mobile-nav');
  mobileNavContainer.appendChild(mobileNav);

  const servicesContainer = document.getElementById('services');
  renderServices(servicesContainer);
});
