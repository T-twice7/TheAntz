import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
import { obj } from '../../app/class';
import { CategoryPage } from '../category/category';
import { UploadImagePage } from '../upload-image/upload-image';
import { ModalController,ViewController  } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopOverProfilePage } from '../pop-over-profile/pop-over-profile';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {


  obj;
  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider,public modalCtrl: ModalController,public popoverCtrl: PopoverController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ProfilePage');

  // }
  ngOnInit() {
    this.obj = this.navParams.get("obj");
    console.log(this.obj);
  }
  next(){
    this.navCtrl.push(CategoryPage);
  }

  upload(){
    const modal = this.modalCtrl.create(UploadImagePage);
    modal.present();
  }
  presentPopover() {
    const popover = this.popoverCtrl.create(PopOverProfilePage);
    popover.present();
  }
  
}
