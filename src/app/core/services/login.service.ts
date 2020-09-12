import { LoginResponse } from './../models/responses/login-response.model';
import { BASE_URL } from './../../shared/constants/base-url';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { API_ROUTES } from '../../shared/constants/api-routes';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  login(userName: string, password: string): Observable<User> {
    let url = `${BASE_URL}/${API_ROUTES.login}`;
    let body = { userName, password }
    return this.http
            .post<LoginResponse>(url, body)
            .pipe(
              map(res => {
                // Call the TokenService to decode the token //
                let decodedToken = this.tokenService.getDecodedToken(res.Result.token);
                this.tokenService.setAuthToken(res.Result.token)
                // This response filters the iat & exp properties of the token //
                return decodedToken.user;
              })
            );
  }
}
