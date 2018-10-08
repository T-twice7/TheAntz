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
  numComments;
  Comments = [];
  email;
  comments;
  obj = this.navParams.get("obj");
  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider, private emailComposer: EmailComposer) {
    this.obj = this.navParams.get("obj");
    console.log("this is my index");
    console.log(this.obj);

    this.name = this.obj.name;
    this.downloadurl = this.obj.pic;
    this.keys2 = this.obj.key;
    this.downloadurl1 = this.obj.url
    this.comments = this.obj.comments
    this.email = this.obj.email
    this.view();

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
      to: this.email,
      cc: 'janetzango@gmail.com',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };

    this.emailComposer.open(email);
    // this.art.sendEmail(email);
    // Send a text message using default options

  }

  GoBackToCategory() {
    this.navCtrl.pop();
  }
  sendComment(comment) {
    this.art.comments(this.obj.key, this.comment).then((data) => {
      this.art.addNumComments(this.obj.key, this.comments);
      console.log(data);
      // this.Comments.length =0;
      this.arr2.length = 0;
      this.view();
    })
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
        console.log(data);
      }
    })

  }

}