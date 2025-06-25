const style = `
    .global--section {
        margin-inline: auto;
        max-width: var(--max-w-5xl, 64rem); /* 1024px */
        padding: 3rem 1rem;
        width: 100%;    
    }

    /* md 48rem (768px) */
    @media (min-width: 48rem) {
        .global--section {
            padding: 4rem 1rem;
        }
    }
`;

let cssInjected = false;

export default function section(content) {
  if (!cssInjected) {
    const styleElement = document.createElement("style");
    styleElement.textContent = style;
    document.head.appendChild(styleElement);
    cssInjected = true;
  }

  const section = document.createElement("section");
  section.classList.add("global--section");
  section.innerHTML = content;
  return section;
}