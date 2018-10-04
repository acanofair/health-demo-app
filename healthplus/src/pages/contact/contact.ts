import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams} from 'ionic-angular';
import { PersonalinfoPage } from '../personalinfo/personalinfo';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public navParams: NavParams) {

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'You have logged out!',
      subTitle: 'Goodbye',
      buttons: ['OK']
    });
    alert.present();
  }

  openPersonalinfoPage(){
    this.navCtrl.push(PersonalinfoPage)
  }
}
