import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ApposService } from 'src/app/services/appos/appos.service';
import { loadAppos, loadApposSuccess } from './appos.actions';


@Injectable()
export class AppoEffects {


  constructor(
    private actions$: Actions,
    private apposService: ApposService
  ) { }



  loadAppos$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadAppos),
        // mergeMap or exhaustMap
        mergeMap((action) => {
          return this.apposService.getAppos().pipe(
            map((appos) => {
              return loadApposSuccess({ appos });
            })
          )
        }),
      );
    },
  );


}
