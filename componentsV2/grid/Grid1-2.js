import { getPresetCss } from "../../js/presetCss.js";

class Grid12 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const presetCss = await getPresetCss();

    const css = new CSSStyleSheet();
    css.replaceSync(`
        .grid {
            width: 100%;

            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 3rem;
        }

        /* md 48rem (768px) */
        @media (min-width: 48rem) {
            .grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 2rem;
            }
        }
    `);

    this.shadowRoot.adoptedStyleSheets = [presetCss, css];

    const grid = document.createElement("div");
    grid.classList.add("grid");

    const slot = document.createElement("slot");
    grid.appendChild(slot);

    this.shadowRoot.appendChild(grid);
  }
}

customElements.define("grid-1-2", Grid12);