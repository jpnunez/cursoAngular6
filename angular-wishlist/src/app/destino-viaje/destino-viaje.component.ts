import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinoVIaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoVIajeComponent implements OnInit {
  @Input() destino: DestinoVIaje;
  @Input('idx') position: number;
  @HostBinding('attr.class') cssClass= 'col-md-4';
  @Output() clicked: EventEmitter<DestinoVIaje>;

  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir() {
    this.clicked.emit(this.destino);
    return false;
  }

}
