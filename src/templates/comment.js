class CommSect extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div id="comment-element">
        <div class="float-grandson" id="LineDIV">
          <p id="barra">&gt; Comentario</p>
          <hr />
        </div>
  
        <div class="comment" id="CommentDIV">
          <input
            id="title1"
            placeholder="Título de comentario..."
            ref={textInput}
            style="float: left; margin-left: 13px;"
          />
          <textarea
            id="block1"
            placeholder="Escriba su comentario.."
            rows="5"
            required
          ></textarea>
          <hr />
          <button elevation="2" id="save-button">
            Guardar
          </button>
          <button elevation="2" id="cancel-button">
            Cancelar
          </button>
        </div>
      </div>
      `;
    }
  }

  customElements.define("comment-section", CommSect);