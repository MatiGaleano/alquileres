import { Component, Input, OnInit } from '@angular/core';
import { Caracteristicas } from 'src/app/models/caracteristicas';
import { Inmueble } from 'src/app/models/inmueble';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() data = new Inmueble();
  caracteristicas: Caracteristicas = {
    idCaracteristicas: 1,
    idInmueble: 1,
    personas: 4,
    habitaciones: 2,
    bath: 1,
    mascotas: true,
    television: true,
    wifi: true,
    calefaccion: true,
    garage: false,
  }

  estrellas: number[] = []

  constructor() { }

  ngOnInit(): void {
    this.caracteristicas.habitaciones = this.random(1, 3)
    this.caracteristicas.personas = this.random(1, 6)
    this.caracteristicas.bath = this.random(1, 2)
    this.estrellas = this.numSequence(this.random(2, 5))
  }

  random(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  numSequence(n: number): Array<number>{
    return Array(n)
  }

}
