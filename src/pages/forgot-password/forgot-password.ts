import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { obj } from '../../app/class';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var firebase;

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  obj = {} as obj;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController,public art: StreetartzProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  forgotpassword(obj: obj) {
    this.art.forgotpassword(this.obj.email).then(() => {
      if(this.obj.email == null){
        console.log('no email');
        
      }else{
      const alert = this.alertCtrl.create({
        title: 'Password request Sent',
        subTitle: "We've sent you and email with a reset link, go to your email to recover your account." ,
        buttons: ['OK']
      });
      alert.present();
    }
    }).catch((error) => {
      const alert = this.alertCtrl.create({
        subTitle: error.message,
        buttons: [
          {
            text: 'ok',
            handler: data => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      alert.present();
      console.log(error);
    })
  }


}
