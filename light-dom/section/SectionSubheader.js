const style = `
    .global--section-subheader {
        color: var(--color-black);
        font-size: var(--text-3xl, 1.875rem);
        font-weight: var(--text-semibold, 600);
        letter-spacing: -1.2px;
        line-height: var(--text-3xl-line-height, 2.25rem);
        margin-bottom: 2rem;
        text-wrap: balance;
        width: 100%;
    }

    /* md 48rem (768px) */
    @media (min-width: 48rem) {
        .global--section-subheader {
            font-size: var(--text-5xl, 3rem);
            line-height: var(--text-5xl-line-height, 1);
            margin-inline: auto;
            max-width: var(--max-w-2xl, 42rem);
            text-align: center;
        }
    }
`;

let cssInjected = false;

export default function sectionSubheader(content) {
  if (!cssInjected) {
    const styleElement = document.createElement("style");
    styleElement.textContent = style;
    document.head.appendChild(styleElement);
    cssInjected = true;
  }

  const sectionSubheader = document.createElement("p");
  sectionSubheader.classList.add("global--section-subheader");
  sectionSubheader.innerHTML = content;
  return sectionSubheader;
}