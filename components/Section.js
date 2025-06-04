class SectionComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {

    const localSheet = new CSSStyleSheet();
    localSheet.replaceSync(`
      .section {
        margin-inline: auto;
        max-width: 80rem;
        padding: 4rem 1rem;
        width: 100%;
      }
    `);

    // Adopt both the preset and local styles into the shadow DOM
    this.shadowRoot.adoptedStyleSheets = [localSheet];

    // Create the component structure
    const container = document.createElement("section");
    container.classList.add("section");

    // Create and attach a slot for any child content
    const slot = document.createElement("slot");
    container.appendChild(slot);

    this.shadowRoot.appendChild(container);
  }
}

customElements.define("section-component", SectionComponent);