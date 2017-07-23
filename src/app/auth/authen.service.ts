import * as firebase from "firebase";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";


@Injectable()
export class AuthenService {

  public configServer = {
    apiKey: 'AIzaSyBkAhHU8-sFuqvQ_q1rePjRSBeaaNzKCxE',
    authDomain: 'ng-app-recipe-book.firebaseapp.com',
    databaseURL: 'https://ng-app-recipe-book.firebaseio.com',
    projectId: 'ng-app-recipe-book',
    storageBucket: 'ng-app-recipe-book.appspot.com',
    messagingSenderId: '659596346870'
  };
  token;
  constructor(private router: Router) {}

  initFireBase() {
    firebase.initializeApp(this.configServer);
  }

  signUp(email: string, pass: string) {
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch((error) => {
      console.log(error);
    });
  }

  signIn(email: string, pass: string) {
    firebase.auth().signInWithEmailAndPassword(email, pass).then(respone => {
      firebase.auth().currentUser.getToken()
        .then((token: string) => {
          this.token = token;
          this.router.navigate(['/']);
        });
    }).catch((error) => console.log('error'));
  }

  getToken() {
    firebase.auth().currentUser.getToken().then((token: string) => {
      this.token = token;
    });
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut() {
    this.token = null;
  }
}
