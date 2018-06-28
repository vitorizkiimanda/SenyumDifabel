import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { SuperTabsController } from 'ionic2-super-tabs';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-interview-video',
  templateUrl: 'interview-video.html',
})
export class InterviewVideoPage {

  url:any;
  loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sanitizer: DomSanitizer,
    public loadingCtrl: LoadingController,
    private youtube: YoutubeVideoPlayer,
    private screenOrientation: ScreenOrientation,
    private superTabsCtrl: SuperTabsController) {

  }

  ionViewWillEnter() {

    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    
    
    this.url = 'https://www.youtube.com/embed/2uFsk4UEfYU';
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

    this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });

    this.loading.present();

    this.superTabsCtrl.enableTabsSwipe(false);
    this.superTabsCtrl.showToolbar(false);
  }

  ionViewWillLeave(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.superTabsCtrl.showToolbar(true);
    this.superTabsCtrl.enableTabsSwipe(true);
  }

  handleIFrameLoadEvent(): void {
    this.loading.dismiss();
}

}
