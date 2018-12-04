import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

import { PInfo } from '../../models/uinfo/UInfos.interface';
/**
 * Generated class for the PersonalinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personalinfo',
  templateUrl: 'personalinfo.html',
})

export class PersonalinfoPage {
 
 items;
 info = {} as PInfo

  

  constructor(public navCtrl: NavController, public navParams: NavParams,public fdb: AngularFireDatabase) {
   
    this.getUserDataFromFireBase();
  }
  
    getUserDataFromFireBase(){
      this.fdb.list('User/').valueChanges().subscribe(
        data => {
          console.log(data)
          this.items = data
        }
      )
    }
    addUser(){
      this.fdb.list('User/').push(this.info)
    }


//  ionViewDidLoad() {
  //  console.log('ionViewDidLoad PersonalinfoPage');
//  }

}
