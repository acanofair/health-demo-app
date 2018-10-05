import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  currentDate;
  formattedDate;
  
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
    this.currentDate = new Date();
    this.getFormattedDate()
}

getFormattedDate(){
  var dateObj = new Date()

  var year = dateObj.getFullYear()
  var month = dateObj.getMonth()
  var date = dateObj.getDate()

  this.formattedDate = month +'-' +date +'-'+year;
}

  showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Meal Submitted',
    subTitle: 'When working properly this information will be stored in the database and displayed on the calendar for this day and meal',
    buttons: ['OK']
  });
  alert.present();
}

}

