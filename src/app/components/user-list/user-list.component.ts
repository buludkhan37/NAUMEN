import {Component, computed, signal} from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserStatus } from '../../models/user.status';
import { User } from '../../models/user.interface';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users: User[] = [];

  searchQuery = signal('');
  filterStatus = signal<UserStatus>('all');
  selectedEmail = signal<string | null>(null);

  filteredUsers = computed(() => {
    const query = this.searchQuery().toLowerCase();
    const status = this.filterStatus();

    return this.users
      .filter(user => user.name.toLowerCase().includes(query))
      .filter(user => {
        if (status === 'active') return user.active;
        if (status === 'inactive') return !user.active;
        return true;
      });
  })

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  selectUser(email: string): void {
    this.selectedEmail.set(email);
  }
}
