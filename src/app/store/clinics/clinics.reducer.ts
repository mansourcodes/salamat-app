import { Action, createReducer, on } from '@ngrx/store';
import { initialState, clinicsFeatureKey } from './clinics.state';
import * as uuid from 'uuid';
import { loadClinicsSuccess } from './clinics.actions';



const _clinicsReducer = createReducer(
  initialState,
  // on(createClinic, (state, action) => {

  //   const newItem = { ...action.data };
  //   newItem._id = uuid.v4();

  //   return {
  //     ...state,
  //     [clinicsFeatureKey]: [
  //       ...state[clinicsFeatureKey],
  //       newItem
  //     ]
  //   }

  // }),
  on(loadClinicsSuccess, (state, action) => {

    return {
      ...state,
      [clinicsFeatureKey]: action.clinics
    }

  }),

);

export function clinicsReducer(state, action) {
  return _clinicsReducer(state, action);
}