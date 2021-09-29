import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { ContCaliComponent } from './cont-cali/cont-cali.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AsignaturasComponent,
    CalificacionesComponent,
    ContCaliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
