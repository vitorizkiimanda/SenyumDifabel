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
  
  people:any;
  list_search: any;
  statusSearch : boolean = false;
  counter:any = 1;

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
      
      this.user_id = data.user_id;
      console.log(this.user_id);
    })
    this.getusers();
    this.getTimeline(this.user_id);
  }

  getTimeline(data){

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

    console.log('list:'+this.list_search);

    // set val to the value of the ev target
    var val = ev.target.value;
    console.log(val);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list_search = this.list_search.filter((item) => {
        return (item.data.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })


      // this.list_search = this.list_search.filter((data) => {
      //   return ((data.nama_undangan.toLowerCase().indexOf(val.toLowerCase()) > -1) || (data.oleh_undangan.toLowerCase().indexOf(val.toLowerCase()) > -1));
      // })
    }
    else {
      this.statusSearch=false;
      // this.getInvitation();
    }

    console.log(this.list_search);
    console.log("search="+this.statusSearch);
  }
  //Fungsi Searchbar^^^^^

}
