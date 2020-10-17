import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/services/base-http/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseHttpService<Product> {

  constructor(http: HttpClient) {
    super(http)
  }
}
