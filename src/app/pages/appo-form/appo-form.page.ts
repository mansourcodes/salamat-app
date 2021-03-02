import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { loadAppformBranch } from 'src/app/store/appoform/appoform.actions';
import { getBranchId, getClinicId, getDoctorId } from 'src/app/store/appoform/appoform.selectors';

@Component({
  selector: 'app-appo-form',
  templateUrl: './appo-form.page.html',
  styleUrls: ['./appo-form.page.scss'],
})
export class AppoFormPage implements OnInit {
  DatePickerYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  DatePickerDayNames = [
    's\u00f8n',
    'man',
    'tir',
    'ons',
    'tor',
    'fre',
    'l\u00f8r',
  ];
  DatePickerOptions: any;

  getDoctorIdSubscription: Subscription;
  getClinicIdSubscription: Subscription;
  getBranchIdSubscription: Subscription;


  constructor(private store: Store<AppState>, private router: Router, public toastController: ToastController) { }

  ngOnInit() {


    this.validateDoctor();


    this.DatePickerOptions = {
      buttons: [
        {
          text: 'Cancle',
          handler: () => true,
        },
        {
          text: 'Done',
          handler: () => true,
        },
      ],
    }



  }

  validateDoctor() {
    this.getBranchIdSubscription = this.store.select(getBranchId).subscribe(branch_id => {
      if (!branch_id) {
        this.redirectHome();
      }
    });
    this.getClinicIdSubscription = this.store.select(getClinicId).subscribe(clinic_id => {
      if (!clinic_id) {
        this.redirectHome();
      }
    });
    this.getDoctorIdSubscription = this.store.select(getDoctorId).subscribe(doctor_id => {
      if (!doctor_id) {
        this.redirectHome();
      }
    });
  }


  redirectHome() {
    this.router.navigateByUrl('/home');
    this.presentToast('Form Expired!');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  ionViewWillLeave() {
    if (this.getDoctorIdSubscription) {
      this.getDoctorIdSubscription.unsubscribe();
    }
    if (this.getClinicIdSubscription) {
      this.getClinicIdSubscription.unsubscribe();
    }
    if (this.getBranchIdSubscription) {
      this.getBranchIdSubscription.unsubscribe();
    }
  }
}
