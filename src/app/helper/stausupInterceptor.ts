import { Injectable } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class StausupInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var accessToken = localStorage.getItem('userToken');
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          'Accept': 'application/json',
          'user-key': accessToken
        }
      });
    }
    else {
      request = request.clone({
        setHeaders: {
          'Accept': 'application/json'
        }
      });
    }
    console.log("HttpInterceptor  start")
    return next.handle(request);
  }
}
