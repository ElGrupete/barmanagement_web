import { HttpClient } from '@angular/common/http';
import { Menu } from './../models/menu.model';
import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/services/base-http/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseHttpService<Menu> {

  constructor(http: HttpClient) {
    super(http)
  }
}
