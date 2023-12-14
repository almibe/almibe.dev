import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/button/button.js';

//@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`
      <h1>Hello</h1>
      <sl-button>Button</sl-button>
    `
  }

  static styles = css`
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
