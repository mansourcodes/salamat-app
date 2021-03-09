import { Action, createReducer, on } from '@ngrx/store';
import { initialState, apposFeatureKey, apposAdapter } from './appos.state';
import * as uuid from 'uuid';
import { loadApposSuccess } from './appos.actions';



const _apposReducer = createReducer(
  initialState,

  // on(addAppoSuccess, (state, action) => {
  //   return apposAdapter.addOne(action.appo, state);
  // }),
  // on(updateAppoSuccess, (state, action) => {
  //   return apposAdapter.updateOne(action.appo, state);
  // }),
  // on(deleteAppoSuccess, (state, { id }) => {
  //   return apposAdapter.removeOne(id, state);
  // }),
  on(loadApposSuccess, (state, action) => {
    return apposAdapter.setAll(action.appos, state);
  })

);

export function apposReducer(state, action) {
  return _apposReducer(state, action);
}