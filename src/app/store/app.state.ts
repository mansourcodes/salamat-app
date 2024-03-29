
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { appoformReducer } from './appoform/appoform.reducer';
import { appoformFeatureKey, AppoformState } from './appoform/appoform.state';
import { AppoformEffects } from './appoform/appofrom.effects';
import { AppoEffects } from './appos/appos.effects';
import { apposReducer } from './appos/appos.reducer';
import { apposFeatureKey, ApposState } from './appos/appos.state';
import { BranchEffects } from './branches/branches.effects';
import { branchesReducer } from './branches/branches.reducer';
import { branchesFeatureKey, BranchesState } from './branches/branches.state';
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
import { SpecialityEffects } from './specialities/specialities.effects';
import { specialitiesReducer } from './specialities/specialities.reducer';
import { specialitiesFeatureKey, SpecialitiesState } from './specialities/specialities.state';
import { TimetableEffects } from './timetables/timetables.effects';
import { timetablesReducer } from './timetables/timetables.reducer';
import { timetablesFeatureKey, TimetablesState } from './timetables/timetables.state';


export interface AppState {
  [sharedFeatureKey]: SharedState;
  [doctorsFeatureKey]: DoctorsState;
  [settingsFeatureKey]: SettingsState;
  [clinicsFeatureKey]: ClinicsState;
  [specialitiesFeatureKey]: SpecialitiesState;
  [branchesFeatureKey]: BranchesState;
  [apposFeatureKey]: ApposState;
  [appoformFeatureKey]: AppoformState;
  [timetablesFeatureKey]: TimetablesState;
  router: RouterReducerState;


}

export const appReducers = {
  [sharedFeatureKey]: sharedReducer,
  [doctorsFeatureKey]: doctorsReducer,
  [settingsFeatureKey]: settingsReducer,
  [clinicsFeatureKey]: clinicsReducer,
  [specialitiesFeatureKey]: specialitiesReducer,
  [branchesFeatureKey]: branchesReducer,
  [apposFeatureKey]: apposReducer,
  [appoformFeatureKey]: appoformReducer,
  [timetablesFeatureKey]: timetablesReducer,
  router: routerReducer,

};


export const AppEffects = [
  DoctorEffects,
  SettingEffects,
  ClinicEffects,
  SpecialityEffects,
  BranchEffects,
  AppoEffects,
  AppoformEffects,
  TimetableEffects
]
