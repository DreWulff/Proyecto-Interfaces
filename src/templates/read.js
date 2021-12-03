class ReadFiles extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div id="read-element" />
      `;
    }
  }

class ReadSect extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div id="read-element" />
      `;
    }
  }
  
  customElements.define("read-files", ReadFiles);
  customElements.define("read-section", ReadSect);