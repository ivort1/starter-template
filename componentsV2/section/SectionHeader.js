import { getPresetCss } from "../../js/presetCss.js";

class SectionHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const presetCss = await getPresetCss();

    const css = new CSSStyleSheet();
    css.replaceSync(`
      .section-header {
            color: var(--color-accent);
            font-size: var(--text-base);
            font-weight: var(--text-semibold);
            line-height: var(--text-base-line-height);
            margin-bottom: 0.25rem;
            margin-inline: auto;
            text-align: left;
        }

        /* md 48rem (768px) */
        @media (min-width: 48rem) {
            .section-header {
                text-align: center;
            }
        }
    `);

    this.shadowRoot.adoptedStyleSheets = [presetCss, css];

    const section = document.createElement("h1");
    section.classList.add("section-header");

    const slot = document.createElement("slot");
    section.appendChild(slot);

    this.shadowRoot.appendChild(section);
  }
}

customElements.define("section-header", SectionHeader);