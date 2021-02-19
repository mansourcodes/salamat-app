import { createAction, props } from '@ngrx/store';



export const setLoadingSpinner = createAction(
  '[Shared] login a Shared',
  props<{ status: boolean }>()
);
