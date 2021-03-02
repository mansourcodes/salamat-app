import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpecialityInterface } from 'src/app/services/specialities/speciality';
import { AppState } from '../app.state';
import { specialitiesFeatureKey, SpecialitiesState } from './specialities.state';


export const getSpecialitiesState = createFeatureSelector<SpecialitiesState>(
  specialitiesFeatureKey
);

export const getSpecialities = createSelector(
  getSpecialitiesState,
  (state) => {
    return state.specialities;
  }
);
