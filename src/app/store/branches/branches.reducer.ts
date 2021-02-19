import { Action, createReducer, on } from '@ngrx/store';
import { initialState, branchesFeatureKey } from './branches.state';
import * as uuid from 'uuid';
import { loadBranchesSuccess } from './branches.actions';



const _branchesReducer = createReducer(
  initialState,
  // on(createBranch, (state, action) => {

  //   const newItem = { ...action.data };
  //   newItem._id = uuid.v4();

  //   return {
  //     ...state,
  //     [branchesFeatureKey]: [
  //       ...state[branchesFeatureKey],
  //       newItem
  //     ]
  //   }

  // }),
  on(loadBranchesSuccess, (state, action) => {

    return {
      ...state,
      [branchesFeatureKey]: action.branches
    }

  }),

);

export function branchesReducer(state, action) {
  return _branchesReducer(state, action);
}