import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { ProfileEditPage } from '../profile-edit/profile-edit';
import { HomePage } from '../home/home';
import { MessagingPage } from '../messaging/messaging';
import { JobsPage } from '../jobs/jobs';
import { AboutPage } from '../about/about';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
