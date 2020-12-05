import { Component, OnInit } from '@angular/core';
import { DestinoVIaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoVIaje[];
  constructor() {
    this.destinos = [];
   }

  ngOnInit(): void {
  }

  guardar(nombre:string, url:string):boolean {
    this.destinos.push(new DestinoVIaje(nombre, url));
    console.log(this.destinos);
    return false;
  }

  elegido(d: DestinoVIaje) {
    this.destinos.forEach(function (x) {x.setSelected(false); })
    d.setSelected(true);
  }

}

