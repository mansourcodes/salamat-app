import { createAction, props } from '@ngrx/store';
import { BranchInterface } from 'src/app/services/branches/branch';
import { ClinicInterface } from 'src/app/services/clinics/clinic';
import { DoctorInterface } from 'src/app/services/doctors/doctor';

export const clearAppoform = createAction(
  '[Appoform] set Appo Form Cleared'
);

export const clearAppoformClinic = createAction(
  '[Appoform] set Appo Form Clinic Cleared'
);

export const clearAppoformBranch = createAction(
  '[Appoform] set Appo Form Branch Cleared'
);


export const clearAppoformDoctor = createAction(
  '[Appoform] set Appo Form Doctor Cleared'
);


//-------------

export const loadAppformClinic = createAction(
  '[Appoform] load Appo Form Clinic',
  props<{ clinic_id: number }>()
);

export const loadAppformClinicSuccess = createAction(
  '[Appoform] load Appo Form Clinic Success',
  props<{ clinic: ClinicInterface }>()
);

export const loadAppformClinicFailure = createAction(
  '[Appoform] load Appo Form Clinic Failure',
  props<{ error: any }>()
);

//-------------

export const loadAppformBranch = createAction(
  '[Appoform] load Appo Form Branch',
  props<{ branch_id: number }>()
);

export const loadAppformBranchSuccess = createAction(
  '[Appoform] load Appo Form Branch Success',
  props<{ branch: BranchInterface }>()
);

export const loadAppformBranchFailure = createAction(
  '[Appoform] load Appo Form Branch Failure',
  props<{ error: any }>()
);

//-------------

export const loadAppformDoctor = createAction(
  '[Appoform] load Appo Form Doctor',
  props<{ doctor_id: number }>()
);

export const loadAppformDoctorSuccess = createAction(
  '[Appoform] load Appo Form Doctor Success',
  props<{ doctor: DoctorInterface }>()
);

export const loadAppformDoctorFailure = createAction(
  '[Appoform] load Appo Form Doctor Failure',
  props<{ error: any }>()
);

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
  '[Appoform] get Appo Form Clinic id'
);

export const getAppoformBranchId = createAction(
  '[Appoform] get Appo Form Branch id'
);

export const getAppoformDoctorId = createAction(
  '[Appoform] get Appo Form Doctor id'
);

export const getAppoformDate = createAction(
  '[Appoform] get Appo Form Date'
);

export const getAppoformTime = createAction(
  '[Appoform] get Appo Form Date'
);

export const getAppoformNotes = createAction(
  '[Appoform] get Appo Form Date'
);

