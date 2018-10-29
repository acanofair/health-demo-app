import { NgModule, ErrorHandler } from '@angular/core';
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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from '../providers/settings/settings';

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
    CalendarModule,
    IonicModule.forRoot(MyApp)
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
    SettingsProvider
  ]
})
export class AppModule {}
