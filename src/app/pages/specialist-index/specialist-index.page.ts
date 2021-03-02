import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpecialityInterface } from 'src/app/services/specialities/speciality';
import { AppState } from 'src/app/store/app.state';
import { loadSpecialities } from 'src/app/store/specialities/specialities.actions';
import { getSpecialities } from 'src/app/store/specialities/specialities.selectors';

@Component({
  selector: 'app-specialist-index',
  templateUrl: './specialist-index.page.html',
  styleUrls: ['./specialist-index.page.scss'],
})
export class SpecialistIndexPage implements OnInit {
  specialities$: Observable<SpecialityInterface[]>;
  searchValue;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.specialities$ = this.store.select(getSpecialities);
    this.store.dispatch(loadSpecialities());
  }


  search() {
    this.specialities$ = this.specialities$.pipe(
      map(specialities => {
        if (!this.searchValue) {
          return specialities;
        }
        return specialities.filter(singleSpeciality => {
          if (
            singleSpeciality.title.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1
            || singleSpeciality.title_ar.indexOf(this.searchValue) > -1
          ) {
            return true;
          }
          return false;
        })
      }),
    );
  }
}
