import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { loginService } from '../loginService.service';
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

  constructor(private loginService:loginService){}

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidosInput.nativeElement.value);
  this.loginService.enviarMensajeConsola(`Envío de persona: ${persona1.nombre} ${persona1.apellidos}`);
    this.personaCreada.emit(persona1);
  }

}
