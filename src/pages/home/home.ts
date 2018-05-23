import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { PostPage } from '../post/post';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private superTabsCtrl: SuperTabsController) {

  }
  
  IonViewDidLoad(){
    this.showToolbar();
  }

  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }

  openNotification(){
    this.navCtrl.push(NotificationPage);
  }

  openNewPost(){
    this.navCtrl.push(PostPage);
  }

}
