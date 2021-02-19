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


export const getSpecialityById = createSelector(
  getSpecialitiesState,
  (state: SpecialitiesState, props) => {
    return state.specialities.find(speciality => speciality.id === props.id);
  }
);