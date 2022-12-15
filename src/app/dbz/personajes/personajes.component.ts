import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

/* interface Personaje{
  nombre: string;
  poder: number
} */

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  /**Para exportar elementos de un componente Padre a un componente Hijo, podemos utilizar el decorador @Input */

  //@Input() personajes: Personaje [] = [];

  get personajes(){
    return this.dbzService.personajes;
  }
  
  /* personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]; */

  /** Incluso si declaramos el mismo servicio en el constructor de otro componente, si ya está inicializado desde otro componente Padre, no lo volverá a inicializar, por o que no tendremos dos instancias del mismo servicio en ejecución simultaneamente*/ 
  constructor (private dbzService: DbzService){

  }

}
