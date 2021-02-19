import { Action, createReducer, on } from '@ngrx/store';
import { updateSettings } from './settings.actions';
import { initialState, settingsFeatureKey } from './settings.state';
import * as uuid from 'uuid';



const _settingsReducer = createReducer(
  initialState,
  on(updateSettings, (state, action) => {
    return {
      ...state,
      [settingsFeatureKey]: { ...action.data }
    }
  }),

);

export function settingsReducer(state, action) {
  return _settingsReducer(state, action);
}