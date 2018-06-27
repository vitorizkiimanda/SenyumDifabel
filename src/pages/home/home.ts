import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { PostPage } from '../post/post';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  people:any;

  list_search: any;
  search = false;

  constructor(
    public navCtrl: NavController,
    private superTabsCtrl: SuperTabsController) {
  }

  ionViewWillEnter() {
    this.superTabsCtrl.enableTabsSwipe(true);
    this.superTabsCtrl.showToolbar(true);
  }

  openNotification(){
    this.navCtrl.push(NotificationPage);
  }

  openNewPost(){
    this.navCtrl.push(PostPage);
  }

  //Fungsi Searchbar
  getItems(ev) {
    this.search=true;

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


      this.list_search = this.list_search.filter((data) => {
        return ((data.nama_undangan.toLowerCase().indexOf(val.toLowerCase()) > -1) || (data.oleh_undangan.toLowerCase().indexOf(val.toLowerCase()) > -1));
      })
    }
    else {
      this.search=false;
      // this.getInvitation();
    }

    console.log(this.list_search);
    console.log("search="+this.search);
  }
  //Fungsi Searchbar^^^^^

}
