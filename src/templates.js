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
        />
        <textarea
          id="block1"
          placeholder="Escriba su comentario.."
          rows="5"
          required
        ></textarea>
        <hr />
        <button elevation="2" onClick={Confirmation}>
          Guardar
        </button>
        <button elevation="2" onClick={CancelComment}>
          Cancelar
        </button>
      </div>
    </div>
    `;
  }
}

class EvalSect extends HTMLElement {
  //constructor() {
  //  super();
  //}

  connectedCallback() {
    this.innerHTML = `
    <div id="evaluate-element">
      Nothing to see here. Move along.
    </div>
    `;
  }
}

class ReadSect extends HTMLElement {
  //constructor() {
  //  super();
  //}

  connectedCallback() {
    this.innerHTML = `
    <div id="read-element">
      Nothing to see here. Move along.
    </div>
    `;
  }
}

customElements.define("comment-icon", CommIcon);
customElements.define("evaluate-icon", EvalIcon);
customElements.define("read-icon", ReadIcon);
customElements.define("comment-section", CommSect);
customElements.define("evaluate-section", EvalSect);
customElements.define("read-section", ReadSect);
