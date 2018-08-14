import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    token: string;

    constructor(
        private toastr: ToastrService,
        private router: Router
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
                    })

                this.router.navigate(['/cars-shop/start']);
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
        firebase.auth()
            .currentUser
            .getIdToken()
            .then((token: string) => {
                this.token = token;
            })

        return this.token;
    }

    isAuthenticated(): boolean {
        return this.token != null;
    }

    /* 
    isAdmin(): boolean{
        return this.token == "adminId";
    }
    */
}