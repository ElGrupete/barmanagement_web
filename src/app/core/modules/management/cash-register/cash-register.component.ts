import { Component, OnInit } from '@angular/core';
import { IOptions } from 'src/app/shared/models/options.model';

@Component({
  selector: 'app-cash-register',
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.scss']
})
export class CashRegisterComponent implements OnInit {

  title: string = 'caja';
  options: IOptions[] = [
    {name: 'ventas del turno', url: ''}, 
    {name: 'imprimir resumen diario', url: ''}, 
    {name: 'faltantes/sobrantes', url: ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
