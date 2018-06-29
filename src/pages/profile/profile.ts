import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { ProfileEditPage } from '../profile-edit/profile-edit';
import { HomePage } from '../home/home';
import { MessagingPage } from '../messaging/messaging';
import { JobsPage } from '../jobs/jobs';
import { AboutPage } from '../about/about';
import { FollowPage } from '../follow/follow';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  experience = true;
  education = false;
  skill = false;
  accomplishment = false;
  contact = false;

  
  tab1Root = AboutPage;
  tab2Root = AboutPage;
  tab3Root = AboutPage;
  tab4Root = AboutPage;
  tab5Root = AboutPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  openSetting(){
    this.navCtrl.push(SettingPage);
  }

  openProfileEdit(){
    this.navCtrl.push(ProfileEditPage);
  }

  open(data){
    this.navCtrl.push(FollowPage, data);
  }


  //algo for dynamic tabs

  onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
    if(ev.index==0) this.activeExperience();
    else if(ev.index==1) this.activeEducation();
    else if(ev.index==2) this.activeSkill();
    else if(ev.index==3) this.activeAccomplishment();
    else if(ev.index==4) this.activeContact();
  }
  
  activeExperience(){
    this.experience = true;
    this.education = false;
    this.skill = false;
    this.accomplishment = false;
    this.contact = false;
  }

  activeEducation(){
    this.experience = false;
    this.education = true;
    this.skill = false;
    this.accomplishment = false;
    this.contact = false;
  }

  activeSkill(){
    this.experience = false;
    this.education = false;
    this.skill = true;
    this.accomplishment = false;
    this.contact = false;
  }

  activeAccomplishment(){
    this.experience = false;
    this.education = false;
    this.skill = false;
    this.accomplishment = true;
    this.contact = false;
  }

  activeContact(){
    this.experience = false;
    this.education = false;
    this.skill = false;
    this.accomplishment = false;
    this.contact = true;
  }

  option(data){
    // let dataJob = data;
    // let date = data.duedate.substring(8,10)+'-'+ data.duedate.substring(5,7) + '-' + data.duedate.substring(0,4);
    let prompt = this.alertCtrl.create({
      title: "UX Researcher",
      subTitle:"Bukalapak<br>2016-2018",
      buttons: [
        {
          text: 'Delete',
          handler: data => {
            // this.deleteJob(dataJob);
          }
        },
        {
          text: 'Edit',
          handler: data => {
            // this.navCtrl.push(EditJobPage, dataJob);
          }
        }
      ]
    });
    prompt.present();
  }

  add() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Choose Field');

    alert.addInput(
      {
      type: 'radio',
      label: 'Experience',
      value: 'experience',
      checked: true
      },
    );

    alert.addInput(
      {
      type: 'radio',
      label: 'Education',
      value: 'education'
      },
    );

    alert.addInput(
      {
      type: 'radio',
      label: 'Skill',
      value: 'skill'
      },
    );

    alert.addInput(
      {
      type: 'radio',
      label: 'Achivement',
      value: 'achivement'
      },
    );

    alert.addInput(
      {
      type: 'radio',
      label: 'Contact',
      value: 'contact'
      },
    );

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        if(data=="experience") console.log("experience choosen");
        if(data=="education") console.log("education choosen");
        if(data=="skill") console.log("skill choosen");
        if(data=="achivement") console.log("achivement choosen");
        if(data=="contact") console.log("contact choosen");
      }
    });
    alert.present();
  }

}
