// grid3x3-component.js
import { getPresetSheet } from '../presetStyles.js';

class GridComponent extends HTMLElement {
  constructor() {
    super();
    // Attach a shadow DOM in open mode so it can be accessed externally (for example via shadowRoot)
    this.attachShadow({ mode: 'open' });
    this._data = [];
  }

  // Define a setter to pass data (an array of items)
  set data(items) {
    this._data = items;
    this.render();
  }

  get data() {
    return this._data;
  }

  connectedCallback() {
    // Initialize after the element is added to the DOM.
    this.initialize();
  }

  async initialize() {
    // Get the global preset stylesheet.
    const presetSheet = await getPresetSheet();

    // Create and set up the component's local styles.
    const localSheet = new CSSStyleSheet();
    localSheet.replaceSync(`
      .grid {
          width: var(--max-w-full, 100%);

          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 2.5rem;
      }

      .grid-col {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 1rem;
      }

      h3 {
        font-size: var(--text-lg, 1.125rem);
        font-weight: var(--font-semibold, 600);
        color: #121212;
        line-height: 2rem;
      }

      p {
        font-size: var(--text-lg, 1.125rem);
        color: var(--text-gray, #4B5563);
        line-height: 2rem;
      }

      svg {
        background-color: #303030;
        border-radius: 8px;
        color: #FFFFFF;
        height: auto;
        width: 4rem;
        padding: 0.5rem;
      }

      /* md 48rem (768px) */
      @media (min-width: 48rem) {
          .grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
          }
      }
        
      /* lg 64rem (1024px) 
      @media (min-width: 64rem) {
          .grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
          }
      }
      */
    `);

    // Adopt both the global preset and the component-specific stylesheet.
    this.shadowRoot.adoptedStyleSheets = [presetSheet, localSheet];

    // Render the component (if data was already provided, the grid items will be created).
    this.render();
  }

  render() {
    // Clear any previous content in the shadow DOM.
    // (Be cautious with re-rendering if you want to handle updates gracefully.)
    this.shadowRoot.innerHTML = '';

    // Create the grid container.
    const container = document.createElement('div');
    container.className = 'grid';

    // Loop through the data and create grid items.
    this._data.forEach(({ icon, feature, description }) => {
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-col';
      gridItem.innerHTML = `
        ${icon}

        <div>
          <h3>${feature}</h3>
          <p>${description}</p>
        </div>
      `;
      container.appendChild(gridItem);
    });

    // Append the grid container to the shadow root.
    this.shadowRoot.appendChild(container);
  }
}

customElements.define('grid-component', GridComponent);