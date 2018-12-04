import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, App} from 'ionic-angular';
import { PersonalinfoPage } from '../personalinfo/personalinfo';
import { AboutInfoPage } from '../about-info/about-info';
import { HomePage } from '../home/home';
import { SettingsProvider } from './../../providers/settings/settings';
import { WelcomePage } from '../welcome/welcome';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  selectedTheme: String;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public navParams: NavParams,private settings: SettingsProvider,private app:App) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

  }

  logout() {
    let logout = this.alertCtrl.create({
      title: 'You have logged out!',
      subTitle: 'Goodbye',
      buttons: ['OK']
    });
    logout.present();
    const root = this.app.getRootNav();
    root.popToRoot();
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


  