import { createAction, props } from '@ngrx/store';
import { BranchInterface } from 'src/app/services/branches/branch';

//loadBranches
export const loadBranches = createAction('[Branch] Load Branches');

export const loadBranchesSuccess = createAction(
  '[Branch] Load Branches Success',
  props<{ branches: BranchInterface[] }>()
);

export const loadBranchesFailure = createAction(
  '[Branch] Load Branches Failure',
  props<{ error: any }>()
);

// export const createBranch = createAction(
//   '[Branch] create a Branch',
//   props<{ data: BranchInterface }>()
// );

// export const createBranchSuccess = createAction(
//   '[Branch] create a Branch Success',
//   props<{ data: any }>()
// );

// export const createBranchFailure = createAction(
//   '[Branch] create a Branch Failure',
//   props<{ error: any }>()
// );

// export const updateBranch = createAction(
//   '[Branch] update a Branch',
//   props<{ data: BranchInterface }>()
// );

// export const updateBranchSuccess = createAction(
//   '[Branch] update a Branch Success',
//   props<{ data: any }>()
// );

// export const updateBranchFailure = createAction(
//   '[Branch] update a Branch Failure',
//   props<{ error: any }>()
// );


// export const destroyBranch = createAction(
//   '[Branch] destroy a Branch',
//   props<{ id: string }>()
// );

// export const destroyBranchSuccess = createAction(
//   '[Branch] destroy a Branch Success',
//   props<{ id: any }>()
// );

// export const destroyBranchFailure = createAction(
//   '[Branch] destroy a Branch Failure',
//   props<{ error: any }>()
// );
