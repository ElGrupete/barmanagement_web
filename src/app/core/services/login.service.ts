import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { API_ROUTES } from '../../shared/constants/api-routes';
import { LoginResponse } from '../models/login-response.model';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = `${environment.api.url}`;

  constructor(private http: HttpClient) { }

  login(userName: string, password: string): Observable<User> {
    let url = `${this.baseUrl}/${API_ROUTES.login}`;
    let body = { userName, password }
    return this.http.post<LoginResponse>(url, body)
                    .pipe(
                      map(res => {
                          // Call the AuthService to set the token and validate the logged in status //
                          return res.Result.user;
                        }
                      )
                    )
  }
}
