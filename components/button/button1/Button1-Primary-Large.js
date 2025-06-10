import { getPresetCss } from "../../../js/presetCss.js";

class Button1PrimaryLarge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    try {
      const presetCss = await getPresetCss();

      const css = new CSSStyleSheet();
      css.replaceSync(`
        :host {
            display: block;
            max-width: var(--max-w-xs);
            width: 100%;
        }

        a {
            background-color: var(--bg-color, #252525);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            display: block;
            margin: 0;
            outline: none;
            overflow: hidden;
            padding: var(--padding, 1rem 3rem);
            position: relative;
          }
          
        #button-content {
            color: var(--color, #FFFFFF);
            font-size: var(--text-lg, 0.875rem);
            font-weight: var(--text-semibold, 600);
            line-height: var(--text-lg-line-height, 1.25rem);
            position: relative;
            transition: color 0.4s;
            z-index: 10;
            
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        a:hover span {
            color: var(--color-hover, #FFFFFF);
        }

        a::before,
        a::after {
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 0;
        }

        a::before {
            background: var(--bg-color-before, #404040);
            content: "";
            left: -10%;
            transform: skew(30deg);
            transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
            width: 120%;
        }

        a:hover::before {
            transform: translate3d(100%, 0, 0);
        }
      `);

      this.shadowRoot.adoptedStyleSheets = [presetCss, css];

      const button = document.createElement("a");
      button.setAttribute("part", "button1");

      const content = document.createElement("span");
      content.setAttribute("id", "button-content");

      const slot = document.createElement("slot");
      content.appendChild(slot);

      button.appendChild(content);

      this.shadowRoot.appendChild(button);
    } catch (error) {
      console.error("Error initializing Button1PrimaryLarge:", error);
    }
  }
}

customElements.define("button1-primary-large", Button1PrimaryLarge);