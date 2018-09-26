import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';

/**
 * Generated class for the UploadImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-image',
  templateUrl: 'upload-image.html',
})
export class UploadImagePage {
  url;
  name;
  category;
  picDesc;
  arr=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public art: StreetartzProvider,public view :ViewController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadModalPage');
  }
  // viewImage(){
  //   this.art.viewPic().then((data)=>{
  //     console.log(data);
  //   })
  // }
 
  insertvid(event:any){
    if (event.target.files && event.target.files[0]){
      let reader = new FileReader();
      reader.onload = (event:any) =>{
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      console.log(reader.onload);
    }
  }
  uploadPicture(){
    this.art.uploadPic(this.url,this.name).then(data =>{
      console.log(data);
       this.art.storeToDB(data, this.category, this.name,this.category).then(() =>{
         console.log('added to db');
        //  this.navCtrl.push(GalleryPage);
        // this.view.dismiss();
       },
      Error =>{
        console.log(Error)
      })
    }, Error =>{
      console.log(Error )
    })
  }
  dismiss(){
    this.view.dismiss();
  }
 
}