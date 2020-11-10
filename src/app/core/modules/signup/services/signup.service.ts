import { Table } from './../../management/tables/models/table.model';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SignupResponse } from '../models/signup-response.model';
import { API_ROUTES } from '../../../../shared/constants/api-routes';
import { BASE_URL } from '../../../../shared/constants/base-url';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(userName: string, password: string, role: string, table: Table): Observable<User> {
    let body = { 
      userName, 
      password, 
      role,
      number: table.number,
      available: table.available,
      people: table.people,
      booked: table.booked,
      sector: table.sector
    }
    return this.http.post<SignupResponse>(`${BASE_URL}/${API_ROUTES.signup}`, body)
                    .pipe(
                      map(res => {
                        return res.Result.user
                      })
                    )
  }
}
