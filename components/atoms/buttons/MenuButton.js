export class MenuButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            --menu-button-padding: 0 2rem;
            --menu-button-height: 125px;
            --menu-button-width: 60px;
            --bar-height: 7px;
            --bar-spacing: 0.75rem;
            --translate-offset: calc(var(--bar-spacing) + var(--bar-height));
          }
  
          .menu-button {
            cursor: pointer;
            height: var(--menu-button-height);
            padding: var(--menu-button-padding);
            width: var(--menu-button-width);

            /* Flexbox */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: var(--bar-spacing);
          }
  
          .menu-button div {
            border-radius: 25px;
            width: 100%;
            height: var(--bar-height);
            background-color: #FFF;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }
  
          .toggle #bar-1 {
            transform: translateY(var(--translate-offset)) rotate(45deg);
          }
  
          .toggle #bar-2 {
            opacity: 0;
          }
  
          .toggle #bar-3 {
            transform: translateY(calc(-1 * var(--translate-offset))) rotate(-45deg);
          }
        </style>
  
        <div class="menu-button">
          <div id="bar-1"></div>
          <div id="bar-2"></div>
          <div id="bar-3"></div>
        </div>
      `;
  
      this.shadowRoot.querySelector('.menu-button')
        .addEventListener('click', () => this.toggleMenu());
    }
  
    toggleMenu() {
      const menuButton = this.shadowRoot.querySelector('.menu-button');
      menuButton?.classList.toggle('toggle');
    }
  }
  
  customElements.define('menu-button', MenuButton);
  