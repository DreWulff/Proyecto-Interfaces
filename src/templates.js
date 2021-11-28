class ReadIcon extends HTMLElement {
  //constructor() {
  //  super();
  //}

  connectedCallback() {
    this.innerHTML = `
    <input
    class="icon"
    type="image"
    src="https://cdn.discordapp.com/attachments/883139230975545375/913919410492813322/Captura1.PNG"
    alt="pog"
    />`;
  }
}

class EvalIcon extends HTMLElement {
  //constructor() {
  //  super();
  //}

  connectedCallback() {
    this.innerHTML = `
    <input
    class="icon"
    type="image"
    src="https://cdn.discordapp.com/attachments/883139230975545375/913918864126005258/Captura.PNG"
    alt="pog"
    />`;
  }
}

class CommIcon extends HTMLElement {
  //constructor() {
  //  super();
  //}

  connectedCallback() {
    this.innerHTML = `
    <input
    class="icon"
    type="image"
    src="https://cdn.discordapp.com/attachments/883139230975545375/913920065106243665/Captura2.PNG"
    alt="pog"
    />`;
  }
}

class CommSect extends HTMLElement {
  //constructor() {
  //  super();
  //}

  connectedCallback() {
    this.innerHTML = `
    <div>
    <div class="float-grandson" id="LineDIV">
      <p id="barra">&gt; Comentario</p>
      <hr />
    </div>

    <div class="comment" id="CommentDIV">
      <wired-input
        id="title1"
        placeholder="Título de comentario..."
        ref={textInput}
      />
      <textarea
        id="block1"
        placeholder="Escriba su comentario.."
        rows="5"
        required
      ></textarea>
      <hr />
      <wired-button elevation="2" onClick={Confirmation}>
        Guardar
      </wired-button>
      <wired-button elevation="2" onClick={CancelComment}>
        Cancelar
      </wired-button>
    </div>
  </div>
    `;
  }
}

customElements.define("comment-icon", CommIcon);
customElements.define("evaluate-icon", EvalIcon);
customElements.define("read-icon", ReadIcon);
customElements.define("comment-section", CommSect);
