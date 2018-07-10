import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import 'rxjs/add/operator/timeout';
import { Data } from '../../providers/data';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  dateNow : any = new Date().toISOString();
  timeNow: any = new Date().toLocaleTimeString();

  description:any;
  user_id:any;

  loading:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http,
    private superTabsCtrl: SuperTabsController) {

      this.data.getData().then((data) => {
        this.user_id = data.user_id;
        console.log(this.user_id);
      })

  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad PostPage');

    this.superTabsCtrl.enableTabsSwipe(false);

    this.hideToolbar();
    this.dateNow = String(this.dateNow).substr(0,10)
    console.log("date :", this.dateNow);
    console.log("time :", this.timeNow);
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

  post(){
    if(this.description){

      
      this.loading = this.loadCtrl.create({
          content: 'Please wait...'
      });

      this.loading.present();
      let input = {
        timeline_date: this.dateNow, 
        timeline_time: this.timeNow,
        timeline_photo:null,
        timeline_description: this.description ,
        user_id : this.user_id
      };

      let headers = new Headers({'Authorization':'Basic ' +  btoa('vitovito@gmail.com' + ':' +'vitovito') });
      this.http.post(this.data.BASE_URL+"auth/postTimeline",input,{ headers: headers }).timeout(5000).subscribe(data => {
        let response = data.json();
        console.log(response);
        this.description=null;
        this.navCtrl.pop();
        this.loading.dismiss();
      }, err => {     
        console.log("error cui :",err);
        this.runTimeError();
        this.loading.dismiss();      
      }); 
    }
  }

  runTimeError(){
    let alert = this.alertCtrl.create({
      title: 'Failed',
      subTitle: 'Please try again',      
    });
    alert.present();
  }

}
