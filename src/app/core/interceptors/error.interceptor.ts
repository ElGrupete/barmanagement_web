import { AlertMessages } from './../../shared/constants/alert-messages';
import { AlertService } from './../../shared/services/alert/alert.service';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

    /**
     *
     */
    constructor(private alertService: AlertService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
                   .pipe(
                    //    retry(1),
                       catchError((error: HttpErrorResponse) => {
                            if (error.status === 401) {
                                // refresh token
                                this.alertService.openOnError(AlertMessages.error.message)
                            }
                            else if (error.status === 0) {
                                this.alertService
                                    .openOnError(AlertMessages.error.message)
                            }

                            
                            return throwError(error);
                       })
                   )
    }
}
