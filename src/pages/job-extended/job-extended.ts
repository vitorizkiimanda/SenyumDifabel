import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';
import { Data } from '../../providers/data';
import { Http, RequestOptions, Headers  } from '@angular/http';



@Component({
  selector: 'page-job-extended',
  templateUrl: 'job-extended.html',
})
export class JobExtendedPage {

  choosed:any;
  bookmark = false;

  user_id: any;
  applies: any;
  saves: any;
  attendies: any;

  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private superTabsCtrl: SuperTabsController,
    private data: Data,
    public http: Http,
    public toastCtrl: ToastController) {

    
    let temp = this.navParams.data;
    this.choosed = temp;
          
    this.data.getData().then((data) =>{
      this.user_id = data.user_id;
      console.log(this.user_id);

      if(this.choosed=="saved") this.getBookmark(this.user_id);
      else if(this.choosed=="applied") this.getApplied(this.user_id);        
      else if(this.choosed=="attended") this.getAttended(this.user_id);        
    })
  }
  
  ionViewWillEnter() {
    this.superTabsCtrl.enableTabsSwipe(false);
    this.superTabsCtrl.showToolbar(false);
  }

  ionViewWillLeave(){
    this.superTabsCtrl.showToolbar(true);
    this.superTabsCtrl.enableTabsSwipe(true);
  }

  getBookmark(data){
    let headers = new Headers({'Authorization':'Basic ' +  btoa('vitovito@gmail.com' + ':' +'vitovito') });
    this.http.get(this.data.BASE_URL+"auth/getBookmark/"+data,{ headers: headers }).subscribe(data => {
      let response = data.json();
      console.log(response);
      this.saves = response;
      // alert(response)
    }, err => {     
      console.log("error cui :",err);
      
    });
  }

  getApplied(data){
    let headers = new Headers({'Authorization':'Basic ' +  btoa('vitovito@gmail.com' + ':' +'vitovito') });
    this.http.get(this.data.BASE_URL+"auth/getApplied/"+data,{ headers: headers }).subscribe(data => {
      let response = data.json();
      console.log(response);
      this.applies = response;
      // alert(response)
    }, err => {     
      console.log("error cui :",err);
      
    });
  }

  getAttended(data){
    let headers = new Headers({'Authorization':'Basic ' +  btoa('vitovito@gmail.com' + ':' +'vitovito') });
    this.http.get(this.data.BASE_URL+"auth/getInterview/"+data,{ headers: headers }).subscribe(data => {
      let response = data.json();
      console.log(response);
      this.attendies = response;
      // alert(response)
    }, err => {     
      console.log("error cui :",err);
      
    });
  }

  changeBookmark(){
    // ini nnti kao udah berhasil bookmark ada snackbarnya gitu 
    if(this.bookmark == false){
      this.bookmark = true;
      let toast = this.toastCtrl.create({
        message: 'Bookmark success',
        duration: 3000,
        showCloseButton: true,
        closeButtonText: 'Ok'
      });
      toast.present();
    }
    else{
      this.bookmark = false;
      let toast = this.toastCtrl.create({
        message: 'Remove bookmark success',
        showCloseButton: true,
        closeButtonText: 'Ok',
        duration: 3000
      });
      toast.present();
    }
  }
}
