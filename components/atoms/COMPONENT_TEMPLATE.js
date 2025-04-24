export class /*COMPONENT NAME*/ extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
            
            <style>
            <!----------END OF CSS----------->

            
        `;
    }
}

customElements.define('/*component-name*/', /*COMPONENT NAME*/);