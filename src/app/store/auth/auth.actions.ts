import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/services/auth/user.model';



export const loginAuth = createAction(
  '[Auth] login a Auth',
  props<{ email: string, password: string }>()
);

export const loginAuthSuccess = createAction(
  '[Auth] login a Auth Success',
  props<{ user: User }>()
);

export const loginAuthFailure = createAction(
  '[Auth] login a Auth Failure',
  props<{ error: any }>()
);
