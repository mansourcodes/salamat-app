import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BranchInterface } from 'src/app/services/branches/branch';
import { ClinicInterface } from 'src/app/services/clinics/clinic';
import { DoctorInterface } from 'src/app/services/doctors/doctor';
import { AppState } from 'src/app/store/app.state';
import { getAppoformClinicId, loadAppformBranch, loadAppformClinic, loadAppformDoctor } from 'src/app/store/appoform/appoform.actions';
import { getAppformBranch, getAppformClinic, getAppformDoctor, getBranchId, getClinicId, getDoctorId } from 'src/app/store/appoform/appoform.selectors';

@Component({
  selector: 'chosen-doctor',
  templateUrl: './chosen-doctor.component.html',
  styleUrls: ['./chosen-doctor.component.scss'],
})
export class ChosenDoctorComponent implements OnInit {


  clinic$: Observable<ClinicInterface>;
  branch$: Observable<BranchInterface>;
  doctor$: Observable<DoctorInterface>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.clinic$ = this.store.select(getAppformClinic);
    this.store.select(getClinicId).subscribe(clinic_id => {
      if (clinic_id) {
        this.store.dispatch(loadAppformClinic({ clinic_id: clinic_id }));
      }
    });

    this.branch$ = this.store.select(getAppformBranch);
    this.store.select(getBranchId).subscribe(branch_id => {
      if (branch_id) {
        this.store.dispatch(loadAppformBranch({ branch_id: branch_id }));
      }
    });


    this.doctor$ = this.store.select(getAppformDoctor);
    this.store.select(getDoctorId).subscribe(doctor_id => {
      if (doctor_id) {
        this.store.dispatch(loadAppformDoctor({ doctor_id: doctor_id }));
      }
    });



  }

}
