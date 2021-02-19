
import { doctorsReducer } from './doctors/doctors.reducer';
import { doctorsFeatureKey, DoctorsState } from './doctors/doctors.state';
import { sharedReducer } from './shared/shared.reducer';
import { sharedFeatureKey, SharedState } from './shared/shared.state';


export interface AppState {
  [sharedFeatureKey]: SharedState;
  [doctorsFeatureKey]: DoctorsState;


}

export const appReducers = {
  [sharedFeatureKey]: sharedReducer,
  [doctorsFeatureKey]: doctorsReducer,

};
