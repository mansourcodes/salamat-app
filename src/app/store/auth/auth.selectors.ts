import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from './auth.state';


export const getAuthState = createFeatureSelector<AuthState>(
  authFeatureKey
);

export const getAuth = createSelector(
  getAuthState,
  (state) => {
    return state.user;
  }
);