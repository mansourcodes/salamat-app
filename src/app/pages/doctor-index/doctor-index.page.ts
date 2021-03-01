import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DoctorInterface } from 'src/app/services/doctors/doctor';
import { AppState } from 'src/app/store/app.state';
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

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

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
}
