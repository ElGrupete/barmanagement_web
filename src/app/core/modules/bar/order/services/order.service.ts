import { Order } from './../models/order.model';
import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/services/base-http/base-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseHttpService<Order> {

  constructor(http: HttpClient) {
    super(http)
  }
}
