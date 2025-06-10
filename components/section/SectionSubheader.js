import { getPresetCss } from "../../js/presetCss.js";

class SectionSubheader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const presetCss = await getPresetCss();

    const css = new CSSStyleSheet();
    css.replaceSync(`
      .section-subheader {
            font-size: var(--text-3xl, 1.875rem);
            font-weight: var(--text-semibold, 600);
            letter-spacing: -1.2px;
            line-height: var(--text-3xl-line-height, 2.25rem);
            margin-bottom: 1rem;
            text-wrap: balance;
            width: 100%;
        }

        /* md 48rem (768px) */
        @media (min-width: 48rem) {
            .section-subheader {
                font-size: var(--text-5xl, 3rem);
                line-height: var(--text-5xl-line-height, 1);
                margin-inline: auto;
                max-width: var(--max-w-2xl, 42rem);
                text-align: center;
            }
        }
    `);

    this.shadowRoot.adoptedStyleSheets = [presetCss, css];

    const sectionSubheader = document.createElement("p");
    sectionSubheader.setAttribute("part", "section-subheader");
    sectionSubheader.classList.add("section-subheader");

    const slot = document.createElement("slot");
    sectionSubheader.appendChild(slot);

    this.shadowRoot.appendChild(sectionSubheader);
  }
}

customElements.define("section-subheader", SectionSubheader);