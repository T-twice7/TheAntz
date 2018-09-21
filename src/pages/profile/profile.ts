import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
import { obj } from '../../app/class';
import { CategoryPage } from '../category/category';
import { UploadImagePage } from '../upload-image/upload-image';
import { ModalController, ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopOverProfilePage } from '../pop-over-profile/pop-over-profile';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EditProfilePage } from '../edit-profile/edit-profile';
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
  list = [];
  arr = [];
  uid: any;
  obj=[];
  name;
  url = '../../assets/default.jpg';
  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider, public modalCtrl: ModalController, public popoverCtrl: PopoverController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    this.retreivePics();
  }
  ionViewDidLoad() {
  
    this.retreivePics1(); 
  }
  ngOnInit() {
    this.obj = this.navParams.get("obj");
    console.log(this.obj);
  }

  next() {
    this.navCtrl.push(CategoryPage);
  }

  upload() {
    const modal = this.modalCtrl.create(UploadImagePage);
    modal.present();
  }
  presentPopover() {
    const popover = this.popoverCtrl.create(PopOverProfilePage);
    popover.present();
  }


  getUid() {
    this.art.getUserID().then(data => {
      this.uid = data
    })
  }

  retreivePics() {
    this.getUid();
    this.art.viewPicGallery().then(data => {
      var loader = this.loadingCtrl.create({
        content: "please wait...",
        duration: 6000
      });
      var keys: any = Object.keys(data);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (this.uid == data[k].uid) {
          let obj = {
            uid: data[k].uid,
            category: data[k].category,
            downloadurl: data[k].downloadurl,
            name: data[k].name,
            key: k
          }
          this.list.push(obj);
        }
      }
      loader.dismiss();
    }, Error => {
      console.log(Error)
    });
  }
  getUid1() {
    this.arr.length =0;
    this.art.getUserID().then(data => {
      this.uid = data
    })
  }

  retreivePics1() {
    this.arr.length = 0;
    this.getUid1();
    this.art.viewPicGallery1().then(data => {
      var loader = this.loadingCtrl.create({
        content: "please wait...",
        duration: 6000
      });
      var keys: any = Object.keys(data);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (this.uid == data[k].uid) {
          let obj = {
            uid: data[k].uid,
            downloadurl: data[k].downloadurl,
            key: k
          }
          this.arr.push(obj);
        }
      }
      loader.dismiss();
    }, Error => {
      console.log(Error)
    });
  }

  
  nextpage(){
    this.navCtrl.push(EditProfilePage);
  }
  logout(){
    this.art.logout().then(()=>{
      this.navCtrl.push(LoginPage);
    },(error)=>{})
    }
    dismissPage(){
      this.navCtrl.pop();
    }
}
