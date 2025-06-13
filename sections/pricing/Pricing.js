import { getPresetCss } from "../../js/presetCss.js";
import { getIndexCss } from "../../js/indexCss.js";

class PricingSection extends HTMLElement {
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
        .pricing {
            position: relative;
        }
        
        .gradient-wrapper {
            position: absolute;
            left: 15rem;
            top: 13rem;
            z-index: -10;
            transform: translateZ(0);
            overflow: hidden;
            filter: blur(8rem);
        }

        .gradient-inner {
            aspect-ratio: 1155 / 678;
            background: linear-gradient(var(--color-accent), rgb(115, 222, 255));
            opacity: 0.4;
            height: 150px;
            width: 900px;
            clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
        }

        .card {
            border-radius: 1.5rem;
            display: block;
            padding: 5rem 3rem;
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 1.5rem;
        }

        #card--annually {
            border: solid 1.5px #dedede;
        }

        #card--annually .pricing--description,
        #card--annually .pricing--per,
        #card--annually li {
            color: var(--color-gray-light);
        }

        #card--annually .pricing--subscription-type {    
            display: flex;
            flex-direction: column-reverse;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 2rem;
        }

        #card--annually pill-component::part(pill) {
            background-color: var(--color-accent-light);
            border: 1px solid var(--color-accent);
            color: var(--color-accent);
        }

        #card--annually button1-secondary::part(button1) {
            background-color: var(--color-accent-hover);
            outline: 0.5px solid var(--color-accent-hover);
            color: var(--color-accent);
        }

        #card--monthly {
            background-color: #121212;
            color: #FFFFFF;
            height: 115%;
            padding: 3rem;
            position: relative;
        }

        #card--monthly pill-component::part(pill) {
            background-color: var(--color-accent);
            border: 1px solid var(--color-accent);
            border-radius: 8px;
            color: #FFFFFF;
            font-size: var(--text-base);
            padding: 0.5rem 1rem;
            position: absolute;
            top: -1rem;
            left: 3rem;
        }

        #card--monthly button1-primary::part(button1) {
            background-color: var(--color-accent-hover);
            // outline: 0.5px solid var(--color-accent);
            color: #FFFFFF;
        }

        #card--monthly button1-primary::part(button1)::before {
            background-color: var(--color-accent);
        }

        #card--monthly .pricing--description,
        #card--monthly .pricing--per,
        #card--monthly li {
            color: var(--color-gray-dark);
        }

        .pricing--subscription-type {
            color: var(--color-accent);
            font-size: var(--text-sm);
            font-weight: var(--text-semibold);
            line-height: var(--text-sm-line-height);
            width: 100%;
        }

        .pricing--price-amount {
            font-size: var(--text-5xl);
            font-weight: var(--text-semibold);
            line-height: var(--text-5xl-line-height);
        }

        .pricing--per {
            font-size: var(--text-base);
            line-height: var(--text-base-line-height);
        }

        /* md 48rem (768px) */
        @media (min-width: 48rem) {
            section-paragraph::part(section-paragraph) {
                margin-bottom: 6rem;
            }

            grid-1-2::part(grid) {
                align-items: center;
                gap: 0;
            }

            #card--annually {
                border-radius: 1.5rem 0 0 1.5rem;
            }

            #card--annually .pricing--subscription-type {    
                flex-direction: row;
                gap: 1rem;
            }
        }
    `);

    this.shadowRoot.adoptedStyleSheets = [presetCss, indexCss, css];

    const template = document.createElement("template");
    template.innerHTML = `
        <section-component>
            <div class="pricing">
                <div class="gradient-wrapper" aria-hidden="true">
                    <div class="gradient-inner"></div>
                </div>

                <section-header><slot name="header"></slot></section-header>
                <section-subheader><slot name="subheader"></slot></section-subheader>
                <section-paragraph><slot name="description"></slot></section-paragraph>

                <grid-1-2>
                    <div class="card" id="card--annually">
                        <div>
                        <p class="pricing--subscription-type">
                            <slot name="annual-label"></slot>
                            <pill-component><slot name="annual-pill"></slot></pill-component>
                        </p>
                        <p class="pricing--price">
                            <span class="pricing--price-amount"><slot name="annual-price-amount"></slot></span>
                            <span class="pricing--per"><slot name="annual-per">/year</slot></span>
                        </p>
                        </div>
                        <p class="pricing--description"><slot name="annual-description"></slot></p>
                        
                        <slot name="annual-features"></slot>
                        
                        <button1-secondary><slot name="annual-button"></slot></button1-secondary>
                    </div>

                    <div class="card" id="card--monthly">
                        <pill-component><slot name="monthly-pill"></slot></pill-component>
                        <div>
                            <p class="pricing--subscription-type"><slot name="monthly-label"></slot></p>
                            <p class="pricing--price">
                                <span class="pricing--price-amount"><slot name="monthly-price-amount"></slot></span>
                                <span class="pricing--per"><slot name="monthly-per">/month</slot></span>
                            </p>
                        </div>
                        <p class="pricing--per"><slot name="monthly-description"></slot></p>
                        
                        <slot name="monthly-features"></slot>

                        <button1-primary><slot name="monthly-button"></slot></button1-primary>
                    </div>
                </grid-1-2>

                <slot name="additional-content"></slot>
            </div>
        </section-component>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("pricing-section", PricingSection);