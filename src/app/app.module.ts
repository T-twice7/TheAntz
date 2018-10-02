import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { StreetartzProvider } from '../providers/streetart-database/streetart-database';
import { FirebaseOptions } from '@firebase/app-types';

import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { SplashPage } from '../pages/splash/splash';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CategoryPage } from '../pages/category/category';
import { ProfilePage } from '../pages/profile/profile';
import { UploadImagePage } from '../pages/upload-image/upload-image';
import { ViewPage } from '../pages/view/view';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { PopOverProfilePage } from '../pages/pop-over-profile/pop-over-profile';
import * as firebase from "firebase";
import { UploadedPage } from '../pages/uploaded/uploaded';


//
//firebase.initializeApp({
//  apiKey: "AIzaSyDXJsbuaNORuwbz2gdRBFi-kUQ1JDJKoMA",
//    authDomain: "street-artz-181f2.firebaseapp.com",
//    databaseURL: "https://street-artz-181f2.firebaseio.com",
//    projectId: "street-artz-181f2",
//    storageBucket: "street-artz-181f2.appspot.com",
//    messagingSenderId: "118526884863"
//})

@NgModule({ 
  declarations: [
    MyApp,
    SplashPage,
    LoginPage,
    SignupPage,
    CategoryPage,
    ProfilePage,
    UploadImagePage,
    ViewPage,
    EditProfilePage,
    PopOverProfilePage,
    UploadedPage
 
  ],
  imports: [
    BrowserModule, HttpClientModule ,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashPage,
    LoginPage,
    SignupPage,
    CategoryPage,
    ProfilePage,
    UploadImagePage,
    ViewPage,
    EditProfilePage,
    PopOverProfilePage,
    UploadedPage

 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreetartzProvider,
  ]
})
export class AppModule {
  
}
