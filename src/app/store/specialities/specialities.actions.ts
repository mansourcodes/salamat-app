import { createAction, props } from '@ngrx/store';
import { SpecialityInterface } from 'src/app/services/specialities/speciality';

//loadSpecialities
export const loadSpecialities = createAction('[Speciality] Load Specialities');

export const loadSpecialitiesSuccess = createAction(
  '[Speciality] Load Specialities Success',
  props<{ specialities: SpecialityInterface[] }>()
);

export const loadSpecialitiesFailure = createAction(
  '[Speciality] Load Specialities Failure',
  props<{ error: any }>()
);

// export const createSpeciality = createAction(
//   '[Speciality] create a Speciality',
//   props<{ data: SpecialityInterface }>()
// );

// export const createSpecialitySuccess = createAction(
//   '[Speciality] create a Speciality Success',
//   props<{ data: any }>()
// );

// export const createSpecialityFailure = createAction(
//   '[Speciality] create a Speciality Failure',
//   props<{ error: any }>()
// );

// export const updateSpeciality = createAction(
//   '[Speciality] update a Speciality',
//   props<{ data: SpecialityInterface }>()
// );

// export const updateSpecialitySuccess = createAction(
//   '[Speciality] update a Speciality Success',
//   props<{ data: any }>()
// );

// export const updateSpecialityFailure = createAction(
//   '[Speciality] update a Speciality Failure',
//   props<{ error: any }>()
// );


// export const destroySpeciality = createAction(
//   '[Speciality] destroy a Speciality',
//   props<{ id: string }>()
// );

// export const destroySpecialitySuccess = createAction(
//   '[Speciality] destroy a Speciality Success',
//   props<{ id: any }>()
// );

// export const destroySpecialityFailure = createAction(
//   '[Speciality] destroy a Speciality Failure',
//   props<{ error: any }>()
// );
