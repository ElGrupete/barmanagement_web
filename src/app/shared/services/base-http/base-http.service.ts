import { BaseResponse } from './../../../core/models/responses/base-response.interface';
import { BASE_URL } from './../../constants/base-url';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/** This is not an @Injectable service because it is gonna be extended from another services */

export abstract class BaseHttpService<T> {
    /**
     *
     */
    constructor(private http: HttpClient) {}

    getAll(endpoint: string): Observable<BaseResponse> {
        return this.http.get<BaseResponse>(`${BASE_URL}/${endpoint}`);
    }

    getById(endpoint: string, id: string): Observable<BaseResponse> {
        return this.http.get<BaseResponse>(`${BASE_URL}/${endpoint}/${id}`);
    }

    create(endpoint: string, body: T): Observable<BaseResponse> {
        return this.http
                   .post<BaseResponse>(`${BASE_URL}/${endpoint}`, body);
    }
}