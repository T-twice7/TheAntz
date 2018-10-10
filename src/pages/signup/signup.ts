import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams,ViewController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
import { obj } from '../../app/class';
import { ToastController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  obj = {} as obj;
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider, public toastCtrl: ToastController, public alertCtrl: AlertController, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signUp(obj: obj) {
    this.art.register(this.obj).then(() => {
      this.presentLoading();
      this.navCtrl.setRoot(CategoryPage);
      this.presentLoading();
    }, (error) => {
      console.log(error.message);
    })

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "signing in....",
      duration: 4000
    });
    loader.present();
  }
}
