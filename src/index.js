import React from "react";
import ReactDOM from "react-dom";
import "wired-elements";
import "./styles.css";
import "./templates.js";

function App() {
  let textInput = React.createRef();
  function myFunction() {
    var dyn = document.getElementById("right-section");
    if (dyn.lastElementChild != null) {
      var child = dyn.lastElementChild; 
      while (child) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
      }
    } else {
      var commsec = document.createElement("comment-section");
      dyn.appendChild(commsec);
      //var nombreNodo = document.getElementById("nombre1");
      //var comment = document.getElementById("barra");
      //comment.innerHTML = nombreNodo.innerHTML + " &gt Comentario";
    }
    //var x = document.getElementById("CommentDIV");
    //var y = document.getElementById("LineDIV");
    //var z = document.getElementById("block1");
    //if (x.style.display === "none") {
    //  x.style.display = "block";
    //  y.style.display = "block";
    //  z.style.display = "block";
    //} else {
    //  x.style.display = "none";
    //  y.style.display = "none";
    //  z.style.display = "none";
    //}
  }

  function CleanBox() {
    var caj2 = document.getElementById("block1");
    var caj1 = document.getElementById("title1");
    caj1.value = "";
    caj2.value = "";
  }

  function Confirmation() {
    alert("Comentario enviado");
    CleanBox();
  }

  function CancelComment() {
    if (window.confirm("¿Desea cancelar comentario?")) {
      CleanBox();
    }
  }

  function ChangeLineComment() {
    myFunction();
    //var nombreNodo = document.getElementById("nombre1");
    //var comment = document.getElementById("barra");
    //comment.innerHTML = nombreNodo.innerHTML + " &gt Comentario";
  }
  return (
    <main>
      <div class="float-title-container">
        <div>
          Sistema de Prácticas
          <img
            class="avatar-sup"
            src="https://cdn.discordapp.com/attachments/883139230975545375/913906855825276969/Jaime.png"
            alt="jaime"
            width="60px"
          />
        </div>
      </div>
      <div class="float-container">
        <div class="float-child-left">
          <div display="flex">
            <div class="inline-block-child" id="Estudiante1">
              <img
                class="avatar-int"
                vertical-align="middle"
                display="inline-block"
                src="https://i1.sndcdn.com/artworks-000666620167-6kjqim-t500x500.jpg"
                alt="alternatetext"
                width="50px"
              />
              <p class="nombre" id="nombre1">
                Sebastian Araya
              </p>
              <comment-icon onClick={ChangeLineComment}></comment-icon>
              <evaluate-icon />
              <read-icon />
            </div>
          </div>
          <div display="flex">
            <div class="inline-block-child">
              <img
                class="avatar-int"
                vertical-align="middle"
                display="inline-block"
                src="https://i1.sndcdn.com/artworks-000666620167-6kjqim-t500x500.jpg"
                alt="alternatetext"
                width="50px"
              />
              <p class="nombre"> Victor Morales</p>
              <comment-icon />
              <evaluate-icon />
              <read-icon />
            </div>
          </div>
          <div display="flex">
            <div class="inline-block-child">
              <img
                class="avatar-int"
                vertical-align="middle"
                display="inline-block"
                src="https://i1.sndcdn.com/artworks-000666620167-6kjqim-t500x500.jpg"
                alt="alternatetext"
                width="50px"
              />
              <p class="nombre"> Andres Wulff</p>
              <comment-icon />
              <evaluate-icon />
              <read-icon />
            </div>
          </div>
        </div>

        <div class="float-child-right" id="right-section">
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
        </div>
      </div>
    </main>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
