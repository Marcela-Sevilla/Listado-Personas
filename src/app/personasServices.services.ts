import { Persona } from "./persona.model";

export class personasServices{
    personas:Persona[] = [
        new Persona('Marcela', 'Sevilla Lopez'),  
        new Persona('Natalia', 'Jaller Lopez'), 
        new Persona('Daniela', 'Cavadiaz Lopez'),
    ];

    personaAgregada(persona:Persona){
        this.personas.push(persona);
    }
}