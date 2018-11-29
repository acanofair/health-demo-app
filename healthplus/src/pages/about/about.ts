import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import {MealChoice} from '../../models/meallog/mealLog.interface';
import { Observable } from 'rxjs/Observable';
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
   //private mealListRef = this.fdb.list<MealChoice>('meal');

    mealListRef$: Observable<any[]>;
  items;
  dataToAdd;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public fdb: AngularFireDatabase) {
   this.getDataFromFireBase();
   
    this.currentDate = new Date();
    this.getFormattedDate();

  }
 
getDataFromFireBase(){
  this.fdb.list('meal/').valueChanges().subscribe(
      data=>{
        console.log(data)
        this.items =data
      }
  ) 
}
addData(){
  this.fdb.list('meal/').push(this.dataToAdd)
}
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