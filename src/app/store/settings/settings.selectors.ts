import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingInterface } from 'src/app/services/settings/setting';
import { AppState } from '../app.state';
import { settingsFeatureKey, SettingsState } from './settings.state';


export const getSettingsState = createFeatureSelector<SettingsState>(
  settingsFeatureKey
);

export const getSettings = createSelector(
  getSettingsState,
  (state) => {
    return state.settings;
  }
);

export const getCurrentLang = createSelector(
  getSettingsState,
  (state) => {
    return state.settings.language;
  }
);

