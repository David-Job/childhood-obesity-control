import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  protected users: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.readAll().subscribe({
      next: (users) => (this.users = users),
      error: (err) => console.error(err),
    });
  }

  getUserDetails(id: number) {
    this.router.navigateByUrl(`user-details/${id}`);
  }

  addUser() {
    this.router.navigate(['add-user']);
  }
}
