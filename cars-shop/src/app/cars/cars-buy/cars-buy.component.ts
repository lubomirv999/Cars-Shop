import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarsService } from '../cars.service';
import { CarsList } from '../models/car-list.model';
import { BuyCar } from '../models/buy-car.model';

@Component({
  selector: 'app-cars-buy',
  templateUrl: './cars-buy.component.html',
  styleUrls: ['./cars-buy.component.css']
})
export class CarsBuyComponent implements OnInit {
  car: CarsList;
  id: string;
  deposit: number;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.carsService.getById(this.id)
      .subscribe(data => {
        this.car = data;
        this.deposit = 0;
      })
  }

  buy(price: string) {    
    if (this.deposit >= Number(price)) {
      this.router.navigate(['buy-car-success']);
    } else if (this.deposit < Number(price)) {
      this.router.navigate(['buy-car-failed']);
    }
  }
}
