import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
import { obj } from '../../app/class';
import { ModalController,ViewController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { ProfilePage } from '../profile/profile';






import firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  email:any;
  password:any;
  obj = {} as obj;
  errMsg;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public viewCtrl: ViewController,public art: StreetartzProvider,public loadingCtrl: LoadingController) {

    

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  //   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then((result) => {

  //     if(result){
  //       console.log("yes")
  //       this.navCtrl.setRoot('LoginPage');
  //     }else{
  //       console.log("CategoryPage");
  //       this.navCtrl.setRoot('LoginPage');
        
  //     }

  //   });
   }
  signup(){
    const modal = this.modalCtrl.create(SignupPage);
    modal.present();
  }

  login(email,password) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then((result) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        if(user){
        this.navCtrl.push(CategoryPage)
        console.log(email);
        } else {
          console.log("User not found")
        }
      }).catch((ex) => {
        console.log(ex)
      });
    }).catch((ex) => {
      console.log(ex)
    });
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "signing in....",
      duration: 3000
    });
    loader.present();
  }
forgotpassword(obj:obj){
  this.art.forgotpassword(this.obj.email).then(()=>{
    alert("Check your email")
  } , (error)=>{

  })
}

}
