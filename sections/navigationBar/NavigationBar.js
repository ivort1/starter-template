import { getPresetCss } from "../../js/presetCss.js";
import { getIndexCss } from "../../js/indexCss.js";

class NavigationBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Bind once here for stable reference
    this.handleToggle = this.handleToggle.bind(this);
  }

  async connectedCallback() {
    await this.init();
  }

  disconnectedCallback() {
    if (this.toggleBtn) {
      this.toggleBtn.removeEventListener('click', this.handleToggle);
    }
  }

  handleToggle() {
    this.toggleBtn.classList.toggle('toggle');
    
    const expanded = this.toggleBtn.classList.contains('toggle');
    this.toggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    
    if (expanded) {
      this.links.style.marginTop = '2rem';
      this.links.style.height = this.links.scrollHeight + 'px';
      
      this.listItems.forEach((li, index) => {
        li.style.animation = `mobileNavLinkFadeIn 0.3s ease forwards ${index / 5 + 0.15}s`;
      });
    } else {
      this.links.style.marginTop = '0';
      this.links.style.height = '0';
      
      this.listItems.forEach(li => {
        li.style.animation = '';
      });
    }
  }

  async init() {
    try {
      const presetCss = await getPresetCss();
      const indexCss = await getIndexCss();

      const css = new CSSStyleSheet();
      css.replaceSync(`
        :host {
            display: block;
            position: sticky;
            top: 0;
            width: 100%;
            z-index: 999;
        }
        
        nav {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px); /* Safari support */
            /* box-shadow: 0 5px 15px -12px rgba(0,0,0,0.25); */
            width: 100%;
        }
        
        section-component::part(section) {
          max-width: var(--max-w-7xl);

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease-in-out;
        }

        #content {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        a#title {
          width: 100%;
          font-size: 1.5rem;
          font-weight: 500;
          text-decoration: none;
          color: inherit;
        }

        button#toggle-menu {
          background:rgb(245, 245, 245);
          border-radius: 25px;
          cursor: pointer;
          border-radius: 0.75rem;
          padding: 1rem 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6px;
          border: none;
          outline: none;
        }

        #toggle-menu > div {
          background-color: var(--color-gray-light);
          height: 2px;
          border-radius: 25px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        #bar-1, #bar-3 {
          width: 1.5rem; /* 6 * 0.25rem */
        }
        #bar-2 {
          width: 2rem; /* 8 * 0.25rem */
        }

        button.toggle #bar-1 {
          transform: rotate(-45deg) translate(-5px, 5px);
        }
        button.toggle #bar-2 {
          opacity: 0;
        }
        button.toggle #bar-3 {
          transform: rotate(45deg) translate(-6px, -6px);
        }

        #links {
          overflow: hidden;
          height: 0;
          width: 100%;
          margin-top: 0;
          transition: height 0.5s ease, margin-top 0.5s ease;
        }

        ul {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 1.5rem;
        }

        li {
          opacity: 0;
        }

        li:hover {
          color: var(--accent);
        }

        a {
            font-size: var(--text-sm);
            font-weight: var(--text-semibold);
            line-height: var(--text-sm-line-height);
            text-transform: capitalize;
            transition: color 0.3s ease-in-out;
        }

        a:hover {
            color: var(--color-accent-hover);
        }

        @keyframes mobileNavLinkFadeIn {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* lg: 64rem (1024px) */
        @media (min-width: 1024px) {
          section-component::part(section) {
            flex-direction: row;
          }

          #content {
            width: 33.3333%;
            margin-bottom: 0;
          }
          #links {
            height: auto !important;
            margin-top: 0 !important;
            overflow: visible;
            width: auto;
          }
          ul {
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            gap: 3rem;
          }
          li {
            opacity: 1 !important;
          }
          button#toggle-menu {
            display: none;
          }

          a {
            font-size: var(--text-lg);
            lineheight: var(--text-lg-line-height);
            }
        }
      `);

      this.shadowRoot.adoptedStyleSheets = [presetCss, indexCss, css];

      this.shadowRoot.innerHTML = `
        <nav id="mobile-nav">
          <section-component>
            <div id="content">
              <a id="title" href="/">Golden Bear Digital</a>
              <button id="toggle-menu" aria-expanded="false" aria-label="Toggle menu">
                <div id="bar-1"></div>
                <div id="bar-2"></div>
                <div id="bar-3"></div>
              </button>
            </div>

            <div id="links">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#what-we-do">Services</a></li>
                <li><a href="/ourwork">Our Work</a></li>
                <li><a href="/#pricing">Pricing</a></li>
                <li><a href="/faqs">FAQs</a></li>
                <li><a href="/contactus">Contact Us</a></li>
              </ul>
            </div>
          </section-component>
        </nav>
      `;

      this.toggleBtn = this.shadowRoot.getElementById('toggle-menu');
      this.links = this.shadowRoot.getElementById('links');
      this.listItems = this.links.querySelectorAll('li');

      this.toggleBtn.addEventListener('click', this.handleToggle);
    } catch (error) {
      console.error("Error initializing NavigationBar: ", error);
    }
  }
}

customElements.define("navigation-bar", NavigationBar);