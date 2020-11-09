import { Employees } from './../models/employees.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/services/base-http/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends BaseHttpService<Employees> {

  constructor(http: HttpClient) {
    super(http)
  }
}
