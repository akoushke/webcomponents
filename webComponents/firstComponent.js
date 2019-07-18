export default class FirstWebComponent extends HTMLElement {
  constructor() {
		super();
		// Observe all the changes on attributes and invoke the mount function right way!
    this.observer = new MutationObserver(() => this.mount());
    this.observer.observe(this, {attributes: true});
  }

  connectedCallback() {
    this.mount();
  }

  mount() {
		this.innerHTML = '<h1> Hello Everything! </h1>';
	}
  
  disconnectedCallback() {
    this.observer.disconnect();
  }	
}

window.customElements.define('my-first-web-component', FirstWebComponent);