import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TimetableInterface } from 'src/app/services/timetables/timetable';
import { AppState } from '../app.state';
import { timetablesFeatureKey, TimetablesState } from './timetables.state';


export const getTimetablesState = createFeatureSelector<TimetablesState>(
  timetablesFeatureKey
);

export const getTimetables = createSelector(
  getTimetablesState,
  (state) => {
    return state.timetables;
  }
);
