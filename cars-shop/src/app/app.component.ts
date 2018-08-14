import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cars Shop';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyD5UYjrRsWijOZK5iqFBYIFQ33ruwoddZk",
      authDomain: "carsshop-8551d.firebaseapp.com"
    });
  }
}