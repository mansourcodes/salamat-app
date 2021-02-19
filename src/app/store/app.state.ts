import { DoctorEffects } from './doctors/doctors.effects';
import { doctorsReducer } from './doctors/doctors.reducer';
import { doctorsFeatureKey, DoctorsState } from './doctors/doctors.state';
import { SettingEffects } from './settings/settings.effects';
import { settingsReducer } from './settings/settings.reducer';
import { settingsFeatureKey, SettingsState } from './settings/settings.state';
import { sharedReducer } from './shared/shared.reducer';
import { sharedFeatureKey, SharedState } from './shared/shared.state';


export interface AppState {
  [sharedFeatureKey]: SharedState;
  [doctorsFeatureKey]: DoctorsState;
  [settingsFeatureKey]: SettingsState;


}

export const appReducers = {
  [sharedFeatureKey]: sharedReducer,
  [doctorsFeatureKey]: doctorsReducer,
  [settingsFeatureKey]: settingsReducer,

};


export const AppEffects = [
  DoctorEffects,
  SettingEffects

]
