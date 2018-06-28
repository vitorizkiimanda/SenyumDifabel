import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-profile-other',
  templateUrl: 'profile-other.html',
})
export class ProfileOtherPage {

  experience = true;
  education = false;
  skill = false;
  accomplishment = false;
  contact = false;
  statusFollow : boolean = true;

  
  tab1Root = AboutPage;
  tab2Root = AboutPage;
  tab3Root = AboutPage;
  tab4Root = AboutPage;
  tab5Root = AboutPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private superTabsCtrl: SuperTabsController,
    public alertCtrl: AlertController) {
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
