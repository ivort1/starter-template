import { getPresetCss } from "../../../js/presetCss.js";

class PillComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    try {
      const presetCss = await getPresetCss();

      const css = new CSSStyleSheet();
      css.replaceSync(`
        .pill {
          background-color: var(--bg-color,rgb(245, 245, 245));
          border: var(--border, 1px solid rgb(190, 190, 190));
          border-radius: var(--border-radius, 25px);
          color: var(--color, rgb(190, 190, 190));
          font-size: var(--font-size, var(--text-sm));
          font-weight: var(--font-weight, var(--text-bold));
          line-height: var(--line-height, var(--text-sm-line-height));
          padding: var(--padding, 0.5rem 1rem);
        }
      `);

      this.shadowRoot.adoptedStyleSheets = [presetCss, css];

      const pill = document.createElement("span");
      pill.setAttribute("part", "pill");
      pill.classList.add("pill");

      const slot = document.createElement("slot");
      pill.appendChild(slot);

      this.shadowRoot.appendChild(pill);
    } catch (error) {
      console.error("Error initializing PillComponent:", error);
    }
  }
}

customElements.define("pill-component", PillComponent);