import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-job-detail',
  templateUrl: 'job-detail.html',
})
export class JobDetailPage {

  bookmark:boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private superTabsCtrl: SuperTabsController) {
  }


  ionViewWillEnter() {
    this.superTabsCtrl.enableTabsSwipe(false);
    this.superTabsCtrl.showToolbar(false);
  }

  ionViewWillLeave(){
    this.superTabsCtrl.showToolbar(true);
    this.superTabsCtrl.enableTabsSwipe(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobDetailPage');
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
