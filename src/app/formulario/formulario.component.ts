import { Component, ElementRef, ViewChild } from '@angular/core';
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

  constructor(private personasServices:personasServices){
    this.personasServices.saludar.subscribe((indice:number)=>{
      alert(`El indice es: ${indice+1}`)
    })
  }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidosInput.nativeElement.value);
    this.personasServices.personaAgregada(persona1)
  }

}
