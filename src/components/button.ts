import { LitElement, html, css } from 'lit';

export class MyButton extends LitElement {
    static styles = css`
        button {
            background-color: #6200ee;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 4px;
        }
    `;

    render() {
        return html`<button>Click me!</button>`;
    }
}

customElements.define('my-button', MyButton);