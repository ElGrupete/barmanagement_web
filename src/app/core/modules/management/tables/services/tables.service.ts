import { Table } from './../models/table.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from 'src/app/shared/services/base-http/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class TablesService extends BaseHttpService<Table> {

  constructor(http: HttpClient) {
    super(http)
  }
}
