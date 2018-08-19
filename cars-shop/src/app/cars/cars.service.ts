import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CarsList } from './models/car-list.model';
import { CarCreate } from './models/car-create.model';

const baseUrl = 'https://carsshop-8551d.firebaseio.com/cars/'

@Injectable({
    providedIn: 'root'
})
export class CarsService {
    constructor(
        private http: HttpClient
    ) { }

    getById(carId: string) {
        return this.http.get<CarsList>(`${baseUrl}${carId}/.json`);
    }

    getAllCars() {
        return this.http.get(`${baseUrl}.json`)
            .pipe(map((res: Response) => {
                const ids = Object.keys(res);
                const cars: CarsList[] = [];

                for (const i of ids) {
                    cars.push(new CarsList(i, res[i].maker,
                        res[i].model, res[i].condition, res[i].color, res[i].transmission,
                        res[i].yearOfProduction, res[i].kilometers, res[i].price, res[i].imageUrl, res[i].ownerId));
                }

                return cars;
            }));
    }

    createCar(body: CarCreate) {
        return this.http.post(`${baseUrl}.json`, body);
    }

    editCar(body) {
        return this.http.patch(`${baseUrl}.json`, body);
    }

    deleteCar(carId: string) {
        return this.http.delete(`${baseUrl}${carId}/.json`);
    }
}