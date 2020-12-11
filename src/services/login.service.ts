import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username, password) {
    return this.http.post<any>('http://127.0.0.1:8080/product-api/login', { username, password });
  }
}
