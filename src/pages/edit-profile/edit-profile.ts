import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
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
email:any;
name:any;
url='../../assets/download.png' ;
imageUrl;
  constructor(public navCtrl: NavController, public navParams: NavParams,public art: StreetartzProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }
  // ngOnInit() {
  //   this.obj = this.navParams.get("obj");
  //   console.log(this.obj);
  // }
  update(){
this.art.update(name,this.email).then((data)=>{
console.log(data);
})  
  }
  insertpic(event:any){
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
      this.imageUrl = data;
       this.art.storeProfilePics(data).then(() =>{
         console.log('added to db');
       },
      Error =>{
        console.log(Error)
      })
    }, Error =>{
      console.log(Error )
    })
  }
}
