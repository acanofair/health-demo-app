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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
