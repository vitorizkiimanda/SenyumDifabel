import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-interview-video',
  templateUrl: 'interview-video.html',
})
export class InterviewVideoPage {

  url:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sanitizer: DomSanitizer,
    private superTabsCtrl: SuperTabsController) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/2uFsk4UEfYU')
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
