import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import {MealChoice} from '../../models/meallog/mealLog.interface';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  items;
  meal = {} as MealChoice
  currentDate;
  formattedDate;
  
  
  

   //meal = {} as MealChoice

   

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public fdb: AngularFireDatabase) {
    this.currentDate = new Date();
    this.getFormattedDate();

    this.getDataFromFireBase();

  }
  getDataFromFireBase(){
    this.fdb.list('Meals/').valueChanges().subscribe(
      data => {
        console.log(data)
        this.items = data
      }
    )
  }

  addData(){
    this.fdb.list('Meals/').push(this.meal)
  }
  /*
  addData1(){
    this.fdb.list('Meals/').push(this.meal.mealContents)
  }
  addData2(){
    this.fdb.list('Meals/').push(this.meal.mealCal)
  }  */
 
  //https://www.youtube.com/watch?v=f5mW8piE1Go
  
getFormattedDate(){
  var dateObj = new Date()

  var year = dateObj.getFullYear()
  var month = dateObj.getMonth()
  var date = dateObj.getDate()

  this.formattedDate = month +1  +'-' +date +'-'+year;
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

