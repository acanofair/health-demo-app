import { Component } from '@angular/core';
import { AboutPage } from '../../pages/about/about';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the HeaderMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderMenuComponent Component');
    this.text = 'Hello World';
  } 
  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}
  //openAboutPage(){
    //this.navCtrl.push(AboutPage)
  //}

}
