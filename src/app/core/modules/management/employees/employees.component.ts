import { IOptions } from './../../../../shared/models/options.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  title: string = 'gestionar empleados';
  options: IOptions[] = [{name: 'ver lista empleados', url: 'list'}, {name: 'ingresar nuevo empleado', url: 'new'}]

  constructor() { }

  ngOnInit(): void {
  }

}
