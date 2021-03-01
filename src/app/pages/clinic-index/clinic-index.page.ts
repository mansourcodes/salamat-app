import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  ngOnInit() {
    this.clinics$ = this.store.select(getClinics);
    this.store.dispatch(loadClinics());
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
