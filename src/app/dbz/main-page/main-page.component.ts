import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  /* personajes: Personaje[] = []; */

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

/*   get personajes():Personaje[]{
    return this.dbzService.personajes;
  } */
/** Recibiendo como argumento un nuevo objeto de tipo Personaje, esta función insertará en el array de Personajes el nuevo personaje enviado como parámetro por el EventEmitter. */
  //agregarNuevoPersonaje(argumento: Personaje){
    /* debugger; */
    //this.personajes.push(argumento);
  //}

  /** Para empezar a utilizar nuestro Servicio, podemos realizar una inyección de dependencias en el constructor de la clase MainPageComponent*/ 
  /* constructor (private dbzService: DbzService){ */
  constructor (){
    /* En nuestro array de Personajes vacio, almacenamos el array de personajes contenido en el servico dbzService */
    /* this.personajes = this.dbzService.personajes; */

  }
}
