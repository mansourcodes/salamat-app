import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { DoctorsService } from 'src/app/services/doctors/doctors.service';
import { setErrorMessage } from '../shared/shared.actions';
import { loadDoctors, loadDoctorsSuccess } from './doctors.actions';


@Injectable()
export class DoctorEffects {


  constructor(
    private actions$: Actions,
    private doctorsService: DoctorsService
  ) { }



  loadDoctors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadDoctors),
        // mergeMap or exhaustMap
        mergeMap((action) => {
          return this.doctorsService.getDoctors().pipe(
            map((doctors) => {
              return loadDoctorsSuccess({ doctors });
            }),
            catchError((error) => {
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
