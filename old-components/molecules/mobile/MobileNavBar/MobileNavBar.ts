import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// Atoms
import '../../../atoms/menu-button/menu-button.js';
import '../../../atoms/buttons/button3/button3.js';

@customElement('mobile-nav-bar')
export class MobileNavBar extends LitElement {

  render() {
    return html`
      <link rel="stylesheet" href="/src/components/molecules/mobile/MobileNavBar/MobileNavBar.css" />

      <div class="mobile-nav-bar">

        <button-3 text="Book an appointment"></button-3>
        <menu-button size="60px" barsColor="#FFFFFF"></menu-button>
      </div>
    `;
  }
}