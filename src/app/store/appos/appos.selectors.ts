import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppoInterface } from 'src/app/services/appos/appo';
import { AppState } from '../app.state';
import { apposFeatureKey, ApposState } from './appos.state';


export const getApposState = createFeatureSelector<ApposState>(
  apposFeatureKey
);

export const getAppos = createSelector(
  getApposState,
  (state) => {
    return state.appos;
  }
);

