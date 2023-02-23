import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';

  personas:Persona[] = [
    new Persona('Marcela', 'Sevilla Lopez'),  
    new Persona('Natalia', 'Jaller Lopez'), 
    new Persona('Daniela', 'Cavadiaz Lopez'),
  ];

  nombreInput:string = '';
  apellidosInput:string = '';

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidosInput);
    this.personas.push(persona1);
  }

}
