import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbWorkoutsPage } from '../ab-workouts/ab-workouts';
import { LegWorkoutsPage } from '../leg-workouts/leg-workouts';
import { ArmWorkoutsPage } from '../arm-workouts/arm-workouts';

/**
 * Generated class for the WorkoutsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutsPage');
  }
 openabsWorkoutPage(){
  this.navCtrl.push(AbWorkoutsPage)
}
openLegWorkoutPage(){
  this.navCtrl.push(LegWorkoutsPage)
}
openArmWorkoutPage(){
  this.navCtrl.push(ArmWorkoutsPage)
}

}
