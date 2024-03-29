import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { updateSettings } from './settings.actions';


@Injectable()
export class SettingEffects {


  constructor(
    private actions$: Actions,
    private settingsService: SettingsService
  ) { }


  updateSetting$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(updateSettings),
        // mergeMap or exhaustMap
        tap((action) => {
          this.settingsService.setSettings(action.data);
        }),
      );
    },
    { dispatch: false }
  );

}
