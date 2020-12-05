// older Angular versions
// import {BrowserModule, CommonModule} from '@angular/common';

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoVIajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';

const routes: Routes =[
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'home', component: ListaDestinosComponent},  
  { path: 'destino', component: DestinoDetalleComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    DestinoVIajeComponent,
    ListaDestinosComponent,
    DestinoDetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
