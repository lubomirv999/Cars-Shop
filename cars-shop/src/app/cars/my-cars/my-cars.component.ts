import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarsList } from '../models/car-list.model';
import { CarsService } from '../cars.service';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import * as firebase from 'firebase';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css']
})
export class MyCarsComponent implements OnInit {
  cars: Observable<CarsList[]>
  ownerId: string;
  userEmail: string;

  constructor(
    private carsService: CarsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.cars = this.carsService.getAllCars();
    this.ownerId = this.authService.getOwnerId();
    this.userEmail = firebase.auth().currentUser.email;
  }

  delete(id: string) {
    this.carsService.deleteCar(id)
      .subscribe((data) => {
        this.toastr.success('Car deleted!', 'Success!');
        this.router.navigate(['/']);
        this.cars = this.carsService.getAllCars();
      })
  }
}
