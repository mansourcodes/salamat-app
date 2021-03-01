import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appoformFeatureKey } from '../appoform/appoform.state';
import { AppoformState } from './appoform.state';

export const getAppoformState = createFeatureSelector<AppoformState>(
  appoformFeatureKey
);

export const getClinicId = createSelector(getAppoformState, (state) => {
  return state.clinic_id;
});

export const getBranchId = createSelector(getAppoformState, (state) => {
  return state.branch_id;
});

export const getDoctorId = createSelector(getAppoformState, (state) => {
  return state.doctor_id;
});

export const getDate = createSelector(getAppoformState, (state) => {
  return state.date;
});

export const getTime = createSelector(getAppoformState, (state) => {
  return state.time;
});

export const getNotes = createSelector(getAppoformState, (state) => {
  return state.notes;
});