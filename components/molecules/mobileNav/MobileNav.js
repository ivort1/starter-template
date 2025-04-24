import { presetCss } from "../../../presetCss.js";

import "../../atoms/buttons/Button1.js";
import "../../atoms/buttons/MenuButton.js";

export class MobileNav extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <style>
            ${presetCss}

            :host {
                --menu-button-padding: 1rem;
                --menu-button-size: 3rem;
                --bar-height: 3px;
                --bar-spacing: 0.5rem;
                --translate-offset: calc(var(--bar-spacing) + var(--bar-height));
            }

            .mobile-nav {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                padding: 4rem 2rem;

                /* Flexbox */
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 2rem;
            }

            .mobile-nav--section-1 {
                flex: 1;
            }
        </style>
        <!----------END OF CSS----------->

        <div class="mobile-nav">
            <div class="mobile-nav--section-1">
                <button-1 color="black"></button-1>
                <p style="color:#FFF; font-size:1.5rem; text-align:center; margin-top:2rem;">Next available slot: Today at 2:30pm</p>
            </div>
        </div>
      `;

  }
}  
customElements.define('mobile-nav', MobileNav);