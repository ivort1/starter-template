import { getPresetCss } from "../../js/presetCss.js";
import { getIndexCss } from "../../js/indexCss.js";

class CardComponent extends HTMLElement {
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
        :host {
            display: block;
            height: 100%;
        }

        .card {
            background-image: url("/assets/backgrounds/maze-green-vertical.svg");
            background-position: center;
            background-repeat: repeat;
            background-size: cover;
            border: solid 1px rgb(236, 236, 236);
            border-radius: 25px;
            color: #FFFFFF;
            min-height: 25rem;
            overflow: hidden;
            padding: 2rem;
            position: relative;
            text-align: center;
            transition: background-color 0.3s ease-in-out, transform 0.15s ease-in-out;
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: var(--justify-content, space-between);
            gap: 2rem;
        }

        .card > * {
            position: relative;
            z-index: 2;
        }

        .card::before {
            content: "";
            position: absolute;
            top: 74px;
            left: 50%;
            width: 3rem;
            height: 3rem;
            background-color: var(--color-accent);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            transition: transform 0.3s ease-in-out;
            z-index: 1;
        }

        .card:hover {
            transform: translateY(-3px);
        }

        .card:hover::before {
            transform: translate(-50%, -50%) scale(20);
        }

        .card:hover .service,
        .card:hover .description,
        .card:hover .href {
            color: #FFFFFF;
        }

        .card:hover .icon {
            background-color: var(--color-accent-hover);
            box-shadow: 0px 10px 50px 0px #505050;
        }

        .service {
            color: #121212;
            filter: drop-shadow(0 1px 1px rgb(205, 205, 205));
            font-size: var(--text-lg);
            line-height: var(--text-base-line-height, 1.5rem);
            font-weight: var(--text-semibold, 600);
            transition: color ease-in-out 0.3s;
        }

        .description {
            color: var(--color-gray-light);
            filter: drop-shadow(0 1px 1px rgb(205, 205, 205));
            font-size: var(--text-base, 1rem);
            line-height: var(--text-base-line-height, 1.5rem);
            margin-top: 0.5rem;
            text-wrap: balance;
            transition: color ease-in-out 0.3s;
        }

        .href {
            color: var(--color-accent);
            font-size: var(--text-base, 1rem);
            font-weight: var(--text-semibold, 600);
            line-height: var(--text-base-line-height, 1.5rem);
            transition: color ease-in-out 0.3s;
        }

        .icon {
            background-color: var(--color-accent);
            border-radius: 50%;
            color: #FFFFFF;
            padding: 1.5rem;
            transition: background-color ease-in-out 0.3s, box-shadow ease-in-out 0.3s;
            min-width: 6rem;
            width: 6rem;
        }
        `);

        this.shadowRoot.adoptedStyleSheets = [presetCss, indexCss, css];

        const card = document.createElement("div");
        card.setAttribute("part", "card");
        card.innerHTML = `
            <div class="card">
                <div class="icon"><slot name="icon"></slot></div>
                <div>
                    <p class="service"><slot name="service"></slot></p>
                    <p class="description"><slot name="description"></slot></p>
                </div>
                <a class="href"><slot name="link">Get started →</slot></a>
            </div>
        `;

        // Append the card element directly.
        this.shadowRoot.appendChild(card);

        // Optionally, if you passed an 'href' attribute, update the anchor:
        const anchor = this.shadowRoot.querySelector(".href");
        if (anchor && this.hasAttribute("href")) {
        anchor.setAttribute("href", this.getAttribute("href"));
        }

        // Listen for changes on the icon slot
        const iconSlot = this.shadowRoot.querySelector('slot[name="icon"]');
        iconSlot.addEventListener('slotchange', () => {
        // Get the distributed nodes
        const nodes = iconSlot.assignedNodes({ flatten: true });
        if (nodes.length === 0) {
            // If empty, remove the icon container entirely
            const iconContainer = iconSlot.parentElement; // .icon container
            if (iconContainer) {
            iconContainer.remove();
            }
        }
        });

        // Optionally, check immediately if no icon is provided (in case the distribution already happened)
        const initialNodes = iconSlot.assignedNodes({ flatten: true });
        if (initialNodes.length === 0) {
        const iconContainer = iconSlot.parentElement;
        if (iconContainer) {
            iconContainer.remove();
        }
        }
    } catch (error) {
            console.error("Error initializing CardComponent: ", error);
        }
    }
}

customElements.define("card-component", CardComponent);