import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClinicInterface } from 'src/app/services/clinics/clinic';
import { AppState } from 'src/app/store/app.state';
import { setAppoformBranchId, setAppoformClinicId } from 'src/app/store/appoform/appoform.actions';
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

  constructor(private store: Store<AppState>, private router: Router) { }

  ionViewWillEnter() {
    this.store.dispatch(setAppoformClinicId({ clinic_id: 0 }));
    this.store.dispatch(setAppoformBranchId({ branch_id: 0 }));
  }

  ngOnInit() {
    this.clinics$ = this.store.select(getClinics);
    this.store.dispatch(loadClinics());
  }


  search() {
    this.clinics$ = this.clinics$.pipe(
      map(clinics => {
        if (!this.searchValue) {
          return clinics;
        }
        return clinics.filter(singleClinic => {
          if (
            singleClinic.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1
            || singleClinic.name_alt.indexOf(this.searchValue) > -1
          ) {
            return true;
          }
          return false;
        })
      }),
    );
  }

  onChoose(clinic: ClinicInterface) {

    this.store.dispatch(setAppoformClinicId({ clinic_id: clinic.id }));
    this.store.dispatch(setAppoformBranchId({ branch_id: clinic.branches[0].id }));

    if (clinic.branches.length > 1) {
      this.router.navigate(['/branch-index/clinic/' + clinic.id]);
    } else {
      this.router.navigate(['/doctor-index/branch/' + clinic.branches[0].id]);
    }

  }
}
