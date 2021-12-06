class ReadList extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div display="flex" id="read-list">
        <div class="float-grandson" id="LineDIV">
          <p id="barra">&gt; Comentario</p>
          <hr />
        </div>
        <p class="nombre" id="nombre1">
        <a href="javascript:void(null);" id="pdf1"> Reporte 05/12/2021 </a>
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
        <img
            src="https://cdn.discordapp.com/attachments/883139230975545375/917126580873089084/evapdf-1.png"
            alt="pdf"
            width="90%"
          />
      </div>
      `;
    }
  }
  
  customElements.define("read-list", ReadList);
  customElements.define("read-section", ReadSect);