import { LoadingInterceptor } from './loading.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { Provider } from "@angular/core";
import { ErrorInterceptor } from './error.interceptor';
import { HTTP_INTERCEPTORS } from "@angular/common/http";

export const CUSTOM_HTTP_INTERCEPTORS: Provider[] = [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
]