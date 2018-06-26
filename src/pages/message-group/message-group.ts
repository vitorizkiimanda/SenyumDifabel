import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-message-group',
  templateUrl: 'message-group.html',
})
export class MessageGroupPage {

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
