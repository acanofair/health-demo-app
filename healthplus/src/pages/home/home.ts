import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    selectedTheme: String;
    
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

    toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  } 
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'You have logged in!',
      subTitle: 'Welcome',
      buttons: ['OK']
    });
    alert.present();
  }

}