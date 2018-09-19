import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  obj;
  email: any;
  name: any;
  facebook:any;
  instagram:any;
  twitter:any;
  url = '../../assets/download.png';
  imageUrl;
  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }
  // ngOnInit() {
  //   this.obj = this.navParams.get("obj");
  //   console.log(this.obj);
  // }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
  update() {
    this.art.update(this.name,this.facebook,this.instagram,this.twitter).then((data) => {
      this.presentLoading();
      console.log(data);
    })
  }
  insertpic(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      console.log(reader.onload);
    }

  }


  uploadPicture() {
    this.art.uploadPic(this.url, this.name).then(data => {
      this.imageUrl = data;
      this.art.storeProfilePics(data).then(() => {
        console.log('added to db');
      },
        Error => {
          console.log(Error)
        })
    }, Error => {
      console.log(Error)
    })
  }
}
