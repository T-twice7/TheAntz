import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { obj } from '../../app/class';
import { StreetartzProvider } from '../../providers/streetart-database/streetart-database';
import { EmailComposer } from '@ionic-native/email-composer';
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
  arr2 = [];
  uid: any
  PicUrl: any;
  url;
  num;
  numComments;
  Comments = [];
  email;
  comments;
  likes;
  like;
  username;
  commentsLeng;
  LikesLeng;
  location;
  price
  obj = this.navParams.get("obj");
  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider, private emailComposer: EmailComposer) {
    this.obj = this.navParams.get("obj");
    console.log("this is my index");
    console.log(this.email);

    this.username = this.obj.username;
    this.downloadurl = this.obj.pic;
    this.keys2 = this.obj.key;
    this.downloadurl1 = this.obj.url
    this.comments = this.obj.comments
    this.email = this.obj.email
    this.name = this.obj.name
    this.description=this.obj.description
    this.location =this.obj.location
    this.price =this.obj.price
    this.likes = this.obj.likes
    this.view();
    // this.viewLikes(); 

    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        console.log(available);
      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
    console.log(this.obj);

  }

  BuyArt() {
    let email = {
      to: this.obj.email,
      cc: 'theantz39@gmail.com',
      attachments: [
        this.obj.pic
      ],
      subject: this.obj.username,
      body: 'How are you?',
      // isHtml: true
    };
    this.emailComposer.open(email);
  }

  GoBackToCategory() {
    this.navCtrl.pop();
  }
  sendComment(comment) {
    this.art.comments(this.obj.key, this.comment).then((data) => {
      this.arr2.push(data);
     console.log(this.arr2)
      let commentslength = this.art.addNumComments(this.obj.key, this.comments);
      console.log(data);
      this.arr2.length = 0;
      this.view();
    })
    // console.log(this.arr2.length);
  }

  view() {
    this.art.viewComments(this.obj.key, this.comment).then((data) => {
      console.log(data)
      var keys1: any = Object.keys(data);
      for (var i = 0; i < keys1.length; i++) {
        var key = keys1[i];
        let obj = {
          comment: data[key].comment,
          uid: data[key].uid,
          downloadurl: data[key].url,
          username: data[key].username,
          date: data[key].date
        }
        this.arr2.push(obj);
        console.log(this.arr2);
      }
      console.log("janet");
      this.commentsLeng=this.arr2.length;
      console.log(this.commentsLeng);
    })

  
  }



}