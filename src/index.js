import React from "react";
import ReactDOM from "react-dom";
import "wired-elements";
import "./styles.css";
import "./templates.js";

function App() {
  let textInput = React.createRef();

  function Comment(name_index) {
    var dyn = document.getElementById("right-section");
    var child = dyn.lastElementChild;
    var commsec = document.createElement("comment-section");
    var nombreNodo;
    if (name_index === 1) {
      nombreNodo = document.getElementById("nombre1");
    } elif (name_index === 2) {
      nombreNodo = document.getElementById("nombre2");
    } else {
      nombreNodo = document.getElementById("nombre3");
    }
    if (child != null) {
      if (document.getElementById("comment-element") != null) {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
      } else {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
        dyn.appendChild(commsec);
        comment = document.getElementById("barra");
        comment.innerHTML = nombreNodo.innerHTML + " &gt Comentario";
      }
    } else {
      dyn.appendChild(commsec);
      comment = document.getElementById("barra");
      comment.innerHTML = nombreNodo.innerHTML + " &gt Comentario";
    }
  }

  function Evaluate() {
    var dyn = document.getElementById("right-section");
    var child = dyn.lastElementChild;
    var evalsec = document.createElement("evaluate-section");
    if (child != null) {
      if (document.getElementById("evaluate-element") != null) {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
      } else {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
        dyn.appendChild(evalsec);
      }
    } else {
      dyn.appendChild(evalsec);
    }
  }

  function Read() {
    var dyn = document.getElementById("right-section");
    var child = dyn.lastElementChild;
    var readsec = document.createElement("read-section");
    if (child != null) {
      if (document.getElementById("read-element") != null) {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
      } else {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
        dyn.appendChild(readsec);
      }
    } else {
      dyn.appendChild(readsec);
    }
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
              <p class="nombre" id="nombre1"> Sebastian Araya</p>
              <comment-icon value="1" onClick="Comment(this.value)" />
              <evaluate-icon onClick={Evaluate} />
              <read-icon onClick={Read} />
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
              <p class="nombre" id="nombre2"> Victor Morales</p>
              <comment-icon value="2" onClick="Comment(this.value)" />
              <evaluate-icon onClick={Evaluate} />
              <read-icon onClick={Read} />
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
              <p class="nombre" id="nombre3"> Andres Wulff</p>
              <comment-icon value="3" onClick="Comment(this.value)" />
              <evaluate-icon onClick={Evaluate} />
              <read-icon onClick={Read} />
            </div>
          </div>
        </div>

        <div class="float-child-right" id="right-section" />
      </div>
    </main>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
