import { getPresetCss } from "../../js/presetCss.js";
import { getIndexCss } from "../../js/indexCss.js";

class ReadMoreComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // Our internal text value.
    this._text = "";
    // Generate a unique toggle name if none is provided.
    this._toggleName = "readmore-toggle-" + Math.random().toString(36).substring(2, 9);
  }

  static get observedAttributes() {
    return ["text", "toggle-name"];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === "text") {
      this._text = newValue;
    } else if (attr === "toggle-name") {
      this._toggleName = newValue;
    }
    this.render();
  }

  connectedCallback() {
    this.init();
  }

  async init() {
    try {
      const presetCss = await getPresetCss();
      const indexCss = await getIndexCss();

      const css = new CSSStyleSheet();
      // Converting the Tailwind markup to plain CSS here.
      css.replaceSync(`
        :host {
          display: block;
          font-family: sans-serif;
        }
        
        .container {
          position: relative;
        }
        
        /* Hide the checkbox input */
        input[type="checkbox"] {
          display: none;
        }
        
        /* Collapsed state: show 3 lines with ellipsis */
        .description {
          color: var(--color-gray);
          display: -webkit-box;
          margin-top: 0.5rem;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          /* Note: remove max-height if it's interfering */
        }
        
        /* Expanded state: remove the line clamp to show full text */
        input[type="checkbox"]:checked ~ .description {
          -webkit-line-clamp: unset;
          display: block;
        }
        
        /* Styling for the labels (read more / read less) */
        .read-more-label {
          color: var(--color-gray);
          display: inline-block;
          font-size: var(--text-sm);
          line-height: var(--text-sm-line-height);
          margin-top: 1rem;
          text-decoration: underline;
          cursor: pointer;
        }
        
        /* Show "Read more" label only when not checked */
        input[type="checkbox"]:not(:checked) ~ .read-more {
          display: inline-block;
        }
        input[type="checkbox"]:checked ~ .read-more {
          display: none;
        }
        
        /* Show "Read less" label only when checked */
        input[type="checkbox"]:checked ~ .read-less {
          display: inline-block;
        }
        input[type="checkbox"]:not(:checked) ~ .read-less {
          display: none;
        }
      `);

      this.shadowRoot.adoptedStyleSheets = [presetCss, indexCss, css];
      this.render();
    } catch (error) {
      console.error("Error initializing ReadMoreComponent:", error);
    }
  }

  // Allow setting the text via property as well.
  set text(val) {
    this._text = val;
    this.render();
  }
  get text() {
    return this._text;
  }

  render() {
    if (!this.shadowRoot) return;
    
    // Use the unique toggle name in the input and associated labels.
    this.shadowRoot.innerHTML = `
      <div class="container">
        <input type="checkbox" id="${this._toggleName}" name="${this._toggleName}">
        <p class="description">
          ${this._text}
        </p>
        <label for="${this._toggleName}" class="read-more-label read-more">Read more +</label>
        <label for="${this._toggleName}" class="read-more-label read-less">Read less -</label>
      </div>
    `;
  }
}

customElements.define("read-more-component", ReadMoreComponent);