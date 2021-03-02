import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClinicInterface } from 'src/app/services/clinics/clinic';
import { AppState } from '../app.state';
import { clinicsFeatureKey, ClinicsState } from './clinics.state';


export const getClinicsState = createFeatureSelector<ClinicsState>(
  clinicsFeatureKey
);

export const getClinics = createSelector(
  getClinicsState,
  (state) => {
    return state.clinics;
  }
);

