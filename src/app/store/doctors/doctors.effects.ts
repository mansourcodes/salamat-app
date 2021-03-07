import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { DoctorsService } from 'src/app/services/doctors/doctors.service';
import { AppState } from '../app.state';
import { setErrorMessage, setLoadingSpinner } from '../shared/shared.actions';
import { loadDoctors, loadDoctorsSuccess } from './doctors.actions';


@Injectable()
export class DoctorEffects {


  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private doctorsService: DoctorsService
  ) { }



  loadDoctors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadDoctors),
        // mergeMap or exhaustMap
        mergeMap((action) => {
          this.store.dispatch(setLoadingSpinner({ status: true }));
          return this.doctorsService.getDoctors().pipe(
            map((doctors) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              return loadDoctorsSuccess({ doctors });
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
