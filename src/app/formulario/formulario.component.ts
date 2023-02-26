import { Component } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  nombreInput:string = '';
  apellidosInput:string = '';

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidosInput);
    //this.personas.push(persona1);
  }

}
