import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { IOptions } from 'src/app/shared/models/options.model';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  title: string = 'bienvenid@ admin';
  options: IOptions[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.setManagementOptions();
  }

  private setManagementOptions(): void {
    if (this.authService.isAdminRole) {
      this.options.push(
        {name: 'gestionar mesas', url: 'tables'}, 
        {name: 'gestionar empleados', url: 'employees'}, 
        {name: 'gestionar menus', url: 'menus'}
      )
    } else if (this.authService.isCashRegisterRole || this.authService.isWaiterRole) {
      this.options.push(
        {name: 'reservas', url: 'bookings'},
        {name: 'turnos', url: 'shifts'},
        {name: 'caja', url: 'cash-register'}
      )
    }
  }

}
