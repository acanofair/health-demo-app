import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {User} from "../../models/user";
import {AngularFireAuth} from "angularfire2/auth";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;

  constructor(private aFuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

    async signup(user: User){
      //API connections
      try{
      const result = await this.aFuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      this.navCtrl.push(LoginPage);
        }
        catch(e){
          console.error(e);
        }
    }
}