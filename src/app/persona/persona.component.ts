import { Component, Input } from '@angular/core';
import { personasServices } from '../personasServices.services';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasServices:personasServices){}

  emitirSaludo(){
    this.personasServices.saludar.emit(this.indice);
  }
}
