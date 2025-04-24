import { presetCss } from "../../presetCss.js";

export class Service extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const service = this.getAttribute("service") || "Service Name";
        const details = this.getAttribute("details") || "Service Details";      
        const price = this.getAttribute("price") || "$--.--";

        this.shadowRoot.innerHTML = `
            <style>
                ${presetCss}

                .component {
                    color: #FFF;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }

                .service {
                    font-size: 2.5rem;
                }

                .details {
                    color: #ccc;
                    font-size: 1.5rem;
                    margin-top: 0.5rem;
                }

                .component-section-2 {
                    font-weight: bold;
                    font-size: 2.5rem;
                }
            </style>

            <div class="component">
                <div class="component-section-1">
                    <h2 class="service">${service}</h2>
                    <p class="details">${details}</p>
                </div>

                <div class="component-section-2">${price}</div>
            </div>
        `;
    }
}

customElements.define('service-component', Service);