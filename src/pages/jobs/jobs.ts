import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { JobDetailPage } from '../job-detail/job-detail';
import { InterviewPage } from '../interview/interview';

@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {

  bookmark = false;
  jobs:any;
  list_search: any;
  statusSearch : boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobsPage');
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

  openJobDetail(){
    this.navCtrl.push(JobDetailPage);
  }

  openInterview(){
    this.navCtrl.push(InterviewPage);
  }


  //Fungsi Searchbar
  getItems(ev) {
    this.statusSearch=true;

    // Reset items back to all of the items
    this.list_search = this.jobs;

    console.log('list:'+this.list_search);

    // set val to the value of the ev target
    var val = ev.target.value;
    console.log(val);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      // this.list_search = this.list_search.filter((item) => {
      //   return (item.data.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })


      // this.list_search = this.list_search.filter((data) => {
      //   return ((data.nama_undangan.toLowerCase().indexOf(val.toLowerCase()) > -1) || (data.oleh_undangan.toLowerCase().indexOf(val.toLowerCase()) > -1));
      // })
    }
    else {
      this.statusSearch=false;
      // this.getInvitation();
    }

    console.log(this.list_search);
    console.log("search="+this.statusSearch);
  }
  //Fungsi Searchbar^^^^^

}
