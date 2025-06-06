import { getPresetCss } from "../../js/presetCss.js";

class GridCol extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const presetCss = await getPresetCss();

    const css = new CSSStyleSheet();
    css.replaceSync(`
        .grid-col {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 1rem;
        }
    `);

    this.shadowRoot.adoptedStyleSheets = [presetCss, css];

    const gridCol = document.createElement("div");
    gridCol.classList.add("grid-col");

    const slot = document.createElement("slot");
    gridCol.appendChild(slot);

    this.shadowRoot.appendChild(gridCol);
  }
}

customElements.define("grid-col", GridCol);