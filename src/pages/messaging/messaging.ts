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

}
