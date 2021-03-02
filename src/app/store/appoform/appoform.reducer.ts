import { Action, createReducer, on } from '@ngrx/store';
import { clearAppoform, clearAppoformBranch, clearAppoformClinic, clearAppoformDoctor, loadAppformBranchSuccess, loadAppformClinicSuccess, loadAppformDoctorSuccess, setAppoformBranchId, setAppoformClinicId, setAppoformDate, setAppoformDoctorId, setAppoformNotes, setAppoformTime } from './appoform.actions';

import { initialState } from './appoform.state';

const _appoformReducer = createReducer(
  initialState,
  on(clearAppoform, (state, action) => {
    return {
      ...state,
      ...initialState
    };
  }),
  on(clearAppoformClinic, (state, action) => {
    return {
      ...state,
      clinic_id: 0,
      clinic: null
    };
  }),
  on(clearAppoformBranch, (state, action) => {
    return {
      ...state,
      branch_id: 0,
      branch: null
    };
  }),
  on(clearAppoformDoctor, (state, action) => {
    return {
      ...state,
      doctor_id: 0,
      doctor: null
    };
  }),


  on(loadAppformClinicSuccess, (state, action) => {
    return {
      ...state,
      clinic: action.clinic,
    };
  }),
  on(loadAppformBranchSuccess, (state, action) => {
    return {
      ...state,
      branch: action.branch,
    };
  }),
  on(loadAppformDoctorSuccess, (state, action) => {
    return {
      ...state,
      doctor: action.doctor,
    };
  }),



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
