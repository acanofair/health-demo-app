import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutInfoPage } from './about-info';

@NgModule({
  declarations: [
    AboutInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutInfoPage),
  ],
})
export class AboutInfoPageModule {}
