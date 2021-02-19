import { Action, createReducer, on } from '@ngrx/store';

import { initialState, authFeatureKey } from './auth.state';
import * as uuid from 'uuid';
import { loginAuthSuccess } from './auth.actions';



const _authReducer = createReducer(
  initialState,
  on(loginAuthSuccess, (state, action) => {

    return {
      ...state,
      [authFeatureKey]: action.user
    }
  }),



);

export function authReducer(state, action) {
  return _authReducer(state, action);
}