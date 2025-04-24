export function renderSocialButtons(container) {
  const socialMedia = [
    { text: "Facebook", ahref: "https://www.facebook.com", icon: "📘" },
    { text: "Twitter", ahref: "https://www.twitter.com", icon: "🐦" },
    { text: "Instagram", ahref: "https://www.instagram.com", icon: "📸" },
  ];

  socialMedia.forEach(({ text, ahref, icon }) => {
    const button = document.createElement("custom-button");
    button.setAttribute("text", text);
    button.setAttribute("ahref", ahref);
    button.setAttribute("icon", icon);
    container.appendChild(button);
  });
}
