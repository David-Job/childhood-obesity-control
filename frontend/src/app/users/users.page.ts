import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.readAll().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (err) => console.error(err),
    });
  }

  getUserDetails(id: any) {
    this.router.navigateByUrl(`/users/${id}`);
  }

  addUser() {
    this.router.navigateByUrl('/users/add');
  }
}
