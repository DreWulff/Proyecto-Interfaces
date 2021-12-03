class ReadIcon extends HTMLElement {
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

customElements.define("comment-icon", CommIcon);
customElements.define("evaluate-icon", EvalIcon);
customElements.define("read-icon", ReadIcon);