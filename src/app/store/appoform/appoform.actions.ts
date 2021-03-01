import { createAction, props } from '@ngrx/store';


//-------------

export const setAppoformClinicId = createAction(
  '[Appoform] set Appo Form Clinic id',
  props<{ clinic_id: number }>()
);

export const setAppoformBranchId = createAction(
  '[Appoform] set Appo Form Branch id',
  props<{ branch_id: number }>()
);

export const setAppoformDoctorId = createAction(
  '[Appoform] set Appo Form Doctor id',
  props<{ doctor_id: number }>()
);

export const setAppoformDate = createAction(
  '[Appoform] set Appo Form Date',
  props<{ date: string }>()
);

export const setAppoformTime = createAction(
  '[Appoform] set Appo Form Date',
  props<{ time: string }>()
);

export const setAppoformNotes = createAction(
  '[Appoform] set Appo Form Date',
  props<{ notes: string }>()
);


//-------------

export const getAppoformClinicId = createAction(
  '[Appoform] get Appo Form Clinic id',
  props<{ clinic_id: number }>()
);

export const getAppoformBranchId = createAction(
  '[Appoform] get Appo Form Branch id',
  props<{ branch_id: number }>()
);

export const getAppoformDoctorId = createAction(
  '[Appoform] get Appo Form Doctor id',
  props<{ doctor_id: number }>()
);

export const getAppoformDate = createAction(
  '[Appoform] get Appo Form Date',
  props<{ date: string }>()
);

export const getAppoformTime = createAction(
  '[Appoform] get Appo Form Date',
  props<{ time: string }>()
);

export const getAppoformNotes = createAction(
  '[Appoform] get Appo Form Date',
  props<{ notes: string }>()
);

