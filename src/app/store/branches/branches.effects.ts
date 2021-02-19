import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { BranchesService } from 'src/app/services/branches/branches.service';
import { loadBranches, loadBranchesSuccess } from './branches.actions';


@Injectable()
export class BranchEffects {


  constructor(
    private actions$: Actions,
    private branchesService: BranchesService
  ) { }



  loadBranches$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadBranches),
        // mergeMap or exhaustMap
        mergeMap((action) => {
          return this.branchesService.getBranches().pipe(
            map((branches) => {
              return loadBranchesSuccess({ branches });
            })
          )
        }),
      );
    },
  );


}
