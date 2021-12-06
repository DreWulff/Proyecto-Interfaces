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

  function ResetGrey() {
    var icons = document.getElementsByClassName("filtered");
    for (var i = 0; i<icons.length; i++){
      icons[i].style.filter = "grayscale(100%)";
    }
  }

  function IconOrange(index, icon) {
    var txt;
    if (icon===1) {
      txt = "comment";
    } else if (icon === 2) {
      txt = "evaluate";
    } else { txt = "read"; }
    var imag = document.getElementById("icon-" + txt + "-" + String(index));
    imag.style.filter = "grayscale(0%)";
  }

  function Comment(event, name_index) {
    var dyn = document.getElementById("right-section");
    var child = dyn.lastElementChild;
    var commsec;
    var nombreNodo;
    var bar;
    if (child != null) {
      if (document.getElementById("icon-comment-" + String(name_index)).style.filter === "grayscale(0%)") {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
        ResetGrey();
      } else {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
        ResetGrey();
        IconOrange(name_index, 1);
        commsec = document.createElement("comment-section");
        dyn.appendChild(commsec);
        nombreNodo = document.getElementById("nombre"+String(name_index));
        bar = document.getElementById("barra");
        bar.innerHTML = nombreNodo.innerHTML + " &gt Comentario";
        document
          .getElementById("save-button")
          .addEventListener("click", Confirmation, false);
        document
          .getElementById("cancel-button")
          .addEventListener("click", CancelComment, false);
        
      }
    } else {
      ResetGrey();
      IconOrange(name_index, 1);
      commsec = document.createElement("comment-section");
      dyn.appendChild(commsec);
      nombreNodo = document.getElementById("nombre"+String(name_index));
      bar = document.getElementById("barra");
      bar.innerHTML = nombreNodo.innerHTML + " &gt Comentario";
      document
        .getElementById("save-button")
        .addEventListener("click", Confirmation, false);
      document
        .getElementById("cancel-button")
        .addEventListener("click", CancelComment, false);
      
    }
  }

  function Evaluate(event, name_index) {
    var dyn = document.getElementById("right-section");
    var child = dyn.lastElementChild;
    var evalsec = document.createElement("evaluate-section");
    var nombreNodo;
    if (child != null) {
      if (document.getElementById("icon-evaluate-" + String(name_index)).style.filter === "grayscale(0%)") {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
        ResetGrey();
      } else {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
        dyn.appendChild(evalsec);
        nombreNodo = document.getElementById("nombre"+String(name_index));
        var line = document.getElementById("barra");
        var nam = document.getElementById("alumno_name");
        line.innerHTML = nombreNodo.innerHTML + " &gt Evaluación";
        nam.innerHTML = nombreNodo.innerHTML;
        
        document
          .getElementById("save-button")
          .addEventListener("click", Confi_Test, false);
        document
          .getElementById("cancel-button")
          .addEventListener("click", Cancel_Test, false);
        ResetGrey();
        IconOrange(name_index, 2);
      }
    } else {
      dyn.appendChild(evalsec);
      nombreNodo = document.getElementById("nombre"+String(name_index));
      var line = document.getElementById("barra");
      line.innerHTML = nombreNodo.innerHTML + " &gt Evaluación";
      var nam = document.getElementById("alumno_name");
      nam.innerHTML = nombreNodo.innerHTML;
      document
          .getElementById("save-button")
          .addEventListener("click", Confi_Test, false);
      document
          .getElementById("cancel-button")
          .addEventListener("click", Cancel_Test, false);
      ResetGrey();
      IconOrange(name_index, 2);
    }
  }

  function Read(event, name_index) {
    var dyn = document.getElementById("right-section");
    var child = dyn.lastElementChild;
    var readsec;
    var nombreNodo;
    var bar;
    if (child != null) {
      if (document.getElementById("read-element") != null) {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
        ResetGrey();
      } else {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
        nombreNodo = document.getElementById("nombre"+String(name_index));
        readsec = document.createElement("read-section");
        dyn.appendChild(readsec);
        bar = document.getElementById("barra");
        bar.innerHTML = nombreNodo.innerHTML + " &gt Reportes " + " &gt Reporte";
        ResetGrey();
        IconOrange(name_index, 3);
      }
    } else {
      nombreNodo = document.getElementById("nombre"+String(name_index));
      readsec = document.createElement("read-section");
      dyn.appendChild(readsec);
      bar = document.getElementById("barra");
      bar.innerHTML = nombreNodo.innerHTML + " &gt Reportes " + " &gt Reporte";
      ResetGrey();
      IconOrange(name_index, 3);
    }
  }

  function ReadList(event, name_index) {
    var dyn = document.getElementById("right-section");
    var child = dyn.lastElementChild;
    var readlist;
    var nombreNodo;
    var bar;
    if (child != null) {
      if (document.getElementById("icon-read-" + String(name_index)).style.filter === "grayscale(0%)") {
        if (document.getElementById("read-list") != null) {
          while (child != null) {
            dyn.removeChild(child);
            child = dyn.lastElementChild;
          }
          ResetGrey();
        } else {
            while (child != null) {
              dyn.removeChild(child);
              child = dyn.lastElementChild;
            }
            nombreNodo = document.getElementById("nombre"+String(name_index));
            readlist = document.createElement("read-list");
            dyn.appendChild(readlist);
            bar = document.getElementById("barra");
            bar.innerHTML = nombreNodo.innerHTML + " &gt Reportes";
            document
              .getElementById("pdf1")
              .addEventListener("click", function() {
                Read(null, name_index);
                // This'll set the `this` value inside of `getSelection` to `self`
            }, false);
            ResetGrey();
            IconOrange(name_index, "read");
        }
      } else {
        while (child != null) {
          dyn.removeChild(child);
          child = dyn.lastElementChild;
        }
        nombreNodo = document.getElementById("nombre"+String(name_index));
        readlist = document.createElement("read-list");
        dyn.appendChild(readlist);
        bar = document.getElementById("barra");
        bar.innerHTML = nombreNodo.innerHTML + " &gt Reportes";
        document
          .getElementById("pdf1")
          .addEventListener("click", function() {
            Read(null, name_index);
            // This'll set the `this` value inside of `getSelection` to `self`
        }, false);
        ResetGrey();
        IconOrange(name_index, "read");
      }
    } else {
      nombreNodo = document.getElementById("nombre"+String(name_index));
      readlist = document.createElement("read-list");
      dyn.appendChild(readlist);
      bar = document.getElementById("barra");
      bar.innerHTML = nombreNodo.innerHTML + " &gt Reportes";
      document
        .getElementById("pdf1")
        .addEventListener("click", function() {
          Read(null, name_index);
          // This'll set the `this` value inside of `getSelection` to `self`
      }, false);
      ResetGrey();
      IconOrange(name_index, "read");
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

  function Confi_Test(){
    if(window.confirm("¿Desea enviar el formulario?")){
      var bx1 = document.getElementsByClassName("R_B");
      for (let index = 0; index < bx1.length; index++) {
        bx1[index].checked = false;
        
      }
    }
  }

  function Cancel_Test(){
    if(window.confirm("¿Desea cancelar el formulario?")){
      var bx1 = document.getElementsByClassName("R_B");
      for (let index = 0; index < bx1.length; index++) {
        bx1[index].checked = false;
        
      }
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
        <div class="float-child">
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
              <comment-icon class="filtered" id="icon-comment-1" onClick={(e) => {Comment(e, 1);}} />
              <evaluate-icon class="filtered" id="icon-evaluate-1" onClick={(e) => {Evaluate(e, 1);}} />
              <read-icon class="filtered" id="icon-read-1" onClick={(e) => {ReadList(e, 1);}} />
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
              <comment-icon class="filtered" id="icon-comment-2" onClick={(e) => {Comment(e, 2);}} />
              <evaluate-icon class="filtered" id="icon-evaluate-2" onClick={(e) => {Evaluate(e, 2);}} />
              <read-icon class="filtered" id="icon-read-2" onClick={(e) => {ReadList(e, 2);}} />
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
              <comment-icon class="filtered" id="icon-comment-3" onClick={(e) => {Comment(e, 3);}} />
              <evaluate-icon class="filtered" id="icon-evaluate-3" onClick={(e) => {Evaluate(e, 3);}} />
              <read-icon class="filtered" id="icon-read-3" onClick={(e) => {ReadList(e, 3);}} />
            </div>
          </div>
        </div>
        <div class="float-child" id="right-section" />
      </div>
    </main>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
