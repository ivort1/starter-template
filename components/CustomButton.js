export class CustomButton extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute("text") || "";
    const ahref = this.getAttribute("ahref") || "#";
    const icon = this.getAttribute("icon") || "";

    this.innerHTML = `
      <a href="${ahref}" class="button">
        ${icon} ${text}
      </a>
    `;
  }
}

customElements.define("custom-button", CustomButton);
