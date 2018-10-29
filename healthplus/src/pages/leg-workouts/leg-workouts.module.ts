import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LegWorkoutsPage } from './leg-workouts';

@NgModule({
  declarations: [
    LegWorkoutsPage,
  ],
  imports: [
    IonicPageModule.forChild(LegWorkoutsPage),
  ],
})
export class LegWorkoutsPageModule {}
