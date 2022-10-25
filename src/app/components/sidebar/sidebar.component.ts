import { Component, OnInit } from '@angular/core';

interface RangoPrecio {
  startPrice: number,
  endPrice: number,
  checked: boolean
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  cantidadPersonas = [
    {
      cantidad: 1,
      checked: false
    },
    {
      cantidad: 2,
      checked: false
    },
    {
      cantidad: 3,
      checked: false
    },
    {
      cantidad: 4,
      checked: false
    },
    {
      cantidad: 5,
      checked: false
    },
    {
      cantidad: 6,
      checked: false
    },
    {
      cantidad: 7,
      checked: false
    },

  ]
  caracteristicas = [
    {
      tipo: 'Cochera',
      icon: 'fa-solid fa-car',
      checked: false
    },
    {
      tipo: 'Acepta Mascotas',
      icon: 'fa-solid fa-paw',
      checked: false
    },
    {
      tipo: 'Calefacción',
      icon: 'fa-solid fa-fire-burner',
      checked: false
    },
    {
      tipo: 'Parrilla',
      icon: 'fa-solid fa-burger',
      checked: false
    },
    {
      tipo: 'Wifi',
      icon: 'fa-solid fa-wifi',
      checked: false
    },
    
  ]
  propiedades = [
    {
      tipo: 'Cabaña',
      icon: 'fa-solid fa-house-chimney-window',
      checked: false
    },
    {
      tipo: 'Departamento',
      icon: 'fa-solid fa-hotel',
      checked: false
    },
    {
      tipo: 'Casa',
      icon: 'fa-solid fa-house',
      checked: false
    },
    
  ]
  priceList: RangoPrecio[] = [
    {
      startPrice: 5000,
      endPrice: 10000,
      checked: false
    },
    {
      startPrice: 10000,
      endPrice: 15000,
      checked: false
    },
    {
      startPrice: 15000,
      endPrice: 20000,
      checked: false
    },
    {
      startPrice: 20000,
      endPrice: 25000,
      checked: false
    },
    {
      startPrice: 25000,
      endPrice: 30000,
      checked: false
    },
    {
      startPrice: 30000,
      endPrice: 35000,
      checked: false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
