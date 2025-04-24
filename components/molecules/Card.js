import { presetCss } from "../../presetCss.js";

export class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                ${presetCss}

                .component {
                    background-color: #202020;
                    padding: 4rem;
                    border-radius: 10px;
                    margin: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 3rem; /* spacing between price components */
                }
            </style>

            <div class="component">
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('card-component', Card);