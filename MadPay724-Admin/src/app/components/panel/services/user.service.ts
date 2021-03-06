import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl + 'site/admin/auth/';
constructor(private http: HttpClient) { }

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl);
}

getUser(id): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + id);
}
}
