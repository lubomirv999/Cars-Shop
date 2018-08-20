import { Component, OnInit } from '@angular/core';
import { UsersList } from '../models/user-list.model';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: Observable<UsersList[]>

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.users = this.usersService.getAllUsers();
  }

  delete(id: string) {
    this.usersService.deleteUser(id)
      .subscribe((data) => {
        this.toastr.error('Delete user from Firebase!', 'Success!');
        this.toastr.success('User deleted!', 'Success!');      
        this.router.navigate(['/users/all']);
        this.users = this.usersService.getAllUsers();
      })
  }
}