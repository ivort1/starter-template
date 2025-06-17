import { getPresetCss } from "../../../js/presetCss.js";

class ContactComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._contactInformation = [];
    this._initialized = false; // We'll set this after templating
    
    // Create a template for the component
    const template = document.createElement("template");
    template.innerHTML = `
      <ul id="contact-component" part="contact-component"></ul>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // Cache the reference for efficient future updates
    this._contactList = this.shadowRoot.querySelector("#contact-component");
  }

  get contactInformation() {
    return this._contactInformation;
  }

  set contactInformation(value) {
    if (Array.isArray(value)) {
      this._contactInformation = value;
      if (this._initialized) {
        this.renderContactInformation();
      }
    }
  }

  connectedCallback() {
    this.init();
  }

  async init() {
    const presetCss = await getPresetCss();

    const css = new CSSStyleSheet();
    css.replaceSync(`
      #contact-component {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 2rem;
      }
      svg {
          min-width: 1.75rem;
          width: 1.75rem;
      }
      li {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
      }
      .title {
          color: #121212;
          font-weight: var(--text-semibold);
      }
      a {
          color: var(--color-accent);
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 5px;
          transition: color 0.3s ease-in-out;
      }
      a:hover {
          color: var(--color-accent-hover);
      }
    `);
    this.shadowRoot.adoptedStyleSheets = [presetCss, css];

    this._initialized = true;
    // If data was set before init, render now
    if (this._contactInformation.length > 0) {
      this.renderContactInformation();
    }
  }

  renderContactInformation() {
    if (!this._contactList) return;

    this._contactList.innerHTML = "";
    this._contactInformation.forEach(({ icon, title, information }) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div>${icon || "icon"}</div>
        <div>
          <p>${title || "title"}</p>
          <a>${information || "information"}</a>
        </div>
      `;
      this._contactList.appendChild(li);
    });
  }
}

customElements.define("contact-component", ContactComponent);