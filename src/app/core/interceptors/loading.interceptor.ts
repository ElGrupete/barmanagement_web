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
        /** Check this in the future because it was added as a result of this error: 
         * 
         * Host already has a portal attached
            at throwPortalAlreadyAttachedError (portal.js:24)
            at DomPortalOutlet.attach (portal.js:173)
            at OverlayRef.attach (overlay.js:754)
            at LoadingService.showLoading (loading.service.ts:28)
            at LoadingInterceptor.intercept (loading.interceptor.ts:26)
            at HttpInterceptorHandler.handle (http.js:1258)
            at HttpXsrfInterceptor.intercept (http.js:1886)
            at HttpInterceptorHandler.handle (http.js:1258)
            at HttpInterceptingHandler.handle (http.js:1936)
            at MergeMapSubscriber.project (http.js:1082)
         * 
         */
        if (this.loadingService.overlayIsAttached()) {
            return next.handle(req);
        }
        this.loadingService.showLoading();
        return next.handle(req)
                   .pipe(
                       finalize(() => this.loadingService.hideLoading())
                   );
    }
}