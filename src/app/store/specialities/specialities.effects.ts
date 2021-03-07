import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { SpecialitiesService } from 'src/app/services/specialities/specialities.service';
import { AppState } from '../app.state';
import { setErrorMessage, setLoadingSpinner } from '../shared/shared.actions';
import { loadSpecialities, loadSpecialitiesFailure, loadSpecialitiesSuccess } from './specialities.actions';


@Injectable()
export class SpecialityEffects {


  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private specialitiesService: SpecialitiesService
  ) { }



  loadSpecialities$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadSpecialities),
        // mergeMap or exhaustMap
        mergeMap((action) => {
          this.store.dispatch(setLoadingSpinner({ status: true }));
          return this.specialitiesService.getSpecialities().pipe(
            map((specialities) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              return loadSpecialitiesSuccess({ specialities });
            }),
            catchError((error) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              return of(
                setErrorMessage({ message: error.message })
              );
            })
          )
        }),
      );
    },
  );


}
