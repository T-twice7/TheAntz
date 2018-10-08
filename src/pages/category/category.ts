import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
import { obj } from '../../app/class';
import { ProfilePage } from '../profile/profile';
import { ViewPage } from '../view/view';
import firebase from 'firebase';
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
 category:any;
 arr2 = [];
 uid: any;
 list =[];
 name;
 username;
 // public CValue:String;
 constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider) {
   this.retreivePics()
 }

 // onChange(CValue){
 //   console.log(CValue);


 // }
 ionViewDidLoad() {

   this.retreivePics();
 }
 profile(obj: obj){
   this.art.profile(this.obj).then((data) => {
     this.navCtrl.push(ProfilePage, { obj: data });
   })
 }
 nextpage(){
   this.navCtrl.push(ProfilePage);
 }
 typeOfArt() {
   this.arr2.length = 0;
   this.art.selectCategory(this.category).then((data) => {
         var keys: any = Object.keys(data);
         for (var i = 0; i < keys.length; i++) {
           var k = keys[i];
           if (this.category == data[k].category) {
             let obj = {
               category: data[k].category,
               downloadurl: data[k].downloadurl,
               name: data[k].name,
               key: k
             }
             this.arr2.push(obj);
             console.log(this.arr2);
           }
         }
       })
     }
// push(b){
//   console.log(b);
//   let details=this.arr2[b];
//   console.log(details);
//   this.navCtrl.push(ViewPage,{obj:details});

// }
retreivePics(){
 this.arr2.length = 0;
 this.art.viewPicMain(this.name,this.username).then((data: any) =>{
 this.arr2 = data;
 });
}
}
