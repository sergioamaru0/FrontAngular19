import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  {userModel}  from '../models/userModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/v1/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<userModel[]> {
    return this.http.get<userModel[]>(this.apiUrl);
  }
}
