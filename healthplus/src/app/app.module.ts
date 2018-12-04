import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HeaderMenuComponent } from '../components/header-menu/header-menu';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkoutsPage } from '../pages/workouts/workouts';
import { AbWorkoutsPage } from '../pages/ab-workouts/ab-workouts';
import { PersonalinfoPage } from '../pages/personalinfo/personalinfo';
import { LegWorkoutsPage } from '../pages/leg-workouts/leg-workouts';
import { ArmWorkoutsPage } from '../pages/arm-workouts/arm-workouts';
import { AboutInfoPage } from '../pages/about-info/about-info';
import { CalendarModule } from 'ionic3-calendar-en';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { StartPage } from '../pages/start/start';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {AngularFireAuthModule } from "angularfire2/auth";
import {FIREBASE_CONFIG} from './app.firebase.config'; 
import {AngularFireModule} from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from '../providers/settings/settings';

var config = {
  apiKey: "AIzaSyCMmYv3WX0VYdwevdnlrmj2vP5VgSl6400",
  authDomain: "mobile-app-project-38add.firebaseapp.com",
  databaseURL: "https://mobile-app-project-38add.firebaseio.com",
  projectId: "mobile-app-project-38add",
  storageBucket: "mobile-app-project-38add.appspot.com",
  messagingSenderId: "200536791321"

}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WorkoutsPage,
    AbWorkoutsPage,
    TabsPage,
    PersonalinfoPage,
    LegWorkoutsPage,
    ArmWorkoutsPage,
    AboutInfoPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    StartPage,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalendarModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WorkoutsPage,
    AbWorkoutsPage,
    PersonalinfoPage,
    LegWorkoutsPage,
    ArmWorkoutsPage,
    AboutInfoPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    StartPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    AngularFireAuthModule
  ]
})
export class AppModule {}
