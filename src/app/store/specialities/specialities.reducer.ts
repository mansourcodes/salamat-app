import { Action, createReducer, on } from '@ngrx/store';
import { initialState, specialitiesFeatureKey } from './specialities.state';
import * as uuid from 'uuid';
import { loadSpecialitiesSuccess } from './specialities.actions';



const _specialitiesReducer = createReducer(
  initialState,
  // on(createSpeciality, (state, action) => {

  //   const newItem = { ...action.data };
  //   newItem._id = uuid.v4();

  //   return {
  //     ...state,
  //     [specialitiesFeatureKey]: [
  //       ...state[specialitiesFeatureKey],
  //       newItem
  //     ]
  //   }

  // }),
  on(loadSpecialitiesSuccess, (state, action) => {

    return {
      ...state,
      [specialitiesFeatureKey]: action.specialities
    }

  }),

);

export function specialitiesReducer(state, action) {
  return _specialitiesReducer(state, action);
}