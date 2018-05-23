import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html',
})
export class CreateGroupPage {

  groupName:any;
  count:number = 0;

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

  counter(data:any){
    this.count = data.length;
  }

}
