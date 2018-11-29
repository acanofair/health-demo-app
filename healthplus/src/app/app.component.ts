import { SettingsProvider } from '../providers/settings/settings';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactPage } from '../pages/contact/contact';

import{ timer } from 'rxjs/observable/timer';

//import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
//import {StartPage } from '../pages/start/start';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  selectedTheme: String;
  rootPage:any = WelcomePage;

  showSplash = true;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
     
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      timer(3000).subscribe(()=> this.showSplash = false)
    });
  }
}
