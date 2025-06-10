import { getPresetCss } from "../../js/presetCss.js";
import { getIndexCss } from "../../js/indexCss.js";

class FooterSection extends HTMLElement {
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
            .footer {
                border-top: solid 1px var(--color-muted);
                color: var(--color-gray);

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2rem;
            }
        `);
    
        this.shadowRoot.adoptedStyleSheets = [presetCss, indexCss, css];
    
        const date = new Date();
        const year = date.getFullYear();

        const template = document.createElement("template");
        template.innerHTML = `
            <section-component>
                <div class="footer">
                    <slot name="content"></slot>
                    © ${year} Golden Bear Digital, LLC. All rights reserved.
                </div>
            </section-component>
        `;
    
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    } catch(error) {
        console.error("Error initializing FooterSection: ", error);
    }
  }
}

customElements.define("footer-section", FooterSection);