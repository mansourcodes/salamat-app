import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DoctorInterface } from 'src/app/services/doctors/doctor';
import { AppState } from '../app.state';
import { doctorsFeatureKey, DoctorsState } from './doctors.state';


export const getDoctorsState = createFeatureSelector<DoctorsState>(
  doctorsFeatureKey
);

export const getDoctors = createSelector(
  getDoctorsState,
  (state) => {
    return state.doctors;
  }
);


export const getDoctorById = createSelector(
  getDoctorsState,
  (state: DoctorsState, props) => {
    return state.doctors.find(doctor => doctor.id === props.id);
  }
);