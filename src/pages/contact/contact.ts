import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { ProfileOtherPage } from '../profile-other/profile-other';
import { MessagePersonalPage } from '../message-personal/message-personal';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  
  people:any;
  list_search: any;
  statusSearch : boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private superTabsCtrl: SuperTabsController) {
  }

  ionViewWillEnter() {
    this.superTabsCtrl.enableTabsSwipe(false);
    this.superTabsCtrl.showToolbar(false);
  }

  ionViewWillLeave(){
    this.superTabsCtrl.showToolbar(true);
    this.superTabsCtrl.enableTabsSwipe(true);
  }

  openChat(){
    this.navCtrl.push(MessagePersonalPage);
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
