class ReadIcon extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <input
            class="icon"
            type="image"
            src="https://cdn.discordapp.com/attachments/883139230975545375/917187386037903400/Captura.PNG"
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
            src="https://cdn.discordapp.com/attachments/883139230975545375/917187386255999016/Captura1.PNG"
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
            src="https://cdn.discordapp.com/attachments/883139230975545375/917187386465734696/2.PNG"
            alt="pog"
        />`;
    }
}

customElements.define("comment-icon", CommIcon);
customElements.define("evaluate-icon", EvalIcon);
customElements.define("read-icon", ReadIcon);