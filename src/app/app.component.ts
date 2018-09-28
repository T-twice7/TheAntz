import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';


import firebase from 'firebase';
import 'firebase/firestore';

import { ProfilePage } from '../pages/profile/profile';

import { SplashPage } from '../pages/splash/splash';

import { CategoryPage } from '../pages/category/category';
import { StreetartzProvider } from '../providers/streetart-database/streetart-database';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any= SplashPage ;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public art: StreetartzProvider) {
 
    //this.initializeApp(); 

    // used for an example of ngFor and navigation


  }

  initializeApp(user) {
  
       firebase.auth().onAuthStateChanged((user) => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
       
        if (user) {
          // User is signed in.
          this.rootPage = CategoryPage
          this.firebase= 1
          console.log(user)
        } else {
          // No user is signed in.
          this.rootPage = LoginPage
          this.firebase= 0
          console.log(user)
        }
      });

      

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
   
  }
}