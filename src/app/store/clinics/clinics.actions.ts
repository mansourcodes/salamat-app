import { createAction, props } from '@ngrx/store';
import { ClinicInterface } from 'src/app/services/clinics/clinic';

//loadClinics
export const loadClinics = createAction('[Clinic] Load Clinics');

export const loadClinicsSuccess = createAction(
  '[Clinic] Load Clinics Success',
  props<{ clinics: ClinicInterface[] }>()
);

export const loadClinicsFailure = createAction(
  '[Clinic] Load Clinics Failure',
  props<{ error: any }>()
);

// export const createClinic = createAction(
//   '[Clinic] create a Clinic',
//   props<{ data: ClinicInterface }>()
// );

// export const createClinicSuccess = createAction(
//   '[Clinic] create a Clinic Success',
//   props<{ data: any }>()
// );

// export const createClinicFailure = createAction(
//   '[Clinic] create a Clinic Failure',
//   props<{ error: any }>()
// );

// export const updateClinic = createAction(
//   '[Clinic] update a Clinic',
//   props<{ data: ClinicInterface }>()
// );

// export const updateClinicSuccess = createAction(
//   '[Clinic] update a Clinic Success',
//   props<{ data: any }>()
// );

// export const updateClinicFailure = createAction(
//   '[Clinic] update a Clinic Failure',
//   props<{ error: any }>()
// );


// export const destroyClinic = createAction(
//   '[Clinic] destroy a Clinic',
//   props<{ id: string }>()
// );

// export const destroyClinicSuccess = createAction(
//   '[Clinic] destroy a Clinic Success',
//   props<{ id: any }>()
// );

// export const destroyClinicFailure = createAction(
//   '[Clinic] destroy a Clinic Failure',
//   props<{ error: any }>()
// );
