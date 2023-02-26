import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { personasServices } from './personasServices.services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  titulo = 'Listado de Personas';
  personas:Persona[];

  constructor(private personasServices:personasServices){}

  ngOnInit(): void {
    this.personas = this.personasServices.personas
  }

}
