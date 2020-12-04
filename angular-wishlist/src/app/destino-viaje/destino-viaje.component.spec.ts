import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoVIajeComponent } from './destino-viaje.component';

describe('DestinoVIajeComponent', () => {
  let component: DestinoVIajeComponent;
  let fixture: ComponentFixture<DestinoVIajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinoVIajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoVIajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
