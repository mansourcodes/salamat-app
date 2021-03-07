import { Action, createReducer, on } from '@ngrx/store';
import { initialState, timetablesFeatureKey } from './timetables.state';
import * as uuid from 'uuid';
import { clearTimetables, loadTimetablesSuccess, } from './timetables.actions';



const _timetablesReducer = createReducer(
  initialState,

  on(loadTimetablesSuccess, (state, action) => {

    return {
      ...state,
      [timetablesFeatureKey]: action.timetables
    }

  }),

  on(clearTimetables, (state, action) => {
    return {
      ...state,
      ...initialState
    };
  }),

);

export function timetablesReducer(state, action) {
  return _timetablesReducer(state, action);
}