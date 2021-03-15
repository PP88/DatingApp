import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly API_ADDRESS = 'http://localhost:8080/api';

  constructor(public httpClient: HttpClient) {}

  getUsers(): Observable<HttpResponse<Object>> {
    return this.httpClient.get(this.API_ADDRESS + '/users', {
      observe: 'response',
      responseType: 'json',
    });
  }
}
