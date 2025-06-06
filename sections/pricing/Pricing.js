import { getPresetCss } from "../../js/presetCss.js";

class PricingSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const presetCss = await getPresetCss();

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

        #card--annually .pill {
            background-color: #cffff2;
            border: 1px solid var(--color-accent);
            border-radius: 25px;
            color: var(--color-accent);
            font-size: var(--text-xs);
            font-weight: var(--text-bold);
            line-height: var(--text-xs-line-height);
            padding: 0.5rem 1rem;
        }
    `);

    this.shadowRoot.adoptedStyleSheets = [presetCss, css];

    const pricingSection = document.createElement("section-component");
    pricingSection.innerHTML = `
        <div class="pricing">
            <div class="gradient-wrapper" aria-hidden="true">
                <div class="gradient-inner"></div>
            </div>

            <section-header>Pricing</section-header>
            <section-subheader>Choose the Right Plan For You</section-subheader>
            <section-paragraph>
                Choose an affordable plan that’s packed with the best features for engaging your audience, creating
                customer loyalty, and driving sales. 
            </section-paragraph>
        
            <grid-1-2>
                <div class="card" id="card--annually">
                    <div>
                        <h3 class="pricing--subscription-type">Annual Subscription <span class="pill">Save $600!</span></h3>
                        <p class="pricing--price"><span class="pricing--price-amount">$3000</span> <span class="pricing--per">/year</span></p>
                    </div>

                    <p class="pricing--description">The best value – equates to $250 per month.</p>
                    <ul class="pricing--features text-base" id="pricing--annual-features"></ul>

                    <button1-primary>
                        TEST!!!!!
                    </button1-primary>
                </div>

                <div class="card" id="card--monthly">
                    <span class="pill">Popular 🔥</span>
                    <div>
                        <h3 class="pricing--subscription-type">Monthly Subscription</h3>
                        <p class="pricing--price"><span class="pricing--price-amount">$300</span> <span class="pricing--per">/month</span></p>
                    </div>
                    <p class="pricing--per">Our best-selling plan.</p>
                    <ul class="pricing--features text-base" id="pricing--monthly-features"></ul>

                    <button1-primary>
                        TEST!!!!!
                    </button1-primary>
                </div>
            </grid-1-2>
        </div>
    `;
    
    this.shadowRoot.appendChild(pricingSection);
  }
}

customElements.define("pricing-section", PricingSection);