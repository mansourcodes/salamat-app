import { Action, createReducer, on } from '@ngrx/store';
import { setLoadingSpinner } from './shared.actions';

import { initialState, sharedFeatureKey } from './shared.state';



const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {

    return {
      ...state,
      showLoading: action.status
    }
  }),



);

export function sharedReducer(state, action) {
  return _sharedReducer(state, action);
}