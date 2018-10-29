import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import {MealChoice} from '../../models/meallog/mealLog.interface';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  currentDate;
  formattedDate;
  arrData=[]
  // mealchoice
   meal = {} as MealChoice

   private mealListRef = this.fdb.list<MealChoice>('meal');

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, private fdb: AngularFireDatabase) {
    this.currentDate = new Date();
    this.getFormattedDate();


    // private nMealRef = this.fdb.list('/meal');

    this.fdb.list("/meal/").valueChanges().subscribe(_data => {
      this.arrData =_data;
      console.log(this.arrData);
    });
}
  addMeal(meal: MealChoice){
    // this.fdb.list("/Meals/").push(this.meal);
    return this.mealListRef.push(meal);

  }
  // btnAddClicked(){
  //   // this.fdb.list("/meal/").push(this.mealchoice);
  // }

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

