import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';
import {AngularFireAuth} from "angularfire2/auth";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    selectedTheme: String;
    
  constructor(private aFAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public alertCtrl: AlertController, private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  ionViewWillLoad(){
    this.aFAuth.authState.subscribe(data =>{ 
      if(data.email && data.uid){
      this.toast.create({
        message:'Welcome to Healthplus',
        duration: 2000
      }).present();
    }
    else{
   this.toast.create({
        message:'Could not find user',
        duration: 2000
      }).present();
    }
    });


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