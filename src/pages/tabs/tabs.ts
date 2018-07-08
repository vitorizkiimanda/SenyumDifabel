import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { MessagingPage } from '../messaging/messaging';
import { JobsPage } from '../jobs/jobs';
import { SuperTabsController } from 'ionic2-super-tabs';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  messageNotif:any= 1;

  tab1Root = HomePage;
  tab2Root = MessagingPage;
  tab3Root = JobsPage;
  tab4Root = ProfilePage;

  constructor(
    private superTabsCtrl: SuperTabsController,
    public navParams: NavParams
  ) {
    let temp = this.navParams.data;
  }

  ngAfterViewInit() {
  
    // must wait for AfterViewInit if you want to modify the tabs instantly
    if(this.messageNotif) this.superTabsCtrl.setBadge('messageTab', this.messageNotif);
  
  }

  update(data){
    console.log(data)
    if(data.index == 1) console.log("messaginggggg")
  }
}