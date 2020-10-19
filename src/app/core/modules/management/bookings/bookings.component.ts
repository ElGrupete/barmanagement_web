import { Component, OnInit } from '@angular/core';
import { IOptions } from 'src/app/shared/models/options.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  title: string = 'reservas';
  options: IOptions[] = [
    {name: 'ventas reservas del día', url: ''}, 
    {name: 'buscar reserva', url: ''}, 
    {name: 'nueva reserva', url: ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
