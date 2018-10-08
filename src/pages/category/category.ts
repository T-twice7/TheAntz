import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
import { obj } from '../../app/class';
import { ProfilePage } from '../profile/profile';
import { ViewPage } from '../view/view';
import * as firebase from 'firebase';


/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  obj = {} as obj
  category;
  arr2 = [];
  uid: any;
  list =[];
  key;
  color = "primary";
  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider) {
 
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log("UID: " + user.uid)
      } else {
        // No user is signed in.
        console.log("Nothing Found!")
      }
    });

  }
  ionViewDidLoad() {
    this.retreivePics();
  }
  profile(obj: obj){
    this.art.profile(this.obj).then((data) => {
      this.navCtrl.push(ViewPage, { obj: data });
    })
  }
  nextpage(){
    this.navCtrl.push(ProfilePage);
  }
// typeOfArt() {
//   this.art.selectCategory(this.category).then((data) => {
//     this.arr2.push(data);
//     // console.log(this.arr2);
//     var keys: any = Object.keys(data);
//     for (var i = 0; i < keys.length; i++) {
//       var k = keys[i];
//       if (this.category == data[k].category) {
//         let obj = {
//           category: data[k].category,
//           downloadurl: data[k].downloadurl,
//           name: data[k].name,
//           key: k
//         }
//         this.arr2.push(obj);
//         console.log(this.arr2);
//       }
//     }
//   })
// }
  // category TS\\


push(pic , name , picDesc
) {

  let obj = {
    name:name ,
    pic:pic ,
    picDesc:picDesc
  }


//this.navCtrl.push(ViewPage,{obj:obj});


}


retreivePics(){
  this.art.viewPicMain().then((data: any) =>{
    this.list = data;
  });
}
//  likePic=function(keyIndex){
//   var user = firebase.auth().currentUser;
//    this.uid.likePic('likes' + this.art).then(() =>{
//      if (this.art[keyIndex].color == 'grey'){
//        this.art.addNumOfLikes(this.art[keyIndex].name, this.art[keyIndex].key, this.art[keyIndex].likes).then (data =>{
//          this.ionViewDidLoad();
//          console.log(data);
//        })
//      }
//    else if (this.arr2[keyIndex].color == 'primary'){
//           this.art.removeLike(this.art[keyIndex].name, this.art[keyIndex].key, this.art[keyIndex].likes).then (data =>{
//            this.ionViewDidLoad();
//           })
//        }
//  else{
//   this.art.addNumOfLikes(this.art[keyIndex].name, this.art[keyIndex].key, this.art[keyIndex].likes).then (data =>{
//   this.ionViewDidLoad();

//   })
//  }
//   })
//  }

likePic(key){

  let 
 user = firebase.auth().currentUser;
 console.log(key)
  this.art.likePic(key).then((data: any) =>{
    if (this.art[key]){
             this.art.addNumOfLikes(this.art[key].name, this.art[key].key, this.art[key].likes).then (data =>{
               this.ionViewDidLoad();
               console.log(data);
             })
    
    
    console.log(data);
            }
            else{
                this.art.addNumOfLikes(this.art[key], this.art[key].key, this.art[key].likes).then (data =>{
                this.ionViewDidLoad();
              
                })
               }
            
})
}


}
