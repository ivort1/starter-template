import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('menu-button')
export class MenuButton extends LitElement {

  @property({ type: String, reflect: true }) barBackgroundColor = '#111111';

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute('barBackgroundColor')) {
      throw new Error('Error: The "backgroundColor" attribute is required for <menu-button>.');
    }
  }

  toggleMenu() {
    const menuButton = this.renderRoot.querySelector('.menu-button');
    menuButton?.classList.toggle('toggle');
  }

  render() {
    return html`
      <link rel="stylesheet" href="/src/components/atoms/menu-button/menu-button.css" />

      <div class="menu-button" @click="${this.toggleMenu}">
        <div id="bar-1" style="background-color: ${this.barBackgroundColor};"></div>
        <div id="bar-2" style="background-color: ${this.barBackgroundColor};"></div>
        <div id="bar-3" style="background-color: ${this.barBackgroundColor};"></div>
      </div>
    `;
  }
}