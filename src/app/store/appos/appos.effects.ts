import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigatedAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { mergeMap, map, catchError, filter, switchMap, withLatestFrom } from 'rxjs/operators';
import { ApposService } from 'src/app/services/appos/appos.service';
import { dummyAction, setErrorMessage } from '../shared/shared.actions';
import { loadAppos, loadApposSuccess } from './appos.actions';
import { getAppos } from './appos.selectors';
import { ApposState } from './appos.state';


@Injectable()
export class AppoEffects {


  constructor(
    private actions$: Actions,
    private apposService: ApposService,
    private store: Store<ApposState>
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

  // addAppo$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(addAppo),
  //       // mergeMap or exhaustMap
  //       mergeMap((action) => {
  //         return this.apposService.getSingleAppo(action.id).pipe(
  //           map((appo) => {
  //             return addAppoSuccess({ appo });
  //           }),
  //           catchError((error) => {
  //             return of(
  //               setErrorMessage({ message: error.message })
  //             );
  //           })
  //         )
  //       }),
  //     );
  //   },
  // );


  getSingleAppo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/appo-single');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState['params']['id'];
      }),
      withLatestFrom(this.store.select(getAppos)),
      switchMap(([id, appos]) => {
        if (!appos.length) {
          return this.apposService.getAppoById(id).pipe(
            map((appo) => {
              const appoData = [{ ...appo, id }];
              return loadApposSuccess({ appos: appoData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });


}
