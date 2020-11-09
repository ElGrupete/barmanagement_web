import { Sector } from './../models/sector.model';
import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/services/base-http/base-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectorService  extends BaseHttpService<Sector> {

  constructor(http: HttpClient) {
    super(http)
  }
}
