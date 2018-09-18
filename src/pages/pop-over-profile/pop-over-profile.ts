import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
import { EditProfilePage } from '../edit-profile/edit-profile';
/**
 * Generated class for the PopOverProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pop-over-profile',
  templateUrl: 'pop-over-profile.html',
})
export class PopOverProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverProfilePage');
  }
  nextpage(){
    this.navCtrl.push(EditProfilePage);
  }
}
