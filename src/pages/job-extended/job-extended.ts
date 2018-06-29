import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-job-extended',
  templateUrl: 'job-extended.html',
})
export class JobExtendedPage {

  choosed:any;
  bookmark = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController) {

    
    let temp = this.navParams.data;
    this.choosed = temp;

    console.log(this.choosed)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobExtendedPage');
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
