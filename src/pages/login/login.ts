import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
import { obj } from '../../app/class';
import { ModalController,ViewController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { ProfilePage } from '../profile/profile';





declare var firebase;

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
    
  }
  signup(){
    const modal = this.modalCtrl.create(SignupPage);
    modal.present();
  }

  login(obj:obj) {
    this.art.login(this.obj.email,this.obj.password ).then(()=>{
     this.presentLoading();
     this.navCtrl.setRoot(CategoryPage);
    } , (error)=>{
      console.log(error.message);
      

      const alert = this.alertCtrl.create({
        title: 'Sign In Error!',
        subTitle: error,
        buttons: ['OK']
      });
      alert.present();

    })
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "signing in....",
      duration: 3000
    });
    loader.present();
  }
// forgotpassword(obj:obj){
//   this.art.forgotpassword(this.obj.email).then(()=>{
//     alert("Check your email")
//   } , (error)=>{

//   })
// }


}
