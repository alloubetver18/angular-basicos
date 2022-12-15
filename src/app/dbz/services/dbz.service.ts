import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";


@Injectable()
export class DbzService {

    /* Orden de declaración:
    
    1.- Propiedades
    2.- Getter y Setter
    3.- Constructor
    4.- Métodos de la clase, en este caso, del servicio*/


    /* Utilizando la directiva ngFor, sustituir el listado existente en la vista HTML del componente por el contenido de este array de objetos */
  /* Con el objetivo de que solo el servicio pueda acceder a manipular la información, la declaramos de tipo private, y en el nombre de la propiedad, incluimos un _, como convención de estilos. */
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];
  /* Para poder visualizarlo en otros archivos, podemos realizar un Getter. Sin embargo, hay que tener en cuenta que JS SIEMPRE ENVIA TODOS LOS OBJETOS Y DATOS POR REFERENCIA, Y NO POR VALOR. */
  get personajes(): Personaje[]{
    /* Para solucionar esto, usaremos la siguiente nombeclatura:
    return [...this._personaje] 
    Esto significa: 
    - Las llaves ([]) indican que es un array
    - Los 3 puntos (...) indican un operador llamado "spread", que lo que hace es separar cada elemento del array de forma independiente, cree uno nuevo, y ese es el que devuelve: En lugar de devolver una referencia a un array, crea un nuevo array con la información referenciada Y lo manda en su lugar.*/
    return [...this._personajes];
  }

    constructor(){
        /* console.log('Servicio inicializado.'); */
    }


    agregarPersonaje(argumento: Personaje){
        this._personajes.push(argumento);
    }


}