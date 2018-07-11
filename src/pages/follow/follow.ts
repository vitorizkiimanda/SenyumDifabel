import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { Data } from '../../providers/data';
import { Http, RequestOptions, Headers  } from '@angular/http';

@Component({
  selector: 'page-follow',
  templateUrl: 'follow.html',
})
export class FollowPage {

  choosed:any;
  statusFollow : boolean = true;
  user_id: any;
  following: any;
  follower: any;
  
  people:any;
  list_search: any;
  statusSearch : boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private data: Data,
    public http: Http,
    private superTabsCtrl: SuperTabsController) {
      let temp = this.navParams.data;
      this.choosed = temp;
      
      this.data.getData().then((data) =>{
        this.user_id = data.user_id;
        console.log(this.user_id);

        if(this.choosed=="following") this.getFollowing(this.user_id);
        else if(this.choosed=="follower") this.getFollower(this.user_id);        
      })
    }

  ionViewWillEnter() {
    this.superTabsCtrl.enableTabsSwipe(false);
    this.superTabsCtrl.showToolbar(false);
  }

  ionViewWillLeave(){
    this.superTabsCtrl.showToolbar(true);
    this.superTabsCtrl.enableTabsSwipe(true);
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

  getFollowing(data){
    let headers = new Headers({'Authorization':'Basic ' +  btoa('vitovito@gmail.com' + ':' +'vitovito') });
    this.http.get(this.data.BASE_URL+"auth/getFollowing/"+data,{ headers: headers }).subscribe(data => {
      let response = data.json();
      console.log(response);
      this.following = response;
      // alert(response)
    }, err => {     
      console.log("error cui :",err);
      
    });
  }

  getFollower(data){
    let headers = new Headers({'Authorization':'Basic ' +  btoa('vitovito@gmail.com' + ':' +'vitovito') });
    this.http.get(this.data.BASE_URL+"auth/getFollower/"+data,{ headers: headers }).subscribe(data => {
      let response = data.json();
      console.log(response);
      this.follower = response;
      // alert(response)
    }, err => {     
      console.log("error cui :",err);
      
    });
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
      // this.list_search = this.list_search.filter((item) => {
      //   return (item.data.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })


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
