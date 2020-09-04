import { map } from 'rxjs/operators';
import { RoleResponse } from './../../models/responses/rol-response.model';
import { API_ROUTES } from './../../../shared/constants/api-routes';
import { BASE_URL } from './../../../shared/constants/base-url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Role } from '../../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getRoleById(id: string): Observable<Role> {
    return this.http.get<RoleResponse>(`${BASE_URL}/${API_ROUTES.role}/${id}`)
                    .pipe(
                      map(res => {
                        return res.Result.role
                      })
                    )
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<RoleResponse>(`${BASE_URL}/${API_ROUTES.role}`)
                    .pipe(
                      map(res => {
                        return res.Result.roles;
                      })
                    )
  }

}
