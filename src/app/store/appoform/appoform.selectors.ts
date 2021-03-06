import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appoformFeatureKey } from '../appoform/appoform.state';
import { AppoformState } from './appoform.state';

export const getAppoformState = createFeatureSelector<AppoformState>(
  appoformFeatureKey
);


// --------------


export const getAppformClinic = createSelector(getAppoformState, (state) => {
  return state.clinic;
});


export const getAppformBranch = createSelector(getAppoformState, (state) => {
  return state.branch;
});

export const getAppformDoctor = createSelector(getAppoformState, (state) => {
  return state.doctor;
});


// --------------

export const getClinicId = createSelector(getAppoformState, (state) => {
  return state.clinic_id;
});

export const getBranchId = createSelector(getAppoformState, (state) => {
  return state.branch_id;
});

export const getDoctorId = createSelector(getAppoformState, (state) => {
  return state.doctor_id;
});
