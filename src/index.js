import React from "react";
import ReactDOM from "react-dom";
import "wired-elements";
import "./styles.css";
import "./templates.js";

/* eslint-disable no-unused-vars */
function App() {
  let textInput = React.createRef();

  function Comment() {
    var dyn = document.getElementById("right-section");
    var child = dyn.lastElementChild;
    var commsec = document.createElement("comment-section");
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
        var nombreNodo = document.getElementById("nombre1");
        var comment = document.getElementById("barra");
        comment.innerHTML = nombreNodo.innerHTML + " &gt Comentario";
      }
    } else {
      dyn.appendChild(commsec);
      var nombreNodo = document.getElementById("nombre1");
      var comment = document.getElementById("barra");
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
              <p class="nombre" id="nombre1">
                Sebastian Araya
              </p>
              <comment-icon onClick={Comment} />
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

        <div class="float-child-right" id="right-section" />
      </div>
    </main>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
