import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        /* Declara los componentes del Módulo*/
        HeroeComponent,
        ListadoComponent
    ],/**Listado de componentes a exportar para utilizarlos en otros templates HTML, o llamarlos desde otros componentes */
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}