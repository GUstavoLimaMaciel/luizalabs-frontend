import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor{
    constructor() { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ) : Observable<HttpEvent<any>>{
        var request;
        request = req.clone({
            setHeaders:{
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Allow-Origin-Header': '*'
            }
        });
        return next.handle(request);
    }
}

// export class Interceptor{}