import { Component, OnInit } from '@angular/core';
import { User, UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UsersService) {}
  users: User[] = [];
  ngOnInit(): void {
    this.userService.getaAll().subscribe((data) => (this.users = data.data));
  }
}
