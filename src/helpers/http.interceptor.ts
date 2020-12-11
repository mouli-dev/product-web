import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService} from "../services/login.service";

@Injectable()
export class ProductHttpInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const httpRequest = request.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'AuthToken',
        'Access-Control-Allow-Origin':'true'
      })
    });

    console.log('Intercepted Request',httpRequest);

    return next.handle(httpRequest);
  }
}
