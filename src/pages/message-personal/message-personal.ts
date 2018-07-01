import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content  } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-message-personal',
  templateUrl: 'message-personal.html',
})
export class MessagePersonalPage {
  @ViewChild(Content) content:Content;

  message:string;
  sender_name:any;
  chats:any;
  id_sender:any;
  id_receiver:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private superTabsCtrl: SuperTabsController
    // public data: Data,
    // public authHttp: AuthHttp,
    // public http: Http
  ) {

    let temp = this.navParams.data;
    this.sender_name = temp.sender_name;
    this.id_sender = temp.id_user;
    this.id_receiver = temp.id_receiver;

    this.getChats();

  }

  ionViewWillEnter() {
    this.superTabsCtrl.enableTabsSwipe(false);
    this.superTabsCtrl.showToolbar(false);

    this.scrollToBottom();
  }

  ionViewWillLeave(){
    this.superTabsCtrl.showToolbar(true);
    this.superTabsCtrl.enableTabsSwipe(true);
  }


  scrollToBottom() {
    setTimeout(() => {
        this.content.scrollToBottom(200);
    });
  }

  sendChat(keyCode){

    let regex = /^[\r\n/\s/g]*$/;

    if(keyCode == 13 && (regex.test(this.message) == false) && this.message!=null){
      // alert(this.message);
      this.postChat(this.message);
      this.message=null;
      console.log(keyCode);
      
      console.log(this.message);
    }
    else if(keyCode != 13 && (regex.test(this.message) == false)){
      
    }
    else{
      this.message=null;
    }
  }

  getChats() {

    console.log("id sender:" + this.id_sender);

    // this.authHttp.get(this.data.BASE_URL+"/getinboxbyidsender"+"/"+this.id_receiver).subscribe(data => {
    //   let response = data.json();
    //   console.log(response.inbox);
    //   if(response.status==true){

    //     this.chats=response.inbox;

    //     this.scrollToBottom();
    //   }
    //   else{
    //     //alert gagal fetch data
    //     console.log("error");
    //   }
    // });
  }

  postChat(data) {
    console.log("id post new chat:" + this.id_receiver);
    let input = {
      id_receiver: this.id_receiver, 
      title: data,
      description: ''
    };
    // this.authHttp.post(this.data.BASE_URL+"/inbox", input).subscribe(data => {
    //   let response = data.json();
    //   console.log(response);
    //   if(response.status==true){

    //     this.getChats();
        
    //   }
    //   else{
    //     alert("Chat Error");
    //     console.log("error");
    //   }
    // });
  }

}
