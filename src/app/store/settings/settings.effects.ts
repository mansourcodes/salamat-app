import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { createSetting, createSettingSuccess, createSettingFailure } from './settings.actions';


@Injectable()
export class SettingEffects {


  constructor(
    private actions$: Actions,
    private settingsService: SettingsService
  ) { }

}
