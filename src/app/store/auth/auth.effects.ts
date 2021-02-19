import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { loginAuth, loginAuthSuccess, loginAuthFailure } from './auth.actions';

@Injectable()
export class AuthEffects {


  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }




  // login$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(loginAuth),
  //     // mergeMap or exhaustMap
  //     mergeMap((action) =>
  //       this.authService.
  //         login(action.email, action.password)
  //         .pipe(
  //           map((data) => {
  //             const user = this.authService.setUserData(data);
  //             return loginAuthSuccess({ user })
  //           }),
  //           catchError((error) =>
  //             of(loginAuthFailure({ error }))
  //           )
  //         )
  //     )
  //   );
  // });


}
