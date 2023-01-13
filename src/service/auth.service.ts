import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({providedIn: 'root'})

export class AuthService {

    isLoggedIn = false;


    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router,
        public ngZone: NgZone
    ) {


    }

    //Login authentication
    login(email: string, password: string): Promise<any> {

        return this.afAuth.signInWithEmailAndPassword(email, password);
    }



    //register authentication
    async signup(email: string, password: string){

        await this.afAuth.createUserWithEmailAndPassword(email,password)
        .then(
            res=> {
                this.isLoggedIn = true
                localStorage.setItem('user',JSON.stringify(res.user))
            }
        )
     }

    //google authentication
    googleAuth() {
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
          console.log(result);
          this.router.navigate(['/home']);
        });
    } 

    
  

    

    loginWithFacebook() { 
        firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((result) => {
            console.log(result);
            this.router.navigate(['/home']); 
        });
    }



    //curr user
    currentUserObservable() :any {
        return this.afAuth.authState;
    }

    //Loging out the user
    async logout(): Promise<void> {

        await this.afAuth.signOut();
        localStorage.removeItem('user');
    }

    
}