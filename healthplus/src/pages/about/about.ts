import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	currentDate;
	formattedDate;

  constructor(public navCtrl: NavController) {
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

}
