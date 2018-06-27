import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { MessagingPage } from '../messaging/messaging';
import { JobsPage } from '../jobs/jobs';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MessagingPage;
  tab3Root = JobsPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}