import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { CvPage } from '../cv/cv';
import { Data } from '../../providers/data';
import { Http, RequestOptions, Headers  } from '@angular/http';

@Component({
  selector: 'page-job-apply',
  templateUrl: 'job-apply.html',
})
export class JobApplyPage {

  user_id: any;
  apply: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data: Data,
    public http: Http,
    private superTabsCtrl: SuperTabsController) {
  }


  ionViewWillEnter() {
    this.superTabsCtrl.enableTabsSwipe(false);
    this.superTabsCtrl.showToolbar(false);

    this.data.getData().then((data) =>{
      console.log(data);

    })
  }

  ionViewWillLeave(){
    this.superTabsCtrl.showToolbar(true);
    this.superTabsCtrl.enableTabsSwipe(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobApplyPage');
  }

  openCV(){
    this.navCtrl.push(CvPage);
  }

}
