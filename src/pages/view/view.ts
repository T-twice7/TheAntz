import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { obj } from '../../app/class';
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


  obj=this.navParams.get("obj");
  name;
  downloadurl;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
    this.obj = this.navParams.get("obj");
    console.log("this is my index");
    console.log(this.obj);
 
    this.name=this.obj.name;
 
   this.downloadurl=this.obj.downloadurl;
 
  }
  ngOnInit() {
 
 
 
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
    console.log(this.obj);
    console.log(this.obj.name);
 
  }
 
 
 }