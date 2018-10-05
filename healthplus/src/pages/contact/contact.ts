import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams} from 'ionic-angular';
import { PersonalinfoPage } from '../personalinfo/personalinfo';
import { AboutInfoPage } from '../about-info/about-info';
import { HomePage } from '../home/home';
import { SettingsProvider } from './../../providers/settings/settings';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  selectedTheme: String;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public navParams: NavParams,private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'You have logged out!',
      subTitle: 'Goodbye',
      buttons: ['OK']
    });
    alert.present();
  }

  toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  } 

  openPersonalinfoPage(){
    this.navCtrl.push(PersonalinfoPage)
 }
 openaboutinfoPage(){
    this.navCtrl.push(AboutInfoPage)
  }
  openHomePage(){
    this.navCtrl.push(HomePage)
  }
}


  