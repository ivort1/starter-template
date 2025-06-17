const style = `
    .global--section-header {
        color: var(--color-accent);
        font-size: var(--text-base);
        font-weight: var(--text-semibold);
        line-height: var(--text-base-line-height);
        margin-bottom: 0.5rem;
        margin-inline: auto;
        text-align: left;
    }

    /* md 48rem (768px) */
    @media (min-width: 48rem) {
        .global--section-header {
            text-align: center;
        }
    }
`;

let cssInjected = false;

export default function sectionHeader(content) {
  if (!cssInjected) {
    const styleElement = document.createElement("style");
    styleElement.textContent = style;
    document.head.appendChild(styleElement);
    cssInjected = true;
  }

  const sectionHeader = document.createElement("h1");
  sectionHeader.classList.add("global--section-header");
  sectionHeader.innerHTML = content;
  return sectionHeader;
}