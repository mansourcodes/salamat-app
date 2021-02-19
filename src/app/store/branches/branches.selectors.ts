import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BranchInterface } from 'src/app/services/branches/branch';
import { AppState } from '../app.state';
import { branchesFeatureKey, BranchesState } from './branches.state';


export const getBranchesState = createFeatureSelector<BranchesState>(
  branchesFeatureKey
);

export const getBranches = createSelector(
  getBranchesState,
  (state) => {
    return state.branches;
  }
);


export const getBranchById = createSelector(
  getBranchesState,
  (state: BranchesState, props) => {
    return state.branches.find(branch => branch.id === props.id);
  }
);