import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DestinoVIaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoVIajeComponent implements OnInit {
  @Input() destino: DestinoVIaje;
  @HostBinding('attr.class') cssClass= 'col-md-4';
  constructor() {}

  ngOnInit(): void {
  }

}
