import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppoInterface } from 'src/app/services/appos/appo';
import { AppState } from '../app.state';
import { RouterStateUrl } from '../router/custom-serializer';
import { getCurrentRoute } from '../router/router.selector';
import { apposAdapter, apposFeatureKey, ApposState } from './appos.state';


export const POST_STATE_NAME = 'appos';

const getApposState = createFeatureSelector<ApposState>(POST_STATE_NAME);
export const apposSelectors = apposAdapter.getSelectors();

export const getAppos = createSelector(getApposState, apposSelectors.selectAll);
export const getAppoEntities = createSelector(
  getApposState,
  apposSelectors.selectEntities
);

export const getAppoById = createSelector(
  getAppoEntities,
  getCurrentRoute,
  (appos, route: RouterStateUrl) => {
    return appos ? appos[route.params['id']] : null;
  }
);