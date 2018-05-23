import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private superTabsCtrl: SuperTabsController) {
  }

  ionViewWillEnter() {
    this.hideToolbar();
  }

  ionViewWillLeave(){
    this.showToolbar();
  }

  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }


  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }

}
