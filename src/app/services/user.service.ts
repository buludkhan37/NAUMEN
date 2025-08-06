import { Injectable } from "@angular/core";
import { User } from '../models/user.interface';

@Injectable({
  providedIn: "root",
})
export class UserService {

  users: User[] = [
    { id: 1, name: "John", email: "john@example.com", active: true },
    { id: 2, name: "Tom", email: "tom@example.com", active: false },
    { id: 3, name: "Bob", email: "bob@example.com", active: true },
    { id: 4, name: "Alice", email: "alice@example.com", active: false },
    { id: 5, name: "Tim", email: "tim@example.com", active: false },
  ]

  getUsers(): User[] {
    return this.users;
  }
}
