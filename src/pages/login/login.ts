import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { Data } from '../../providers/data';
import { Http, Headers, ResponseContentType } from '@angular/http';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  submitAttempt: boolean = false;
  authForm: FormGroup;
  
  email: string;
  password: string;
  lihat: boolean = true;
  status: string;

  constructor(
    public navCtrl: NavController, 
    public formBuilder: FormBuilder,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http,
    private superTabsCtrl: SuperTabsController
    ) {
    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])]
    });
  }

  ionViewWillEnter(){
    this.status = "password";
  }

  ionViewWillLeave() {
    this.superTabsCtrl.enableTabsSwipe(true);
    this.superTabsCtrl.showToolbar(true);
  }

  login(){
    this.submitAttempt = true;

    if(!this.authForm.valid){
      
    }
    else {

      let input = { 
        user_email: this.authForm.value.email,
        user_password:this.authForm.value.password
      };

      //api
      let headers = new Headers({'Authorization':'Basic ' +  btoa(this.authForm.value.email + ':' +this.authForm.value.password) });
      this.http.post(this.data.BASE_URL+"auth/login",input,{ headers: headers }).subscribe(data => {
        
        let response = data.json();
        console.log(response)
        
        this.data.logout(); //cleaning local storage
        this.data.login(response,"user");//save to local
        this.navCtrl.setRoot(TabsPage);
        
      }, err => {     
        console.log("error :",err);
        
      });
      //^^api
    }
  }

  showPassword(){
    this.status = "text";
    this.lihat = false;
    console.log(this.status);
  }

  hidePassword(){
    this.status = "password";
    this.lihat = true;
    console.log(this.status);
  }

  gotoRegisterPage(){
    this.navCtrl.setRoot(RegisterPage);
  }
}

