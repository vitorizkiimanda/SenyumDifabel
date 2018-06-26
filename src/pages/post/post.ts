import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private superTabsCtrl: SuperTabsController) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad PostPage');

    this.superTabsCtrl.enableTabsSwipe(false);

    this.hideToolbar();
  }

  ionViewWillLeave(){
    this.superTabsCtrl.showToolbar(true);
    this.superTabsCtrl.enableTabsSwipe(true);
  }

  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }


  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }

}
