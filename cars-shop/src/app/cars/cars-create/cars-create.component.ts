import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

import { CarCreate } from '../models/car-create.model';

@Component({
  selector: 'app-cars-create',
  templateUrl: './cars-create.component.html',
  styleUrls: ['./cars-create.component.css']
})
export class CarsCreateComponent implements OnInit {
  bindingModel: CarCreate;
  ownerId = firebase.auth().currentUser.uid;

  constructor(private carsService: CarsService,
    private toastr: ToastrService,
    private router: Router) {
    this.bindingModel = new CarCreate("", "", "", "", "", 0, 0, 0, "", firebase.auth().currentUser.uid);
  }

  ngOnInit() {
  }

  create() {
    this.carsService.createCar(
      this.bindingModel)
      .subscribe(() => {
        this.toastr.success('Car created!', 'Success');
        this.router.navigate(['/']);
      })
  }
}