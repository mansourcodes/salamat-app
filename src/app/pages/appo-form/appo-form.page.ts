import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, debounceTime, take, map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { loadAppformBranch } from 'src/app/store/appoform/appoform.actions';
import { getBranchId, getClinicId, getDoctorId } from 'src/app/store/appoform/appoform.selectors';

@Component({
  selector: 'app-appo-form',
  templateUrl: './appo-form.page.html',
  styleUrls: ['./appo-form.page.scss'],
})
export class AppoFormPage implements OnInit {
  form: FormGroup;

  formInitState = {
    clinic_id: 1,
    branch_id: 1,
    doctor_id: 1,
    date: new Date(),
  }

  minDate: Date;
  maxDate: Date;


  getDoctorIdSubscription: Subscription;
  getClinicIdSubscription: Subscription;
  getBranchIdSubscription: Subscription;


  constructor(private store: Store<AppState>, private router: Router, public toastController: ToastController) { }

  ngOnInit() {

    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);


    this.validateDoctor();
    this.initForm();


  }

  initForm() {

    this.form = new FormGroup({
      clinic_id: new FormControl(this.formInitState.clinic_id, {
        validators: [Validators.required],
      }),
      branch_id: new FormControl(this.formInitState.branch_id, {
        validators: [Validators.required],
      }),
      doctor_id: new FormControl(this.formInitState.doctor_id, {
        validators: [Validators.required],
      }),

      date: new FormControl(this.formInitState.date, {
        validators: [Validators.required],
      }),
      time: new FormControl('', {
        validators: [Validators.required],
      }),

      patient_name: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
        ],
      }),
      patient_cpr: new FormControl('', {
        validators: [
          Validators.required,
          Validators.min(1000000),
          Validators.max(999999999),
          Validators.minLength(9),
          Validators.maxLength(9),
        ],
      }),
      patient_nationality: new FormControl('bh', {
        validators: [Validators.required],
      }),

      notes: new FormControl(''),
      addressLine2: new FormControl(
        ''
      ),

      agree_terms: new FormControl(false, {
        validators: [Validators.requiredTrue],
      }),
    });


    this.form.get('date').valueChanges.subscribe(chosenDate => {
      console.log(chosenDate);


    });


    this.form.valueChanges
      // .pipe(
      //   debounceTime(100),
      //   take(1),
      // )
      .subscribe(next => {

      })

  }

  dateChanged(type: string, event: MatDatepickerInputEvent<Date>) {
    const newDate = new Date(event.value);
    this.form.patchValue({ date: newDate });
  }

  validateDoctor() {
    this.getBranchIdSubscription = this.store.select(getBranchId).subscribe(branch_id => {
      if (!branch_id) {
        this.redirectHome();
      } else {
        this.formInitState.branch_id = branch_id;
      }
    });
    this.getClinicIdSubscription = this.store.select(getClinicId).subscribe(clinic_id => {
      if (!clinic_id) {
        this.redirectHome();
      } else {
        this.formInitState.clinic_id = clinic_id;
      }
    });
    this.getDoctorIdSubscription = this.store.select(getDoctorId).subscribe(doctor_id => {
      if (!doctor_id) {
        this.redirectHome();
      } else {
        this.formInitState.doctor_id = doctor_id;
      }
    });
  }


  submit() {
    console.log('submit');

  }

  redirectHome() {
    // this.router.navigateByUrl('/home');
    this.presentToast('Welcome Back');
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
