import { Component, OnInit } from '@angular/core';
import { CarCreate } from '../models/car-create.model';
import { CarsService } from '../cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.css']
})
export class CarsEditComponent implements OnInit {
  id: string;
  bindingModel: CarCreate;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.carsService.getById(this.id)
      .subscribe((data) => {
        this.bindingModel = data;
      })
  }

  edit() {
    const body = {
      [this.id]: this.bindingModel
    }

    this.carsService.editCar(body)
      .subscribe((data) => {
        this.toastr.success('Car edited!', 'Success!');
        this.router.navigate(['/']);
      })
  }
}