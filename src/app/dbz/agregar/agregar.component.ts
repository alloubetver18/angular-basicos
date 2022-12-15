import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { PersonajesComponent } from '../personajes/personajes.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {
/* agregar( event: any ){
    event.preventDefault();
    console.log('Hey!!');
  } */
  /** Por cada @Input utilizado, necesitaremos su correspondiente linea en la etiqueta de la vista HTML */
/*   @Input() personajes: Personaje[] = []; */
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService:DbzService){}
  /**Cuando, en lugar de recibir un valor de un componente Padre a un componente Hijo, queremos hacer lo opuesto, es decir, emitir un valor de un componente Hijo a un componente Padre, utilizaremos la directiva @Output */
  /**@Output se utiliza para emitir eventos. 
   * Su estructura sería algo así:
   * @Output() onNombreLlamada: EventEmitter<Tipo deDatosenGenéricoparaInferencia> = new EventEmitter();
   * Esta instrucción crearia una directiva @Output de nombre onNombreLlamada, la cual sería de tipo EventEmitter, con un tipo de dato Genérico para la Inferencia de tipo de datos, que serái igual a un nuevo EventEmitter.
   * Este nuevo EventEmitter será llamado en la vista del componente principal para ejecutar una función que recibirá como parámetro un evento, declarado como tipo Personaje, que será en este caso el Personaje a añadir a nuestra lista.
   * También puede añadirse el tipo de dato en la parte del new EventEmitter(), pero puede resultar redundante.
  */

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length===0){ return; }
    /**Para emitirlo, solo hay que especificar que el EventEmitter "emitirá" el evento mediante:
     * this.onNombreLlamada.emit(this.nuevoDato);
     * teniendo en cuenta que este this.nuevoDato sea del tipo correcto, declarado en la inferencia de tipo de dato.
     */
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
/*     console.log(this.personajes);
    this.personajes.push(this.nuevo); */

    this.nuevo = {
      nombre: '',
      poder: 0
    }


    /* Añadir this.nuevo, objeto de tipo Personaje, al array de personajes mediante la función this.personaje.push(), tras lo cual lo inicializaremos a un objeto vacio. Con ello, limpiaremos los valores que hayamos introducido.
    */
  }
}
