import { createAction, props } from '@ngrx/store';

export const setLoadingSpinner = createAction(
  '[Shared] set Loading Spinner',
  props<{ status: boolean }>()
);

export const setErrorMessage = createAction(
  '[Shared] set error message ',
  props<{ message: string }>()
);
