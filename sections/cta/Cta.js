import { getPresetCss } from "../../js/presetCss.js";
import { getIndexCss } from "../../js/indexCss.js";

class CtaSection extends HTMLElement {
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
            .cta {
                background-image: url(/assets/backgrounds/maze-green-light.svg);
                background-size: cover;
                border: solid 1px rgb(236, 236, 236);
                border-radius: 25px;
                padding: 5rem 1rem;
                text-align: center;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;
            }

            h2 {
                color: var(--color, #121212);
                filter: drop-shadow(0 1px 1px rgb(205, 205, 205));
                font-size: var(--text-3xl);
                font-weight: var(--text-semibold);
                line-height: var(--text-3xl-line-height);
            }

            p {
                color: var(--color, var(--color-gray-light));
                filter: drop-shadow(0 1px 1px rgb(205, 205, 205));
                font-size: var(--text-lg);
                line-height: var(--text-lg-line-height);
            }

            button1-primary-large::part(button1) {
                background-color: var(--color-accent-hover);
                color: #FFFFFF;
            }

            button1-primary-large::part(button1)::before {
                background-color: var(--color-accent);
            }

            /* sm 40rem (640px) */
            @media (min-width: 40rem) {
                .cta {
                    gap: 2rem;
                }

                h2 {
                    font-size: var(--text-5xl, 3rem);
                    line-height: var(--text-5xl-line-height, 1);
                    max-width: var(--max-w-2xl, 42rem);
                }
            }
        `);
    
        this.shadowRoot.adoptedStyleSheets = [presetCss, indexCss, css];
    
        const template = document.createElement("template");
        template.innerHTML = `
            <section-component>
                <div class="cta">
                    <h2><slot name="header"></slot></h2>
                    <p><slot name="paragraph"></slot></p>

                    <button1-primary-large><slot name="button-content"></slot></button1-primary-large>
                </div>
            </section-component>
        `;
    
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    } catch(error) {
        console.error("Error initializing CtaSection: ", error);
    }
  }
}

customElements.define("cta-section", CtaSection);