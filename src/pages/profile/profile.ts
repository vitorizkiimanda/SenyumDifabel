import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { ProfileEditPage } from '../profile-edit/profile-edit';

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
