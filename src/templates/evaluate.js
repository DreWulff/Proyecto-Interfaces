class EvalSect extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div id="eval-element">
      <div class="float-grandson" id="LineDIV">
        <p id="barra">&gt; Comentario</p>
        <hr />
      </div>
  
      <div id="eval">
          <h3>Evaluación personal</h3>
          <p id = "alumno_name">NAME</p>
          <!-- Section 1 -->
          <fieldset>
              <legend style="text-align:left;">1. Capacidad</legend>
              <p class="definition">Mide la agilidad mental y la
              facilidad para aceptar nuevas
              tareas.
              </p>
              <div id="checkboxes">
                  <table class="notas">
                      <tr>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id1">1</label>
                          <input type="radio" name="radio1" id="my_radio_button_id1" class = "R_B" />
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id2">2</label>
                          <input type="radio" name="radio1" id="my_radio_button_id2" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">3</label>
                          <input type="radio" name="radio1" id="my_radio_button_id3" class = "R_B" />
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">4</label>
                          <input type="radio" name="radio1" id="my_radio_button_id3" class = "R_B" />
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">5</label>
                          <input type="radio" name="radio1" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">6</label>
                          <input type="radio" name="radio1" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">7</label>
                          <input type="radio" name="radio1" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">8</label>
                          <input type="radio" name="radio1" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">9</label>
                          <input type="radio" name="radio1" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">10</label>
                          <input type="radio" name="radio1" id="my_radio_button_id3" class = "R_B" checked/>
                          </div>
                      </th>
                      </tr>
                      <tr>
                          <td>Necesita ayuda detallada para realizar
                          un trabajo.</td>
                          <td>Necesita cantidad media de ayuda.
                          Aprende metódicamente.</td>
                          <td>Necesita poca ayuda para efectuar un
                          trabajo.</td>
                          <td>Aprende pronto, rara vez necesita
                          ayuda.</td>
  
                      </tr>
                  </table>
              </div>
          </fieldset>
  
          <!-- Section 2 -->
          <fieldset>
              <legend>2. Confianza</legend>
              <p class="definition">Mide si completa u trabajo con
              constancia y precisión
              </p>
              <div id="checkboxes">
                  <table class="notas">
                      <tr>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id1">1</label>
                          <input type="radio" name="radio2" id="my_radio_button_id1" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id2">2</label>
                          <input type="radio" name="radio2" id="my_radio_button_id2" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">3</label>
                          <input type="radio" name="radio2" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">4</label>
                          <input type="radio" name="radio2" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">5</label>
                          <input type="radio" name="radio2" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">6</label>
                          <input type="radio" name="radio2" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">7</label>
                          <input type="radio" name="radio2" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">8</label>
                          <input type="radio" name="radio2" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">9</label>
                          <input type="radio" name="radio2" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">10</label>
                          <input type="radio" name="radio2" id="my_radio_button_id3" class = "R_B" checked/>
                          </div>
                      </th>
                      </tr>
                      <tr>
                          <td>Comúnmente termina un trabajo.
                          Necesita vigilancia permanente para
                          evitar errores frecuentes</td>
                          <td>Generalmente completa un trabajo,
                          necesita vigilancia para evitar uno que
                          otro error.
                          </td>
                          <td>Completa sus trabajos. Rara vez
                          comente errores. Generalmente revisa
                          su propio trabajo.</td>
                          <td>Completa sus trabajos con precisión y
                          buen criterio. Siempre revisa su
                          propio trabajo.
                          </td>
  
                      </tr>
                  </table>
              </div>
          </fieldset>
  
          <!-- Section 3 -->
          <fieldset>
              <legend>3. Aplicación O Empeño</legend>
              <p class="definition">Mide la cantidad de errores y la
              atención que presta al trabajo.            
              </p>
              <div id="checkboxes">
                  <table class="notas">
                      <tr>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id1">1</label>
                          <input type="radio" name="radio3" id="my_radio_button_id1" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id2">2</label>
                          <input type="radio" name="radio3" id="my_radio_button_id2" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">3</label>
                          <input type="radio" name="radio3" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">4</label>
                          <input type="radio" name="radio3" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">5</label>
                          <input type="radio" name="radio3" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">6</label>
                          <input type="radio" name="radio3" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">7</label>
                          <input type="radio" name="radio3" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">8</label>
                          <input type="radio" name="radio3" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">9</label>
                          <input type="radio" name="radio3" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">10</label>
                          <input type="radio" name="radio3" id="my_radio_button_id3" class = "R_B" checked/>
                          </div>
                      </th>
                      </tr>
                      <tr>
                          <td>Necesita supervisión permanente par
                          que preste atención al trabajo. 
                          </td>
                          <td>Trabaja irregularmente. Normalmente
                          presta atención al trabajo.
                          </td>
                          <td>Generalmente pone esfuerzo y
                          atención. </td>
                          <td>Siempre pone esfuerzo, contenido y
                          muy cuidadosa atención.                        
                          </td>
  
                      </tr>
                  </table>
              </div>
          </fieldset>
  
          <!-- Section 4 -->
          <fieldset>
              <legend>4. Adaptibilidad</legend>
              <p class="definition">Mide la facultad para adaptarse
              a nuevas circunstancias.            
              </p>
              <div id="checkboxes">
                  <table class="notas">
                      <tr>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id1">1</label>
                          <input type="radio" name="radio4" id="my_radio_button_id1" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id2">2</label>
                          <input type="radio" name="radio4" id="my_radio_button_id2" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">3</label>
                          <input type="radio" name="radio4" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">4</label>
                          <input type="radio" name="radio4" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">5</label>
                          <input type="radio" name="radio4" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">6</label>
                          <input type="radio" name="radio4" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">7</label>
                          <input type="radio" name="radio4" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">8</label>
                          <input type="radio" name="radio4" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">9</label>
                          <input type="radio" name="radio4" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">10</label>
                          <input type="radio" name="radio4" id="my_radio_button_id3" class = "R_B" checked/>
                          </div>
                      </th>
                      </tr>
                      <tr>
                          <td>Se adapta con vacilación y resistencia.
                          </td>
                          <td>Generalmente se adapta pero con
                          dificultad.
                          </td>
                          <td>Se adapta a diversas circunstancias
                          con poca dificultad.
                           </td>
                          <td>Cambia fácilmente y con poco
                          esfuerzo.</td>
                      </tr>
                  </table>
              </div>
          </fieldset>
  
          <!-- Section 5 -->
          <fieldset>
              <legend>5. Iniciativa</legend>
              <p class="definition">Mide el trabajo que pueda
              hacerse sin instrucciones concretas.            
              </p>
              <div id="checkboxes">
                  <table class="notas">
                      <tr>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id1">1</label>
                          <input type="radio" name="radio5" id="my_radio_button_id1" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id2">2</label>
                          <input type="radio" name="radio5" id="my_radio_button_id2" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">3</label>
                          <input type="radio" name="radio5" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">4</label>
                          <input type="radio" name="radio5" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">5</label>
                          <input type="radio" name="radio5" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">6</label>
                          <input type="radio" name="radio5" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">7</label>
                          <input type="radio" name="radio5" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">8</label>
                          <input type="radio" name="radio5" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">9</label>
                          <input type="radio" name="radio5" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">10</label>
                          <input type="radio" name="radio5" id="my_radio_button_id3" class = "R_B" checked/>
                          </div>
                      </th>
                      </tr>
                      <tr>
                          <td>Espera que le asignen trabajo y le
                          enseñen como buscarlo.</td>
                          <td>Termina sus tareas pero se atiene a la
                          ayuda ajena.                        
                          </td>
                          <td>Emprende sus trabajos hábilmente y como se 
                          necesita. 
                           </td>
                          <td>Desempeña el trabajo sin preguntar y
                          hacer más de lo que comúnmente se espera.
                          </td>
                      </tr>
                  </table>
              </div>
          </fieldset>
  
          <!-- Section 6 -->
          <fieldset>
              <legend>6. Actitud para trabajar en equipo</legend>
              <p class="definition">Mide la cooperación con los
              demás.</p>
              <div id="checkboxes">
                  <table class="notas">
                      <tr>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id1">1</label>
                          <input type="radio" name="radio6" id="my_radio_button_id1" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id2">2</label>
                          <input type="radio" name="radio6" id="my_radio_button_id2" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">3</label>
                          <input type="radio" name="radio6" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">4</label>
                          <input type="radio" name="radio6" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">5</label>
                          <input type="radio" name="radio6" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">6</label>
                          <input type="radio" name="radio6" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">7</label>
                          <input type="radio" name="radio6" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">8</label>
                          <input type="radio" name="radio6" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">9</label>
                          <input type="radio" name="radio6" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">10</label>
                          <input type="radio" name="radio6" id="my_radio_button_id3" class = "R_B" checked/>
                          </div>
                      </th>
                      </tr>
                      <tr>
                          <td>Rehuye responsabilidades. Es egoísta.</td>
                          <td>Coopera sólo cuando le conviene.  
                           </td>
                          <td>Generalmente coopera con los demás.
                          </td>
                          <td>Siempre coopera. Se interesa por el
                          bien de toda la organización</td>
                      </tr>
                  </table>
              </div>
          </fieldset>
  
          <!-- Section 7 -->
          <fieldset>
              <legend>7. Conocimiento</legend>
              <p class="definition">Mide los conocimientos tecnológicos.</p>
              <div id="checkboxes">
                  <table class="notas">
                      <tr>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id1">1</label>
                          <input type="radio" name="radio7" id="my_radio_button_id1" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id2">2</label>
                          <input type="radio" name="radio7" id="my_radio_button_id2" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">3</label>
                          <input type="radio" name="radio7" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">4</label>
                          <input type="radio" name="radio7" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">5</label>
                          <input type="radio" name="radio7" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">6</label>
                          <input type="radio" name="radio7" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">7</label>
                          <input type="radio" name="radio7" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">8</label>
                          <input type="radio" name="radio7" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">9</label>
                          <input type="radio" name="radio7" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">10</label>
                          <input type="radio" name="radio7" id="my_radio_button_id3" class = "R_B" checked/>
                          </div>
                      </th>
                      </tr>
                      <tr>
                          <td>Tiene conocimientos elementales
                          incompletos</td>
                          <td>Tiene conocimientos parciales.  
                           </td>
                          <td>Satisfactorio, tiene base general y
                          técnica.</td>
                          <td>Tiene conocimientos suficientes para
                          desenvolverse técnica y profesionalmente.
                          </td>
                      </tr>
                  </table>
              </div>
          </fieldset>
  
          <!-- Section 8 -->
          <fieldset>
              <legend>8. Asistencia </legend>
              <p class="definition">Mide puntualidad y cumplimiento.</p>
              <div id="checkboxes">
                  <table class="notas">
                      <tr>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id1">1</label>
                          <input type="radio" name="radio8" id="my_radio_button_id1" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id2">2</label>
                          <input type="radio" name="radio8" id="my_radio_button_id2" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">3</label>
                          <input type="radio" name="radio8" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">4</label>
                          <input type="radio" name="radio8" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">5</label>
                          <input type="radio" name="radio8" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">6</label>
                          <input type="radio" name="radio8" id="my_radio_button_id3" class = "R_B"/>
                          </div>        
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">7</label>
                          <input type="radio" name="radio8" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">8</label>
                          <input type="radio" name="radio8" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                      </th>
                      <th>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">9</label>
                          <input type="radio" name="radio8" id="my_radio_button_id3" class = "R_B"/>
                          </div>
                          <div class="checkboxgroup">
                          <label for="my_radio_button_id3">10</label>
                          <input type="radio" name="radio8" id="my_radio_button_id3" class = "R_B" checked/>
                          </div>
                      </th>
                      </tr>
                      <tr>
                          <td>Ausencia permanente.</td>
                          <td>Ocasionalmente ausente. Generalmente por buenas razones
                          </td>
                          <td>Muy regular. Rara vez se ausenta</td>
                          <td>Registro plenamente satisfactorio.</td>
                      </tr>
                  </table>
              </div>
          </fieldset>
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

  customElements.define("evaluate-section", EvalSect);