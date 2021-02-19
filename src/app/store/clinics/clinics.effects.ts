import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ClinicsService } from 'src/app/services/clinics/clinics.service';
import { loadClinics, loadClinicsSuccess } from './clinics.actions';


@Injectable()
export class ClinicEffects {


  constructor(
    private actions$: Actions,
    private clinicsService: ClinicsService
  ) { }



  loadClinics$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadClinics),
        // mergeMap or exhaustMap
        mergeMap((action) => {
          return this.clinicsService.getClinics().pipe(
            map((clinics) => {
              return loadClinicsSuccess({ clinics });
            })
          )
        }),
      );
    },
  );


}
