// menu-button.ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('menu-button')
export class MenuButton extends LitElement {
  // The barsColor attribute is already here...
  @property({ type: String, reflect: true }) barsColor = '#111111';
  // New property for size. Default to 40px, but it can be overwritten.
  @property({ type: String, reflect: true }) size = '40px';

  static styles = css`
    :host {
      /* Default custom properties. These can be overridden by inline styles or attributes. */
      --menu-button-size: 40px;
      --menu-button-padding: 8px;
      --menu-button-gap: 15px;
      --menu-button-bar-height: 2px;
      --menu-button-bar-bg: #111111;
    }

    .menu-button {
    background-color: steelblue;
  box-sizing: border-box;
  border: solid 5px #FFFFFF;
  border-radius: 50px;
  background-color: blue;
      cursor: pointer;
      /* Use the size variable for width (and you could set height accordingly if needed) */
      width: var(--menu-button-size);
      padding: var(--menu-button-padding);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--menu-button-gap);
    }

    .menu-button div {
      background-color: var(--menu-button-bar-bg);
      height: var(--menu-button-bar-height);
      transition: all 0.3s ease;
      width: 100%;
    }

    /* Toggle animation */
    .toggle #bar-1 {
      transform: rotate(-45deg) translate(-5px, 4px);
    }

    .toggle #bar-2 {
      opacity: 0;
    }

    .toggle #bar-3 {
      transform: rotate(45deg) translate(-5px, -5px);
    }
  `;

  // Update the host’s style based on reactive properties.
  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('barsColor')) {
      // Update the custom property for bar color.
      this.style.setProperty('--menu-button-bar-bg', this.barsColor);
    }
    if (changedProperties.has('size')) {
      // Update the custom property for size.
      this.style.setProperty('--menu-button-size', this.size);
    }
  }

  toggleMenu() {
    const menuButton = this.renderRoot.querySelector('.menu-button');
    menuButton?.classList.toggle('toggle');
  }

  render() {
    return html`
      <div class="menu-button" @click="${this.toggleMenu}">
        <div id="bar-1"></div>
        <div id="bar-2"></div>
        <div id="bar-3"></div>
      </div>
    `;
  }
}