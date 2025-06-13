import { getPresetCss } from "../../../js/presetCss.js";
import { getIndexCss } from "../../../js/indexCss.js";

class Steps1Section extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._steps = [];
  }

  get steps() {
    return this._steps;
  }

  set steps(value) {
    if (Array.isArray(value)) {
      this._steps = value;
      this.renderSteps();
    }
  }

  connectedCallback() {
    this.init();
  }

  async init() {
    const presetCss = await getPresetCss();
    const indexCss = await getIndexCss();

    const css = new CSSStyleSheet();
    css.replaceSync(`
      section-component::part(section) {
        background-color: var(--color-accent-light);
        position: relative;
      }

      #divider {
        margin: 0 auto;
        max-width: var(--max-w-5xl);
        transform: rotate(180deg);
        width: 100%;
      }

      section-paragraph::part(section-paragraph) {
        color: var(--color-gray-light);
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }

      /* md 48rem (768px) */
      @media (min-width: 48rem) {
        section-component::part(section) {
          padding: 0 8rem 3rem 8rem;
        }
      }
    `);

    this.shadowRoot.adoptedStyleSheets = [presetCss, indexCss, css];

    // Set up a static template with slots for header, subheader, paragraph, 
    // and an unordered list for the step items.
    const template = document.createElement("template");
    template.innerHTML = `
      <svg  id="divider" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill" fill="var(--color-accent-light)" fill-opacity="1"></path></svg>
      <section-component>

          <section-header><slot name="header"></slot></section-header>
          <section-subheader><slot name="subheader"></slot></section-subheader>
          <section-paragraph><slot name="paragraph"></slot></section-paragraph>
          <ul id="steps--list"></ul>
      </section-component>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Render steps if the steps data was set before initialization
    if (this._steps.length) {
      this.renderSteps();
    }
  }

  renderSteps() {
    const stepsList = this.shadowRoot.getElementById("steps--list");

    // Clear any previous content
    stepsList.innerHTML = "";

    // Create a <step1-component> for each step in the steps array.
    this._steps.forEach(({ step, icon, title, description }) => {
      // Create a new step component.
      const stepComponent = document.createElement("step1-component");

      // Pass data as properties (this works best when the data is not just a string)
      stepComponent.step = step;
      stepComponent.icon = icon;
      stepComponent.title = title;
      stepComponent.description = description;
      

      // Append the newly created step component to the list.
      stepsList.appendChild(stepComponent);
    });
  }
}

customElements.define("steps1-section", Steps1Section);
