import { Component, ElementRef, ViewChild } from '@angular/core';
import { loginService } from '../loginService.services';
import { personasServices } from '../personasServices.services';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  

  @ViewChild('nombreInput') nombreInput:ElementRef;
  @ViewChild('apellidosInput') apellidosInput:ElementRef;

  constructor(
    private loginService:loginService,
    private personasServices:personasServices){}

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidosInput.nativeElement.value);
    this.loginService.enviarMensajeConsola(`Envío de persona: ${persona1.nombre} ${persona1.apellidos}`);
    this.personasServices.personaAgregada(persona1)
  }

}
