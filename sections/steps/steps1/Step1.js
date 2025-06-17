import { getPresetCss } from "../../../js/presetCss.js";
import { getIndexCss } from "../../../js/indexCss.js";

class Step1Component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // Initialize properties so that the render uses them
    this._step = "";
    this._icon = "";
    this._title = "";
    this._description = "";
  }

  connectedCallback() {
    this.init();
  }

  async init() {
    const presetCss = await getPresetCss();
    const indexCss = await getIndexCss();

    const css = new CSSStyleSheet();
    css.replaceSync(`
      .step {
        position: relative;

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 2rem;
      }

      .step--line {
        position: absolute;
        left: 18px;
        top: 3.5rem;
        height: calc(100% - 32px);
        width: 1px;
        background-color: #121212;
      }

      .step--number {
        background-color: #121212;
        border-radius: 8px;
        color: #FFFFFF;
        font-size: var(--text-xl);
        font-weight: var(--text-semibold);
        line-height: var(--text-xl-line-height);
        padding: 0.5rem 1rem;
        transition: all 0.15s ease-in-out;
      }

      .step:hover .step--number {
        background-color: #FFFFFF;
        color: #121212;
      }

      .step--icon {
        width: 2rem;
        height: 2rem;
      }

      .step--title {
        color: #121212;
        font-size: var(--text-xl);
        font-weight: var(--text-semibold);
        line-height: var(--text-xl-line-height);
        margin-top: 1.5rem;
      }
    `);

    this.shadowRoot.adoptedStyleSheets = [presetCss, indexCss, css];

    // Initialize the template with current property values. The render() method
    // will be called by the setters if properties are updated.
    this.render();
  }

  set step(value) {
    this._step = value;
    this.render();
  }

  set icon(value) {
    this._icon = value;
    this.render();
  }

  set title(value) {
    this._title = value;
    this.render();
  }

  set description(value) {
    this._description = value;
    this.render();
  }

  render() {
    if (!this.shadowRoot) return;

    const lineHtml = (this._step !== "5") ? `<span class="step--line" aria-hidden="true"></span>` : "";

    // Populate the template with the current property values.
    this.shadowRoot.innerHTML = `
      <li class="step">
        ${lineHtml}
        <div class="step--number">
          ${this._step}
        </div>

        <div>
          <div class="step--icon">${this._icon || ""}</div>
          <h2 class="step--title">${this._title || ""}</h2>
          <read-more-component text="${this._description || ""}"></read-more-component>
        </div>
      </li>
    `;
  }
}

customElements.define("step1-component", Step1Component);