import { LoadingService } from './../../shared/services/loading/loading.service';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class LoadingInterceptor implements HttpInterceptor {

    /**
     *
     */
    constructor(private loadingService: LoadingService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.showLoading();
        return next.handle(req)
                   .pipe(
                       finalize(() => this.loadingService.hideLoading())
                   );
    }
}