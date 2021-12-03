class ReadList extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div display="flex" id="read-list">
        <div class="float-grandson" id="LineDIV">
          <p id="barra">&gt; Comentario</p>
          <hr />
        </div>
        <p class="nombre" id="nombre1">
        <a href="javascript:void(null);" id="pdf1"> Test PDF </a>
        </p>
      </div>
      `;
    }
  }

class ReadSect extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div id="read-element">
        <div class="float-grandson" id="LineDIV">
            <p id="barra">&gt; Comentario</p>
            <hr />
        </div>
      </div>
      `;
    }
  }
  
  customElements.define("read-list", ReadList);
  customElements.define("read-section", ReadSect);