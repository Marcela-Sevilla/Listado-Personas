import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  @Output() personaCreada = new EventEmitter<Persona>();

  agregarPersona(nombreInput:HTMLInputElement, apellidosInput:HTMLInputElement){
    let persona1 = new Persona(nombreInput.value, apellidosInput.value);
    this.personaCreada.emit(persona1);
  }

}
