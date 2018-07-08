import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { PostPage } from '../post/post';
import { SuperTabsController } from 'ionic2-super-tabs';
import { Data } from '../../providers/data';
import { Http, RequestOptions, Headers  } from '@angular/http';
import { ProfileOtherPage } from '../profile-other/profile-other';
import { JobDetailPage } from '../job-detail/job-detail';
import { CommentPage } from '../comment/comment';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user_id:any;
  user_email:any;
  user_password:any;
  
  post:any;
  people:any;
  list_search: any;
  statusSearch : boolean = false;
  counter:any;

  constructor(
    public navCtrl: NavController,
    private superTabsCtrl: SuperTabsController,
    private data : Data,
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {
  }

  ionViewWillEnter() {
    this.data.getData().then((data) => {
      this.user_password = data.user_password;
      this.user_email = data.user_email;
      this.user_id = data.user_id;
      console.log(this.user_id);
      
      this.getTimeline(this.user_id);
      this.getNotifCount(this.user_id);
    })
    this.getusers();
  }

  getTimeline(data){
    let headers = new Headers({'Authorization':'Basic ' +  btoa('vitovito@gmail.com' + ':' +'vitovito') });
    this.http.get(this.data.BASE_URL+"auth/getFollowingTimeline/"+data,{ headers: headers }).timeout(5000).subscribe(data => {
      let response = data.json();
      console.log(response);
      // alert(response)
      this.post = response;

    }, err => {     
      console.log("error cui :",err);
      this.runTimeError();
      
    });
  }

  getusers(){
    let headers = new Headers({'Authorization':'Basic ' +  btoa('vitovito@gmail.com' + ':' +'vitovito') });
    this.http.get(this.data.BASE_URL+"auth/getusers",{ headers: headers }).subscribe(data => {
      let response = data.json();
      console.log(response);
      // alert(response)
      this.people = response;

    }, err => {     
      console.log("error cui :",err);
      
    });
  }

  getNotifCount(data){
    let headers = new Headers({'Authorization':'Basic ' +  btoa('vitovito@gmail.com' + ':' +'vitovito') });
    this.http.get(this.data.BASE_URL+"auth/getCountNotification/"+data,{ headers: headers }).subscribe(data => {
      let response = data.json();
      console.log(response);
      // alert(response)
      this.counter = response;

    }, err => {     
      console.log("error cui :",err);      
    });
  }

  runTimeError(){
    let alert = this.alertCtrl.create({
      title: 'Failed',
      subTitle: 'Please try again',      
    });
    alert.present();
  }

  openNotification(){
    this.navCtrl.push(NotificationPage);
  }

  openNewPost(){
    this.navCtrl.push(PostPage);
  }

  openProfile(){
    this.navCtrl.push(ProfileOtherPage);
  }

  openComment(){
    this.navCtrl.push(CommentPage);
  }

  //Fungsi Searchbar
  getItems(ev) {
    this.statusSearch=true;

    // Reset items back to all of the items
    this.list_search = this.people;

    console.log('list: \n\n');
    console.log(this.list_search);

    // set val to the value of the ev target
    var val = ev.target.value;
    console.log(val);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      
      this.list_search = this.list_search.filter((data) => {
        // console.log(data.user_name);
        return ((data.user_name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      })
    }
    else {
      this.statusSearch=false;
      this.ionViewWillEnter();
    }

    console.log(this.list_search);
    console.log("search="+this.statusSearch);
  }
  //Fungsi Searchbar^^^^^

}
