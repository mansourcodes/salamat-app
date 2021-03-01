import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { filter, map, tap } from 'rxjs/operators';
import { BranchInterface } from 'src/app/services/branches/branch';
import { AppState } from 'src/app/store/app.state';
import { setAppoformBranchId, setAppoformClinicId } from 'src/app/store/appoform/appoform.actions';
import { getDoctorId } from 'src/app/store/appoform/appoform.selectors';
import { loadBranches } from 'src/app/store/branches/branches.actions';
import { getBranches } from 'src/app/store/branches/branches.selectors';

@Component({
  selector: 'app-branch-index',
  templateUrl: './branch-index.page.html',
  styleUrls: ['./branch-index.page.scss'],
})
export class BranchIndexPage implements OnInit {
  branches$: Observable<BranchInterface[]>;
  branchesFiltered$: Observable<BranchInterface[]>;;
  searchValue;

  activeFilter: string;
  clinicIdFilter: boolean | number = false;
  doctorIdFilter: boolean | number = false;

  getDoctorIdSubscription: Subscription;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router) { }

  ionViewWillEnter() {
    this.store.dispatch(setAppoformBranchId({ branch_id: 0 }));
  }


  ngOnInit() {

    this.activeFilter = this.route.snapshot.paramMap.get("filter");
    if (this.activeFilter == 'clinic') {
      this.clinicIdFilter = +this.route.snapshot.paramMap.get("id");
    }
    if (this.activeFilter == 'doctor') {
      this.doctorIdFilter = +this.route.snapshot.paramMap.get("id");
    }


    this.branches$ = this.store.select(getBranches);
    this.branchesFiltered$ = this.branches$.pipe(
      map(branches => {
        if (this.clinicIdFilter !== false) {
          return branches.filter(singleBranch => singleBranch.clinic_id == this.clinicIdFilter)
        }
        if (this.doctorIdFilter !== false) {
          return branches.filter(singleBranch => {
            return singleBranch.doctors_ids.find(id => id == this.doctorIdFilter);
          })
        }
        return branches;
      }),
      filter(branches => branches && branches.length > 0),
      // tap(branches => {
      //   if (branches.length == 1) {
      //     this.onChoose(branches[0]);
      //   }
      // })
    );

    this.store.dispatch(loadBranches());
  }


  onChoose(branch: BranchInterface) {

    this.store.dispatch(setAppoformBranchId({ branch_id: branch.id }));
    this.store.dispatch(setAppoformClinicId({ clinic_id: branch.clinic_id }));

    this.getDoctorIdSubscription = this.store.select(getDoctorId).subscribe(current_doctor_id => {
      if (current_doctor_id) {
        console.info('current_doctor_id:' + current_doctor_id);
        this.router.navigate(['/appo-form']);
      } else {
        this.router.navigate(['/doctor-index/branch/' + branch.id]);
      }
    });
  }


  ionViewWillLeave() {
    if (this.getDoctorIdSubscription) {
      this.getDoctorIdSubscription.unsubscribe();
    }
  }
}
