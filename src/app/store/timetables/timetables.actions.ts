import { createAction, props } from '@ngrx/store';
import { TimetableInterface } from 'src/app/services/timetables/timetable';

//getTimetables
export const getTimetables = createAction('[Timetable] Get Timetables',
  props<{ date: Date, clinic_id: number, branch_id: number, doctor_id: number }>());

export const getTimetablesSuccess = createAction(
  '[Timetable] Get Timetables Success',
  props<{ timetables: TimetableInterface[] }>()
);

export const getTimetablesFailure = createAction(
  '[Timetable] Get Timetables Failure',
  props<{ error: any }>()
);
