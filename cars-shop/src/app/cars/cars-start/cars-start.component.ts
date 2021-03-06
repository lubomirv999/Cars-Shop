import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { CarsList } from '../models/car-list.model';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cars-start',
  templateUrl: './cars-start.component.html',
  styleUrls: ['./cars-start.component.css']
})
export class CarsStartComponent implements OnInit {
  cars: Observable<CarsList[]>
  ownerId: string;

  constructor(
    private carsService: CarsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.cars = this.carsService.getAllCars();
    this.ownerId = this.authService.getOwnerId();
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