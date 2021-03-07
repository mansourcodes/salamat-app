import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ClinicsService } from 'src/app/services/clinics/clinics.service';
import { AppState } from '../app.state';
import { setErrorMessage, setLoadingSpinner } from '../shared/shared.actions';
import { loadClinics, loadClinicsSuccess } from './clinics.actions';


@Injectable()
export class ClinicEffects {


  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private clinicsService: ClinicsService
  ) { }



  loadClinics$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadClinics),
        // mergeMap or exhaustMap
        mergeMap((action) => {
          this.store.dispatch(setLoadingSpinner({ status: true }));

          return this.clinicsService.getClinics().pipe(
            map((clinics) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              return loadClinicsSuccess({ clinics });
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
