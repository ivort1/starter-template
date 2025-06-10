import { getPresetCss } from "../../js/presetCss.js";

class SectionComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    // Load the global preset CSS as a constructable style sheet.
    const presetCss = await getPresetCss();

    // Create a component-specific CSSStyleSheet.
    const css = new CSSStyleSheet();
    css.replaceSync(`
      .section {
        margin-inline: auto;
        max-width: var(--max-width, var(--max-w-5xl, 64rem)); /* 1024px */
        padding: 5rem 1rem;
        width: 100%;
      }
    `);

    // Adopt both the global and component styles into the shadow DOM.
    this.shadowRoot.adoptedStyleSheets = [presetCss, css];

    // Create the section container.
    const section = document.createElement("section");
    section.setAttribute("part", "section");
    section.classList.add("section");

    // Create a slot so that any content provided in the light DOM is rendered.
    const slot = document.createElement("slot");
    section.appendChild(slot);

    // Append the section container to the shadow root.
    this.shadowRoot.appendChild(section);
  }
}

customElements.define("section-component", SectionComponent);