import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  usersUrl = 'https://reqres.in/api/users';
  getaAll() {
    return this.http.get<Users>(this.usersUrl);
  }
  create(user: User) {
    return this.http.post(this.usersUrl, user);
  }
}
export interface Users {
  data: User[];
}
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
