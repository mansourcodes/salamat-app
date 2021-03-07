import { createAction, props } from '@ngrx/store';
import { TimetableInterface } from 'src/app/services/timetables/timetable';

//loadTimetables
export const loadTimetables = createAction(
  '[Timetable] Load Timetables',
  props<{ date: Date, clinic_id: number, branch_id: number, doctor_id: number }>()
);

export const loadTimetablesSuccess = createAction(
  '[Timetable] Load Timetables Success',
  props<{ timetables: TimetableInterface[] }>()
);

export const loadTimetablesFailure = createAction(
  '[Timetable] Load Timetables Failure',
  props<{ error: any }>()
);



export const clearTimetables = createAction(
  '[Timetable] set Timetable Cleared'
);
