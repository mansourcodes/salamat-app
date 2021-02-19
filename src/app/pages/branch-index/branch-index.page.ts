import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  searchValue;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.branches$ = this.store.select(getBranches);
    this.store.dispatch(loadBranches());
  }
}
