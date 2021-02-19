import { createAction, props } from '@ngrx/store';
import { SettingInterface } from 'src/app/services/settings/setting';

// export const loadSettings = createAction('[Setting] Load Settings');

// export const loadSettingsSuccess = createAction(
//   '[Setting] Load Settings Success',
//   props<{ data: any }>()
// );

// export const loadSettingsFailure = createAction(
//   '[Setting] Load Settings Failure',
//   props<{ error: any }>()
// );

export const createSetting = createAction(
  '[Setting] create a Setting',
  props<{ data: SettingInterface }>()
);

export const createSettingSuccess = createAction(
  '[Setting] create a Setting Success',
  props<{ data: any }>()
);

export const createSettingFailure = createAction(
  '[Setting] create a Setting Failure',
  props<{ error: any }>()
);

export const updateSetting = createAction(
  '[Setting] update a Setting',
  props<{ data: SettingInterface }>()
);

export const updateSettingSuccess = createAction(
  '[Setting] update a Setting Success',
  props<{ data: any }>()
);

export const updateSettingFailure = createAction(
  '[Setting] update a Setting Failure',
  props<{ error: any }>()
);


export const destroySetting = createAction(
  '[Setting] destroy a Setting',
  props<{ id: string }>()
);

export const destroySettingSuccess = createAction(
  '[Setting] destroy a Setting Success',
  props<{ id: any }>()
);

export const destroySettingFailure = createAction(
  '[Setting] destroy a Setting Failure',
  props<{ error: any }>()
);
