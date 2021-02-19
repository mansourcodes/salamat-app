import { Action, createReducer, on } from '@ngrx/store';
import { createSetting, destroySetting, updateSetting } from './settings.actions';
import { initialState, settingsFeatureKey } from './settings.state';
import * as uuid from 'uuid';



const _settingsReducer = createReducer(
  initialState,
  on(createSetting, (state, action) => {

    const newItem = { ...action.data };
    newItem._id = uuid.v4();

    return {
      ...state,
      [settingsFeatureKey]: [
        ...state[settingsFeatureKey],
        newItem
      ]
    }

  }),
  on(updateSetting, (state, action) => {

    const updatedItems = state[settingsFeatureKey].map(item => {
      return action.data._id === item._id ? action.data : item;
    })

    return {
      ...state,
      [settingsFeatureKey]: [
        ...updatedItems
      ]
    }
  }),
  on(destroySetting, (state, { id }) => {

    const afterDestroyItems = state[settingsFeatureKey].filter(item => {
      return item._id !== id;
    })

    return {
      ...state,
      [settingsFeatureKey]: [
        ...afterDestroyItems
      ]
    }
  }),
);

export function settingsReducer(state, action) {
  return _settingsReducer(state, action);
}