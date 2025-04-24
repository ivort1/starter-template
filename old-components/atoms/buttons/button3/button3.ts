import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('button-3')
class Button3 extends LitElement {

    @property({type: String})
    text = 'Button';

    render() {
        return html`
            <link rel="stylesheet" href="/src/components/atoms/buttons/button3/button3.css" />

            <button>${this.text}</button>
        `;
    }
}