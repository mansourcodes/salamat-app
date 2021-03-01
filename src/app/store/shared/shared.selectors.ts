import { createFeatureSelector, createSelector } from '@ngrx/store';
import { sharedFeatureKey, SharedState } from './shared.state';

export const getSharedState = createFeatureSelector<SharedState>(
  sharedFeatureKey
);

export const getLoading = createSelector(getSharedState, (state) => {
  return state.showLoading;
});

export const getErrorMessage = createSelector(
  getSharedState,
  (state) => {

    console.log(state.errorMessage);


    return state.errorMessage;
  }
);
