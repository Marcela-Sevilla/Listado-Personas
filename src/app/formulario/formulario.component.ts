import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  @Output() personaCreada = new EventEmitter<Persona>();

  @ViewChild('nombreInput') nombreInput:ElementRef;
  @ViewChild('apellidosInput') apellidosInput:ElementRef;

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidosInput.nativeElement.value);
    this.personaCreada.emit(persona1);
  }

}
