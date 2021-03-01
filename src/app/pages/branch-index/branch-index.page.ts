import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BranchInterface } from 'src/app/services/branches/branch';
import { AppState } from 'src/app/store/app.state';
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

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {

    this.activeFilter = this.route.snapshot.paramMap.get("filter");
    if (this.activeFilter == 'clinic') {
      this.clinicIdFilter = +this.route.snapshot.paramMap.get("id");
    }


    this.branches$ = this.store.select(getBranches);
    this.branchesFiltered$ = this.branches$.pipe(
      map(branches => {
        if (this.clinicIdFilter !== false) {
          return branches.filter(singleBranch => singleBranch.clinic_id == this.clinicIdFilter)
        }
        return branches;
      }),
      filter(branches => branches && branches.length > 0)
    );

    this.store.dispatch(loadBranches());
  }
}
