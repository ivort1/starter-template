import { getPresetCss } from "../../js/presetCss.js";
import { getIndexCss } from "../../js/indexCss.js";

class Features2Section extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.init();
  }

  async init() {
    try {
        const presetCss = await getPresetCss();
        const indexCss = await getIndexCss();
    
        const css = new CSSStyleSheet();
        css.replaceSync(`
        `);
    
        this.shadowRoot.adoptedStyleSheets = [presetCss, indexCss, css];
    
        const template = document.createElement("template");
        template.innerHTML = `
            <section-component>
              <grid-1-2>
                <section-header><slot name="header"></slot></section-header>
                <section-subheader><slot name="subheader"></slot></section-subheader>
                <section-paragraph><slot name="description"></slot></section-paragraph>

                <slot name="cards"></slot>
              </grid-1-2>
            </section-component>
        `;
    
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    } catch(error) {
        console.error("Error initializing Features2Section: ", error);
    }
  }
}

customElements.define("features-2-section", Features2Section);