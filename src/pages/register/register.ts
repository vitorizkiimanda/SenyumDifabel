import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validator, Validators, AbstractControl } from '@angular/forms';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { TabsPage } from '../tabs/tabs';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  submitAttempt: boolean = false;
  registerForm: FormGroup;
  
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  lihatPassword: boolean = true;
  lihatConfirmPassword: boolean = true;
  status: string;
  mismatch: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public formBuilder: FormBuilder,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {
    this.registerForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])]
    }, {validator: this.passMismatch('password', 'confirmPassword')});
  }

  ionViewWillEnter(){
    this.status = "password";
  }

  confirmPass(){
    if(this.registerForm.value.password == this.registerForm.value.confirmPassword) this.mismatch = false;
    else this.mismatch = true;
  }

  passMismatch(passwordKey: string, confirmPasswordKey: string){
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
    // if(this.password != this.confirmPassword)
    // {
    //   this.mismatch = true;
    // }    
    // else{
    //   this.mismatch = false;      
    // }
  }

  register(){
    this.submitAttempt = true;

    if(!this.registerForm.valid){
      // this.navCtrl.setRoot(RegisterPage);
    }
    else {
        console.log("success!")
        console.log(this.registerForm.value);
        this.navCtrl.setRoot(TabsPage);
    }
  }

  showPassword(){
    this.status = "text";
    this.lihatPassword = false;
    console.log(this.status);
  }

  hidePassword(){
    this.status = "password";
    this.lihatPassword = true;
    console.log(this.status);
  }

  showConfirmPassword(){
    this.status = "text";
    this.lihatConfirmPassword = false;
    console.log(this.status);
  }

  hideConfirmPassword(){
    this.status = "password";
    this.lihatConfirmPassword = true;
    console.log(this.status);
  }

  gotoLoginPage(){
    this.navCtrl.setRoot(LoginPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}

