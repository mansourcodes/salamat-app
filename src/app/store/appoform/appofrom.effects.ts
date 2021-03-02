import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { BranchesService } from 'src/app/services/branches/branches.service';
import { ClinicsService } from 'src/app/services/clinics/clinics.service';
import { DoctorsService } from 'src/app/services/doctors/doctors.service';
import { setErrorMessage } from '../shared/shared.actions';
import { loadAppformBranch, loadAppformBranchSuccess, loadAppformClinic, loadAppformClinicSuccess, loadAppformDoctor, loadAppformDoctorSuccess } from './appoform.actions';


@Injectable()
export class AppoformEffects {


  constructor(
    private actions$: Actions,
    private clinicsService: ClinicsService,
    private branchsService: BranchesService,
    private doctorsService: DoctorsService,
  ) { }



  loadAppoformClinic$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadAppformClinic),
        // mergeMap or exhaustMap
        mergeMap((action) => {
          return this.clinicsService.getClinic(action.clinic_id).pipe(
            map((clinic) => {
              return loadAppformClinicSuccess({ clinic });
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





  loadAppoformBranch$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadAppformBranch),
        // mergeMap or exhaustMap
        mergeMap((action) => {
          return this.branchsService.getBranch(action.branch_id).pipe(
            map((branch) => {
              return loadAppformBranchSuccess({ branch });
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




  loadAppoformDoctor$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadAppformDoctor),
        // mergeMap or exhaustMap
        mergeMap((action) => {
          return this.doctorsService.getDoctor(action.doctor_id).pipe(
            map((doctor) => {
              return loadAppformDoctorSuccess({ doctor });
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





  //end
}
