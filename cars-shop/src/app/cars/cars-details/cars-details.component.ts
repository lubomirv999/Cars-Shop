import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarsList } from '../models/car-list.model';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {
  car : CarsList;
  id : string;

  constructor(
    private carsService : CarsService,
    private route : ActivatedRoute,
    private toastr : ToastrService,
    private router : Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.carsService.getById(this.id)
      .subscribe(data => {
        this.car = data;
      })
  }
}