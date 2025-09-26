import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{
    id: 1,
    name: 'Carlos Andres',
    lastname: 'Arenas Mejia',
    email: 'andresam98@hotmail.com',
    username: 'andres',
    password: '123456'
  },
  {
    id: 2,
    name: 'Abigail',
    lastname: 'Franco',
    email: 'abiga-lamejor@hotmail.com',
    username: 'abiga',
    password: '123456'
  }];

  constructor() { }

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
