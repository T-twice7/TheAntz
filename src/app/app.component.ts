import { Component } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreenPage } from '../pages/splash-screen/splash-screen';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';


import firebase from 'firebase';
import { ProfilePage } from '../pages/profile/profile';

import { CategoryPage } from '../pages/category/category';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CategoryPage;

  

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    
   
    firebase.initializeApp({
      apiKey: "AIzaSyBJn72d9p4tVhdWkWsmecmKF4QjTHRXIj0",
      authDomain: "streetartsdatabase.firebaseapp.com",
      databaseURL: "https://streetartsdatabase.firebaseio.com",
      projectId: "streetartsdatabase",
      storageBucket: "streetartsdatabase.appspot.com",
      messagingSenderId: "202504182684"
    })

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}

