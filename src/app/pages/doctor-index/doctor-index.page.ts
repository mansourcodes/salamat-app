import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DoctorInterface } from 'src/app/services/doctors/doctor';
import { AppState } from 'src/app/store/app.state';
import { getDoctors } from 'src/app/store/doctors/doctors.selectors';

@Component({
  selector: 'app-doctor-index',
  templateUrl: './doctor-index.page.html',
  styleUrls: ['./doctor-index.page.scss'],
})
export class DoctorIndexPage implements OnInit {
  value;
  doctors$: Observable<DoctorInterface[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.doctors$ = this.store.select(getDoctors);
  }

  counter(i: number) {
    return new Array(i);
  }
}
