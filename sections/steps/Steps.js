import { getPresetCss } from "../../js/presetCss.js";
import { getIndexCss } from "../../js/indexCss.js";

class StepsSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.init();
  }

  async init() {
    const presetCss = await getPresetCss();
    const indexCss = await getIndexCss();

    const css = new CSSStyleSheet();
    css.replaceSync(`
   
    `);

    this.shadowRoot.adoptedStyleSheets = [presetCss, indexCss, css];

    const template = document.createElement("template");
    template.innerHTML = `
        <section-component>
            <section-header><slot name="header"></slot></section-header>
            <section-subheader><slot name="subheader"></slot></section-subheader>
            <section-paragraph><slot name="paragraph"></slot></section-paragraph>
        </section-component>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("steps-section", StepsSection);