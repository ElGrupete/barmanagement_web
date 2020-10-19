import { Component, OnInit } from '@angular/core';
import { IOptions } from 'src/app/shared/models/options.model';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  title: string = 'bienvenid@ admin';
  options: IOptions[] = [
    {name: 'gestionar mesas', url: 'tables'}, 
    {name: 'gestionar empleados', url: 'employees'}, 
    {name: 'gestionar menus', url: 'menus'},
    {name: 'reservas', url: 'bookings'},
    {name: 'turnos', url: 'shifts'},
    {name: 'caja', url: 'cash-register'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
