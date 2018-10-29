import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArmWorkoutsPage } from './arm-workouts';

@NgModule({
  declarations: [
    ArmWorkoutsPage,
  ],
  imports: [
    IonicPageModule.forChild(ArmWorkoutsPage),
  ],
})
export class ArmWorkoutsPageModule {}
