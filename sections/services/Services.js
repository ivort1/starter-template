import { getPresetCss } from "../../js/presetCss.js";

class ServicesSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._servicesInDepth = [];
    this._initialized = false;

    const template = document.createElement("template");
    template.innerHTML = `
      <div class="services" part="services-section">
        <ul id="services--menu"></ul>
        <ul id="services--content"></ul>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._servicesMenu = this.shadowRoot.querySelector("#services--menu");
    this._servicesContent = this.shadowRoot.querySelector("#services--content");
  }

  get servicesInDepth() {
    return this._servicesInDepth;
  }

  set servicesInDepth(value) {
    if (Array.isArray(value)) {
      this._servicesInDepth = value;
      if (this._initialized) {
        this.renderServicesInDepth();
      }
    }
  }

  connectedCallback() {
    this.init();
  }

  async init() {
    try {
      const presetCss = await getPresetCss();
      const css = new CSSStyleSheet();
      css.replaceSync(`
        .services {
          font-size: var(--text-lg);
          line-height: var(--text-lg-line-height);
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
        }
        
        #services--menu {
          background-color: var(--color-accent-light);
          border-radius: 8px;
          font-weight: var(--text-semibold);
          height: fit-content;
          padding: 1rem;
          position: sticky;
          top: 8rem;
          width: 100rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        a {
          transition: color 0.15s ease-in-out;
        }
        
        a:hover {
          color: var(--color-accent);
        }
        
        #services--content {
          background-color: #FFFFFF;
          padding: 1rem 3rem;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        
        h3 {
          font-weight: var(--text-semibold);
        }

        #services--price {
          background-color: var(--color-accent-light);
          border-radius: 8px;
          color: var(--color-accent);
          font-size: var(--text-sm);
          line-height: var(--text-sm-line-height);
          margin-left: 0.5rem;
          padding: 0.5rem 0.75rem;
        }

        .services--per {
          color:rgb(242, 242, 242);
          font-size: var(--text-sm);
          line-height: var(--text-sm-line-height);
          margin-left: 0.25rem;
        }
        
        p {
          color: var(--color-gray);
          margin: 0.5rem 0 0.5rem 0;
        }
        
        ul {
          margin: 1rem 0 0 1rem;
        }
        
        li:not(:last-child) {
          margin-bottom: 0.5rem;
        }
        
        .list-item-header {
          font-weight: var(--text-semibold);
        }
      `);
      this.shadowRoot.adoptedStyleSheets = [presetCss, css];
      this._initialized = true;
      if(this._servicesInDepth.length > 0) {
        this.renderServicesInDepth();
      }
    } catch (error) {
      console.error("Error initializing ServicesSection: ", error);
    }
  }

  renderServicesInDepth() {
    if (!this._servicesInDepth) return;

    // clear previous content
    this._servicesMenu.innerHTML = "";
    this._servicesContent.innerHTML = "";

    this._servicesInDepth.forEach(({ includedInSubscription, price, per, integration, link, href, header, content }) => {
      // Create and set up the menu list item:
      const menuLi = document.createElement("li");
      const menuA = document.createElement("a");
      menuA.href = `#${href}`;
      menuA.textContent = link;
      
      // Attach an event listener to smoothly scroll with a vertical offset.
      menuA.addEventListener("click", (e) => {
        e.preventDefault();
        // Find the target in the shadow DOM
        const target = this.shadowRoot.querySelector(`#${href}`);
        if (target) {
          const offset = 125; // Change this value to adjust vertical offset in pixels.
  
          // Compute the absolute top position of the target relative to the document.
          const targetRect = target.getBoundingClientRect();
          const absoluteElementTop = targetRect.top + window.pageYOffset;
  
          // Subtract offset so the target isn’t flush against the top.
          const scrollTarget = absoluteElementTop - offset;
  
          window.scrollTo({ top: scrollTarget, behavior: "smooth" });
        }
      });
  
      menuLi.appendChild(menuA);
      this._servicesMenu.appendChild(menuLi);
  
      // Create and set up the content list item:
      const contentLi = document.createElement("li");
      contentLi.id = href; // set the element id for linking
      const headerElem = document.createElement("h3");
      headerElem.innerHTML = `${header} <span id="services--price">${includedInSubscription ? "Included ✓" : `$${price}`}</span><span class="services--per">${per ? per : ""}</span>`;
      contentLi.appendChild(headerElem);
  
      const pElem = document.createElement("p");
      pElem.innerHTML = content;
      contentLi.appendChild(pElem);
  
      this._servicesContent.appendChild(contentLi);
    });
  }
}

customElements.define("services-section", ServicesSection);