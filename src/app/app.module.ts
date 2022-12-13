import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
/* import { ContadorComponent } from './contador/contador/contador.component'; */
/* Tarea:
Crear un nuevo módulo llamado ContadorModule
Tienen que hacer las declaraciones y exportaciones para poder utilizarlo de nuevo.
*/
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
/*     ContadorComponent,
 */  ],
  imports: [
    BrowserModule,
    HeroesModule,
    //importar aquí.
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
