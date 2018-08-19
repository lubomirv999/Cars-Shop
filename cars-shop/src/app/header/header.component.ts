import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dropdownLi: string = "nav-item dropdown";
  dropdownMenu: string = "dropdown-menu";

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  expand() {
    this.dropdownLi.endsWith('show')
      ? this.dropdownLi = "nav-item dropdown"
      : this.dropdownLi = "nav-item dropdown show";

    this.dropdownMenu.endsWith('show')
      ? this.dropdownMenu = "dropdown-menu"
      : this.dropdownMenu = "dropdown-menu show";
  }

  currentUserEmail() {  
    return firebase.auth().currentUser.email;
  }

  currentUserId(){
    return firebase.auth().currentUser.uid;
  }

  logout() {
    this.authService.logout();
  }
}
