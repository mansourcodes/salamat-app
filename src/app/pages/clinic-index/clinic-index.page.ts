import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClinicInterface } from 'src/app/services/clinics/clinic';
import { AppState } from 'src/app/store/app.state';
import { loadClinics } from 'src/app/store/clinics/clinics.actions';
import { getClinics } from 'src/app/store/clinics/clinics.selectors';

@Component({
  selector: 'app-clinic-index',
  templateUrl: './clinic-index.page.html',
  styleUrls: ['./clinic-index.page.scss'],
})
export class ClinicIndexPage implements OnInit {
  clinics$: Observable<ClinicInterface[]>;
  searchValue;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.clinics$ = this.store.select(getClinics);
    this.store.dispatch(loadClinics());
  }
}
