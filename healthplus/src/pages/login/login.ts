import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import {User} from '../../models/user'
import{AngularFireAuth} from "angularfire2/auth";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;



  constructor(private aFAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  async login(user: User){
    //API connections
    try{
    const result = this.aFAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    // console.log(result);
    if(result){
    this.navCtrl.push(TabsPage);
        }
      }
    catch(e){
      console.error(e);
    }
  }

    showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Password Reset Email Sent',
    subTitle: 'Will send email to user with details on password reset',
    buttons: ['OK']
  });
  alert.present();
}


reset(email){
  this.aFAuth.auth.sendPasswordResetEmail(email).then(function() {
    console.log("Correct");
  }).catch(function(error) {
    // An error happened.
  });  // register(){
  //  this.navCtrl.push(TabsPage)
  // }
      }
}