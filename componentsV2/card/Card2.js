import { getPresetCss } from "../../js/presetCss.js";
import { getIndexCss } from "../../js/indexCss.js";

class Card2Component extends HTMLElement {
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
            .card {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 1rem;
            }

            .icon {
                background-color: var(--icon-background-color, #303030);
                border-radius: 8px;
                color: var(--color, #FFFFFF);
                height: 3rem;
                min-width: 3rem;
                padding: 0.5rem;
                width: 3rem;
            }

            h3 {
                color: var(--h3-color, #303030);
                font-weight: var(--text-semibold);
            }

            p {
                font-size: var(--text-base, 1rem);
                color: var(--p-color, var(--color-gray));
                line-height: var(--text-base-line-height, 1.5rem);
            }
        `);

        this.shadowRoot.adoptedStyleSheets = [presetCss, indexCss, css];

        const card = document.createElement("div");
        card.setAttribute("part", "card");
        card.classList.add("card");

        card.innerHTML = `
            <div class="icon"><slot name="icon"></slot></div>

            <div>
                <h3><slot name="feature"></h3>
                <p><slot name="description"></slot></p>
            </div>
        `;

        this.shadowRoot.appendChild(card);

        const iconSlot = this.shadowRoot.querySelector('slot[name="icon"]');
        iconSlot.addEventListener('slotchange', () => {
            const nodes = iconSlot.assignedNodes({ flatten: true });
            if (nodes.length === 0) {
                const iconContainer = iconSlot.parentElement;
                if (iconContainer) {
                iconContainer.remove();
                }
            }
        });

        const initialNodes = iconSlot.assignedNodes({ flatten: true });
            if (initialNodes.length === 0) {
                const iconContainer = iconSlot.parentElement;
            if (iconContainer) {
                iconContainer.remove();
            }
        }
    } catch (error) {
            console.error("Error initializing Card2Component: ", error);
        }
    }
}

customElements.define("card-2-component", Card2Component);