import { Action, createReducer, on } from '@ngrx/store';
import { initialState, timetablesFeatureKey } from './timetables.state';
import * as uuid from 'uuid';
import { getTimetablesSuccess } from './timetables.actions';



const _timetablesReducer = createReducer(
  initialState,

  on(getTimetablesSuccess, (state, action) => {

    return {
      ...state,
      [timetablesFeatureKey]: action.timetables
    }

  }),

);

export function timetablesReducer(state, action) {
  return _timetablesReducer(state, action);
}