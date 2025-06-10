import { getPresetCss } from "../../js/presetCss.js";

class SectionParagraph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const presetCss = await getPresetCss();

    const css = new CSSStyleSheet();
    css.replaceSync(`
        .section-paragraph {
            font-size: var(--text-lg, 1.125rem);
            color: var(--color-gray, #495565);
            line-height: var(--text-lg-line-height, 1.75rem);
            margin-bottom: 2rem;
            text-align: left;
            text-wrap: balance;
        }

        /* md 48rem (768px) */
        @media (min-width: 48rem) {
            .section-paragraph {
                margin-bottom: 4rem;
                margin-inline: auto;
                max-width: var(--max-w-3xl);
                text-align: center;
            }
        }
    `);

    this.shadowRoot.adoptedStyleSheets = [presetCss, css];

    const sectionParagraph = document.createElement("p");
    sectionParagraph.setAttribute("part", "section-paragraph");
    sectionParagraph.classList.add("section-paragraph");

    const slot = document.createElement("slot");
    sectionParagraph.appendChild(slot);

    this.shadowRoot.appendChild(sectionParagraph);
  }
}

customElements.define("section-paragraph", SectionParagraph);