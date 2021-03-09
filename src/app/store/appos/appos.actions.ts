import { createAction, props } from '@ngrx/store';
import { AppoInterface } from 'src/app/services/appos/appo';

//loadappos
export const loadAppos = createAction('[Appo] Load Appos');

export const loadApposSuccess = createAction(
  '[Appo] Load Appos Success',
  props<{ appos: AppoInterface[] }>()
);

export const loadApposFailure = createAction(
  '[Appo] Load Appos Failure',
  props<{ error: any }>()
);


// //createAppo
// export const createAppo = createAction(
//   '[Appo] create a Appo',
//   props<{ data: AppoInterface }>()
// );

// export const createAppoSuccess = createAction(
//   '[Appo] create a Appo Success',
//   props<{ data: any }>()
// );

// export const createAppoFailure = createAction(
//   '[Appo] create a Appo Failure',
//   props<{ error: any }>()
// );



