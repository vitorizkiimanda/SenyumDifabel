import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditPage {

  name:any="Vito Rizki Imanda"
  email:any="vitorizkiimanda@gmail.com"
  phone:any="089657011491"
  address:any="South Jakarta"
  biodata:any="lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet"
  experience:any="lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet"
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private superTabsCtrl: SuperTabsController) {
  }

  ionViewWillEnter() {
    this.superTabsCtrl.enableTabsSwipe(false);
    this.superTabsCtrl.showToolbar(false);
  }

  ionViewWillLeave(){
    this.superTabsCtrl.showToolbar(true);
    this.superTabsCtrl.enableTabsSwipe(true);
  }

}
