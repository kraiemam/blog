import { Component } from '@angular/core';
import * as firebase from 'firebase/app'; // a verifier sans le /app

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyCx4kWfgO0bOMq0Z9dHEI8RmSOk8D4cABg",
      authDomain: "blog-65ad2.firebaseapp.com",
      databaseURL: "https://blog-65ad2.firebaseio.com",
      projectId: "blog-65ad2",
      storageBucket: "",
      messagingSenderId: "806174375336"
    };
    firebase.initializeApp(config);
  }
}
