import { LitElement, html } from 'lit-element';

export class Hello extends LitElement {
  render() {
    return html`
      <h1>Hello World</h1>
      <ul>
        ${this.data &&
          this.data.map(
            (v) =>
              html`
                <li>${v}</li>
              `
          )}
      </ul>
    `;
  }

  static get properties() {
    return {
      data: Array
    };
  }

  firstUpdated() {
    fetch(`${CONFIG.API_URL}data`, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => this.data = data);
  }
}

customElements.define('my-hello', Hello);
