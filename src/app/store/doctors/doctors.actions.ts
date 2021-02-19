import { createAction, props } from '@ngrx/store';
import { DoctorInterface } from 'src/app/services/doctors/doctor';

// export const loadDoctors = createAction('[Doctor] Load Doctors');

// export const loadDoctorsSuccess = createAction(
//   '[Doctor] Load Doctors Success',
//   props<{ data: any }>()
// );

// export const loadDoctorsFailure = createAction(
//   '[Doctor] Load Doctors Failure',
//   props<{ error: any }>()
// );

export const createDoctor = createAction(
  '[Doctor] create a Doctor',
  props<{ data: DoctorInterface }>()
);

export const createDoctorSuccess = createAction(
  '[Doctor] create a Doctor Success',
  props<{ data: any }>()
);

export const createDoctorFailure = createAction(
  '[Doctor] create a Doctor Failure',
  props<{ error: any }>()
);

export const updateDoctor = createAction(
  '[Doctor] update a Doctor',
  props<{ data: DoctorInterface }>()
);

export const updateDoctorSuccess = createAction(
  '[Doctor] update a Doctor Success',
  props<{ data: any }>()
);

export const updateDoctorFailure = createAction(
  '[Doctor] update a Doctor Failure',
  props<{ error: any }>()
);


export const destroyDoctor = createAction(
  '[Doctor] destroy a Doctor',
  props<{ id: string }>()
);

export const destroyDoctorSuccess = createAction(
  '[Doctor] destroy a Doctor Success',
  props<{ id: any }>()
);

export const destroyDoctorFailure = createAction(
  '[Doctor] destroy a Doctor Failure',
  props<{ error: any }>()
);
