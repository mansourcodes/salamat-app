import { Action, createReducer, on } from '@ngrx/store';
import { initialState, doctorsFeatureKey } from './doctors.state';
import * as uuid from 'uuid';
import { loadDoctorsSuccess } from './doctors.actions';



const _doctorsReducer = createReducer(
  initialState,
  // on(createDoctor, (state, action) => {

  //   const newItem = { ...action.data };
  //   newItem._id = uuid.v4();

  //   return {
  //     ...state,
  //     [doctorsFeatureKey]: [
  //       ...state[doctorsFeatureKey],
  //       newItem
  //     ]
  //   }

  // }),
  on(loadDoctorsSuccess, (state, action) => {

    return {
      ...state,
      [doctorsFeatureKey]: action.doctors
    }

  }),

);

export function doctorsReducer(state, action) {
  return _doctorsReducer(state, action);
}