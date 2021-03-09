import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, debounceTime, take, map, tap } from 'rxjs/operators';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { CountryInterface } from 'src/app/services/countries/country';
import { TimetableInterface } from 'src/app/services/timetables/timetable';
import { AppState } from 'src/app/store/app.state';
import { loadAppformBranch } from 'src/app/store/appoform/appoform.actions';
import { getBranchId, getClinicId, getDoctorId } from 'src/app/store/appoform/appoform.selectors';
import { loadTimetables } from 'src/app/store/timetables/timetables.actions';
import { getTimetables } from 'src/app/store/timetables/timetables.selectors';


@Component({
  selector: 'app-appo-form',
  templateUrl: './appo-form.page.html',
  styleUrls: ['./appo-form.page.scss'],
})
export class AppoFormPage implements OnInit {
  form: FormGroup;
  // availableTimetables$: Observable<TimetableInterface[]>;
  availableTimetables: TimetableInterface[];
  flag_firtAvaliable: boolean = true;


  formInitState = {
    clinic_id: 1,
    branch_id: 1,
    doctor_id: 1,
  }

  minDate: Date;
  maxDate: Date;


  getDoctorIdSubscription: Subscription;
  getClinicIdSubscription: Subscription;
  getBranchIdSubscription: Subscription;
  availableTimetablesSubscription: Subscription;

  public countriesList: CountryInterface[];

  customAlertOptions: any = {
    header: 'Nationality',
    subHeader: 'Select the Patient Nationality',
    translucent: true
  };

  constructor(
    private store: Store<AppState>,
    private router: Router,
    public toastController: ToastController,
    private countriesService: CountriesService
  ) {

    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear + 1, 11, 31);
    this.minDate = new Date();

    // if (this.minDate.getHours() > 17) {
    //   this.minDate = new Date();
    //   this.minDate.setDate(this.minDate.getDate() + 2);
    //   console.log(this.minDate.getHours());
    //   console.log(this.minDate);
    //   // TODO: set tommorow if 18 hours
    // } 

  }

  ngOnInit() {

    this.countriesService.getCountries().subscribe(countries => {
      this.countriesList = countries;
    });

    this.validateDoctor();
    this.initForm();
  }

  initForm() {

    this.form = new FormGroup({

      user_phone: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8)
        ],
      }),
      user_phone_code: new FormControl('973', {
        validators: [Validators.required],
      }),


      clinic_id: new FormControl(this.formInitState.clinic_id, {
        validators: [Validators.required],
      }),
      branch_id: new FormControl(this.formInitState.branch_id, {
        validators: [Validators.required],
      }),
      doctor_id: new FormControl(this.formInitState.doctor_id, {
        validators: [Validators.required],
      }),

      date: new FormControl(this.minDate, {
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
      patient_nationality: new FormControl('BH', {
        validators: [Validators.required],
      }),

      notes: new FormControl(''),

      agree_terms: new FormControl(false, {
        validators: [Validators.requiredTrue],
      }),
    });


    this.watchTimetable();


  }

  watchTimetable() {

    this.availableTimetablesSubscription = this.store.select(getTimetables).pipe(
      tap(timetables => {
        this.flag_firtAvaliable = true;
        this.form.patchValue({ time: null });
      }),
      map(timetables => {
        timetables.map(singelTimetable => {
          if (this.flag_firtAvaliable && singelTimetable.available) {
            this.form.patchValue({ time: singelTimetable.appointmentTime });
            this.flag_firtAvaliable = false;
          }
          return singelTimetable;
        })
        return timetables;
      })
    ).subscribe(timetables => {
      this.availableTimetables = timetables;
    })


    this.form.get('date').valueChanges.subscribe(chosenDate => {

      this.store.dispatch(loadTimetables({
        date: chosenDate,
        clinic_id: +this.form.value.clinic_id,
        branch_id: +this.form.value.branch_id,
        doctor_id: this.form.value.doctor_id
      }));

    });

    this.form.patchValue({ date: new Date() });
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
    if (this.availableTimetablesSubscription) {
      this.availableTimetablesSubscription.unsubscribe();
    }
  }
}
