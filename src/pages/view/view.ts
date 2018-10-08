import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { obj } from '../../app/class';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
//viewpage Ts\\

export class ViewPage {
  comment: any;
  data: any;
  name;
  downloadurl;
  description;
  downloadurl1;
  downloadurl3;
  keys2;
  arr = [];
  arr2=[];
  uid:any
  PicUrl:any;
  url;
  obj = this.navParams.get("obj");
  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider) {
    this.obj = this.navParams.get("obj");
    console.log("this is my index");
    console.log(this.obj);

    this.name = this.obj.name;
    this.downloadurl = this.obj.pic;
    this.keys2 = this.obj.key;
    this.downloadurl1 = this.obj.url
    this.downloadurl3 = this.obj.url



  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
    console.log(this.obj);
    this.view();
  //  this.count();
  }
  GoBackToCategory() {
    this.navCtrl.pop();
  }
  sendComment() {
    this.art.comments(this.obj.key, this.comment).then((data) => {
      console.log(data);
    this.arr2.length = 0;
      this.view();
    })
  }

  view() {
    this.art.viewComments(this.obj.key, this.comment).then((data) => {
      var keys1: any = Object.keys(data);
      console.log(data)
      for (var i = 0; i < keys1.length; i++) {
        var key = keys1[i];
        let obj = {
          comment:data[key].comment,
          uid: data[key].uid,
          url: data[key].downloadurl,
          username: data[key].username,
        }
        this.arr2.push(obj);
        console.log(this.arr2);
      }
    })

  }
 count(){
   this.art.countComments(this.obj.key).then((data)=>{
   console.log(data);
   })
 }
}
