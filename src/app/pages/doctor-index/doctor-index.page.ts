import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DoctorInterface } from 'src/app/services/doctors/doctor';
import { AppState } from 'src/app/store/app.state';
import { getAppoformBranchId, getAppoformClinicId, setAppoformBranchId, setAppoformClinicId, setAppoformDoctorId } from 'src/app/store/appoform/appoform.actions';
import { getBranchId, getClinicId } from 'src/app/store/appoform/appoform.selectors';
import { loadDoctors } from 'src/app/store/doctors/doctors.actions';
import { getDoctors } from 'src/app/store/doctors/doctors.selectors';

@Component({
  selector: 'app-doctor-index',
  templateUrl: './doctor-index.page.html',
  styleUrls: ['./doctor-index.page.scss'],
})
export class DoctorIndexPage implements OnInit {
  doctors$: Observable<DoctorInterface[]>;
  doctorsFiltered$: Observable<DoctorInterface[]>;;
  searchValue;

  activeFilter: string;
  specialityFilter: boolean | number = false;
  branchFilter: boolean | number = false;

  getClinicIdSubscription: Subscription;
  getBranchIdSubscription: Subscription;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router) { }

  ionViewWillEnter() {
    this.store.dispatch(setAppoformDoctorId({ doctor_id: 0 }));
  }


  ngOnInit() {
    this.activeFilter = this.route.snapshot.paramMap.get("filter");
    if (this.activeFilter == 'speciality') {
      this.specialityFilter = +this.route.snapshot.paramMap.get("id");
    }
    if (this.activeFilter == 'branch') {
      this.branchFilter = +this.route.snapshot.paramMap.get("id");
    }


    this.doctors$ = this.store.select(getDoctors);
    this.doctorsFiltered$ = this.doctors$.pipe(
      map(doctors => {
        if (this.specialityFilter !== false) {
          return doctors.filter(singleDoctor => singleDoctor.speciality == this.specialityFilter)
        }
        if (this.branchFilter !== false) {
          return doctors.filter(singleDoctor => {
            return singleDoctor.branches_ids.find(id => id == this.branchFilter);
          })
        }
        return doctors;
      }),
      filter(doctors => doctors && doctors.length > 0)
    );


    this.store.dispatch(loadDoctors());
  }




  onChoose(doctor: DoctorInterface) {

    this.store.dispatch(setAppoformDoctorId({ doctor_id: doctor.id }));

    this.getClinicIdSubscription = this.store.select(getClinicId).subscribe(current_clinic_id => {
      if (current_clinic_id) {
        this.getBranchIdSubscription = this.store.select(getBranchId).subscribe(current_branch_id => {
          if (current_branch_id) {
            this.router.navigate(['/appo-form']);
          }
        });

      } else if (doctor.branches.length == 1) {
        this.store.dispatch(setAppoformBranchId({ branch_id: doctor.branches[0].id }));
        this.store.dispatch(setAppoformClinicId({ clinic_id: doctor.branches[0].clinic_id }));
        this.router.navigate(['/appo-form']);

      } else {
        this.router.navigate(['/branch-index/doctor/' + doctor.id]);
      }
    });
  }


  ionViewWillLeave() {
    if (this.getClinicIdSubscription) {
      this.getClinicIdSubscription.unsubscribe();
    }
    if (this.getBranchIdSubscription) {
      this.getBranchIdSubscription.unsubscribe();
    }
  }
}
