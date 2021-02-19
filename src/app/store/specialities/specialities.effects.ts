import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { SpecialitiesService } from 'src/app/services/specialities/specialities.service';
import { loadSpecialities, loadSpecialitiesSuccess } from './specialities.actions';


@Injectable()
export class SpecialityEffects {


  constructor(
    private actions$: Actions,
    private specialitiesService: SpecialitiesService
  ) { }



  loadSpecialities$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadSpecialities),
        // mergeMap or exhaustMap
        mergeMap((action) => {
          return this.specialitiesService.getSpecialities().pipe(
            map((specialities) => {
              return loadSpecialitiesSuccess({ specialities });
            })
          )
        }),
      );
    },
  );


}
