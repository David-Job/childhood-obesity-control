import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  users: any;
  navEvents: any;

  constructor(private userService: UserService, private router: Router) {
    this.navEvents = router.events.pipe(
      filter((event) => event instanceof RoutesRecognized)
    ) as Observable<RoutesRecognized>;
  }

  ngOnInit() {
    this.getUsers();
    this.navEvents.subscribe((event: RoutesRecognized) => {
      if (event.urlAfterRedirects === '/users') {
        this.getUsers();
      }
    });
  }

  getUsers() {
    this.userService.readAll().subscribe({
      next: (data) => {
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
