import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppoInterface } from 'src/app/services/appos/appo';
import { AppState } from 'src/app/store/app.state';
import { loadAppos } from 'src/app/store/appos/appos.actions';
import { getAppos } from 'src/app/store/appos/appos.selectors';

@Component({
  selector: 'app-appo-index',
  templateUrl: './appo-index.page.html',
  styleUrls: ['./appo-index.page.scss'],
})
export class AppoIndexPage implements OnInit {
  appos$: Observable<AppoInterface[]>;
  searchValue;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.appos$ = this.store.select(getAppos);
    this.store.dispatch(loadAppos());
  }
}
