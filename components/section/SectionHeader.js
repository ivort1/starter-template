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
      :host {
        display: block;     
        width: 100%;
      }

      .section-header {
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
            .section-header {
                text-align: center;
            }
        }
    `);

    this.shadowRoot.adoptedStyleSheets = [presetCss, css];

    const sectionHeader = document.createElement("h1");
    sectionHeader.setAttribute("part", "section-header");
    sectionHeader.classList.add("section-header");

    const slot = document.createElement("slot");
    sectionHeader.appendChild(slot);

    this.shadowRoot.appendChild(sectionHeader);
  }
}

customElements.define("section-header", SectionHeader);