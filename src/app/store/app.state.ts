import { ClinicEffects } from './clinics/clinics.effects';
import { clinicsReducer } from './clinics/clinics.reducer';
import { clinicsFeatureKey, ClinicsState } from './clinics/clinics.state';
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
  [clinicsFeatureKey]: ClinicsState;


}

export const appReducers = {
  [sharedFeatureKey]: sharedReducer,
  [doctorsFeatureKey]: doctorsReducer,
  [settingsFeatureKey]: settingsReducer,
  [clinicsFeatureKey]: clinicsReducer,

};


export const AppEffects = [
  DoctorEffects,
  SettingEffects,
  ClinicEffects
]
