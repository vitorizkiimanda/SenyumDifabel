import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

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
    ) {
    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])]
    });
  }

  ionViewWillEnter(){
    this.status = "password";
  }

  login(){
    this.submitAttempt = true;

    if(!this.authForm.valid){
      // this.navCtrl.setRoot(RegisterPage);
    }
    else {
        console.log("success!")
        console.log(this.authForm.value);
        this.navCtrl.setRoot(TabsPage);
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

