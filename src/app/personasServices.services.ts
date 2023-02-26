import { Persona } from "./persona.model";
import { loginService } from './loginService.services';
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class personasServices{
    personas:Persona[] = [
        new Persona('Marcela', 'Sevilla Lopez'),  
        new Persona('Natalia', 'Jaller Lopez'), 
        new Persona('Daniela', 'Cavadiaz Lopez'),
    ];

    saludar = new EventEmitter<number>();

    constructor(private loginService:loginService){}

    personaAgregada(persona:Persona){
        this.personas.push(persona);
        this.loginService.enviarMensajeConsola(`Envío de persona: ${persona.nombre} ${persona.apellidos}`);
    }
}