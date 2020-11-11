import { Observable } from 'rxjs';
import { Order, ResponseOrder } from './../models/order.model';
import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/services/base-http/base-http.service';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from 'src/app/core/models/responses/base-response.interface';
import { BASE_URL } from 'src/app/shared/constants/base-url';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseHttpService<Order> {

  constructor(http: HttpClient,
              private httpClient: HttpClient) {
    super(http)
  }

  updateOrder(endpoint: string, body: Order): Observable<BaseResponse> {
    return this.httpClient.put<BaseResponse>(`${BASE_URL}/${endpoint}`, body);
  }
}
