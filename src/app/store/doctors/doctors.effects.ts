import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { DoctorsService } from 'src/app/services/doctors/doctors.service';
import { createDoctor, createDoctorSuccess, createDoctorFailure } from './doctors.actions';


@Injectable()
export class DoctorEffects {


  constructor(
    private actions$: Actions,
    private doctorsService: DoctorsService
  ) { }

}
