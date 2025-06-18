import { contactInformation } from "../../database.js";

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("contact-component");
  if (!Array.isArray(contactInformation) || !list) return;

  const fragment = document.createDocumentFragment();

  contactInformation.forEach(({ icon, title, information }) => {
    // li wrapper
    const li = document.createElement("li");

    // icon
    const iconWrapper = document.createElement("div");
    iconWrapper.innerHTML = icon;

    // info
    const infoWrapper = document.createElement("div");
    const p = document.createElement("p");
    p.className = "contact-component__title";
    p.textContent = title;

    const a = document.createElement("a");
    a.textContent = information;
    if (/email/i.test(title)) {
      a.href = `mailto:${information}`;
    } else if (/phone/i.test(title)) {
      const digits = information.replace(/[^\d+]/g, "");
      a.href = `tel:${digits}`;
    }

    infoWrapper.append(p, a);
    li.append(iconWrapper, infoWrapper);
    fragment.appendChild(li);
  });

  // 1) insert all <li> at once
  list.appendChild(fragment);
  // 2) trigger the fade-in
  list.style.opacity = "1";
});