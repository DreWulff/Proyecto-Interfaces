import React, { useState } from "react";
import ReactDOM from "react-dom";
import "wired-elements";
import "./styles.css";
import "./templates/comment.js";
import "./templates/evaluate.js";
import "./templates/read.js";
import "./templates/icons.js";
import samplePDF from "./pdfs/evapdf.pdf";
import SinglePagePDFViewer from "./templates/single-page.js";


function App() {
  let textInput = React.createRef();

  function Comment() {
    var dyn = document.getElementById("right-section");
    var child = dyn.lastElementChild;
    var commsec;
    var nombreNodo;
    var comment;
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
        commsec = document.createElement("comment-section");
        dyn.appendChild(commsec);
        nombreNodo = document.getElementById("nombre1");
        comment = document.getElementById("barra");
        comment.innerHTML = nombreNodo.innerHTML + " &gt Comentario";
        document
          .getElementById("save-button")
          .addEventListener("click", Confirmation, false);
        document
          .getElementById("cancel-button")
          .addEventListener("click", CancelComment, false);
      }
    } else {
      commsec = document.createElement("comment-section");
      dyn.appendChild(commsec);
      nombreNodo = document.getElementById("nombre1");
      comment = document.getElementById("barra");
      comment.innerHTML = nombreNodo.innerHTML + " &gt Comentario";
      document
        .getElementById("save-button")
        .addEventListener("click", Confirmation, false);
      document
        .getElementById("cancel-button")
        .addEventListener("click", CancelComment, false);
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
    var readsec;
    var pdf_reader;
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
        readsec = document.createElement("read-section");
        pdf_reader = document.createElement("SinglePagePDFViewer");
        pdf_reader.pdf = {samplePDF};
        readsec.appendChild(pdf_reader);
        dyn.appendChild(readsec);
        
      }
    } else {
      readsec = document.createElement("read-section");
      pdf_reader = document.createElement("SinglePagePDFViewer");
      pdf_reader.pdf = {samplePDF};
      readsec.appendChild(pdf_reader);
      dyn.appendChild(readsec);
    }
  }

  function ReadList() {
    var dyn = document.getElementById("right-section");
    var child = dyn.lastElementChild;
    var readlist;
    if (child != null) {
      if (document.getElementById("read-list") != null) {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
      } else {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
        readlist = document.createElement("read-list");
        dyn.appendChild(readlist);
        document
          .getElementById("pdf1")
          .addEventListener("click", Read, false);
      }
    } else {
      readlist = document.createElement("read-list");
      dyn.appendChild(readlist);
      document
        .getElementById("pdf1")
        .addEventListener("click", Read, false);
    }
  }

  function CleanBox() {
    var caj2 = document.getElementById("block1");
    var caj1 = document.getElementById("title1");
    caj1.value = "";
    caj2.value = "";
  }

  function Confirmation() {
    if(window.confirm("¿Desea enviar comentario?")){
      CleanBox();  
    }
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
                {" "}
                Sebastian Araya
              </p>
              <comment-icon onClick={Comment} />
              <evaluate-icon onClick={Evaluate} />
              <read-icon onClick={ReadList} />
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
              <p class="nombre" id="nombre2">
                {" "}
                Victor Morales
              </p>
              <comment-icon />
              <evaluate-icon onClick={Evaluate} />
              <read-icon onClick={ReadList} />
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
              <p class="nombre" id="nombre3">
                {" "}
                Andres Wulff
              </p>
              <comment-icon />
              <evaluate-icon onClick={Evaluate} />
              <read-icon onClick={ReadList} />
            </div>
          </div>
        </div>
        <SinglePagePDFViewer pdf={samplePDF} />
        <div class="float-child-right" id="right-section" />
      </div>
    </main>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
