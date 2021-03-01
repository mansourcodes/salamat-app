import { Action, createReducer, on } from '@ngrx/store';
import { setAppoformBranchId, setAppoformClinicId, setAppoformDate, setAppoformDoctorId, setAppoformNotes, setAppoformTime } from './appoform.actions';

import { initialState } from './appoform.state';

const _appoformReducer = createReducer(
  initialState,
  on(setAppoformClinicId, (state, action) => {
    return {
      ...state,
      clinic_id: action.clinic_id,
    };
  }),
  on(setAppoformBranchId, (state, action) => {
    return {
      ...state,
      branch_id: action.branch_id,
    };
  }),
  on(setAppoformDoctorId, (state, action) => {
    return {
      ...state,
      doctor_id: action.doctor_id,
    };
  }),
  on(setAppoformDate, (state, action) => {
    return {
      ...state,
      date: action.date,
    };
  }),
  on(setAppoformTime, (state, action) => {
    return {
      ...state,
      time: action.time,
    };
  }),
  on(setAppoformNotes, (state, action) => {
    return {
      ...state,
      notes: action.notes,
    };
  }),
);

export function appoformReducer(state, action) {
  return _appoformReducer(state, action);
}
