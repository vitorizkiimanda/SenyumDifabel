import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { ProfileOtherPage } from '../profile-other/profile-other';
import { CommentPage } from '../comment/comment';
import 'rxjs/add/operator/timeout';
import { Data } from '../../providers/data';
import { Http, Headers } from '@angular/http';


@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  loading:any;
  user_id:any;

  statusFollow : boolean = true;

  comments:any;
  likes:any;
  follows:any;
  proposals:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data : Data,
    public loadCtrl: LoadingController,
    public http: Http,
    public alertCtrl: AlertController,
    private superTabsCtrl: SuperTabsController) {

      
    this.data.getData().then((data) => {
      this.user_id = data.user_id;
      console.log(this.user_id);
    })
  }

  ionViewWillEnter() {
    this.superTabsCtrl.enableTabsSwipe(false);
    this.superTabsCtrl.showToolbar(false);

    this.getNotif();
  }

  ionViewWillLeave(){
    this.superTabsCtrl.showToolbar(true);
    this.superTabsCtrl.enableTabsSwipe(true);
  }

  openProfile(){
    this.navCtrl.push(ProfileOtherPage);
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

  openPost(){
    this.navCtrl.push(CommentPage);
  }

  getNotif(){
    
  }

  getNotifComment(){

    this.loading = this.loadCtrl.create({
        content: 'Please wait...'
    });

    this.loading.present();
    let input = {
      user_id : this.user_id
    };
    let headers = new Headers({'Authorization':'Basic ' +  btoa('vitovito@gmail.com' + ':' +'vitovito') });
    this.http.post(this.data.BASE_URL+"/auth/pushNotification/comment",input,{ headers: headers }).timeout(5000).subscribe(data => {
      let response = data.json();
      console.log(response);
      // alert(response)
      this.comments = response;
      this.loading.dismiss();

    }, err => {     
      console.log("error cui :",err);
      this.runTimeError();
      this.loading.dismiss();
    });
  }

  getNotifLike(){

  }

  getNotifFollow(){

  }

  getNotifProposal(){

  }

  runTimeError(){
    let alert = this.alertCtrl.create({
      title: 'Failed',
      subTitle: 'Please try again',      
    });
    alert.present();
  }

}
