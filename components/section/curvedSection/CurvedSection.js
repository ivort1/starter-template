import { getPresetCss } from "../../../js/presetCss.js";

class CurvedSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.init();
  }

  async init() {
    const presetCss = await getPresetCss();

    const css = new CSSStyleSheet();
    css.replaceSync(`
      section-component::part(section) {
        background-color: var(--color-accent-light);
        position: relative;
      }

      #divider {
        margin: 0 auto;
        max-width: var(--max-w-5xl);
        transform: rotate(180deg);
        width: 100%;
      }
    `);

    this.shadowRoot.adoptedStyleSheets = [presetCss, css];

    const template = document.createElement("template");
    template.innerHTML = `
      <svg  id="divider" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill" fill="var(--color-accent-light)" fill-opacity="1"></path></svg>
      <section-component>
        <slot name="content"</slot>
      </section-component>
    `;
    template.setAttribute("part", "curved-section");
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("curved-section", CurvedSection);