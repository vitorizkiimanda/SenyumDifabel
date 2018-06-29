import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { AboutPage } from '../about/about';
import { FollowPage } from '../follow/follow';
import { MessagePersonalPage } from '../message-personal/message-personal';

@Component({
  selector: 'page-profile-other',
  templateUrl: 'profile-other.html',
})
export class ProfileOtherPage {

  statusFollow : boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private superTabsCtrl: SuperTabsController,
    public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.superTabsCtrl.enableTabsSwipe(false);
    this.superTabsCtrl.showToolbar(false);
  }

  ionViewWillLeave(){
    this.superTabsCtrl.showToolbar(true);
    this.superTabsCtrl.enableTabsSwipe(true);
  }
  
  open(data){
    this.navCtrl.push(FollowPage, data);
  }

  openMessage(){
    this.navCtrl.push(MessagePersonalPage);
  }

  follow(){
    this.statusFollow = false;
  }

  unfollow(){
    let prompt = this.alertCtrl.create({
      subTitle:"Unfollow NamaOrangnya?",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            // this.deleteJob(dataJob);
          }
        },
        {
          text: 'Unfollow',
          handler: data => {
            this.statusFollow = true;
          }
        }
      ]
    });
    prompt.present();
  }

}
