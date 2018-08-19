import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { PartCreate } from './models/part-create.model';
import { PartsList } from './models/part-list.model';

const baseUrl = 'https://carsshop-8551d.firebaseio.com/parts/'

@Injectable({
    providedIn: 'root'
})
export class PartsService {
    constructor(
        private http: HttpClient
    ) { }

    getById(partId: string) {
        return this.http.get<PartsList>(`${baseUrl}${partId}/.json`);
    }

    getAllCars() {
        return this.http.get(`${baseUrl}.json`)
            .pipe(map((res: Response) => {
                const ids = Object.keys(res);
                const parts: PartsList[] = [];

                for (const i of ids) {
                    parts.push(new PartsList(i, res[i].maker, res[i].model, res[i].price,
                        res[i].condition, res[i].imageUrl, res[i].ownerId));
                }

                return parts;
            }));
    }

    createPart(body: PartCreate) {
        return this.http.post(`${baseUrl}.json`, body);
    }

    editPart(body) {
        return this.http.patch(`${baseUrl}.json`, body);
    }

    deletePart(partId: string) {
        return this.http.delete(`${baseUrl}${partId}/.json`);
    }
}