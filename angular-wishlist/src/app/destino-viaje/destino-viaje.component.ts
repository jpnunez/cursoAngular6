import { Component, OnInit, Input } from '@angular/core';
import { DestinoVIaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoVIajeComponent implements OnInit {
  @Input() destino: DestinoVIaje;
  constructor() {}

  ngOnInit(): void {
  }

}
