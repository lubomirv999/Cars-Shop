import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PartsService } from '../parts.service';
import { AuthService } from '../../auth/auth.service';

import { PartsList } from '../models/part-list.model';

import * as firebase from 'firebase';

@Component({
  selector: 'app-my-parts',
  templateUrl: './my-parts.component.html',
  styleUrls: ['./my-parts.component.css']
})
export class MyPartsComponent implements OnInit {
  parts: Observable<PartsList[]>
  ownerId: string;
  userEmail: string;

  constructor(
    private partsService: PartsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.parts = this.partsService.getAllCars();
    this.ownerId = this.authService.getOwnerId();
    this.userEmail = firebase.auth().currentUser.email;
  }

  delete(id: string) {
    this.partsService.deletePart(id)
      .subscribe((data) => {
        this.toastr.success('Part deleted!', 'Success!');
        this.router.navigate(['/']);
        this.parts = this.partsService.getAllCars();
      })
  }
}