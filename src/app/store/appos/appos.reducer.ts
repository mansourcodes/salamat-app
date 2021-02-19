import { Action, createReducer, on } from '@ngrx/store';
import { initialState, apposFeatureKey } from './appos.state';
import * as uuid from 'uuid';
import { loadApposSuccess } from './appos.actions';



const _apposReducer = createReducer(
  initialState,
  on(loadApposSuccess, (state, action) => {

    return {
      ...state,
      [apposFeatureKey]: action.appos
    }

  }),

);

export function apposReducer(state, action) {
  return _apposReducer(state, action);
}