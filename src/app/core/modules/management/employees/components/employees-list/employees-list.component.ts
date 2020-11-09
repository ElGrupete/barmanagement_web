import { ResponseEmployees } from './../../models/employees.model';
import { EmployeesService } from './../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/shared/models/card.model';
import { API_ROUTES } from 'src/app/shared/constants/api-routes';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  title: 'empleados'
  items: ICard[] = [];
  employees: ResponseEmployees[] = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  
  getAllEmployees(): void {
    this.employeesService
        .getAll(API_ROUTES.config.employees)
        .pipe(
          map(allEmployees => allEmployees.Result.users)
        )
        .subscribe((employees: ResponseEmployees[]) => {
          this.employees = employees;
          this.employees.forEach(employee => {
            this.items
                .push(
                  {
                  name: employee.userName,
                  id: employee._id,
                  role: employee.role.name
                }
                );
          })
        }); 
  }

}
