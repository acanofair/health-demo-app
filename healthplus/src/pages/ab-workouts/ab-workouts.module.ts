import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbWorkoutsPage } from './ab-workouts';

@NgModule({
  declarations: [
    AbWorkoutsPage,
  ],
  imports: [
    IonicPageModule.forChild(AbWorkoutsPage),
  ],
})
export class AbWorkoutsPageModule {}
