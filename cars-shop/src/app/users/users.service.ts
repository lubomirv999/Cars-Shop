import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsersList } from './models/user-list.model';
import { UserCreate } from './models/user-create.model';

const baseUrl = 'https://carsshop-8551d.firebaseio.com/users/'

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(
        private http: HttpClient
    ) { }

    getAllUsers() {
        return this.http.get(`${baseUrl}.json`)
            .pipe(map((res: Response) => {
                const ids = Object.keys(res);
                const users: UsersList[] = [];

                for (const i of ids) {
                    users.push(new UsersList(i, res[i].email));                
                }

                return users;
            }));
    }

    createUser(body: UserCreate){
        return this.http.post(`${baseUrl}.json`, body);
    }

    deleteUser(userId: string) {
        return this.http.delete(`${baseUrl}${userId}/.json`);
    }
}