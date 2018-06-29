import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { MessagePersonalPage } from '../message-personal/message-personal';
import { MessageGroupPage } from '../message-group/message-group';
import { CreateGroupPage } from '../create-group/create-group';

@Component({
  selector: 'page-messaging',
  templateUrl: 'messaging.html',
})
export class MessagingPage {

  messages:any;
  list_search: any;
  statusSearch : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagingPage');
  }

  openContact(){
    this.navCtrl.push(ContactPage);
  }

  openMessage(data: any){
    if(data == 1) this.navCtrl.push(MessagePersonalPage);
    else this.navCtrl.push(MessageGroupPage);
  }

  openCreateGroup(){
    this.navCtrl.push(CreateGroupPage);
  }

  //Fungsi Searchbar
  getItems(ev) {
    this.statusSearch=true;

    // Reset items back to all of the items
    this.list_search = this.messages;

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