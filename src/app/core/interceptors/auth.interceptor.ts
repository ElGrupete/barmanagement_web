import { map, switchMap } from 'rxjs/operators';
import { TokenService } from './../services/token.service';
import { getUnauthorizedRoutes } from './../../shared/constants/unauthorized-routes';
import { Observable, of } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    /**
     *
     */
    constructor(private tokenService: TokenService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /** If the request's url does not need authorization, handle request normally */
        if (!this.needsAuthorization(request.url)) {
            return this.handleRequest(request, next);
        }
        /** Then authorize request with headers */
        return this.getAuthToken()
                   .pipe(
                       map(token => this.authorizeRequest(token, request)),
                       switchMap(authorizedRequest => this.handleRequest(authorizedRequest, next))
                   )
    }

    /** This method return a boolean depending on if the requested route needs authorization or not  */
    /** This is based on the UNAUTHORIZED_ROUTES array */
    private needsAuthorization(url: string): boolean {
        return !!getUnauthorizedRoutes().find(path => url.includes(path));
    }

    /** This emulates the HttpHandler method handle() and simply returns the request */
    private handleRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req);
    }

    /** This gets the AuthToken, if exists, as an Observable */
    private getAuthToken(): Observable<string> {
        return of(this.tokenService.getAuthToken());
    }

    /** This append the token to the request that needs one */
    private authorizeRequest(token: string, req: HttpRequest<any>): HttpRequest<any> {
        console.log(token);
        const headers = new HttpHeaders({ Authorization: token });
        return req.clone({ headers });
    }
}