import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { TimetablesService } from 'src/app/services/timetables/timetables.service';
import { setErrorMessage } from '../shared/shared.actions';
import { getTimetables, getTimetablesSuccess } from './timetables.actions';


@Injectable()
export class TimetableEffects {


  constructor(
    private actions$: Actions,
    private timetablesService: TimetablesService
  ) { }



  loadTimetables$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(getTimetables),
        // mergeMap or exhaustMap
        mergeMap((action) => {
          return this.timetablesService.getTimetables(action.date, action.clinic_id, action.branch_id, action.doctor_id).pipe(
            map((timetables) => {
              return getTimetablesSuccess({ timetables });
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
