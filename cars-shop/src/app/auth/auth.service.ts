import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import * as firebase from 'firebase';

import { UsersService } from '../users/users.service';
import { UserCreate } from '../users/models/user-create.model';
import { UsersList } from '../users/models/user-list.model';

const baseUrl = 'https://carsshop-8551d.firebaseio.com/users/'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    token: string;
    userModel: UserCreate;
    users: UsersList[] = [];

    constructor(
        private toastr: ToastrService,
        private router: Router,
        private usersService: UsersService
    ) { }

    signUp(email: string, password: string) {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((data) => {
                this.toastr.success('Successfully Signed Up', 'Success');
                this.router.navigate(['/auth/signin']);
            })
            .catch((err) => {
                this.toastr.error(err.message, 'Warning');
            });
    }

    signIn(email: string, password: string) {
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((data) => {
                firebase.auth()
                    .currentUser
                    .getIdToken()
                    .then((token: string) => {
                        this.token = token;

                        this.usersService.getAllUsers().subscribe(res => {
                            this.users = res;

                            this.checkUsers(userExists => {
                                console.log(userExists);
                                if (userExists === false) {
                                    this.userModel = new UserCreate(
                                        firebase.auth().currentUser.uid,
                                        firebase.auth().currentUser.email);
                                    this.usersService.createUser(this.userModel).subscribe();
                                }
                            })
                        });
                    })

                this.router.navigate(['/']);
                this.toastr.success('Successfully Signed In', 'Success');
            })
            .catch((err) => {
                this.toastr.error(err.message, 'Warning');
            });
    }

    logout() {
        firebase.auth().signOut()
            .then(() => {
                this.router.navigate(['/auth/signin']);
                this.token = null;
            });
    }

    getToken() {
        if (firebase.auth().currentUser) {
            firebase.auth()
                .currentUser
                .getIdToken()
                .then((token: string) => {
                    this.token = token;
                })

        } else {
            this.token = '';
        }

        return this.token;
    }

    isAuthenticated(): boolean {
        return this.token != null && this.token != '';
    }

    isAdmin(): boolean {
        if (firebase.auth().currentUser) {
            return (firebase.auth().currentUser.email == 'admin@admin.com') && this.token != null;
        } else {
            return false;
        }
    }

    getOwnerId() {
        return firebase.auth().currentUser.uid;
    }

    checkUsers(callback) {
        let userExists = false;

        this.users.forEach(user => {
            userExists = user.email == firebase.auth().currentUser.email;

            if (userExists) {
                callback(userExists);
            }
        });

        callback(userExists);
    }
}